import { Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, Clock, ChevronRight, CreditCard } from "lucide-react";
import ServicePageHero from "@/components/ServicePageHero";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import KotitalousVahennys from "@/components/KotitalousVahennys";
import FAQSection from "@/components/FAQSection";
import ToimintaAlueetBanner from "@/components/ToimintaAlueetBanner";
import TeamContactSection from "@/components/TeamContactSection";
import SEO from "@/components/SEO";
import OptimizedImage from "@/components/OptimizedImage";
import { RoofTileIcon, RoofCleanIcon, PaintBrushIcon } from "@/components/ServiceIcons";
import { getStorageUrl, getImageSrcSet } from "@/lib/storage";
import { getCityBySlug, cityHasServicePages } from "@/data/cityData";
import { getAreaCityContent } from "@/data/areaCityContent";

const heroImage = getStorageUrl("talon-maalaus-pensseli-header.webp");

const pinnoitusBg = getStorageUrl("Muut_referenssit/punainen-tiilikatto-maalaus-jalkeen-tampere.webp");
const puhdistusBg = getStorageUrl("Muut_referenssit/katto-jalkeen-mekaaninen-puhdistus-sastamala.webp");
const maalausBg = getStorageUrl("Muut_referenssit/talon-maalaus-ylojarvi-header.webp");

const eerikImage = getStorageUrl("Pictures-200/Eerik-kattomaalari-200.webp");
const eemilImage = getStorageUrl("Pictures-200/Eemil-seinamaalari-200.webp");

/* ── Trust Stats ── */
const trustStats = [
  { value: "4,9 / 5", label: "Google-arvostelut", sub: (<><strong className="text-foreground">Pirkanmaan tyytyväisimmät asiakkaat.</strong></>) },
  { value: "Yli 200", label: "Onnistunutta urakkaa", sub: (<>Olemme tehneet <strong className="text-foreground">jokaisen työn itse</strong>.</>) },
  { value: "+5 vuotta", label: "Kokemusta alalta", sub: "Ei enää arvailua." },
  { value: "2–5 vuotta", label: "Takuu työlle", sub: (<><strong className="text-foreground">Takaamme itse tekemämme työn.</strong></>) },
];

/* ── Pinnoitus Pricing ── */
const pinnoitusCards = [
  { size: "150–180 m²", label: "Pieni/keskisuuri koti", duration: "2 työpäivää", normalPrice: "2 850 € – 3 200 €", afterPrice: "alk. 2 150 €", featured: false },
  { size: "190–240 m²", label: "Yleisin kattokoko", duration: "2–3 työpäivää", normalPrice: "3 300 € – 3 700 €", afterPrice: "alk. 2 480 €", featured: true },
  { size: "250–300 m²", label: "Suuri omakotitalo", duration: "2–4 työpäivää", normalPrice: "3 750 € – 4 880 €", afterPrice: "alk. 2 800 €", featured: false },
];
const pinnoitusIncludes = ["Syväpuhdistava pesu", "Kasvustonestokäsittely", "Tiilien vaihto & huolto", "2x Maalaus / Pinnoitus"];

/* ── Maalaus Pricing ── */
const maalausCards = [
  { size: "1-kerroksinen omakotitalo", label: "Pieni tai keskisuuri koti", duration: "2–4 työpäivää", normalPrice: "3 500 € – 6 000 €", afterPrice: "alk. 2 520 €", featured: false },
  { size: "1,5-kerroksinen talo", label: "Yleisin talon koko", duration: "3–5 työpäivää", normalPrice: "5 000 € – 8 000 €", afterPrice: "alk. 3 600 €", featured: true },
  { size: "2-kerroksinen talo", label: "Suuret omakotitalot", duration: "4–8 työpäivää", normalPrice: "7 000 € – 11 000 €", afterPrice: "alk. 5 040 €", featured: false },
];
const maalausIncludes = ["Huolellinen suojaus", "Homepesu ja kaavinta", "Puupuhtaiden pintojen pohjamaalaus", "Pintamaalaus"];

