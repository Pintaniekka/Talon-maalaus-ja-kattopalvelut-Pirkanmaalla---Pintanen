# Toiminta-alueet-palkin kartan yksinkertaistaminen

## Päätetty suunta
Valitsen selkeän **karttaedistävän sivujaon**, joka vastaa pyyntöä pelkistää ja suurentaa karttaa.

## Muutokset
```text
[ Vasen 55 % ]                    [ Oikea 45 % ]
Toiminta-alueet                   (iso kartta ilman kehystä,
Pirkanmaa  ▼                       täyttää pystysuunnassa)
[ Tampere ] [ Nokia ] ...         "Paikallinen yrittäjä"
Kanta-Häme ▼                      (pieni brändi-chip)
Satakunta ▼
```

1. **Pelkistä kartan ympäriltä**
   - Poista ruudukkotausta, pehmeät valopallot ja paksu lasikehys.
   - Jätä vain puhdas brändisininen (#38b6ff) tausta ja itse karttakuva.

2. **Suurenna karttaa**
   - Karttasarakkeen leveys nousee noin 45 %:iin kortin leveydestä.
   - Karttakuva skaalataan täyttämään sarakkeen korkeus (max-w ~380–420 px).

3. **Vaihda teksti**
   - Vanha: "Paikallinen palvelu" + "Kaikki palvelut aina lähelläsi".
   - Uusi: yksinkertainen chip/otsake **"Paikallinen yrittäjä"** kartan ylä- tai alapuolella.

4. **Säilytä toiminnallisuus**
   - Kaikki 24 kaupunkilinkkiä pysyvät DOM:ssa myös suljetuissa paneeleissa.
   - `activeCity`-korostus ja `service`-proppi toimivat kuten ennen.
   - Karttakuvan `onError`-varakuva säilytetään.

## Toteutettava tiedosto
- `src/components/ToimintaAlueetBanner.tsx`

## Testaus
- Tarkistetaan, että kartta näkyy selvästi 1440 px ja 375 px leveyksillä.
- Varmistetaan, ettei horisontaalista scrollia synny mobiilissa.
