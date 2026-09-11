# Header-uudistus: Tummansininen premium

Valittu suunta (v2/v5): koko header tummaan laivastonsiniseen (#0A192F), sininen pilli-CTA ja sininen–keltainen–sininen liukuväriraja headerin alareunassa.

## Mitä muuttuu

**Desktop**
- Yläpalkki ja päänavigaatio molemmat tummalla laivastonsinisellä (#0A192F)
- Yläpalkki: puhelinnumero sinisellä ikonilaatikolla (hover: keltainen), WhatsApp vihreällä ikonilla, oikealla kursivoitu slogan "Pirkanmaan luotettava perheyritys – Laatua kotiisi"
- Navigaatiolinkit valkoisina, isot kirjaimet, hover-korostus brändinsininen (#38b6ff)
- "Pyydä tarjous" -nappi: syvänsininen (#0038A8) pyöreä pilli, hover tummempi
- Headerin alareunaan ohut liukuväriraita: sininen → keltainen → sininen
- Vaalea Pintanen-logo toimii tummalla pohjalla sellaisenaan

**Mobiili**
- Asetelma säilyy: WhatsApp vasemmalla (pyöreä himmeä nappi), logo keskellä, burgeri oikealla (himmeä neliönappi)
- Headerin alle koko leveyden sininen "Pyydä tarjous" -palkki
- Avautuva valikko tyylitetään samaan tummaan teemaan (tumma tausta, valkoiset linkit, sininen CTA)

## Tekniset tiedot

- Muokataan vain `src/components/Header.tsx` + lisätään tarvittaessa `--navy`-design-token `index.css`:ään ja `tailwind.config.ts`:ään
- Scroll-käyttäytyminen säilyy: yläpalkki pienenee kuten nyt, headeri saa `bg-navy/95 backdrop-blur` -lasiefektin
- Nykyiset linkit, dropdownit, puhelin/WhatsApp-linkit ja `flushSync`-valikon sulkeminen säilyvät toiminnallisina
- Ei muutoksia reiteistä, logo-tiedostoihin tai muihin komponentteihin
- Varmistus: kuvakaappaukset desktop- ja mobiilinäkymästä (valikko kiinni + auki) sekä kontrastien tarkistus
