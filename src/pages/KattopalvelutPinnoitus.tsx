import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import ServicePageHero from "@/components/ServicePageHero";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ProcessAccordion from "@/components/ProcessAccordion";
import KotitalousVahennys from "@/components/KotitalousVahennys";
import ServiceContactSection from "@/components/ServiceContactSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import ToimintaAlueetBanner from "@/components/ToimintaAlueetBanner";
import ServiceCTA from "@/components/ServiceCTA";
import { pinnoitusFAQ } from "@/data/faqData";
import SEO from "@/components/SEO";
import { getStorageUrl } from "@/lib/storage";

const kattoImage = getStorageUrl("Muut_referenssit/punainen-tiilikatto-maalaus-jalkeen-tampere.webp");

/* ── Trust-box data ── */
const trustStats = [
  { value: "4,9 / 5", label: "Google-arvostelut", sub: "Pirkanmaan tyytyväisimmät asiakkaat." },
  { value: "Yli 100", label: "Pinnoitettua kattoa", sub: "Olen tehnyt jokaisen urakan henkilökohtaisesti." },
  { value: "+5 vuotta", label: "Kokemusta alalta", sub: "Tiedän, miten suomalainen tiilikatto saadaan kestämään." },
  { value: "5 vuotta", label: "Takuu työlle", sub: "Seison yrittäjänä oman jäljen takana." },
];

/* ── Pricing table ── */
const priceRows = [
  { size: "150–180 m²", duration: "2 työpäivää", content: "Pesu, suoja-aine, 2× pinnoitus", price: "2 850 € – 3 200 €", real: "n. 2 150 € – 2 400 €" },
  { size: "190–240 m²", duration: "2–3 työpäivää", content: "Pesu, suoja-aine, 2× pinnoitus", price: "3 300 € – 3 700 €", real: "n. 2 480 € – 2 760 €" },
  { size: "250–300 m²", duration: "2–4 työpäivää", content: "Pesu, suoja-aine, 2× pinnoitus", price: "3 750 € – 4 880 €", real: "n. 2 800 € – 3 600 €" },
];

/* ── Warning signs ── */
const warningSigns = [
  { sign: "Väri on haalistunut", desc: "Suojapinta on kulunut pois ja tiili on altis sään vaihteluille." },
  { sign: "Sammal kasvaa nopeasti", desc: "Sammal saa otteen vain huokoisesta ja kuluneesta pinnasta." },
  { sign: "Tiiliä halkeilee", desc: "Merkki siitä, että vesi on jo päässyt rakenteen sisään ja jäätynyt." },
  { sign: 'Katto on "karhea"', desc: "Tiilen pinta tuntuu hiekkapaperilta, mikä tarkoittaa, että se imee vettä." },
];

