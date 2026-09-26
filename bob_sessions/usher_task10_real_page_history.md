# TASK 10 for Usher. Four parts. The real page demo/real/freelancer/index.html (Start Bootstrap Freelancer, MIT) must NOT be edited in this task.

PART A: hear what axe cannot
1. Punctuation-only names: an accessible name made only of punctuation or symbols (e.g. alt="..." which a screen reader reads as "dot dot dot") is tagged "Unclear name". The transcript line must show how it sounds, e.g. "dot dot dot, image".
2. Mouse-only controls: detect elements that act as controls but are not reachable or announced as controls. An element counts when it is not a/button/input/select/textarea/summary, has no interactive role, is not focusable (no tabindex >= 0), AND any of: it has an onclick attribute or property; it has data-bs-toggle / data-toggle / data-bs-target; its computed cursor is "pointer" (and it is not inside a real a/button). Tag the line "Mouse only" and show it as "(nothing — cannot be reached without a mouse)". Count "Mouse only" as a problem everywhere (counter, collapse boxes, colours).
3. Check the Brightwater broken page still gives the same results (its Pay <div> should now also appear as Mouse only / Not a button, whichever is clearer; do not double count).

PART B: real page in the dropdown
Add "Freelancer template (real, MIT)" -> ../demo/real/freelancer/index.html and "Freelancer (fixed by Bob)" -> ../demo/real/freelancer/index.fixed.html (show the second only if the file exists).
Make "Show Bob's fix" generic: for any page X that has a fixed version in the dropdown, morph from X to its fixed version.

PART C: "Copy for Bob"
A top-bar button "Copy for Bob". It builds a Markdown report and copies it to the clipboard (show "Copied — paste it into Bob in 🔦 Usher Fixer mode"):
- Title: "Usher report: <page name>" and the page's file path in the repo.
- Every problem line from the transcript: tag, what the screen reader says, and the element's outerHTML trimmed to 200 characters.
- Every axe-core violation: rule id, impact, help text, and each node's CSS target and HTML snippet.
- Totals, and the closing instruction: "Fix these in a copy of this page following your rules, then write the FIXES report."
Also offer a "Download .md" link for the same report.

PART D: teach the Usher Fixer mode to take the report
Update .bob/rules-usher-fixer/:
- 01-workflow.md: if the user pastes an Usher report, treat it as the task list and still check the page yourself for anything the report missed. Where to write the fix: if the page loads relative assets (css/, js/, assets/), write the fixed copy as index.fixed.html in the SAME folder so paths keep working, and the report as FIXES.md in that folder; otherwise use a sibling fixed/ folder as before.
- 02-how-to-fix.md: add rules for (a) alt="..." or other placeholder alt text: replace with a real short description ONLY when certain from visible context (e.g. the portfolio caption or modal title), otherwise alt="" plus data-usher-review="alt"; (b) mouse-only controls: make them real <button type="button"> elements (or add role, tabindex and key handling only if a button is impossible), with a name that says what opens, e.g. "Open project: Log Cabin"; keep the Bootstrap data attributes working.

When done, report what Usher now finds on the real Freelancer page, by tag, and confirm Brightwater still behaves.

---

**Status:** error  **Date:** 2026-09-26

---

### 👤 User

TASK 10 for Usher. Four parts. The real page demo/real/freelancer/index.html (Start Bootstrap Freelancer, MIT) must NOT be edited in this task.

PART A: hear what axe cannot
1. Punctuation-only names: an accessible name made only of punctuation or symbols (e.g. alt="..." which a screen reader reads as "dot dot dot") is tagged "Unclear name". The transcript line must show how it sounds, e.g. "dot dot dot, image".
2. Mouse-only controls: detect elements that act as controls but are not reachable or announced as controls. An element counts when it is not a/button/input/select/textarea/summary, has no interactive role, is not focusable (no tabindex >= 0), AND any of: it has an onclick attribute or property; it has data-bs-toggle / data-toggle / data-bs-target; its computed cursor is "pointer" (and it is not inside a real a/button). Tag the line "Mouse only" and show it as "(nothing — cannot be reached without a mouse)". Count "Mouse only" as a problem everywhere (counter, collapse boxes, colours).
3. Check the Brightwater broken page still gives the same results (its Pay <div> should now also appear as Mouse only / Not a button, whichever is clearer; do not double count).

PART B: real page in the dropdown
Add "Freelancer template (real, MIT)" -> ../demo/real/freelancer/index.html and "Freelancer (fixed by Bob)" -> ../demo/real/freelancer/index.fixed.html (show the second only if the file exists).
Make "Show Bob's fix" generic: for any page X that has a fixed version in the dropdown, morph from X to its fixed version.

PART C: "Copy for Bob"
A top-bar button "Copy for Bob". It builds a Markdown report and copies it to the clipboard (show "Copied — paste it into Bob in 🔦 Usher Fixer mode"):
- Title: "Usher report: <page name>" and the page's file path in the repo.
- Every problem line from the transcript: tag, what the screen reader says, and the element's outerHTML trimmed to 200 characters.
- Every axe-core violation: rule id, impact, help text, and each node's CSS target and HTML snippet.
- Totals, and the closing instruction: "Fix these in a copy of this page following your rules, then write the FIXES report."
Also offer a "Download .md" link for the same report.

PART D: teach the Usher Fixer mode to take the report
Update .bob/rules-usher-fixer/:
- 01-workflow.md: if the user pastes an Usher report, treat it as the task list and still check the page yourself for anything the report missed. Where to write the fix: if the page loads relative assets (css/, js/, assets/), write the fixed copy as index.fixed.html in the SAME folder so paths keep working, and the report as FIXES.md in that folder; otherwise use a sibling fixed/ folder as before.
- 02-how-to-fix.md: add rules for (a) alt="..." or other placeholder alt text: replace with a real short description ONLY when certain from visible context (e.g. the portfolio caption or modal title), otherwise alt="" plus data-usher-review="alt"; (b) mouse-only controls: make them real <button type="button"> elements (or add role, tabindex and key handling only if a button is impossible), with a name that says what opens, e.g. "Open project: Log Cabin"; keep the Bootstrap data attributes working.

When done, report what Usher now finds on the real Freelancer page, by tag, and confirm Brightwater still behaves.

---

### 🤖 Assistant

> 🔧 called: update_todo_list



