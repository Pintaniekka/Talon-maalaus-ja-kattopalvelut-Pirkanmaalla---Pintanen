# Mobiilin ja tabletin alapalkin uusi ilme

## Nykytila

Alapalkissa on kaksi tasakokoista täyttöväristä nappia ("Soita meille" sininen, "Pyydä tarjous" tumma) valkoisella pohjalla ja ohuella yläreunan viivalla. Ilme on litteä ja napit kilpailevat keskenään huomiosta.

## Uusi ilme: kelluva lasipalkki

```text
┌────────────────────────────────────────┐
│  ╭──────────────────────────────────╮  │
│  │  [☎]  Soita   │  [Pyydä tarjous] │  │
│  ╰──────────────────────────────────╯  │
└────────────────────────────────────────┘
```

- Palkki ei enää kiinnity ruudun reunaan vaan **kelluu**: pyöristetty (rounded-full/2xl) kortti, pieni marginaali sivuilla ja alareunassa, pehmeä varjo.
- Tausta **läpikuultava lasipohja** (himmennetty valkoinen + blur), joka sopii sivuston muuhun glassmorphism-tyyliin.
- **Selkeä hierarkia:** soittaminen kevyt ikonipainike (sininen ikoni, läpinäkyvä pohja), "Pyydä tarjous" pääkutsu maalinkeltaisella (#ffec4e) tummalla tekstillä — sama korostusväri kuin heron pääpainikkeessa.
- Kevyt painallustuntuma (scale-alas napautuksessa) hover-skaalauksen sijaan, joka ei toimi kosketuksella.
- Turvallinen alareuna iPhonelle (safe-area-inset), jottei palkki jää eleviivan alle.

## Näkyvyys ja välit

- Palkki näkyy nykyiseen tapaan mobiilissa ja tabletissa (alle 1024 px).
- Sivun alareunan tyhjä tila laajennetaan koskemaan myös tablettia (nyt vain alle 768 px), jottei palkki peitä sivun viimeistä sisältöä tabletilla.

## Säilyy ennallaan

- Tekstit "Soita meille" ja "Pyydä tarjous", puhelinnumero ja tarjouslomakkeen avaus.
- Toiminnallisuus ja saavutettavuus (nav-alue, aria-label, kosketuskohteet vähintään 44 px).

## Tekniset yksityiskohdat

- Muokataan vain `src/components/MobileBottomBar.tsx` (rakenne + Tailwind-luokat) ja `src/index.css` (alareunan padding-media-kysely 767px → 1023px, safe-area).
- Värit semanttisilla tokeneilla (`bg-paint-yellow`, `text-accent`, `bg-card/80`), ei kovakoodattuja hex-arvoja.
- Tarkistus Playwrightilla mobiili- (393px) ja tablettinäkymässä (820px): palkki kelluu, ei vaakasuuntaista ylivuotoa, sisältö ei jää palkin alle.
