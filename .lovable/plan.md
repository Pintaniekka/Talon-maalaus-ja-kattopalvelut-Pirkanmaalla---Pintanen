

## Final Performance Cleanup

Minimal changes to 2 files only. No design, routing, or logic changes.

### 1. `index.html` (lines 22-34) — Replace critical CSS

Replace the current 12-line bloated style block with the minimal 5-line version:

```html
<style>
  body { margin: 0; }
  .hero-critical { min-height: 100vh; display: flex; align-items: center; }
  .hero-critical h1 { margin: 0; color: #fff; font-size: 2rem; line-height: 1.1; }
  .hero-critical p { margin: 0.75rem 0 0; color: rgba(255,255,255,.8); font-size: 1.125rem; }
</style>
```

Removed: `header, nav` rules, `position: relative`, `overflow: hidden`, `font-weight: 800`, all `.btn-hero` / `.btn-hero-outline` classes.

Preconnect is already correct (line 19, single tag, no crossorigin). No change needed there.

### 2. `src/components/BeforeAfterSlider.tsx` (lines 66, 79) — Remove redundant sizes

Remove `sizes="(max-width: 768px) 100vw, 600px"` from both `OptimizedImage` calls. The default in `OptimizedImage.tsx` already provides the identical value, so behavior is unchanged but the file is cleaner.

### No other files changed

- `OptimizedImage.tsx` — already correct, no change needed
- `Hero.tsx` — already has `hero-critical` and `sizes="100vw"`, no change needed
- `Gallery.tsx` — uses `(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw` which is correct for a 3-column grid layout (not a non-hero fullwidth image)

### Validation

| Check | Status |
|---|---|
| No `sizes="(max-width: 768px) 100vw, 50vw"` for non-hero images | Confirmed — none exist |
| Hero images use `sizes="100vw"` | Confirmed |
| Only one Supabase preconnect (no crossorigin) | Confirmed (line 19) |
| No CSS async hacks (`media="print"`) | Confirmed (line 10 is Google Fonts only — pre-existing, not introduced by us) |
| No new CSS class names introduced | Confirmed |
| Files changed | Exactly 2: `index.html`, `BeforeAfterSlider.tsx` |
