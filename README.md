# Usher
A tool that shows developers what their web page is like for a blind person using a screen reader — then fixes it.

## Usher Fixer mode

Switch Bob to **🔦 Usher Fixer** and ask it to fix a page Usher has scanned.
The mode copies the page to a `fixed/` sibling, applies the smallest correct change for
each accessibility problem, and writes a `FIXES.md` report that explains every fix in
plain English — including what still needs a human decision.
