interface FAQItem {
  question: string;
  answer: string;
}

export const pinnoitusFAQ: FAQItem[] = [
  {
    question: 'Miksi tiilikatto kannattaa pinnoittaa pelkän pesun sijaan?',
    answer: 'Tiilen alkuperäisen tehdaspinnoitteen kuluessa huokoinen tiili altistuu kosteudelle ja sammaloitumiselle. Tämä johtaa Suomen sääolosuhteissa tuhoisaan pakkasrapautumiseen. Pinnoitus antaa katollesi uuden vettähylkivän suojan ja pidentää sen elinkaarta jopa 10–15 vuotta, mikä voi säästää kymmeniä tuhansia euroja verrattuna kokonaiseen kattoremonttiin.',
  },
  {
    question: 'Mitä tiilikaton pinnoitusprosessi sisältää?',
    answer: 'Palvelumme on huoleton "avaimet käteen" -malli. Prosessi sisältää maksuttoman arviokäynnin, pihan suojauksen, katon pesun, rikkinäisten tiilten vaihdon, kasvustontorjunta-aineen levityksen sekä kestävän kaksikerroksisen pinnoituksen. Lopuksi teemme huolellisen loppusiivouksen ja lopputarkastuksen.',
  },
  {
    question: 'Paljonko tiilikaton pinnoitus maksaa?',
    answer: 'Hinta riippuu katon koosta, jyrkkyydestä ja kunnosta. Esimerkiksi tyypillisen 200 m² omakotitalon loivan katon perushuolto ja pinnoitus maksaa meillä noin 2800–3 200 euroa. Työn osuus on urakassa merkittävä, ja tästä osuudesta voit hakea kotitalousvähennystä verotuksessasi. (Laskuri alla)',
  },
];

export const puhdistusFAQ: FAQItem[] = [
  {
    question: 'Miksi säännöllinen tiilikaton puhdistus on tärkeää?',
    answer: 'Sammal ja jäkälä keräävät tiilen pintaan ja rakoihin kosteutta. Kun tämä kosteus talvella jäätyy, tiili on vaarassa haljeta (pakkasrapautuminen). Säännöllinen ammattilaisen tekemä puhdistus ja kasvustontorjunta pysäyttää rapautumisen välittömästi, palauttaa talon siistin ilmeen ja siirtää kallista kattoremonttia eteenpäin.',
  },
  {
    question: 'Mitä tiilikaton puhdistusprosessi sisältää?',
    answer: 'Toteutamme puhdistuksen siistinä avaimet käteen -palveluna. Aloitamme suojaamalla pihan, minkä jälkeen katto kaavitaan mekaanisesti ammattikalustolla. Vaihdamme kaikki rikkinäiset tiilet uusiin. Lopuksi levitämme tehokkaan kasvustontorjunta-aineen, joka tuhoaa sammaleen juuret syvältä tiilestä, jotta katto pysyy puhtaana pitkään.',
  },
  {
    question: 'Paljonko tiilikaton puhdistus ja sammaleenpoisto maksaa?',
    answer: 'Kustannukset muodostuvat katon neliömäärästä, jyrkkyydestä ja kasvuston määrästä. Puhdistus on itsessään huomattavasti edullisempi toimenpide kuin koko katon pinnoitus, ja se on erinomainen sijoitus katon elinkaareen. Koska urakasta suurin osa on työn osuutta, saat hyödynnettyä siinä tuntuvan kotitalousvähennyksen. Tulemme mielellämme tekemään ilmaisen kuntoarvion ja tarkan tarjouksen paikan päälle! – Hinnat alkaen 800€',
  },
];

export const maalausFAQ: FAQItem[] = [
  {
    question: 'Milloin on oikea aika maalata talon ulkoverhous uudelleen?',
    answer: 'Tyypillinen huoltomaalausväli on 10–15 vuotta riippuen ympäristöstä ja säärasituksesta. Selkeitä merkkejä maalauksen tarpeelle ovat maalipinnan hilseily, värien haalistuminen sekä homepilkut julkisivussa.',
  },
  {
    question: 'Kuinka tärkeää pohjatöiden tekeminen on ennen maalausta?',
    answer: 'Ammattilaisten tekemät huolelliset pohjatyöt ovat kestävän maalausjäljen perusta. Maalausprosessiimme kuuluu olennaisena osana hilseilevän maalin kaavinta, huolellinen homepesu ja tarvittaessa lahovaurioituneiden puuosien vaihto. Paljaat puupinnat pohjamaalataan ennen varsinaista pintamaalausta.',
  },
  {
    question: 'Mitä maalia talooni tulisi käyttää?',
    answer: 'Oikean maalityypin valinta riippuu täysin kohteesta ja sen materiaaleista. Käytämme laadukkaita maaleja ja valitsemme kohteeseen aina parhaiten sopivan vaihtoehdon, kuten hengittävän vesiohenteisen maalin tai öljymaalin. Väärällä maalilla ei saa maalata!',
  },
  {
    question: 'Mikä on talon ulkomaalauksen hinta-arvio?',
    answer: 'Keskikokoisen omakotitalon maalaus, jossa on jonkin verran hilseilevää maalia, maksaa tyypillisesti 4 000 – 8 000 euroa. Koska maalausurakan kokonaiskustannuksista jopa 80 prosenttia voi olla työn osuutta, olet oikeutettu hakemaan merkittävää kotitalousvähennystä, mikä kutistaa urakan todellista hintaa huomattavasti.',
  },
];