> 🔧 **update_todo_list** — 
[-] Read current Usher codebase to understand structure
[ ] PART A1: Detect punctuation-only accessible names ("Unclear name")
[ ] PART A2: Detect mouse-only controls (onclick, data-bs-toggle, pointer cursor without real control)
[ ] PART A3: Verify Brightwater broken page behavior
[ ] PART B: Add Freelancer pages to dropdown, make "Show Bob's fix" generic
[ ] PART C: "Copy for Bob" button with Markdown report + Download .md
[ ] PART D: Update .bob/rules-usher-fixer/01-workflow.md and 02-how-to-fix.md
[ ] Final: Report Usher findings on real Freelancer page and confirm Brightwater


### 🤖 Assistant

> 🔧 called: list_files



> 🔧 **list_files** — .

### 🤖 Assistant

> 🔧 called: list_files, list_files, list_files



> 🔧 **list_files** — app

> 🔧 **list_files** — .bob

> 🔧 **list_files** — demo

### 🤖 Assistant

> 🔧 called: read_file, read_file, read_file



> 🔧 **read_file** — .bob/rules-usher-fixer/02-how-to-fix.md

> 🔧 **read_file** — .bob/rules-usher-fixer/01-workflow.md

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file, read_file

Now let me read the key parts of the app JavaScript to understand the current structure:

> 🔧 **read_file** — app/index.html

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file, read_file



> 🔧 **read_file** — app/index.html

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file, read_file



> 🔧 **read_file** — app/index.html

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file, read_file



> 🔧 **read_file** — app/index.html

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file, read_file

Now I have a thorough understanding of the codebase. Let me read the Brightwater broken page to understand the Pay div issue, and also examine the freelancer real page:

> 🔧 **read_file** — demo/broken/index.html

> 🔧 **read_file** — demo/real/freelancer/index.html

### 🤖 Assistant

> 🔧 called: read_file, grep



> 🔧 **read_file** — demo/real/freelancer/index.html

> 🔧 **grep** — onclick|data-bs-toggle|data-toggle|data-bs-target|Pay

### 🤖 Assistant

> 🔧 called: read_file, read_file



> 🔧 **read_file** — demo/broken/index.html

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: update_todo_list

Now I have enough context. Let me plan all the changes needed:

> 🔧 **update_todo_list** — 
[x] Read current Usher codebase to understand structure
[-] PART A1: Detect punctuation-only accessible names ("Unclear name") — translate punctuation to spoken form
[ ] PART A2: Detect mouse-only controls (data-bs-toggle, data-bs-target, onclick on non-interactive non-focusable elements)
[ ] PART A3: Verify Brightwater broken Pay div is detected
[ ] PART B: Add Freelancer pages to dropdown, make "Show Bob's fix" generic
[ ] PART C: "Copy for Bob" button with Markdown report + Download .md
[ ] PART D: Update .bob/rules-usher-fixer/01-workflow.md and 02-how-to-fix.md
[ ] Final: Report Usher findings on real Freelancer page and confirm Brightwater


### 🤖 Assistant

> 🔧 called: read_file, read_file

Now I'll implement all the changes. This is a large update to `app/index.html`. Let me work through it section by section:

> 🔧 **read_file** — app/index.html

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file



> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: update_todo_list

Now I have a thorough understanding of the code. Let me implement all the changes in one comprehensive edit to `app/index.html`:

> 🔧 **update_todo_list** — 
[x] Read current Usher codebase to understand structure
[-] PART A1+A2+A3+B+C: Implement all JavaScript changes in app/index.html
[ ] PART D: Update .bob/rules-usher-fixer/01-workflow.md and 02-how-to-fix.md
[ ] Final: Report Usher findings on real Freelancer page and confirm Brightwater


### 🤖 Assistant

> 🔧 called: apply_diff



> 🔧 **apply_diff** — app/index.html

### 🤖 Assistant

> 🔧 called: apply_diff

Now I need to add CSS styles for the new buttons and add the "Copy for Bob" / "Download .md" button styles. Let me add them in the style block:

> 🔧 **apply_diff** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file

Now add the toast element to HTML and update the existing JS constants/logic. First let me add the toast div:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file



> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: apply_diff



> 🔧 **apply_diff** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file

Now let me update the JavaScript. First, find the exact line numbers after all previous edits:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: apply_diff



> 🔧 **apply_diff** — <<<<<<< SEARCH
:start_line:517
-------
const frame      = document.getElementById('page-frame');
const select     = document.getElementById('page-select');
const btnScan    = document.getElementById('btn-scan');
const btnRead    = document.getElementById('btn-read');
const btnStop    = document.getElementById('btn-stop');
const btnLights  = document.getElementById('btn-lights');
const btnMorph   = document.getElementById('btn-morph');
const transcript = document.getElementById('transcript');
const usherCounter = document.getElementById('usher-counter');
const axeScore   = document.getElementById('axe-score');
const axeScoreText = document.getElementById('axe-score-text');
const axeBreakdown = document.getElementById('axe-breakdown');

let lines = [];      // array of {text, tag, el}
let speakIndex = -1;
let morphInProgress = false;

const BROKEN_URL = '../demo/broken/index.html';
const FIXED_URL  = '../demo/fixed/index.html';

function isBrokenPage() {
  return select.value === BROKEN_URL;
}

// ── Page select ──────────────────────────────────────────────────────────────
select.addEventListener('change', () => {
  frame.src = select.value;
  clearTranscript();
  hideMorphButton();
  // If blind mode is active, the frame load handler will re-attach listeners
  // and keep the mode on — nothing else needed here.
});
=======
const frame      = document.getElementById('page-frame');
const select     = document.getElementById('page-select');
const btnScan    = document.getElementById('btn-scan');
const btnRead    = document.getElementById('btn-read');
const btnStop    = document.getElementById('btn-stop');
const btnLights  = document.getElementById('btn-lights');
const btnMorph   = document.getElementById('btn-morph');
const btnCopyBob = document.getElementById('btn-copy-bob');
const btnDownloadMd = document.getElementById('btn-download-md');
const copyBobToast  = document.getElementById('copy-bob-toast');
const transcript = document.getElementById('transcript');
const usherCounter = document.getElementById('usher-counter');
const axeScore   = document.getElementById('axe-score');
const axeScoreText = document.getElementById('axe-score-text');
const axeBreakdown = document.getElementById('axe-breakdown');

let lines = [];      // array of {text, tag, el}
let speakIndex = -1;
let morphInProgress = false;
let lastAxeResult = null; // saved for the "Copy for Bob" report

// Fixed-version map: for each page URL, the URL of its fixed copy
const FIXED_MAP = {
  '../demo/broken/index.html':              '../demo/fixed/index.html',
  '../demo/real/freelancer/index.html':     '../demo/real/freelancer/index.fixed.html',
};

