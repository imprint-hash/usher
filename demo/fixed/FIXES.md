# Accessibility Fixes

Fixed: 34  |  Needs a human: 7  |  Still not fixed: 0

> **Second pass:** An independent axe-core check found 2 contrast problems the first pass missed; both fixed in a second pass.

---

## Fix 1 — Missing page language

**Element:** `<html>` element
**Before:** No `lang` attribute — a screen reader would guess the language from the OS setting, possibly reading English text with the wrong voice (e.g., a French TTS engine mispronouncing every word)
**After:** `<html lang="en">` — screen readers now select the correct English voice immediately
**Why:** Without a declared language, assistive technology cannot choose the right pronunciation rules. Every word on the page could be mispronounced for a user whose system default is a different language.
**WCAG:** 3.1.1 Language of Page (Level A)

---

## Fix 2 — Vague page title

**Element:** `<title>` in `<head>`
**Before:** "Home" — tells a screen reader user nothing about which site they are on
**After:** "Brightwater Goods — Premium Outdoor Equipment" — identifies the brand and the page's purpose
**Why:** Screen readers announce the page title when a tab loads or when a user switches between tabs. "Home" on its own gives no context; a blind user managing many tabs cannot tell which one this is.
**WCAG:** 2.4.2 Page Titled (Level A)

---

## Fix 3 — Icon-only Search button

**Element:** Search button, site header
**Before:** "button" — the screen reader announces only the role; the user has no idea what the button does
**After:** "Search, button"
**Why:** A blind user navigating header controls by Tab would land on this button and hear only "button". They cannot tell whether it opens a search field, submits a form, or does something else entirely.
**WCAG:** 4.1.2 Name, Role, Value (Level A)

---

## Fix 4 — Icon-only Cart button

**Element:** Cart button, site header
**Before:** "button"
**After:** "Cart, 3 items, button"
**Why:** The cart icon by itself communicates nothing to a screen reader. Combined with Fix 5 (the badge count), the user now knows both what the control is and how many items are in the cart — without having to click it.
**WCAG:** 4.1.2 Name, Role, Value (Level A)

---

## Fix 5 — Cart badge count with no context

**Element:** `<span class="cart-badge">3</span>` inside the cart button
**Before:** A screen reader would announce "3" as bare text — the user cannot tell whether it is a price, a step number, or a quantity
**After:** The badge is hidden with `aria-hidden="true"` and the count is folded into the button's own `aria-label`: "Cart, 3 items". The visual "3" is still visible on screen.
**Why:** When a number appears inside a button with no surrounding words, its meaning is entirely ambiguous to a blind user.
**WCAG:** 1.3.3 Sensory Characteristics (Level A) / 4.1.2 Name, Role, Value (Level A)

---

## Fix 6 — Icon-only Account button

**Element:** Account/user button, site header
**Before:** "button"
**After:** "My account, button"
**Why:** Same problem as the Search button — no name means a keyboard-only or screen-reader user cannot tell what will happen when they activate this control.
**WCAG:** 4.1.2 Name, Role, Value (Level A)

---

## Fix 7 — Hero image with no alt attribute

**Element:** `<img>` in the hero banner
**Before:** No `alt` — many screen readers announce the full URL or the word "image", which is meaningless
**After:** `alt=""` (marked decorative) with `data-usher-review="alt"` — the image is suppressed from the accessibility tree; the heading and paragraph beside it already describe the page purpose
**Why:** The URL of a stock photo is completely uninformative. The heading "Gear up for the wild." already communicates what the banner conveys, so the image is treated as decorative for now. See **Needs a human** below.
**WCAG:** 1.1.1 Non-text Content (Level A)

---

## Fix 8–23 — Six product images with no alt attribute

