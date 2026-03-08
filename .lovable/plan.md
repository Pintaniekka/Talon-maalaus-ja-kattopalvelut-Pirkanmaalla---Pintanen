

## Ongelma

`ServicePageHero.tsx` käyttää kaikille sivuille samaa overlay-gradienttia:

```
bg-gradient-to-b from-primary/50 to-primary-dark/60
```

Light-modessa `primary` on tummansininen (210 25% 18%) ja `primary-dark` on vielä tummempi sininen (215 30% 10%). Kun tämä yhdistyy mustan talon kuvaan, syntyy kellertävä/kultainen sävy joka näyttää oudolta.

## Ratkaisu

Vaihdetaan hero-overlay neutraalimmaksi tumma-gradientiksi, joka toimii paremmin kaikkien hero-kuvien kanssa. Esimerkiksi:

```
bg-gradient-to-b from-black/50 to-black/65
```

Tai vaihtoehtoisesti pidetään sininen sävy mutta tehdään se tummemmaksi ja vähemmän saturoituneeksi. Muutos tehdään `ServicePageHero.tsx` rivillä 29.

Tämä vaikuttaa kaikkiin palvelusivuihin jotka käyttävät `ServicePageHero`-komponenttia, joten tarkistetaan että overlay näyttää hyvältä myös muilla sivuilla (pinnoitus, puhdistus, maalaus jne.).

