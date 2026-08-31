# Toiminta-alueet-palkin kartan yksinkertaistaminen

## Nykytila
`ToimintaAlueetBanner.tsx` -komponentissa kartta on pieni (max 240 px) ja sen ympärillä on paljon koristeelementtejä (ruudukkotausta, pehmeät valopallot, paksu kehys, iso otsake). Otsake "Paikallinen palvelu & Kaikki palvelut aina lähelläsi" vie tilaa ja on monimutkainen.

## Tavoite
- Pelkistää kartan ympärillä olevaa visuaalista melua.
- Suurentaa karttaa suhteessa teksteihin.
- Vaihtaa otsake muotoon **"Paikallinen yrittäjä"**.
- Säilyttää kaikki 24 kaupunkilinkkiä DOM:ssa ja toiminnallisuudet (`activeCity`, `service`).

## Esimerkkiasetteluja

### 1. Sivupalkki-kartta (suositus)
```text
[ Vasen 55 % ]          [ Oikea 45 % ]
Toiminta-alueet          (iso kartta täyttää
Pirkanmaa  ▼             90 % korkeudesta)
[ Tampere ] [ Nokia ]    "Paikallinen yrittäjä"
...                      (pieni chip)
Kanta-Häme ▼
...
```
- Kartta ilman kehystä ja koristeita, suurempi skaala.
- Label pienenä brändi-chipinä kartan alla.
- Toimii hyvin desktopilla; mobiilissa pinoutuu allekkain.

### 2. Päällekkäinen karttakortti
```text
+-----------------------------+
|        [ ISO KARTTA ]       |
|      "Paikallinen yrittäjä" |
+-----------------------------+
| Toiminta-alueet             |
| Pirkanmaa  ▼  [chips]       |
| Kanta-Häme ▼  [chips]       |
+-----------------------------+
```
- Kartta saa koko leveyden ylhäällä, joten se näkyy selvästi.
- Alueet ja kaupungit alle.
- Hyvä, jos halutaan korostaa kuvaa etusivulla.

### 3. Kompakti inline
```text
[Toiminta-alueet]   [pieni kartta]
"Paikallinen yrittäjä"
Pirkanmaa  ▼  [chips]
Kanta-Häme ▼  [chips]
```
- Kartta toimii visuaalisena merkkinä otsikon vieressä.
- Vähiten tilaa vievä, mutta kartta jää pienemmäksi.

## Tekniset toimenpiteet
1. Päivitetään `src/components/ToimintaAlueetBanner.tsx`.
2. Poistetaan ruudukkotausta, valopallot ja paksu kehys kartan ympäriltä.
3. Kasvatetaan kartan kokoa (esim. max-w 320–420 px tai flex-basis 45 %).
4. Korvataan otsake tekstillä "Paikallinen yrittäjä".
5. Säilytetään `mapFailed`-varakuva ja alt-teksti.
6. Varmistetaan, että kaikki kaupunkilinkit pysyvät DOM:ssa myös suljetuissa paneeleissa.
7. Testataan responsiivisuus 320 px – 1440 px.

## Seuraava askel
Valitse yllä olevista asetteluista suunta, niin toteutan sen samalla päivityksellä.
