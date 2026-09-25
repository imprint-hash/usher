# Usher scanned demo/broken/index.html (Brightwater Goods) and found 32 of 62 items a screen reader user cannot use: icon-only buttons with no name, images with no alt, form fields labelled only by placeholder, a Pay "button" that is a <div>, a cart count read as just "3", an order status shown only by colour, unnamed social links, plus a missing page language, a vague title and low-contrast text.

Fix the page following your rules: copy it to demo/fixed/index.html, fix the copy, and write demo/fixed/FIXES.md.

Do NOT open or read demo/ISSUES.md. That is our answer key, and we will check your work against it afterwards, so find the problems yourself.

---

**Status:** active  **Date:** 2026-09-25

---

### 👤 User

Usher scanned demo/broken/index.html (Brightwater Goods) and found 32 of 62 items a screen reader user cannot use: icon-only buttons with no name, images with no alt, form fields labelled only by placeholder, a Pay "button" that is a <div>, a cart count read as just "3", an order status shown only by colour, unnamed social links, plus a missing page language, a vague title and low-contrast text.

Fix the page following your rules: copy it to demo/fixed/index.html, fix the copy, and write demo/fixed/FIXES.md.

Do NOT open or read demo/ISSUES.md. That is our answer key, and we will check your work against it afterwards, so find the problems yourself.

---

### 🤖 Assistant

> 🔧 called: read_file

I'll start by reading the workflow rules, then audit the broken page before touching anything.

> 🔧 **read_file** — demo/broken/index.html

### 🤖 Assistant

> 🔧 called: read_file

Now let me read the full raw HTML to get exact text and line numbers:

> 🔧 **read_file** — demo/broken/index.html

### 🤖 Assistant

> 🔧 called: write_file

Now I have a complete picture of every problem. Let me audit them all before writing a single line:

**Complete problem list:**
1. `<html>` — missing `lang` attribute
2. `<title>Home</title>` — vague, doesn't identify the site
3. Search button (line 360) — icon-only, no accessible name
4. Cart button (line 365) — icon-only, no accessible name
5. Cart badge `<span>3</span>` (line 369) — announced as bare "3", no context
6. Account button (line 371) — icon-only, no accessible name
7. Hero `<img>` (line 384) — no `alt` attribute
8. Product 1 `<img>` (line 404) — no `alt`
9. Product 1 "Add to cart" button (line 406) — icon-only, no name
10. Product 1 "Save" button (line 412) — icon-only, no name
11. Product 2 `<img>` (line 429) — no `alt`
12. Product 2 "Add to cart" button (line 431) — icon-only, no name
13. Product 2 "Save" button (line 437) — icon-only, no name
14. Product 3 `<img>` (line 454) — no `alt`
15. Product 3 "Add to cart" button (line 456) — icon-only, no name
16. Product 3 "Save" button (line 462) — icon-only, no name
17. Product 4 `<img>` (line 479) — no `alt`
18. Product 4 "Add to cart" button (line 481) — icon-only, no name
19. Product 4 "Save" button (line 487) — icon-only, no name
20. Product 5 `<img>` (line 504) — no `alt`
21. Product 5 "Add to cart" button (line 506) — icon-only, no name
22. Product 5 "Save" button (line 512) — icon-only, no name
23. Product 6 `<img>` (line 529) — no `alt`
24. Product 6 "Add to cart" button (line 531) — icon-only, no name
25. Product 6 "Save" button (line 537) — icon-only, no name
26. Email input (line 564) — no `<label>`, placeholder only
27. Card number input (line 567) — no `<label>`, placeholder only
28. MM/YY input (line 571) — no `<label>`, placeholder only
29. CVV input (line 574) — no `<label>`, placeholder only
30. `<div class="pay-btn-fake">` (line 578) — `<div>` used as button, not keyboard-accessible
31. Order status dot (line 583) — colour-only (red/green dot), no text equivalent; `<div>` not a live region
32. Low-contrast text (lines 591–598) — `#c0c0c0` on `#fff` ≈ 1.6:1
33. Instagram link (line 615) — icon-only, no accessible name
34. Twitter/X link (line 623) — icon-only, no accessible name
35. YouTube link (line 629) — icon-only, no accessible name
36. Facebook link (line 636) — icon-only, no accessible name

That's 36 distinct issues. Now I'll create the fixed copy:

> 🔧 **write_file** — demo/fixed/index.html

### 🤖 Assistant

> 🔧 called: write_file

Now write the report:

> 🔧 **write_file** — demo/fixed/FIXES.md

### 🤖 Assistant

> 🔧 called: execute_command

Let me do a quick sanity-check that all the critical fixes are actually present in the file:

> 🔧 **execute_command** — 
# Verify each class of fix is present in the output file
$file = Get-Content "demo/fixed/index.html" -Raw

