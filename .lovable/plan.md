# Header uudistus + hero-hengitystila

## 1. Header — "Tumma kontrastipalkki" (oman harkinnan suunta)

Nykyongelma: vaalea turkoosi logo hukkuu valkoiselle pohjalle, ja header vaikuttaa geneeriseltä. Muutokset kohdistuvat vain headeriin (`src/components/Header.tsx`):

- **Logon korostus:** nykyinen logo pysyy, mutta se saa tummansinisen (`--primary`-pohjan) pyöristetyn taustalaatan, jolla vaalea turkoosi logomerkki erottuu selvästi. Logon viereen pieni teksti "Maalaus & pinnoitus · Pirkanmaa" (`text-xs uppercase tracking-widest text-muted-foreground`).
- **Päänavigaatio:** linkkien väli kasvaa (`gap-4` → `gap-8`), fontti semibold → bold, ja linkkien alle 2 px sininen alleviivaus, joka liukuu esiin hoverissa (spans-tekniikka). Aktiivinen sivu sama alleviivaus.
- **CTA:** punainen pyöreä "Pyydä tarjous" -nappi säilyy, siihen pehmeä punainen varjo (`shadow-lg shadow-roof-red/30`) ja pieni painalluspalaute.
- **Yläpalkki:** pysyy tummansinisena ja piiloutuu skrollissa kuten nyt; keltainen hover-korostus säilyy.
- **Päänavigaatiopalkki:** korkeus kasvaa `h-20` → `h-24`, alapuolelle 2 px brandinsininen reunaviiva, lasimainen blur säilyy.
- **Mobiili:** sama logokortti keskellä, WhatsApp vasemmalla ja valikko oikealla kuten nyt; mobiilivalikon tekstikoot pysyvät.

Rajoitteet: brandivärit (#38b6ff, #B71C1C, #ffec4e), tekstit, linkkien kohteet, dropdownit ja reitit ennallaan. Ei muutoksia heroon tässä kohdassa.

## 2. Etusivun hero — lisää tilaa

`src/components/Hero.tsx`, sisältö ennallaan:

- **Ingressin ja nappien väli:** `mb-14 md:mb-16` → `mb-20 md:mb-24` (tämä oli käyttäjän viimeisin erikoistoive)
- **Muut välit ilmavammiksi:** eyebrow `mb-10 md:mb-14`, H1 `leading-[1.15]` + `mb-12 md:mb-16`, napit → luottamusrivi `mb-16 md:mb-24`, sarakkeen padding `lg:p-28`, luottamusrivi `pt-12 gap-8`, luvut `md:text-3xl`

## Tekniset yksityiskohdat

- Header: alleviivaus toteutetaan `relative after:absolute after:...` -luokilla, ei uusia komponentteja
- Logokortti: taustaväri tummansininen `bg-primary`-tokenista, ei kovakoodattua hexää
- Kaikki värit semanttisina tokeneina (tumma tila ei riko)

## Varmistus

- `bun run build` → /tmp/observability/build-errors.log
- Playwright-kuvat: header ylhäällä + skrollattuna (desktop ja mobiili), hero desktop + mobiili
- Logon kontrasti tarkistetaan vision-tarkastelulla
