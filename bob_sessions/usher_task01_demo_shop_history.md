# We are building "Usher" for the IBM Bob 2.0 hackathon: a tool that shows developers what their web page is like for a blind person using a screen reader, then fixes it.

TASK 1: Build the demo shop that Usher will be tested on. It must look beautiful and professional, but contain accessibility mistakes on purpose.

Create this structure:
- index.html  (placeholder home page for Usher: title "Usher", one line "Your app, in the dark.", a link to the demo shop)
- demo/broken/index.html  (the demo shop)
- demo/ISSUES.md  (the answer key)
- README.md  (two lines for now)
- bob_sessions/  (already exists, leave it)

The demo shop:
- A made-up shop called "Brightwater Goods" selling outdoor gear. Do NOT use any real brand names.
- A header with a logo, a search icon button, a cart icon button showing "3", and an account icon button.
- A hero banner with a large image and a "Shop now" call to action.
- A product grid of 6 products (name, price, image, add-to-cart icon button, favourite heart icon button).
- A small checkout panel: email field, card number field, a "Pay" button, and an order status shown only by a coloured dot.
- A footer with social media icon links.
- Use real-looking free images from https://images.unsplash.com (or neutral CSS gradients if images fail). Modern, clean design. Everything inline in one HTML file (inline CSS, inline JS), no build step, no ES modules, so it works by double-clicking the file.

The deliberate mistakes (make each one realistic, the way real developers make them):
1. Icon-only buttons (search, cart, account, add-to-cart, favourite) with NO text and NO aria-label.
2. Product images and the hero image with NO alt attribute.
3. Form fields with only placeholder text and NO <label>.
4. The "Pay" button built as a <div> with a click handler (not a real button, not keyboard reachable).
5. Order status shown ONLY by colour (a green/red dot), no text.
6. Social icon links with no accessible name.
7. One low-contrast grey-on-white text block.
8. No <html lang> attribute and a vague page <title> like "Home".
Aim for roughly 15 to 20 individual problems in total.

demo/ISSUES.md: list EVERY deliberate mistake as a numbered list: the element, what is wrong, what a screen reader user would hear or experience, and the WCAG rule it breaks. This is our answer key, so be exact and complete.

Do not fix any of the mistakes. Do not add any accessibility features. When done, list the files you created and the total number of deliberate problems.

---

**Status:** active  **Date:** 2026-09-25

---

### 👤 User

We are building "Usher" for the IBM Bob 2.0 hackathon: a tool that shows developers what their web page is like for a blind person using a screen reader, then fixes it.

TASK 1: Build the demo shop that Usher will be tested on. It must look beautiful and professional, but contain accessibility mistakes on purpose.

Create this structure:
- index.html  (placeholder home page for Usher: title "Usher", one line "Your app, in the dark.", a link to the demo shop)
- demo/broken/index.html  (the demo shop)
- demo/ISSUES.md  (the answer key)
- README.md  (two lines for now)
- bob_sessions/  (already exists, leave it)

The demo shop:
- A made-up shop called "Brightwater Goods" selling outdoor gear. Do NOT use any real brand names.
- A header with a logo, a search icon button, a cart icon button showing "3", and an account icon button.
- A hero banner with a large image and a "Shop now" call to action.
- A product grid of 6 products (name, price, image, add-to-cart icon button, favourite heart icon button).
- A small checkout panel: email field, card number field, a "Pay" button, and an order status shown only by a coloured dot.
- A footer with social media icon links.
- Use real-looking free images from https://images.unsplash.com (or neutral CSS gradients if images fail). Modern, clean design. Everything inline in one HTML file (inline CSS, inline JS), no build step, no ES modules, so it works by double-clicking the file.

The deliberate mistakes (make each one realistic, the way real developers make them):
1. Icon-only buttons (search, cart, account, add-to-cart, favourite) with NO text and NO aria-label.
2. Product images and the hero image with NO alt attribute.
3. Form fields with only placeholder text and NO <label>.
4. The "Pay" button built as a <div> with a click handler (not a real button, not keyboard reachable).
5. Order status shown ONLY by colour (a green/red dot), no text.
6. Social icon links with no accessible name.
7. One low-contrast grey-on-white text block.
8. No <html lang> attribute and a vague page <title> like "Home".
Aim for roughly 15 to 20 individual problems in total.

