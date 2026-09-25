# TASK 2 for Usher. Two parts: clean-up of the demo shop, then the screen-reader voice.

PART A: clean-up of demo/broken/index.html
1. Remove EVERY comment that mentions a mistake (all "MISTAKE" HTML and CSS comments). The page must look like normal code a real developer wrote; the only place the answers live is demo/ISSUES.md.
2. Add an <html> element wrapping the page, still WITHOUT a lang attribute (that is deliberate mistake).
3. Replace the six products and their images with these (keep them deliberately WITHOUT alt text):
   - TrailRidge Hiking Boots, $149.00: https://live.staticflickr.com/3334/3428000910_3f1304babf_b.jpg
   - Skyward 4-Person Dome Tent, $289.00: https://live.staticflickr.com/3791/9031890963_4db4816d1c_b.jpg
   - Clearwater Touring Kayak Paddle, $94.00: https://live.staticflickr.com/7574/15885266785_1e7568e53f_b.jpg
   - Summit Daypack 28L, $119.00: https://live.staticflickr.com/97/207756390_b44475411e_b.jpg
   - Coldfront Down Jacket, $215.00: https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Down_jackets_%2809-09-2022%29.jpg/1024px-Down_jackets_%2809-09-2022%29.jpg
   - Guided Trail Day Pass, $65.00: https://live.staticflickr.com/4411/37000797096_3921f09f37_b.jpg
   Update the checkout total to match a sensible cart of 3 items, and change the footer year to 2026.
4. Create CREDITS.md listing each photo with its licence and author:
   - veggiefrog, CC BY 2.0, https://www.flickr.com/photos/72139255@N00/3428000910
   - Dave Dugdale, CC BY-SA 2.0, https://www.flickr.com/photos/37387065@N05/9031890963
   - Isles Yacht Club, CC BY 2.0, https://www.flickr.com/photos/79003343@N06/15885266785
   - andrew.petro, CC BY 2.0, https://www.flickr.com/photos/14362628@N00/207756390
   - PaulGorduiz106, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=122832368
   - Forest Service Pacific Northwest Region, Public Domain Mark, https://www.flickr.com/photos/135886671@N08/37000797096
   - plus the hero image already used (state where it comes from)
5. Update demo/ISSUES.md: add the missing <html lang> and the vague <title>Home</title> as issues, fix the product names, and correct the total count.

PART B: the screen-reader voice
Create app/index.html (the Usher tool; a single file with inline CSS and a <script type="module">). It is served over http://localhost, not file://.
- Top bar: "Usher" wordmark and a dropdown to pick the page to test (for now one option: "Brightwater Goods (broken)" -> ../demo/broken/index.html).
- Left: the page shown in a same-origin <iframe>.
- Right: a "What a screen reader hears" transcript panel.
- A "Read it aloud" button and a "Stop" button.

How the transcript is built:
- Walk the iframe document in DOM reading order and produce one line per thing a screen reader announces, the way NVDA or VoiceOver phrase it: headings ("Featured Gear, heading level 2"), links ("link" + name), buttons ("button" + name), images ("image" + name), form fields ("edit text" + name), plain text blocks.
- Compute every accessible name with the dom-accessibility-api library loaded from https://cdn.jsdelivr.net/npm/dom-accessibility-api@0.7/+esm (computeAccessibleName). Do not hand-write the naming rules.
- An element with no accessible name gets announced exactly as a real screen reader would announce it: just "button", "link", or for an image with no alt, its file name from the URL.
- A clickable <div> is NOT announced as a button (because screen readers do not), only its text.
- Skip anything hidden (display:none, visibility:hidden, aria-hidden="true").
- Each line in the panel carries a small tag: "OK" if it has a meaningful name, or "No name" / "Not a button" / "File name only" when it is broken.
- Clicking a line in the panel scrolls to that element in the iframe and outlines it.

Reading aloud:
- Use the browser's built-in speechSynthesis, English voice, rate 1.0. Speak the lines one by one, highlighting the current line in the panel and outlining the element in the iframe as it is spoken.
- Stop cancels speech immediately.

Show a small honest note under the panel: "Simulated from the page's accessibility tree. Real screen readers differ in wording."

Do not fix any accessibility problems in the demo shop. When done, list the files changed and show me the first 20 transcript lines you expect for the broken shop.

---

**Status:** active  **Date:** 2026-09-25

---

### 👤 User

TASK 2 for Usher. Two parts: clean-up of the demo shop, then the screen-reader voice.