export const generalFAQ: FAQItem[] = [
  {
    question: 'Millä alueilla Pintanen Oy toimii?',
    answer: 'Toimimme laajasti Pirkanmaan ja Kanta-Hämeen talousalueilla. Palvelemme asiakkaitamme muun muassa Tampereella, Sastamalassa, Hämeenkyrössä, Ylöjärvellä, Nokialla sekä Forssassa ja Hämeenlinnassa.',
  },
  {
    question: 'Saanko työstänne kotitalousvähennyksen?',
    answer: 'Kyllä. Erittelemme urakan laskulla selkeästi työn osuuden, josta voit hakea kotitalousvähennystä henkilökohtaisessa verotuksessasi.',
  },
  {
    question: 'Annetaanko työlle takuu?',
    answer: 'Kyllä, tarjoamme asiantuntevalle "avaimet käteen" -palvelullemme aina kirjallisen takuun ja teemme huolellisen nollavirhe-luovutuksen.',
  },
];

export const getMaalausCityFAQ = (cityName: string): FAQItem[] => [
  {
    question: 'Mistä tiedän, että taloni kaipaa huoltomaalausta?',
    answer: `Yleisin syy tilata ulkomaalaus on vanhan maalipinnan haalistuminen, liituuntuminen tai näkyvä hilseily. Myös pinttynyt lika ja homepilkut kertovat huollon tarpeesta. Puuverhoillut talot ${cityName} alueella kaipaavat tyypillisesti uutta maalipintaa 10–15 vuoden välein, jotta puurakenteet pysyvät suojassa säärasitukselta ja kosteudelta.`,
  },
  {
    question: 'Mitä pohjatöitä teette ennen varsinaista maalaamista?',
    answer: 'Kestävä lopputulos vaatii aina huolelliset pohjatyöt, ja siksi panostamme niihin erityisesti. Poistamme hilseilevän vanhan maalin huolellisesti ja teemme julkisivulle perusteellisen homepesun. Lisäksi pohjamaalaamme paljaat puupinnat ennen varsinaista pintamaalin levitystä.',
  },
  {
    question: `Mitä omakotitalon maalaus ${cityName} alueella suurin piirtein maksaa?`,
    answer: `Keskikokoisen puutalon huoltomaalaus asettuu useimmiten 5 000 ja 6 500 euron väliin, riippuen tarvittavien pohjatöiden määrästä. Koska suurin osa urakan hinnasta on työn osuutta, saat siitä tuntuvan kotitalousvähennyksen verotuksessasi. Tulemme mielellämme tekemään ilmaisen tarkan kuntoarvion paikan päälle!`,
  },
];

export const getPinnoitusCityFAQ = (cityName: string): FAQItem[] => [
  {
    question: 'Riittääkö tiilikaton pesu vai pitääkö katto myös pinnoittaa?',
    answer: 'Pelkkä korkeapainepesu puhdistaa kyllä katon, mutta se avaa samalla tiilen huokoset ja heikentää alkuperäistä suojaa. Siksi suosittelemme aina pesun jälkeistä oikeaa pinnoitusta. Uusi tehdasvärjätty pinnoite tukkii tiilen huokoset, jolloin vesi ei pääse jäätymään tiilen sisälle (pakkasrapautuminen).',
  },
  {
    question: 'Miten tiilikaton huolto ja pinnoittaminen käytännössä etenee?',
    answer: `Hoidamme kattotyöt ${cityName} ja lähialueilla täysin avaimet käteen -periaatteella. Aloitamme tarvittavilla suojaustöillä, minkä jälkeen katto pestään ja rikkinäiset tiilet vaihdetaan. Tämän jälkeen levitämme sammaleenpoistoaineen ja pinnoitamme katon kaksi kertaa. Lopuksi siivoamme jälkemme huolellisesti.`,
  },
  {
    question: 'Kuinka paljon tiilikaton pinnoitus maksaa ja saako työtä kotitalousvähennykseen?',
    answer: 'Kustannukset riippuvat aina katon koosta ja jyrkkyydestä. Esimerkiksi tavallisen noin 200 neliön loivan omakotitalon katon perushuolto ja pinnoitus on hinnaltaan noin 2 800–3200 euroa. Laskuun eritellään työn osuus, jolloin voit hyödyntää verotuksessasi merkittävän kotitalousvähennyksen. Tämä laskee urakan todellista hintaa huomattavasti.',
  },
];

export const getPuhdistusCityFAQ = (cityName: string): FAQItem[] => [
  {
    question: 'Milloin tiilikaton puhdistus ja sammaleenpoisto on ajankohtaista?',
    answer: `Katto kannattaa huoltaa heti, kun huomaat tiilten raoissa tai pinnoilla sammalta, jäkälää tai muuta kasvustoa. Sammal imee itseensä kosteutta, joka talvella jäätyessään rikkoo tiiliä. Teemme ${cityName} alueella säännöllisesti kattojen puhdistuksia, joilla pysäytetään rapautuminen ajoissa ja palautetaan kiinteistön siisti ilme.`,
  },
  {
    question: 'Miten puhdistatte katon rikkomatta tiiliä?',
    answer: 'Käytämme ammattitason kalustoa ilman painepesua, jotta tiilet eivät vaurioidu. Ensin kaavimme sammaleen irti katosta, jonka jälkeen katto harjataan. Tärkein vaihe on kuitenkin tehokkaan kasvustontorjunta-aineen levittäminen, joka estää kasvuston kasvamisen katolla. Näin katto pysyy puhtaana huomattavasti pidempään.',
  },
  {
    question: 'Kuinka kauan katon pesu ja puhdistus kestää?',
    answer: `Useimmat omakotitalojen katot ${cityName} seudulla saadaan puhdistettua ja käsiteltyä 1 työpäivässä. Huolehdimme aina siitä, että piha ja terassit jäävät siistiin kuntoon. Tyhjennämme myös aina rännit roskista työn päätteeksi.`,
  },
];