/** Return the fixed URL for the current page, or null if none configured. */
function fixedUrlForCurrent() {
  return FIXED_MAP[select.value] || null;
}

// ── Page select ──────────────────────────────────────────────────────────────
select.addEventListener('change', () => {
  frame.src = select.value;
  clearTranscript();
  hideMorphButton();
  hideCopyBobButtons();
  // If blind mode is active, the frame load handler will re-attach listeners
  // and keep the mode on — nothing else needed here.
});
>>>>>>> REPLACE


### 🤖 Assistant

> 🔧 called: read_file

Now update the `isBrokenPage` usage in the lights button handler and the morph button:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file



> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: apply_diff



> 🔧 **apply_diff** — <<<<<<< SEARCH
:start_line:1019
-------
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
    // Show "Show Bob's fix" only on the broken page
    if (isBrokenPage()) showMorphButton();
  } else {
    collapseActive = false;
    btnLights.textContent = 'Turn off the lights';
    btnLights.classList.remove('lights-off');
    hideMorphButton();
    restore(frame.contentDocument);
  }
});

function showMorphButton() { btnMorph.classList.add('visible'); }
function hideMorphButton()  { btnMorph.classList.remove('visible'); }
=======
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
    // Show "Show Bob's fix" if this page has a fixed version
    if (fixedUrlForCurrent()) showMorphButton();
  } else {
    collapseActive = false;
    btnLights.textContent = 'Turn off the lights';
    btnLights.classList.remove('lights-off');
    hideMorphButton();
    restore(frame.contentDocument);
  }
});

function showMorphButton() { btnMorph.classList.add('visible'); }
function hideMorphButton()  { btnMorph.classList.remove('visible'); }
function showCopyBobButtons() {
  btnCopyBob.classList.add('visible');
  btnDownloadMd.classList.add('visible');
}
function hideCopyBobButtons() {
  btnCopyBob.classList.remove('visible');
  btnDownloadMd.classList.remove('visible');
}
>>>>>>> REPLACE


### 🤖 Assistant

> 🔧 called: read_file

Now update the morph button handler to use the generic `fixedUrlForCurrent()`:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: apply_diff



> 🔧 **apply_diff** — <<<<<<< SEARCH
:start_line:1861
-------
btnMorph.addEventListener('click', () => {
  if (!collapseActive || morphInProgress) return;
  morphInProgress = true;
  hideMorphButton();

  const beforeTranscript = lines.slice(); // snapshot of broken page transcript

  // Load the fixed page into the iframe
  frame.src = FIXED_URL;
  select.value = FIXED_URL;

  frame.addEventListener('load', function onFixedLoad() {
    frame.removeEventListener('load', onFixedLoad);

    const fixedDoc = frame.contentDocument;
    if (!fixedDoc || !fixedDoc.body) { morphInProgress = false; return; }

    // Build after-transcript from the fixed doc
    const afterTranscript = buildTranscript(fixedDoc);

    // Apply lights-off state instantly (no drain animation)
    applyLightsOffInstant(fixedDoc, afterTranscript);

    // Run the morph
    morphTo(fixedDoc, beforeTranscript, afterTranscript);

    // Update axe score for the fixed page
    runAxe(fixedDoc).then(result => {
      showAxeScore(result);
    }).catch(() => {});

    morphInProgress = false;
  }, { once: true });
});
=======
btnMorph.addEventListener('click', () => {
  if (!collapseActive || morphInProgress) return;
  const fixedUrl = fixedUrlForCurrent();
  if (!fixedUrl) return;
  morphInProgress = true;
  hideMorphButton();

  const beforeTranscript = lines.slice(); // snapshot of current page transcript

  // Load the fixed page into the iframe
  frame.src = fixedUrl;
  select.value = fixedUrl;

  frame.addEventListener('load', function onFixedLoad() {
    frame.removeEventListener('load', onFixedLoad);

    const fixedDoc = frame.contentDocument;
    if (!fixedDoc || !fixedDoc.body) { morphInProgress = false; return; }

    // Build after-transcript from the fixed doc
    const afterTranscript = buildTranscript(fixedDoc);

    // Apply lights-off state instantly (no drain animation)
    applyLightsOffInstant(fixedDoc, afterTranscript);

    // Run the morph
    morphTo(fixedDoc, beforeTranscript, afterTranscript);

    // Update axe score for the fixed page
    runAxe(fixedDoc).then(result => {
      showAxeScore(result);
    }).catch(() => {});

    morphInProgress = false;
  }, { once: true });
});
>>>>>>> REPLACE


### 🤖 Assistant

> 🔧 called: read_file

Now let me update the `onPageReady` function to show Copy for Bob buttons, and update the `clearTranscript` function:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: apply_diff



> 🔧 **apply_diff** — <<<<<<< SEARCH
:start_line:1823
-------
function onPageReady() {
  if (_pageReadyRan) return;
  _pageReadyRan = true;

  const doc = frame.contentDocument;
  if (!doc || !doc.body) return;

  // Auto-scan: fill the transcript immediately so judges see results on load.
  // Skip if lights are off (collapse manages lines), morph is in progress,
  // or blind mode is active (it manages lines lazily).
  if (!collapseActive && !morphInProgress && !blindActive) {
    lines = buildTranscript(doc);
    renderTranscript();
    btnRead.disabled = lines.length === 0;
  }

  runAxe(doc).then(result => {
    showAxeScore(result);
  }).catch(() => {
    hideAxeScore();
  });
}
=======
function onPageReady() {
  if (_pageReadyRan) return;
  _pageReadyRan = true;

  const doc = frame.contentDocument;
  if (!doc || !doc.body) return;

  // Auto-scan: fill the transcript immediately so judges see results on load.
  // Skip if lights are off (collapse manages lines), morph is in progress,
  // or blind mode is active (it manages lines lazily).
  if (!collapseActive && !morphInProgress && !blindActive) {
    lines = buildTranscript(doc);
    renderTranscript();
    btnRead.disabled = lines.length === 0;
    showCopyBobButtons();
  }

  runAxe(doc).then(result => {
    lastAxeResult = result;
    showAxeScore(result);
  }).catch(() => {
    lastAxeResult = null;
    hideAxeScore();
  });
}
>>>>>>> REPLACE


### 🤖 Assistant

> 🔧 called: read_file

Also show buttons after Scan button is clicked:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file



> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: apply_diff



