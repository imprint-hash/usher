# 02 — How to Fix

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