$checks = @{
  'lang=en on html'           = $file -match '<html lang="en">'
  'Descriptive title'         = $file -match 'Brightwater Goods'
  'Search aria-label'         = $file -match 'aria-label="Search"'
  'Cart aria-label'           = $file -match 'aria-label="Cart, 3 items"'
  'Cart badge aria-hidden'    = $file -match 'class="cart-badge" aria-hidden="true"'
  'Account aria-label'        = $file -match 'aria-label="My account"'
  'Hero img alt empty'        = $file -match 'img src="https://images.unsplash' -and $file -match 'alt=""'
  'sr-only class defined'     = $file -match '\.sr-only'
  'Email label'               = $file -match '<label for="checkout-email">'
  'Card label'                = $file -match '<label for="checkout-card">'
  'Expiry label'              = $file -match '<label for="checkout-expiry">'
  'CVV label'                 = $file -match '<label for="checkout-cvv">'
  'Pay is real button'        = $file -match '<button class="pay-btn"'
  'No pay-btn-fake div'       = -not ($file -match 'pay-btn-fake')
  'aria-live polite on status'= $file -match 'aria-live="polite"'
  'Status text span'          = $file -match 'id="order-status-text"'
  'Dot aria-hidden'           = $file -match 'id="order-dot".*aria-hidden="true"'
  'Low-contrast colour fixed' = $file -match '#767676'
  'Instagram aria-label'      = $file -match 'Brightwater Goods on Instagram'
  'Twitter aria-label'        = $file -match 'Brightwater Goods on X'
  'YouTube aria-label'        = $file -match 'Brightwater Goods on YouTube'
  'Facebook aria-label'       = $file -match 'Brightwater Goods on Facebook'
  'TrailRidge add-to-cart'    = $file -match 'Add TrailRidge Hiking Boots to cart'
  'Skyward add-to-cart'       = $file -match 'Add Skyward 4-Person Dome Tent to cart'
  'Kayak add-to-cart'         = $file -match 'Add Clearwater Touring Kayak Paddle to cart'
  'Daypack add-to-cart'       = $file -match 'Add Summit Daypack 28L to cart'
  'Jacket add-to-cart'        = $file -match 'Add Coldfront Down Jacket to cart'
  'DayPass add-to-cart'       = $file -match 'Add Guided Trail Day Pass to cart'
  'SVGs aria-hidden'          = $file -match 'aria-hidden="true" focusable="false"'
}

$pass = 0; $fail = 0
foreach ($k in $checks.Keys | Sort-Object) {
  $result = if ($checks[$k]) { "PASS"; $pass++ } else { "FAIL"; $fail++ }
  Write-Host "$result  $k"
}
Write-Host "`n$pass passed, $fail failed"


### 🤖 Assistant

29/29 checks pass. Here is a summary of everything that was done.

---

## What was found and fixed

**36 distinct accessibility problems** were identified across 8 categories. Every one is fixed in [`demo/fixed/index.html`](demo/fixed/index.html), and the full report is at [`demo/fixed/FIXES.md`](demo/fixed/FIXES.md).

### By category

| # | Category | Count | What was wrong | What was done |
|---|----------|-------|----------------|---------------|
| 1 | **Page language** | 1 | `<html>` had no `lang` attribute — screen readers picked the wrong voice | Added `lang="en"` |
| 2 | **Vague title** | 1 | `<title>Home</title>` identifies nothing | Changed to `"Brightwater Goods — Premium Outdoor Equipment"` |
| 3–6 | **Icon-only header buttons** | 3 buttons + 1 badge | Search, Cart, Account buttons announced only as "button"; cart badge announced as bare "3" | Added `aria-label` to each button; badge gets `aria-hidden="true"` and its count is folded into the cart button's label: `"Cart, 3 items"` |
| 7–23 | **Images without alt** | 7 images | All seven `<img>` elements had no `alt` attribute; screen readers would announce the raw URL | Set `alt=""` (decorative, since product names appear in card text) + `data-usher-review="alt"` flag for a content owner to supply real descriptions |
| 9–25 | **Icon-only product buttons** | 12 buttons | Every "add to cart" and "save" button across 6 product cards announced only "button" — indistinguishable from one another | Added per-product `aria-label` e.g. `"Add TrailRidge Hiking Boots to cart"` |
| 26–29 | **Form fields with no label** | 4 inputs | Email, card number, expiry, CVV — placeholder was the only label; disappears when you type | Added visible `<label>` for each, linked via `for`/`id` |
| 30 | **`<div>` fake button** | 1 | The Pay button was a `<div>` — completely unreachable by keyboard; Tab skips it | Replaced with a real `<button>` — automatically focusable, activatable by Enter/Space |
| 31 | **Colour-only status** | 1 | Red/green dot was the only order-status indicator; no text, no live region — clicking Pay produced silence | Dot marked `aria-hidden`; text `"Order status: payment pending/confirmed"` added; container gets `aria-live="polite"` so the update is announced automatically |
| 32 | **Low-contrast text** | 1 | Body copy at `#c0c0c0` on white = **1.6:1** ratio | Raised to `#767676` = **4.54:1** (just clears the 4.5:1 AA threshold) |
| 33–36 | **Icon-only social links** | 4 links | Instagram, X, YouTube, Facebook links announced only as "link" | Added `aria-label="Brightwater Goods on [Network]"` to each |

### 7 items flagged for a human

All seven product/hero images were set to `alt=""` with `data-usher-review="alt"`. The rule is: never invent facts in alt text. A content owner who can see the photos needs to add a one-sentence description of what each image actually shows.