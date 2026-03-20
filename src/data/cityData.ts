export interface CityData {
  name: string;
  slug: string;
  alueIntro: string;
  alueMetaTitle?: string;
  alueMetaDesc?: string;
  pinnoitusIntro?: string;
  pinnoitusMetaTitle?: string;
  pinnoitusMetaDesc?: string;
  pinnoitusLocalHookTitle?: string;
  pinnoitusLocalHookText?: string;
  puhdistusIntro?: string;
  puhdistusMetaTitle?: string;
  puhdistusMetaDesc?: string;
  maalausIntro?: string;
  maalausMetaTitle?: string;
  maalausMetaDesc?: string;
  maalausLocalHookTitle?: string;
  maalausLocalHookText?: string;
  localSection?: string;
}

/** Cities with full service subpages (pinnoitus/puhdistus/maalaus per city) */
export const cities: CityData[] = [
  {
    name: "Tampere",
    slug: "tampere",
    alueMetaTitle: "Tiilikaton pinnoitus ja talon maalaus Tampere",
    alueMetaDesc:
      "Katto- ja maalauspalvelut Tampereella huolellisella toteutuksella. Tiilikaton pinnoitus, puhdistus ja talon maalaus suoraan tekijöiltä. Pyydä maksuton arvio.",
    pinnoitusMetaTitle: "Tiilikaton pinnoitus Tampere | 5v takuu | Pintanen",
    pinnoitusMetaDesc:
      "Tiilikaton pinnoitus Tampereella alk. 2 850 €. Laske hinta hintalaskurilla. Säästä jopa 80 % vs. kattoremontti. 5v takuu & kotitalousvähennys.",
    pinnoitusLocalHookTitle: "Tiilikaton suojaaminen Näsijärven ja Pyhäjärven kosteudelta",
    pinnoitusLocalHookText: "Tampereella Näsijärven ja Pyhäjärven läheisyys luo kaupunkiin jatkuvan ilmankosteuden. Vesistöjen tuoma kosteus on erittäin hyvä kasvuympäristö sammaleelle. Sammale voi nopeasti heikentää tiilikaton kuntoa. Olit sitten asuinalueella Hervannassa, Lielahdessa tai Pyynikin vanhemmassa osassa, ammattitaitoinen tiilikaton pinnoitus on hyvä tapa suojata kotisi. Kun me pinnoitamme kattosi, se saa takaisin alkuperäisen vettä hylkivän suojansa. Näin me varmistamme, että tiilikatto kestää Tampereen vaihtelevia sääolosuhteita luotettavasti vielä jopa 10–15 vuotta. Tällä tavoin vältyt myös kalliilta kattoremontilta.",
    puhdistusMetaTitle: "Katon puhdistus Tampere – Poistaa sammaleen",
    puhdistusMetaDesc:
      "Tiilikaton puhdistus Tampereella edullisesti ja tehokkaasti. Sammaleet ja lika poistetaan mekaanisesti. Kysy tarjous.",
    maalausMetaTitle: "Talon maalaus Tampere | Hintalaskuri | Pintanen",
    maalausMetaDesc:
      "Laadukas talon ulkomaalaus Tampereella. Yrittäjä tekee työn. Laske hinta hintalaskurilla, hyödynnä kotitalousvähennys ja tilaa ilmainen arvio!",
    maalausLocalHookTitle: "Tampereen harjutuulten ja kahden järven kosteusrasituksen hallinta",
    maalausLocalHookText: "Tampere sijaitsee <strong>Näsijärven ja Pyhäjärven</strong> välissä olevalla kannaksella, ja kaupungin läpi kulkeva harjujakso aiheuttaa talojen julkisivuille erityisen suuren rasituksen. <strong>Pispalan ja Pyynikin</strong> rinteillä voimakas harjutuuli ja suora säärasitus kuluttavat maalipintaa. Järvien lähellä olevilla alueilla, kuten <strong>Tahmelassa, Ranta-Tampellassa ja Atalan</strong> rinteillä, suurin haaste on korkea <strong>ilmankosteus</strong>. Korkea ilmankosteus edistää homeen kasvua ja puun kosteusliikettä, mikä aiheuttaa ongelmia talojen ulkoverhouksille. Suojaa kotisi Tampereen säältä Pintasen tarkkuudella – emme tingi pohjatöistä.",
    alueIntro:
      "Pintanen on Pirkanmaalainen maalaus- ja kattopalveluyritys, joka toimii aktiivisesti koko Tampereen seudulla. Toteutamme tiilikaton pinnoituksia, katon puhdistuksia ja talon ulkomaalauksia omakotitaloihin sekä taloyhtiöihin.\n\nJokaiseen kohteeseen tehdään aina ilmainen arviokäynti paikan päällä, jossa kartoitamme työn laajuuden, pintojen kunnon ja tarvittavat materiaalit huolellisesti. Me yrittäjät teemme työn itse alusta loppuun, joten laatu pysyy hyvänä, ja pystymme toteuttamaan kaiken, minkä lupaamme.\n\nTampereen seudulla on tuhansia tiilikattoja ja puu-ulkoverhouksia erityisesti Hervannassa, Leinolassa, Kämmenniemessä ja Atalassa. Näissä 70–90-luvun taloissa katon pinnoitus tai puhdistus on usein jo ajankohtainen. Myös julkisivujen huoltomaalaus on tarpeen, kun edellisestä maalauksesta on kulunut yli kymmenen vuotta.\n\nUrakat suoritetaan huolellisesti ja työstä aieutuneet sotkut siivotaan aina ennen luovutusta. Ota yhteyttä ja sovitaan maksuton arviokäynti.",
    pinnoitusIntro:
      "Tampereella tiilikatot joutuvat koville – kahden suuren järven välissä ilmankosteus on korkea, ja sammal tarttuu kattopintoihin nopeasti. Tiilikaton maalauspinnoitus on tehokkain tapa pidentää katon käyttöikää ja estää tiilien rapautuminen. Olemme pinnoittaneet lukuisia kattoja Tampereen omakotitaloalueilla. Tulemme mielellämme tekemään ilmaisen kuntotarkastuksen ja kertomaan, mikä on kattosi todellinen kunto.",
    puhdistusIntro:
      "Tampereen kosteassa ilmastossa tiilikatot sammaloituvat nopeasti, erityisesti varjoisilla tonteilla ja järvien läheisyydessä. Mekaaninen puhdistus ja sammaleentorjuntakäsittely ovat edullisin tapa pitää katto kunnossa ilman suurempaa huoltoa. Puhdistamme katon käsityövälineillä – emme käytä painepesua, joka voi vahingoittaa tiilen pintaa. Palvelemme koko Tampereen aluetta nopealla aikataululla.",
    maalausIntro:
      "Tampereella on laaja kirjo maalattavia kohteita: perinteisiä puutaloja Pispalassa, moderneja omakotitaloja Vuoreksessa ja kaikkea siltä väliltä. Julkisivun huoltomaalaus suojaa puuverhousta kosteudelta ja UV-säteilyltä. Teemme aina huolelliset pohjatyöt, mukaan lukien märkähomepesun, ennen maalauksen aloittamista. Arvioimme kohteesi kunnon maksutta – ota yhteyttä.",
    localSection:
      "Tampere sijaitsee Näsijärven ja Pyhäjärven välissä, mikä tekee ilmastosta kostean ja vaativan rakennusten pinnoille. Järvien läheisyys nostaa ilmankosteutta erityisesti kesäisin ja syksyisin, mikä kiihdyttää sammalen ja levän kasvua katoilla. Tampereen omakotitaloalueet – Hervanta, Leinola, Kämmenniemi, Atala ja Kalkku – koostuvat pääosin 70–90-luvun pientaloista, joiden tiilikatot ovat saavuttaneet iän, jossa huolto on välttämätöntä. Talvisin lumi- ja jääkuorma rasittaa kattoja, ja keväisin sulamisvedet voivat aiheuttaa ongelmia kuluneella kattopinnalla. Tampereen olosuhteissa säännöllinen kunnossapito on paras tapa välttää kalliit korjaukset.",
  },
  {
    name: "Sastamala",
    slug: "sastamala",
    alueMetaTitle: "Katon huolto ja maalaus Sastamala",
    alueMetaDesc:
      "Tarjoamme kattopalvelut ja ulkomaalaukset Sastamalassa. Laadukas työnjälki ja selkeä toimintatapa. Ota yhteyttä.",
    pinnoitusMetaTitle: "Tiilikaton pinnoitus Sastamala | 5v takuu | Pintanen",
    pinnoitusMetaDesc:
      "Tiilikaton pinnoitus Sastamalassa alk. 2 850 €. Laske hinta hintalaskurilla. Säästä jopa 80 % vs. kattoremontti. 5v takuu & kotitalousvähennys.",
    pinnoitusLocalHookTitle: "Tiilikaton suojaaminen Sastamalan järvimaisemien kosteudelta",
    pinnoitusLocalHookText: "Sastamalan ja historiallisen Tyrvään upeat maisemat Rautaveden ja Liekoveden rannoilla ovat todella kauniit, mutta ne myös tuovat mukanaan paljon kosteutta. Tämä kosteus on suoraan vesistöjen lähellä olemisen seuraus, ja se luo ihanteelliset olosuhteet sammaleelle, joka voi vahingoittaa tiilikattoja. On siis tärkeää, että huolehdit säännöllisestä huollosta ja ammattitaitoisesta pinnoituksesta, riippumatta siitä, asutko Vammalan keskustassa tai maaseudun rauhassa. Tiilikaton pinnoitus on paras keino suojata sekä perinteikäs että uudempi talosi Pirkanmaan sääolosuhteilta. Kun pinnoitamme tiilikaton, palautamme tiilen alkuperäisen suojan ja varmistamme, että se palvelee sinua hyvin jopa 10-15 vuotta.",
    puhdistusMetaTitle: "Katon puhdistus Sastamala – Katto puhtaaksi kerralla",
    puhdistusMetaDesc:
      "Tiilikaton puhdistus Sastamalassa tehokkaasti ja edullisesti. Laita katto kunnossa ajoissa. Kysy tarjous.",
    maalausMetaTitle: "Talon maalaus Sastamala | Hintalaskuri | Pintanen",
    maalausMetaDesc:
      "Laadukas talon ulkomaalaus Sastamalassa. Yrittäjä tekee työn. Laske hinta hintalaskurilla, hyödynnä kotitalousvähennys ja tilaa ilmainen arvio!",
    maalausLocalHookTitle: "Puuverhouksen suojaaminen Sastamalan vesistöjen kosteusrasitukselta",
    maalausLocalHookText: "Sastamalan maisema on <strong>Rautaveden ja Liekoveden</strong> hallitsema. Ne tuovat mukanaan runsaasti kosteutta, joka on suuri haaste puujulkisivuille. Erityisesti <strong>Vammalan keskustan</strong> ja rantojen lähellä <strong>ilmankosteus</strong> on korkea. Se pääsee helposti suojaamattomaan puuhun, mikä aiheuttaa maalin lohkeilua ja altistaa laudoituksen <strong>homeelle</strong>. Pintanen tuntee alueen olosuhteet hyvin. Teen huolelliset ja ammattitaitoiset homepesut ja maalaukset. Näin varmistetaan, että talosi ulkoverhous kestää Sastamalan järvi-ilmaston vaikutukset hyvin.",
    alueIntro:
      "Pintanen palvelee Sastamalan seutua monipuolisesti – toteutamme tiilikaton pinnoituksia, katon puhdistuksia ja ulkomaalauksia niin omakotitaloihin kuin maatilakiinteistöihinkin.\n\nEnnen työn aloittamista käymme aina arvioimassa kohteen paikan päällä ilmaiseksi. Yrittäjät tekevät jokaisen urakan itse, mikä takaa tasalaatuisen ja huolellisen lopputuloksen. Viimeistely ja työmaan siistiminen kuuluvat aina hintaan.\n\nSastamalan laajalla alueella on runsaasti perinteisiä puutaloja, maatilarakennuksia ja 80–90-luvun omakotitaloja. Metsäisillä tonteilla katot sammaloituvat helposti, ja Rautaveden sekä Kuloveden rannoilla kosteus rasittaa julkisivuja. Oikea-aikainen huolto säästää rakennusten omistajia suuremmilta korjauskustannuksilta.\n\nOta yhteyttä ja sovitaan maksuton käynti Sastamalan alueelle – palvelemme joustavasti koko kunnan alueella.",
    pinnoitusIntro:
      "Sastamalan maaseutumaisessa ympäristössä tiilikatot altistuvat kosteudelle ja metsän tuomalle kasvustolle. Pinnoitus antaa katolle vedenpitävän suojan ja estää tiilien rapautumisen. Sastamalan alueella olemme toteuttaneet useita pinnoituksia sekä taajama-alueella että maaseudun kiinteistöissä. Arvioimme kattosi kunnon aina paikan päällä – ilmaiseksi ja sitoumuksetta.",
    puhdistusIntro:
      "Sastamalan metsäisessä ympäristössä sammalen ja jäkälän kasvu katoilla on yleistä. Varsinkin Rautaveden ja Kuloveden lähellä ilmankosteus pitää katot kosteina pitkään. Mekaaninen puhdistus käsityövälineillä ja kasvustontorjuntakäsittely pitävät kattosi kunnossa vuosiksi eteenpäin. Palvelemme Sastamalaa joustavalla aikataululla.",
    maalausIntro:
      "Sastamalassa on paljon perinteisiä puutaloja ja vanhoja maatilakiinteistöjä, joiden julkisivut kaipaavat ammattitaitoista huoltoa. Kostea ympäristö ja Suomen vaihtelevat sääolot kuluttavat maalipintaa, ja oikea-aikainen maalaus suojaa puuverhousta vuosiksi. Arvioimme kohteesi ilmaiseksi paikan päällä.",
    localSection:
      "Sastamala on pinta-alaltaan laaja kunta, jossa metsät, pellot ja vesistöt vaihtelevat. Rautaveden ja Kuloveden rannoilla sijaitsevat kiinteistöt altistuvat erityisesti kosteudelle, joka edistää sammalen ja jäkälän kasvua katoilla. Metsäisillä tonteilla lehdet ja neulaset kertyvät kattopinnoille ja pidättävät kosteutta. Alueella on paljon perinteisiä puutaloja ja maatilarakennuksia, joiden tiilikatot ja puujulkisivut tarvitsevat säännöllistä hoitoa. Talvisin runsas lumi rasittaa kattoja, ja avoimilla peltoalueilla tuuli tehostaa sään kuluttavaa vaikutusta rakennusten pintoihin.",
  },
  {
    name: "Hämeenkyrö",
    slug: "hameenkyro",
    alueMetaTitle: "Katto- ja julkisivutyöt Hämeenkyrö",
    alueMetaDesc:
      "Katon pinnoitus ja talon maalaus Hämeenkyrössä huolellisin pohjatöin. Yrittäjät mukana jokaisessa projektissa. Pyydä arvio.",
    pinnoitusMetaTitle: "Tiilikaton pinnoitus Hämeenkyrö | 5v takuu | Pintanen",
    pinnoitusMetaDesc:
      "Tiilikaton pinnoitus Hämeenkyrössä alk. 2 850 €. Laske hinta hintalaskurilla. Säästä jopa 80 % vs. kattoremontti. 5v takuu & kotitalousvähennys.",
    pinnoitusLocalHookTitle: "Hämeenkyrön kansallismaisemien ja Kyröskosken säärasitusten hallinta",
    pinnoitusLocalHookText: "Hämeenkyrön laajat pellot ja Kyröskosken ympärillä olevat vanhat maisemat saavat talojen katot alttiiksi suoralle tuulelle, epätasaisille sateille ja talven raskaalle lumelle. Kun tiilikaton pinta alkaa vähitellen muuttua huokoiseksi, sääolosuhteet voivat aiheuttaa vahinkoa rakenteille pakkasen myötä. Oikea-aikainen pinnoitus takaa, että tiili pysyy kosteudenkestävänä ja kestävänä kaikissa sääolosuhteissa. Tämä on hyvä ratkaisu, joka auttaa säilyttämään kotisi arvon ja ulkonäön keskellä Pirkanmaan kauneinta luontoa.",
    puhdistusMetaTitle: "Katon puhdistus Hämeenkyrö – Turvallisesti ja huolellisesti",
    puhdistusMetaDesc:
      "Tiilikaton puhdistus Hämeenkyrössä edullisesti ja huolellisesti. Sammaleet ja lika pois katolta. Kysy tarjous.",
    maalausMetaTitle: "Talon maalaus Hämeenkyrö | Hintalaskuri | Pintanen",
    maalausMetaDesc:
      "Laadukas talon ulkomaalaus Hämeenkyrössä. Yrittäjä tekee työn. Laske hinta hintalaskurilla, hyödynnä kotitalousvähennys ja tilaa ilmainen arvio!",
    maalausLocalHookTitle: "Hämeenkyrön avoimien peltomaisemien ja viistosateiden hallinta",
    maalausLocalHookText: "Hämeenkyrön avoimet pellot ja Kyröskosken ympäristön korkeuserot altistavat talojen ulkoseinät suoralle tuulelle ja epämukaville sateille. Kun talon maalipinta ohenee, vesi pääsee helposti sisään paneelien rakoihin ja halkeamiin, mikä tekee puun pehmenemisestä nopeampaa. Pintanen tarjoaa Hämeenkyrön alueella erittäin kestävää ulkomaalausta, joka luo talollesi vankan ja joustavan suojan, joka ei riipu säästä.",
    alueIntro:
      "Hämeenkyrö kuuluu Pintasen vakituiseen toiminta-alueeseen, ja olemme toteuttaneet alueella lukuisia katto- ja maalausurakoita. Tarjoamme tiilikaton pinnoitusta, katon puhdistusta sekä talon ulkomaalausta.\n\nAloitamme jokaisen projektin ilmaisella arviokäynnillä, jossa selvitämme pintojen kunnon ja tarvittavat toimenpiteet. Yrittäjät ovat itse paikalla tekemässä työn – laatu on meille kunnia-asia.\n\nHämeenkyrössä luonnonläheiset tontit tuovat omat haasteensa: metsän keskellä katot keräävät neulasia ja sammaloituvat nopeasti, ja Kyrösjärven rannoilla kosteus rasittaa sekä kattoja että julkisivuja. Kunnan alueella on paljon 70–90-luvun omakotitaloja, joiden huolto on usein ajankohtaista.\n\nOta yhteyttä – arviokäynti on aina maksuton.",
    pinnoitusIntro:
      "Hämeenkyrön metsäisessä ja kosteahkossa ympäristössä tiilikattojen kuluminen on tavallista. Kyrösjärven läheisyys ja tiheä puusto pitävät ilmankosteuden korkeana, mikä kiihdyttää sammalen kasvua ja tiilien rapautumista. Tiilikaton maalauspinnoitus on tehokas ja edullinen tapa suojata katto vuosiksi eteenpäin. Teemme ilmaisen kuntotarkastuksen jokaiseen kohteeseen.",
    puhdistusIntro:
      "Hämeenkyrössä metsäiset tontit tarkoittavat, että tiilikatot sammaloituvat nopeasti. Neulasia ja lehtiä kertyy kattopinnoille, ja kosteus edistää kasvustoa. Puhdistamme katon mekaanisesti ja käsittelemme sen kasvustonestolla – näin katto pysyy puhtaana pidempään ilman uusintapesua.",
    maalausIntro:
      "Hämeenkyrön omakotitaloalueet koostuvat monenlaisista taloista – sekä perinteisistä hirsi- ja puutaloista että uudemmista pientaloista. Julkisivujen huoltomaalaus on tärkeää erityisesti varjoisilla tonteilla, joissa kosteus pääsee rasittamaan maalipintaa. Teemme perusteelliset pohjatyöt ja käytämme laadukkaita maaleja.",
    localSection:
      "Hämeenkyrö on luonnonläheinen kunta Kyrösjärven rannalla. Järven tuoma kosteus ja metsäiset tontit luovat olosuhteet, joissa kattojen ja julkisivujen pinnat kuluvat nopeammin kuin avoimemmilla alueilla. Alueen omakotitalot ovat pääosin 70–90-luvuilta, ja monessa kohteessa katon pinnoitus tai julkisivun huoltomaalaus on tullut ajankohtaiseksi. Talvisin lumi kertyy erityisesti suojaisten metsätonttien katoille, ja keväisin sulamisvedet koettelevat kulunutta kattopintaa. Hämeenkyrön olosuhteet tekevät ennaltaehkäisevästä huollosta erityisen järkevän investoinnin.",
  },
  {
    name: "Ylöjärvi",
    slug: "ylojarvi",
    alueMetaTitle: "Katon pinnoitus, puhdistus ja maalaus Ylöjärvi",
    alueMetaDesc:
      "Katto- ja maalaustyöt Ylöjärvellä ammattitaidolla. Tiilikaton huolto ja julkisivumaalaus kestävällä lopputuloksella. Kysy tarjous.",
    pinnoitusMetaTitle: "Tiilikaton pinnoitus Ylöjärvi | 5v takuu | Pintanen",
    pinnoitusMetaDesc:
      "Tiilikaton pinnoitus Ylöjärvellä alk. 2 850 €. Laske hinta hintalaskurilla. Säästä jopa 80 % vs. kattoremontti. 5v takuu & kotitalousvähennys.",
    pinnoitusLocalHookTitle: "Ylöjärven puutarhakaupungin kattojen suojaus sammaleelta",
    pinnoitusLocalHookText: "Ylöjärven puutarhakaupungissa luonto on aivan lähellä. Asuinalueet kuten Metsäkylä ja Siivikkala sijaitsevat usein metsän reunalla tai Näsijärven rantamaisemissa. Puiden antama varjo ja vesistöjen kosteus pitävät kattoja pitkään märkinä sateen jälkeen, ja tämä houkuttelee sammalta. Laadukas tiilikaton pinnoitus Ylöjärvellä on oiva ratkaisu, sillä se palauttaa vanhan katon loiston ja luo sille vettä ja likaa hylkivän suojan. Näin voit varmistaa, että kotisi katto pysyy hyvässä kunnossa, eikä metsän läheisyys pääse heikentämään sen arvoa ennenaikaisesti.",
    puhdistusMetaTitle: "Katon puhdistus Ylöjärvi – Pidentää katon ikää",
    puhdistusMetaDesc:
      "Tiilikaton puhdistus Ylöjärvellä edullisesti ja tehokkaasti. Sammaleet ja lika poistetaan huolellisesti. Pyydä tarjous.",
    maalausMetaTitle: "Talon maalaus Ylöjärvi | Hintalaskuri | Pintanen",
    maalausMetaDesc:
      "Laadukas talon ulkomaalaus Ylöjärvellä. Yrittäjä tekee työn. Laske hinta hintalaskurilla, hyödynnä kotitalousvähennys ja tilaa ilmainen arvio!",
    maalausLocalHookTitle: "Puutarhakaupungin julkisivujen suojaus puiden varjostukselta",
    maalausLocalHookText: "Ylöjärven puutarhakaupungissa, erityisesti Metsäkylän ja Siivikkalan vehreillä alueilla, suuret puut ja Näsijärven läheisyys luovat varjoisia ja kosteita pienilmastoja. Varjoisilla paikoilla maali kuivuu hitaammin, mikä edistää homesienien kasvua ja maalin hilseilyä. Pintasen talon maalaus Ylöjärvellä panostaa tehokkaaseen homepesuun ja oikeisiin maalausolosuhteisiin, jotta kotisi julkisivu pysyy upeana ja terveenä metsän siimeksessäkin.",
    alueIntro:
      "Ylöjärvi on yksi Pintasen ydintoiminta-alueista Tampereen naapurissa. Toteutamme alueella tiilikaton pinnoituksia, katon puhdistuksia ja ulkomaalauksia monenlaisiin omakotitaloihin.\n\nJokaiseen kohteeseen teemme maksuttoman arviokäynnin ennen työn aloittamista. Yrittäjät ovat aina itse työmaalla, ja jokainen urakka viimeistellään huolella.\n\nYlöjärvi on kasvanut voimakkaasti, ja kaupungin asuinalueet ulottuvat Siivikkalasta Metsäkylään ja Vuorentaustaan. Eri vuosikymmenten pientalot vaativat erityyppistä huoltoa – vanhemmissa taloissa katon pinnoitus voi olla ajankohtainen, kun taas uudemmissa julkisivun ensimaalaus lähestyy. Metsäisillä tonteilla katot keräävät helposti kasvustoa.\n\nSovitaan maksuton arviokäynti – ota yhteyttä.",
    pinnoitusIntro:
      "Ylöjärvellä on paljon omakotitaloalueita, joiden tiilikatot ovat saavuttaneet iän, jossa pinnoitus olisi järkevää tehdä. Näsijärven pohjoisrannan kosteus ja metsäisten tonttien varjoisuus kiihdyttävät katon kulumista. Pinnoitus antaa tiilille vedenpitävän suojan ja pidentää katon ikää merkittävästi. Tarjoamme ilmaisen kuntotarkastuksen kaikille Ylöjärven alueen kiinteistöille.",
    puhdistusIntro:
      "Ylöjärven metsäisillä ja järvenrantaisilla tonteilla katot keräävät nopeasti sammalta, neulasia ja lehtiä. Säännöllinen mekaaninen puhdistus ja sammaleentorjuntakäsittely ovat edullisin tapa pitää katto kunnossa. Puhdistamme katon käsityövälineillä ilman painepesua ja palvelemme koko Ylöjärven aluetta.",
    maalausIntro:
      "Ylöjärven kasvavilla asuinalueilla talojen julkisivut ovat tärkein suoja säätä vastaan. Huoltomaalaus on ajankohtainen, kun maalipinta alkaa hilseillä tai haalistua. Maalaamme sekä vanhempia puutaloja että uudempia omakotitaloja laadukkailla materiaaleilla. Arviointi on aina maksuton.",
    localSection:
      "Ylöjärvi on Tampereen naapurikaupunki, joka on kasvanut nopeasti viime vuosikymmeninä. Asuinalueet ovat usein metsäisiä ja luonnonläheisiä – Näsijärven pohjoisranta ja lukuisat pienemmät järvet tuovat kosteutta ilmaan. Siivikkalan, Metsäkylän ja Vuorentaustan omakotitaloalueet koostuvat eri vuosikymmenten pientaloista. Metsätonteilla katot keräävät neulasia ja lehtiä, jotka pidättävät kosteutta ja luovat sammaleelle kasvualustan. Talvisin suojaisilla tonteilla lumi ei puhdistu tuulen avulla, ja keväisin sulamisvedet rasittavat kulunutta kattopintaa.",
  },
  {
    name: "Nokia",
    slug: "nokia",
    alueMetaTitle: "Katto- ja maalauspalvelut Nokia – Ilmainen arvio",
    alueMetaDesc:
      "Palvelemme Nokiassa kattojen huolloissa ja talon maalauksissa. Selkeä toteutus ja kestävä lopputulos. Ota yhteyttä ja jutellaan kohteestasi.",
    pinnoitusMetaTitle: "Tiilikaton pinnoitus Nokia | 5v takuu | Pintanen",
    pinnoitusMetaDesc:
      "Tiilikaton pinnoitus Nokialla alk. 2 850 €. Laske hinta hintalaskurilla. Säästä jopa 80 % vs. kattoremontti. 5v takuu & kotitalousvähennys.",
    pinnoitusLocalHookTitle: "Nokian pientaloalueiden kattojen elinkaaren maksimointi",
    pinnoitusLocalHookText: "Nokialla asuinalueet ovat levittäytyneet Nokianvirran rannoille ja vihreisiin lähiöihin, kuten Harjuniittyyn ja Sammalistoon. Alueen vesistöjen aiheuttama kosteus ja vaihtelevat sääolot koettelevat talojen tiilikattoja jatkuvasti. Kun tehdaspinnoite kuluu, tiili alkaa heikentyä ja kerätä sammalta ja muuta kasvustoa. Fiksusti ennakoivat Nokialla asuvat valitsevat ammattitaitoisen pinnoituksen, koska se on nopea, ympäristöystävällinen ja ennen kaikkea taloudellinen ratkaisu välttääkseen raskaat kattoremontit ja pitääkseen kodin turvassa.",
    puhdistusMetaTitle: "Katon puhdistus Nokia – Ammattitaidolla",
    puhdistusMetaDesc:
      "Tiilikaton puhdistus Nokiassa tehokkaasti ja edullisesti. Katto puhtaaksi laadukkailla työmenetelmillä. Kysy tarjous.",
    maalausMetaTitle: "Talon maalaus Nokia | Hintalaskuri | Pintanen",
    maalausMetaDesc:
      "Laadukas talon ulkomaalaus Nokialla. Yrittäjä tekee työn. Laske hinta hintalaskurilla, hyödynnä kotitalousvähennys ja tilaa ilmainen arvio!",
    maalausLocalHookTitle: "Nokian kasvavien pientaloalueiden julkisivujen huolto",
    maalausLocalHookText: "Nokialla asuinalueet leviävät Nokianvirran varrelta aina Harjuniityn ja Sammaliston kaltaisiin uusiin lähiöihin. Olipa kyseessä perinteinen puutalo virran tuntumassa tai moderni uudiskohde, säännöllinen huoltomaalaus on tärkeää puun kosteusliikkeen hallitsemiseksi. Huolehdin, että Nokian kohteissa tehdään pohjatyöt ja mekaaninen kaavinta kunnolla, jotta uusi maalipinta suojaa kotiasi hyvin Nokianvirran aiheuttamilta kosteusvaikutuksilta.",
    alueIntro:
      "Nokia on yksi Pintasen aktiivisimmista palvelualueista Tampereen länsipuolella. Toteutamme Nokialla tiilikaton pinnoituksia, katon puhdistuksia ja talon ulkomaalauksia kaiken kokoisiin kiinteistöihin.\n\nTeemme aina ilmaisen arviointikäynnin kohteeseen ennen työn aloitusta. Yrittäjät tekevät työn itse, ja työmaalla pidetään kiinni sovitusta aikataulusta. Viimeistely ja työmaan siistiminen kuuluvat aina urakkaan.\n\nNokialla Kokemäenjoen ja Pyhäjärven läheisyys pitää ilmankosteuden korkeana, mikä rasittaa sekä kattopintoja että julkisivuja ympäri vuoden. Kaupungin omakotitaloalueet – Alhoniitty, Kankaantaka ja Linnavuori – ovat pääosin 80–2000-luvun pientaloja. Monessa kohteessa katon tai julkisivun huolto on jo ajankohtaista.\n\nSovitaan arviokäynti – se on aina maksuton.",
    pinnoitusIntro:
      "Nokialla vesistöt ympäröivät kaupunkia, ja korkea ilmankosteus kiihdyttää tiilikattojen kulumista. Vesi imeytyy tiiliin, jäätyy talvella ja rapistuttaa tiilen pintaa vuosi vuodelta. Tiilikaton maalauspinnoitus sulkee tiilen huokoset ja suojaa sitä kosteudelta ja pakkaselta. Nokian alueella olemme toteuttaneet lukuisia pinnoituksia – tulemme mielellämme tekemään ilmaisen kuntotarkastuksen.",
    puhdistusIntro:
      "Nokian kosteassa ympäristössä katot sammaloituvat nopeasti – erityisesti metsäisillä tonteilla ja vesistöjen lähellä. Mekaaninen puhdistus poistaa sammalen ja jäkälän vahingoittamatta tiilen pintaa, ja kasvustonestokäsittely hidastaa uuden kasvuston muodostumista merkittävästi.",
    maalausIntro:
      "Nokialla vesistöjen tuoma kosteus rasittaa talojen julkisivuja enemmän kuin monessa muussa kaupungissa. Maalipinta suojaa puuverhousta kosteudelta ja ehkäisee homeongelmia. Teemme aina huolelliset pohjatyöt ja käytämme laadukkaita ulkomaaleja, jotka kestävät Nokian vaativat olosuhteet.",
    localSection:
      "Nokia sijaitsee Kokemäenjoen ja Pyhäjärven varrella, ja vesistöjen vaikutus näkyy ilmankosteudessa selvästi. Kosteassa ympäristössä kattojen pinnat kuluvat nopeammin ja sammal tarttuu tiiliin helposti. Nokian asuinalueet Alhoniityssä, Kankaantaassa ja Linnavuoressa koostuvat pääosin 80–2000-luvun pientaloista. Metsäisten tonttien katot keräävät neulasia ja lehtiä, jotka muodostavat kosteutta pidättävän kerroksen. Talven jäätymis-sulamissyklit rasittavat erityisesti pinnoittamattomia tiiliä – vesi imeytyy huokoiseen tiilen ja laajenee jäätyessään.",
  },
  {
    name: "Forssa",
    slug: "forssa",
    alueMetaTitle: "Tiilikaton huolto ja maalaus Forssa",
    alueMetaDesc:
      "Palvelemme Forssassa kattojen pinnoituksissa ja talojen maalauksissa. Huolellinen valmistelu ja siisti työnjälki. Pyydä maksuton arvio.",
    pinnoitusMetaTitle: "Tiilikaton pinnoitus Forssa | 5v takuu | Pintanen",
    pinnoitusMetaDesc:
      "Tiilikaton pinnoitus Forssassa alk. 2 850 €. Laske hinta hintalaskurilla. Säästä jopa 80 % vs. kattoremontti. 5v takuu & kotitalousvähennys.",
    pinnoitusLocalHookTitle: "Forssan ja Lounais-Hämeen vaativien sääolojen kestävä kattosuoja",
    pinnoitusLocalHookText: "Forssan seudulla, joka sijaitsee Lounais-Hämeen sydämessä, sää voi muuttua nopeasti. Loimijoen laakso tuo alueelle kosteutta, ja talven loputtua pakkaset voivat olla edelleen voimakkaita. Tämä voi vaatia paljon pientalon tiilikatolta. Jos huomaat, että tiilen pinta on muuttunut karheaksi ja menettänyt värinsä, on aika tehdä jotain asialle. Ammattitason tiilikaton pinnoitus on hyvä ratkaisu, koska se sulkee tiilen huokoset tehokkaasti. Tämä varmistaa, että kattosi on kuiva, tiivis ja näyttävä, jopa Forssan talvikauden haastavissa olosuhteissa.",
    puhdistusMetaTitle: "Katon puhdistus Forssa – Säännöllinen huolto kannattaa",
    puhdistusMetaDesc:
      "Tiilikaton puhdistus Forssassa tehokkaasti ja edullisesti. Katto kuntoon ennen vaurioita. Pyydä tarjous.",
    maalausMetaTitle: "Talon maalaus Forssa | Hintalaskuri | Pintanen",
    maalausMetaDesc:
      "Laadukas talon ulkomaalaus Forssassa. Yrittäjä tekee työn. Laske hinta hintalaskurilla, hyödynnä kotitalousvähennys ja tilaa ilmainen arvio!",
    maalausLocalHookTitle: "Lounais-Hämeen lämpötilavaihteluiden kestävä maalaustyö",
    maalausLocalHookText: "Forssan alueella Loimijoen laakson kostea ilma ja sisämaan suuret lämpötilan muutokset vaikuttavat maalin kiinnitykseen. Kun maalipinta altistuu ilmalle ja alkaa kulua pois, se ei enää estä vettä, mikä aiheuttaa puun kulumisen. Pintanen tarjoaa forssalaisille pientalojen asukkaille laadukasta talon maalaus palvelua, joka saa seinät kestämään Forssan alueen vaativia olosuhteita ja pitämään rakennuksen ulkopinnan joustavana.",
    alueIntro:
      "Vaikka Pintasen kotikaupunki on Tampere, palvelemme aktiivisesti myös Forssan seutua Etelä-Hämeessä. Tarjoamme tiilikaton pinnoituksia, katon puhdistuksia ja talon ulkomaalauksia omakotitaloihin sekä maatilakiinteistöihin.\n\nJokaiseen kohteeseen tehdään ilmainen arviokäynti. Yrittäjät tekevät työn itse ja viimeistelevät jokaisen työmaan huolellisesti. Forssan suuntaan ajamme säännöllisesti, joten aikataulut järjestyvät joustavasti.\n\nForssan seudulla avoimet peltomaisemat altistavat rakennukset tuulelle ja viistosateelle, mikä kuluttaa maalipintoja ja kattoja tavallista nopeammin. Alueella on paljon perinteisiä puutaloja ja maatiloja, joissa oikea-aikainen kunnossapito on erityisen tärkeää.\n\nOta yhteyttä ja sovitaan käynti Forssan alueelle – arviokäynti on aina maksuton.",
    pinnoitusIntro:
      "Forssan seudulla tiilikatot joutuvat koville avoimessa maastossa. Tuuli ja viistosade rasittavat kattopintoja, ja talven jäätymis-sulamissyklit rapistuttavat pinnoittamattomia tiiliä. Pinnoitus antaa katolle suojan, joka kestää Etelä-Hämeen vaativat olosuhteet. Palvelemme Forssaa säännöllisesti ja teemme ilmaisen kuntotarkastuksen.",
    puhdistusIntro:
      "Forssan seudulla katot keräävät kasvustoa erityisesti Loimijoen varren kosteissa olosuhteissa. Vaikka alue on avoin, varjoisilla tonteilla sammal kasvaa silti tehokkaasti. Puhdistamme tiilikatot mekaanisesti ja käsittelemme ne sammaleentorjunta-aineella. Palvelemme Forssan aluetta joustavasti.",
    maalausIntro:
      "Forssan ympäristössä avoimet peltoalueet altistavat talojen julkisivut tuulelle ja sateelle enemmän kuin suojaisemmilla seuduilla. Maalipinta kuluu nopeammin, ja huoltomaalauksen tarve tulee aikaisemmin. Teemme Forssan alueella ammattitaitoisia ulkomaalauksia huolellisilla pohjatyöllä. Arviointi on aina maksuton.",
    localSection:
      "Forssa sijaitsee Etelä-Hämeessä, missä laajat peltoaukeat ja Loimijoen varsi muodostavat maiseman. Avoimilla alueilla rakennukset altistuvat tuulelle ja viistosateelle, mikä kuluttaa julkisivuja ja kattopintoja tehokkaasti. Loimijoen varren kiinteistöissä ilmankosteus edistää kasvustoa katoilla. Forssan seutu koostuu pääosin perinteisistä puutaloista ja maatilakiinteistöistä, joiden tiilikatot ja puujulkisivut vaativat säännöllistä hoitoa. Talvisin lumikuorma voi olla merkittävä, ja avoimen maaston tuuli pakkaa lunta epätasaisesti katoille.",
  },
  {
    name: "Hämeenlinna",
    slug: "hameenlinna",
    alueMetaTitle: "Katon pinnoitus ja julkisivumaalaus Hämeenlinna",
    alueMetaDesc:
      "Katto- ja maalauspalvelut Hämeenlinnassa suoraan tekijöiltä. Kestävä toteutus ja selkeä työprosessi. Ota yhteyttä.",
    pinnoitusMetaTitle: "Tiilikaton pinnoitus Hämeenlinna | 5v takuu | Pintanen",
    pinnoitusMetaDesc:
      "Tiilikaton pinnoitus Hämeenlinnassa alk. 2 850 €. Laske hinta hintalaskurilla. Säästä jopa 80 % vs. kattoremontti. 5v takuu & kotitalousvähennys.",
    pinnoitusLocalHookTitle: "Hämeenlinnan arvokiinteistöjen ja pientalojen tiilikattojen pinnoitus",
    pinnoitusLocalHookText: "Hämeenlinnassa vanhat ja uudet talot elävät hyvin yhdessä Vanajaveden rannalla. Vanajaveden läheisyys tuo kuitenkin omat haasteensa. Ilmankosteus on jatkuva ongelma, joka vaikuttaa tiilikattojen kestävyyteen ja saa ne helposti sammaloitumaan. Onneksi on olemassa ratkaisu. Pintasen asiantunteva tiilikaton pinnoitus on edullinen tapa uudistaa katon ulkonäkö ja palauttaa sen suojakyky. Riippumatta siitä, asutko Aulangon lähellä tai Jukolassa, hyvä tiilikaton pinnoitus takaa, että kattosi kestää Hämeenlinnan sään jopa seuraavat 10-15 vuotta.",
    puhdistusMetaTitle: "Katon puhdistus Hämeenlinna – Ilmainen arvio",
    puhdistusMetaDesc:
      "Tiilikaton puhdistus Hämeenlinnassa edullisesti ja tehokkaasti. Sammaleet ja lika poistetaan huolellisesti. Kysy tarjous.",
    maalausMetaTitle: "Talon maalaus Hämeenlinna | Hintalaskuri | Pintanen",
    maalausMetaDesc:
      "Laadukas talon ulkomaalaus Hämeenlinnassa. Yrittäjä tekee työn. Laske hinta hintalaskurilla, hyödynnä kotitalousvähennys ja tilaa ilmainen arvio!",
    maalausLocalHookTitle: "Vanajaveden kosteusrasituksen hallinta Hämeenlinnan pientaloissa",
    maalausLocalHookText: "Hämeenlinnassa Vanajaveden läheisyys ja järven yllä oleva sumu aiheuttavat jatkuvasti kosteusongelmia. Tämä vaikuttaa erityisesti Aulangon ja Jukolan alueilla oleviin puuverhouksiin. Jos pohjatyöt tehdään huonosti, kosteus jää helposti maalin alle ja aiheuttaa nopeasti hilseilyä. Pintasen palvelu panostaa Hämeenlinnassa erityisesti huolellisiin pohjatöihin. Näin taataan, että uusi maalipinta tarttuu hyvin ja kestää pitkään.",
    alueIntro:
      "Pintanen palvelee Hämeenlinnan seutua säännöllisesti ja on toteuttanut alueella useita katto- ja maalausurakoita. Tarjoamme tiilikaton pinnoitusta, katon puhdistusta ja talon ulkomaalausta.\n\nJokaiseen kohteeseen teemme maksuttoman arviokäynnin, jossa kartoitamme pintojen kunnon ja annamme tarjouksen. Yrittäjät ovat itse työmaalla ja vastaavat työn laadusta henkilökohtaisesti.\n\nHämeenlinnan seudulla on laaja rakennuskanta – historiallisia puutaloja keskustassa, 70–80-luvun omakotitaloja lähiöissä ja uudempia pientaloja kasvavilla alueilla. Vanajaveden rannalla ilmankosteus on korkea, mikä rasittaa sekä kattopintoja että julkisivuja erityisesti syksyisin ja talvisin.\n\nOta yhteyttä ja sovitaan maksuton arviokäynti Hämeenlinnan alueelle.",
    pinnoitusIntro:
      "Hämeenlinnassa Vanajaveden läheisyys pitää ilmankosteuden korkeana, ja tiilikattojen pinnat kuluvat kosteassa ympäristössä nopeammin. Pinnoitus muodostaa vedenpitävän kalvon tiilen pinnalle ja estää kosteuden imeytymisen. Hämeenlinnan seudulla olemme toteuttaneet pinnoituksia erilaisiin kohteisiin – ota yhteyttä ja sovitaan kuntotarkastus.",
    puhdistusIntro:
      "Hämeenlinnan metsäisillä ja Vanajaveden läheisillä tonteilla tiilikatot sammaloituvat tehokkaasti. Mekaaninen puhdistus ja kasvustonestokäsittely ovat hyvä tapa pitää katto kunnossa ilman täyttä pinnoitusta. Puhdistamme katot ammattitaidolla ja nopealla aikataululla.",
    maalausIntro:
      "Hämeenlinnan monipuolisessa rakennuskannassa on maalattavaa riittämiin – perinteiset puutalot, rivitalot ja modernit omakotitalot. Julkisivun huoltomaalaus suojaa puuta kosteudelta ja pidentää rakenteiden käyttöikää. Teemme huolelliset pohjatyöt ja käytämme laadukkaita maaleja. Arviokäynti on maksuton.",
    localSection:
      "Hämeenlinna sijaitsee Vanajaveden rannalla Kanta-Hämeessä. Järven läheisyys nostaa ilmankosteutta ja luo olosuhteet, joissa sammalen ja jäkälän kasvu katoilla on yleistä. Kaupungin metsäiset omakotitaloalueet keräävät lehtiä ja neulasia kattopinnoille. Hämeenlinnan seudulla on eri-ikäisiä omakotitaloja ja rivitaloja, joiden tiilikatot ja puujulkisivut tarvitsevat huoltoa. Etelä-Hämeen vaihteleva talvi – lumen ja vesisateen vuorottelu – rasittaa kattopintoja erityisesti, kun vesi jäätyy ja sulaa toistuvasti tiilen huokosissa.",
  },
  {
    name: "Huittinen",
    slug: "huittinen",
    alueMetaTitle: "Katto- ja maalauspalvelu Huittinen",
    alueMetaDesc:
      "Tiilikaton huolto ja talon maalaus Huittisissa. Panostamme pohjatöihin ja pitkäikäiseen lopputulokseen. Pyydä arvio kohteestasi.",
    pinnoitusMetaTitle: "Tiilikaton pinnoitus Huittinen | 5v takuu | Pintanen",
    pinnoitusMetaDesc:
      "Tiilikaton pinnoitus Huittisissa alk. 2 850 €. Laske hinta hintalaskurilla. Säästä jopa 80 % vs. kattoremontti. 5v takuu & kotitalousvähennys.",
    pinnoitusLocalHookTitle: "Satakunnan avarien maisemien tuulikuorma ja katon tiiveys Huittisissa",
    pinnoitusLocalHookText: "Huittisten laajat pellot ja avonaiset maisemat tuottavat omakotitalojen katoille omanlaisensa haasteen. Tuuli on esteetön ja sateet voimakkaat. Tällaisessa ympäristössä tiili, joka on päässyt huokoiseksi, on erityisen altis kosteuden imeytymiselle ja rapautumiselle. Pintasen tiilikaton pinnoitus ratkaisee tämän ongelman. Pinnoituksella luodaan tiilelle säänkestävä suojakerros. Se pitää veden katon yläpuolella ja estää sammaleen kasvun tehokkaasti, myös Satakunnan vaikeimmissa sääolosuhteissa.",
    puhdistusMetaTitle: "Katon puhdistus Huittinen – Poistaa levän ja sammaleen",
    puhdistusMetaDesc:
      "Tiilikaton puhdistus Huittisissa tehokkaasti ja edullisesti. Katto pysyy kunnossa pidempään. Kysy tarjous.",
    maalausMetaTitle: "Talon maalaus Huittinen | Hintalaskuri | Pintanen",
    maalausMetaDesc:
      "Laadukas talon ulkomaalaus Huittisissa. Yrittäjä tekee työn. Laske hinta hintalaskurilla, hyödynnä kotitalousvähennys ja tilaa ilmainen arvio!",
    maalausLocalHookTitle: "Satakunnan lakeuksien tuulikuorman ja säärasituksen hallinta",
    maalausLocalHookText: "Huittisten avoimessa peltomaisemassa tuuli pääsee vapaasti liikkumaan, ja sade iskee usein suoraan talon julkisivuun. Tästä syystä vanhat maalipinnat voivat päästää kosteuden syvemmälle puun rakenteeseen, mikä saattaa aiheuttaa lahovaurioita. Me Pintanen tarjoamme Huittisten alueella erittäin laadukasta ulkomaalausta, joka suojaa taloa tehokkaasti sääoloilta. Me teemme työmme huolella, jotta talosi arvo säilyy hyvänä Satakunnan vaihtelevissa sääolosuhteissa.",
    alueIntro:
      "Pintanen palvelee Huittisten seutua ja toteuttaa alueella tiilikaton pinnoituksia, katon puhdistuksia sekä ulkomaalauksia. Huittinen sijaitsee Satakunnan rajalla, ja ajamme alueelle säännöllisesti.\n\nJokainen projekti alkaa ilmaisella arviokäynnillä kohteessa. Yrittäjät tekevät työn itse ja viimeistelevät työmaan huolellisesti – aikatauluista pidämme kiinni.\n\nHuittisten seudulla Kokemäenjoen ja Loimijoen yhtymäkohta tekee ympäristöstä kosteudelle alttiin. Jokivarsien lähellä ilmankosteus on ajoittain korkeaa, mikä edistää sammalen kasvua katoilla ja kosteuden tunkeutumista julkisivuihin. Alueella on paljon perinteisiä pientaloja ja maatilakiinteistöjä, joissa oikea-aikainen huolto on erityisen tärkeää.\n\nOta yhteyttä – sovitaan maksuton arviokäynti Huittisten alueelle.",
    pinnoitusIntro:
      "Huittisissa jokivarsien kosteus ja avoin maasto altistavat tiilikatot kulumiselle. Kosteuden ja pakkasen yhteisvaikutus rapistuttaa tiiliä hiljalleen, ja pinnoitus on paras keino suojata kattoa tältä rasitukselta. Palvelemme Huittisten aluetta säännöllisesti – arviokäynti ja kuntotarkastus kuuluvat aina palveluun.",
    puhdistusIntro:
      "Huittisten jokivarsien kosteassa ympäristössä katot keräävät sammalta ja jäkälää tehokkaasti. Mekaaninen puhdistus ja torjuntakäsittely pitävät katon kunnossa pitkään. Palvelemme Huittisten aluetta joustavasti – ota yhteyttä ja sovitaan ajankohta.",
    maalausIntro:
      "Huittisten perinteisissä puutaloissa ja maatilakiinteistöissä julkisivujen huolto on avainasemassa rakenteiden pitkäikäisyyden kannalta. Jokivarren kosteassa ilmastossa maalipinta kuluu nopeammin, ja ajoissa tehty huoltomaalaus säästää kalliimmilta korjauksilta. Arvioimme kohteesi kunnon aina ilmaiseksi.",
    localSection:
      "Huittinen sijaitsee Kokemäenjoen ja Loimijoen yhtymäkohdassa Satakunnan rajalla. Jokien läheisyys nostaa ilmankosteutta ja tekee ympäristöstä vaativan rakennusten pinnoille. Maatalousympäristössä avoimet peltoalueet altistavat rakennukset tuulelle ja viistosateelle. Huittisten seudulle tyypilliset perinteiset puutalot ja maatilarakennukset vaativat säännöllistä kunnossapitoa. Talvisin lumikuorma ja jäätymis-sulamissyklit rasittavat erityisesti huoltamattomia tiiliä ja maalipintoja.",
  },
];

