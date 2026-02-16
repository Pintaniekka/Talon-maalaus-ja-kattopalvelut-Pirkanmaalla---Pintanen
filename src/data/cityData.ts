export interface CityData {
  name: string;
  slug: string;
  alueIntro: string;
  pinnoitusIntro?: string;
  puhdistusIntro?: string;
  maalausIntro?: string;
  localSection?: string;
}

/** Cities with full service subpages (pinnoitus/puhdistus/maalaus per city) */
export const cities: CityData[] = [
  {
    name: "Tampere",
    slug: "tampere",
    alueIntro: "Pintanen toimii aktiivisesti Tampereen alueella ja toteuttaa tiilikaton pinnoituksia, katon puhdistuksia sekä talon maalauksia alueen omakotitaloihin ja kiinteistöihin.\n\nTeemme jokaiseen kohteeseen ilmaisen arviointikäynnin paikan päällä, jossa kartoitamme työn laajuuden ja tarpeet. Yrittäjät tekevät työn itse alusta loppuun – emme välitä urakoita eteenpäin. Jokainen työmaa viimeistellään huolellisesti ja jälki siivotaan ennen luovutusta.\n\nTampereen seudulla on runsaasti tiilikattoisia omakotitaloja, joissa säännöllinen huolto pidentää katon käyttöikää merkittävästi. Myös julkisivujen huoltomaalaus on ajankohtaista monessa talossa, kun edellisestä maalauksesta on kulunut vuosia.\n\nOta yhteyttä ja sovitaan maksuton arviokäynti Tampereen alueelle.",
    pinnoitusIntro: "Tarjoamme ammattimaista tiilikaton pinnoitusta Tampereella ja lähialueilla. Pirkanmaan pääkaupungissa tiilikatot altistuvat vaihteleville sääolosuhteille, ja säännöllinen huolto on avainasemassa katon pitkäikäisyyden kannalta. Ota yhteyttä ja sovitaan ilmainen kuntotarkastus Tampereella.",
    puhdistusIntro: "Tiilikaton mekaaninen puhdistus Tampereella – pidä kattosi kunnossa Pirkanmaan vaihtelevissa sääoloissa. Sammalen ja jäkälän poisto pidentää katon käyttöikää merkittävästi. Palvelemme koko Tampereen aluetta nopealla aikataululla.",
    maalausIntro: "Ammattitaitoinen talon ulkomaalaus Tampereella. Pirkanmaan suurimmassa kaupungissa löytyy runsaasti sekä vanhoja puutaloja että uudempia omakotitaloja, joiden julkisivut kaipaavat säännöllistä huoltoa. Tarjoamme ilmaisen arvioinnin Tampereen alueella.",
    localSection: "Tampere sijaitsee kahden järven välissä, mikä tuo alueelle kosteutta ja lisää kattojen sekä julkisivujen rasitusta. Näsijärven ja Pyhäjärven läheisyys tarkoittaa, että ilmankosteus on ajoittain korkeaa, mikä edistää sammalen ja levän kasvua katoilla. Tampereen omakotitaloalueet, kuten Hervanta, Leinola ja Kämmenniemi, koostuvat pääosin 70–90-luvun pientaloista, joiden tiilikatot alkavat olla huollon tarpeessa. Talvisin lumi- ja jääkuorma rasittaa kattoja, ja keväisin sulamisvedet voivat aiheuttaa ongelmia, jos katon pinta on kulunut. Säännöllinen huolto on Tampereen olosuhteissa erityisen tärkeää rakenteiden suojaamiseksi."
  },
  {
    name: "Sastamala",
    slug: "sastamala",
    alueIntro: "Pintanen toimii aktiivisesti Sastamalan alueella ja toteuttaa tiilikaton pinnoituksia, katon puhdistuksia sekä talon maalauksia alueen omakotitaloihin ja kiinteistöihin.\n\nKäymme aina ensin arvioimassa kohteen paikan päällä maksutta. Yrittäjät tekevät työn itse – näin varmistamme tasalaatuisen lopputuloksen jokaisessa kohteessa. Työmaat viimeistellään siististi ja sovitussa aikataulussa.\n\nSastamalan alueella on paljon perinteisiä puutaloja ja maatilakiinteistöjä, joissa oikea-aikainen huoltomaalaus suojaa rakenteita Suomen vaihtelevissa sääolosuhteissa. Myös tiilikattojen kunnossapito on monessa kohteessa ajankohtaista.\n\nOta yhteyttä ja sovitaan maksuton arviokäynti Sastamalan alueelle.",
    pinnoitusIntro: "Tiilikaton pinnoituspalvelut Sastamalassa ja ympäristössä. Sastamalan maaseutumaisessa ympäristössä katot altistuvat luonnon lähellä kosteudelle ja kasvustolle. Tulemme mielellämme tekemään ilmaisen kuntotarkastuksen kohteellesi.",
    puhdistusIntro: "Mekaaninen tiilikaton puhdistus Sastamalassa. Metsäisessä ja kosteassa ympäristössä katot sammaloituvat helposti, ja säännöllinen puhdistus on tärkeää. Palvelemme Sastamalan aluetta joustavasti.",
    maalausIntro: "Talon ulkomaalaus Sastamalassa ammattitaidolla. Sastamalan alueella on runsaasti perinteisiä puutaloja ja maatiloja, joiden julkisivut kaipaavat säännöllistä huoltoa. Arvioimme kohteesi kunnon maksutta.",
    localSection: "Sastamala on laaja, maaseutumainen kunta, jossa metsät ja pellot ympäröivät asuinalueita. Puusto ja kasvillisuus tuovat katoille lehtiä, neulasia ja kosteutta, mikä edistää sammalen kasvua. Rautaveden ja Kuloveden rannoilla sijaitsevat kiinteistöt altistuvat erityisesti kosteudelle. Alueella on paljon perinteisiä omakotitaloja ja vanhoja maatilarakennuksia, joiden tiilikatot ja puujulkisivut vaativat säännöllistä kunnossapitoa. Talvisin runsas lumikuorma rasittaa kattoja, ja avoimilla peltoalueilla tuuli tehostaa sään kuluttavaa vaikutusta."
  },
  {
    name: "Hämeenkyrö",
    slug: "hameenkyro",
    alueIntro: "Pintanen toimii aktiivisesti Hämeenkyrön alueella ja toteuttaa tiilikaton pinnoituksia, katon puhdistuksia sekä talon maalauksia alueen omakotitaloihin ja kiinteistöihin.\n\nAloitamme aina ilmaisella arviokäynnillä, jossa selvitämme kohteen kunnon ja työn laajuuden. Yrittäjät ovat itse paikalla tekemässä työn alusta loppuun, ja työmaa viimeistellään huolellisesti ennen luovutusta.\n\nHämeenkyrössä on runsaasti omakotitaloja, joiden tiilikatot ja puujulkisivut hyötyvät säännöllisestä huollosta. Luonnonläheisillä tonteilla katot sammaloituvat helposti, ja julkisivut altistuvat kosteudelle.\n\nOta yhteyttä ja sovitaan maksuton arviokäynti Hämeenkyrön alueelle.",
    pinnoitusIntro: "Tiilikaton pinnoitusta Hämeenkyrössä ja naapurikunnissa. Hämeenkyrön metsäinen ja kosteahko ilmasto kiihdyttää katon kulumista, joten pinnoitus on tehokas tapa pidentää katon ikää. Ilmainen kuntotarkastus kuuluu palveluun.",
    puhdistusIntro: "Tiilikaton puhdistus Hämeenkyrössä – metsäisessä ympäristössä katot sammaloituvat nopeasti. Mekaaninen puhdistus ja käsittely suojaavat kattoasi vuosiksi eteenpäin. Ota yhteyttä ja sovitaan ajankohta.",
    maalausIntro: "Ulkomaalauspalvelut Hämeenkyrössä. Kunnan vanhat ja uudemmat omakotitalot tarvitsevat säännöllistä julkisivun huoltoa kestääkseen Pirkanmaan sääoloja. Teemme ilmaisen arvion kohteellesi.",
    localSection: "Hämeenkyrö on luonnonläheinen kunta, jossa metsät ja vesistöt ympäröivät asuinalueita. Kyrösjärven rannalla ilmankosteus on korkeaa, mikä voi nopeuttaa katon pinnan kulumista ja sammalen kasvua. Alueella on runsaasti 70–80-luvun omakotitaloja, joiden tiilikatot ovat saavuttaneet iän, jolloin huolto on ajankohtaista. Metsäisten tonttien katot keräävät neulasia ja lehtiä, jotka pidättävät kosteutta ja edistävät kasvustoa. Hämeenkyrön talvet tuovat merkittävän lumikuorman, joka rasittaa etenkin huoltamattomia kattoja."
  },
  {
    name: "Ylöjärvi",
    slug: "ylojarvi",
    alueIntro: "Pintanen toimii aktiivisesti Ylöjärven alueella ja toteuttaa tiilikaton pinnoituksia, katon puhdistuksia sekä talon maalauksia alueen omakotitaloihin ja kiinteistöihin.\n\nJokaiseen kohteeseen tehdään ensin maksuton arviokäynti paikan päällä. Yrittäjät tekevät työn itse, joten laatu pysyy tasaisena kohteesta toiseen. Viimeistely ja siisteys kuuluvat aina työhön.\n\nYlöjärvellä on paljon eri-ikäisiä omakotitaloja, joiden katto- ja julkisivupinnat kaipaavat huoltoa vuosien kuluessa. Metsäisillä tonteilla katot keräävät helposti sammalta ja kasvustoa.\n\nOta yhteyttä ja sovitaan maksuton arviokäynti Ylöjärven alueelle.",
    pinnoitusIntro: "Tiilikaton pinnoituspalvelut Ylöjärvellä. Tampereen naapurikaupungissa on runsaasti omakotitaloalueita, joiden tiilikatot hyötyvät ammattimaisesta pinnoituksesta. Tarjoamme ilmaisen kuntotarkastuksen Ylöjärvellä.",
    puhdistusIntro: "Tiilikaton mekaaninen puhdistus Ylöjärvellä. Lähimetsien ja järvien ympäröimissä pientaloissa katot sammaloituvat helposti. Puhdistamme kattosi ammattitaidolla ja nopealla aikataululla.",
    maalausIntro: "Ammattitaitoinen talon maalaus Ylöjärvellä. Kaupungin kasvavilla omakotitaloalueilla julkisivujen huolto pitää rakennukset edustavina ja suojattuina. Ilmainen arviointi kuuluu palveluumme.",
    localSection: "Ylöjärvi on nopeasti kasvanut kaupunki Tampereen kupeessa, ja sen asuinalueet ovat usein metsäisiä ja luonnonläheisiä. Näsijärven pohjoisranta ja lukuisat pienemmät järvet tuovat alueelle kosteutta. Ylöjärven omakotitaloalueet, kuten Siivikkala, Metsäkylä ja Vuorentausta, koostuvat eri vuosikymmenten pientaloista, joiden katot ja julkisivut vaativat säännöllistä huoltoa. Talvisin lumi kertyy katoille etenkin suojaisilla metsätonteilla, missä tuuli ei puhalla lunta pois. Keväisin sulamisvedet ja syksyn sateet koettelevat pintoja, joiden suojaus on päässyt heikkenemään."
  },
  {
    name: "Nokia",
    slug: "nokia",
    alueIntro: "Pintanen toimii aktiivisesti Nokian alueella ja toteuttaa tiilikaton pinnoituksia, katon puhdistuksia sekä talon maalauksia alueen omakotitaloihin ja kiinteistöihin.\n\nTeemme aina ilmaisen arviointikäynnin ennen työn aloittamista. Yrittäjät tekevät työn itse alusta loppuun, ja työmaa jätetään siistiksi. Pidämme kiinni sovituista aikatauluista.\n\nNokialla vesistöjen läheisyys tuo kosteutta, joka rasittaa sekä kattopintoja että julkisivuja. Säännöllinen huolto on hyvä tapa pitää kiinteistö kunnossa ja välttää suuremmat korjaustarpeet.\n\nOta yhteyttä ja sovitaan maksuton arviokäynti Nokian alueelle.",
    pinnoitusIntro: "Tiilikaton pinnoitusta Nokialla ja lähikunnissa. Nokian vesistöjen läheisyys tuo kosteutta, joka rasittaa kattopintoja. Pinnoitus suojaa tiilikattoa tehokkaasti ja pidentää sen käyttöikää merkittävästi.",
    puhdistusIntro: "Mekaaninen tiilikaton puhdistus Nokialla. Vesistöjen ja metsien ympäröimässä kaupungissa katot sammaloituvat helposti. Puhdistamme kattosi ja käsittelemme sen kasvuston torjunta-aineella.",
    maalausIntro: "Talon ulkomaalaus Nokialla laadukkailla materiaaleilla. Nokian omakotitaloalueet hyötyvät säännöllisestä julkisivujen huollosta kostean ilmaston vuoksi. Teemme ilmaisen arvioinnin kohteellesi.",
    localSection: "Nokia sijaitsee Kokemäenjoen ja Pyhäjärven varrella, ja vesistöjen läheisyys nostaa ilmankosteutta merkittävästi. Kosteassa ympäristössä kattojen pinnat kuluvat nopeammin, ja sammalen sekä jäkälän kasvu on yleistä. Nokian asuinalueet, kuten Alhoniitty, Kankaantaka ja Linnavuori, koostuvat pääosin pientaloista, joiden tiilikatot ovat tyypillisesti 80–2000-luvuilta. Kaupungin metsäiset tontit keräävät neulasia ja lehtiä katoille, mikä pidättää kosteutta. Talven jäätymiset ja sulamiset rasittavat erityisesti pinnoittamattomia tiiliä."
  },
  {
    name: "Forssa",
    slug: "forssa",
    alueIntro: "Pintanen palvelee myös Forssan seutua ja toteuttaa tiilikaton pinnoituksia, katon puhdistuksia sekä talon maalauksia alueen omakotitaloihin ja kiinteistöihin.\n\nKäymme arvioimassa kohteen aina paikan päällä maksutta ennen työn aloittamista. Yrittäjät tekevät työn itse, ja jokainen työmaa viimeistellään huolellisesti. Sovitusta aikataulusta pidetään kiinni.\n\nForssan seudulla on paljon perinteisiä omakotitaloja, joiden puujulkisivut ja tiilikatot hyötyvät säännöllisestä kunnossapidosta. Avoimilla alueilla sää rasittaa pintoja erityisesti.\n\nOta yhteyttä ja sovitaan maksuton arviokäynti Forssan alueelle.",
    pinnoitusIntro: "Tiilikaton pinnoitusta Forssassa. Vaikka Forssa sijaitsee Pirkanmaan ulkopuolella, palvelemme aluetta säännöllisesti. Forssan seudun vaihtelevat sääolot tekevät katon pinnoituksesta järkevän investoinnin katon suojaamiseksi.",
    puhdistusIntro: "Tiilikaton puhdistus Forssassa – palvelemme myös Pirkanmaan lähialueilla. Forssan seudun katot altistuvat samoille säärasituksille kuin muuallakin Etelä-Hämeessä. Mekaaninen puhdistus ja käsittely pitävät kattosi kunnossa.",
    maalausIntro: "Ulkomaalauspalvelut Forssassa. Palvelemme Forssan seutua säännöllisesti, ja teemme ammattitaitoisen ulkomaalauksen laadukkailla materiaaleilla. Arviointi on aina maksuton.",
    localSection: "Forssa sijaitsee Etelä-Hämeessä peltoaukeiden ja metsien keskellä. Avoimet peltoalueet altistavat rakennukset tuulelle ja viistosateelle, mikä kuluttaa julkisivuja ja kattopintoja. Loimijoen varren kiinteistöt altistuvat kosteudelle, joka edistää kasvustoa katoilla. Forssan seudulla on paljon perinteisiä puutaloja, joiden julkisivut ja tiilikatot kaipaavat säännöllistä huoltoa. Talvisin lumikuorma on merkittävä, ja avoimilla alueilla tuuli pakkaa lunta epätasaisesti katoille. Forssan seudun rakennukset hyötyvät erityisesti ennaltaehkäisevästä huollosta."
  },
  {
    name: "Hämeenlinna",
    slug: "hameenlinna",
    alueIntro: "Pintanen palvelee myös Hämeenlinnan seutua ja toteuttaa tiilikaton pinnoituksia, katon puhdistuksia sekä talon maalauksia alueen omakotitaloihin ja kiinteistöihin.\n\nTeemme jokaiseen kohteeseen maksuttoman arviokäynnin paikan päällä. Yrittäjät ovat itse työmaalla alusta loppuun, ja työ viimeistellään huolellisesti ennen luovutusta.\n\nHämeenlinnan seudulla on monipuolinen rakennuskanta vanhoista puutaloista uudempiin omakotitaloihin. Tiilikattojen ja julkisivujen säännöllinen huolto pitää kiinteistön kunnossa ja ehkäisee suurempia korjaustarpeita.\n\nOta yhteyttä ja sovitaan maksuton arviokäynti Hämeenlinnan alueelle.",
    pinnoitusIntro: "Tiilikaton pinnoituspalvelut Hämeenlinnassa sopimuksen mukaan. Hämeenlinnan alueella on runsaasti omakotitaloja, joiden tiilikatot hyötyvät ammattimaisesta pinnoituksesta. Ota yhteyttä, niin sovitaan kuntotarkastus.",
    puhdistusIntro: "Tiilikaton mekaaninen puhdistus Hämeenlinnassa. Vanajaveden rannoilla ja metsäisillä tonteilla katot sammaloituvat helposti. Puhdistamme ja käsittelemme kattosi ammattitaidolla.",
    maalausIntro: "Talon ulkomaalaus Hämeenlinnassa ammattitaidolla. Hämeenlinnan monipuolinen rakennuskanta tarjoaa maalareille töitä vanhoista puutaloista uusiin omakotitaloihin. Arvioimme kohteesi kunnon maksutta.",
    localSection: "Hämeenlinna sijaitsee Vanajaveden rannalla, ja järven läheisyys tuo kosteutta alueen rakennuksille. Kaupungin omakotitaloalueet ovat usein metsäisiä, mikä tarkoittaa lehtiä ja neulasia katoilla. Hämeenlinnan seudulla on laaja kirjo eri-ikäisiä omakotitaloja ja rivitaloja, joiden tiilikatot ja puujulkisivut vaativat säännöllistä kunnossapitoa. Etelä-Hämeen talvi on usein vaihteleva: lumen ja vesisateen vuorottelu rasittaa kattopintoja erityisesti, kun vesi jäätyy ja sulaa toistuvasti. Hämeenlinnan rakennukset hyötyvät ajoissa tehdystä huollosta ja pintojen suojauksesta."
  },
  {
    name: "Huittinen",
    slug: "huittinen",
    alueIntro: "Pintanen palvelee myös Huittisten seutua ja toteuttaa tiilikaton pinnoituksia, katon puhdistuksia sekä talon maalauksia alueen omakotitaloihin ja kiinteistöihin.\n\nArvioimme jokaisen kohteen paikan päällä maksutta ennen työn aloittamista. Yrittäjät tekevät työn itse ja viimeistelevät työmaan huolellisesti. Aikatauluista pidetään kiinni.\n\nHuittisten seudulla on paljon perinteisiä pientaloja ja maatilakiinteistöjä, joiden katot ja julkisivut kaipaavat huoltoa vuosien saatossa. Jokivarsien kosteassa ympäristössä säännöllinen kunnossapito on erityisen tärkeää.\n\nOta yhteyttä ja sovitaan maksuton arviokäynti Huittisten alueelle.",
    pinnoitusIntro: "Tiilikaton pinnoitusta Huittisissa sopimuksen mukaan. Satakunnan rajan tuntumassa sijaitseva Huittinen on osa toiminta-aluettamme. Pinnoitus suojaa kattoa tehokkaasti alueen kosteissa olosuhteissa.",
    puhdistusIntro: "Tiilikaton puhdistus Huittisissa. Loimijoen varren kosteassa ympäristössä katot sammaloituvat helposti. Mekaaninen puhdistus ja käsittely pitävät kattosi kunnossa pitkään.",
    maalausIntro: "Ulkomaalauspalvelut Huittisissa. Palvelemme Huittisten aluetta, ja laadukas maalaus suojaa taloasi Satakunnan vaihtelevissa sääoloissa. Teemme ilmaisen arvion kohteellesi.",
    localSection: "Huittinen sijaitsee Kokemäenjoen ja Loimijoen yhtymäkohdassa, mikä tekee alueesta kosteudelle alttiin. Jokivarsien läheisyys tarkoittaa, että ilmankosteus on ajoittain korkeaa ja kasvusto katoilla yleistä. Huittisten seudulle on tyypillistä maatalousympäristö, jossa pellot ja metsät vuorottelevat. Avoimilla alueilla tuuli ja viistosade rasittavat julkisivuja ja kattopintoja. Alueen omakotitalot ja maatilarakennukset ovat usein perinteisiä puutaloja, joiden huolto on tärkeää rakenteiden kestävyyden kannalta. Talvisin lumikuorma ja jäätymis-sulamissyklit koettelevat erityisesti huoltamattomia pintoja."
  },
];

