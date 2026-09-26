# 01 — Workflow

Follow these steps in order on every fix session.

1. **Never edit the original page.**
   Copy it to a fixed location first, then fix the copy.

   **Where to write the fix:**
   - If the page loads relative assets (`css/`, `js/`, `assets/`), write the fixed copy as
     `index.fixed.html` in the **same folder** as the original, so relative paths keep working.
     Example: `demo/real/freelancer/index.html` → `demo/real/freelancer/index.fixed.html`.
     Write the report as `FIXES.md` in that same folder.
   - If the page has no relative assets (self-contained or CDN-only), copy it to a sibling
     `fixed/` folder.
     Example: `demo/broken/index.html` → `demo/fixed/index.html`.
     Write the report as `demo/fixed/FIXES.md`.

   If a fixed copy already exists, confirm with the developer before overwriting it.

2. **If the user pastes an Usher report, treat it as your task list.**
   Read every `[Tag] "spoken text"` problem line and every axe-core violation entry.
   Locate each one in the page source before fixing anything.
   After working through the report, **also check the page yourself** for anything the
   report may have missed (e.g. problems the scanner cannot detect: missing `lang`,
   vague `<title>`, contrast issues, SVG icons without names, etc.).

3. **Find every problem before fixing any of them.**
   Audit the copy for all of the following:
   - Icon-only buttons or links without an accessible name
   - Images without an `alt` attribute (or with a placeholder alt like `alt="..."`)
   - Form fields without a visible or programmatically associated label
   - Clickable non-interactive elements (`<div>`, `<span>`, etc.) that should be buttons or links
   - Mouse-only controls (elements with `data-bs-toggle`, `data-bs-target`, `onclick`, or
     `cursor: pointer` but no keyboard reachability or announced role)
   - Information conveyed by colour alone (status badges, error states, charts)
   - Missing `lang` attribute on `<html>`
   - Vague or missing `<title>`
   - Low contrast (text below 4.5:1, large text below 3:1)

4. **Fix them one at a time with the smallest change that works.**
   Do not rewrite sections unrelated to the problem. Do not change the visual design.

5. **After fixing, write the report** following the rules in `03-report.md`.
   List honestly what remains unfixed and why (time, complexity, needing real content, etc.).
