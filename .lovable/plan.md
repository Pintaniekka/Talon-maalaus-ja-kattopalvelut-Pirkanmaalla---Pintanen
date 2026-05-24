## Korjaukset sivulle `/artikkelit/milloin-pinnoittaa-tiilikatto`

### 1. Hero- ja sisältökuvat eivät näy

**Syy:** `getResponsiveSrcSet` rakentaa srcsetin neljälle leveydelle (400/800/1200/**1500**w). Artikkelin viidellä kuvalla 400/800/1200 löytyvät Supabase-bucketista, mutta **1500w-versio puuttuu** (kaikki palauttavat 400). Desktopilla selain valitsee 1500w-version → 400-vastaus → Chrome estää sen `ERR_BLOCKED_BY_ORB` -virheellä → kuva näkyy rikkinäisenä. Pienemmillä viewporteilla 1200w riittää, joten ongelma on lähinnä desktopilla.

**Korjaus:** Lisätään `src/lib/storage.ts`:ään valinnainen widths-parametri:

```ts
export function getResponsiveSrcSet(baseName: string, widths: ResponsiveWidth[] = RESPONSIVE_WIDTHS): string
```

Ei muuta nykyistä käyttäytymistä missään muualla (default = kaikki 4 leveyttä). `ArtikkeliMilloinPinnoittaa.tsx`:ssä kutsutaan `getResponsiveSrcSet(base, [400, 800, 1200])` kaikille viidelle kuvalle (hero + 3 sectionia + leveä alakuva), jolloin selain ei enää yritä ladata olematonta 1500w-tiedostoa. `src`-attribuutiksi jää nykyinen 1200w `getResponsiveSrc(base)`.

### 2. Google-arviokortti samannäköiseksi kuin etusivun karusellissa

Etusivun `TestimonialsMarquee.tsx`:n `TestimonialCard` -tyyli:
- Pyöreä alkukirjain-avatar (`bg-primary/10 text-primary`, `w-9 h-9`) + nimi rivillä
- Tähdet (16px keltaiset SVG-tähdet)
- Lainattu teksti `text-muted-foreground` (ei kursiivia)
- Alarivi: pieni värillinen Google-SVG-ikoni + teksti "Google-arvostelu"
- Kortti: `bg-card rounded-xl p-5 shadow-sm border border-border/50`

**Korjaus:** Artikkelin "Review card + CTA" -osiossa (rivit 245–267) korvataan nykyinen kortti samalla rakenteella. Käytännössä tuodaan `TestimonialCard` uudelleenkäytettäväksi:

- Eksportataan nimettynä `export const TestimonialCard` `TestimonialsMarquee.tsx`:stä (sekä `StarIcon`/`GoogleIcon` jäävät sisäisiksi).
- `ArtikkeliMilloinPinnoittaa.tsx` importtaa `TestimonialCard`in ja renderöi sen yhden kortin osioon keskitettynä (`max-w-sm mx-auto`) Jukan arviolla (`name: "Jukka Jukarainen"`, `stars: 5`, `text: "Työt hoitui sovitusti ja työn jälki siistiä. Iso suositus kaikille kattohuoltoa tarvitseville!"`). Lucide `Star` -import ja paikallinen tähtirivi poistetaan, koska kortti hoitaa sen.
- CTA-painike (`Pyydä Pintasen ilmainen arvio...`) jää kortin alle samaan tapaan kuin nyt.

### Muutettavat tiedostot

- `src/lib/storage.ts` — `getResponsiveSrcSet`-signature laajennetaan valinnaisella `widths`-listalla (taaksepäin yhteensopiva).
- `src/components/TestimonialsMarquee.tsx` — `TestimonialCard` nimettynä exporttina (muu logiikka ennallaan).
- `src/pages/ArtikkeliMilloinPinnoittaa.tsx` — kaikki 5 kuvaa käyttämään `[400, 800, 1200]`-srcsettiä; arviokortin korvaus jaetulla komponentilla; `Star`-import pois.
