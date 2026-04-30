## Ongelma

Timo Piilosen Google-arvostelu lyhennettiin kahteen ensimmäiseen lauseeseen, koska `TestimonialCard` on kiinteäleveä (300–340 px) eikä koko teksti (~280 merkkiä) mahtunut näkyviin marquee-rivissä rikkomatta visuaalista tasapainoa.

Muistisääntöä **"Content Integrity: NEVER shorten, summarize, or style-rewrite existing texts"** ei pidä rikkoa. Asiakasarvioita on käsiteltävä samalla tarkkuudella kuin brändi- ja paikallistekstejä — niitä ei saa lyhentää.

## Ratkaisu

Säilytetään marquee-kortin koko ennallaan ja lisätään pitkille arvioille pehmeä "Lue lisää" -laajennus suoraan kortin sisään, joka säilyttää alkuperäisen tekstin sanasta sanaan.

### Muutokset tiedostoon `src/components/TestimonialsMarquee.tsx`

**1. Palautetaan Timo Piilosen teksti täydellisenä**

Korvataan rivin 9 lyhennetty teksti alkuperäisellä:

> "Eerik Pitkänen teki hyvän tarjouksen kattomaalauksesta ja -pinnoituksesta. Tarjous piti hyvin, työn laatu oli loistava ja itse työ sujui aikataulun mukaisesti. Erityisesti jäivät mieleen työn jälkien siistiminen ja maalarin hyvä raportointi tehdyistä toimista. Suosittelen lämpimästi."

**2. Lisätään pitkien tekstien käsittely `TestimonialCard`-komponenttiin**

- Asetetaan kynnysarvo: jos `text.length > 180`, kortti näytetään katkaistuna (`line-clamp-4`) ja perään "Lue lisää" -linkki.
- Klikkaus laajentaa kortin in-place (tilan saa `useState`), poistaa `line-clamp` ja vaihtaa linkin tekstiksi "Näytä vähemmän".
- Marquee pysähtyy automaattisesti (olemassa oleva `setPaused(true)` `onMouseEnter` / `onTouchStart` -kuuntelijoiden kautta), joten käyttäjä ehtii lukea rauhassa.
- Laajennettu kortti kasvaa pystysuunnassa — leveys ja muiden korttien sijoittelu eivät muutu, koska `flex-shrink-0 w-[300px] sm:w-[340px]` säilyy.

**3. Saavutettavuus**

- "Lue lisää" -nappi on `<button type="button">`, ei `<a>`.
- `aria-expanded` -attribuutti kertoo tilan ruudunlukijoille.
- Painike pysäyttää marqueen myös fokusoituna (`onFocus` / `onBlur` -kuuntelijat lisätään marquee-konttiin).

### Tekninen huomio

Vaihtoehtoisia ratkaisuja punnittiin:

| Vaihtoehto | Hylkäyssyy |
|---|---|
| Kasvata kortin leveyttä | Rikkoo marquee-rytmin, vie tilaa muilta arvioilta |
| Pienennä fonttikokoa | Heikentää luettavuutta ja WCAG AA -kontrastia |
| Modal/popup | Tarpeeton kerros yksinkertaiselle tekstinäytölle |
| **Inline expand** | **Säilyttää layoutin, ei vaadi uusia komponentteja, sopii myös muille pitkille arvioille tulevaisuudessa** |