/* ── FAQ (yhteinen kaikille aluesivuille) ── */
const areaFAQ = [
  {
    question: "Saako talon maalauksesta ja tiilikaton pinnoituksesta kotitalousvähennystä?",
    answer: "Kyllä saa! Sekä talon maalaus että tiilikaton pinnoitus oikeuttavat kotitalousvähennykseen. Voit vähentää <strong>35 % työn osuudesta</strong> henkilökohtaisessa verotuksessasi. Koska urakoissamme työn osuus on tyypillisesti jopa 80 % kokonaishinnasta, säästö on usein tuhat euroa. Puolisoiden yhteinen maksimietu on jopa <strong>3 200 euroa vuodessa</strong>. Erittelemme työn osuuden suoraan laskulle, joten vähennyksen hakeminen on sinulle täysin vaivatonta.",
  },
  {
    question: "Mitä omakotitalon julkisivun maalaus tai tiilikaton pinnoitus tyypillisesti maksaa?",
    answer: "Jokainen kohde on yksilöllinen, mutta olemme hinnoittelussamme täysin avoimia. Keskikokoisen omakotitalon tiilikaton pesu ja pinnoitus asettuu tyypillisesti noin <strong>2 800–5 800 euron</strong> välille. Puuverhouksen huoltomaalaus perusteellisine pohjatöineen maksaa talon koosta riippuen noin <strong>3 000 – 10 000 euroa</strong>. Muistathan, että lopullinen summa on kotitalousvähennyksen jälkeen sinulle huomattavasti edullisempi. Pyydä meidät ilmaiselle arviokäynnille, niin saat tarkan, kiinteän avaimet käteen -tarjouksen ilman piilokuluja.",
  },
  {
    question: "Voiko katto- tai maalausurakan maksaa osissa?",
    answer: "Ehdottomasti. Katon tai julkisivun rapautumista ei kannata jäädä seuraamaan säästöjä odotellessa, sillä pitkittyessään vauriot vaativat aina kalliimman remontin. Tarjoamme asiakkaillemme <strong>joustavan rahoitusvaihtoehdon</strong>, jonka avulla voit jakaa tiilikaton huollon tai talon maalauksen kustannukset sinulle sopiviin kuukausieriin. Näin kiinteistösi arvo ja kunto turvataan välittömästi, mutta taloutesi pysyy tasapainossa.",
  },
  {
    question: "Kuinka kauan katon tai talon huoltourakka kestää?",
    answer: "Tyypillisen omakotitalon tiilikaton pesu, kasvustonestokäsittely ja kaksinkertainen pinnoitus kestävät noin <strong>2–4 työpäivää</strong>, riippuen katon kunnosta ja säästä. Talon ulkomaalaus on hieman monivaiheisempi prosessi, johon kuluu tyypillisesti <strong>3–7 työpäivää</strong>. Maalauksessa tärkeää on antaa rakenteiden kuivua perusteellisen homepesun jälkeen ennen pintakäsittelyä. Varmistamme aina, että työ etenee sujuvasti, mutta emme koskaan tingi pohjatöiden vaatimasta ajasta.",
  },
  {
    question: "Mistä tiedän, onko aika maalata talo tai pinnoittaa katto?",
    answer: "Nyrkkisääntö on, että puuverhous ja betonitiilikatto vaativat ammattilaisen huoltoa noin <strong>10–15 vuoden</strong> välein. Hälytysmerkkejä tiilikatolla ovat alkuperäisen värin haalistuminen, tiilen pinnan muuttuminen karheaksi ja huokoiseksi sekä kiihtyvä sammaleen kasvu. Julkisivussa huoltotarpeen paljastavat maalin liituuntuminen, hilseily, paneelien halkeamat tai mustat homepilkut. Jos huomaat näitä merkkejä, suojakerros on pettänyt ja rakenteet altistuvat kosteusvaurioille.",
  },
  {
    question: "Kannattaako katon pesu tai talon maalaus tehdä itse?",
    answer: "Teknisesti työn voi tehdä itse, mutta kestävän ja turvallisen lopputuloksen saavuttaminen on ilman ammattitason välineitä erittäin riski- ja aikaavievää. Esimerkiksi tiilikaton vääränlainen korkeapainepesu voi rikkoa tiilen rakenteen lopullisesti, ja ilman kunnollista biosidikäsittelyä sammal tunkee nopeasti uuden maalin läpi. Ulkomaalauksessa puutteellisesti tehdyt pohjatyöt johtavat uuden maalin nopeaan irtoamiseen. Lisäksi, kun me teemme työn, saat <strong>kotitalousvähennyksen</strong> sekä <strong>5 vuoden takuun katoille</strong> ja <strong>2 vuoden takuun maalaustöille</strong>.",
  },
];

