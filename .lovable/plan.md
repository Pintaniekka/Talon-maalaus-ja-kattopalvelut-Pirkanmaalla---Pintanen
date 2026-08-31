# Kehityssuunnitelma: Pintanen.fi

## Tavoite

Vahvistaa brändiä ja luotettavuutta käyttämällä olemassa olevaa sisältöä (kuvia, tekstejä, videoita, arvosteluja) tehokkaammin. Ei chatbottia nyt. Hyödynnetään sekä nopeita pikavoittoja että isompia kokonaisuuksia.

## Nykytila (tiivistelmä)

- Sivusto: React + Vite + TypeScript + Tailwind, 24 kaupungin aluesivut, palvelusivut, hinnat, artikkelit, referenssigalleria, laskurit, yhteydenottolomake.
- Backend: Supabase/Lovable Cloud käytössä vain kuvien CDN:nä ja yhden Edge Functionin (sähköpostin lähetys Resendillä) kautta. Ei tietokantatauluja, ei authia, ei leadien tallennusta.
- Sisältö on käyttäjän mukaan valmiina lisäystä varten.

---

## Vaihe 1: Pikavoitot (1–2 päivityskierrosta)

### 1.1 Lisää 2–4 uutta referenssitapausta etusivulle ja referenssisivulle
- **Miksi:** Ennen/jälkeen -kuvat ovat vahvin luottamusta rakentava sisältö. Nykyinen galleria on hyvä, mutta yksittäiset projektitarinat jäävät vajaaksi.
- **Toteutus:** Luodaan uusi `ProjectCaseCard`-komponentti (tai laajennetaan `Referenssit.tsx`), jossa on: ennen/jälkeen -vertailu, asiakkaan nimi/kaupunki, tehty työ, kesto ja lyhyt sitaatti. Käytetään olemassa olevia `BeforeAfterSlider`- ja `ResponsiveSupabaseImage`-komponentteja.
- **Tiedostot:** `src/pages/Referenssit.tsx`, mahdollisesti uusi `src/components/ProjectCaseCard.tsx`.

### 1.2 Julkaise 2–4 uutta artikkelia valmiista sisällöstä
- **Miksi:** Artikkelit tuovat orgaanista liikennettä ja vahvistavat asiantuntija-asemaa. Nyt vain yksi artikkeli on julki.
- **Toteutus:** Luodaan uudet sivut `src/pages/Artikkeli*.tsx`, lisätään reitit `App.tsx`:ään ja linkit `src/pages/Artikkelit.tsx`-listaukseen. Käytetään samaa editorial-tyyliä kuin `ArtikkeliMilloinPinnoittaa.tsx`:ssä.
- **Tiedostot:** `src/pages/Artikkelit.tsx`, `src/App.tsx`, uudet artikkelisivut.

### 1.3 Vahvista "Miksi Pintanen" -osiota konkreettisemmilla takuu- ja prosessilupauksilla
- **Miksi:** Nykyinen osio on hyvä, mutta lupaukset kannattaa näyttää visuaalisina kortteina (esim. 2 v maalitakuu, 5 v kattotakuu, kotitalousvähennys, 24 h vastaus).
- **Toteutus:** Muokataan `src/components/MiksiPintanen.tsx` lisäämällä 4 ikonikorttia, jotka toistavat muualla sivustolla olevat luottamussignaalit.
- **Tiedostot:** `src/components/MiksiPintanen.tsx`.

### 1.4 Lisää videoita, jos valmista materiaalia on
- **Miksi:** Lyhyet projektivideot (esim. TikTok/Reels-tyyliset ennen/jälkeen -klipit) nostavat luotettavuutta ja sitoutumista.
- **Toteutus:** Lisätään videoelementti `Referenssit.tsx`-sivulle tai etusivulle. Käytetään `<video>`-tagia ilmeisellä fallback-kuvalla. Hosting: Supabase Storage (jos videoita sinne on ladattu) tai ulkoinen alusta.
- **Tiedostot:** `src/pages/Referenssit.tsx` tai `src/pages/Index.tsx`.

---

## Vaihe 2: Keskipitkän ajan kokonaisuudet (2–4 viikon työ)

