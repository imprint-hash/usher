# TASK 9 for Usher: final polish before judges use it. app/index.html and the root index.html only.

1. Screen-reader wording order: real screen readers say the name first, then the role: "Search, button", "Brightwater, link", "Email address, edit text". Change every transcript, caption and label from "button, Search" to "Search, button" (role last). Unnamed items stay as just "button", "link", "image".
2. First impression: judges will open the link cold. On load, automatically scan the page so the transcript panel is filled immediately (no empty "click Scan page" state). Show a slim hint strip under the top bar: "Press Turn off the lights to see what a blind user gets, or Try it blind to hear it yourself." with a close button.
3. Page title "Usher — your app, in the dark". Add a favicon (a simple inline SVG torch or circle of warm light).
4. The root index.html (https://imprint-hash.github.io/usher/) must be a proper landing: the Usher wordmark, the line "Your app, in the dark.", one sentence: "See and hear your web page the way a blind user does, then let IBM Bob fix it — and check the fix with an independent tool.", a big button "Open Usher" -> app/, and small links to the GitHub repo (https://github.com/imprint-hash/usher) and the fix report (demo/fixed/FIXES.md on GitHub). Dark, matching the app.
5. Edge clipping: label pills near the left or right edge of the page (e.g. "(colour only — not announced)") must be nudged inward so they are never cut off.
6. Check nothing else breaks: lights off, torch, morph, axe score, Try it blind on both pages.

List what you changed.

---

**Status:** active  **Date:** 2026-09-25

---

### 👤 User

TASK 9 for Usher: final polish before judges use it. app/index.html and the root index.html only.

1. Screen-reader wording order: real screen readers say the name first, then the role: "Search, button", "Brightwater, link", "Email address, edit text". Change every transcript, caption and label from "button, Search" to "Search, button" (role last). Unnamed items stay as just "button", "link", "image".
2. First impression: judges will open the link cold. On load, automatically scan the page so the transcript panel is filled immediately (no empty "click Scan page" state). Show a slim hint strip under the top bar: "Press Turn off the lights to see what a blind user gets, or Try it blind to hear it yourself." with a close button.
3. Page title "Usher — your app, in the dark". Add a favicon (a simple inline SVG torch or circle of warm light).
4. The root index.html (https://imprint-hash.github.io/usher/) must be a proper landing: the Usher wordmark, the line "Your app, in the dark.", one sentence: "See and hear your web page the way a blind user does, then let IBM Bob fix it — and check the fix with an independent tool.", a big button "Open Usher" -> app/, and small links to the GitHub repo (https://github.com/imprint-hash/usher) and the fix report (demo/fixed/FIXES.md on GitHub). Dark, matching the app.
5. Edge clipping: label pills near the left or right edge of the page (e.g. "(colour only — not announced)") must be nudged inward so they are never cut off.
6. Check nothing else breaks: lights off, torch, morph, axe score, Try it blind on both pages.

List what you changed.

---

### 🤖 Assistant

> 🔧 called: update_todo_list



> 🔧 **update_todo_list** — 
[-] Read app/index.html and root index.html to understand current structure
[ ] Fix 1: Screen-reader wording order (name first, role last) in transcripts/captions/labels
[ ] Fix 2: Auto-scan on load + hint strip under top bar
[ ] Fix 3: Page title and favicon (inline SVG torch)
[ ] Fix 4: Root index.html proper landing page
[ ] Fix 5: Edge clipping for label pills
[ ] Fix 6: Verify nothing breaks (review logic for lights off, torch, morph, axe, Try it blind)


### 🤖 Assistant

> 🔧 called: read_file, read_file



> 🔧 **read_file** — index.html

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file

Now let me read the full app/index.html to understand the JS in detail:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file



> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file



> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file



> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file



> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file



> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file



> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file



> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file



> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: update_todo_list

Now I have a complete picture. Let me plan all the changes:

> 🔧 **update_todo_list** — 
[x] Read app/index.html and root index.html to understand current structure
[-] Fix 1: Screen-reader wording order (name first, role last) in transcripts/captions/labels
[ ] Fix 2: Auto-scan on load + hint strip under top bar
[ ] Fix 3: Page title and favicon (inline SVG torch)
[ ] Fix 4: Root index.html proper landing page
[ ] Fix 5: Edge clipping for label pills
[ ] Fix 6: Verify nothing breaks (review logic for lights off, torch, morph, axe, Try it blind)


### 🤖 Assistant

> 🔧 called: apply_diff

Now I'll make all the changes to `app/index.html`. The fixes are:

**Fix 1 - Name first, role last:** Change `button, Name` → `Name, button`, `link, Name` → `Name, link`, `image, Name` → `Name, image`, `edit text, Name` → `Name, edit text`, `combo box, Name` → `Name, combo box`, etc. Also fix `boxLabelForLine` prefix checks, `spokenTextForEl` fallback, and `lineRole` role-detection prefixes.

**Fix 2 - Auto-scan + hint strip:** Add hint HTML after topbar, auto-run scan on `frame load`.

**Fix 3 - Page title + favicon.**

**Fix 5 - Edge clipping:** Clamp pill `left` position so pills stay inside viewport.

> 🔧 **apply_diff** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file

The second block failed. Let me read the current CSS end section to apply it correctly:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: apply_diff



> 🔧 **apply_diff** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file

Now fix the transcript wording order (name first, role last) and auto-scan. Let me find the exact line numbers for the JS sections:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file



> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: apply_diff

Now I have all the line numbers needed. Let me apply all Fix 1 changes (wording order) at once:

> 🔧 **apply_diff** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file

Now fix `boxLabelForLine` (which uses prefix checks on the old format) and `lineRole` and `spokenTextForEl`:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file



> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: apply_diff



> 🔧 **apply_diff** — <<<<<<< SEARCH
:start_line:1001
-------
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
=======
function boxLabelForLine(line) {
  const t = line.text;
  if (t === 'button') return 'Button';
  if (t === 'link')   return 'Link';
  if (t === 'image')  return 'Image';
  if (t === 'edit text')  return 'Edit text';
  if (t === 'combo box')  return 'Combo box';
  if (t === 'checkbox')   return 'Checkbox';
  // New format: "Name, role" — role is the last word/phrase after the final comma
  if (t.endsWith(', button'))             return 'Button';
  if (t.endsWith(', link'))               return 'Link';
  if (t.endsWith(', image'))              return 'Image';
  if (t.endsWith(', edit text'))          return 'Edit text';
  if (t.endsWith(', search edit text'))   return 'Edit text';
  if (t.endsWith(', password edit text')) return 'Edit text';
  if (t.endsWith(', combo box'))          return 'Combo box';
  if (t.endsWith(', checkbox'))           return 'Checkbox';
  if (t.endsWith(', radio button'))       return 'Radio button';
  return t;
}
>>>>>>> REPLACE

### 🤖 Assistant

> 🔧 called: read_file

Now fix `lineRole` (used for morph matching) and `spokenTextForEl` (used for blind mode):

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file



> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: apply_diff



> 🔧 **apply_diff** — <<<<<<< SEARCH
:start_line:1858
-------
function lineRole(line) {
  const t = line.text;
  if (t === 'button' || t.startsWith('button,')) return 'button';
  if (t === 'link'   || t.startsWith('link,'))   return 'link';
  if (t === 'image'  || t.startsWith('image,'))  return 'image';
  if (t.includes('edit text')) return 'input';
  if (t.includes('combo box')) return 'select';
  if (t.includes('heading level')) return 'heading';
  return 'text';
}
=======
function lineRole(line) {
  const t = line.text;
  // New format: "Name, role" — check both standalone and suffixed forms
  if (t === 'button' || t.endsWith(', button')) return 'button';
  if (t === 'link'   || t.endsWith(', link'))   return 'link';
  if (t === 'image'  || t.endsWith(', image'))  return 'image';
  if (t.includes('edit text')) return 'input';
  if (t.includes('combo box')) return 'select';
  if (t.includes('heading level')) return 'heading';
  return 'text';
}
>>>>>>> REPLACE

<<<<<<< SEARCH
:start_line:2347
-------
  if (tag === 'button' || role === 'button') {
    const name = computeAccessibleName(el).trim();
    return name ? `button, ${name}` : 'button';
  }
  if (tag === 'a' && el.hasAttribute('href')) {
    const name = computeAccessibleName(el).trim();
    return name ? `link, ${name}` : 'link';
  }
  if (tag === 'input') {
    const name = computeAccessibleName(el).trim();
    const type = (el.getAttribute('type') || 'text').toLowerCase();
    const roleLabel = type === 'search' ? 'search edit text'
      : type === 'password' ? 'password edit text'
      : type === 'checkbox' ? 'checkbox'
      : type === 'radio'    ? 'radio button'
      : (type === 'submit' || type === 'button' || type === 'reset') ? 'button'
      : 'edit text';
    return name ? `${roleLabel}, ${name}` : roleLabel;
  }
  if (tag === 'select') {
    const name = computeAccessibleName(el).trim();
    return name ? `combo box, ${name}` : 'combo box';
  }
  if (tag === 'textarea') {
    const name = computeAccessibleName(el).trim();
    return name ? `edit text, ${name}` : 'edit text';
  }
=======
  if (tag === 'button' || role === 'button') {
    const name = computeAccessibleName(el).trim();
    return name ? `${name}, button` : 'button';
  }
  if (tag === 'a' && el.hasAttribute('href')) {
    const name = computeAccessibleName(el).trim();
    return name ? `${name}, link` : 'link';
  }
  if (tag === 'input') {
    const name = computeAccessibleName(el).trim();
    const type = (el.getAttribute('type') || 'text').toLowerCase();
    const roleLabel = type === 'search' ? 'search edit text'
      : type === 'password' ? 'password edit text'
      : type === 'checkbox' ? 'checkbox'
      : type === 'radio'    ? 'radio button'
      : (type === 'submit' || type === 'button' || type === 'reset') ? 'button'
      : 'edit text';
    return name ? `${name}, ${roleLabel}` : roleLabel;
  }
  if (tag === 'select') {
    const name = computeAccessibleName(el).trim();
    return name ? `${name}, combo box` : 'combo box';
  }
  if (tag === 'textarea') {
    const name = computeAccessibleName(el).trim();
    return name ? `${name}, edit text` : 'edit text';
  }
>>>>>>> REPLACE

### 🤖 Assistant

> 🔧 called: read_file

Now add the auto-scan on load and hint strip close button. Let me find the current `frame.addEventListener('load'...` section:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: apply_diff



> 🔧 **apply_diff** — <<<<<<< SEARCH
:start_line:1750
-------
// Run axe whenever the iframe finishes loading
frame.addEventListener('load', () => {
  const doc = frame.contentDocument;
  if (!doc || !doc.body) return;
  runAxe(doc).then(result => {
    showAxeScore(result);
  }).catch(() => {
    hideAxeScore();
  });
});
=======
// Run axe + auto-scan whenever the iframe finishes loading
frame.addEventListener('load', () => {
  const doc = frame.contentDocument;
  if (!doc || !doc.body) return;

  // Auto-scan: fill the transcript immediately so judges see results on load
  if (!collapseActive && !morphInProgress) {
    lines = buildTranscript(doc);
    renderTranscript();
    btnRead.disabled = lines.length === 0;
  }

  runAxe(doc).then(result => {
    showAxeScore(result);
  }).catch(() => {
    hideAxeScore();
  });
});

// Hint strip close
document.getElementById('hint-close').addEventListener('click', () => {
  document.getElementById('hint-strip').classList.add('hidden');
});
>>>>>>> REPLACE

### 🤖 Assistant

> 🔧 called: read_file

Now fix **Fix 5 - Edge clipping for label pills**. The pill uses `left: 50%; transform: translateX(-50%)` relative to the box, so the pill can go off-screen. I need to clamp the pill's horizontal position. The fix: compute a `clampedLeft` in pixels relative to the box's parent (the container is `position:fixed;inset:0` so viewport coords), then set `left` in absolute pixels with `transform: none`. Let me look at the pill positioning code again:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: apply_diff

The pill uses `position: absolute; left: 50%; transform: translateX(-50%)` which centres it on the box. But `bl` (box left in viewport coords) is already known. So the pill's estimated viewport left edge = `bl + bw/2 - estPillHalfW`. I need to clamp this. The cleanest fix is to switch from the percentage + transform approach to an explicit clamped offset from the box edge.

The box is `position: fixed; left: ${bl}px`. The pill is `position: absolute` inside the box. So pill's `left` in absolute terms (within the box, which itself is at `bl` in the viewport):
- Unclamped viewport left of pill = `bl + bw/2 - estPillHalfW`  
- Clamped viewport left = `clamp(4, pillViewLeft, viewportWidth - pillWidth - 4)`
- Pill's `left` attribute (relative to box) = `clampedViewLeft - bl`

> 🔧 **apply_diff** — <<<<<<< SEARCH
:start_line:1257
-------
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
=======
        // Fix 5: clamp pill so it never goes off the left or right edge.
        // estPillHalfW already computed above. Convert to a box-relative `left`
        // (pill is position:absolute inside the box which is position:fixed at bl).
        const vpW = doc.defaultView ? doc.defaultView.innerWidth : 1200;
        const pillViewLeft = pillCentreX - estPillHalfW;
        const pillViewRight = pillCentreX + estPillHalfW;
        const EDGE_PAD = 6;
        let pillViewLeftClamped = pillViewLeft;
        if (pillViewLeft < EDGE_PAD) pillViewLeftClamped = EDGE_PAD;
        if (pillViewRight > vpW - EDGE_PAD) pillViewLeftClamped = vpW - EDGE_PAD - estPillHalfW * 2;
        const pillBoxLeft = pillViewLeftClamped - bl; // relative to box

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
          left: ${pillBoxLeft}px;
          transform: none;
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
>>>>>>> REPLACE

### 🤖 Assistant

> 🔧 called: read_file

Now apply the same edge-clamp fix to `buildAfterBoxEls` (used by morph). Let me find that section:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: apply_diff



> 🔧 **apply_diff** — <<<<<<< SEARCH
:start_line:2126
-------
      lastTinyRight = pillRight;
      lastTinyAbove = pillAbove;

      const connector = doc.createElement('div');
      connector.style.cssText = `
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 1px;
        height: ${CONNECTOR_H}px;
        background: ${isBroken ? '#ef4444' : '#22c55e'};
        pointer-events: none;
        ${pillAbove ? `bottom: ${bh}px;` : `top: ${bh}px;`}
      `;

      const pill = doc.createElement('span');
      pill.style.cssText = `
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        ${pillAbove ? `bottom: ${bh + CONNECTOR_H}px;` : `top: ${bh + CONNECTOR_H}px;`}
        white-space: nowrap;
        font-family: -apple-system, "Segoe UI", system-ui, sans-serif;
        font-size: 10px;
        font-weight: 700;
        color: #1f2328;
        background: ${isBroken ? '#fca5a5' : '#bbf7d0'};
        border: 1px solid ${isBroken ? '#ef4444' : '#22c55e'};
        border-radius: 4px;
        padding: 2px 3px;
        line-height: 1.4;
        pointer-events: none;
        z-index: 1;
      `;
      pill.textContent = labelText;
=======
      lastTinyRight = pillRight;
      lastTinyAbove = pillAbove;

      // Fix 5: clamp pill to viewport
      const vpW2 = doc.defaultView ? doc.defaultView.innerWidth : 1200;
      const pillViewLeft2 = pillCentreX - estPillHalfW;
      const pillViewRight2 = pillCentreX + estPillHalfW;
      const EDGE_PAD2 = 6;
      let pillViewLeftClamped2 = pillViewLeft2;
      if (pillViewLeft2 < EDGE_PAD2) pillViewLeftClamped2 = EDGE_PAD2;
      if (pillViewRight2 > vpW2 - EDGE_PAD2) pillViewLeftClamped2 = vpW2 - EDGE_PAD2 - estPillHalfW * 2;
      const pillBoxLeft2 = pillViewLeftClamped2 - bl;

      const connector = doc.createElement('div');
      connector.style.cssText = `
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 1px;
        height: ${CONNECTOR_H}px;
        background: ${isBroken ? '#ef4444' : '#22c55e'};
        pointer-events: none;
        ${pillAbove ? `bottom: ${bh}px;` : `top: ${bh}px;`}
      `;

      const pill = doc.createElement('span');
      pill.style.cssText = `
        position: absolute;
        left: ${pillBoxLeft2}px;
        transform: none;
        ${pillAbove ? `bottom: ${bh + CONNECTOR_H}px;` : `top: ${bh + CONNECTOR_H}px;`}
        white-space: nowrap;
        font-family: -apple-system, "Segoe UI", system-ui, sans-serif;
        font-size: 10px;
        font-weight: 700;
        color: #1f2328;
        background: ${isBroken ? '#fca5a5' : '#bbf7d0'};
        border: 1px solid ${isBroken ? '#ef4444' : '#22c55e'};
        border-radius: 4px;
        padding: 2px 3px;
        line-height: 1.4;
        pointer-events: none;
        z-index: 1;
      `;
      pill.textContent = labelText;
>>>>>>> REPLACE

### 🤖 Assistant

> 🔧 called: write_file

Now also need to update the `clearTranscript` function — it currently shows "click Scan page" message. Since we auto-scan now, the empty state message won't be shown at load, but we should keep it for when the user switches pages (which also clears and triggers a reload + auto-scan). That's fine. Now let me do the root `index.html` (**Fix 4**):

> 🔧 **write_file** — index.html

### 🤖 Assistant

> 🔧 called: update_todo_list

Now let me mark tasks done and verify the app/index.html is correct by reading the key sections:

> 🔧 **update_todo_list** — 
[x] Read app/index.html and root index.html to understand current structure
[x] Fix 1: Screen-reader wording order (name first, role last) in transcripts/captions/labels
[x] Fix 2: Auto-scan on load + hint strip under top bar
[x] Fix 3: Page title and favicon (inline SVG torch)
[x] Fix 4: Root index.html proper landing page
[x] Fix 5: Edge clipping for label pills
[-] Fix 6: Verify nothing breaks (review logic for lights off, torch, morph, axe, Try it blind)


### 🤖 Assistant

> 🔧 called: grep

Let me verify a few key spots to make sure nothing is broken:

> 🔧 **grep** — button,|link,|image,|edit text,|combo box,

### 🤖 Assistant

> 🔧 called: grep

Good — no remaining old-format `role, name` patterns in the transcript output. Let me also check that `clearTranscript` still has the correct empty state message (for when the user switches pages):

> 🔧 **grep** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file

Since auto-scan happens on `frame load`, the transcript will be filled before the user sees the page. The initial static HTML (line 462) is only shown for a split second before the iframe loads. Let me verify the auto-scan event listener is correctly structured and won't conflict with blind mode's frame load listener:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file

The morph guard `!collapseActive && !morphInProgress` prevents auto-scan from clobbering the morph's transcript rebuild. Let me also check that the blind-mode frame load handler (which resets `lines = []`) still works correctly:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: apply_diff

The blind-mode frame handler runs first (`if (!blindActive) return` is the first check in the auto-scan handler too — wait, actually both handlers check independently). When blind mode is active:
1. The auto-scan handler runs: `!collapseActive && !morphInProgress` — blind mode doesn't set these flags, so it would scan. 
2. Then the blind-mode handler runs: `lines = []` — resetting it immediately.

The auto-scan would briefly set lines, but blind mode handler immediately clears them. This is fine because blind mode calls `ensureLines()` lazily when navigating anyway. But to be safe, let me also guard against blind mode in the auto-scan:

> 🔧 **apply_diff** — <<<<<<< SEARCH
:start_line:1767
-------
  // Auto-scan: fill the transcript immediately so judges see results on load
  if (!collapseActive && !morphInProgress) {
    lines = buildTranscript(doc);
    renderTranscript();
    btnRead.disabled = lines.length === 0;
  }
=======
  // Auto-scan: fill the transcript immediately so judges see results on load.
  // Skip if lights are off (collapse manages lines), morph is in progress,
  // or blind mode is active (it manages lines lazily).
  if (!collapseActive && !morphInProgress && !blindActive) {
    lines = buildTranscript(doc);
    renderTranscript();
    btnRead.disabled = lines.length === 0;
  }
>>>>>>> REPLACE

### 🤖 Assistant

> 🔧 called: read_file

Now let me also verify the `select` change listener — when user switches pages, it calls `clearTranscript()` then the new `frame.src` load triggers auto-scan, so the transcript fills back up:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file

Good. When the user changes the select, `clearTranscript()` shows the loading state briefly, then the frame loads and auto-scan fills it in. 

Now let me verify the `lights off` flow still auto-scans if not already done — it does this itself inside `btnLights.click`:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: grep

Since auto-scan now fills `lines` on load, the `if (lines.length === 0)` guard in the lights-off handler will be skipped (lines are already populated). That's correct.

Let me do a final scan to confirm no stray `button, name` or `link, name` patterns remain in the JS output code:

> 🔧 **grep** — app/index.html

### 🤖 Assistant

> 🔧 called: grep



> 🔧 **grep** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file

Clean. Let me do one final check on the HTML structure to confirm the hint strip and topbar order look right:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: update_todo_list

Everything looks correct. Let me update the final todos:

> 🔧 **update_todo_list** — 
[x] Read app/index.html and root index.html to understand current structure
[x] Fix 1: Screen-reader wording order (name first, role last) in transcripts/captions/labels
[x] Fix 2: Auto-scan on load + hint strip under top bar
[x] Fix 3: Page title and favicon (inline SVG torch)
[x] Fix 4: Root index.html proper landing page
[x] Fix 5: Edge clipping for label pills
[x] Fix 6: Verify nothing breaks (review logic for lights off, torch, morph, axe, Try it blind)


### 🤖 Assistant

Here's what changed:

---

### Changes made

**[`app/index.html`](app/index.html)**

**Fix 1 — Wording order (name first, role last)**
- [`visitNode()`](app/index.html:614) — all 9 element types now emit `"${name}, role"` instead of `"role, ${name}"`: links, buttons, images, inputs (with name or placeholder), textarea, select.
- [`spokenTextForEl()`](app/index.html:2347) — the blind-mode fallback path now uses the same `name, role` order for button/link/input/select/textarea.
- [`boxLabelForLine()`](app/index.html:1001) — switched prefix checks (`.startsWith('button,')`) to suffix checks (`.endsWith(', button')`) to match the new format. Added checkbox and radio button entries.
- [`lineRole()`](app/index.html:1858) — morph matching now checks `.endsWith(', button')` etc. instead of `.startsWith('button,')`.
- Unnamed items (`text === 'button'`, `'link'`, `'image'`) are unchanged — they stay as just the role word.

**Fix 2 — Auto-scan on load + hint strip**
- The `frame load` listener now calls `buildTranscript` + `renderTranscript` immediately (guarded: skips if lights-off, morph, or blind mode is active).
- Added `#hint-strip` HTML just below the topbar with the hint text and a `×` close button; close handler sets `.hidden`.

**Fix 3 — Page title + favicon**
- `<title>` changed to `"Usher — your app, in the dark"`.
- Added inline SVG favicon: dark circle with a warm amber glow centre and two fading rings.

**Fix 5 — Edge clipping for label pills**
- In both [`drawBoxes()`](app/index.html:1257) and [`buildAfterBoxEls()`](app/index.html:2126): computed the pill's estimated viewport-space edges, clamped with 6 px insets, converted back to a box-relative `left` pixel value, and set `transform: none` instead of `transform: translateX(-50%)`.

---

**[`index.html`](index.html) — Fix 4 — Proper landing page**
- Full dark-themed landing: Usher wordmark with amber dot, tagline "Your app, in the dark.", the one-sentence description, a big blue "Open Usher →" button pointing to `app/`, and small links to the GitHub repo and the fix report on GitHub.
- Subtle warm radial glow behind the wordmark. Matching `#0b0b0c` background.