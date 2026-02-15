
# Fix: Desktop/Mobile Scroll Bug

## Root Cause

The CSS in `index.css` sets `overflow-y: auto !important` on **both** `html` and `body`. This creates two competing scroll containers. The browser doesn't know which one to scroll, so wheel/touch events on the main content get swallowed. The `fixed` header sits outside this conflict, which is why scrolling works only when hovering over it.

A secondary contributor is `overscroll-behavior: none` on `body`, which in an iframe context (the Lovable preview) can suppress scroll propagation.

## Fix (single file: `src/index.css`)

### 1. Simplify html/body overflow rules

- `html`: Set `overflow-x: hidden` and leave `overflow-y` unset (browser default handles scrolling)
- `body`: Only set `overflow-x: hidden`. Remove `overflow-y: auto !important` and `height: auto !important`. Remove `overscroll-behavior: none`.
- Keep `max-width: 100vw` on both to prevent horizontal sway.

### 2. Keep `#root` clean

- `min-height: 100vh`, `display: flex`, `flex-direction: column` (current values are fine)
- `overflow-x: hidden` stays
- No `overflow-y` or fixed `height`

### 3. Remove `overscroll-behavior: none`

This property on body in an iframe prevents scroll chaining. Removing it lets the browser handle scrolling normally.

### Resulting CSS (lines 7-26 of index.css)

```css
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
  overflow-x: hidden !important;
  max-width: 100vw;
}

#root {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}
```

And in the second `body` block (around line 145), remove `overscroll-behavior: none`:

```css
body {
  @apply bg-background text-foreground font-sans antialiased;
  font-family: 'Open Sans', sans-serif;
  -webkit-overflow-scrolling: touch;
}
```

## What stays unchanged

- Hero, colors, layout, images, all other components
- `touch-pan-y` on BeforeAfter sliders
- Mobile bottom padding
- The `scroll-behavior: smooth` on html
