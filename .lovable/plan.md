## Ongelma
Scrollin pieni nykiminen näyttää olevan aidosti globaali, ei vain yhdellä sivulla.

## Mitä löytyi

### 1. Header tekee työtä joka scroll-tikillä
`Header.tsx` kuuntelee `scroll`-eventtiä ja ajaa `setIsScrolled(window.scrollY > 50)` jokaisella scroll-liikkeellä.

Lisäksi header käyttää scrollatun tilan aikana:
- `backdrop-blur-md`
- `transition-all`
- fixed-position yläpalkkia

Tämä yhdistelmä on juuri sellainen, joka aiheuttaa pientä “tahmaisuutta” lähes kaikilla sivuilla.

### 2. Jatkuva marquee-animaatio pyörii requestAnimationFramella
`TestimonialsMarquee.tsx` käyttää jatkuvaa `requestAnimationFrame`-silmukkaa (`animate`) liikuttamaan arvosteluriviä.

CPU-profiloinnissa tämä nousi suoraan näkyviin scrollin aikana. Vaikka se ei yksin selitä kaikkea, se lisää jatkuvaa render-kuormaa niillä sivuilla joilla komponentti on mukana.

### 3. Backdrop blur esiintyy myös muissa globaaleissa UI-osissa
Ainakin:
- `Header.tsx`
- `MobileBottomBar.tsx`
- useiden sivujen hero-laatikot

`backdrop-blur` on kallis efekti etenkin silloin, kun sen alla liikkuu sisältöä scrollatessa.

## Korjaussuunnitelma

### 1. Kevennetään header globaalisti
`Header.tsx`:
- muutetaan scroll-listener passiiviseksi
- vältetään state-päivitys, jos `isScrolled`-arvo ei oikeasti muutu thresholdin yli/ali
- vaihdetaan `transition-all` tarkempiin transitioneihin (`background-color`, `box-shadow`)
- poistetaan `backdrop-blur-md` headerista ja korvataan se kiinteällä/semi-transparentilla taustalla

Tämä on tärkein korjaus, koska header on jokaisella sivulla.

### 2. Poistetaan blur myös mobiilin alabarista
`MobileBottomBar.tsx`:
- korvataan `backdrop-blur-md` tavallisella läpikuultavalla taustalla

Tämä keventää mobiilia globaalisti, mutta samalla pitää ilmeen lähes samana.

### 3. Hidastetaan / optimoidaan testimonials-marquee
`TestimonialsMarquee.tsx`:
- vähennetään jatkuvaa `requestAnimationFrame`-kuormaa
- vaihtoehdot:
  - vaihto CSS-pohjaiseen animaatioon, tai
  - rAF vain silloin kun komponentti on näkyvissä viewportissa, tai
  - pysäytetään animaatio kokonaan `prefers-reduced-motion`-tilassa

Suosittelen viewport-pohjaista käynnistystä + reduced motion -tukea.

### 4. Heroiden blur-laatikot pois niiltä sivuilta, joilla niitä käytetään paljon
Sivuilla olevat `bg-black/25 backdrop-blur-md` hero-laatikot korvataan kevyemmällä ratkaisulla:
- tummempi läpinäkyvä tausta ilman bluria
- tarvittaessa `text-shadow` tekstin luettavuuteen

Tämä ei ole yhtä kriittinen kuin header, mutta vähentää scroll-paint-kuormaa sivuston laajuisesti.

## Lopputulos
Näillä muutoksilla scrollin pitäisi tuntua selvästi vakaammalta koko sivustolla ilman että ulkoasu muuttuu radikaalisti.

## Tekninen toteutus
- `src/components/Header.tsx`
- `src/components/MobileBottomBar.tsx`
- `src/components/TestimonialsMarquee.tsx`
- tarvittaessa hero-blur-luokat niissä sivuissa, joissa käytetään lasilaatikkoa

Ensimmäisessä kierroksessa tekisin varmasti kohdat 1–3. Kohta 4 lisätään samaan toteutukseen, jos halutaan poistaa jankki mahdollisimman laajasti koko sivustolta.