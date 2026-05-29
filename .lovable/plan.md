## Tavoite

Kun käyttäjällä on **"vähennä liikettä"** päällä, TestimonialsMarquee:
1. Latautuu **keskelle** (näkyvissä arvio molemmin puolin).
2. Käyttäjä voi **scrollata vaakaan loputtomasti** kumpaankin suuntaan ilman, että tulee päätyseinä.

Normaalitilan (CSS-animaatio) käyttäytymistä ei muuteta.

## Toteutus

Vain `src/components/TestimonialsMarquee.tsx` muuttuu. `index.css` pysyy ennallaan (reduced-motion-säännöt jo paikallaan: `animation: none` + `overflow-x: auto`).

### 1. Tunnista reduced-motion Reactissa

Lisätään `useEffect` + `useState`, joka kuuntelee `window.matchMedia('(prefers-reduced-motion: reduce)')` ja päivittyy live (kun käyttäjä vaihtaa OS-asetusta).

### 2. Duplikoi sisältö 3× (vain reduced-motion -tilassa)

Nykyisin `items = [...baseItems, ...baseItems]` (2×) toimii hyvin CSS-translaatiolle (-50% loop). Reduced-motion-loopille tarvitaan vähintään **3 kopiota**, jotta voimme aina pitää käyttäjän keskimmäisessä kolmanneksessa ja "teleportata" hänet takaisin keskelle huomaamattomasti reunoja lähestyessä.

```ts
const loopItems = reducedMotion
  ? [...baseItems, ...baseItems, ...baseItems]
  : [...baseItems, ...baseItems];
```

### 3. Aseta alkuscroll keskelle

Mount-efektissä (reduced-motion = true):
```ts
viewportRef.current.scrollLeft = viewportRef.current.scrollWidth / 3;
```
Tämä asettaa näkymän keskikolmanneksen alkuun, jolloin molemmin puolin on identtinen kopio arvioista.

### 4. Saumaton wrap scrollatessa

`onScroll`-handler:
- Kun `scrollLeft < scrollWidth / 3 * 0.5` → hyppää `scrollLeft += scrollWidth / 3`
- Kun `scrollLeft > scrollWidth / 3 * 2.5` → hyppää `scrollLeft -= scrollWidth / 3`

Hyppy tehdään ilman smooth-behavioria, joten käyttäjä ei näe sitä — sisältö on identtistä.

### 5. Pieni UX-detalji

Reduced-motion-tilassa lisätään `scroll-snap-type: x proximity` ja korteille `scroll-snap-align: center`, jotta selaaminen tuntuu jouhevalta sormella mobiilissa. (Tämä tehdään inline-tyylillä komponentissa, ei globaalisti, jotta normaalitila ei muutu.)

## Tiedostot

- `src/components/TestimonialsMarquee.tsx` — lisätään reduced-motion-tunnistus, kolminkertainen duplikointi tässä tilassa, viewport-ref, alkuscroll keskelle, onScroll-wrap-logiikka, snap-tyylit inline reduced-motion-haarassa.

## Mitä EI muuteta

- Normaalin CSS-animaation toiminta (kun reduced-motion off).
- `src/index.css` (reduced-motion-säännöt ovat jo oikein).
- Sivut, jotka käyttävät komponenttia.
- Arviodatat.
