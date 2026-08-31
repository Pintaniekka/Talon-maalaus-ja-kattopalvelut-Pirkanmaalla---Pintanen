# Toiminta-alueet -palkin uudistus (Premium service grid -suunta)

Palkki (13 sivua/sivupohjaa) uudistetaan käyttäjän valitseman design-suunnan mukaisesti: premium-tyylinen kortti, jossa maakunnat ovat laajennettavia rivikohtaisia kortteja ja oikealla koristeellinen sininen karttasarake.

## Visuaalinen toteutus

- **Kortti:** valkoinen, pyöristetyt kulmat (n. 2.5rem), hienovarainen sininen reuna ja pehmeä sininen varjo. Kokonaisuus kelluu nykyisellä `bg-accent-light`-taustalla.
- **Otsikkoalue:** iso "Toiminta-alueet" -H2 (font-heading, bold) ja sen alle lyhyt brändin sininen (#38b6ff → primary-token) viiva.
- **Maakuntakortit** (Pirkanmaa / Kanta-Häme / Satakunta), jokaisessa:
  - Sininen ikonilaatikko (MapPin-ikoni valkoisella, sininen varjo)
  - Maakunnan nimi bold-otsikkona
  - Alasnuoli, joka kääntyy avattaessa
  - Sisällössä kaupungit chip-linkkeinä (vaalea tausta, hienovarainen reuna; hoverissa sininen reuna + tekstiväri). Pirkanmaa oletuksena auki, muut suljettuna.
- **Karttasarake (oikea):** primary-sininen pohja, hienovarainen valkoinen ruudukkokuvio taustalla, todellinen karttakuva lasimaista korttia vasten (white/10 tausta, border white/30) sekä alla tekstilohko:
  - Chip: "Paikallinen Palvelu"
  - Otsikko: "Kaikki palvelut aina lähelläsi"
  - Lisäksi linkki "Katso kaikki toiminta-alueet →" osoitteeseen `/toiminta-alueet` (säilyttää nykyisen CTA:n funktion).
- **Mobiili:** karttasarake pinoutuu sisällön alle pienempänä (tai otsikon yhteyteen), chipit kääntyvät riveille, ei vaakascrollia.

## Tekninen toteutus

- `src/components/ToimintaAlueetBanner.tsx` kirjoitetaan uusiksi.
- Avattavuus toteutetaan Radix-accordionilla (olemassa oleva `ui/accordion`) mutta paneelien sisältö pakotetaan aina DOM:iin (`forceMount` / vastaava) — näin kaikki 24 sisäistä kaupunkilinkkiä pysyvät crawlattavina myös suljettuna. Nykyisessä toteutuksessa linkit puuttuvat DOM:sta suljetussa tilassa.
- Kaupunkidata tulee `allCities`-listasta (`src/data/cityData.ts`); komponenttiin lisätään slug→maakunta-mappaus (Pirkanmaa 21 / Kanta-Häme 2 / Satakunta 1). Ei kovakoodattua duplikaattilistaa.
- Uudet valinnaiset propsit:
  - `activeCity?: string` — nykyinen paikkakunta korostetaan aluesivuilla (aktiivinen chip).
  - `service?: 'maalaus' | 'pinnoitus'` — kattopinnoitussivuilla chipit linkittävät `/tiilikaton-pinnoitus-[kaupunki]`-sivuille, oletuksena `/maalauspalvelut-[kaupunki]`.
  - Kaikki 13 nykyistä käyttöpaikkaa toimivat ilman muutoksia; aluesivuille (`ServiceAreaPage`, `KattopalvelutPinnoitusCity`, `TalonMaalausCity`) välitetään propsit.
- Kartta: sama Supabase-PNG kuin nyt, `aspect-ratio`-varausta vasten (ei layout shiftiä) ja `onError`-fallback piilottaa kuvan siististi virhetilanteessa.
- Värit, varjot ja pyöristykset semanttisilla tokeneilla mahdollisuuksien mukaan; tarvittaessa lisätään muutama token (esim. pehmeä sininen varjo) `index.css`:ään. Inline-hext poistetaan.
- Ruudukkokuvio toteutetaan puhtaalla CSS:llä (linear-gradient -tausta), ei SVG-patternia.
- Käyttämätön `ToimintaAlueetSection.tsx` poistetaan, ellei mikään sivu importoi sitä (tarkistetaan ensin).
- `prefers-reduced-motion`: ei pulssianimaatioita eikä isoja siirtymiä.

## Säilyy ennallaan

- Tekstit: "Toiminta-alueet", maakuntien nimet, kaikki kaupunkien nimet sanatarkasti nykyisistä lähteistä (`cityData`).
- Reitit, URL-rakenne ja trailing slash -käytännöt. Ei uusia reittejä.
- Palkin sijainti ja esiintyminen kaikilla sivuilla.
- SEO: H2-taso säilyy ("Toiminta-alueet"), maakunnat H3-tasolla.

## Varmistus

- Build ilman virheitä.
- Playwright-tarkistus: etusivun palkki näyttää valitun suunnan mukaiselta desktopilla ja mobiililla; DOM:sta löytyvät kaikki 24 kaupunkilinkkiä myös suljetuissa paneeleissa; kartta latautuu tai fallback toimii.
