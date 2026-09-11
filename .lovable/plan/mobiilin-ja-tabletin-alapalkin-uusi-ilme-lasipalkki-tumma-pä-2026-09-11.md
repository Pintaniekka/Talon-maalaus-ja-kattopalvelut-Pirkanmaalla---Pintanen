# Mobiilin ja tabletin alapalkin uusi ilme — "Lasipalkki, tumma pääkutsu"

## Mitä muuttuu

Alapalkki muuttuu litteästä valkoisesta palkista kelluvaksi lasikortiksi, jossa on selkeä hierarkia: sininen "Soita meille" ja tumma navy "Pyydä tarjous" keltaisella ikonilla.

```text
┌──────────────────────────────────────────┐
│ ╭──────────────────────────────────────╮ │
│ │ [☎ Soita meille] [📄 Pyydä tarjous]  │ │
│ ╰──────────────────────────────────────╯ │
└──────────────────────────────────────────┘
```

- **Kelluva kortti:** palkki irtoaa ruudun reunasta — sivumarginaalit, pyöristetyt kulmat, pehmeä syvä varjo.
- **Lasipohja:** läpikuultava valkoinen + taustan sumennus, ohut vaalea reunus.
- **Soita meille:** brändisininen pohja, valkoinen teksti ja puhelinikoni.
- **Pyydä tarjous:** tumma navy pohja, valkoinen teksti ja **maalinkeltainen** dokumentti-ikoni — nostaa pääkutsun esiin.
- **Painallustuntuma:** napit painuvat hieman kasaan napautuksessa (ei hover-suurennusta, joka ei toimi kosketuksella).
- **Turva-alue:** iPhonen eleviivalle jätetään tilaa, jottei palkki jää sen alle.

## Näkyvyys ja välit

- Palkki näkyy nykyiseen tapaan mobiilissa ja tabletissa (alle 1024 px).
- Sivun alareunan tyhjä tila laajennetaan koskemaan myös tablettia (nyt vain alle 768 px), jottei palkki peitä sivun viimeistä sisältöä.

## Säilyy ennallaan

- Tekstit "Soita meille" ja "Pyydä tarjous" täsmälleen nykyisinä.
- Puhelinnumero ja tarjouslomakkeen avaus toimivat kuten ennen.
- Saavutettavuus: nav-alue ja aria-label säilyvät, kosketuskohteet vähintään 44 px.

## Tekniset yksityiskohdat

- Muokataan `src/components/MobileBottomBar.tsx` (rakenne + Tailwind-luokat) ja `src/index.css` (alareunan padding 767px → 1023px, `env(safe-area-inset-bottom)`).
- Värit semanttisilla tokeneilla (`bg-accent`, `bg-navy`, `text-paint-yellow`, `bg-card/80`) — ei kovakoodattuja hex-arvoja komponentissa.
- Ikonit nykyisistä `BrandIcons`-ikoneista (Phone, FileText).
- Tarkistus Playwrightilla mobiili- (393 px) ja tablettinäkymässä (820 px): palkki kelluu, ei vaakasuuntaista ylivuotoa, sisältö ei jää palkin alle.