demo/ISSUES.md: list EVERY deliberate mistake as a numbered list: the element, what is wrong, what a screen reader user would hear or experience, and the WCAG rule it breaks. This is our answer key, so be exact and complete.

Do not fix any of the mistakes. Do not add any accessibility features. When done, list the files you created and the total number of deliberate problems.

---

### 🤖 Assistant

> 🔧 called: update_todo_list



> 🔧 **update_todo_list** — 
[-] Create index.html (Usher placeholder home page)
[ ] Create demo/broken/index.html (Brightwater Goods demo shop with deliberate accessibility mistakes)
[ ] Create demo/ISSUES.md (answer key for all deliberate mistakes)
[ ] Create README.md (two lines)


### 🤖 Assistant

> 🔧 called: write_file



> 🔧 **write_file** — index.html

### 🤖 Assistant

> 🔧 called: update_todo_list



> 🔧 **update_todo_list** — 
[x] Create index.html (Usher placeholder home page)
[-] Create demo/broken/index.html (Brightwater Goods demo shop with deliberate accessibility mistakes)
[ ] Create demo/ISSUES.md (answer key for all deliberate mistakes)
[ ] Create README.md (two lines)


### 🤖 Assistant

> 🔧 called: write_file



> 🔧 **write_file** — demo/broken/index.html

### 🤖 Assistant

> 🔧 called: update_todo_list



> 🔧 **update_todo_list** — 
[x] Create index.html (Usher placeholder home page)
[x] Create demo/broken/index.html (Brightwater Goods demo shop with deliberate accessibility mistakes)
[-] Create demo/ISSUES.md (answer key for all deliberate mistakes)
[ ] Create README.md (two lines)


### 🤖 Assistant

> 🔧 called: write_file



> 🔧 **write_file** — # Brightwater Goods — Accessibility Issues Answer Key

Total deliberate problems: **18**

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
**Element:** `<img src="…unsplash…">` (first product card)  
**What is wrong:** No `alt` attribute. The image is the primary visual representation of the product; without alt text, a screen-reader user has no idea what product they are looking at.  
**What a screen-reader user hears:** Raw URL string.  
**WCAG rule:** 1.1.1 Non-text Content (Level A)

---

## Issue 6 — Product image 2 (Skyward Tent): missing alt attribute
**Element:** `<img src="…unsplash…">` (second product card)  
**What is wrong:** No `alt` attribute.  
**What a screen-reader user hears:** Raw URL string.  
**WCAG rule:** 1.1.1 Non-text Content (Level A)

---

## Issue 7 — Product image 3 (Clearwater Paddle): missing alt attribute
**Element:** `<img src="…unsplash…">` (third product card)  
**What is wrong:** No `alt` attribute.  
**What a screen-reader user hears:** Raw URL string.  
**WCAG rule:** 1.1.1 Non-text Content (Level A)

---

## Issue 8 — Product image 4 (Climbing Harness): missing alt attribute
**Element:** `<img src="…unsplash…">` (fourth product card)  
**What is wrong:** No `alt` attribute.  
**What a screen-reader user hears:** Raw URL string.  
**WCAG rule:** 1.1.1 Non-text Content (Level A)

---

## Issue 9 — Product image 5 (Insulated Jacket): missing alt attribute
**Element:** `<img src="…unsplash…">` (fifth product card)  
**What is wrong:** No `alt` attribute.  
**What a screen-reader user hears:** Raw URL string.  
**WCAG rule:** 1.1.1 Non-text Content (Level A)

---

## Issue 10 — Product image 6 (GPS Compass Watch): missing alt attribute
**Element:** `<img src="…unsplash…">` (sixth product card)  
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
**Element:** `<div class="pay-btn-fake" onclick="…">Pay $652.00</div>`  
**What is wrong:** A `<div>` is not an interactive element. It has no implicit ARIA role of `button`, is not included in the tab order, cannot be activated with Enter or Space, and is not announced by screen readers as a control. The `onclick` attribute only fires for mouse clicks — keyboard users cannot trigger it at all.  
**What a screen-reader user hears:** "Pay $652.00" read as plain text — not announced as a button. In many screen readers it will be completely skipped when navigating by interactive elements.  
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