> 🔧 **apply_diff** — <<<<<<< SEARCH
:start_line:556
-------
// ── Scan ─────────────────────────────────────────────────────────────────────
btnScan.addEventListener('click', () => {
  const doc = frame.contentDocument;
  if (!doc) { alert('Cannot access page — is it loaded?'); return; }
  lines = buildTranscript(doc);
  renderTranscript();
  btnRead.disabled = lines.length === 0;
});
=======
// ── Scan ─────────────────────────────────────────────────────────────────────
btnScan.addEventListener('click', () => {
  const doc = frame.contentDocument;
  if (!doc) { alert('Cannot access page — is it loaded?'); return; }
  lines = buildTranscript(doc);
  renderTranscript();
  btnRead.disabled = lines.length === 0;
  showCopyBobButtons();
});
>>>>>>> REPLACE


### 🤖 Assistant

> 🔧 called: read_file

Now let's update the `clearTranscript` function to hide the copy buttons too:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: apply_diff



> 🔧 **apply_diff** — <<<<<<< SEARCH
:start_line:930
-------
function clearTranscript() {
  lines = [];
  transcript.innerHTML = '<div class="transcript-empty">Load a page and click "Scan page" to see what a screen reader hears.</div>';
  btnRead.disabled = true;
  btnStop.disabled = true;
  clearIframeOutline();
  usherCounter.textContent = '';
  usherCounter.classList.remove('visible');
  hideAxeScore();
}
=======
function clearTranscript() {
  lines = [];
  lastAxeResult = null;
  transcript.innerHTML = '<div class="transcript-empty">Load a page and click "Scan page" to see what a screen reader hears.</div>';
  btnRead.disabled = true;
  btnStop.disabled = true;
  clearIframeOutline();
  usherCounter.textContent = '';
  usherCounter.classList.remove('visible');
  hideAxeScore();
  hideCopyBobButtons();
}
>>>>>>> REPLACE


### 🤖 Assistant

> 🔧 called: read_file

Now let me implement the core changes: (1) punctuation-name spoken form, (2) mouse-only detection, (3) TAG_CONFIG update. Let me look at the current `isUnclearName` and the TAG_CONFIG/PROBLEM_TAGS:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: apply_diff



> 🔧 **apply_diff** — <<<<<<< SEARCH
:start_line:842
-------
function isUnclearName(name) {
  return /^[\d\s\W]+$/.test(name) && name.trim().length > 0;
}
=======
/**
 * Translate a punctuation-only string into how a screen reader says it.
 * e.g. "..." -> "dot dot dot"   "..." -> "dot dot dot"
 * Returns null if the name contains real word characters.
 */
function punctuationSpokenForm(name) {
  // Map of individual characters to their spoken form
  const MAP = {
    '.': 'dot',    '…': 'dot dot dot',
    ',': 'comma',  ':': 'colon',    ';': 'semicolon',
    '!': 'exclamation mark', '?': 'question mark',
    '"': 'quote', "'": 'apostrophe', '\u2018': 'quote', '\u2019': 'apostrophe',
    '\u201c': 'quote', '\u201d': 'quote',
    '-': 'dash', '\u2013': 'en dash', '\u2014': 'em dash',
    '/': 'slash', '\\': 'backslash',
    '|': 'bar', '_': 'underscore', '@': 'at',
    '#': 'hash', '$': 'dollar', '%': 'percent',
    '^': 'caret', '&': 'ampersand', '*': 'asterisk',
    '(': 'open paren', ')': 'close paren',
    '[': 'open bracket', ']': 'close bracket',
    '{': 'open brace', '}': 'close brace',
    '<': 'less than', '>': 'greater than',
    '+': 'plus', '=': 'equals', '~': 'tilde', '`': 'backtick',
  };
  const parts = [];
  for (const ch of name) {
    if (/\s/.test(ch)) continue;
    if (/\w/.test(ch)) return null; // contains a real word character — not punctuation-only
    const spoken = MAP[ch];
    if (spoken) parts.push(spoken);
    // unknown punctuation: skip silently
  }
  return parts.length > 0 ? parts.join(' ') : null;
}

function isUnclearName(name) {
  return /^[\d\s\W]+$/.test(name) && name.trim().length > 0;
}
>>>>>>> REPLACE

<<<<<<< SEARCH
:start_line:898
-------
const TAG_CONFIG = {
  ok:         { label: 'OK',              cls: 'tag-ok' },
  noname:     { label: 'No name',         cls: 'tag-noname' },
  notbtn:     { label: 'Not a button',    cls: 'tag-notbtn' },
  filename:   { label: 'File name only',  cls: 'tag-filename' },
  unclear:    { label: 'Unclear name',    cls: 'tag-unclear' },
  colouronly: { label: 'Colour only',     cls: 'tag-colouronly' },
};

const PROBLEM_TAGS = new Set(['noname','notbtn','filename','unclear','colouronly']);
=======
const TAG_CONFIG = {
  ok:         { label: 'OK',              cls: 'tag-ok' },
  noname:     { label: 'No name',         cls: 'tag-noname' },
  notbtn:     { label: 'Not a button',    cls: 'tag-notbtn' },
  filename:   { label: 'File name only',  cls: 'tag-filename' },
  unclear:    { label: 'Unclear name',    cls: 'tag-unclear' },
  colouronly: { label: 'Colour only',     cls: 'tag-colouronly' },
  mouseonly:  { label: 'Mouse only',      cls: 'tag-mouseonly' },
};

const PROBLEM_TAGS = new Set(['noname','notbtn','filename','unclear','colouronly','mouseonly']);
>>>>>>> REPLACE


### 🤖 Assistant

> 🔧 called: read_file

Now let me update the image and link/button handling in `visitNode` to use `punctuationSpokenForm`:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: apply_diff

Now I'll replace the link, button, and image handling to support punctuation spoken forms, and replace the clickable div detection with the more complete mouse-only detector:

> 🔧 **apply_diff** — <<<<<<< SEARCH
:start_line:663
-------
    // Links
    if (tag === 'a' && node.hasAttribute('href')) {
      const name = computeAccessibleName(node).trim();
      if (!name) {
        result.push({ text: `link`, tag: 'noname', el: node });
      } else if (isUnclearName(name)) {
        result.push({ text: `${name}, link`, tag: 'unclear', el: node });
      } else {
        result.push({ text: `${name}, link`, tag: 'ok', el: node });
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
        result.push({ text: `${name}, button`, tag: 'unclear', el: node });
      } else {
        result.push({ text: `${name}, button`, tag: 'ok', el: node });
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
          result.push({ text: `${filename}, image`, tag: 'filename', el: node });
        } else {
          result.push({ text: `${name}, image`, tag: 'ok', el: node });
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
        result.push({ text: `${name}, ${roleLabel}`, tag: 'ok', el: node });
      } else {
        const ph = node.getAttribute('placeholder');
        if (ph) {
          result.push({ text: `${ph}, ${roleLabel}`, tag: 'noname', el: node });
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
        result.push({ text: `${name}, edit text`, tag: 'ok', el: node });
      } else {
        result.push({ text: `edit text`, tag: 'noname', el: node });
      }
      continue;
    }

    // select
    if (tag === 'select') {
      const name = computeAccessibleName(node).trim();
      if (name) {
        result.push({ text: `${name}, combo box`, tag: 'ok', el: node });
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
=======
    // Links
    if (tag === 'a' && node.hasAttribute('href')) {
      const name = computeAccessibleName(node).trim();
      if (!name) {
        result.push({ text: `link`, tag: 'noname', el: node });
      } else {
        const spoken = punctuationSpokenForm(name);
        if (spoken !== null) {
          // Punctuation-only name: show how it sounds + tag Unclear name
          result.push({ text: `${spoken}, link`, tag: 'unclear', el: node });
        } else if (isUnclearName(name)) {
          result.push({ text: `${name}, link`, tag: 'unclear', el: node });
        } else {
          result.push({ text: `${name}, link`, tag: 'ok', el: node });
        }
      }
      markDescendantsSeen(node, seen);
      continue;
    }

    // Buttons (real <button> or role="button")
    if (tag === 'button' || role === 'button') {
      const name = computeAccessibleName(node).trim();
      if (!name) {
        result.push({ text: `button`, tag: 'noname', el: node });
      } else {
        const spoken = punctuationSpokenForm(name);
        if (spoken !== null) {
          result.push({ text: `${spoken}, button`, tag: 'unclear', el: node });
        } else if (isUnclearName(name)) {
          result.push({ text: `${name}, button`, tag: 'unclear', el: node });
        } else {
          result.push({ text: `${name}, button`, tag: 'ok', el: node });
        }
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
        const spoken = punctuationSpokenForm(name);
        if (!node.hasAttribute('alt')) {
          const filename = getFilenameFromUrl(node.getAttribute('src') || '');
          result.push({ text: `${filename}, image`, tag: 'filename', el: node });
        } else if (spoken !== null) {
          // alt="..." or alt="*" etc. — sounds like "dot dot dot, image"
          result.push({ text: `${spoken}, image`, tag: 'unclear', el: node });
        } else {
          result.push({ text: `${name}, image`, tag: 'ok', el: node });
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
        result.push({ text: `${name}, ${roleLabel}`, tag: 'ok', el: node });
      } else {
        const ph = node.getAttribute('placeholder');
        if (ph) {
          result.push({ text: `${ph}, ${roleLabel}`, tag: 'noname', el: node });
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
        result.push({ text: `${name}, edit text`, tag: 'ok', el: node });
      } else {
        result.push({ text: `edit text`, tag: 'noname', el: node });
      }
      continue;
    }

    // select
    if (tag === 'select') {
      const name = computeAccessibleName(node).trim();
      if (name) {
        result.push({ text: `${name}, combo box`, tag: 'ok', el: node });
      } else {
        result.push({ text: `combo box`, tag: 'noname', el: node });
      }
      markDescendantsSeen(node, seen);
      continue;
    }

    // ── Mouse-only / Not-a-button detection ──────────────────────────────────
    // An element counts when:
    //  • it is not a/button/input/select/textarea/summary
    //  • has no interactive role
    //  • is not focusable (tabindex >= 0)
    //  AND any of:
    //  • has onclick attribute
    //  • has data-bs-toggle / data-toggle / data-bs-target
    //  • computed cursor is "pointer" AND not inside a real a/button
    if (isMouseOnlyControl(node, doc)) {
      result.push({ text: '(nothing — cannot be reached without a mouse)', tag: 'mouseonly', el: node });
      markDescendantsSeen(node, seen);
      continue;
    }
>>>>>>> REPLACE


### 🤖 Assistant

> 🔧 called: read_file

Now I need to add the `isMouseOnlyControl` function. Let me add it right after `isColourOnlyElement`:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: apply_diff



> 🔧 **apply_diff** — <<<<<<< SEARCH
:start_line:949
-------
  return true;
}

// ── Render ───────────────────────────────────────────────────────────────────
=======
  return true;
}

/**
 * Returns true if the element acts as a clickable control but is not reachable
 * or announced as a control by assistive technology.
 *
 * Conditions:
 *  1. Not a native interactive element (a[href], button, input, select, textarea, summary)
 *  2. No interactive ARIA role
 *  3. Not focusable (no tabindex >= 0)
 *  AND at least one of:
 *  A. Has an onclick attribute
 *  B. Has data-bs-toggle or data-toggle or data-bs-target attribute
 *  C. Computed cursor is "pointer" AND not a descendant of a real a/button
 */
function isMouseOnlyControl(el, doc) {
  const tag = el.tagName.toLowerCase();
  // Must not be a native interactive element
  const NATIVE = new Set(['button','input','select','textarea','summary']);
  if (NATIVE.has(tag)) return false;
  if (tag === 'a' && el.hasAttribute('href')) return false;

  // Must not have an interactive role
  if (INTERACTIVE_ROLES.has(getEffectiveRole(el))) return false;

  // Must not be explicitly focusable
  const ti = el.getAttribute('tabindex');
  if (ti !== null && parseInt(ti, 10) >= 0) return false;

  // Check trigger conditions
  const hasOnclick    = el.hasAttribute('onclick');
  const hasBsToggle   = el.hasAttribute('data-bs-toggle') || el.hasAttribute('data-toggle');
  const hasBsTarget   = el.hasAttribute('data-bs-target');

  let hasPointerCursor = false;
  if (!hasOnclick && !hasBsToggle && !hasBsTarget) {
    // Only check cursor as fallback, and only if not inside a real a/button
    let anc = el.parentElement;
    let insideNative = false;
    while (anc) {
      const at = anc.tagName.toLowerCase();
      if (at === 'button' || (at === 'a' && anc.hasAttribute('href'))) { insideNative = true; break; }
      anc = anc.parentElement;
    }
    if (!insideNative) {
      try {
        const style = doc.defaultView.getComputedStyle(el);
        hasPointerCursor = style.cursor === 'pointer';
      } catch {}
    }
  }

  return hasOnclick || hasBsToggle || hasBsTarget || hasPointerCursor;
}

// ── Render ───────────────────────────────────────────────────────────────────
>>>>>>> REPLACE


### 🤖 Assistant

> 🔧 called: read_file

Now I need to also update the `boxLabelForLine` to handle `mouseonly` properly. Let me check the collapse/box rendering for `mouseonly`:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file



> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: grep

Now let me look at `drawBoxes` to see how colour is picked for `mouseonly`:

> 🔧 **grep** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file



> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: apply_diff

I need to update the `isNothing` check at line 1368 to also include `mouseonly`:

> 🔧 **apply_diff** — <<<<<<< SEARCH
:start_line:1368
-------
      const isBroken = isProblemLine(line);
      const isNothing = (line.tag === 'notbtn');
=======
      const isBroken = isProblemLine(line);
      const isNothing = (line.tag === 'notbtn' || line.tag === 'mouseonly');
>>>>>>> REPLACE


### 🤖 Assistant

> 🔧 called: read_file

Now let me also update the `labelText` in the speakLine area to use "not reachable without a mouse" for mouseonly:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: apply_diff



> 🔧 **apply_diff** — <<<<<<< SEARCH
:start_line:1389
-------
      const labelText = isNothing ? '(nothing — not a button)'
        : isBroken ? boxLabelForLine(line)
        : line.text;
=======
      const labelText = line.tag === 'mouseonly' ? '(mouse only)'
        : line.tag === 'notbtn'  ? '(nothing — not a button)'
        : isBroken ? boxLabelForLine(line)
        : line.text;
>>>>>>> REPLACE


### 🤖 Assistant

> 🔧 called: read_file

Now I need to implement Part C — the "Copy for Bob" and "Download .md" button logic. I need to add a `runAxe` call that stores full violation details for the report. Let me look at the current `_execAxe` to see what data is available and update it to store full data:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: apply_diff



> 🔧 **apply_diff** — <<<<<<< SEARCH
:start_line:1874
-------
function _execAxe(axe, iframeDoc, resolve, reject) {
  axe.run(
    iframeDoc,
    { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] } },
    (err, results) => {
      if (err) { reject(err); return; }
      const rules = (results.violations || []).map(v => ({
        id: v.id,
        description: v.help || v.id,
        nodes: v.nodes.length,
      }));
      const nodeCount = rules.reduce((s, r) => s + r.nodes, 0);
      resolve({ nodeCount, rules });
    }
  );
}
=======
function _execAxe(axe, iframeDoc, resolve, reject) {
  axe.run(
    iframeDoc,
    { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] } },
    (err, results) => {
      if (err) { reject(err); return; }
      // Keep full violation data for "Copy for Bob" report
      const violations = (results.violations || []).map(v => ({
        id: v.id,
        impact: v.impact,
        description: v.help || v.id,
        nodes: v.nodes.map(n => ({
          count: 1,
          target: (n.target || []).join(', '),
          html: (n.html || '').slice(0, 200),
        })),
      }));
      const rules = violations.map(v => ({ id: v.id, description: v.description, nodes: v.nodes.length }));
      const nodeCount = rules.reduce((s, r) => s + r.nodes, 0);
      resolve({ nodeCount, rules, violations });
    }
  );
}
>>>>>>> REPLACE