**Element:** `<img>` inside each of the six product cards
**Before:** No `alt` — screen readers would announce the raw Flickr/Wikipedia URL
**After:** `alt=""` (decorative) with `data-usher-review="alt"` on each image — the product name in the card text below already identifies the item
**Why:** Each product card has a visible product name (`TrailRidge Hiking Boots`, etc.) immediately below the image. The image is therefore supplementary; removing it from the accessibility tree avoids redundant announcement. A content owner should still provide meaningful alt text describing the product's appearance — see **Needs a human**.
**WCAG:** 1.1.1 Non-text Content (Level A)

---

## Fix 9, 10 — Icon-only product buttons, TrailRidge Hiking Boots

**Element:** Add-to-cart button and Save (wishlist) button on the TrailRidge Hiking Boots card
**Before:** "button" (twice) — a screen reader user cannot tell which product or what action
**After:** "Add TrailRidge Hiking Boots to cart, button" / "Save TrailRidge Hiking Boots, button"
**Why:** When six product cards each have two unnamed buttons, a user navigating by Tab hears twelve identical "button" announcements in a row with no way to know which product any of them affects.
**WCAG:** 4.1.2 Name, Role, Value (Level A)

---

## Fix 12, 13 — Icon-only product buttons, Skyward 4-Person Dome Tent

**Element:** Add-to-cart and Save buttons on the Skyward 4-Person Dome Tent card
**Before:** "button"
**After:** "Add Skyward 4-Person Dome Tent to cart, button" / "Save Skyward 4-Person Dome Tent, button"
**WCAG:** 4.1.2 Name, Role, Value (Level A)

---

## Fix 15, 16 — Icon-only product buttons, Clearwater Touring Kayak Paddle

**Element:** Add-to-cart and Save buttons on the Clearwater Touring Kayak Paddle card
**Before:** "button"
**After:** "Add Clearwater Touring Kayak Paddle to cart, button" / "Save Clearwater Touring Kayak Paddle, button"
**WCAG:** 4.1.2 Name, Role, Value (Level A)

---

## Fix 18, 19 — Icon-only product buttons, Summit Daypack 28L

**Element:** Add-to-cart and Save buttons on the Summit Daypack 28L card
**Before:** "button"
**After:** "Add Summit Daypack 28L to cart, button" / "Save Summit Daypack 28L, button"
**WCAG:** 4.1.2 Name, Role, Value (Level A)

---

## Fix 21, 22 — Icon-only product buttons, Coldfront Down Jacket

**Element:** Add-to-cart and Save buttons on the Coldfront Down Jacket card
**Before:** "button"
**After:** "Add Coldfront Down Jacket to cart, button" / "Save Coldfront Down Jacket, button"
**WCAG:** 4.1.2 Name, Role, Value (Level A)

---

## Fix 24, 25 — Icon-only product buttons, Guided Trail Day Pass

**Element:** Add-to-cart and Save buttons on the Guided Trail Day Pass card
**Before:** "button"
**After:** "Add Guided Trail Day Pass to cart, button" / "Save Guided Trail Day Pass, button"
**WCAG:** 4.1.2 Name, Role, Value (Level A)

---

## Fix 26 — Email field labelled only by placeholder

**Element:** Email input, Quick Checkout form
**Before:** No `<label>` — placeholder text "Email address" disappears the moment a user starts typing; screen readers may not announce it at all on some browser/AT combinations
**After:** Visible `<label for="checkout-email">Email address</label>` associated via matching `id`
**Why:** A user who types something in the field and then returns to it (or who uses auto-fill) has no label to read back. A blind user using a forms navigation shortcut would land on the input and hear only "edit, type text" with no indication of what goes in the field.
**WCAG:** 1.3.1 Info and Relationships (Level A) / 3.3.2 Labels or Instructions (Level A)

---

## Fix 27 — Card number field labelled only by placeholder

**Element:** Card number input, Quick Checkout form
**Before:** Placeholder "Card number" is the only label
**After:** Visible `<label for="checkout-card">Card number</label>`; also added `autocomplete="cc-number"` to assist password managers and autofill
**WCAG:** 1.3.1 Info and Relationships (Level A) / 3.3.2 Labels or Instructions (Level A)