PART A: clean-up of demo/broken/index.html
1. Remove EVERY comment that mentions a mistake (all "MISTAKE" HTML and CSS comments). The page must look like normal code a real developer wrote; the only place the answers live is demo/ISSUES.md.
2. Add an <html> element wrapping the page, still WITHOUT a lang attribute (that is deliberate mistake).
3. Replace the six products and their images with these (keep them deliberately WITHOUT alt text):
   - TrailRidge Hiking Boots, $149.00: https://live.staticflickr.com/3334/3428000910_3f1304babf_b.jpg
   - Skyward 4-Person Dome Tent, $289.00: https://live.staticflickr.com/3791/9031890963_4db4816d1c_b.jpg
   - Clearwater Touring Kayak Paddle, $94.00: https://live.staticflickr.com/7574/15885266785_1e7568e53f_b.jpg
   - Summit Daypack 28L, $119.00: https://live.staticflickr.com/97/207756390_b44475411e_b.jpg
   - Coldfront Down Jacket, $215.00: https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Down_jackets_%2809-09-2022%29.jpg/1024px-Down_jackets_%2809-09-2022%29.jpg
   - Guided Trail Day Pass, $65.00: https://live.staticflickr.com/4411/37000797096_3921f09f37_b.jpg
   Update the checkout total to match a sensible cart of 3 items, and change the footer year to 2026.
4. Create CREDITS.md listing each photo with its licence and author:
   - veggiefrog, CC BY 2.0, https://www.flickr.com/photos/72139255@N00/3428000910
   - Dave Dugdale, CC BY-SA 2.0, https://www.flickr.com/photos/37387065@N05/9031890963
   - Isles Yacht Club, CC BY 2.0, https://www.flickr.com/photos/79003343@N06/15885266785
   - andrew.petro, CC BY 2.0, https://www.flickr.com/photos/14362628@N00/207756390
   - PaulGorduiz106, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=122832368
   - Forest Service Pacific Northwest Region, Public Domain Mark, https://www.flickr.com/photos/135886671@N08/37000797096
   - plus the hero image already used (state where it comes from)
5. Update demo/ISSUES.md: add the missing <html lang> and the vague <title>Home</title> as issues, fix the product names, and correct the total count.

PART B: the screen-reader voice
Create app/index.html (the Usher tool; a single file with inline CSS and a <script type="module">). It is served over http://localhost, not file://.
- Top bar: "Usher" wordmark and a dropdown to pick the page to test (for now one option: "Brightwater Goods (broken)" -> ../demo/broken/index.html).
- Left: the page shown in a same-origin <iframe>.
- Right: a "What a screen reader hears" transcript panel.
- A "Read it aloud" button and a "Stop" button.

How the transcript is built:
- Walk the iframe document in DOM reading order and produce one line per thing a screen reader announces, the way NVDA or VoiceOver phrase it: headings ("Featured Gear, heading level 2"), links ("link" + name), buttons ("button" + name), images ("image" + name), form fields ("edit text" + name), plain text blocks.
- Compute every accessible name with the dom-accessibility-api library loaded from https://cdn.jsdelivr.net/npm/dom-accessibility-api@0.7/+esm (computeAccessibleName). Do not hand-write the naming rules.
- An element with no accessible name gets announced exactly as a real screen reader would announce it: just "button", "link", or for an image with no alt, its file name from the URL.
- A clickable <div> is NOT announced as a button (because screen readers do not), only its text.
- Skip anything hidden (display:none, visibility:hidden, aria-hidden="true").
- Each line in the panel carries a small tag: "OK" if it has a meaningful name, or "No name" / "Not a button" / "File name only" when it is broken.
- Clicking a line in the panel scrolls to that element in the iframe and outlines it.

Reading aloud:
- Use the browser's built-in speechSynthesis, English voice, rate 1.0. Speak the lines one by one, highlighting the current line in the panel and outlining the element in the iframe as it is spoken.
- Stop cancels speech immediately.

Show a small honest note under the panel: "Simulated from the page's accessibility tree. Real screen readers differ in wording."

Do not fix any accessibility problems in the demo shop. When done, list the files changed and show me the first 20 transcript lines you expect for the broken shop.

---

### 🤖 Assistant

> 🔧 called: update_todo_list



> 🔧 **update_todo_list** — 
[-] PART A: Read and understand current demo/broken/index.html
[ ] PART A-1: Remove all MISTAKE comments from HTML and CSS
[ ] PART A-2: Add <html> element without lang attribute
[ ] PART A-3: Replace six products with new ones, update total and footer year
[ ] PART A-4: Create CREDITS.md
[ ] PART A-5: Update demo/ISSUES.md
[ ] PART B: Create app/index.html with screen-reader voice tool


### 🤖 Assistant

> 🔧 called: read_file, list_files



> 🔧 **list_files** — demo

> 🔧 **read_file** — demo/broken/index.html

### 🤖 Assistant

> 🔧 called: read_file, read_file



> 🔧 **read_file** — demo/broken/index.html

> 🔧 **read_file** — demo/ISSUES.md

### 🤖 Assistant

> 🔧 called: read_file, read_file

Now let me read the full HTML file to see the MISTAKE comments:

> 🔧 **read_file** — demo/broken/index.html

> 🔧 **read_file** — demo/broken/index.html

### 🤖 Assistant

> 🔧 called: read_file



> 🔧 **read_file** — demo/broken/index.html

### 🤖 Assistant

> 🔧 called: update_todo_list

Now I have a full picture of the file. Let me now write the updated `demo/broken/index.html` and all other files:

> 🔧 **update_todo_list** — 
[x] PART A: Read and understand current demo/broken/index.html
[-] PART A-1: Remove all MISTAKE comments from HTML and CSS
[-] PART A-2: Add <html> element without lang attribute
[-] PART A-3: Replace six products with new ones, update total and footer year
[ ] PART A-4: Create CREDITS.md
[ ] PART A-5: Update demo/ISSUES.md
[ ] PART B: Create app/index.html with screen-reader voice tool


### 🤖 Assistant

> 🔧 called: write_file



> 🔧 **write_file** — demo/broken/index.html

### 🤖 Assistant

> 🔧 called: update_todo_list

Now let me create the CREDITS.md and update ISSUES.md simultaneously:

> 🔧 **update_todo_list** — 
[x] PART A: Read and understand current demo/broken/index.html
[x] PART A-1: Remove all MISTAKE comments from HTML and CSS
[x] PART A-2: Add <html> element without lang attribute
[x] PART A-3: Replace six products with new ones, update total and footer year
[-] PART A-4: Create CREDITS.md
[ ] PART A-5: Update demo/ISSUES.md
[ ] PART B: Create app/index.html with screen-reader voice tool


### 🤖 Assistant

> 🔧 called: search_and_replace

The cart total should be 3 sensible items: TrailRidge Boots ($149) + Summit Daypack 28L ($119) + Guided Trail Day Pass ($65) = $333. Let me recalculate — the file has $453.00. Let me use Boots ($149) + Skyward Tent ($289) + Day Pass ($65) = $503... or Boots ($149) + Daypack ($119) + Down Jacket ($215) = $483. A cleaner 3-item cart: Hiking Boots ($149) + Kayak Paddle ($94) + Down Jacket ($215) = $458. Actually $453 = Boots ($149) + Daypack ($119) + Down Jacket ($215) - $30? Let me just pick clear items: **Hiking Boots $149 + Summit Daypack $119 + Guided Trail Day Pass $65 = $333**. Let me update that:

> 🔧 **search_and_replace** — demo/broken/index.html

### 🤖 Assistant

> 🔧 called: write_file



> 🔧 **write_file** — demo/CREDITS.md

### 🤖 Assistant

> 🔧 called: write_file

Now update ISSUES.md — fix product names, correct total count, add the two new issues (18b and 18c) already in the existing file but need to be listed in the summary, and fix the issue descriptions to reference the new product names:

> 🔧 **write_file** — # Brightwater Goods — Accessibility Issues Answer Key

Total deliberate problems: **20**

---

## Issue 1 — Search button: no accessible name
**Element:** `<button class="icon-btn">` (header, search icon)  
**What is wrong:** The button contains only an SVG icon. There is no `aria-label`, no `aria-labelledby`, no `title`, and no visible text.  
**What a screen-reader user hears:** "button" — with no indication of what the button does.  
**WCAG rule:** 4.1.2 Name, Role, Value (Level A)

---

## Issue 2 — Cart button: no accessible name
**Element:** `<button class="icon-btn">` (header, cart icon)  
**What is wrong:** The button contains only an SVG icon and a small visual badge showing "3". There is no `aria-label` or text equivalent. The badge count ("3 items in cart") is also not conveyed.  
**What a screen-reader user hears:** "button" — cannot tell it is a cart, cannot tell how many items are in it.  
**WCAG rule:** 4.1.2 Name, Role, Value (Level A); 1.3.1 Info and Relationships (Level A)

---

## Issue 3 — Account button: no accessible name
**Element:** `<button class="icon-btn">` (header, account/user icon)  
**What is wrong:** Icon-only button with no `aria-label` or text.  
**What a screen-reader user hears:** "button"  
**WCAG rule:** 4.1.2 Name, Role, Value (Level A)

---

## Issue 4 — Hero image: missing alt attribute
**Element:** `<img src="…unsplash…">` (hero banner)  
**What is wrong:** The `alt` attribute is entirely absent (not just empty). Browsers expose the full URL or filename as the accessible name for missing-`alt` images, giving screen-reader users a long, meaningless string.  
**What a screen-reader user hears:** The raw image URL (e.g. "photo-1506905925346-21bda4d32df4?w=1400&q=80") — lengthy and useless.  
**WCAG rule:** 1.1.1 Non-text Content (Level A)

---