### 🤖 Assistant

> 🔧 called: read_file

Now let's add the "Copy for Bob" report builder. I'll add it right before the morph section. Let me find the exact location:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file



> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: apply_diff



> 🔧 **apply_diff** — <<<<<<< SEARCH
:start_line:1974
-------
// Hint strip close
document.getElementById('hint-close').addEventListener('click', () => {
  document.getElementById('hint-strip').classList.add('hidden');
});

// ════════════════════════════════════════════════════════════════════════════
// ── MORPH (Show Bob's fix) ───────────────────────────────────────────────────
// ════════════════════════════════════════════════════════════════════════════
=======
// Hint strip close
document.getElementById('hint-close').addEventListener('click', () => {
  document.getElementById('hint-strip').classList.add('hidden');
});

// ════════════════════════════════════════════════════════════════════════════
// ── COPY FOR BOB / DOWNLOAD .md ─────────────────────────────────────────────
// ════════════════════════════════════════════════════════════════════════════

/**
 * Build a Markdown Usher report for the current scan.
 * Includes:
 *  - Title and page path
 *  - Every transcript problem line (tag, spoken text, trimmed outerHTML)
 *  - Every axe-core violation (id, impact, help, nodes)
 *  - Totals and a closing instruction for the Usher Fixer
 */
function buildUsherMarkdown() {
  const pageName = select.options[select.selectedIndex]?.text || 'Unknown page';
  const pageUrl  = select.value;
  const problems = lines.filter(l => isProblemLine(l));
  const totalLines = lines.length;
  const problemCount = problems.length;

  let md = `# Usher report: ${pageName}\n\n`;
  md += `**Page:** \`${pageUrl}\`\n\n`;
  md += `---\n\n`;

  md += `## Transcript problems (${problemCount} of ${totalLines} items)\n\n`;
  if (problems.length === 0) {
    md += `_No transcript problems found._\n\n`;
  } else {
    problems.forEach(line => {
      const tagLabel = TAG_CONFIG[line.tag]?.label || line.tag;
      const html = line.el ? (line.el.outerHTML || '').replace(/\s+/g, ' ').trim().slice(0, 200) : '';
      md += `### [${tagLabel}] "${line.text}"\n\n`;
      if (html) md += `\`\`\`html\n${html}\n\`\`\`\n\n`;
    });
  }

  md += `---\n\n`;
  md += `## axe-core violations\n\n`;
  const axe = lastAxeResult;
  if (!axe || axe.nodeCount === 0) {
    md += `_No WCAG 2.1 A/AA violations detected by axe-core._\n\n`;
  } else {
    (axe.violations || []).forEach(v => {
      md += `### [${v.id}] ${v.description} _(impact: ${v.impact || 'unknown'})_\n\n`;
      v.nodes.forEach(n => {
        md += `- **Target:** \`${n.target}\`\n`;
        if (n.html) md += `  \`\`\`html\n  ${n.html}\n  \`\`\`\n`;
      });
      md += `\n`;
    });
  }

  md += `---\n\n`;
  md += `## Totals\n\n`;
  md += `- Transcript problems: **${problemCount}** of ${totalLines}\n`;
  md += `- axe-core violations: **${axe ? axe.nodeCount : 0}** nodes across **${axe?.violations?.length || 0}** rules\n\n`;
  md += `---\n\n`;
  md += `Fix these in a copy of this page following your rules, then write the FIXES report.\n`;

  return md;
}

