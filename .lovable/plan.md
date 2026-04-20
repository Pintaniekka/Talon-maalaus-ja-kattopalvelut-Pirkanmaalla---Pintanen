

## Analyysi: Tupla-canonical ongelma

Kyllä, tämä on todellinen ongelma. Tarkistetaan tilanne:

**index.html rivi 48:**
```html
<link rel="canonical" href="https://pintanen.fi" />
```

**SEO.tsx rivi 27:**
```html
<link rel="canonical" href="https://pintanen.fi/talon-maalaus-tampere/" />
```

Molemmat renderöityvät DOMiin → Google näkee kaksi ristiriitaista canonical-tägiä.

## Korjaus

**Yksi muutos: `index.html`** — poistetaan rivi 48:
```html
<link rel="canonical" href="https://pintanen.fi" />
```

SEO.tsx hoitaa jo dynaamisen canonicalin oikein React Helmetin kautta jokaiselle sivulle.