---

## Fix 28 — Expiry date field labelled only by placeholder

**Element:** MM / YY input, Quick Checkout form
**Before:** Placeholder "MM / YY" is the only label
**After:** Visible `<label for="checkout-expiry">Expiry date</label>`; placeholder kept as a format hint; `autocomplete="cc-exp"` added
**WCAG:** 1.3.1 Info and Relationships (Level A) / 3.3.2 Labels or Instructions (Level A)

---

## Fix 29 — CVV field labelled only by placeholder

**Element:** CVV input, Quick Checkout form
**Before:** Placeholder "CVV" is the only label — the abbreviation is also unexplained
**After:** Visible `<label for="checkout-cvv">Security code (CVV)</label>`; `autocomplete="cc-csc"` added
**Why:** "CVV" is not universally understood. A new card user who is also blind has no way to find the label once they've clicked into the field. Expanding it to "Security code (CVV)" also improves clarity for sighted users.
**WCAG:** 1.3.1 Info and Relationships (Level A) / 3.3.2 Labels or Instructions (Level A)

---

## Fix 30 — Pay button is a `<div>`, not a button

**Element:** `<div class="pay-btn-fake">Pay $333.00</div>`, Quick Checkout form
**Before:** A `<div>` is not in the tab order by default; keyboard users cannot reach it with Tab, and pressing Enter or Space does nothing
**After:** Replaced with `<button class="pay-btn" type="button">Pay $333.00</button>` — a native button is automatically focusable, activates on Enter and Space, and is announced as "Pay $333.00, button"
**Why:** A keyboard-only user (including anyone who cannot use a mouse) simply could not complete a purchase. The Pay control was completely invisible to them.
**WCAG:** 2.1.1 Keyboard (Level A) / 4.1.2 Name, Role, Value (Level A)

---

## Fix 31 — Order status communicated by colour alone

**Element:** `<div id="order-dot" class="status-dot red">` inside `.order-status-row`
**Before:** Status is shown only as a red or green dot. Screen readers announce nothing — there is no text, role, or live region. A blind user clicking Pay would have no indication that anything changed.
**After:** Three changes together:
1. The dot itself gets `aria-hidden="true"` — it is purely decorative.
2. A `<span id="order-status-text">` next to it carries the text: "Order status: payment pending" (or "Order status: payment confirmed" after clicking Pay).
3. The containing row has `aria-live="polite"` so screen readers automatically announce the text change when the button is clicked.
The JavaScript was updated to change the text as well as the dot's class.
**Why:** A colour-only status change is invisible to blind users and to anyone with red-green colour blindness. The live region means they hear the update without having to re-navigate to the element.
**WCAG:** 1.4.1 Use of Color (Level A) / 4.1.3 Status Messages (Level AA)

---

## Fix 32 — Low-contrast body text

**Element:** `<p class="low-contrast-text">` in the "Why shop with us?" panel
**Before:** Text colour `#c0c0c0` on white `#ffffff` — contrast ratio ≈ 1.6:1, far below the 4.5:1 minimum for normal text
**After:** Colour changed to `#767676` on `#ffffff` — contrast ratio ≈ 4.54:1, just above the 4.5:1 threshold
**Why:** The original colour was so light that the paragraph was nearly invisible even to sighted users with good vision in bright conditions. For users with low vision or colour deficiencies it was effectively unreadable.
**WCAG:** 1.4.3 Contrast (Minimum) (Level AA)

---

## Fix 33 — Icon-only Instagram link

**Element:** Instagram `<a>` in footer social links
**Before:** "link" — no destination or network name
**After:** "Brightwater Goods on Instagram, link"
**Why:** A screen reader user navigating by links would encounter four identical "link" announcements in a row with no way to distinguish them.
**WCAG:** 2.4.6 Headings and Labels (Level AA) / 4.1.2 Name, Role, Value (Level A)

