

## Ongelma

`/hinnat`, `/hinnat/tiilikaton-pinnoitus`, `/hinnat/katon-puhdistus` ja `/hinnat/talon-maalaus` -reitit puuttuvat `vite-plugin-spa-routes.ts`-tiedoston `getAllRoutes()`-funktiosta. GitHub Pages ei löydä näille reiteille fyysistä `index.html`-tiedostoa, joten se palauttaa 404.

React Router osaa käsitellä nämä reitit client-sidella (näkyvät Lovable-previewssä), mutta suoralla URL-käynnillä GitHub Pages ei tiedä ohjata pyyntöä `index.html`:ään.

## Korjaus

Lisätään `vite-plugin-spa-routes.ts` → `getAllRoutes()`-funktioon neljä puuttuvaa reittiä:

```
"/hinnat",
"/hinnat/tiilikaton-pinnoitus",
"/hinnat/katon-puhdistus",
"/hinnat/talon-maalaus",
```

Nämä lisätään staattisten reittien listaan (esim. `/referenssit`-rivin jälkeen). Muutoksia tarvitaan vain yhteen tiedostoon.

## Build-virhe (erillinen)

Edge function `send-contact-email` viittaa `npm:resend@2.0.0` -pakettiin, joka puuttuu Deno-ympäristöstä. Tämä korjataan lisäämällä `deno.json` edge functionin hakemistoon tai päivittämällä import.

