

## Viimeinen Lighthouse-korjaus: Supabase preconnect -varoituksen poisto

### Ongelma

Lighthouse raportoi: **"Käyttämätön ennakkoyhteys"** Supabase-domainille. Tämä johtuu siitä, että `index.html`:ssä on sekä `<link rel="preconnect">` että `<link rel="preload">` samalle domainille. Preload muodostaa yhteyden automaattisesti, joten erillinen preconnect on turha ja aiheuttaa varoituksen.

### Ratkaisu

Poistetaan `index.html`:stä kaksi riviä:

```text
<link rel="preconnect" href="https://fndkkgfpsgghvewvoysr.supabase.co" />
<link rel="dns-prefetch" href="https://fndkkgfpsgghvewvoysr.supabase.co" />
```

Hero-kuvan `<link rel="preload" ... fetchpriority="high">` hoitaa jo yhteyden muodostamisen kyseiseen domainiin.

### Muutettavat tiedostot

| Tiedosto | Muutos |
|---|---|
| `index.html` | Poistetaan Supabase preconnect + dns-prefetch (rivit 8-9) |

### Riskit

Ei riskejä. Preload-tagi tekee jo saman asian, joten preconnect on redundantti. Tämä poistaa Lighthouse-varoituksen puhtaasti.