const KattopalvelutPinnoitus = () => {
  return (
    <div>
      <SEO
        title="Tiilikaton pinnoitus Pirkanmaa & Tampere | 5v takuu"
        description="Tiilikaton pinnoitus Pirkanmaalla. Säästä jopa 80 % vs. kattoremontti! Hyödynnä kotitalousvähennys ja tilaa ilmainen kuntoarvio. 5 vuoden takuu työlle."
      />

      {/* ═══ HERO ═══ */}
      <ServicePageHero
        title="Tiilikaton pinnoitus Pirkanmaa"
        subtitle="Pysäytä katon rapautuminen ennen kuin on liian myöhäistä"
        backgroundImage={kattoImage}
      >
        <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg mb-8">
          Laadukas tiilikaton pinnoitus Pirkanmaalla säästää sinut kalliilta kattoremontilta. Pintasen ammattimainen pesu ja pinnoitus palauttavat katon loiston ja antavat sille jopa 10–15 vuotta lisäaikaa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#yhteystiedot"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-accent-foreground transition-colors"
            style={{ backgroundColor: "hsl(202, 100%, 61%)" }}
          >
            Pyydä maksuton kuntotarkastus
          </a>
          <Link
            to="/hinnat/tiilikaton-pinnoitus"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            style={{ backgroundColor: "hsla(30, 52%, 90%, 0.15)" }}
          >
            Hintalaskuri
          </Link>
        </div>
      </ServicePageHero>

      {/* ═══ TRUST BOXES ═══ */}
      <section className="py-12 bg-background">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {trustStats.map((stat, i) => (
              <motion.div
                key={stat.label}
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

      {/* ═══ TESTIMONIALS ═══ */}
      <TestimonialsMarquee />

      {/* ═══ SPLIT SCREEN: Problem + Before/After ═══ */}
      <section className="section-padding bg-accent-light">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
              Miksi tiilikaton huolto ja pinnoitus on elintärkeää juuri nyt?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Monen pirkanmaalaisen kodin tiilikatto näyttää ulkoisesti hyvältä, vaikka se olisi jo menettänyt suojakykynsä. Tiilen alkuperäinen tehdaspinnoite kuluu pois, ja tiilestä tulee kuin kuiva pesusieni. Tämä on merkki siitä, että katto tarvitsee huoltoa ja pinnoitusta.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
            {/* Left: Before/After slider (sticky on desktop) */}
            <div className="lg:sticky lg:top-28">
              <BeforeAfterSlider
                beforeImage={getStorageUrl("Muut_referenssit/punainen-tiilikatto-maalaus-ennen-valkeakoski.webp")}
                afterImage={getStorageUrl("Muut_referenssit/punainen-tiilikatto-maalaus-jalkeen-valkeakoski.webp")}
                beforeAlt="Kulunut punainen tiilikatto ennen huoltomaalausta"
                afterAlt="Huoltomaalattu punainen tiilikatto pinnoituksen jälkeen"
              />
            </div>

            {/* Right: Informational text */}
            <div className="space-y-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  Pysäytä katon pakkasrapautuminen ajoissa
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Suomen talvessa tiili kokee kymmeniä jäätymis-sulamissyklejä. Vesi, joka imeytyy huokoisen tiilen sisään, jäätyy ja laajenee, murentaen tiiltä sisältäpäin. Tämä pakkasrapautuminen johtaa vääjäämättä tiilien halkeiluun ja lopulta kalliiseen kattoremonttiin, jos vettä pääsee aluskatteelle ja talon rakenteisiin.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  Sammaleen poisto on vain puolet ratkaisusta
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sammal ja jäkälä eivät ole vain ulkonäköhaitta. Ne tunkevat juurensa saumakohtiin ja pitävät katon jatkuvasti märkänä. Pelkkä pesu poistaa näkyvän lian, mutta vain ammattimainen tiilikaton pinnoitus sulkee tiilen huokoset. Se luo katollesi vettä hylkivän ja likaa hylkivän suojakilven, joka kestää vuosia.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-accent" />
                  Huomaatko nämä merkit katollasi? Silloin pinnoituksella on kiire:
                </h4>
                <ul className="space-y-3">
                  {warningSigns.map((w) => (
                    <li key={w.sign} className="flex items-start gap-3">
                      <span className="mt-1 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">{w.sign}:</strong> {w.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <a
                href="#yhteystiedot"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-accent-foreground transition-colors"
                style={{ backgroundColor: "hsl(202, 100%, 61%)" }}
              >
                Pyydä maksuton kuntotarkastus
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ACCORDION ═══ */}
      <ProcessAccordion />

      {/* ═══ COMPARISON: Pinnoitus vs. kattoremontti ═══ */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6 text-center">
              Tiilikaton pinnoitus vai kokonaan uusi kattoremontti?
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Tämä on yleisin kysymys, jota asiakkaamme pohtivat. Nyrkkisääntö on selkeä: jos katon aluskate ja puurakenteet ovat kunnossa, kattoremontti on usein täysin turha ja ylimitoitettu investointi.
              </p>
              <p>
                Tiilikaton pinnoitus on ekologinen ja kustannustehokas vaihtoehto, joka maksaa vain noin 10–20 % uuden katon hinnasta. Kun pinnoitus tehdään ajoissa (noin 10–15 vuoden iässä tai kun vanha pinnoite on kulunut), säästät kymmeniä tuhansia euroja ja vältät raskaan rakennusprojektin pihan mylläyksineen.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ PRICING TABLE ═══ */}
      <section className="section-padding bg-secondary">
        <div className="section-container max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
              Paljonko maksaa tiilikaton pinnoitus Pirkanmaalla?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Haluamme olla hinnoittelussamme täysin avoimia. Katon lopullinen hinta määräytyy pinta-alan, katon jyrkkyyden ja lähtökunnon perusteella.
            </p>
          </motion.div>

          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full bg-card rounded-2xl overflow-hidden shadow-sm border border-border/50">
              <thead>
                <tr className="bg-accent/10">
                  <th className="px-5 py-4 text-left text-sm font-semibold text-foreground">Katon koko (m²)</th>
                  <th className="px-5 py-4 text-left text-sm font-semibold text-foreground">Arvioitu kesto</th>
                  <th className="px-5 py-4 text-left text-sm font-semibold text-foreground">Palvelun sisältö</th>
                  <th className="px-5 py-4 text-left text-sm font-semibold text-foreground">Hinta-arvio</th>
                  <th className="px-5 py-4 text-left text-sm font-semibold text-accent">Todellinen hinta (kotitalousvähennys)</th>
                </tr>
              </thead>
              <tbody>
                {priceRows.map((row, i) => (
                  <tr key={i} className="border-t border-border/30">
                    <td className="px-5 py-4 text-foreground font-medium">{row.size}</td>
                    <td className="px-5 py-4 text-muted-foreground">{row.duration}</td>
                    <td className="px-5 py-4 text-muted-foreground">{row.content}</td>
                    <td className="px-5 py-4 text-foreground font-semibold">{row.price}</td>
                    <td className="px-5 py-4 text-accent font-bold">{row.real}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {priceRows.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-2xl p-5 shadow-sm border border-border/50"
              >
                <p className="text-lg font-bold text-foreground mb-1">{row.size}</p>
                <p className="text-sm text-muted-foreground mb-2">{row.duration} · {row.content}</p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs text-muted-foreground">Hinta-arvio</p>
                    <p className="text-foreground font-semibold">{row.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Kotitalousvähennyksellä</p>
                    <p className="text-accent font-bold">{row.real}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Financing note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 bg-card rounded-2xl p-6 border border-border/50 shadow-sm max-w-3xl mx-auto"
          >
            <h3 className="text-lg font-bold text-foreground mb-2">
              Joustava rahoitus – Katon pinnoitus kätevästi kuukausimaksulla
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Katon huoltoa ei kannata lykätä säästöjä odotellessa, sillä vesivahinko tai kattoremontti on aina kalliimpi vaihtoehto. Kauttamme saat joustavan rahoituksen, jolla voit maksaa pinnoituksen sinulle sopivissa kuukausierissä. Kysy lisää arviokäynnin yhteydessä!
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ KOTITALOUSVÄHENNYS ═══ */}
      <KotitalousVahennys />

      <div className="py-8 bg-background text-center">
        <Link
          to="/hinnat/tiilikaton-pinnoitus"
          className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold transition-colors"
          style={{ backgroundColor: "hsl(30, 52%, 90%)", color: "hsl(215, 25%, 15%)" }}
        >
          Laske hinta: katon pinnoitus Pirkanmaa
        </Link>
      </div>

      {/* ═══ ENTREPRENEUR / EERIK ═══ */}
      <section className="section-padding bg-secondary">
        <div className="section-container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent">Kuka katollasi kiipeää? Terveiset yrittäjältä</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-6 md:p-10 shadow-sm border border-border/50"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <img
                src={getStorageUrl("Pictures-200/Eerik-kattomaalari-200.webp")}
                alt="Eerik Pitkänen – Pintanen Oy yrittäjä"
                className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                loading="lazy"
                decoding="async"
                width={96}
                height={96}
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed text-center md:text-left">
                <p>
                  "Moi, olen Eerik, ja olen perustanut oman yrityksen, Pintasen. Isojen yritysten tavoin, meillä et ole vain yksi tilausnumero muiden joukossa. Hoidan tiilikattojen pinnoitukset Pirkanmaalla henkilökohtaisesti alusta loppuun.
                </p>
                <p>
                  Olen tehnyt töitä alalla jo viiden vuoden ajan, ja olen onnistuneesti suorittanut yli 100 urakkaa. Tiedän, miten pirkanmaalaiset katot kestävät vaihtelevia sääolosuhteita.
                </p>
                <p>
                  Kun tilaat pinnoituksen minulta, tiedät aina, kuka työskentelee pihallasi ja kuka vastaa työn laadusta. Tästä syystä voin antaa työlleni 5 vuoden takuun, ja olen siitä ylpeä."
                </p>
                <p className="font-semibold text-foreground">– Eerik, Pintanen Oy</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <FAQSection items={pinnoitusFAQ} />

      {/* ═══ CONTACT ═══ */}
      <ServiceContactSection variant="katto" />

      {/* ═══ LOCAL SEO / TOIMINTA-ALUEET ═══ */}
      <section className="section-padding bg-background">
        <div className="section-container text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Palvelemme joustavasti koko Pirkanmaan alueella
          </h2>
        </div>
        <ToimintaAlueetBanner />
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <ServiceCTA
        title="Kiinnostuitko?"
        subtitle="Pyydä ilmainen kuntotarkastus tai soita – vastaamme mielellämme kaikkiin kysymyksiisi."
      />
    </div>
  );
};

export default KattopalvelutPinnoitus;
