## 1. Poista käyttämättömät raskaat assetit

Tarkistettu: `src/assets/` ei ole yhtään koodiviittausta. Turvallisesti poistetaan kaikki vanhat PNG/JPG/MP4 -tiedostot:
- `Taustavideo.mp4`
- `logo.png` (~2.1MB)
- Kaikki `katto_*.png`, `seina_*.jpeg`, `kiiltava_katto*.jpeg`, `pensselikuva.png`, `puhdistus_ennen_jalkeen.png`, `harjatiiviste.jpg`

Samoin `public/` -kansiossa olevat `Keltainen_seina_ennen.jpg`, `Keltainen_seina_jalkeen.jpg`, `Punainen_katto_ennen.jpg`, `Punainen_katto_jalkeen.jpg` – koodissa ei viittauksia, poistetaan.

## 2. Poista testireitti ja -komponentti

- Poista `<Route path="/image-test" ...>` `App.tsx`:stä.
- Poista koko tiedosto `src/pages/ImageTest.tsx`.

## 3. Korjaa Meistä-sivun Hero (SEO)

`src/pages/Meista.tsx`: `ServicePageHero` saa tällä hetkellä `title=""` ja `subtitle=""`.
- Täytetään propit: `title="Meistä"` ja `subtitle="Kotimainen ja luotettava maalausliike Pirkanmaalla"`.
- Koska childrenissä on jo oma glassmorphism-laatikko ja `<h1>Tutustu Pintaseen</h1>`, otetaan childrenin `<h1>` pois ja muutetaan se muotoon joka ei luo tupla-h1:tä. Tai siirretään glassmorphism-laatikon teksti integroiduksi osaksi hero-komponenttia. **Toteutus:** Muutetaan childrenin `<h1>` → `<h2>` tai rikastetaan `ServicePageHero`:n title/subtitle niin, että glassmorphism-laatikko toimii koriste-elementtinä. Lopputuloksessa sivulla on yksi selkeä `<h1>`.

## 4. Poista legacy SPA-hack

`index.html` `<body>`-osion alusta poistetaan:
```html
<script type="text/javascript">
  (function(l) { ... }(window.location))
</script>
```
Käyttäjä vahvistanut: Cloudflare hoitaa tämän nyt.