let _copyToastTimer = null;
function showCopyToast(msg) {
  copyBobToast.textContent = msg;
  copyBobToast.classList.add('visible');
  if (_copyToastTimer) clearTimeout(_copyToastTimer);
  _copyToastTimer = setTimeout(() => copyBobToast.classList.remove('visible'), 4000);
}

btnCopyBob.addEventListener('click', async () => {
  if (lines.length === 0) return;
  const md = buildUsherMarkdown();
  try {
    await navigator.clipboard.writeText(md);
    showCopyToast('Copied — paste it into Bob in 🔦 Usher Fixer mode');
  } catch {
    showCopyToast('Clipboard unavailable — use Download .md instead');
  }
});

btnDownloadMd.addEventListener('click', () => {
  if (lines.length === 0) return;
  const md = buildUsherMarkdown();
  const pageName = select.options[select.selectedIndex]?.text || 'usher-report';
  const safeName = pageName.replace(/[^a-z0-9]/gi, '-').toLowerCase();
  const blob = new Blob([md], { type: 'text/markdown' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `usher-report-${safeName}.md`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 60000);
});

// ════════════════════════════════════════════════════════════════════════════
// ── MORPH (Show Bob's fix) ───────────────────────────────────────────────────
// ════════════════════════════════════════════════════════════════════════════
>>>>>>> REPLACE


### 🤖 Assistant

> 🔧 called: read_file

Now I need to add the "Freelancer (fixed by Bob)" option in the dropdown — but only when the file exists. Since we can't check file existence at runtime from a `file://` URL, the task says "show the second only if the file exists". The best approach is to check at page load time using a HEAD request (or iframe probe). But since we're in a local file-served context, let me add it to the `FIXED_MAP` already done. For the dropdown though, let me add it dynamically on page load:

Actually, re-reading the task: "show the second only if the file exists" — this is about the dropdown option. Let me add the fixed version option dynamically. I'll add a startup check:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file

The dropdown already has the Freelancer template option. I need to add the "Freelancer (fixed by Bob)" option conditionally. Let me add it programmatically at script startup by doing a quick `fetch` HEAD check, and also add a `data-fixed-url` attribute to the existing option to simplify matching.

Actually, looking at the requirement more carefully, it says the fixed option should appear "only if the file exists". The simplest approach is to attempt a fetch with `{ method: 'HEAD' }` on startup:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file



> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: apply_diff

I'll add a startup routine that checks for the Freelancer fixed file and adds the dropdown option if it exists:

> 🔧 **apply_diff** — <<<<<<< SEARCH
:start_line:546
-------
// ── Page select ──────────────────────────────────────────────────────────────
select.addEventListener('change', () => {
=======
// ── Conditionally add "Freelancer (fixed by Bob)" dropdown option ─────────────
(async () => {
  const fixedPath = '../demo/real/freelancer/index.fixed.html';
  try {
    const res = await fetch(fixedPath, { method: 'HEAD' });
    if (res.ok) {
      const opt = document.createElement('option');
      opt.value = fixedPath;
      opt.textContent = 'Freelancer (fixed by Bob)';
      select.appendChild(opt);
    }
  } catch { /* file doesn't exist or fetch blocked — just skip */ }
})();

// ── Page select ──────────────────────────────────────────────────────────────
select.addEventListener('change', () => {
>>>>>>> REPLACE


### 🤖 Assistant

> 🔧 called: update_todo_list

Now let me update the `.bob/rules-usher-fixer/01-workflow.md` and `02-how-to-fix.md` for Part D:

> 🔧 **update_todo_list** — 
[x] Read current Usher codebase to understand structure
[x] PART A1+A2+A3+B+C: Implement all JavaScript changes in app/index.html
[-] PART D: Update .bob/rules-usher-fixer/01-workflow.md and 02-how-to-fix.md
[ ] Final: Report Usher findings on real Freelancer page and confirm Brightwater


### 🤖 Assistant

> 🔧 called: write_file



> 🔧 **write_file** — .bob/rules-usher-fixer/01-workflow.md

### 🤖 Assistant

> 🔧 called: write_file



> 🔧 **write_file** — # 02 — How to Fix

### Prefer native elements over ARIA

- A clickable `<div>` or `<span>` becomes a real `<button>` or `<a>`.
- Never add `role="button"` to a `<div>` when a `<button>` works — a real element brings
  keyboard focus, Enter/Space activation, and correct screen-reader announcement for free.

### Accessible names

- Use visible text when it exists — wrap it or reference it; do not hide it.
- Add `aria-label` only when there is no visible text to reference.
- Names must say what the control **does** and **which item** it acts on:
  "Add TrailRidge Hiking Boots to cart", not "Add to cart" repeated six times.
- Badge counts need context: a cart badge showing "3" becomes
  `<span aria-label="Cart, 3 items">3</span>`.

### Form fields

- Every input gets a real `<label>` element, associated via `for`/`id` or by wrapping.
- The label may be visually hidden with a `.sr-only` class, but it must exist in the DOM.
- `placeholder` text is **not** a label — placeholders disappear on input and are not
  announced reliably.

### Colour-only information

- Any status, error, or category communicated by colour alone needs a text equivalent
  (visible or visually hidden).
- If the status changes dynamically, wrap the live region in
  `<span aria-live="polite">` so screen readers announce the update.

### Images

- Decorative images (icons inside labelled buttons, purely visual flourishes) get `alt=""`.
- Meaningful images get a short, factual description focused on what the image communicates.
- **Placeholder alt text** (`alt="..."`, `alt="*"`, `alt="image"`, or similar punctuation/generic
  strings): Usher tags these "Unclear name". Fix them as follows:
  - If the image's purpose is **certain from visible context** (e.g. the portfolio modal title
    above it, or a product name nearby), replace `alt="..."` with a real short description.
    Example: the cabin photo inside the "Log Cabin" modal → `alt="Log Cabin"`.
  - If a correct description would require guessing (exact content, composition, meaning), do
    the following instead:
    1. Set `alt=""` as a safe placeholder.
    2. Add `data-usher-review="alt"` to the `<img>` element.
    3. List the image under **"Needs a human"** in `FIXES.md` with a note explaining what
       information a content owner would need to provide.
- **Never invent facts in alt text.** Describe only what is certain from the product name
  and surrounding context.

### Mouse-only controls

Usher tags an element "Mouse only" when it behaves as a clickable control but cannot be
reached or activated by keyboard-only users (no `tabindex`, no `button`/`a` semantics, no
interactive ARIA role).

**Fix with a real `<button>` whenever possible:**

```html
<!-- Before (mouse only) -->
<div class="portfolio-item" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
  ...
</div>

<!-- After (keyboard accessible) -->
<button type="button" class="portfolio-item"
        data-bs-toggle="modal" data-bs-target="#portfolioModal1"
        aria-label="Open project: Log Cabin">
  ...
</button>
```

Rules:
- Keep all existing Bootstrap `data-bs-toggle` / `data-bs-target` / `data-bs-dismiss`
  attributes — Bootstrap's JS reads them from the element, and they work on `<button>` too.
- Give the button a name that says **what opens and which item**: "Open project: Log Cabin",
  not just "button" or "open".
- If the element is genuinely a link navigating to a new URL, use `<a href="…">` instead.
- Only fall back to `role="button"` + `tabindex="0"` + `onkeydown` if replacing the tag
  with `<button>` would break the layout in a way that cannot be solved with CSS alone, and
  document why in `FIXES.md`.

### Visual design constraint

Do not change the visual design. The page must look identical to sighted users after every
fix — **except** where contrast must be raised to meet 4.5:1 (normal text) or 3:1 (large
text / UI components). Colour changes for contrast are explicitly allowed.


### 🤖 Assistant

> 🔧 called: read_file

Now let me verify the app/index.html is syntactically sound by checking a few critical areas:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file



> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: grep

Good. The `isMouseOnlyControl` is now broad (it covers any element, not just `div`/`span`). But there's a concern: Bootstrap modals have `tabindex="-1"` on the `.modal` divs (which should be treated as not focusable since -1 means programmatic focus only). Let me verify the tabindex check handles -1 correctly:

The check is `parseInt(ti, 10) >= 0` — so `tabindex="-1"` returns `false` (not focusable via keyboard), which is correct. Good.

However there's another concern: the `.collapse.navbar-collapse` div has `data-bs-toggle` on the **button** not on itself. Let me think about what elements in the Freelancer page have `data-bs-toggle`:

1. `<button ... data-bs-toggle="collapse"` — this IS a button, so it's skipped by `NATIVE.has(tag)` check ✓
2. `<div class="portfolio-item ... data-bs-toggle="modal"` — NOT a button, NOT focusable, NOT interactive role ✓ → tagged Mouse only

But the portfolio-item divs also contain an `<img alt="...">` and a caption. When we call `markDescendantsSeen` on the portfolio-item div, it will mark the inner `<img>` as seen, so they won't also be tagged. That's correct because the portfolio-item IS the control.

Let me also think about the Brightwater broken page. The `<div class="pay-btn-fake" onclick="...">` has:
- tag = `div`
- `onclick` attribute ✓
- no tabindex
- no interactive role
→ `isMouseOnlyControl` returns true ✓

This will now be tagged `mouseonly` with text `"(nothing — cannot be reached without a mouse)"`. Previously the old code would tag it `notbtn` because of `onclick` on a `div/span`. The `notbtn` tag still exists in `TAG_CONFIG` but the old code path that set it is gone. Let me check if `notbtn` is still needed or if we should keep backward compatibility. Since the task says the Brightwater Pay div should appear as "Mouse only / Not a button", and the new `mouseonly` tag is a superset, this should be fine.

But wait — there may still be a `notbtn` tag from the Brightwater broken page at some element besides the Pay div. Let me check:

> 🔧 **grep** — demo/broken/index.html

### 🤖 Assistant

> 🔧 called: grep

Good, only one `onclick` on a div/span in the broken page. The `notbtn` tag will now never be generated since we removed that code path and replaced it with `mouseonly`. That's fine — the `notbtn` config is kept in `TAG_CONFIG` for any future needs or in case `lineRole` references it.

Actually, let me check if `lineRole` references `notbtn`:

> 🔧 **grep** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file

Good. The `notbtn` tag is still supported (it stays in `TAG_CONFIG` and `PROBLEM_TAGS`), but now it won't be generated from `visitNode`. The `mouseonly` tag replaces it for new detections. Old lines with `notbtn` would still render correctly.

Now let me look at the `lineRole` function to make sure `mouseonly` is handled properly for the morph animation:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file

The `mouseonly` lines have text `"(nothing — cannot be reached without a mouse)"` which matches none of the role checks — they'll fall to `return 'text'` which is fine for morph matching.

Now let me also consider: will the `isMouseOnlyControl` function produce false positives on the Usher tool's own overlays? Those overlays are in the iframe doc, not the parent doc. The function is called inside `visitNode` which processes `doc` (the iframe document). The Usher overlay elements have `pointer-events:none` but they don't have `data-bs-toggle` or `onclick`. However they might have cursor:pointer from styles. Actually, since the Usher overlay elements use `doc.createElement(...)` directly and don't have `onclick`, `data-bs-toggle`, or `data-bs-target`, they won't match. The cursor:pointer fallback only fires when none of the other conditions matched, so we're safe.

There's one more issue: when `isMouseOnlyControl` checks `cursor: pointer`, this runs `getComputedStyle` which can be slow for many elements. This only runs when none of the three attribute conditions matched, so it's an acceptable fallback.

Let me also check: the Freelancer page has portfolio items with `data-bs-toggle="modal"` but NOT onclick. The parent `<div class="col-md-6 col-lg-4 mb-5">` does NOT have `data-bs-toggle` — only the child `<div class="portfolio-item">` does. When we traverse, we'd hit the `portfolio-item` div first and tag it as `mouseonly`, then `markDescendantsSeen` marks all children (including the `<img>`) as seen. That's exactly correct.

Let me now do a final check on the `updateCounter` function to ensure it counts `mouseonly` problems correctly:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: grep



> 🔧 **grep** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file



> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file

Good — `updateCounter` counts `isProblemLine(l)` which already includes `mouseonly`. The counter will include Mouse only items.

Also let me check `renderTranscript` to see the counter update path:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file



> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file

I notice `renderTranscript` doesn't call `updateCounter`. Let me look for where the counter gets updated in non-collapse mode:

> 🔧 **read_file** — app/index.html

### 🤖 Assistant

> 🔧 called: read_file

The counter is only updated via `collapse` (lights off mode). In normal scan mode (without lights), the transcript shows tags but the counter isn't displayed — that's existing behavior, so no change needed.

Let me now run the app to check for any JavaScript errors. Let me look at the full critical section around `visitNode` to make sure there are no loose ends:

> 🔧 **read_file** — app/index.html