### 2.1 Tietokantaan perustuva artikkeli- ja referenssihallinta
- **Miksi:** Nyt artikkelit ja referenssit ovat kovakoodattuja React-komponentteja. Julkaisutahti hidastuu, kun jokainen uusi sisältö vaatii koodimuutoksen ja uudelleenbuildauksen.
- **Toteutus:** Luodaan Supabase-taulut `posts` (artikkelit) ja `projects` (referenssit), joissa on slug, otsikko, sisältö, meta-kuvaus, kuvat, kategoria ja julkaisupäivä. Rakennetaan `Artikkelit.tsx` ja `Referenssit.tsx` hakemaan sisältö dynaamisesti. Lisätään RLS + GRANT (anon read, authenticated write).
- **Tiedostot:** `supabase/migrations/...`, `src/pages/Artikkelit.tsx`, `src/pages/Artikkeli*.tsx`, `src/pages/Referenssit.tsx`, `src/lib/storage.ts` (kuvien käsittely).

### 2.2 Leadien tallennus tietokantaan (CRM-light)
- **Miksi:** Nyt yhteydenotot menevät vain sähköpostiin. Jos viesti hukkuu tai asiakas soittaa myöhemmin, ei ole historiaa.
- **Toteutus:** Luodaan taulu `leads`, johon tallennetaan lomakkeiden ja laskureiden kautta tulleet yhteydenotot. Edge Function `send-contact-email` päivitetään tallentamaan lead ennen lähetystä. Lisätään yksinkertainen admin-näkymä (suojattu RLS:llä service_role / tulevaisuudessa auth) tarkastelemaan ja merkitsemään käsiteltyjä.
- **Tiedostot:** `supabase/migrations/...`, `supabase/functions/send-contact-email/index.ts`, mahdollisesti uusi `src/pages/AdminLeads.tsx`.

### 2.3 Spämisuojaus yhteydenottolomakkeisiin
- **Miksi:** Edge Function on avoin CORS-ei-rajoituksin, eikä lomakkeissa ole CAPTCHAa tai honeypotia. Tämä on riski, kun liidien määrä kasvaa.
- **Toteutus:** Lisätään honeypot-kenttä lomakkeisiin ja yksinkertainen rate-limiting Edge Functioniin (esim. saman IP:n väliin vähintään 10 s). Harkitaan myöhemmin Cloudflare Turnstilea, jos tarvetta.
- **Tiedostot:** `src/components/Contact.tsx`, `src/components/ChatLeadForm.tsx`, `src/lib/contactForm.ts`, `supabase/functions/send-contact-email/index.ts`.

### 2.4 Projektikohtaiset tarinat (Case Study -sivut)
- **Miksi:** Yksittäiset projektitarinat konvertoivat paremmin kuin pelkkä galleria. Ne myös toimivat mainosmateriaalina ja some-sisältönä.
- **Toteutus:** Laajennetaan `projects`-taulua (vaihe 2.1) niin, että jokaisella referenssillä on oma alisivunsa `/referenssit/[slug]`. Sivulla on kuvagalleria, asiakkaan sitaatti, tehdyt työt, kesto ja lopputulos.
- **Tiedostot:** `src/pages/ReferenssiDetail.tsx`, `src/App.tsx`.

---

## Vaihe 3: Myöhemmät kokonaisuudet (ei kiireellisiä)

### 3.1 Asiakasportaali / työn seuranta
- Mahdollisuus kirjautua sisään ja nähdä oman kohteen status, aikataulu ja laskutiedot. Vaatii authin ja tauluja `customers` + `projects`.

### 3.2 Online-ajanvaraus arviokäynnille
- Kalenteriintegraatio (esim. Cal.com tai Google Calendar) suoraan sivustolle, jotta asiakas voi varata arviokäynnin ilman soittoa.

### 3.3 Sisällönhallintapaneeli (CMS)
- Yksinkertainen admin-käyttöliittymä artikkelien, referenssien ja leadien hallintaan. Vaatii autentikaation ja roolit.

### 3.4 Monikielisyys (ruotsi/englanti)
- Jos asiakaskunta laajenee, i18n-tuki (react-i18next) ja käännökset avaavat markkinoita.

---

## Suositeltu aloitus

Aloitetaan **vaiheen 1.1 + 1.2 + 1.3** samalla kierroksella: ne ovat nopeita, käyttävät valmista sisältöäsi ja vahvistavat brändiä välittömästi. Sen jälkeen siirrytään vaiheeseen 2.1 (tietokantapohjainen sisällönhallinta), jotta julkaisutahti nopeutuu pysyvästi.

## Mitä tarvitsen sinulta

- Haluatko aloittaa heti vaiheen 1.1–1.3 kanssa?
- Onko sinulla valmiina uusia ennen/jälkeen -kuvia, artikkelitekstejä tai videoita, jotka haluat julkaista ensin?
- Haluatko, että teen vaiheessa 2.1 myös referenssien ja artikkelien tietokantamallit, vai keskitytäänkö ensin pelkästään artikkeleihin?
