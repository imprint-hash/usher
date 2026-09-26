# Usher

**Your app, in the dark.**

See and hear your web page the way a blind user does, then let IBM Bob fix it, and check the fix with an independent tool.

**Try it:** https://imprint-hash.github.io/usher/ · Built with IBM Bob for the IBM Bob 2.0 Hackathon

---

## The problem

Blind people use the web with a **screen reader**, a voice that reads the page out loud. They move through it with the keyboard and listen.

Most pages are built without ever being heard. A cart icon with no label looks fine on screen, but the screen reader says only **"button"**. A whole shop can sound like this:

> *"Button. Button. 3, button. Button. Image."*

Which one pays? Which one deletes the order? A blind user cannot tell. And the developer never finds out, because the page looks fine to them.

This is also a legal problem. The **European Accessibility Act** has applied since 28 June 2025, and online shops selling in the EU must be usable this way.

## What Usher does

1. **Hear it.** Usher reads the page the way a screen reader does and lists every line, tagging the ones that are broken: *No name*, *Not a button*, *Unclear name*, *Colour only*.
2. **See it.** Press **Turn off the lights**. The page falls apart into what a blind user actually gets: grey boxes that just say "Button", "Image", "Link". A torch picks out each item as the voice reads it.
3. **Fix it with Bob.** Switch Bob into **🔦 Usher Fixer**, a custom Bob mode that ships with this repo. It fixes the page with strict rules and writes a report explaining every fix in plain English.
4. **Prove it.** Press **Show Bob's fix**. Every "Button" box flips to its real name ("Search, button", "Add TrailRidge Hiking Boots to cart, button"), and an independent checker, **axe-core**, re-scores the page.

**Try it blind** hands the keyboard to you. The screen goes black, and you move through the page with Tab and the arrow keys, hearing exactly what a screen reader user hears.

## The result on our demo shop

| | axe-core problems | What a screen reader says for the cart button |
|---|---|---|
| Before | **29** | "3, button" |
| After Bob's first pass | **2** | "Cart, 3 items, button" |
| After Bob's second pass | **0** | "Cart, 3 items, button" |

The first pass fixed 27 problems and reported that none were left. Usher's independent check found two low-contrast texts it had missed. Given those two, Bob fixed them in a second pass. That is the point of step 4: **a fix is only done when something other than the fixer has checked it.**

Bob's full report, with the before, after and why for every fix, is in [`demo/fixed/FIXES.md`](demo/fixed/FIXES.md). It lists seven photo descriptions under **"Needs a human"**. Bob did not guess what the photos show, because a wrong description is worse than none.

## Try it in one minute

1. Open https://imprint-hash.github.io/usher/ and press **Open Usher**.
2. Read the right-hand panel: that is what a screen reader hears on the broken shop.
3. Press **Turn off the lights**, then **Read it aloud**.
4. Press **Show Bob's fix**.
5. Press **Try it blind** and use **Tab**. Switch the page to "fixed by Bob" and do it again.

Chrome or Edge on a laptop works best. Turn your sound on.

## Built with IBM Bob

Bob wrote this project across these tasks. Every session's consumption summary and exported history is in [`bob_sessions/`](bob_sessions/).

| Task | Bob mode | What Bob did |
|---|---|---|
| 1 | Agent | Built the demo shop with 20 deliberate accessibility problems, plus a hidden answer key |
| 2 | Agent | Built the screen-reader transcript and read-aloud voice |
| 3, 3b, 3c, 3d | Agent | Built the lights-off collapse and the torch, then fixed its layout bugs |
| 4 | Agent | Created the **🔦 Usher Fixer** custom mode and its rules |
| 5 | **🔦 Usher Fixer** | Fixed the demo shop and wrote `FIXES.md`, without seeing the answer key |
| 6 | Agent | Added the axe-core score and the before/after morph; then ran the second pass on the two contrast problems |
| 8a, 8b | Usher Fixer, then Agent | Built Try it blind (8a started in the wrong mode and stopped early; 8b finished it) |
| 9, 9b | Agent | Landing page, first-load polish, load-order fix |

### The Usher Fixer mode

Defined in [`.bob/custom_modes.yaml`](.bob/custom_modes.yaml) with its rules in [`.bob/rules-usher-fixer/`](.bob/rules-usher-fixer/). Any developer who clones this repo gets it in their Bob. Its rules include:

- Never edit the original page; fix a copy.
- Prefer real HTML elements: a clickable `<div>` becomes a real `<button>`.
- Names say what a control does **and to what**: "Add TrailRidge Hiking Boots to cart", not "Add to cart" six times.
- Never invent a photo description. If it would be a guess, flag it for a human.
- Explain every fix: what a screen reader said before, what it says now, and why it mattered.

## How it works

| File | What it is |
|---|---|
| `app/index.html` | Usher itself: transcript, voice, lights-off view, torch, morph, axe score, Try it blind |
| `demo/broken/index.html` | Brightwater Goods, a made-up shop with accessibility problems on purpose |
| `demo/fixed/index.html` | The same shop after Bob fixed it in Usher Fixer mode |
| `demo/fixed/FIXES.md` | Bob's report on every fix |
| `demo/ISSUES.md` | The answer key for the broken shop, kept away from the fixer |
| `.bob/` | The Usher Fixer custom mode |

- Accessible names are computed with [dom-accessibility-api](https://github.com/eps1lon/dom-accessibility-api), not hand-written rules.
- The score comes from [axe-core](https://github.com/dequelabs/axe-core) (WCAG 2.1 A and AA rules).
- The voice is the browser's built-in speech. There is no server, no account and no data collection.

Run it locally from the repo folder:

```bash
python -m http.server 5173
```

Then open http://localhost:5173/app/.

## Limits, said plainly

- **The voice is a simulation.** It reads the page's accessibility tree the way screen readers do, but real screen readers (NVDA, JAWS, VoiceOver) differ in wording. It is for understanding the problem, not a replacement for testing with one.
- **axe-core catches a lot, not everything.** Zero axe problems does not mean perfectly accessible. Seven photo descriptions still need a person.
- **Usher tests pages you can load in it.** Today that is the demo shop; testing your own page means placing it next to the app.
- **The demo shop is made up.** Brightwater Goods is not a real business, and its problems were put there on purpose.

## Data and credits

No personal data, client data or social-media data is used. Product photos are Creative Commons or public domain, credited in [`demo/CREDITS.md`](demo/CREDITS.md).
