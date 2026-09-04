# Etusivun hero: jaettu "Architectural split hero" (v2)

## Tavoite
Muutetaan etusivun hero kaksiosaiseksi: **tekstit ja napit vasemmalla**, **nykyinen kuva oikealla** arkkitehtonisella reunaleikkauksella (viisto clip-path-reuna), jolla kuva istuu tekstien viereen. Sama brändityyli, hienompi lopputulos.

## Mitä muutetaan
Uudelleenkirjoitetaan `src/components/Hero.tsx` valitun v2-suunnan rakenteeseen:

1. **Vasen puolikas** (vaalea `bg-background`):
   - H1: "Tiilikaton pinnoitus ja talon maalaus Pirkanmaalla" — "Pirkanmaalla" korostetaan brändinsinisellä (#38b6ff)
   - Alateksti **tallella sanatarkasti** nykyisestä: "Perheyritys, jossa yrittäjät tekevät työn itse – tiilikaton pinnoitukset ja talon maalaukset Pirkanmaalla."
   - Napit: "Laske hinta" (sininen, `→ /hinnat`) ja "Ilmainen arviokäynti" (ääriviiva, `#yhteystiedot`)
   - Luottamusmerkit uudelleen tyyliteltynä numero-/tilastosarakkeiksi (v2-tyyli): 5,0/5 Google · 200+ projektia · 5+ vuotta · Maksuton arvio
2. **Oikea puolikas** (kuva):
   - Nykyinen Supabase-kuva (`tummansininen-puutalo-ulkomaalaus-jalkeen`) responsiivisella srcSet:illä
   - `clip-path`-reunaleikkaus (viisto kaari vasemmassa laidassa, kuten v2-prototyyypissä)
   - Kevyt tummansininen overlay
   - **Kelluva asiakasarviokortti** kuvan päällä (vain xl-näytöillä): aito arvio `testimonialsData.ts`-tiedostosta, sininen vasen reunaviiva
3. **Mobiili**:
   - Tekstit ylhäällä, kuva alle (min-height ~400px)
   - Nykyinen vaaleansininen #96dafb aaltomaski heron alareunassa säilyy
4. **Typografia ja tokenit**: käytetään projektin omia fontteja (Montserrat otsikot, Open Sans leipäteksti) ja semanttisia design-tokeneita — ei prototyypin Playfair/Inter-fontteja
5. **LCP**: kuva ladataan eager + `fetchPriority="high"`, ei animaatioita kuvalla

## Tekniset tiedot
- Vain `src/components/Hero.tsx` muuttuu — ei reittejä, tekstejä tai muita sivuja
- Tarkistetaan jälkikäteen build-lokista ettei virheitä ja Playwrightilla sekä työpöytä- että mobiilinäkymä (reunaleikkaus, kelluva kortti, aaltomaski, ei horisontaalista scrollia)