/** Cities with area page but NO dedicated service subpages */
export const simpleCities: CityData[] = [
  {
    name: "Akaa",
    slug: "akaa",
    alueMetaTitle: "Katon pinnoitus ja maalaus Akaa",
    alueMetaDesc:
      "Katon pinnoitus ja maalaus Akaassa huolellisesti toteutettuna. Palvelemme joustavasti koko alueella. Ota yhteyttä.",
    alueIntro:
      "Pintanen palvelee Akaan aluetta säännöllisesti. Akaa sijaitsee Etelä-Pirkanmaalla hyvien kulkuyhteyksien varrella, ja ajamme kohteisiin vaivattomasti.\n\nToteutamme alueella tiilikaton pinnoituksia, katon puhdistuksia ja talon ulkomaalauksia. Jokaiseen kohteeseen teemme ilmaisen arviokäynnin, jossa selvitämme työn laajuuden ja pintojen kunnon. Yrittäjät tekevät työn itse – emme käytä aliurakoitsijoita.\n\nAkaan Toijalassa ja Viialassa on runsaasti 60–80-luvun omakotitaloja, joiden tiilikatot alkavat olla siinä iässä, että huolto on ajankohtaista. Myös julkisivujen huoltomaalaus on monessa kohteessa tarpeen. Työmaat viimeistellään aina huolellisesti ja jälki siivotaan ennen luovutusta. Pinnoituksille annamme viiden vuoden takuun ja maalauksille kahden vuoden takuun.\n\nOta yhteyttä ja sovitaan maksuton arviokäynti Akaan alueelle.",
  },
  {
    name: "Ikaalinen",
    slug: "ikaalinen",
    alueMetaTitle: "Katto- ja julkisivupalvelut Ikaalinen",
    alueMetaDesc:
      "Katto- ja maalauspalvelut Ikaalisissa ammattitaidolla. Kestävä lopputulos ja selkeä hinnoittelu. Pyydä maksuton arvio.",
    alueIntro:
      "Ikaalinen kuuluu Pintasen vakituiseen palvelualueeseen Pohjois-Pirkanmaalla. Kaupunki tunnetaan kylpylästään ja kauniista järvimaisemistaan, mutta myös omakotitaloalueistaan, joissa katto- ja maalauspalveluille on tarvetta.\n\nKäymme aina arvioimassa kohteen paikan päällä ilmaiseksi ennen työn aloittamista. Yrittäjät tekevät jokaisen urakan itse, joten laatu pysyy korkeana ja tasaisena. Aikatauluista pidämme kiinni.\n\nIkaalisten järviympäristö tuo kosteutta, joka edistää sammalen muodostumista katoille ja kosteuden tunkeutumista puujulkisivuihin. Säännöllinen huolto pitää kiinteistön kunnossa ja estää suuremmat korjaustarpeet. Tarjoamme tiilikaton pinnoituksia viiden vuoden takuulla ja maalauksia kahden vuoden takuulla.\n\nOta yhteyttä ja sovitaan maksuton arviokäynti Ikaalisten alueelle.",
  },
  {
    name: "Juupajoki",
    slug: "juupajoki",
    alueMetaTitle: "Tiilikaton pinnoitus ja maalaus Juupajoki",
    alueMetaDesc:
      "Tiilikaton huolto ja talon maalaus Juupajoella. Työt tehdään huolellisesti alusta loppuun. Ota yhteyttä ja sovitaan käynti.",
    alueIntro:
      "Pintanen palvelee myös Juupajoen kuntaa Koillis-Pirkanmaalla. Pieni ja rauhallinen kunta tarjoaa luonnonläheistä asumista, mutta metsäinen ympäristö asettaa omat vaatimuksensa rakennusten kunnossapidolle.\n\nTeemme ilmaisen arviokäynnin jokaiseen kohteeseen ennen työn aloitusta. Yrittäjät ovat aina itse paikalla työmaalla – emme välitä urakoita eteenpäin. Viimeistely ja työmaan siistiminen kuuluvat aina hintaan.\n\nJuupajoen metsäisillä tonteilla katot keräävät helposti neulasia, lehtiä ja sammalta. Varjoisilla paikoilla kosteus pysyy katoilla pitkään ja edistää kasvustoa. Puujulkisivut altistuvat samalle kosteudelle erityisesti pohjois- ja itäseinillä. Pinnoituksille annamme viiden vuoden takuun ja talon maalauksille kahden vuoden takuun.\n\nOta yhteyttä ja sovitaan arviokäynti Juupajoen alueelle.",
  },
  {
    name: "Kangasala",
    slug: "kangasala",
    alueMetaTitle: "Katon huolto ja talon maalaus Kangasala",
    alueMetaDesc:
      "Katon pinnoitus ja julkisivumaalaus Kangasalla. Huolelliset pohjatyöt ja tarkka työnjälki aina mukana. Kysy tarjous.",
    maalausMetaTitle: "Talon maalaus Kangasala | Hintalaskuri | Pintanen",
    maalausMetaDesc:
      "Laadukas talon ulkomaalaus Kangasalla. Yrittäjä tekee työn. Laske hinta hintalaskurilla, hyödynnä kotitalousvähennys ja tilaa ilmainen arvio!",
    maalausLocalHookTitle: "Kangasalan järvimaisemien kosteusrasituksen hallinta julkisivuissa",
    maalausLocalHookText: "Kangasalan kauniit järvimaisemat Roineen ja Längelmäveden ympärillä tuovat mukanaan kosteutta, joka on suuri haaste talojen puujulkisivuille. Erityisesti kesäisin ja syksyisin korkea ilmankosteus edistää homesienien kasvua ja puun kosteusliikettä, mikä voi johtaa maalin hilseilyyn ja halkeamiin. Pintasen ammattitaitoinen huoltomaalaus Kangasalla panostaa perusteellisiin pohjatöihin ja homepesuun, jotta kotisi julkisivu kestää järvi-ilmaston vaikutukset hyvin ja näyttää upealta vuodesta toiseen.",
    alueIntro:
      "Kangasala on Tampereen itäinen naapuri ja yksi Pintasen ydintoiminta-alueista. Kaupungissa on laajat omakotitaloalueet, joissa katto- ja maalauspalveluille on jatkuvasti kysyntää.\n\nJokaiseen kohteeseen käymme ensin arvioimassa tilanteen paikan päällä maksutta. Yrittäjät tekevät työn itse alusta loppuun – emme käytä aliurakoitsijoita emmekä välitä töitä eteenpäin.\n\nKangasalan kauniit järvimaisemat tuovat mukanaan kosteutta, joka rasittaa kattopintoja ja julkisivuja. Roine, Längelmävesi ja muut järvet pitävät ilmankosteuden korkeana erityisesti kesäisin ja syksyisin. Alueen eri-ikäisissä omakotitaloissa huollon tarve vaihtelee – vanhemmissa taloissa katon pinnoitus on ajankohtaista, uudemmissa julkisivujen kunto kannattaa tarkistaa.\n\nPinnoituksille annamme viiden vuoden takuun ja maalauksille kahden vuoden takuun. Ota yhteyttä ja sovitaan arviokäynti.",
  },
  {
    name: "Kihniö",
    slug: "kihnio",
    alueMetaTitle: "Katto- ja maalaustyöt Kihniö",
    alueMetaDesc:
      "Katto- ja maalaustyöt Kihniössä huolellisesti toteutettuna. Panostamme pohjatöihin ja siistiin lopputulokseen. Pyydä arvio.",
    alueIntro:
      "Kihniö sijaitsee Pohjois-Pirkanmaalla lähellä Satakunnan rajaa, ja Pintanen palvelee aluetta osana laajempaa toimintasädettään. Kunnan rauhallisessa maaseutuympäristössä on omakotitaloja ja maatilakiinteistöjä, joiden ylläpito vaatii ammattimaista huoltoa.\n\nTeemme jokaiseen kohteeseen ilmaisen arviokäynnin ja yrittäjät tekevät työn itse. Emme käytä aliurakoitsijoita, ja työmaat jätetään aina siistiin kuntoon.\n\nKihniön avoimessa maastossa rakennukset altistuvat tuulelle ja sateelle enemmän kuin suojaisemmilla alueilla. Metsien lähellä katot sammaloituvat helposti, ja puujulkisivujen maalipinta kuluu säärasituksessa. Pinnoituksille annamme viiden vuoden takuun ja maalauksille kahden vuoden takuun.\n\nOta yhteyttä – arviokäynti on aina maksuton.",
  },
  {
    name: "Lempäälä",
    slug: "lempaala",
    alueMetaTitle: "Katon pinnoitus ja puhdistus Lempäälä",
    alueMetaDesc:
      "Tiilikaton pinnoitus ja talon maalaus Lempäälässä kestävällä toteutuksella. Ota yhteyttä ja jutellaan kohteestasi.",
    alueIntro:
      "Lempäälä on yksi Tampereen eteläisistä naapurikunnista ja kuuluu Pintasen ydintoiminta-alueeseen. Nopeasti kasvanut kunta tarjoaa monipuolisia asuinalueita, joissa katto- ja maalauspalveluille on jatkuvasti tarvetta.\n\nAloitamme jokaisen urakan ilmaisella arviokäynnillä kohteessa. Yrittäjät tekevät työn itse alusta loppuun – viimeistely ja siisteys kuuluvat aina hintaan.\n\nLempäälän asuinalueilla on sekä uudehkoja 2000-luvun omakotitaloja että vanhempia, 70–80-luvun pientaloja. Vanhemmissa taloissa katon pinnoitus on usein jo ajankohtaista, ja myös uudempien talojen julkisivuissa ensimmäisen huoltomaalauksen tarve lähestyy. Pyhäjärven ja Vanajaveden läheisyys tuo kosteutta, joka rasittaa pintoja.\n\nPinnoituksille viiden vuoden takuu, maalauksille kahden vuoden takuu. Ota yhteyttä ja sovitaan arviokäynti.",
  },
  {
    name: "Mänttä-Vilppula",
    slug: "mantta-vilppula",
    alueMetaTitle: "Katto- ja maalauspalvelut Mänttä-Vilppula",
    alueMetaDesc:
      "Katto- ja maalauspalvelut Mänttä-Vilppulassa. Huolellinen valmistelu ja laadukas työnjälki. Pyydä maksuton arvio.",
    alueIntro:
      "Mänttä-Vilppula sijaitsee Pohjois-Pirkanmaalla, ja Pintanen palvelee aluetta säännöllisesti. Teollisuushistoriallaan tunnetussa kaupungissa on monipuolinen rakennuskanta, joka tarvitsee ammattitaitoista huoltoa.\n\nKäymme aina ensin arvioimassa kohteen paikan päällä ilmaiseksi. Yrittäjät tekevät työn itse – laatu pysyy tasaisena ja aikatauluista pidetään kiinni.\n\nMänttä-Vilppulassa Keurusselän ja muiden järvien läheisyys pitää ilmankosteuden korkeana. Kaupungin omakotitaloissa ja vanhemmissa teollisuusajan asunnoissa kattojen ja julkisivujen kunnossapito on usein ajankohtaista. Metsäiset tontit keräävät neulasia ja kasvustoa katoille.\n\nPinnoituksille annamme viiden vuoden takuun ja maalauksille kahden vuoden takuun. Ota yhteyttä ja sovitaan arviokäynti.",
  },
  {
    name: "Orivesi",
    slug: "orivesi",
    alueMetaTitle: "Tiilikaton huolto ja maalaus Orivesi",
    alueMetaDesc:
      "Tiilikaton huolto ja julkisivumaalaus Orivedellä. Kestävä toteutus ja selkeä toimintatapa. Ota yhteyttä.",
    alueIntro:
      "Orivesi sijaitsee Tampereen itäpuolella ja kuuluu Pintasen vakituiseen toiminta-alueeseen. Luonnonläheinen kaupunki on tunnettu metsäisistä tonteistaan ja järvimaisemistaan.\n\nJokaiseen kohteeseen teemme ilmaisen arviokäynnin paikan päällä. Yrittäjät tekevät työn itse – emme käytä aliurakoitsijoita. Työmaat viimeistellään huolellisesti ennen luovutusta.\n\nOriveden metsäisessä ympäristössä tiilikatot keräävät helposti neulasia, sammalta ja jäkälää. Järvien läheisyydessä kosteus rasittaa sekä kattopintoja että puujulkisivuja. Säännöllinen kunnossapito pidentää rakenteiden ikää ja ehkäisee kalliimpia korjauksia.\n\nPinnoituksille viiden vuoden takuu, maalauksille kahden vuoden takuu. Ota yhteyttä ja sovitaan käynti Oriveden alueelle.",
  },
  {
    name: "Parkano",
    slug: "parkano",
    alueMetaTitle: "Katon pinnoitus ja julkisivutyöt Parkano",
    alueMetaDesc:
      "Katto- ja maalaustyöt Parkanossa suoraan tekijöiltä. Panostamme huolelliseen työn jälkeen. Kysy tarjous.",
    alueIntro:
      "Parkano sijaitsee Pohjois-Pirkanmaalla, ja Pintanen palvelee aluetta osana laajempaa toiminta-aluettaan. Kaupungin metsäisissä maisemissa rakennusten kunnossapito vaatii erityistä huomiota.\n\nJokaiseen kohteeseen teemme ilmaisen arviokäynnin. Yrittäjät tekevät työn itse alusta loppuun – emme välitä urakoita eteenpäin. Aikatauluista pidämme aina kiinni.\n\nParkanon seudulla metsäiset tontit tarkoittavat, että katot keräävät neulasia, sammalta ja kasvustoa tehokkaasti. Puujulkisivujen maalipinta kuluu nopeammin varjoisilla tonteilla, joissa kosteus ei pääse kuivamaan kunnolla. Talvisin runsas lumikuorma rasittaa kattoja.\n\nPinnoituksille annamme viiden vuoden takuun ja maalauksille kahden vuoden takuun. Ota yhteyttä ja sovitaan arviokäynti Parkanon alueelle.",
  },
  {
    name: "Pirkkala",
    slug: "pirkkala",
    alueMetaTitle: "Katto- ja maalauspalvelu Pirkkala – Yrittäjät tekevät työn",
    alueMetaDesc:
      "Katon pinnoitus ja talon maalaus Pirkkalassa ammattitaidolla. Yrittäjät mukana jokaisessa työssä. Pyydä arvio.",
    maalausMetaTitle: "Talon maalaus Pirkkala | Hintalaskuri | Pintanen",
    maalausMetaDesc:
      "Laadukas talon ulkomaalaus Pirkkalassa. Yrittäjä tekee työn. Laske hinta hintalaskurilla, hyödynnä kotitalousvähennys ja tilaa ilmainen arvio!",
    maalausLocalHookTitle: "Pyhäjärven kosteuden ja lentokenttäalueen rasitteiden hallinta Pirkkalassa",
    maalausLocalHookText: "Pirkkalan tiiviillä asuinalueilla Pyhäjärven läheisyys pitää ilmankosteuden korkeana ympäri vuoden. Tämä kosteus yhdistettynä lentokenttäalueen pölyyn ja ympäristörasitteisiin tekee julkisivujen kunnossapidosta erityisen tärkeää. Puuverhouksen maalipinta kuluu näissä olosuhteissa tavallista nopeammin, ja homesienille syntyy hyvä kasvualusta. Pintasen ammattitaitoinen talon maalaus Pirkkalassa sisältää aina perusteellisen homepesun ja huolelliset pohjatyöt, jotta kotisi ulkoverhous kestää hyvin Pirkkalan vaativia olosuhteita.",
    alueIntro:
      "Pirkkala sijaitsee aivan Tampereen vieressä ja on yksi Pintasen ydintoiminta-alueista. Tiivis ja nopeasti kasvanut kunta tarjoaa paljon omakotitaloja ja rivitaloja, joissa katto- ja maalauspalveluille on jatkuvaa tarvetta.\n\nKäymme aina ensin arvioimassa kohteen ilmaiseksi paikan päällä. Yrittäjät tekevät työn itse, ja jokainen urakka viimeistellään huolellisesti.\n\nPirkkalan tiiviillä asuinalueilla Pyhäjärven läheisyys pitää ilmankosteuden korkeana. Myös lentokenttäalueen pöly ja ympäristö tuovat omia rasitteitaan. Alueen omakotitaloissa ja rivitaloissa kattojen ja julkisivujen kunnossapito on tärkeää sekä rakenteille että kiinteistön arvolle.\n\nPinnoituksille viiden vuoden takuu, maalauksille kahden vuoden takuu. Ota yhteyttä ja sovitaan arviokäynti.",
  },
  {
    name: "Pälkäne",
    slug: "palkane",
    alueMetaTitle: "Katon huolto ja maalaus Pälkäne",
    alueMetaDesc:
      "Katto- ja maalauspalvelut Pälkäneellä. Tiilikaton huolto ja julkisivumaalaus huolellisesti toteutettuna. Ota yhteyttä.",
    alueIntro:
      "Pälkäne on kaunis järvikunta Pirkanmaan itäosassa, ja Pintanen palvelee aluetta säännöllisesti. Kunnan upea luonto on asumisen valttikortti, mutta järvien tuoma kosteus asettaa vaatimuksia rakennusten pinnoille.\n\nTeemme jokaiseen kohteeseen ilmaisen arviokäynnin. Yrittäjät ovat aina itse paikalla tekemässä työn – aikatauluista ja laadusta pidetään kiinni.\n\nPälkäneen järviympäristössä ilmankosteus on ajoittain korkeaa, mikä edistää kasvuston muodostumista tiilikatoille. Puujulkisivut altistuvat kosteudelle erityisesti järvenrantaisilla tonteilla. Säännöllinen huolto pidentää rakenteiden käyttöikää merkittävästi ja ehkäisee kalliimpia korjaustarpeita.\n\nPinnoituksille annamme viiden vuoden takuun ja maalauksille kahden vuoden takuun. Ota yhteyttä ja sovitaan käynti Pälkäneen alueelle.",
  },
  {
    name: "Ruovesi",
    slug: "ruovesi",
    alueMetaTitle: "Katon pinnoitus ja maalaus Ruovesi",
    alueMetaDesc:
      "Tiilikaton pinnoitus ja talon maalaus Ruovedellä. Kestävä lopputulos ja siisti työnjälki. Pyydä maksuton arvio.",
    alueIntro:
      "Ruovesi sijaitsee Pohjois-Pirkanmaalla kauniin Ruoveden rannalla, ja Pintanen palvelee aluetta osana toiminta-aluettaan. Metsäinen ja järvinen ympäristö tekee kunnossapidosta erityisen tärkeää.\n\nKäymme arvioimassa jokaisen kohteen paikan päällä maksutta. Yrittäjät tekevät työn itse – emme käytä aliurakoitsijoita. Sovitusta aikataulusta pidämme aina kiinni.\n\nRuovedellä metsien ja järvien keskellä katot keräävät sammalta, neulasia ja jäkälää tehokkaasti. Ilmankosteus on korkea erityisesti rantatonteilla, mikä rasittaa sekä kattopintoja että puujulkisivuja. Säännöllinen huolto ehkäisee kalliimpia korjaustarpeita ja pitää kiinteistön kunnossa.\n\nPinnoituksille viiden vuoden takuu, maalauksille kahden vuoden takuu. Ota yhteyttä ja sovitaan arviokäynti.",
  },
  {
    name: "Urjala",
    slug: "urjala",
    alueMetaTitle: "Katto- ja julkisivupalvelut Urjala",
    alueMetaDesc:
      "Katto- ja maalaustyöt Urjalassa. Huolelliset pohjatyöt ja laadukkaat materiaalit. Ota yhteyttä ja kysy lisää.",
    alueIntro:
      "Urjala sijaitsee Etelä-Pirkanmaalla, ja Pintanen palvelee aluetta säännöllisesti. Kunta tunnetaan maaseutumaisesta ympäristöstään ja perinteisistä omakotitaloistaan.\n\nJokaiseen kohteeseen teemme ilmaisen arviokäynnin. Yrittäjät tekevät työn itse alusta loppuun – viimeistely ja työmaan siistiminen kuuluvat aina urakkaan.\n\nUrjalan maaseutuympäristössä rakennukset altistuvat avoimilla alueilla tuulelle ja sateelle. Metsäisillä tonteilla katot keräävät sammalta ja neulasia. Perinteisissä puutaloissa julkisivujen huoltomaalaus on erityisen tärkeää, sillä maalipinta on puuverhouksen tärkein suoja kosteutta vastaan. Pinnoituksille annamme viiden vuoden takuun ja maalauksille kahden vuoden takuun.\n\nOta yhteyttä ja sovitaan arviokäynti Urjalan alueelle.",
  },
  {
    name: "Valkeakoski",
    slug: "valkeakoski",
    alueMetaTitle: "Tiilikaton pinnoitus ja maalaus Valkeakoski",
    alueMetaDesc:
      "Tiilikaton huolto ja talon maalaus Valkeakoskella. Panostamme kestävyyteen ja tarkkaan toteutukseen. Pyydä arvio.",
    alueIntro:
      "Valkeakoski on teollisuuskaupunki Etelä-Pirkanmaalla, ja Pintanen palvelee aluetta aktiivisesti. Kaupungin vesistöjen ympäröimä sijainti tekee katto- ja julkisivuhuollosta erityisen tärkeää.\n\nTeemme jokaiseen kohteeseen ilmaisen arviokäynnin paikan päällä. Yrittäjät tekevät työn itse – emme käytä aliurakoitsijoita emmekä välitä urakoita eteenpäin.\n\nValkeakoskella Mallasveden ja Vanajaveden läheisyys pitää ilmankosteuden korkeana ympäri vuoden. Kaupungin omakotitaloalueilla on runsaasti eri-ikäisiä pientaloja, joiden tiilikatot ja puujulkisivut kaipaavat säännöllistä huoltoa. Kosteus edistää sammalen kasvua katoilla ja voi aiheuttaa ongelmia myös julkisivuissa.\n\nPinnoituksille viiden vuoden takuu, maalauksille kahden vuoden takuu. Ota yhteyttä ja sovitaan käynti Valkeakosken alueelle.",
  },
  {
    name: "Vesilahti",
    slug: "vesilahti",
    alueMetaTitle: "Katto- ja maalauspalvelut Vesilahti",
    alueMetaDesc:
      "Katto- ja maalauspalvelut Vesilahdessa ammattitaidolla. Selkeä työprosessi ja pitkäikäinen lopputulos. Ota yhteyttä.",
    alueIntro:
      "Vesilahti on maaseutumainen kunta Tampereen lounaispuolella, ja Pintanen palvelee aluetta osana ydintoiminta-aluettaan. Kunnan rauhallinen ympäristö houkuttelee omakotiasujia, joiden kiinteistöt tarvitsevat säännöllistä huoltoa.\n\nKäymme aina arvioimassa kohteen paikan päällä ilmaiseksi. Yrittäjät tekevät työn itse alusta loppuun, joten laatu pysyy tasaisena ja aikataulut pitävät.\n\nVesilahden maaseutuympäristössä avoimet alueet altistavat talojen julkisivut säälle, ja metsäisillä tonteilla katot keräävät sammalta ja neulasia. Järvien läheisyys tuo kosteutta, joka rasittaa pintoja ajan myötä. Oikea-aikainen kunnossapito on järkevä tapa pitää kiinteistö hyvässä kunnossa.\n\nPinnoituksille viiden vuoden takuu, maalauksille kahden vuoden takuu. Ota yhteyttä ja sovitaan arviokäynti Vesilahden alueelle.",
  },
  {
    name: "Virrat",
    slug: "virrat",
    alueMetaTitle: "Katon huolto ja maalaus Virrat",
    alueMetaDesc:
      "Tiilikaton pinnoitus ja julkisivumaalaus Virroilla. Huolellinen toteutus ja siisti lopputulos. Kysy tarjous kohteestasi.",
    alueIntro:
      "Virrat sijaitsee Pohjois-Pirkanmaalla, ja Pintanen palvelee aluetta osana laajempaa toimintasädettään. Luonnonkaunis kaupunki on tunnettu metsistään ja järvistään, jotka luovat vaativan ympäristön rakennusten pinnoille.\n\nJokaiseen kohteeseen teemme ilmaisen arviokäynnin. Yrittäjät tekevät työn itse – emme käytä aliurakoitsijoita. Työmaat viimeistellään siististi ja aikatauluista pidetään kiinni.\n\nVirtain metsäisessä ja järvisessä ympäristössä tiilikatot keräävät sammalta, neulasia ja jäkälää tehokkaasti. Puujulkisivujen maalipinta kuluu nopeammin kosteissa olosuhteissa. Säännöllinen katto- ja julkisivuhuolto pidentää rakenteiden ikää merkittävästi ja on aina edullisempi vaihtoehto kuin myöhemmät suuret korjaukset.\n\nPinnoituksille viiden vuoden takuu, maalauksille kahden vuoden takuu. Ota yhteyttä ja sovitaan arviokäynti Virtain alueelle.",
  },
];

/** All cities combined */
export const allCities: CityData[] = [...cities, ...simpleCities];

export const getCityBySlug = (slug: string): CityData | undefined => {
  return allCities.find((c) => c.slug === slug);
};

/** Check if a city has dedicated service subpages */
export const cityHasServicePages = (city: CityData): boolean => {
  return !!city.pinnoitusIntro;
};

/** Cities with dedicated maalaus (painting) subpages */
export const maalausCities: CityData[] = allCities.filter((c) => !!c.maalausLocalHookTitle);