## Issue 5 — Product image 1 (TrailRidge Hiking Boots): missing alt attribute
**Element:** `<img src="…staticflickr…">` (first product card)  
**What is wrong:** No `alt` attribute. The image is the primary visual representation of the product; without alt text, a screen-reader user has no idea what product they are looking at.  
**What a screen-reader user hears:** Raw URL string.  
**WCAG rule:** 1.1.1 Non-text Content (Level A)

---

## Issue 6 — Product image 2 (Skyward 4-Person Dome Tent): missing alt attribute
**Element:** `<img src="…staticflickr…">` (second product card)  
**What is wrong:** No `alt` attribute.  
**What a screen-reader user hears:** Raw URL string.  
**WCAG rule:** 1.1.1 Non-text Content (Level A)

---

## Issue 7 — Product image 3 (Clearwater Touring Kayak Paddle): missing alt attribute
**Element:** `<img src="…staticflickr…">` (third product card)  
**What is wrong:** No `alt` attribute.  
**What a screen-reader user hears:** Raw URL string.  
**WCAG rule:** 1.1.1 Non-text Content (Level A)

---

## Issue 8 — Product image 4 (Summit Daypack 28L): missing alt attribute
**Element:** `<img src="…staticflickr…">` (fourth product card)  
**What is wrong:** No `alt` attribute.  
**What a screen-reader user hears:** Raw URL string.  
**WCAG rule:** 1.1.1 Non-text Content (Level A)

---

## Issue 9 — Product image 5 (Coldfront Down Jacket): missing alt attribute
**Element:** `<img src="…wikimedia…">` (fifth product card)  
**What is wrong:** No `alt` attribute.  
**What a screen-reader user hears:** Raw URL string.  
**WCAG rule:** 1.1.1 Non-text Content (Level A)

---

## Issue 10 — Product image 6 (Guided Trail Day Pass): missing alt attribute
**Element:** `<img src="…staticflickr…">` (sixth product card)  
**What is wrong:** No `alt` attribute.  
**What a screen-reader user hears:** Raw URL string.  
**WCAG rule:** 1.1.1 Non-text Content (Level A)

---

## Issue 11 — Add-to-cart buttons (×6): no accessible name
**Element:** `<button class="product-action-btn">` (cart icon, one per product card)  
**What is wrong:** Six icon-only buttons with no `aria-label`, no visible text, no `title`. The user cannot tell which product they are adding, or even that this is an add-to-cart action.  
**What a screen-reader user hears:** "button" — six times, all indistinguishable from each other.  
**WCAG rule:** 4.1.2 Name, Role, Value (Level A)

---

## Issue 12 — Favourite/heart buttons (×6): no accessible name
**Element:** `<button class="product-action-btn">` (heart icon, one per product card)  
**What is wrong:** Six icon-only buttons with no `aria-label` or text.  
**What a screen-reader user hears:** "button"  
**WCAG rule:** 4.1.2 Name, Role, Value (Level A)

---

## Issue 13 — Email input: no label
**Element:** `<input type="email" placeholder="Email address">`  
**What is wrong:** The field is identified only by its `placeholder` attribute. Placeholders disappear when the user starts typing, are not reliably announced by all screen readers as a programmatic label, and fail as a persistent accessible name.  
**What a screen-reader user hears:** "Edit text" or "Email address edit" (placeholder read once, then gone while typing). On some AT configurations, after focusing and beginning to type, no label is announced at all.  
**WCAG rule:** 1.3.1 Info and Relationships (Level A); 3.3.2 Labels or Instructions (Level A)

---

## Issue 14 — Card number, expiry, CVV inputs: no label
**Element:** `<input type="text" placeholder="Card number">`, `<input type="text" placeholder="MM / YY">`, `<input type="text" placeholder="CVV">`  
**What is wrong:** Same pattern as issue 13 — three payment fields use placeholder text as their only label. Critically, card fields often trigger autofill; without proper labels the browser's autofill engine also cannot identify the fields correctly.  
**What a screen-reader user hears:** Placeholder text read once on focus, then silently absent while typing.  
**WCAG rule:** 1.3.1 Info and Relationships (Level A); 3.3.2 Labels or Instructions (Level A)

---

## Issue 15 — "Pay" button is a `<div>`, not a `<button>`
**Element:** `<div class="pay-btn-fake" onclick="…">Pay $333.00</div>`  
**What is wrong:** A `<div>` is not an interactive element. It has no implicit ARIA role of `button`, is not included in the tab order, cannot be activated with Enter or Space, and is not announced by screen readers as a control. The `onclick` attribute only fires for mouse clicks — keyboard users cannot trigger it at all.  
**What a screen-reader user hears:** "Pay $333.00" read as plain text — not announced as a button. In many screen readers it will be completely skipped when navigating by interactive elements.  
**WCAG rule:** 4.1.2 Name, Role, Value (Level A); 2.1.1 Keyboard (Level A)

---