/** Cities with area page but NO dedicated service subpages */
export const simpleCities: CityData[] = [
  {
    name: "Akaa",
    slug: "akaa",
    alueIntro: "Pintanen toimii aktiivisesti Akaan alueella ja toteuttaa tiilikaton pinnoituksia, katon puhdistuksia sekä talon maalauksia alueen omakotitaloihin ja kiinteistöihin. Akaa sijaitsee noin tunnin ajomatkan päässä Tampereelta ja kuuluu luontevasti palvelualueeseemme.\n\nTeemme jokaiseen kohteeseen ilmaisen arviointikäynnin paikan päällä, jossa selvitämme työn laajuuden ja tarpeet. Yrittäjät tekevät työn itse alusta loppuun – emme käytä aliurakoitsijoita emmekä välitä urakoita eteenpäin. Työmaat viimeistellään huolellisesti ja jälki siivotaan ennen luovutusta.\n\nAkaan alueella on runsaasti omakotitaloja, joiden tiilikatot ja puujulkisivut hyötyvät säännöllisestä huollosta. Oikea-aikainen kunnossapito ehkäisee suurempia korjaustarpeita ja pidentää rakenteiden käyttöikää. Pinnoituksille annamme viiden vuoden takuun ja talon maalauksille kahden vuoden takuun.\n\nOta yhteyttä ja sovitaan maksuton arviokäynti Akaan alueelle.",
  },
  {
    name: "Ikaalinen",
    slug: "ikaalinen",
    alueIntro: "Pintanen palvelee Ikaalisten aluetta ja toteuttaa tiilikaton pinnoituksia, katon puhdistuksia sekä talon maalauksia alueen kiinteistöihin. Ikaalinen sijaitsee noin tunnin matkan päässä Tampereelta ja kuuluu vakituiseen toiminta-alueeseemme.\n\nKäymme aina arvioimassa kohteen paikan päällä maksutta ennen työn aloittamista. Yrittäjät ovat itse työmaalla tekemässä työn alusta loppuun, joten laatu pysyy tasaisena. Työmaat viimeistellään siististi ja aikatauluista pidetään kiinni.\n\nIkaalisten järviympäristössä ilmankosteus on ajoittain korkeaa, mikä edistää kasvuston muodostumista katoille. Säännöllinen katon huolto ja julkisivujen maalaus pitävät kiinteistön kunnossa pitkään. Pinnoituksille annamme viiden vuoden takuun ja maalauksille kahden vuoden takuun.\n\nOta yhteyttä ja sovitaan maksuton arviokäynti Ikaalisten alueelle.",
  },
  {
    name: "Juupajoki",
    slug: "juupajoki",
    alueIntro: "Pintanen palvelee myös Juupajoen aluetta ja toteuttaa tiilikaton pinnoituksia, katon puhdistuksia sekä talon maalauksia alueen omakotitaloihin ja kiinteistöihin. Toimimme noin tunnin ajomatkan säteellä Tampereelta.\n\nJokaiseen kohteeseen tehdään ilmainen arviointikäynti paikan päällä. Yrittäjät tekevät työn itse – emme välitä urakoita eteenpäin. Työmaat viimeistellään huolellisesti ja sovitusta aikataulusta pidetään kiinni.\n\nJuupajoen metsäisessä ja luonnonläheisessä ympäristössä katot keräävät helposti neulasia ja kasvustoa. Puujulkisivut altistuvat kosteudelle erityisesti varjoisilla tonteilla. Säännöllinen huolto pidentää rakenteiden ikää merkittävästi. Pinnoituksille annamme viiden vuoden takuun ja maalauksille kahden vuoden takuun.\n\nOta yhteyttä ja sovitaan maksuton arviokäynti Juupajoen alueelle.",
  },
  {
    name: "Kangasala",
    slug: "kangasala",
    alueIntro: "Pintanen toimii aktiivisesti Kangasalan alueella ja toteuttaa tiilikaton pinnoituksia, katon puhdistuksia sekä talon maalauksia alueen omakotitaloihin ja kiinteistöihin. Kangasala sijaitsee aivan Tampereen vieressä ja kuuluu ydintoiminta-alueeseemme.\n\nKäymme aina ensin arvioimassa kohteen paikan päällä maksutta. Yrittäjät tekevät työn itse alusta loppuun – emme käytä aliurakoitsijoita. Työmaat viimeistellään huolellisesti ja jälki siivotaan ennen luovutusta.\n\nKangasalan monipuolisilla asuinalueilla on runsaasti eri-ikäisiä omakotitaloja, joiden katto- ja julkisivupinnat kaipaavat säännöllistä huoltoa. Järvien läheisyys tuo kosteutta, joka rasittaa pintoja ajan myötä. Pinnoituksille annamme viiden vuoden takuun ja talon maalauksille kahden vuoden takuun.\n\nOta yhteyttä ja sovitaan maksuton arviokäynti Kangasalan alueelle.",
  },
  {
    name: "Kihniö",
    slug: "kihnio",
    alueIntro: "Pintanen palvelee myös Kihniön aluetta ja toteuttaa tiilikaton pinnoituksia, katon puhdistuksia sekä talon maalauksia alueen kiinteistöihin. Kihniö sijaitsee Pohjois-Pirkanmaalla noin tunnin matkan päässä Tampereelta.\n\nTeemme jokaiseen kohteeseen ilmaisen arviointikäynnin paikan päällä. Yrittäjät ovat itse paikalla tekemässä työn alusta loppuun, ja työmaa viimeistellään huolellisesti. Aikatauluista pidetään aina kiinni.\n\nKihniön maaseutumaisessa ympäristössä rakennukset altistuvat avoimille tuulille ja kosteudelle. Tiilikattojen ja puujulkisivujen säännöllinen huolto on tärkeää rakenteiden pitkäikäisyyden kannalta. Pinnoituksille annamme viiden vuoden takuun ja maalauksille kahden vuoden takuun.\n\nOta yhteyttä ja sovitaan maksuton arviokäynti Kihniön alueelle.",
  },
  {
    name: "Lempäälä",
    slug: "lempaala",
    alueIntro: "Pintanen toimii aktiivisesti Lempäälän alueella ja toteuttaa tiilikaton pinnoituksia, katon puhdistuksia sekä talon maalauksia alueen omakotitaloihin ja kiinteistöihin. Lempäälä sijaitsee Tampereen eteläpuolella ja kuuluu ydintoiminta-alueeseemme.\n\nJokaiseen kohteeseen tehdään ensin maksuton arviokäynti paikan päällä. Yrittäjät tekevät työn itse – emme välitä urakoita eteenpäin. Viimeistely ja siisteys kuuluvat aina työhön.\n\nLempäälän kasvavilla asuinalueilla on paljon eri-ikäisiä omakotitaloja, joiden katot ja julkisivut kaipaavat huoltoa vuosien kuluessa. Säännöllinen kunnossapito pitää kiinteistön kunnossa ja ehkäisee suurempia korjaustarpeita. Pinnoituksille annamme viiden vuoden takuun ja talon maalauksille kahden vuoden takuun.\n\nOta yhteyttä ja sovitaan maksuton arviokäynti Lempäälän alueelle.",
  },
  {
    name: "Mänttä-Vilppula",
    slug: "mantta-vilppula",
    alueIntro: "Pintanen palvelee Mänttä-Vilppulan aluetta ja toteuttaa tiilikaton pinnoituksia, katon puhdistuksia sekä talon maalauksia alueen kiinteistöihin. Toimimme noin tunnin ajomatkan säteellä Tampereelta, ja Mänttä-Vilppula kuuluu palvelualueeseemme.\n\nKäymme aina arvioimassa kohteen paikan päällä maksutta. Yrittäjät tekevät työn itse alusta loppuun, joten laatu pysyy tasaisena. Työmaat viimeistellään siististi ja sovitussa aikataulussa.\n\nMänttä-Vilppulan seudulla on paljon perinteisiä omakotitaloja ja teollisuuspaikkakunnalle tyypillisiä kiinteistöjä, joiden katot ja julkisivut hyötyvät säännöllisestä huollosta. Pinnoituksille annamme viiden vuoden takuun ja talon maalauksille kahden vuoden takuun.\n\nOta yhteyttä ja sovitaan maksuton arviokäynti Mänttä-Vilppulan alueelle.",
  },
  {
    name: "Orivesi",
    slug: "orivesi",
    alueIntro: "Pintanen toimii aktiivisesti Oriveden alueella ja toteuttaa tiilikaton pinnoituksia, katon puhdistuksia sekä talon maalauksia alueen omakotitaloihin ja kiinteistöihin. Orivesi sijaitsee Tampereen itäpuolella ja kuuluu vakituiseen toiminta-alueeseemme.\n\nTeemme jokaiseen kohteeseen ilmaisen arviointikäynnin paikan päällä. Yrittäjät ovat itse paikalla tekemässä työn alusta loppuun – emme käytä aliurakoitsijoita. Työmaat viimeistellään huolellisesti ennen luovutusta.\n\nOriveden metsäisessä ympäristössä katot keräävät helposti neulasia ja sammalta. Puujulkisivut altistuvat kosteudelle erityisesti järvien läheisyydessä. Säännöllinen huolto pitää kiinteistön kunnossa pitkään. Pinnoituksille annamme viiden vuoden takuun ja maalauksille kahden vuoden takuun.\n\nOta yhteyttä ja sovitaan maksuton arviokäynti Oriveden alueelle.",
  },
  {
    name: "Parkano",
    slug: "parkano",
    alueIntro: "Pintanen palvelee myös Parkanon aluetta ja toteuttaa tiilikaton pinnoituksia, katon puhdistuksia sekä talon maalauksia alueen kiinteistöihin. Parkano sijaitsee Pohjois-Pirkanmaalla noin tunnin matkan päässä Tampereelta.\n\nJokaiseen kohteeseen tehdään ilmainen arviointikäynti paikan päällä. Yrittäjät tekevät työn itse – emme välitä urakoita eteenpäin. Sovitusta aikataulusta pidetään kiinni ja työmaat viimeistellään siististi.\n\nParkanon seudulla metsäisillä tonteilla katot sammaloituvat helposti. Puujulkisivujen huoltomaalaus on tärkeää Suomen vaihtelevissa sääolosuhteissa. Pinnoituksille annamme viiden vuoden takuun ja maalauksille kahden vuoden takuun.\n\nOta yhteyttä ja sovitaan maksuton arviokäynti Parkanon alueelle.",
  },
  {
    name: "Pirkkala",
    slug: "pirkkala",
    alueIntro: "Pintanen toimii aktiivisesti Pirkkalan alueella ja toteuttaa tiilikaton pinnoituksia, katon puhdistuksia sekä talon maalauksia alueen omakotitaloihin ja kiinteistöihin. Pirkkala sijaitsee aivan Tampereen kupeessa ja kuuluu ydintoiminta-alueeseemme.\n\nKäymme aina ensin arvioimassa kohteen paikan päällä maksutta. Yrittäjät tekevät työn itse alusta loppuun, joten laatu pysyy tasaisena kohteesta toiseen. Työmaat viimeistellään huolellisesti ja jälki siivotaan.\n\nPirkkalan tiiviillä asuinalueilla on runsaasti omakotitaloja ja rivitaloja, joiden katot ja julkisivut kaipaavat säännöllistä huoltoa. Pyhäjärven ja lentoaseman läheisyys tuovat alueelle kosteutta ja pölyä. Pinnoituksille annamme viiden vuoden takuun ja talon maalauksille kahden vuoden takuun.\n\nOta yhteyttä ja sovitaan maksuton arviokäynti Pirkkalan alueelle.",
  },
  {
    name: "Pälkäne",
    slug: "palkane",
    alueIntro: "Pintanen palvelee Pälkäneen aluetta ja toteuttaa tiilikaton pinnoituksia, katon puhdistuksia sekä talon maalauksia alueen kiinteistöihin. Pälkäne sijaitsee noin tunnin matkan päässä Tampereelta ja kuuluu palvelualueeseemme.\n\nTeemme jokaiseen kohteeseen ilmaisen arviointikäynnin paikan päällä. Yrittäjät ovat itse paikalla tekemässä työn alusta loppuun. Työmaat viimeistellään huolellisesti ja aikatauluista pidetään kiinni.\n\nPälkäneen järviluonto tuo kosteutta, joka rasittaa kattopintoja ja julkisivuja ajan myötä. Säännöllinen huolto on hyvä tapa pitää kiinteistö kunnossa. Pinnoituksille annamme viiden vuoden takuun ja talon maalauksille kahden vuoden takuun.\n\nOta yhteyttä ja sovitaan maksuton arviokäynti Pälkäneen alueelle.",
  },
  {
    name: "Ruovesi",
    slug: "ruovesi",
    alueIntro: "Pintanen palvelee myös Ruoveden aluetta ja toteuttaa tiilikaton pinnoituksia, katon puhdistuksia sekä talon maalauksia alueen kiinteistöihin. Toimimme noin tunnin ajomatkan säteellä Tampereelta.\n\nKäymme aina arvioimassa kohteen paikan päällä maksutta. Yrittäjät tekevät työn itse – emme käytä aliurakoitsijoita. Työmaat viimeistellään huolellisesti ja sovitusta aikataulusta pidetään kiinni.\n\nRuoveden metsäisessä ja järvisessä ympäristössä katot keräävät helposti sammalta ja neulasia. Puujulkisivut hyötyvät oikea-aikaisesta huoltomaalauksesta. Pinnoituksille annamme viiden vuoden takuun ja maalauksille kahden vuoden takuun.\n\nOta yhteyttä ja sovitaan maksuton arviokäynti Ruoveden alueelle.",
  },
  {
    name: "Urjala",
    slug: "urjala",
    alueIntro: "Pintanen palvelee Urjalan aluetta ja toteuttaa tiilikaton pinnoituksia, katon puhdistuksia sekä talon maalauksia alueen omakotitaloihin ja kiinteistöihin. Urjala sijaitsee noin tunnin matkan päässä Tampereelta ja kuuluu palvelualueeseemme.\n\nJokaiseen kohteeseen tehdään ilmainen arviointikäynti paikan päällä. Yrittäjät tekevät työn itse alusta loppuun, ja työmaa viimeistellään huolellisesti. Aikatauluista pidetään aina kiinni.\n\nUrjalan maaseutumaisessa ympäristössä on paljon perinteisiä omakotitaloja, joiden katot ja julkisivut hyötyvät säännöllisestä huollosta. Pinnoituksille annamme viiden vuoden takuun ja talon maalauksille kahden vuoden takuun.\n\nOta yhteyttä ja sovitaan maksuton arviokäynti Urjalan alueelle.",
  },
  {
    name: "Valkeakoski",
    slug: "valkeakoski",
    alueIntro: "Pintanen toimii aktiivisesti Valkeakosken alueella ja toteuttaa tiilikaton pinnoituksia, katon puhdistuksia sekä talon maalauksia alueen omakotitaloihin ja kiinteistöihin. Valkeakoski sijaitsee noin tunnin matkan päässä Tampereelta.\n\nTeemme jokaiseen kohteeseen ilmaisen arviointikäynnin paikan päällä, jossa selvitämme työn laajuuden. Yrittäjät tekevät työn itse – emme välitä urakoita eteenpäin. Työmaat viimeistellään siististi ja sovitussa aikataulussa.\n\nValkeakosken alueella vesistöjen läheisyys tuo kosteutta, joka rasittaa katto- ja seinäpintoja. Säännöllinen huolto pidentää rakenteiden käyttöikää merkittävästi. Pinnoituksille annamme viiden vuoden takuun ja talon maalauksille kahden vuoden takuun.\n\nOta yhteyttä ja sovitaan maksuton arviokäynti Valkeakosken alueelle.",
  },
  {
    name: "Vesilahti",
    slug: "vesilahti",
    alueIntro: "Pintanen palvelee Vesilahden aluetta ja toteuttaa tiilikaton pinnoituksia, katon puhdistuksia sekä talon maalauksia alueen kiinteistöihin. Vesilahti sijaitsee Tampereen lounaispuolella ja kuuluu vakituiseen toiminta-alueeseemme.\n\nKäymme aina arvioimassa kohteen paikan päällä maksutta. Yrittäjät tekevät työn itse alusta loppuun, joten laatu pysyy tasaisena. Työmaat viimeistellään huolellisesti ennen luovutusta.\n\nVesilahden maaseutumaisessa ympäristössä omakotitalojen katot ja julkisivut altistuvat Suomen vaihtelevalle säälle. Säännöllinen kunnossapito on järkevä tapa pitää kiinteistö hyvässä kunnossa. Pinnoituksille annamme viiden vuoden takuun ja maalauksille kahden vuoden takuun.\n\nOta yhteyttä ja sovitaan maksuton arviokäynti Vesilahden alueelle.",
  },
  {
    name: "Virrat",
    slug: "virrat",
    alueIntro: "Pintanen palvelee myös Virtain aluetta ja toteuttaa tiilikaton pinnoituksia, katon puhdistuksia sekä talon maalauksia alueen kiinteistöihin. Virrat sijaitsee Pohjois-Pirkanmaalla noin tunnin matkan päässä Tampereelta.\n\nJokaiseen kohteeseen tehdään ilmainen arviointikäynti paikan päällä. Yrittäjät tekevät työn itse – emme käytä aliurakoitsijoita. Työmaat viimeistellään siististi ja aikatauluista pidetään kiinni.\n\nVirtain metsäisessä ja järvisessä ympäristössä katot keräävät helposti sammalta ja neulasia. Puujulkisivujen huoltomaalaus on tärkeää rakenteiden pitkäikäisyyden kannalta. Pinnoituksille annamme viiden vuoden takuun ja maalauksille kahden vuoden takuun.\n\nOta yhteyttä ja sovitaan maksuton arviokäynti Virtain alueelle.",
  },
];

/** All cities combined */
export const allCities: CityData[] = [...cities, ...simpleCities];

export const getCityBySlug = (slug: string): CityData | undefined => {
  return allCities.find(c => c.slug === slug);
};

/** Check if a city has dedicated service subpages */
export const cityHasServicePages = (city: CityData): boolean => {
  return !!city.pinnoitusIntro;
};