/* ── Pricing Card Renderer ── */
const PricingGrid = ({
  cards,
  includes,
}: {
  cards: typeof pinnoitusCards;
  includes: string[];
}) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    {cards.map((card, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
        className={`relative bg-card rounded-2xl shadow-sm flex flex-col overflow-hidden ${
          card.featured ? "border-2 border-accent md:scale-105 md:shadow-lg" : "border border-border/50"
        }`}
      >
        {card.featured && (
          <div className="bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider text-center py-1.5">
            {cards[0].size.includes("m²") ? "Yleisin kattokoko" : "Yleisin talon koko"}
          </div>
        )}
        <div className="p-5 md:p-6 flex flex-col flex-1">
          <p className="text-xl md:text-2xl font-bold text-foreground">{card.size}</p>
          <p className="text-sm text-muted-foreground mb-4">{card.label}</p>
          <div className="mb-5">
            <p className="text-sm line-through text-muted-foreground/60 mb-1">Norm. {card.normalPrice}</p>
            <p className="text-3xl md:text-4xl font-bold text-accent"><strong>{card.afterPrice}</strong></p>
            <p className="text-xs text-muted-foreground mt-1"><strong>kotitalousvähennyksen jälkeen</strong></p>
          </div>
          <ul className="space-y-2.5 mb-5 flex-1">
            {includes.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                <Check className="w-4 h-4 text-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
            <Clock className="w-4 h-4" />
            Kesto: {card.duration}
          </div>
          <a
            href="#yhteystiedot"
            className={`inline-flex items-center justify-center w-full py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-md text-sm ${
              card.featured ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
            }`}
          >
            Pyydä tarjous tästä
          </a>
        </div>
      </motion.div>
    ))}
  </div>
);

