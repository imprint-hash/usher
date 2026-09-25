# 01 — Workflow

Follow these steps in order on every fix session.

1. **Never edit the original page.**
   Copy it to a sibling "fixed" location first, then fix the copy.
   Example: `demo/broken/index.html` -> `demo/fixed/index.html`.
   If a fixed copy already exists, confirm with the developer before overwriting it.

2. **Find every problem before fixing any of them.**
   Audit the copy for all of the following:
   - Icon-only buttons or links without an accessible name
   - Images without an `alt` attribute (or with a missing/empty one where meaning is needed)
   - Form fields without a visible or programmatically associated label
   - Clickable non-interactive elements (`<div>`, `<span>`, etc.) that should be buttons or links
   - Information conveyed by colour alone (status badges, error states, charts)
   - Missing `lang` attribute on `<html>`
   - Vague or missing `<title>`
   - Low contrast (text below 4.5:1, large text below 3:1)

3. **Fix them one at a time with the smallest change that works.**
   Do not rewrite sections unrelated to the problem. Do not change the visual design.

4. **After fixing, write the report** following the rules in `03-report.md`.
   List honestly what remains unfixed and why (time, complexity, needing real content, etc.).
