

## Hero LCP render delay fix — minimal inline CSS

3 tiedostoa, 3 pientä muutosta. Ei muita tiedostoja kosketa.

### 1. `index.html` — Supabase preconnect + critical CSS

Rivi 18-21: Korvataan nykyinen preconnect ja lisataan inline style:

```html
<!-- Supabase Storage preconnect -->
<link rel="preconnect" href="https://fndkkgfpsgghvewvoysr.supabase.co" crossorigin />

<!-- Critical inline CSS for hero text paint -->
<style>
  body { margin: 0; }
  .hero-critical { min-height: 100vh; display: flex; align-items: center; }
  .hero-critical h1 { margin: 0; color: #fff; font-size: 2rem; line-height: 1.1; }
  .hero-critical p { margin: 0.75rem 0 0; color: rgba(255,255,255,.8); font-size: 1.125rem; }
</style>

<!-- Preload Hero Image for LCP -->
```

Huom: ei font-family, ei font-weight, ei position/overflow. Vain minimaaliset tyylit.

### 2. `src/components/Hero.tsx` — Lisaa `hero-critical` class

Rivi 9: Lisataan `hero-critical` section-elementin classNameen:

```tsx
<section id="hero" className="hero-critical relative min-h-screen flex items-center overflow-hidden">
```

### 3. `src/components/ServicePageHero.tsx` — Lisaa `hero-critical` class

Rivi 15: Lisataan `hero-critical` section-elementin classNameen:

```tsx
<section className="hero-critical relative min-h-[60vh] flex items-center justify-center overflow-hidden">
```

### Ei muita muutoksia

- Ei skeleton-HTML:aa
- Ei komponenttirakenteen muutoksia
- Ei muita tiedostoja
