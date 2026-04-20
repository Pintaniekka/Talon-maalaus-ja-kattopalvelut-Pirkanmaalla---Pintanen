

## Tavoite
Estää iOS Safarin automaattinen zoomaus, joka laukeaa kun käyttäjä klikkaa hintalaskurin (ChatPriceCalculator) tekstikenttiä mobiilissa.

## Ongelman syy
iOS Safari zoomaa automaattisesti sisään mihin tahansa input-kenttään, jonka fonttikoko on alle **16px**. Laskurin kentissä käytetään `text-sm` (= 14px), mikä laukaisee zoomauksen. Sivuston `<meta viewport>` ei sisällä `maximum-scale=1` -rajoitusta (mikä on hyvä saavutettavuuden kannalta – sitä ei kannata muuttaa).

Oikea ratkaisu on nostaa input-kenttien fonttikoko **16px:ään mobiilissa**, säilyttäen visuaalinen tyyli desktopilla.

## Muutokset

**Tiedosto:** `src/components/ChatPriceCalculator.tsx`

Vaihdetaan kaikkien input-kenttien luokka `text-sm` → `text-base md:text-sm`. Tämä pitää mobiilissa fontin 16px:nä (estää zoomauksen) ja palauttaa 14px desktopilla (nykyinen ulkoasu säilyy).

Päivitettävät kentät (4 kpl):
1. Numeroinput (rivi 543) – neliömetrit
2. Tekstinput (rivi 572) – kaupunki
3. Nimi-kenttä (rivi 592) – yhteystiedot
4. Puhelin-kenttä (rivi 600) – yhteystiedot

Esimerkki muutoksesta:
```diff
- className="w-full px-4 py-2.5 rounded-xl border ... text-sm focus:outline-none ..."
+ className="w-full px-4 py-2.5 rounded-xl border ... text-base md:text-sm focus:outline-none ..."
```

## Mitä EI muuteta
- `<meta viewport>` jätetään ennalleen (`maximum-scale=1` rikkoisi saavutettavuuden eikä ole tarpeen).
- Painikkeiden tai puhekuplien tyylit eivät muutu.
- `WallPriceCalculator.tsx` ja muut laskurit eivät tämän pyynnön piirissä – voidaan tehdä erikseen jos halutaan sama korjaus.

## Lopputulos
Mobiilissa tekstikenttiin klikkaaminen ei enää aiheuta zoomausta, ja chat-laskuri pysyy täysin näkyvissä koko keskustelun ajan. Desktop-ulkoasu pysyy identtisenä.