## Issue 16 — Order status communicated by colour only
**Element:** `<div id="order-dot" class="status-dot red/green"></div>` with the label "Order status"  
**What is wrong:** Whether the order succeeded (green) or failed (red) is conveyed exclusively by the colour of a small dot. There is no text, no icon with alt text, no `aria-live` region, and no programmatic state change that assistive technology can surface.  
**What a screen-reader user hears:** Nothing changes — the dot has no text content and no accessible label. The user cannot determine whether their payment succeeded or failed.  
**WCAG rule:** 1.4.1 Use of Color (Level A); 4.1.3 Status Messages (Level AA)

---

## Issue 17 — Low-contrast body text (grey on white)
**Element:** `<p class="low-contrast-text">` inside the "Why shop with us?" trust block  
**What is wrong:** The text colour is `#c0c0c0` on a white (`#ffffff`) background. The contrast ratio is approximately 1.6:1. WCAG AA requires a minimum of 4.5:1 for normal text.  
**What a screen-reader user hears:** N/A (contrast is a visual issue, not a screen-reader issue). However, this content is invisible or nearly invisible to users with low vision, colour blindness, or anyone reading in bright light.  
**WCAG rule:** 1.4.3 Contrast (Minimum) (Level AA)

---

## Issue 18 — Social icon links: no accessible name
**Element:** `<a href="#" class="social-link">` (×4 in footer, Instagram / X / YouTube / Facebook)  
**What is wrong:** Each link contains only an SVG icon with no `aria-label`, no `title`, and no visible text. The links are indistinguishable from one another and have no meaningful name.  
**What a screen-reader user hears:** "link" — four times, with no indication of the destination or platform.  
**WCAG rule:** 4.1.2 Name, Role, Value (Level A); 2.4.4 Link Purpose (In Context) (Level A)

---

## Issue 19 — Missing `lang` attribute on `<html>`
**Element:** `<html>` — the element has no `lang` attribute  
**What is wrong:** Without a declared language, screen readers cannot select the correct pronunciation engine or voice. Text-to-speech may mispronounce words using the user's default system language rather than English.  
**What a screen-reader user hears:** Words may be mispronounced (e.g. English text read with a French or German phonology if that is the system default).  
**WCAG rule:** 3.1.1 Language of Page (Level A)

---

## Issue 20 — Vague page `<title>`
**Element:** `<title>Home</title>`  
**What is wrong:** "Home" gives no indication of which site the user is on. When multiple browser tabs are open, this title is useless. Screen readers announce the page title on load.  
**What a screen-reader user hears:** "Home" — no brand name, no context.  
**WCAG rule:** 2.4.2 Page Titled (Level A)

---

## Summary table

| # | Element | WCAG Criterion | Level |
|---|---------|----------------|-------|
| 1 | Search button | 4.1.2 Name, Role, Value | A |
| 2 | Cart button (+ badge) | 4.1.2 Name, Role, Value; 1.3.1 | A |
| 3 | Account button | 4.1.2 Name, Role, Value | A |
| 4 | Hero image | 1.1.1 Non-text Content | A |
| 5 | Product img 1 (TrailRidge Hiking Boots) | 1.1.1 Non-text Content | A |
| 6 | Product img 2 (Skyward 4-Person Dome Tent) | 1.1.1 Non-text Content | A |
| 7 | Product img 3 (Clearwater Touring Kayak Paddle) | 1.1.1 Non-text Content | A |
| 8 | Product img 4 (Summit Daypack 28L) | 1.1.1 Non-text Content | A |
| 9 | Product img 5 (Coldfront Down Jacket) | 1.1.1 Non-text Content | A |
| 10 | Product img 6 (Guided Trail Day Pass) | 1.1.1 Non-text Content | A |
| 11 | Add-to-cart buttons (×6) | 4.1.2 Name, Role, Value | A |
| 12 | Favourite buttons (×6) | 4.1.2 Name, Role, Value | A |
| 13 | Email input | 1.3.1; 3.3.2 | A |
| 14 | Card/expiry/CVV inputs (×3) | 1.3.1; 3.3.2 | A |
| 15 | Fake `<div>` Pay button | 4.1.2; 2.1.1 Keyboard | A |
| 16 | Colour-only order status | 1.4.1 Use of Color; 4.1.3 | A/AA |
| 17 | Low-contrast trust text | 1.4.3 Contrast Minimum | AA |
| 18 | Social icon links (×4) | 4.1.2; 2.4.4 Link Purpose | A |
| 19 | Missing `<html lang>` | 3.1.1 Language of Page | A |
| 20 | Vague `<title>` "Home" | 2.4.2 Page Titled | A |


### 🤖 Assistant

> 🔧 called: update_todo_list



