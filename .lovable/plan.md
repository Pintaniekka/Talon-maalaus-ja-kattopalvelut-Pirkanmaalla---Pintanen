

## Lighthouse 76 -> tavoite 90+ korjaukset

Edellinen muutos pudotti LCP render delayn 2320ms -> 780ms. Nyt jaljella olevat pullonkaulat:

### Analyysi

| Ongelma | Vaikutus | Prioriteetti |
|---|---|---|
| Supabase preconnect "unused" | LCP +320ms | Korkea |
| JS bundle 209KB yhdessa tiedostossa | FCP, LCP, TBT | Korkea |
| CSS render-blocking 160ms | FCP, LCP | Keskitaso |

### 1. `index.html` — Supabase preconnect: lisaa MOLEMMAT variantit

Ongelma: Kuvat ladataan `<img>` -tagilla ILMAN `crossorigin`-attribuuttia, joten selain avaa **non-CORS** yhteyden. Mutta preconnect on `crossorigin`, joten se avaa **CORS** yhteyden jota kuvapyynnot eivat kayta. Siksi Lighthouse sanoo "unused".

Ratkaisu: Lisaa kaksi preconnect-tagia:

```html
<link rel="preconnect" href="https://fndkkgfpsgghvewvoysr.supabase.co" />
<link rel="preconnect" href="https://fndkkgfpsgghvewvoysr.supabase.co" crossorigin />
```

Ensimmainen palvelee non-CORS kuvalatauksia (`<img>`), toinen CORS-pyyntoja (fetch, fontti jne).

### 2. `vite.config.ts` — JS bundle splitting

Lisataan `build.rollupOptions.output.manualChunks` joka jakaa bundlen:

```text
vendor-react    : react, react-dom, react-router-dom
vendor-motion   : framer-motion
vendor-ui       : radix-ui, recharts, cmdk, vaul, embla
index           : sovelluksen oma koodi (pienempi)
```

Tama pienentaa paa-JS-bundlea ~209KB -> ~80-100KB ja loput latautuvat rinnakkain tai vasta tarvittaessa. Vahentaa TBT:ta ja nopeuttaa FCP:ta.

### 3. `src/components/Hero.tsx` — Poista framer-motion scroll indicator initial render

Hero-komponentissa on `<motion.div>` scroll-indikaattorille joka vaatii framer-motionin latauksen ennen renderointia. Korvataan se tavallisella `<div>` + CSS-animaatiolla, jotta hero ei riipu framer-motionista.

### Muutettavat tiedostot

| Tiedosto | Muutos |
|---|---|
| `index.html` | Lisaa toinen preconnect ilman crossorigin |
| `vite.config.ts` | Lisaa manualChunks bundle splitting |
| `src/components/Hero.tsx` | Korvaa motion.div CSS-animaatiolla scroll-indikaattorissa |

### Odotettu vaikutus

| Mittari | Nyt | Tavoite |
|---|---|---|
| FCP | 3.6s | ~2.5-3.0s |
| LCP | 4.5s | ~3.5-4.0s |
| TBT | 50ms | ~20-30ms |
| Score | 76 | ~85-92 |

### Riskit

- ManualChunks voi lisata HTTP-pyyntoja, mutta HTTP/2 multiplexing hoitaa taman
- Scroll-indikaattorin CSS-animaatio nayttaa samalta kuin framer-motion versio
- Ei muuteta komponenttirakennetta tai reititysta

