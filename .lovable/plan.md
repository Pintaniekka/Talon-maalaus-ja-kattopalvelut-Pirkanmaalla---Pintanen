

## srcSet ja sizes -paivitys koko sivustolle

Paivitetaan kuvien responsiivinen lataus kayttamaan oikeita w-deskriptoreita ja lisataan Supabase preconnect.

---

### 1. `src/lib/storage.ts` — srcSet-apufunktiot

Lisataan takaisin `getMobileImageUrl`, `getImageSrcSet` ja `getHeroSrcSet`:

- `getMobileImageUrl(desktopUrl, 480|750)` — muodostaa mobiili-URL:n `pictures-480/` tai `pictures-750/` -kansiosta, lisaa `-480` tai `-750` tiedostonimeen
- `getImageSrcSet(src)` — palauttaa `"...-480.webp 480w, ...src 900w"`
- `getHeroSrcSet(src)` — palauttaa `"...-750.webp 750w, ...src 1125w"`

### 2. `src/components/OptimizedImage.tsx` — srcSet-tuki

Lisataan `srcSet`-prop interfaceen ja `<img>`-tagiin. Muutetaan `loading`: priority-kuvilla `undefined` (selaimen oletus eager), muilla `"lazy"`.

### 3. `index.html` — Supabase preconnect

Lisataan `<link rel="preconnect" href="https://fndkkgfpsgghvewvoysr.supabase.co">` ennen hero-kuvan preload-tagia.

### 4. Komponenttikohtaiset muutokset

| Komponentti | srcSet | sizes |
|---|---|---|
| **Hero.tsx** | `getHeroSrcSet` (750w + 1125w) | `100vw` |
| **ServicePageHero.tsx** | `getHeroSrcSet` (750w + 1125w) | `100vw` |
| **Gallery.tsx** | `getImageSrcSet` (480w + 900w) | `(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw` |
| **BeforeAfter.tsx** | `getImageSrcSet` (480w + 900w) | `100vw` |
| **BeforeAfterSlider.tsx** | `getImageSrcSet` (480w + 900w) | `(max-width: 768px) 100vw, 50vw` |
| **Services.tsx** (puhdistus-banneri) | `getImageSrcSet` (480w + 900w) | `(max-width: 640px) 90vw, 800px` |
| **CityServices.tsx** (puhdistus-banneri) | `getImageSrcSet` (480w + 900w) | `(max-width: 640px) 90vw, 800px` |
| **Referenssit.tsx** (thumbnailit) | `getImageSrcSet` (480w + 900w) | `(max-width: 768px) 100vw, 33vw` |
| **ToimintaAlueetBanner.tsx** (kartta) | `getImageSrcSet` (480w + 900w) | `280px` |

### 5. Muutettavat tiedostot yhteenveto

| Tiedosto | Muutos |
|---|---|
| `src/lib/storage.ts` | Lisataan `getMobileImageUrl`, `getImageSrcSet`, `getHeroSrcSet` |
| `src/components/OptimizedImage.tsx` | Lisataan `srcSet`-prop, korjataan `loading` |
| `index.html` | Lisataan Supabase preconnect |
| `src/components/Hero.tsx` | Lisataan `srcSet` + importti |
| `src/components/ServicePageHero.tsx` | Lisataan `srcSet` + importti |
| `src/components/Gallery.tsx` | srcSet jo paikallaan, tarkistetaan |
| `src/components/BeforeAfter.tsx` | Lisataan `srcSet` + sizes + importti |
| `src/components/BeforeAfterSlider.tsx` | srcSet jo paikallaan, tarkistetaan w-arvot |
| `src/components/Services.tsx` | Lisataan `srcSet` puhdistus-banneriin |
| `src/components/CityServices.tsx` | Lisataan `srcSet` puhdistus-banneriin |
| `src/pages/Referenssit.tsx` | Lisataan `srcSet` + sizes kaikkiin kuviin |
| `src/components/ToimintaAlueetBanner.tsx` | Lisataan `srcSet` karttakuvaan |

### Riskit

- Ei riskeja: srcSet on graceful — jos mobiiliversiota ei loydy, selain kayttaa alkuperaista src-kuvaa
- Tiedostonimet ja polut pysyvat ennallaan
- Desktop-kuvan src-arvo ei muutu

