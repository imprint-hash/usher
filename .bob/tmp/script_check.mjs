
import { computeAccessibleName } from 'https://cdn.jsdelivr.net/npm/dom-accessibility-api@0.7/+esm';

const frame      = document.getElementById('page-frame');
const select     = document.getElementById('page-select');
const btnScan    = document.getElementById('btn-scan');
const btnRead    = document.getElementById('btn-read');
const btnStop    = document.getElementById('btn-stop');
const btnLights  = document.getElementById('btn-lights');
const transcript = document.getElementById('transcript');
const usherCounter = document.getElementById('usher-counter');

let lines = [];      // array of {text, tag, el}
let speakIndex = -1;

// ── Page select ──────────────────────────────────────────────────────────────
select.addEventListener('change', () => {
  frame.src = select.value;
  clearTranscript();
});

// ── Scan ─────────────────────────────────────────────────────────────────────
btnScan.addEventListener('click', () => {
  const doc = frame.contentDocument;
  if (!doc) { alert('Cannot access page — is it loaded?'); return; }
  lines = buildTranscript(doc);
  renderTranscript();
  btnRead.disabled = lines.length === 0;
});

// ── Read aloud ───────────────────────────────────────────────────────────────
btnRead.addEventListener('click', () => {
  if (lines.length === 0) return;
  window.speechSynthesis.cancel();
  speakIndex = -1;
  btnRead.disabled = true;
  btnStop.disabled = false;
  speakNext();
});

btnStop.addEventListener('click', () => {
  window.speechSynthesis.cancel();
  speakIndex = -1;
  btnRead.disabled = false;
  btnStop.disabled = true;
  clearActiveHighlight();
  clearIframeOutline();
  torchStopReading();
});

function speakNext() {
  speakIndex++;
  if (speakIndex >= lines.length) {
    btnRead.disabled = false;
    btnStop.disabled = true;
    clearActiveHighlight();
    clearIframeOutline();
    torchStopReading();
    return;
  }

  const line = lines[speakIndex];
  highlightLine(speakIndex);
  outlineElement(line.el);
  // Move torch to current element during reading
  if (collapseActive) torchMoveTo(speakIndex);

  const u = new SpeechSynthesisUtterance(line.text);
  u.lang = 'en-US';
  u.rate = 1.0;
  const voices = window.speechSynthesis.getVoices();
  const enVoice = voices.find(v => v.lang.startsWith('en'));
  if (enVoice) u.voice = enVoice;

  u.onend = () => speakNext();
  u.onerror = () => speakNext();
  window.speechSynthesis.speak(u);
}

// ── DOM walker ───────────────────────────────────────────────────────────────
const INTERACTIVE_ROLES = new Set(['button','link','checkbox','radio','combobox',
  'listbox','menuitem','menuitemcheckbox','menuitemradio','option','slider',
  'spinbutton','switch','tab','textbox','treeitem']);

/**
 * Build a transcript array from the given document.
 * Each entry: { text: string, tag: string, el: Element }
 * Tags: 'ok' | 'noname' | 'notbtn' | 'filename' | 'unclear' | 'colouronly'
 */
function buildTranscript(doc) {
  const result = [];
  visitNode(doc.body, result, doc);
  return result;
}