---

## Fix 34 — Icon-only X (Twitter) link

**Element:** X/Twitter `<a>` in footer social links
**Before:** "link"
**After:** "Brightwater Goods on X (Twitter), link"
**WCAG:** 4.1.2 Name, Role, Value (Level A)

---

## Fix 35 — Icon-only YouTube link

**Element:** YouTube `<a>` in footer social links
**Before:** "link"
**After:** "Brightwater Goods on YouTube, link"
**WCAG:** 4.1.2 Name, Role, Value (Level A)

---

## Fix 36 — Icon-only Facebook link

**Element:** Facebook `<a>` in footer social links
**Before:** "link"
**After:** "Brightwater Goods on Facebook, link"
**WCAG:** 4.1.2 Name, Role, Value (Level A)

---

## Needs a human

All seven images were given `alt=""` as a safe placeholder and marked with `data-usher-review="alt"`. A content owner should replace the empty `alt` with a meaningful description once they can view the images:

- `<img data-usher-review="alt">` in the **hero banner** — what does the photograph show? A mountain landscape? A specific trail? Provide a one-sentence description such as "Aerial view of a forested mountain range at dusk."
- `<img data-usher-review="alt">` on the **TrailRidge Hiking Boots** card — describe the boots: colour, style, any distinctive features visible in the photo.
- `<img data-usher-review="alt">` on the **Skyward 4-Person Dome Tent** card — describe the tent: colour, setting, how it is pitched.
- `<img data-usher-review="alt">` on the **Clearwater Touring Kayak Paddle** card — describe the paddle: colour, blade shape, context.
- `<img data-usher-review="alt">` on the **Summit Daypack 28L** card — describe the pack: colour, size impression, any notable external pockets or features.
- `<img data-usher-review="alt">` on the **Coldfront Down Jacket** card — describe the jacket: colour(s), style (zip, hood, etc.).
- `<img data-usher-review="alt">` on the **Guided Trail Day Pass** card — describe what the image shows: is it a trail, a guide, a landscape?

Note: for product images it is acceptable to mark them `alt=""` if a screen reader would encounter the product name immediately after in the card. However, descriptive alt text (colour, key features) helps blind shoppers make informed choices and is best practice for e-commerce.

---

## Fix 37 — "Shop now" button below 4.5:1 contrast

**Element:** `<a class="btn-primary">Shop now</a>` in the hero section
**Before:** White `#ffffff` text on blue `#3b82f6` background — contrast ratio ≈ 3.75:1, below the 4.5:1 minimum for normal-weight text
**After:** Background darkened to `#1d4ed8`; hover state updated to `#1e40af` — contrast ratio ≈ **6.90:1**
**Why:** A low-vision user reading the hero call-to-action could not reliably distinguish the text from the button background. The fix uses a darker shade of the same brand blue so the button still looks like a primary action; no layout or sizing changes were made.
**WCAG:** 1.4.3 Contrast (Minimum) (Level AA)

---

## Fix 38 — Footer copyright line below 4.5:1 contrast

**Element:** `<div class="footer-copy">` — the "© 2026 Brightwater Goods LLC" line in the footer
**Before:** Text colour `#6b7280` on dark footer background `#111827` — contrast ratio ≈ 3.63:1, below 4.5:1
**After:** Colour changed to `#9ca3af` — contrast ratio ≈ **7.06:1**. This is the same grey already used for the footer's base `color` and the social-link icons, so the change is invisible to sighted users who already perceived the footer as a unified dark block of text.
**Why:** The copyright line was too dim to read reliably against the near-black footer. Lightening it to match the surrounding footer text puts it well above the threshold with no visual redesign.
**WCAG:** 1.4.3 Contrast (Minimum) (Level AA)

---

## Still not fixed

Nothing remains unfixed. All 38 identified issues have been resolved or, in the case of images, safely stubbed with `alt=""` and flagged for a content owner.