## Issue 18b (bonus) — Missing `lang` attribute on `<html>`
**Element:** `<!DOCTYPE html><head>…` — the `<html>` element has no `lang` attribute  
**What is wrong:** Without a declared language, screen readers cannot select the correct pronunciation engine or voice. Text-to-speech may mispronounce words using the user's default system language rather than English.  
**What a screen-reader user hears:** Words may be mispronounced (e.g. English text read with a French or German phonology if that is the system default).  
**WCAG rule:** 3.1.1 Language of Page (Level A)

---

## Issue 18c (bonus) — Vague page `<title>`
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
| 5 | Product img 1 | 1.1.1 Non-text Content | A |
| 6 | Product img 2 | 1.1.1 Non-text Content | A |
| 7 | Product img 3 | 1.1.1 Non-text Content | A |
| 8 | Product img 4 | 1.1.1 Non-text Content | A |
| 9 | Product img 5 | 1.1.1 Non-text Content | A |
| 10 | Product img 6 | 1.1.1 Non-text Content | A |
| 11 | Add-to-cart buttons (×6) | 4.1.2 Name, Role, Value | A |
| 12 | Favourite buttons (×6) | 4.1.2 Name, Role, Value | A |
| 13 | Email input | 1.3.1; 3.3.2 | A |
| 14 | Card/expiry/CVV inputs (×3) | 1.3.1; 3.3.2 | A |
| 15 | Fake `<div>` Pay button | 4.1.2; 2.1.1 Keyboard | A |
| 16 | Colour-only order status | 1.4.1 Use of Color; 4.1.3 | A/AA |
| 17 | Low-contrast trust text | 1.4.3 Contrast Minimum | AA |
| 18 | Social icon links (×4) | 4.1.2; 2.4.4 Link Purpose | A |
| 18b | Missing `<html lang>` | 3.1.1 Language of Page | A |
| 18c | Vague `<title>` "Home" | 2.4.2 Page Titled | A |


### 🤖 Assistant

> 🔧 called: update_todo_list



> 🔧 **update_todo_list** — 
[x] Create index.html (Usher placeholder home page)
[x] Create demo/broken/index.html (Brightwater Goods demo shop with deliberate accessibility mistakes)
[x] Create demo/ISSUES.md (answer key for all deliberate mistakes)
[-] Create README.md (two lines)


### 🤖 Assistant

> 🔧 called: write_file



> 🔧 **write_file** — # Usher
A tool that shows developers what their web page is like for a blind person using a screen reader — then fixes it.


### 🤖 Assistant

> 🔧 called: update_todo_list



> 🔧 **update_todo_list** — 
[x] Create index.html (Usher placeholder home page)
[x] Create demo/broken/index.html (Brightwater Goods demo shop with deliberate accessibility mistakes)
[x] Create demo/ISSUES.md (answer key for all deliberate mistakes)
[x] Create README.md (two lines)


### 🤖 Assistant

Done. Here's everything that was created:

---

### Files created

| File | Description |
|------|-------------|
| [`index.html`](index.html) | Usher home page — dark background, "Your app, in the dark.", link to demo shop |
| [`demo/broken/index.html`](demo/broken/index.html) | Brightwater Goods demo shop — self-contained, zero build step |
| [`demo/ISSUES.md`](demo/ISSUES.md) | Full answer key with element, diagnosis, screen-reader experience, and WCAG rule for every issue |
| [`README.md`](README.md) | Two-line project intro |

---

### Deliberate problems planted: **20 distinct issues**

| Category | Count | Issues |
|----------|-------|--------|
| Icon-only buttons with no accessible name | 15 | Search (1), Cart (1), Account (1), Add-to-cart ×6 (6), Favourite ×6 (6) |
| Missing `alt` on images | 7 | Hero image (1), 6 product images (6) |
| Form fields with no `<label>` | 4 | Email, Card number, Expiry, CVV |
| Non-button used as button (`<div>` Pay) | 1 | Not focusable by keyboard, no role |
| Colour-only status | 1 | Green/red dot, no text, no `aria-live` |
| Social links with no accessible name | 4 | Instagram, X, YouTube, Facebook |
| Low-contrast text | 1 | `#c0c0c0` on white ≈ 1.6:1 (need 4.5:1) |
| Missing `<html lang>` | 1 | Mispronounced TTS |
| Vague `<title>` | 1 | "Home" — no brand context |

The cart badge ("3") compounds issue 2 — a screen reader user also cannot hear the item count. Each issue in [`demo/ISSUES.md`](demo/ISSUES.md) cross-references the exact WCAG criterion and level (A or AA).