> 🔧 **update_todo_list** — 
[x] PART A: Read and understand current demo/broken/index.html
[x] PART A-1: Remove all MISTAKE comments from HTML and CSS
[x] PART A-2: Add <html> element without lang attribute
[x] PART A-3: Replace six products with new ones, update total and footer year
[x] PART A-4: Create CREDITS.md
[x] PART A-5: Update demo/ISSUES.md
[-] PART B: Create app/index.html with screen-reader voice tool


### 🤖 Assistant

> 🔧 called: write_file

Now for Part B — the Usher tool. This needs careful thought:
- Same-origin iframe (served over localhost, so `../demo/broken/index.html` is same-origin ✓)
- dom-accessibility-api from jsDelivr CDN as ESM
- Walk DOM in reading order, produce screen-reader transcript
- Tags: "OK", "No name", "Not a button", "File name only"
- Click a line → scroll + outline in iframe
- Read aloud with speechSynthesis

> 🔧 **write_file** — <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Usher — Screen Reader Simulator</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: -apple-system, "Segoe UI", system-ui, sans-serif;
      background: #f3f4f6;
      color: #1f2328;
      height: 100vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    /* ── Top bar ── */
    .topbar {
      background: #111827;
      color: #fff;
      height: 52px;
      display: flex;
      align-items: center;
      padding: 0 1.25rem;
      gap: 1.5rem;
      flex-shrink: 0;
      border-bottom: 1px solid #374151;
    }
    .wordmark {
      font-size: 1.1rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      color: #fff;
    }
    .wordmark span { color: #3b82d4; }
    .topbar label {
      font-size: 0.8rem;
      color: #9ca3af;
      margin-right: 0.25rem;
    }
    .page-select {
      background: #1f2937;
      color: #f9fafb;
      border: 1px solid #374151;
      border-radius: 5px;
      padding: 0.35rem 0.6rem;
      font-size: 0.85rem;
      cursor: pointer;
      min-width: 240px;
    }
    .page-select:focus { outline: 2px solid #3b82d4; outline-offset: 2px; }

    /* ── Main layout ── */
    .main {
      display: grid;
      grid-template-columns: 1fr 380px;
      flex: 1;
      overflow: hidden;
      gap: 0;
    }

    /* ── iframe pane ── */
    .iframe-pane {
      position: relative;
      background: #e5e7eb;
      overflow: hidden;
    }
    #page-frame {
      width: 100%;
      height: 100%;
      border: none;
      display: block;
      background: #fff;
    }

    /* ── Right panel ── */
    .right-panel {
      display: flex;
      flex-direction: column;
      background: #fff;
      border-left: 1px solid #e5e7eb;
      overflow: hidden;
    }
    .panel-header {
      padding: 0.75rem 1rem 0.6rem;
      border-bottom: 1px solid #e5e7eb;
      flex-shrink: 0;
    }
    .panel-title {
      font-size: 0.85rem;
      font-weight: 600;
      color: #111827;
      margin-bottom: 0.5rem;
    }
    .controls {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
    .btn {
      padding: 0.4rem 0.9rem;
      border-radius: 5px;
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
      border: 1px solid transparent;
      transition: background 0.15s;
    }
    .btn-scan {
      background: #1f2937;
      color: #fff;
      border-color: #1f2937;
    }
    .btn-scan:hover { background: #111827; }
    .btn-read {
      background: #3b82d4;
      color: #fff;
      border-color: #3b82d4;
    }
    .btn-read:hover { background: #2563eb; }
    .btn-stop {
      background: #fff;
      color: #374151;
      border-color: #d1d5db;
    }
    .btn-stop:hover { background: #f3f4f6; }
    .btn:disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }

    /* ── Transcript ── */
    .transcript {
      flex: 1;
      overflow-y: auto;
      padding: 0.5rem 0;
    }
    .transcript-empty {
      padding: 2rem 1rem;
      text-align: center;
      color: #9ca3af;
      font-size: 0.85rem;
    }
    .t-line {
      display: flex;
      align-items: baseline;
      gap: 0.5rem;
      padding: 0.3rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.1s;
      font-size: 0.82rem;
      line-height: 1.45;
    }
    .t-line:hover { background: #f3f4f6; }
    .t-line.active { background: #eff6ff; }
    .t-line.speaking { background: #dbeafe; }
    .t-text {
      flex: 1;
      color: #1f2328;
    }
    .t-tag {
      flex-shrink: 0;
      font-size: 0.7rem;
      font-weight: 600;
      padding: 0.1rem 0.4rem;
      border-radius: 3px;
      white-space: nowrap;
    }
    .tag-ok    { background: #dcfce7; color: #166534; }
    .tag-noname { background: #fef9c3; color: #854d0e; }
    .tag-notbtn { background: #fee2e2; color: #991b1b; }
    .tag-filename { background: #ffedd5; color: #9a3412; }

    /* ── Disclaimer ── */
    .disclaimer {
      padding: 0.6rem 1rem;
      border-top: 1px solid #e5e7eb;
      font-size: 0.72rem;
      color: #9ca3af;
      line-height: 1.4;
      flex-shrink: 0;
    }
  </style>
</head>
<body>

<div class="topbar">
  <div class="wordmark">Usher<span>.</span></div>
  <label for="page-select">Page to test:</label>
  <select id="page-select" class="page-select">
    <option value="../demo/broken/index.html">Brightwater Goods (broken)</option>
  </select>
</div>

<div class="main">
  <div class="iframe-pane">
    <iframe id="page-frame" src="../demo/broken/index.html" title="Page under test"></iframe>
  </div>

  <div class="right-panel">
    <div class="panel-header">
      <div class="panel-title">What a screen reader hears</div>
      <div class="controls">
        <button class="btn btn-scan" id="btn-scan">Scan page</button>
        <button class="btn btn-read" id="btn-read" disabled>Read it aloud</button>
        <button class="btn btn-stop" id="btn-stop" disabled>Stop</button>
      </div>
    </div>

    <div class="transcript" id="transcript">
      <div class="transcript-empty">Load a page and click "Scan page" to see what a screen reader hears.</div>
    </div>

    <div class="disclaimer">
      Simulated from the page's accessibility tree. Real screen readers differ in wording.
    </div>
  </div>
</div>

<script type="module">
import { computeAccessibleName } from 'https://cdn.jsdelivr.net/npm/dom-accessibility-api@0.7/+esm';

const frame     = document.getElementById('page-frame');
const select    = document.getElementById('page-select');
const btnScan   = document.getElementById('btn-scan');
const btnRead   = document.getElementById('btn-read');
const btnStop   = document.getElementById('btn-stop');
const transcript = document.getElementById('transcript');

let lines = [];          // array of {text, tag, el}
let speakIndex = -1;
let utteranceQueue = []; // not used directly; cancel via speechSynthesis

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
});

function speakNext() {
  speakIndex++;
  if (speakIndex >= lines.length) {
    btnRead.disabled = false;
    btnStop.disabled = true;
    clearActiveHighlight();
    clearIframeOutline();
    return;
  }

  const line = lines[speakIndex];
  highlightLine(speakIndex);
  outlineElement(line.el);

  const u = new SpeechSynthesisUtterance(line.text);
  u.lang = 'en-US';
  u.rate = 1.0;
  // prefer an English voice if available
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

function buildTranscript(doc) {
  const result = [];
  const walker = doc.createTreeWalker(
    doc.body,
    NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          return isHidden(node) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_SKIP;
        }
        if (node.nodeType === Node.TEXT_NODE) {
          const parent = node.parentElement;
          if (!parent || isHidden(parent)) return NodeFilter.FILTER_REJECT;
          if (shouldSkipForText(parent)) return NodeFilter.FILTER_REJECT;
          const text = node.textContent.trim();
          return text ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_SKIP;
      }
    }
  );

  // Use a flat element walk instead, depth-first
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
      if (name) {
        result.push({ text: `link, ${name}`, tag: 'ok', el: node });
      } else {
        result.push({ text: `link`, tag: 'noname', el: node });
      }
      markDescendantsSeen(node, seen);
      continue;
    }

    // Buttons (real <button> or role="button")
    if (tag === 'button' || role === 'button') {
      const name = computeAccessibleName(node).trim();
      if (name) {
        result.push({ text: `button, ${name}`, tag: 'ok', el: node });
      } else {
        result.push({ text: `button`, tag: 'noname', el: node });
      }
      markDescendantsSeen(node, seen);
      continue;
    }

    // Images
    if (tag === 'img') {
      // aria-hidden or role=presentation/none → skip
      if (node.getAttribute('aria-hidden') === 'true' ||
          node.getAttribute('role') === 'presentation' ||
          node.getAttribute('role') === 'none') continue;
      // empty alt → decorative, skip
      if (node.hasAttribute('alt') && node.getAttribute('alt') === '') continue;

      const name = computeAccessibleName(node).trim();
      if (name) {
        // Check if name is just the file name derived from URL (no alt attribute)
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
        // placeholder as fallback label (what AT often does, but unreliable)
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

    // Plain text blocks (p, li, td, dt, dd, caption, label, legend, blockquote, figcaption, etc.)
    const TEXT_CONTAINERS = new Set(['p','li','td','th','dt','dd','caption','figcaption',
      'blockquote','cite','q','legend','label','span','div']);
    if (TEXT_CONTAINERS.has(tag)) {
      // Only emit if this node has direct meaningful text (not all just nested elements)
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

function shouldSkipForText(el) {
  const tag = el.tagName.toLowerCase();
  const skipTags = new Set(['script','style','noscript','svg','head','meta','link']);
  return skipTags.has(tag);
}

function getEffectiveRole(el) {
  const explicit = el.getAttribute('role');
  if (explicit) return explicit;
  return null;
}

function getTextContent(el) {
  return el.textContent || '';
}

function getDirectText(el) {
  let text = '';
  for (const child of el.childNodes) {
    if (child.nodeType === Node.TEXT_NODE) {
      text += child.textContent;
    }
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

// ── Render ───────────────────────────────────────────────────────────────────

const TAG_CONFIG = {
  ok:       { label: 'OK',          cls: 'tag-ok' },
  noname:   { label: 'No name',     cls: 'tag-noname' },
  notbtn:   { label: 'Not a button',cls: 'tag-notbtn' },
  filename: { label: 'File name only', cls: 'tag-filename' },
};

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
  if (el) {
    el._usherOldOutline = el.style.outline;
    el.style.outline = '3px solid #3b82d4';
    lastOutlined = el;
  }
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
  try {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } catch {}
}

function escHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── Voices lazy-load ─────────────────────────────────────────────────────────
// Chrome loads voices asynchronously; pre-warm them.
if (window.speechSynthesis) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.addEventListener('voiceschanged', () => {
    window.speechSynthesis.getVoices();
  });
}
</script>
</body>
</html>


### 🤖 Assistant

> 🔧 called: list_files, list_files

Now let me verify all files look correct:

> 🔧 **list_files** — demo

> 🔧 **list_files** — app

### 🤖 Assistant

> 🔧 called: grep, grep

Let me do a quick sanity check on the broken HTML to make sure no MISTAKE comments remain and it has `<html>`:

> 🔧 **grep** — MISTAKE

> 🔧 **grep** — ^<html

### 🤖 Assistant

> 🔧 called: grep

Zero MISTAKE comments, `<html>` without `lang` on line 2. Let me also verify the new product names and total are correct:

> 🔧 **grep** — demo/broken/index.html

### 🤖 Assistant

> 🔧 called: grep

All six products correct, total is $333.00 (Boots $149 + Daypack $119 + Day Pass $65), footer says 2026.

Now let me verify the Usher app has the key pieces — dom-accessibility-api import, iframe, transcript panel, buttons:

> 🔧 **grep** — app/index.html

### 🤖 Assistant

> 🔧 called: update_todo_list



> 🔧 **update_todo_list** — 
[x] PART A: Read and understand current demo/broken/index.html
[x] PART A-1: Remove all MISTAKE comments from HTML and CSS
[x] PART A-2: Add <html> element without lang attribute
[x] PART A-3: Replace six products with new ones, update total and footer year
[x] PART A-4: Create CREDITS.md
[x] PART A-5: Update demo/ISSUES.md
[x] PART B: Create app/index.html with screen-reader voice tool


### 🤖 Assistant

All done. Here's a summary of every file touched and the first 20 transcript lines you should expect.

---

## Files changed

| File | What changed |
|---|---|
| [`demo/broken/index.html`](demo/broken/index.html) | Removed all MISTAKE HTML/CSS comments; wrapped with `<html>` (no `lang`); replaced all 6 products with new names, categories and Flickr/Wikimedia image URLs; pay total → `$333.00`; footer year → 2026 |
| [`demo/CREDITS.md`](demo/CREDITS.md) | New file — author, licence, and URL for every image including the Unsplash hero |
| [`demo/ISSUES.md`](demo/ISSUES.md) | Total updated to **20**; issues 18b/18c promoted to issues 19/20; product names corrected throughout; `$652.00` → `$333.00`; image src hints updated to `staticflickr` / `wikimedia` |
| [`app/index.html`](app/index.html) | New file — the Usher screen-reader simulator |

---

## First 20 transcript lines you'd expect for the broken shop

| # | Line | Tag |
|---|---|---|
| 1 | `link, Brightwater.` | OK |
| 2 | `button` | No name |
| 3 | `button` | No name |
| 4 | `button` | No name |
| 5 | `image, photo-1506905925346-21bda4d32df4?w=1400&q=80` | File name only |
| 6 | `Gear up for the wild., heading level 1` | OK |
| 7 | `Premium outdoor equipment for every adventure.` | OK |
| 8 | `link, Shop now` | OK |
| 9 | `Featured Gear, heading level 2` | OK |
| 10 | `image, 3428000910_3f1304babf_b.jpg` | File name only |
| 11 | `button` | No name |
| 12 | `button` | No name |
| 13 | `Hiking` | OK |
| 14 | `TrailRidge Hiking Boots` | OK |
| 15 | `$149.00` | OK |
| 16 | `image, 9031890963_4db4816d1c_b.jpg` | File name only |
| 17 | `button` | No name |
| 18 | `button` | No name |
| 19 | `Camping` | OK |
| 20 | `Skyward 4-Person Dome Tent` | OK |

The pattern repeats for each product card, then later you get the unlabelled form fields, `Pay $333.00` tagged **Not a button** (it's a `<div>`), and four footer `link` entries tagged **No name**.