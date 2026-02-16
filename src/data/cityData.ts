export interface CityData {
  name: string;
  slug: string;
  pinnoitusIntro: string;
  puhdistusIntro: string;
  maalausIntro: string;
  localSection: string;
}

export const cities: CityData[] = [
  {
    name: "Tampere",
    slug: "tampere",
    pinnoitusIntro: "Tarjoamme ammattimaista tiilikaton pinnoitusta Tampereella ja lähialueilla. Pirkanmaan pääkaupungissa tiilikatot altistuvat vaihteleville sääolosuhteille, ja säännöllinen huolto on avainasemassa katon pitkäikäisyyden kannalta. Ota yhteyttä ja sovitaan ilmainen kuntotarkastus Tampereella.",
    puhdistusIntro: "Tiilikaton mekaaninen puhdistus Tampereella – pidä kattosi kunnossa Pirkanmaan vaihtelevissa sääoloissa. Sammalen ja jäkälän poisto pidentää katon käyttöikää merkittävästi. Palvelemme koko Tampereen aluetta nopealla aikataululla.",
    maalausIntro: "Ammattitaitoinen talon ulkomaalaus Tampereella. Pirkanmaan suurimmassa kaupungissa löytyy runsaasti sekä vanhoja puutaloja että uudempia omakotitaloja, joiden julkisivut kaipaavat säännöllistä huoltoa. Tarjoamme ilmaisen arvioinnin Tampereen alueella.",
    localSection: "Tampere sijaitsee kahden järven välissä, mikä tuo alueelle kosteutta ja lisää kattojen sekä julkisivujen rasitusta. Näsijärven ja Pyhäjärven läheisyys tarkoittaa, että ilmankosteus on ajoittain korkeaa, mikä edistää sammalen ja levän kasvua katoilla. Tampereen omakotitaloalueet, kuten Hervanta, Leinola ja Kämmenniemi, koostuvat pääosin 70–90-luvun pientaloista, joiden tiilikatot alkavat olla huollon tarpeessa. Talvisin lumi- ja jääkuorma rasittaa kattoja, ja keväisin sulamisvedet voivat aiheuttaa ongelmia, jos katon pinta on kulunut. Säännöllinen huolto on Tampereen olosuhteissa erityisen tärkeää rakenteiden suojaamiseksi."
  },
  {
    name: "Sastamala",
    slug: "sastamala",
    pinnoitusIntro: "Tiilikaton pinnoituspalvelut Sastamalassa ja ympäristössä. Sastamalan maaseutumaisessa ympäristössä katot altistuvat luonnon lähellä kosteudelle ja kasvustolle. Tulemme mielellämme tekemään ilmaisen kuntotarkastuksen kohteellesi.",
    puhdistusIntro: "Mekaaninen tiilikaton puhdistus Sastamalassa. Metsäisessä ja kosteassa ympäristössä katot sammaloituvat helposti, ja säännöllinen puhdistus on tärkeää. Palvelemme Sastamalan aluetta joustavasti.",
    maalausIntro: "Talon ulkomaalaus Sastamalassa ammattitaidolla. Sastamalan alueella on runsaasti perinteisiä puutaloja ja maatiloja, joiden julkisivut kaipaavat säännöllistä huoltoa. Arvioimme kohteesi kunnon maksutta.",
    localSection: "Sastamala on laaja, maaseutumainen kunta, jossa metsät ja pellot ympäröivät asuinalueita. Puusto ja kasvillisuus tuovat katoille lehtiä, neulasia ja kosteutta, mikä edistää sammalen kasvua. Rautaveden ja Kuloveden rannoilla sijaitsevat kiinteistöt altistuvat erityisesti kosteudelle. Alueella on paljon perinteisiä omakotitaloja ja vanhoja maatilarakennuksia, joiden tiilikatot ja puujulkisivut vaativat säännöllistä kunnossapitoa. Talvisin runsas lumikuorma rasittaa kattoja, ja avoimilla peltoalueilla tuuli tehostaa sään kuluttavaa vaikutusta."
  },
  {
    name: "Hämeenkyrö",
    slug: "hameenkyro",
    pinnoitusIntro: "Tiilikaton pinnoitusta Hämeenkyrössä ja naapurikunnissa. Hämeenkyrön metsäinen ja kosteahko ilmasto kiihdyttää katon kulumista, joten pinnoitus on tehokas tapa pidentää katon ikää. Ilmainen kuntotarkastus kuuluu palveluun.",
    puhdistusIntro: "Tiilikaton puhdistus Hämeenkyrössä – metsäisessä ympäristössä katot sammaloituvat nopeasti. Mekaaninen puhdistus ja käsittely suojaavat kattoasi vuosiksi eteenpäin. Ota yhteyttä ja sovitaan ajankohta.",
    maalausIntro: "Ulkomaalauspalvelut Hämeenkyrössä. Kunnan vanhat ja uudemmat omakotitalot tarvitsevat säännöllistä julkisivun huoltoa kestääkseen Pirkanmaan sääoloja. Teemme ilmaisen arvion kohteellesi.",
    localSection: "Hämeenkyrö on luonnonläheinen kunta, jossa metsät ja vesistöt ympäröivät asuinalueita. Kyrösjärven rannalla ilmankosteus on korkeaa, mikä voi nopeuttaa katon pinnan kulumista ja sammalen kasvua. Alueella on runsaasti 70–80-luvun omakotitaloja, joiden tiilikatot ovat saavuttaneet iän, jolloin huolto on ajankohtaista. Metsäisten tonttien katot keräävät neulasia ja lehtiä, jotka pidättävät kosteutta ja edistävät kasvustoa. Hämeenkyrön talvet tuovat merkittävän lumikuorman, joka rasittaa etenkin huoltamattomia kattoja."
  },
  {
    name: "Ylöjärvi",
    slug: "ylojarvi",
    pinnoitusIntro: "Tiilikaton pinnoituspalvelut Ylöjärvellä. Tampereen naapurikaupungissa on runsaasti omakotitaloalueita, joiden tiilikatot hyötyvät ammattimaisesta pinnoituksesta. Tarjoamme ilmaisen kuntotarkastuksen Ylöjärvellä.",
    puhdistusIntro: "Tiilikaton mekaaninen puhdistus Ylöjärvellä. Lähimetsien ja järvien ympäröimissä pientaloissa katot sammaloituvat helposti. Puhdistamme kattosi ammattitaidolla ja nopealla aikataululla.",
    maalausIntro: "Ammattitaitoinen talon maalaus Ylöjärvellä. Kaupungin kasvavilla omakotitaloalueilla julkisivujen huolto pitää rakennukset edustavina ja suojattuina. Ilmainen arviointi kuuluu palveluumme.",
    localSection: "Ylöjärvi on nopeasti kasvanut kaupunki Tampereen kupeessa, ja sen asuinalueet ovat usein metsäisiä ja luonnonläheisiä. Näsijärven pohjoisranta ja lukuisat pienemmät järvet tuovat alueelle kosteutta. Ylöjärven omakotitaloalueet, kuten Siivikkala, Metsäkylä ja Vuorentausta, koostuvat eri vuosikymmenten pientaloista, joiden katot ja julkisivut vaativat säännöllistä huoltoa. Talvisin lumi kertyy katoille etenkin suojaisilla metsätonteilla, missä tuuli ei puhalla lunta pois. Keväisin sulamisvedet ja syksyn sateet koettelevat pintoja, joiden suojaus on päässyt heikkenemään."
  },
  {
    name: "Nokia",
    slug: "nokia",
    pinnoitusIntro: "Tiilikaton pinnoitusta Nokialla ja lähikunnissa. Nokian vesistöjen läheisyys tuo kosteutta, joka rasittaa kattopintoja. Pinnoitus suojaa tiilikattoa tehokkaasti ja pidentää sen käyttöikää merkittävästi.",
    puhdistusIntro: "Mekaaninen tiilikaton puhdistus Nokialla. Vesistöjen ja metsien ympäröimässä kaupungissa katot sammaloituvat helposti. Puhdistamme kattosi ja käsittelemme sen kasvuston torjunta-aineella.",
    maalausIntro: "Talon ulkomaalaus Nokialla laadukkailla materiaaleilla. Nokian omakotitaloalueet hyötyvät säännöllisestä julkisivujen huollosta kostean ilmaston vuoksi. Teemme ilmaisen arvioinnin kohteellesi.",
    localSection: "Nokia sijaitsee Kokemäenjoen ja Pyhäjärven varrella, ja vesistöjen läheisyys nostaa ilmankosteutta merkittävästi. Kosteassa ympäristössä kattojen pinnat kuluvat nopeammin, ja sammalen sekä jäkälän kasvu on yleistä. Nokian asuinalueet, kuten Alhoniitty, Kankaantaka ja Linnavuori, koostuvat pääosin pientaloista, joiden tiilikatot ovat tyypillisesti 80–2000-luvuilta. Kaupungin metsäiset tontit keräävät neulasia ja lehtiä katoille, mikä pidättää kosteutta. Talven jäätymiset ja sulamiset rasittavat erityisesti pinnoittamattomia tiiliä."
  },
  {
    name: "Forssa",
    slug: "forssa",
    pinnoitusIntro: "Tiilikaton pinnoitusta Forssassa. Vaikka Forssa sijaitsee Pirkanmaan ulkopuolella, palvelemme aluetta säännöllisesti. Forssan seudun vaihtelevat sääolot tekevät katon pinnoituksesta järkevän investoinnin katon suojaamiseksi.",
    puhdistusIntro: "Tiilikaton puhdistus Forssassa – palvelemme myös Pirkanmaan lähialueilla. Forssan seudun katot altistuvat samoille säärasituksille kuin muuallakin Etelä-Hämeessä. Mekaaninen puhdistus ja käsittely pitävät kattosi kunnossa.",
    maalausIntro: "Ulkomaalauspalvelut Forssassa. Palvelemme Forssan seutua säännöllisesti, ja teemme ammattitaitoisen ulkomaalauksen laadukkailla materiaaleilla. Arviointi on aina maksuton.",
    localSection: "Forssa sijaitsee Etelä-Hämeessä peltoaukeiden ja metsien keskellä. Avoimet peltoalueet altistavat rakennukset tuulelle ja viistosateelle, mikä kuluttaa julkisivuja ja kattopintoja. Loimijoen varren kiinteistöt altistuvat kosteudelle, joka edistää kasvustoa katoilla. Forssan seudulla on paljon perinteisiä puutaloja, joiden julkisivut ja tiilikatot kaipaavat säännöllistä huoltoa. Talvisin lumikuorma on merkittävä, ja avoimilla alueilla tuuli pakkaa lunta epätasaisesti katoille. Forssan seudun rakennukset hyötyvät erityisesti ennaltaehkäisevästä huollosta."
  },
  {
    name: "Hämeenlinna",
    slug: "hameenlinna",
    pinnoitusIntro: "Tiilikaton pinnoituspalvelut Hämeenlinnassa sopimuksen mukaan. Hämeenlinnan alueella on runsaasti omakotitaloja, joiden tiilikatot hyötyvät ammattimaisesta pinnoituksesta. Ota yhteyttä, niin sovitaan kuntotarkastus.",
    puhdistusIntro: "Tiilikaton mekaaninen puhdistus Hämeenlinnassa. Vanajaveden rannoilla ja metsäisillä tonteilla katot sammaloituvat helposti. Puhdistamme ja käsittelemme kattosi ammattitaidolla.",
    maalausIntro: "Talon ulkomaalaus Hämeenlinnassa ammattitaidolla. Hämeenlinnan monipuolinen rakennuskanta tarjoaa maalareille töitä vanhoista puutaloista uusiin omakotitaloihin. Arvioimme kohteesi kunnon maksutta.",
    localSection: "Hämeenlinna sijaitsee Vanajaveden rannalla, ja järven läheisyys tuo kosteutta alueen rakennuksille. Kaupungin omakotitaloalueet ovat usein metsäisiä, mikä tarkoittaa lehtiä ja neulasia katoilla. Hämeenlinnan seudulla on laaja kirjo eri-ikäisiä omakotitaloja ja rivitaloja, joiden tiilikatot ja puujulkisivut vaativat säännöllistä kunnossapitoa. Etelä-Hämeen talvi on usein vaihteleva: lumen ja vesisateen vuorottelu rasittaa kattopintoja erityisesti, kun vesi jäätyy ja sulaa toistuvasti. Hämeenlinnan rakennukset hyötyvät ajoissa tehdystä huollosta ja pintojen suojauksesta."
  },
  {
    name: "Huittinen",
    slug: "huittinen",
    pinnoitusIntro: "Tiilikaton pinnoitusta Huittisissa sopimuksen mukaan. Satakunnan rajan tuntumassa sijaitseva Huittinen on osa toiminta-aluettamme. Pinnoitus suojaa kattoa tehokkaasti alueen kosteissa olosuhteissa.",
    puhdistusIntro: "Tiilikaton puhdistus Huittisissa. Loimijoen varren kosteassa ympäristössä katot sammaloituvat helposti. Mekaaninen puhdistus ja käsittely pitävät kattosi kunnossa pitkään.",
    maalausIntro: "Ulkomaalauspalvelut Huittisissa. Palvelemme Huittisten aluetta, ja laadukas maalaus suojaa taloasi Satakunnan vaihtelevissa sääoloissa. Teemme ilmaisen arvion kohteellesi.",
    localSection: "Huittinen sijaitsee Kokemäenjoen ja Loimijoen yhtymäkohdassa, mikä tekee alueesta kosteudelle alttiin. Jokivarsien läheisyys tarkoittaa, että ilmankosteus on ajoittain korkeaa ja kasvusto katoilla yleistä. Huittisten seudulle on tyypillistä maatalousympäristö, jossa pellot ja metsät vuorottelevat. Avoimilla alueilla tuuli ja viistosade rasittavat julkisivuja ja kattopintoja. Alueen omakotitalot ja maatilarakennukset ovat usein perinteisiä puutaloja, joiden huolto on tärkeää rakenteiden kestävyyden kannalta. Talvisin lumikuorma ja jäätymis-sulamissyklit koettelevat erityisesti huoltamattomia pintoja."
  },
];

export const getCityBySlug = (slug: string): CityData | undefined => {
  return cities.find(c => c.slug === slug);
};