const ServiceAreaPage = ({ citySlug }: { citySlug: string }) => {
  const cityData = getCityBySlug(citySlug);
  const areaContent = getAreaCityContent(citySlug);

  if (!cityData || !areaContent) return <Navigate to="/toiminta-alueet" replace />;

  const cityName = cityData.name;
  const cityIn = cityData.cityIn;
  const cityGenitive = cityData.cityGenitive;
  const hasSubPages = cityHasServicePages(cityData);

  const services = [
    {
      title: "Tiilikaton pinnoitus",
      href: hasSubPages ? `/tiilikaton-pinnoitus-${cityData.slug}` : "/tiilikaton-pinnoitus-pirkanmaa",
      description: "Tiilikaton maalauspinnoitus pidentää katon ikää jopa 15–20 vuotta ja suojaa tiiliä rapautumiselta.",
      warranty: "5v takuu",
      bgImage: pinnoitusBg,
      Icon: RoofTileIcon,
    },
    {
      title: "Tiilikaton puhdistus",
      href: hasSubPages ? `/katon-puhdistus-${cityData.slug}` : "/katon-puhdistus-pirkanmaa",
      description: "Mekaaninen puhdistus ja sammaleentorjuntakäsittely pitävät katon kunnossa vuosiksi eteenpäin.",
      warranty: "Ilmainen tarkastus",
      bgImage: puhdistusBg,
      Icon: RoofCleanIcon,
    },
    {
      title: "Talon maalaus",
      href: hasSubPages ? `/talon-maalaus-${cityData.slug}` : "/talon-maalaus-pirkanmaa",
      description: "Ammattitaitoinen ulkomaalaus laadukkailla materiaaleilla suojaa taloasi säältä ja kosteudelta.",
      warranty: "2v takuu",
      bgImage: maalausBg,
      Icon: PaintBrushIcon,
    },
  ];

  return (
    <div>
      <SEO
        title={areaContent.alueMetaTitle}
        description={areaContent.alueMetaDesc}
        preloadImage={heroImage}
      />

      {/* ══════════════════ HERO ══════════════════ */}
      <ServicePageHero title="" subtitle="" backgroundImage={heroImage}>
        <div className="bg-black/25 backdrop-blur-md rounded-2xl p-4 md:p-8 max-w-4xl mx-auto mb-10 md:mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 md:mb-6 font-heading">
            Tiilikaton pinnoitus ja talon maalaus {cityName}
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/85 leading-relaxed max-w-3xl mx-auto">
            Suojaa kotisi arvokkaimmat rakenteet säänvaihteluilta. Pintanen tarjoaa ammattimaiset tiilikattojen pinnoitukset, kattojen puhdistukset sekä talojen ulkomaalaukset {cityIn} ja koko Pirkanmaalla. <strong className="text-primary-foreground">Yrittäjät tekevät itse työn.</strong>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#yhteystiedot"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-accent-foreground transition-colors"
            style={{ backgroundColor: "hsl(202, 100%, 61%)" }}
          >
            Pyydä maksuton kuntotarkastus
          </a>
          <Link
            to="/maalauspalvelut-hinta-pirkanmaa"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            style={{ backgroundColor: "hsla(30, 52%, 90%, 0.15)" }}
          >
            Hintalaskuri
          </Link>
        </div>
      </ServicePageHero>

      {/* ══════════════════ TRUST STATS ══════════════════ */}
      <section className="py-12 bg-background">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {trustStats.map((stat, i) => (
              <motion.div
                key={String(stat.label)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-2xl p-5 md:p-6 text-center shadow-sm border border-border/50"
              >
                <p className="text-2xl md:text-3xl font-bold text-accent mb-1">{stat.value}</p>
                <p className="text-sm font-semibold text-foreground mb-2">{stat.label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ LOCAL HOOK ══════════════════ */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4 font-heading">
              {areaContent.alueLocalHookTitle}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              {areaContent.alueLocalHookText}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════ TESTIMONIALS ══════════════════ */}
      <TestimonialsMarquee />

      {/* ══════════════════ ONGELMANRATKAISU: KATTO ══════════════════ */}
      <section className="section-padding bg-secondary">
        <div className="section-container max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 font-heading">
              Tiilikaton ennakoiva huolto on kiinteistösi tärkein vakuutus
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Suomen sääolot vaihtelevat paljon ja vuosikymmenien aikana lumikuormat vaikuttavat betonitiilen pinnan heikkenemiseen. Tämä aiheuttaa sen, että kosteus ja sammal pääsevät vahingoittamaan kattoa <strong className="text-foreground">pakkasrapautumisen</strong> myötä. Pintasella kattotöistä vastaava yrittäjä Eerik varmistaa, että ajoissa tehty perusteellinen pesu ja ammattitason tiilikaton pinnoitus palauttavat tiilen vedenhylkivyyden ja rakenteellisen lujuuden. Tämä ennakoiva huolto on paras tapa <strong className="text-foreground">estää katon rapautuminen</strong> ja siirtää kattoremontin tarve kauas tulevaisuuteen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════ ONGELMANRATKAISU: MAALAUS ══════════════════ */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 font-heading">
              Kestävä ulkomaalaus suojaa kotisi puurakenteita
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Talon julkisivu joutuu jatkuvasti rasitukseen, ja haalistunut tai halkeileva ulkoverhous on merkki siitä, että suojakerros on pettänyt. Tämä avaa tien rakenteiden <strong className="text-foreground">kosteuselämiselle</strong> ja pysyville <strong className="text-foreground">lahovaurioille</strong>. Pintasen maalauspalveluista vastaava yrittäjä Eemil korostaa, että säännöllinen ja oikein tehty huoltomaalaus on paras tapa turvata puurakenteiden terveys. Kun urakka aloitetaan huolellisella <strong className="text-foreground">homepesulla</strong> ja viimeistellään laadukkailla maaleilla, julkisivu saa uuden suojakilven. Tämä säilyttää kotisi arvon ja estää kalliit korjaukset – kiitos yrittäjän tarkkuudesta.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════ PALVELUKORTIT ══════════════════ */}
      <section className="section-padding bg-secondary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
              Palvelut {cityGenitive} alueella
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tarjoamme laadukkaat maalaus- ja kattopalvelut {cityIn}.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={service.href}
                  className="block rounded-2xl overflow-hidden group relative h-full min-h-[320px]"
                >
                  <OptimizedImage
                    src={service.bgImage}
                    srcSet={getImageSrcSet(service.bgImage)}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/85 transition-all duration-300" />
                  <div className="relative z-10 flex flex-col justify-end h-full p-6">
                    <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                      <service.Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-sm text-white/80 mb-4">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                        {service.warranty}
                      </span>
                      <span className="flex items-center gap-1 text-white font-medium text-sm group-hover:gap-2 transition-all">
                        Lue lisää
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ PINNOITUS HINTAKORTIT ══════════════════ */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
              Paljonko maksaa tiilikaton pinnoitus {cityIn}?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Haluamme olla hinnoittelussamme täysin avoimia. Katon lopullinen hinta määräytyy pinta-alan, katon jyrkkyyden ja lähtökunnon perusteella.
            </p>
          </motion.div>

          <PricingGrid cards={pinnoitusCards} includes={pinnoitusIncludes} />

          <div className="text-center mt-10">
            <Link
              to="/tiilikaton-pinnoitus-hinta-pirkanmaa"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: "hsl(38, 60%, 65%)", color: "hsl(215, 25%, 15%)" }}
            >
              Laske hinta: tiilikaton pinnoitus {cityName}
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════ MAALAUS HINTAKORTIT ══════════════════ */}
      <section className="section-padding bg-secondary">
        <div className="section-container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
              Paljonko maksaa talon maalaus {cityIn}?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Haluamme olla hinnoittelussamme täysin avoimia. Lopullinen hinta määräytyy maalattavan pinta-alan, kohteen korkeuden ja erityisesti pohjatöiden vaativuuden perusteella.
            </p>
          </motion.div>

          <PricingGrid cards={maalausCards} includes={maalausIncludes} />

          <div className="text-center mt-10">
            <Link
              to="/talon-maalaus-hinta-pirkanmaa"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: "hsl(38, 60%, 65%)", color: "hsl(215, 25%, 15%)" }}
            >
              Laske hinta: Talon maalaus {cityName}
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════ KOTITALOUSVÄHENNYS ══════════════════ */}
      <KotitalousVahennys />

      {/* ══════════════════ RAHOITUS ══════════════════ */}
      <section className="py-10 md:py-14 bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto card-elevated p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="w-6 h-6 text-primary" />
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                Joustava rahoitus – Talon maalaus kätevästi kuukausimaksulla
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ulkoverhouksen huoltoa ei kannata lykätä säästöjä odotellessa, sillä vaurioitunut puurakenne tai ulkoverhousremontti on aina kalliimpi vaihtoehto. Kauttamme saat joustavan rahoituksen, jolla voit maksaa maalauksen sinulle sopivissa kuukausierissä. Kysy lisää arviokäynnin yhteydessä!
            </p>
            <a
              href="#yhteystiedot"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:brightness-110"
              style={{ backgroundColor: "hsl(202, 100%, 61%)" }}
            >
              Kysy tarjous
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════ YRITTÄJÄESITTELY ══════════════════ */}
      <section className="section-padding bg-secondary">
        <div className="section-container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-8 text-center font-heading">
              Kuka huolehtii kodistasi? Terveisiä meiltä yrittäjiltä
            </h2>

            <div className="flex justify-center gap-6 mb-8">
              <img
                src={eerikImage}
                alt="Eerik Pitkänen – Pintanen Oy"
                className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-primary/20"
                loading="lazy"
                decoding="async"
              />
              <img
                src={eemilImage}
                alt="Eemil Pitkänen – Pintanen Oy"
                className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-primary/20"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                "Hei! Olemme Eerik ja Eemil, Pintasen yrittäjät. Toisin kuin suurissa alan liikkeissä, te et ole meillä vain yksi tilausnumero muiden joukossa. Me emme lähetä pihallesi kokemattomia työntekijöitä. <strong className="text-foreground">Hoidamme talojen maalaukset ja tiilikattojen pinnoitukset Pirkanmaalla itse alusta loppuun saakka.</strong>
              </p>
              <p>
                Molemmilla meillä on alalta jo viiden vuoden vankka kokemus. Olemme toteuttaneet onnistuneesti yhteensä <strong className="text-foreground">yli 200 urakkaa</strong>. Eerik osaa tiilikattojen säärasitukset ja ratkaisut rapautumiseen, kun taas Eemil tietää, että kestävän julkisivun salaisuus on <strong className="text-foreground">tinkimättömästi tehdyissä pohjatöissä</strong>.
              </p>
              <p>
                Kun te tilaatte urakan meiltä, tiedätte aina tismalleen, ketkä teidän pihallanne työskentelevät ja ketkä vastaavat työn laadusta. Me olemme ylpeitä omasta työstämme, ja siksi me myönnämme tiilikattojen pinnoituksille <strong className="text-foreground">5 vuoden takuun</strong> ja talojen maalauksille <strong className="text-foreground">2 vuoden takuun</strong>."
              </p>
            </div>
            <p className="mt-4 font-semibold text-foreground">— Eerik & Eemil, Pintanen Oy</p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════ FAQ ══════════════════ */}
      <FAQSection items={areaFAQ} />

      {/* ══════════════════ YHTEYSTIEDOT ══════════════════ */}
      <TeamContactSection cityName={cityName} cityGenitive={cityGenitive} />

      {/* ══════════════════ TOIMINTA-ALUEET ══════════════════ */}
      <ToimintaAlueetBanner />
    </div>
  );
};

export default ServiceAreaPage;
