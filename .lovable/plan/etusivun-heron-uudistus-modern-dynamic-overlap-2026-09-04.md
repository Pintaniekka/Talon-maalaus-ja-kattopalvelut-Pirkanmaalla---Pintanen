# Etusivun heron uudistus — "Modern dynamic overlap"

## Mitä rakennetaan

Etusivun hero korvataan kokonaan uudella vaalealla, modernilla rakenteella: iso pyöristetty valkoinen kortti, jossa vasemmalla tekstisisältö ja oikealla kirkas kuvasarake vinoittain leikatulla siirtymällä. Nykyinen tumma kokoruutukuva poistuu.

### Rakenne

```text
┌──────────────────────────────────────────────┐
│ ┌──────────────────────────────────────────┐ │
│ │ PIRKANMAAN PAIKALLINEN PERHEYRITYS       │ │
│ │ H1: Tiilikaton pinnoitus ja talon        │ │
│ │     maalaus Pirkanmaalla        ╱ KUVA   │ │
│ │ Ingressiteksti                  ╱ (talo  │ │
│ │ [Laske hinta] [Ilmainen arvio]  ╱ jälkeen│ │
│ │ ─────────────────────────       ╱        │ │
│ │ 5,0/5  200+  5+v  Maksuton      ╱ ┌────┐ │ │
│ │ Google  proj  kok   arvio       ╱ │E&K │ │ │
│ │                                 ╱ │badge│ │
│ └──────────────────────────────────────────┘ │
└──────────────────────────────────────────────┘
```

- **Vasen sarake (3/5):** sininen pikkuviiva + "Pirkanmaan paikallinen perheyritys" -ylätunniste, nykyinen H1 (teksti säilyy ennallaan, "Pirkanmaalla" brändisinisenä), nykyinen ingressi, kaksi CTA:ta.
- **CTA-värit:** "Laske hinta" maalinkeltainen (#ffec4e, tumma teksti), "Ilmainen arviokäynti" valkoinen sinisellä reunuksella.
- **Luottamusrivi:** 4 lukua erotinviivan alla: 5,0/5 Google-arviot (punainen), 200+ projektia, 5+ vuotta, Maksuton arvio (sininen).
- **Oikea sarake (2/5):** nykyinen hero-talokuva koko sarakkeen korkeudella, desktopilla valkoinen vinosiirtymä (skew) vasempaan reunaan.
- **Kelluva badge kuvan päällä:** punainen (#B71C1C) kortti "Yrittäjät itse paikalla — Eemil & Eerik vastaavat jäljestä. Ei aliurakoitsijoita, vain puhdasta perheyrityksen laatua." (emoji-ikonin tilalle oma BrandIcons-taloikoni).
- **Mobiili:** kortti pinoutuu — kuva ylhäällä (korkeus rajattu), sisältö alla. Ei horisontaalista ylivuotoa.

### Säilyy ennallaan

- H1-teksti, ingressi ja CTA-tekstit sekä linkkikohteet (/hinnat, #yhteystiedot)
- Trust-lukujen sisältö (5,0/5, 200+, 5+, maksuton arvio)
- LCP-optimointi: kuva latautuu edelleen eager + fetchpriority=high, 4-portainen srcSet
- Aluepalkki ja muut etusivun osiot koskemattomina

### Poistuu

- Tumma overlay-kokoruutukuva ja sen sininen peitto
- Mobiilin "maali valuu" -SVG-reunakoriste (ei sovi vaaleaan korttiin)
- Alareunan scroll-indikaattori

## Tekniset yksityiskohdat

- `src/components/Hero.tsx`: kirjoitetaan uusiksi yllä olevan rakenteen mukaisesti Tailwind-luokilla.
- `src/index.css` + `tailwind.config.ts`: lisätään puuttuvat tokenit `--paint-yellow` (#ffec4e vastaavuus) ja `--roof-red` (#B71C1C vastaavuus) HSL-muodossa — ei kovakoodattuja hex-luokkia komponenteissa.
- `index.html`: critical CSS päivitetään uuteen heroon — vaalea tausta, TUMMA h1 (ei enää `color:#fff`-pakotetta), preload-linkki säilyy samalle kuvalle.
- Kuvana käytetään samaa `tummansininen-puutalo-ulkomaalaus-jalkeen` -kuvaa `getResponsiveSrc/srcSet`-apureilla (max 1200w olemassa olevien varianttien mukaan).
- Vinosiirtymä toteutetaan vain desktopilla (`hidden lg:block`), ei leiskahajoamista mobiilissa.
- Saavutettavuus: yksi H1, kontrastit WCAG AA (keltainen nappi saa tumman tekstin).

## Varmistus

- Build puhtaaksi läpi, Playwright-kuvat desktop + mobiili: kortin muoto, vinosiirtymä, badge ja napit näkyvät oikein, ei horisontaalista scrollia.
