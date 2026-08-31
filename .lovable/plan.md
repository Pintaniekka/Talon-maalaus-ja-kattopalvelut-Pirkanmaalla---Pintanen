# Toiminta-alueet -palkin uudistus

Palkki on jokaisen sivun alaosassa (13 sivua/sivupohjaa). Nykyisellään se on suurin osa ajasta puolityhjä: vasemmalla kolme suljettua accordion-riviä, oikealla iso Suomen kartta ja väliin jää leveä tyhjä alue. Käyttäjä ei näe yhtään paikkakuntaa ilman klikkausta.

## Havainnot nykytilasta

Visuaaliset
- Kaksipalstainen asettelu jättää keskelle noin kolmanneksen tyhjää tilaa; palkin korkeus on n. 527 px vaikka sisältöä on kolme riviä.
- Kartta on koko Suomen kuva, jossa toiminta-alue on pieni tumma läiskä alalaidassa — viesti "palvelemme Pirkanmaalla" ei välity nopeasti.
- Accordion-otsikot (kursivoitu, kirkas sininen) eivät noudata muun sivuston otsikkotyyliä, ja auki avattuna kaupungit ovat pelkkä pilkulla eroteltu tekstimassa.
- Osio toistuu identtisenä jokaisella sivulla ilman mitään paikkakuntakohtaista kontekstia.

Tekniset
- Suljettu accordion-paneeli ei renderöi sisältöään, joten 24 sisäistä kaupunkilinkkiä puuttuvat oletuksena DOM:sta — sisäinen linkitys ja sen SEO-hyöty menetetään sivuilla, joilla palkki on ainoa aluelinkkien lähde.
- Linkit osoittavat aina vain `/maalauspalvelut-[kaupunki]`-sivulle, vaikka kaupungeille on myös `/tiilikaton-pinnoitus-[kaupunki]`-sivut.
- Kaupunkilista on kovakoodattu komponenttiin, vaikka projektissa on jo `allCities` (`src/data/cityData.ts`). Kaksi totuuden lähdettä eriytyy ajan myötä.
- Rinnalla on toinen, käyttämätön/päällekkäinen `ToimintaAlueetSection.tsx` samaan tarkoitukseen.
- Kartta on kiinteä 280x350 PNG (12 kt, ok) mutta ilman aspect-ratio-varausta ja ilman virhefallbackia.

## Ehdotettu lopputulos

Kompakti, aina avoin "aluepalkki", joka näyttää heti kaikki paikkakunnat:

```text
┌───────────────────────────────────────────────────────────┐
│  [kartta]   TOIMINTA-ALUEET                               │
│   pieni     Pirkanmaa, Kanta-Häme ja Satakunta            │
│             ─────────────────────────────────────────     │
│   PIRKANMAA                                               │
│   (Tampere)(Nokia)(Ylöjärvi)(Kangasala)(Lempäälä)...      │
│   KANTA-HÄME            SATAKUNTA                         │
│   (Forssa)(Hämeenlinna) (Huittinen)                       │
│             ─────────────────────────────────────────     │
│   Katso kaikki toiminta-alueet →                          │
└───────────────────────────────────────────────────────────┘
```

- Accordion pois; kaupungit näkyvät chip-linkkeinä (sama pyöreä chip-tyyli kuin muualla sivustolla), ryhmiteltynä maakuntaotsikoiden alle. Kaikki 24 linkkiä ovat aina DOM:ssa.
- Maakuntaotsikot sivuston omalla heading-tyylillä ja semanttisilla väreillä (ei inline `#38b6ff`).
- Kartta pienenee sivuelementiksi (n. 160–200 px) vasempaan reunaan / mobiilissa otsikon viereen, jotta tyhjä tila katoaa ja palkin korkeus putoaa selvästi.
- Nykyinen paikkakunta korostuu (aktiivinen chip) aluesivuilla, kun `activeCity` annetaan propsina — muilla sivuilla käytös ennallaan.
- Valinnainen `service`-prop (`maalaus` | `pinnoitus`): kattopinnoitussivuilla chipit linkittävät `/tiilikaton-pinnoitus-[kaupunki]`-sivuille, muualla maalaussivuille. Oletus säilyttää nykyisen käytöksen.
- Mobiilissa chipit kääntyvät luonnollisesti usealle riville; ei vaakascrollia.

## Tekninen toteutus

- `src/components/ToimintaAlueetBanner.tsx` kirjoitetaan uusiksi: pois `Accordion`, sisään chip-grid. Kaupunkidata luetaan `allCities`-listasta (`src/data/cityData.ts`) ja ryhmitellään maakunnan mukaan; jos `cityData` ei sisällä maakuntakenttää, lisätään komponenttiin kevyt slug→maakunta-mappaus yhdessä paikassa.
- Uudet valinnaiset propsit: `activeCity?: string`, `service?: 'maalaus' | 'pinnoitus'`. Kaikki nykyiset käyttöpaikat toimivat ilman muutoksia; aluesivuilla (`ServiceAreaPage`, `KattopalvelutPinnoitusCity`, `TalonMaalausCity`) välitetään propsit.
- Kartalle kiinteä `aspect-ratio`-varaus (ei layout shiftiä) ja `onError`-fallback, joka piilottaa kuvan siististi jos lataus epäonnistuu.
- Värit ja varjot vain semanttisilla tokeneilla, inline-hexit pois.
- Käyttämätön `ToimintaAlueetSection.tsx` poistetaan, jos mikään sivu ei importoi sitä (tarkistetaan ennen poistoa).
- Tekstisisällöt (kaupunkien nimet, "Toiminta-alueet", CTA-teksti) säilyvät sanatarkasti nykyisinä; vain rakenne ja tyyli muuttuvat.

## Ei muutu

- Reitit, URL-rakenne ja trailing slash -käytännöt.
- Palkin sijainti sivuilla eikä sen esiintyminen millään sivulla.
- Muut osiot tai niiden sisällöt.
