

# Fix Mobile LCP (6.4s -> target under 2.5s)

The Lighthouse data reveals **three distinct problems**, not just image sizes.

---

## Problem 1: LCP Element Is Text, Not an Image

Lighthouse identifies the LCP element as the hero `<span>` ("katoille ja seinille"), with a **2,350ms render delay**. This is because `framer-motion` animates it from `opacity: 0` -- the browser cannot paint the LCP element until the JavaScript animation starts.

**Fix**: Remove the initial `opacity: 0` / `y: 30` animation from the hero content in `Hero.tsx`. Use CSS animation instead (or just show it immediately). The hero is always above-the-fold, so there is no benefit to an entrance animation.

**File**: `src/components/Hero.tsx`
- Change the hero `motion.div` (wrapping h1, badges, CTAs) to a plain `div` with a simple CSS `animate-fade-in` class (already defined in index.css), or remove animation entirely.

---

## Problem 2: Images Still 500KB+ (Supabase Transforms Not Reducing Enough)

The images are still huge because:
- Source images are very large originals
- `quality=60` is not aggressive enough for these particular images
- The `1200w` srcset option is being selected on Retina mobile screens (e.g. Moto G at 2x DPR selects 1200w for a ~360px viewport)

**Fixes**:

### a) Lower quality to 40 (`src/lib/storage.ts`)
Change `quality=60` to `quality=40`. For WebP at these dimensions, 40 is visually indistinguishable from 60 but cuts file size by ~30-40%.

### b) Add smaller srcset breakpoint (`src/components/OptimizedImage.tsx`)
Change srcset widths from `[300, 600, 1200]` to `[320, 640, 960, 1200]`. The 960w option gives Retina phones a better middle-ground instead of jumping to 1200w.

### c) Convert BeforeAfter.tsx to use OptimizedImage (`src/components/BeforeAfter.tsx`)
Currently uses raw `<img>` tags without srcset. Switch to `OptimizedImage` component to get automatic srcset generation.

### d) Fix logo size (`src/components/Header.tsx`)
Logo is served at 600x200 but rendered at 252x84. Change `width` and `transformWidth` to 300.

### e) Fix Services banner image (`src/components/Services.tsx`)
The "Puhdistus" banner uses inline `backgroundImage` style, bypassing all optimization. Convert to an `<img>` element with `object-cover` positioning inside the link.

---

## Problem 3: Preconnect Warning

Lighthouse still shows `crossorigin=""` on the preconnect link. The `index.html` code looks correct (no crossorigin), but the **preload link** for the hero image in `index.html` (line ~12) has `type="image/webp"` which may also need attention. Add a second preconnect without crossorigin as a `dns-prefetch` fallback.

**File**: `index.html`
- Add `<link rel="dns-prefetch" href="https://fndkkgfpsgghvewvoysr.supabase.co" />` as fallback.

---

## Summary of File Changes

| File | Change |
|---|---|
| `src/components/Hero.tsx` | Remove framer-motion animation from hero content (fixes 2350ms render delay) |
| `src/lib/storage.ts` | quality=60 -> quality=40 |
| `src/components/OptimizedImage.tsx` | srcset widths: [320, 640, 960, 1200] |
| `src/components/BeforeAfter.tsx` | Use OptimizedImage instead of raw img tags |
| `src/components/Header.tsx` | Logo width/transformWidth 600 -> 300 |
| `src/components/Services.tsx` | Convert banner backgroundImage to OptimizedImage |
| `index.html` | Add dns-prefetch fallback |