function visitNode(root, result, doc) {
  const iter = doc.createNodeIterator(
    root,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode(node) {
        if (isHidden(node)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  const seen = new WeakSet();

  let node;
  while ((node = iter.nextNode())) {
    if (seen.has(node)) continue;

    const tag = node.tagName.toLowerCase();
    const role = getEffectiveRole(node);

    // Headings
    if (/^h[1-6]$/.test(tag)) {
      const level = tag[1];
      const name  = getTextContent(node).trim();
      if (name) {
        result.push({ text: `${name}, heading level ${level}`, tag: 'ok', el: node });
        markDescendantsSeen(node, seen);
      }
      continue;
    }

    // Links
    if (tag === 'a' && node.hasAttribute('href')) {
      const name = computeAccessibleName(node).trim();
      if (!name) {
        result.push({ text: `link`, tag: 'noname', el: node });
      } else if (isUnclearName(name)) {
        result.push({ text: `link, ${name}`, tag: 'unclear', el: node });
      } else {
        result.push({ text: `link, ${name}`, tag: 'ok', el: node });
      }
      markDescendantsSeen(node, seen);
      continue;
    }

    // Buttons (real <button> or role="button")
    if (tag === 'button' || role === 'button') {
      const name = computeAccessibleName(node).trim();
      if (!name) {
        result.push({ text: `button`, tag: 'noname', el: node });
      } else if (isUnclearName(name)) {
        result.push({ text: `button, ${name}`, tag: 'unclear', el: node });
      } else {
        result.push({ text: `button, ${name}`, tag: 'ok', el: node });
      }
      markDescendantsSeen(node, seen);
      continue;
    }

    // Images
    if (tag === 'img') {
      if (node.getAttribute('aria-hidden') === 'true' ||
          node.getAttribute('role') === 'presentation' ||
          node.getAttribute('role') === 'none') continue;
      if (node.hasAttribute('alt') && node.getAttribute('alt') === '') continue;

      const name = computeAccessibleName(node).trim();
      if (name) {
        if (!node.hasAttribute('alt')) {
          const filename = getFilenameFromUrl(node.getAttribute('src') || '');
          result.push({ text: `image, ${filename}`, tag: 'filename', el: node });
        } else {
          result.push({ text: `image, ${name}`, tag: 'ok', el: node });
        }
      } else {
        result.push({ text: `image`, tag: 'noname', el: node });
      }
      continue;
    }

    // Form inputs
    if (tag === 'input' && node.type !== 'hidden') {
      const type = (node.getAttribute('type') || 'text').toLowerCase();
      const name = computeAccessibleName(node).trim();
      let roleLabel = 'edit text';
      if (type === 'checkbox') roleLabel = 'checkbox';
      else if (type === 'radio') roleLabel = 'radio button';
      else if (type === 'email') roleLabel = 'edit text';
      else if (type === 'password') roleLabel = 'password edit text';
      else if (type === 'search') roleLabel = 'search edit text';
      else if (type === 'submit' || type === 'button' || type === 'reset') roleLabel = 'button';

      if (name) {
        result.push({ text: `${roleLabel}, ${name}`, tag: 'ok', el: node });
      } else {
        const ph = node.getAttribute('placeholder');
        if (ph) {
          result.push({ text: `${roleLabel}, ${ph}`, tag: 'noname', el: node });
        } else {
          result.push({ text: `${roleLabel}`, tag: 'noname', el: node });
        }
      }
      continue;
    }

    // textarea
    if (tag === 'textarea') {
      const name = computeAccessibleName(node).trim();
      if (name) {
        result.push({ text: `edit text, ${name}`, tag: 'ok', el: node });
      } else {
        result.push({ text: `edit text`, tag: 'noname', el: node });
      }
      continue;
    }

    // select
    if (tag === 'select') {
      const name = computeAccessibleName(node).trim();
      if (name) {
        result.push({ text: `combo box, ${name}`, tag: 'ok', el: node });
      } else {
        result.push({ text: `combo box`, tag: 'noname', el: node });
      }
      markDescendantsSeen(node, seen);
      continue;
    }

    // Clickable divs / spans — NOT announced as buttons
    if ((tag === 'div' || tag === 'span') && node.hasAttribute('onclick')) {
      const text = getTextContent(node).trim();
      if (text) {
        result.push({ text, tag: 'notbtn', el: node });
        markDescendantsSeen(node, seen);
      }
      continue;
    }

    // ── Colour-only elements ─────────────────────────────────────────────────
    // Fix 1: tightened detector — all conditions must hold simultaneously.
    if ((tag === 'div' || tag === 'span') && isColourOnlyElement(node, doc)) {
      result.push({ text: '(colour only — not announced)', tag: 'colouronly', el: node });
      continue;
    }

    // Plain text blocks
    const TEXT_CONTAINERS = new Set(['p','li','td','th','dt','dd','caption','figcaption',
      'blockquote','cite','q','legend','label','span','div']);
    if (TEXT_CONTAINERS.has(tag)) {
      const directText = getDirectText(node).trim();
      if (directText) {
        result.push({ text: directText, tag: 'ok', el: node });
      }
    }
  }

  return result;
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function isHidden(el) {
  if (el.getAttribute('aria-hidden') === 'true') return true;
  const style = el.ownerDocument.defaultView.getComputedStyle(el);
  if (style.display === 'none' || style.visibility === 'hidden') return true;
  return false;
}

function getEffectiveRole(el) {
  return el.getAttribute('role') || null;
}

function getTextContent(el) {
  return el.textContent || '';
}

function getDirectText(el) {
  let text = '';
  for (const child of el.childNodes) {
    if (child.nodeType === Node.TEXT_NODE) text += child.textContent;
  }
  return text;
}

function markDescendantsSeen(node, seen) {
  const iter = node.ownerDocument.createNodeIterator(node, NodeFilter.SHOW_ELEMENT);
  let n;
  while ((n = iter.nextNode())) seen.add(n);
}

function getFilenameFromUrl(url) {
  try {
    const pathname = new URL(url, window.location.href).pathname;
    const parts = pathname.split('/');
    return parts[parts.length - 1] || url;
  } catch {
    return url;
  }
}

function isUnclearName(name) {
  return /^[\d\s\W]+$/.test(name) && name.trim().length > 0;
}

/**
 * Fix 1 — Tightened colour-only detector.
 * ALL of the following must hold:
 *  a) No text content and no accessible name
 *  b) Both dimensions under 24 px
 *  c) Background colour is NOT transparent, white, or grey (HSL saturation > 30%)
 *  d) Not inside a <button>, <a>, or <img>
 *  e) No role or aria-* attribute of any kind
 *  f) A sibling/ancestor text node that contains the word "status" (case-insensitive)
 */
function isColourOnlyElement(el, doc) {
  // (a) No text content
  if (el.textContent.trim()) return false;
  // (a) No accessible name
  try { if (computeAccessibleName(el).trim()) return false; } catch { return false; }
  // (e) No role or aria attributes
  for (const attr of el.attributes) {
    if (attr.name === 'role' || attr.name.startsWith('aria-')) return false;
  }
  // (b) Both sides must be under 24px
  const rect = el.getBoundingClientRect();
  if (rect.width >= 24 || rect.height >= 24) return false;
  if (rect.width < 4 || rect.height < 4) return false;
  // (c) Must have a non-transparent, non-white/grey background
  const style = doc.defaultView.getComputedStyle(el);
  const bg = style.backgroundColor;
  if (!bg || bg === 'transparent' || bg === 'rgba(0, 0, 0, 0)') return false;
  // Parse rgb/rgba to check saturation
  const m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!m) return false;
  const r = +m[1] / 255, g = +m[2] / 255, b = +m[3] / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const s = max === min ? 0 : (max - min) / (l > 0.5 ? 2 - max - min : max + min);
  if (s <= 0.30) return false; // white/grey — skip
  // (d) Not inside a button, link, or img
  let ancestor = el.parentElement;
  while (ancestor) {
    const t = ancestor.tagName.toLowerCase();
    if (t === 'button' || t === 'a' || t === 'img') return false;
    ancestor = ancestor.parentElement;
  }
  // (f) A nearby text node (parent's text content) must mention "status"
  const parent = el.parentElement;
  if (!parent) return false;
  const parentText = parent.textContent || '';
  if (!/status/i.test(parentText)) return false;
  return true;
}

// ── Render ───────────────────────────────────────────────────────────────────

const TAG_CONFIG = {
  ok:         { label: 'OK',              cls: 'tag-ok' },
  noname:     { label: 'No name',         cls: 'tag-noname' },
  notbtn:     { label: 'Not a button',    cls: 'tag-notbtn' },
  filename:   { label: 'File name only',  cls: 'tag-filename' },
  unclear:    { label: 'Unclear name',    cls: 'tag-unclear' },
  colouronly: { label: 'Colour only',     cls: 'tag-colouronly' },
};

const PROBLEM_TAGS = new Set(['noname','notbtn','filename','unclear','colouronly']);

function renderTranscript() {
  if (lines.length === 0) {
    transcript.innerHTML = '<div class="transcript-empty">No announcements found.</div>';
    return;
  }
  transcript.innerHTML = '';
  lines.forEach((line, i) => {
    const cfg = TAG_CONFIG[line.tag] || TAG_CONFIG.ok;
    const div = document.createElement('div');
    div.className = 't-line';
    div.dataset.index = i;
    div.innerHTML = `<span class="t-text">${escHtml(line.text)}</span>`
                  + `<span class="t-tag ${cfg.cls}">${cfg.label}</span>`;
    div.addEventListener('click', () => activateLine(i));
    transcript.appendChild(div);
  });
}

function clearTranscript() {
  lines = [];
  transcript.innerHTML = '<div class="transcript-empty">Load a page and click "Scan page" to see what a screen reader hears.</div>';
  btnRead.disabled = true;
  btnStop.disabled = true;
  clearIframeOutline();
  usherCounter.textContent = '';
  usherCounter.classList.remove('visible');
}

function activateLine(i) {
  clearActiveHighlight();
  const el = transcript.querySelector(`[data-index="${i}"]`);
  if (el) {
    el.classList.add('active');
    el.scrollIntoView({ block: 'nearest' });
  }
  outlineElement(lines[i].el);
  scrollIntoIframe(lines[i].el);
  // Move torch to clicked line when lights are off
  if (collapseActive) torchMoveTo(i);
}

function highlightLine(i) {
  clearActiveHighlight();
  const el = transcript.querySelector(`[data-index="${i}"]`);
  if (el) {
    el.classList.add('speaking');
    el.scrollIntoView({ block: 'nearest' });
  }
  scrollIntoIframe(lines[i].el);
}

function clearActiveHighlight() {
  transcript.querySelectorAll('.t-line').forEach(el => {
    el.classList.remove('active', 'speaking');
  });
}

// ── iframe interaction ───────────────────────────────────────────────────────

let lastOutlined = null;

function outlineElement(el) {
  if (!el) return;
  if (lastOutlined && lastOutlined !== el) {
    lastOutlined.style.outline = lastOutlined._usherOldOutline || '';
    delete lastOutlined._usherOldOutline;
  }
  el._usherOldOutline = el.style.outline;
  el.style.outline = '3px solid #3b82d4';
  lastOutlined = el;
}

function clearIframeOutline() {
  if (lastOutlined) {
    lastOutlined.style.outline = lastOutlined._usherOldOutline || '';
    delete lastOutlined._usherOldOutline;
    lastOutlined = null;
  }
}

function scrollIntoIframe(el) {
  if (!el) return;
  try { el.scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch {}
}

function escHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── Voices lazy-load ──────────────────────────────────────────────────────────
if (window.speechSynthesis) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.addEventListener('voiceschanged', () => {
    window.speechSynthesis.getVoices();
  });
}

// ════════════════════════════════════════════════════════════════════════════
// ── COLLAPSE / "TURN OFF THE LIGHTS" ────────────────────────────────────────
// ════════════════════════════════════════════════════════════════════════════

let collapseActive = false;

btnLights.addEventListener('click', () => {
  if (!collapseActive) {
    const doc = frame.contentDocument;
    if (!doc) { alert('Cannot access page — is it loaded?'); return; }
    if (lines.length === 0) {
      lines = buildTranscript(doc);
      renderTranscript();
      btnRead.disabled = lines.length === 0;
    }
    collapseActive = true;
    btnLights.textContent = 'Turn the lights back on';
    btnLights.classList.add('lights-off');
    collapse(doc, lines);
  } else {
    collapseActive = false;
    btnLights.textContent = 'Turn off the lights';
    btnLights.classList.remove('lights-off');
    restore(frame.contentDocument);
  }
});

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function boxLabelForLine(line) {
  const t = line.text;
  if (t === 'button') return 'Button';
  if (t === 'link')   return 'Link';
  if (t === 'image')  return 'Image';
  if (t === 'edit text')  return 'Edit text';
  if (t === 'combo box')  return 'Combo box';
  if (t === 'checkbox')   return 'Checkbox';
  if (t.startsWith('button,'))             return 'Button';
  if (t.startsWith('link,'))               return 'Link';
  if (t.startsWith('image,'))              return 'Image';
  if (t.startsWith('edit text,'))          return 'Edit text';
  if (t.startsWith('search edit text'))    return 'Edit text';
  if (t.startsWith('password edit text'))  return 'Edit text';
  if (t.startsWith('combo box,'))          return 'Combo box';
  return t;
}

function isProblemLine(line) {
  return PROBLEM_TAGS.has(line.tag);
}

// ════════════════════════════════════════════════════════════════════════════
// ── collapse(doc, transcriptLines) ──────────────────────────────────────────
// ════════════════════════════════════════════════════════════════════════════
function collapse(doc, transcriptLines) {
  const existing = doc.getElementById('__usher_overlay__');
  if (existing) existing.remove();

  const reduced = prefersReducedMotion();
  const problemCount = transcriptLines.filter(l => isProblemLine(l)).length;
  const total = transcriptLines.length;

  // ── Overlay root (fixed, full viewport) ──────────────────────────────────
  const overlay = doc.createElement('div');
  overlay.id = '__usher_overlay__';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:999999;pointer-events:none;';

  // ── Fix 3: Dark backdrop covers the WHOLE document (absolute, full scroll
  //    height) so nothing beige or white shows below the fold. ──────────────
  const backdrop = doc.createElement('div');
  backdrop.id = '__usher_backdrop__';
  backdrop.style.cssText = `
    position: absolute;
    left: 0; top: 0;
    width: 100%;
    height: ${Math.max(doc.documentElement.scrollHeight, doc.documentElement.clientHeight)}px;
    background: #0b0b0c;
    opacity: ${reduced ? '0.94' : '0'};
    z-index: 2;
    transition: ${reduced ? 'none' : 'opacity 0.7s ease'};
  `;

  // ── Torch layer: sits between backdrop and boxes (z-index 3) ─────────────
  const torchLayer = doc.createElement('div');
  torchLayer.id = '__usher_torch__';
  torchLayer.style.cssText = `
    position: fixed; inset: 0; z-index: 3; pointer-events: none;
    opacity: 0;
  `;

  // Torch spotlight canvas (drawn via box-shadow / radial-gradient on an
  // absolutely-positioned element updated in JS)
  const torchSpot = doc.createElement('div');
  torchSpot.id = '__usher_spot__';
  torchSpot.style.cssText = `
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
  `;

  // Cone of light: a narrow triangle from bottom-centre up to the spot.
  // Rendered as a radial-gradient pseudo-cone using clip-path on a div.
  const torchCone = doc.createElement('div');
  torchCone.id = '__usher_cone__';
  torchCone.style.cssText = `
    position: fixed;
    bottom: 0; left: 50%; transform: translateX(-50%);
    width: 0; height: 0;
    pointer-events: none;
    opacity: ${reduced ? '0' : '1'};
  `;

  torchLayer.appendChild(torchCone);
  torchLayer.appendChild(torchSpot);

  // ── Boxes container ───────────────────────────────────────────────────────
  const boxContainer = doc.createElement('div');
  boxContainer.id = '__usher_boxes__';
  boxContainer.style.cssText = `
    position: fixed; inset: 0; z-index: 4; pointer-events: none;
    overflow: hidden;
  `;

  overlay.appendChild(backdrop);
  overlay.appendChild(torchLayer);
  overlay.appendChild(boxContainer);
  doc.documentElement.appendChild(overlay);

  // Dark background on <html> so nothing shows through the backdrop
  overlay._usherOrigHtmlBg = doc.documentElement.style.background;
  doc.documentElement.style.background = '#0b0b0c';

  // Greyscale + fade body content
  doc.body.style.transition = reduced ? 'none' : 'filter 0.6s ease 0.1s';
  doc.body.style.filter = 'none';
  const imgs = doc.querySelectorAll('img');
  imgs.forEach(img => { img.style.transition = reduced ? 'none' : 'opacity 0.8s ease'; });

  if (reduced) {
    doc.body.style.filter = 'grayscale(1) opacity(0.12)';
    imgs.forEach(img => { img.style.opacity = '0'; });
    backdrop.style.opacity = '0.94';
    drawBoxes(doc, transcriptLines, boxContainer, problemCount, total, reduced);
  } else {
    requestAnimationFrame(() => {
      doc.body.style.filter = 'grayscale(1)';
      imgs.forEach(img => { img.style.opacity = '0'; });
    });
    setTimeout(() => {
      doc.body.style.transition = 'filter 0.6s ease';
      doc.body.style.filter = 'grayscale(1) opacity(0.12)';
      backdrop.style.opacity = '0.94';
    }, 650);
    setTimeout(() => {
      drawBoxes(doc, transcriptLines, boxContainer, problemCount, total, reduced);
    }, 1250);
  }
}

// ════════════════════════════════════════════════════════════════════════════
// ── drawBoxes ───────────────────────────────────────────────────────────────
// ════════════════════════════════════════════════════════════════════════════

// boxMap: index → DOM box element (only entries that were actually rendered)
let boxMap = [];

function drawBoxes(doc, transcriptLines, container, problemCount, total, reduced) {
  const STAGGER = reduced ? 0 : 40;
  let visibleProblemCount = 0;
  boxMap = [];

  const MAX_VOICE = 10;
  const voices = window.speechSynthesis.getVoices();
  const enVoice = voices.find(v => v.lang.startsWith('en'));

  function speakLine(line) {
    const u = new SpeechSynthesisUtterance(line.text);
    u.lang = 'en-US'; u.rate = 1.1;
    if (enVoice) u.voice = enVoice;
    window.speechSynthesis.speak(u);
  }

  // Fix 4: sort by area descending so larger boxes are drawn first (appended
  // earlier in the DOM = painted below smaller boxes).
  const indexed = transcriptLines.map((line, i) => ({ line, i }));
  const byArea = [...indexed].sort((a, b) => {
    const ra = a.line.el ? a.line.el.getBoundingClientRect() : null;
    const rb = b.line.el ? b.line.el.getBoundingClientRect() : null;
    const areaA = ra ? ra.width * ra.height : 0;
    const areaB = rb ? rb.width * rb.height : 0;
    return areaB - areaA; // largest first
  });

  // We still stagger by original index for reading order, but render order
  // is by area.  Use original-index timing: delay = STAGGER * i.

  // Pill-collision tracking: remember the right edge of the last tiny pill
  // drawn (in viewport px) so we can alternate above/below when they overlap.
  let lastTinyRight = -Infinity;
  let lastTinyAbove = true; // side used by the previous tiny pill

  byArea.forEach(({ line, i }) => {
    const delay = STAGGER * i;

    setTimeout(() => {
      if (!doc.getElementById('__usher_overlay__')) return;

      const el = line.el;
      if (!el || !el.isConnected) return;

      const rawRect = el.getBoundingClientRect();

      // Fix 4: Enlarge tiny elements to at least 36×36 centred on the element.
      const MIN_BOX = 36;
      let bw = rawRect.width, bh = rawRect.height;
      let bl = rawRect.left,  bt = rawRect.top;
      if (bw < MIN_BOX) { bl -= (MIN_BOX - bw) / 2; bw = MIN_BOX; }
      if (bh < MIN_BOX) { bt -= (MIN_BOX - bh) / 2; bh = MIN_BOX; }
      // No clamping: boxes sit at their element's exact getBoundingClientRect()
      // position. The container has overflow:hidden so off-screen boxes are
      // simply invisible until the user scrolls them into view.

      const isBroken = isProblemLine(line);
      const isNothing = (line.tag === 'notbtn');

      const box = doc.createElement('div');
      box.dataset.usherIndex = i;
      box.style.cssText = `
        position: fixed;
        left: ${bl}px; top: ${bt}px;
        width: ${bw}px; height: ${bh}px;
        background: ${isBroken ? '#3a3a3a' : '#1e293b'};
        border: ${isBroken ? '1.5px solid #ef4444' : '1px solid #334155'};
        border-radius: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        opacity: ${reduced ? '1' : '0'};
        transition: ${reduced ? 'none' : 'opacity 0.18s ease'};
        pointer-events: none;
        box-sizing: border-box;
      `;

      const labelText = isNothing ? '(nothing — not a button)'
        : isBroken ? boxLabelForLine(line)
        : line.text;

      // Tiny box: if the box is narrower than 70px, show a pill label
      // outside (above or below) with a thin connector line instead of
      // trying to squeeze the text inside the box.
      const TINY_THRESHOLD = 70;
      const isTiny = bw < TINY_THRESHOLD;

      if (isTiny) {
        // Remove overflow:hidden so the connector line can escape the box
        box.style.overflow = 'visible';
        box.style.alignItems = 'center';
        box.style.justifyContent = 'center';

        // Decide pill side: alternate above/below when this pill's horizontal
        // extent overlaps the previous tiny pill (to avoid label collisions).
        const PILL_H = 22;
        const CONNECTOR_H = 6;
        const pillCentreX = bl + bw / 2;
        // Estimate pill half-width from ~6px per char at 10px bold + 3px padding each side
        const estPillHalfW = Math.max(labelText.length * 6 + 6, 20);
        const pillLeft  = pillCentreX - estPillHalfW;
        const pillRight = pillCentreX + estPillHalfW;
        const overlaps = pillLeft < lastTinyRight;
        let pillAbove;
        if (overlaps) {
          // Flip from the previous pill's side
          pillAbove = !lastTinyAbove;
        } else {
          // No overlap: default above unless too close to top
          pillAbove = bt >= PILL_H + CONNECTOR_H + 4;
        }
        lastTinyRight = pillRight;
        lastTinyAbove = pillAbove;

        // Connector line (vertical, 1px wide, thin)
        const connector = doc.createElement('div');
        connector.style.cssText = `
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: ${CONNECTOR_H}px;
          background: ${isBroken ? '#ef4444' : '#64748b'};
          pointer-events: none;
          ${pillAbove
            ? `bottom: ${bh}px;`
            : `top: ${bh}px;`}
        `;

        // Pill label — 10px bold, 3px horizontal padding, never truncated
        const pill = doc.createElement('span');
        pill.style.cssText = `
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          ${pillAbove
            ? `bottom: ${bh + CONNECTOR_H}px;`
            : `top: ${bh + CONNECTOR_H}px;`}
          white-space: nowrap;
          font-family: -apple-system, "Segoe UI", system-ui, sans-serif;
          font-size: 10px;
          font-weight: 700;
          color: #1f2328;
          background: ${isBroken ? '#fca5a5' : '#e2e8f0'};
          border: 1px solid ${isBroken ? '#ef4444' : '#94a3b8'};
          border-radius: 4px;
          padding: 2px 3px;
          line-height: 1.4;
          pointer-events: none;
          z-index: 1;
        `;
        pill.textContent = labelText;

        box.appendChild(connector);
        box.appendChild(pill);
      } else {
        // Normal label inside the box
        const isLarge = bw > 400 && bh > 250;
        const baseFontSize = isBroken
          ? Math.min(Math.max(bh * 0.4, 11), 22)
          : Math.min(10, bh * 0.6);
        const fontSize = Math.max(9, Math.min(baseFontSize, bw * 0.35));

        const label = doc.createElement('span');
        if (isLarge) {
          // Large box (hero images etc.): pin label to top-left corner so it
          // cannot collide with smaller boxes drawn on top of it.
          box.style.alignItems = 'flex-start';
          box.style.justifyContent = 'flex-start';
          label.style.cssText = `
            position: absolute;
            top: 12px;
            left: 12px;
            font-family: -apple-system, "Segoe UI", system-ui, sans-serif;
            font-size: ${fontSize}px;
            font-weight: ${isBroken ? '700' : '400'};
            color: ${isBroken ? '#f9fafb' : '#94a3b8'};
            line-height: 1.2;
            pointer-events: none;
            letter-spacing: ${isBroken ? '0.05em' : '0'};
            text-transform: ${isBroken ? 'uppercase' : 'none'};
          `;
        } else {
          label.style.cssText = `
            font-family: -apple-system, "Segoe UI", system-ui, sans-serif;
            font-size: ${fontSize}px;
            font-weight: ${isBroken ? '700' : '400'};
            color: ${isBroken ? '#f9fafb' : '#94a3b8'};
            text-align: center;
            padding: 2px 4px;
            line-height: 1.2;
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            letter-spacing: ${isBroken ? '0.05em' : '0'};
            text-transform: ${isBroken ? 'uppercase' : 'none'};
          `;
        }
        label.textContent = labelText;
        box.appendChild(label);
      }

      container.appendChild(box);
      boxMap[i] = box;

      if (!reduced) requestAnimationFrame(() => { box.style.opacity = '1'; });

      if (isBroken) visibleProblemCount++;

      // Fix 2: update topbar counter instead of iframe banner
      updateCounter(visibleProblemCount, total);

      if (i < MAX_VOICE && !reduced) speakLine(line);
    }, delay);
  });

  // After all boxes appear, land the torch on item 0
  const totalDelay = STAGGER * (transcriptLines.length - 1) + 200;
  setTimeout(() => {
    if (!doc.getElementById('__usher_overlay__')) return;
    const torchLayer = doc.getElementById('__usher_torch__');
    if (torchLayer) {
      torchLayer.style.opacity = '1';
      torchMoveTo(0);
    }
    torchStartFlicker();
  }, reduced ? 50 : totalDelay);

  scheduleBoxAlignment(doc, container, transcriptLines);
}

// ── Counter (Fix 2: lives in topbar, not iframe) ─────────────────────────────
function updateCounter(problems, total) {
  usherCounter.textContent = `${problems} of ${total} items have issues`;
  usherCounter.classList.add('visible');
}

// ════════════════════════════════════════════════════════════════════════════
// ── TORCH ────────────────────────────────────────────────────────────────────
// ════════════════════════════════════════════════════════════════════════════

let torchIndex = 0;         // current lit item index
let flickerRAF = null;      // requestAnimationFrame handle for flicker loop
let flickerReading = false; // true while speakNext is active

/**
 * Move the torch to transcript item at index i.
 * Glides (CSS transition) unless reduced-motion, in which case it jumps.
 */
function torchMoveTo(idx) {
  if (!collapseActive) return;
  const doc = frame.contentDocument;
  if (!doc) return;

  const line = lines[idx];
  if (!line || !line.el) return;

  torchIndex = idx;

  const el = line.el;
  const rawRect = el.getBoundingClientRect();
  const vpH = doc.defaultView.innerHeight;
  const vpW = doc.defaultView.innerWidth;

  // Centre of the element in viewport coordinates
  const cx = rawRect.left + rawRect.width  / 2;
  const cy = rawRect.top  + rawRect.height / 2;

  // Spotlight radius: element size + 60px padding, min 70px → min diam 140px
  const radius = Math.max(70,
    Math.max(rawRect.width, rawRect.height) / 2 + 60);
  const diam = radius * 2;

  const reduced = prefersReducedMotion();

  // ── Position the spotlight div ───────────────────────────────────────────
  const spot = doc.getElementById('__usher_spot__');
  if (spot) {
    const transition = reduced ? 'none' : 'left 0.35s ease, top 0.35s ease, width 0.35s ease, height 0.35s ease';
    spot.style.cssText = `
      position: absolute;
      width: ${diam}px; height: ${diam}px;
      left: ${cx}px; top: ${cy}px;
      border-radius: 50%;
      pointer-events: none;
      transform: translate(-50%, -50%);
      background: radial-gradient(circle, #ffe2b0 0%, rgba(255,200,100,0.55) 25%, rgba(255,160,60,0.18) 55%, transparent 75%);
      transition: ${transition};
    `;
  }

  // ── Cone of light ────────────────────────────────────────────────────────
  // A triangle from the bottom-centre of the viewport up to (cx, cy).
  // Rendered with clip-path on a radial-gradient div.
  const cone = doc.getElementById('__usher_cone__');
  if (cone && !reduced) {
    const coneWidth = radius * 1.2;
    const coneHeight = vpH - cy;
    cone.style.cssText = `
      position: fixed;
      pointer-events: none;
      left: ${cx - coneWidth}px;
      top: ${cy}px;
      width: ${coneWidth * 2}px;
      height: ${coneHeight}px;
      background: radial-gradient(ellipse 100% 100% at 50% 100%,
        rgba(255,220,120,0.08) 0%, transparent 70%);
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      transition: ${reduced ? 'none' : 'left 0.35s ease, top 0.35s ease, width 0.35s ease, height 0.35s ease'};
    `;
  } else if (cone) {
    cone.style.opacity = '0';
  }

  // ── Dim all boxes except the torch one ───────────────────────────────────
  dimBoxes(idx);

  // ── Auto-scroll iframe to keep lit element visible ───────────────────────
  if (!reduced) {
    try { el.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); } catch {}
  } else {
    try { el.scrollIntoView({ block: 'nearest' }); } catch {}
  }

  // Restart flicker on the new position
  if (!flickerReading) torchStartFlicker();
}

/**
 * Dim all boxes to ~55% opacity, restore the torched one to full brightness.
 */
function dimBoxes(litIdx) {
  const doc = frame.contentDocument;
  if (!doc) return;
  const container = doc.getElementById('__usher_boxes__');
  if (!container) return;
  for (const box of container.children) {
    const bi = Number(box.dataset.usherIndex);
    box.style.opacity = (bi === litIdx) ? '1' : '0.55';
  }
}

/**
 * Very slow brightness flicker on the spotlight (3-4% variation).
 * Uses requestAnimationFrame running in the *parent* window.
 * Disabled when prefers-reduced-motion.
 */
function torchStartFlicker() {
  if (prefersReducedMotion()) return;
  if (flickerRAF) cancelAnimationFrame(flickerRAF);

  const doc = frame.contentDocument;
  if (!doc) return;
  const spot = doc.getElementById('__usher_spot__');
  if (!spot) return;

  let t = 0;
  function flicker() {
    if (!collapseActive) return;
    t += 0.004; // very slow cycle
    // 3-4% variation: base brightness 1.0, ± 0.035 using two offset sines
    const bright = 1.0 + 0.02 * Math.sin(t) + 0.015 * Math.sin(t * 1.7 + 1.2);
    spot.style.filter = `brightness(${bright.toFixed(4)})`;
    flickerRAF = requestAnimationFrame(flicker);
  }
  flickerRAF = requestAnimationFrame(flicker);
}

function torchStopReading() {
  flickerReading = false;
  // Resume flicker now that reading has stopped
  torchStartFlicker();
}

// ── Box + torch realignment on scroll / resize ───────────────────────────────
function scheduleBoxAlignment(doc, container, transcriptLines) {
  // torchReposition: update spotlight/cone position without triggering a scroll.
  // Separated from torchMoveTo to avoid scroll→realign→scrollIntoView→scroll loop.
  function repositionTorch() {
    if (!collapseActive) return;
    const line = transcriptLines[torchIndex];
    if (!line || !line.el) return;
    const rawRect = line.el.getBoundingClientRect();
    const cx = rawRect.left + rawRect.width  / 2;
    const cy = rawRect.top  + rawRect.height / 2;
    const radius = Math.max(70, Math.max(rawRect.width, rawRect.height) / 2 + 60);
    const diam = radius * 2;
    const reduced = prefersReducedMotion();
    const vpH = doc.defaultView.innerHeight;

    const spot = doc.getElementById('__usher_spot__');
    if (spot) {
      spot.style.left   = cx + 'px';
      spot.style.top    = cy + 'px';
      spot.style.width  = diam + 'px';
      spot.style.height = diam + 'px';
    }
    const cone = doc.getElementById('__usher_cone__');
    if (cone && !reduced) {
      const coneWidth = radius * 1.2;
      const coneHeight = vpH - cy;
      cone.style.left   = (cx - coneWidth) + 'px';
      cone.style.top    = cy + 'px';
      cone.style.width  = (coneWidth * 2) + 'px';
      cone.style.height = coneHeight + 'px';
    }
  }

  function realign() {
    // Update backdrop height (Fix 3: keep covering full scroll height)
    const backdrop = doc.getElementById('__usher_backdrop__');
    if (backdrop) {
      backdrop.style.height =
        Math.max(doc.documentElement.scrollHeight, doc.documentElement.clientHeight) + 'px';
    }

    // Realign boxes
    for (const box of container.children) {
      const idx = Number(box.dataset.usherIndex);
      const line = transcriptLines[idx];
      if (!line || !line.el || !line.el.isConnected) continue;

      const rawRect = line.el.getBoundingClientRect();
      const MIN_BOX = 36;
      let bw = rawRect.width, bh = rawRect.height;
      let bl = rawRect.left,  bt = rawRect.top;
      if (bw < MIN_BOX) { bl -= (MIN_BOX - bw) / 2; bw = MIN_BOX; }
      if (bh < MIN_BOX) { bt -= (MIN_BOX - bh) / 2; bh = MIN_BOX; }
      // No clamping — exact element position, clipped by overflow:hidden on container.

      box.style.left = bl + 'px';
      box.style.top  = bt + 'px';
      box.style.width  = bw + 'px';
      box.style.height = bh + 'px';
    }

    // Reposition torch (no scroll — avoids feedback loop)
    repositionTorch();
  }

  doc.addEventListener('scroll', realign, { passive: true });
  const win = doc.defaultView;
  if (win) win.addEventListener('resize', realign, { passive: true });

  const overlay = doc.getElementById('__usher_overlay__');
  if (overlay) {
    overlay._usherScrollCleanup = () => {
      doc.removeEventListener('scroll', realign);
      if (win) win.removeEventListener('resize', realign);
    };
  }
}

// ── restore(doc) ─────────────────────────────────────────────────────────────
function restore(doc) {
  if (!doc) return;
  window.speechSynthesis.cancel();

  // Stop flicker
  if (flickerRAF) { cancelAnimationFrame(flickerRAF); flickerRAF = null; }
  flickerReading = false;

  // Hide topbar counter
  usherCounter.textContent = '';
  usherCounter.classList.remove('visible');

  const overlay = doc.getElementById('__usher_overlay__');
  if (overlay) {
    if (overlay._usherScrollCleanup) overlay._usherScrollCleanup();
    const reduced = prefersReducedMotion();
    const origHtmlBg = overlay._usherOrigHtmlBg ?? '';
    if (reduced) {
      overlay.remove();
      doc.documentElement.style.background = origHtmlBg;
    } else {
      overlay.style.transition = 'opacity 0.5s ease';
      overlay.style.opacity = '0';
      setTimeout(() => {
        overlay.remove();
        doc.documentElement.style.background = origHtmlBg;
      }, 520);
    }
  }

  doc.body.style.transition = prefersReducedMotion() ? 'none' : 'filter 0.5s ease';
  doc.body.style.filter = '';

  doc.querySelectorAll('img').forEach(img => {
    img.style.transition = prefersReducedMotion() ? 'none' : 'opacity 0.5s ease';
    img.style.opacity = '';
  });

  if (!prefersReducedMotion()) {
    setTimeout(() => {
      doc.body.style.transition = '';
      doc.querySelectorAll('img').forEach(img => { img.style.transition = ''; });
    }, 550);
  } else {
    doc.body.style.transition = '';
    doc.querySelectorAll('img').forEach(img => { img.style.transition = ''; });
  }
}

// ── morphTo stub ─────────────────────────────────────────────────────────────
/**
 * STUB — to be implemented in a future task.
 * @param {Document} doc
 * @param {Array} beforeTranscript
 * @param {Array} afterTranscript
 */
function morphTo(doc, beforeTranscript, afterTranscript) {
  // TODO: implement morph animation
}

