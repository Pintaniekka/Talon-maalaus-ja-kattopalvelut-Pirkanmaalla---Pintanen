## Lighthouse-suorituskyvyn optimointisuunnitelma (85 -> 95+)

### Analyysi: Miksi suorituskyky on 85?

Lighthouse-raportin mukaan suurin ongelma on **LCP (3.5s)**, jossa hero-tekstin "katoille ja seinille" renderöintiviive on **2340 ms**. Tämä johtuu pääasiassa siitä, että **Google Fonts ladataan CSS-tiedoston sisällä `@import`-komennolla**, mikä estää renderöinnin kokonaan kunnes fontti on ladattu. Tämä vaikuttaa sekä FCP:hen (2.3s) että LCP:hen.

### Suunnitelma

#### 1. Fonttien latauksen optimointi (suurin vaikutus - arviolta -800ms LCP)

**Ongelma:** `src/index.css` rivillä 5 on `@import url('https://fonts.googleapis.com/css2?...')` joka on renderöinnin estävä pyyntö CSS-tiedoston sisällä. Selain ei voi edes aloittaa fontin lataamista ennen kuin CSS on ladattu ja parsittu.

**Ratkaisu:**

- Poistetaan `@import`-rivi `src/index.css`-tiedostosta
- Lisätään `index.html`:n `<head>`-osioon `<link rel="preconnect">` Google Fontsille ja `<link rel="stylesheet">` fonttilinkit `media="print" onload="this.media='all'"` -tekniikalla, jotta fonttien lataus ei estä renderöintiä
- Lisätään myös inline fallback `<noscript>` -tagi varmuudeksi

#### 2. Puuttuvat kuvan mitat (CLS ja Lighthouse-varoitukset)

**Ongelma:** Footerin logo ja ToimintaAlueetBanner-karttakuva puuttuvat `width`/`height`-attribuutit.

**Ratkaisu:**

- **Footer.tsx:** Lisätään `width={200} height={80}` footerin logo-kuvalle
- **ToimintaAlueetBanner.tsx:** Lisätään `width={280} height={350}` karttakuvalle

#### 3. Preconnect-varoituksen korjaus

**Ongelma:** Lighthouse ilmoittaa "Käyttämätön ennakkoyhteys" ja kehottaa tarkistamaan `crossorigin`-määritteen. Supabase Storage -kuvat ladataan ilman CORS:ia, mutta preconnect ilman `crossorigin` ei vastaa fonttipyyntöjä jne.

**Ratkaisu:**

- Lisätään `crossorigin` preconnect-tagiin Google Fontsille (uusi)
- Pidetään Supabase preconnect ilman crossoriginia (kuvat eivät käytä CORS:ia) - tämä on jo oikein

#### 4. Käyttämättömän JavaScriptin vähentäminen (laiska lataus)

**Ongelma:** 125 KiB käyttämätöntä JS:ää ensimmäisellä latauksella, koska kaikki sivut ladataan kerralla.

**Ratkaisu:**

- Muutetaan `App.tsx`:ssa alasivujen importit käyttämään `React.lazy()` ja `Suspense`-wrapperia
- Vain etusivu (`Index`) ja `Layout` ladataan heti, muut sivut laiskasti

---

### Tekniset yksityiskohdat

**Muutettavat tiedostot:**


| Tiedosto                                  | Muutos                                                           |
| ----------------------------------------- | ---------------------------------------------------------------- |
| `index.html`                              | Google Fonts `<link>` preconnect + ei-renderöintiä-estävä lataus |
| `src/index.css`                           | Poistetaan `@import url(...)` fonttirivi                         |
| `src/components/Footer.tsx`               | `width={200} height={80}` logoon                                 |
| `src/components/ToimintaAlueetBanner.tsx` | `width={280} height={350}` karttaan                              |
| `src/App.tsx`                             | `React.lazy()` alasivuille                                       |


**Riskit ja varmuus:**

- Fonttien latausmuutos on standardi Google-suositus ja toimii 100% varmasti
- `React.lazy()` on Reactin sisäänrakennettu ominaisuus, täysin turvallinen
- Kuvan mitat ovat staattisia attribuutteja, eivät voi rikkoa mitään  
  
**Yksi pieni lisähuomio (React.lazy):** Kun Lovable asentaa `React.lazy()` -toiminnon `App.tsx`-tiedostoon, sen täytyy ehdottomasti kääriä sovelluksen reitit `<Suspense>` -komponenttiin. Esimerkiksi näin: `<Suspense fallback={<div className="min-h-screen" />}>`. Jos tätä "fallbackia" ei ole, React kaatuu yrittäessään ladata alasivua. Tämä on standardikauraa React-koodarille, mutta Lovablelle se kannattaa mainita varmuuden vuoksi.