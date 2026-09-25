# 03 — Report

After fixing, write a `FIXES.md` file next to the fixed page (e.g. `demo/fixed/FIXES.md`).

---

## Structure of FIXES.md

### Header

```
# Accessibility Fixes

Fixed: X  |  Needs a human: Y  |  Still not fixed: Z
```

### One entry per fix

```
## Fix N — <short title>

**Element:** <tag and location, e.g. "Add-to-cart button, product card row 2">
**Before:** <exactly what a screen reader announced, e.g. "button" or nothing>
**After:** <exactly what it announces now, e.g. "Add TrailRidge Hiking Boots to cart, button">
**Why:** <one or two plain-English sentences describing what a blind or keyboard-only
          user could not do before — write as if the reader has never used a screen reader>
**WCAG:** <criterion number and short name, e.g. "1.1.1 Non-text Content (Level A)">
```

### Needs a human

List every item you could not fix without guessing real content — typically images where
the correct alt text depends on what is actually in the photo or on facts only the content
owner knows. Include the `data-usher-review="alt"` attribute as a marker so developers
can find the spots quickly.

```
## Needs a human

- `<img data-usher-review="alt">` in the hero banner — what product is shown and from
  which angle? Provide a one-sentence description for the `alt` attribute.
```

### Still not fixed

List anything you chose not to fix, with an honest reason (e.g. "requires design change",
"depends on back-end data", "outside scope of this page").

```
## Still not fixed

- Low contrast on the disabled button state (#999 on #fff, ratio 2.8:1) — fixing this
  requires updating the design system token; flagged for the design team.
```

---

## Tone

Write for a developer who has never used a screen reader. Avoid jargon without explanation.
"A screen reader announces only 'button' — a blind user cannot tell which product this
button applies to" is better than "the accessible name is non-descriptive".
