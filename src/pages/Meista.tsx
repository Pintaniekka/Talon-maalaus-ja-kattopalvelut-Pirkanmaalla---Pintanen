import { motion } from "framer-motion";
import { Check, Award, Users, Target } from "lucide-react";
import ServicePageHero from "@/components/ServicePageHero";
import ServiceContactSection from "@/components/ServiceContactSection";
import FAQSection from "@/components/FAQSection";
import { generalFAQ } from "@/data/faqData";
import SEO from "@/components/SEO";
import { getStorageUrl } from "@/lib/storage";

const pensselikuva = getStorageUrl("talon-maalaus-pensseli-header.webp");

const Meista = () => {
  const values = [
    {
      icon: Award,
      title: "Laatu",
      description: "Emme tingi laadusta. Käytämme aina parhaita materiaaleja ja teemme työt huolellisesti.",
    },
    {
      icon: Users,
      title: "Asiakaslähtöisyys",
      description: "Kuuntelemme asiakkaitamme ja räätälöimme palvelumme heidän tarpeisiinsa.",
    },
    {
      icon: Target,
      title: "Luotettavuus",
      description: "Pidämme kiinni sovituista aikatauluista ja hinnoista. Lupaamme vain sen minkä voimme pitää.",
    },
  ];

  const facts = [
    { number: "200+", label: "Tyytyväistä asiakasta" },
    { number: "yli 5", label: "Vuotta kokemusta" },
    { number: "2-5", label: "Vuotta takuuta" },
    { number: "100%", label: "Suosittelu" },
  ];

  return (
    <div>
      <SEO title="Pintanen Oy – Perheyritys katto- ja maalaustöissä" description="Pintanen on perheyritys, joka on erikoistunut katto- ja seinämaalauksiin. Teemme työt itse ja panostamme huolelliseen lopputulokseen." />
      <ServicePageHero
        title="Tutustu Pintaseen"
        subtitle="Tutustu meihin – olemme pirkanmaalainen perheyritys, joka on erikoistunut tiilikattojen pinnoitukseen ja talojen maalaukseen"
        backgroundImage={pensselikuva}
      />

      <section className="section-padding bg-background">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">Mikä ihmeen Pintanen?</h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>Pintanen on uudehko Oulusta kotoisin oleva perheyritys, jonka tekeminen nojaa vahvaan ja monipuoliseen kokemukseen. Vaikka yritys on nuori, olemme itse olleet alalla jo pitkään ja tiedämme, mikä toimii ja mikä ei. Tiedämme, mitä kestävä, siisti ja huolellisesti tehty pinta vaatii.</p>
              <p>Me olemme veljekset Eemil ja Eerik. Vuosien varrella meille molemmille on kertynyt oma vahva osaamisalueemme: Eemilin käsissä seinäpinnat saavat laadukkaan ja viimeistellyn ilmeen, kun taas Eerik on erikoistunut kattoihin – sinne, minne harvempi katsoo, mutta mikä on itseasiassa talon tärkein elementti.</p>
              <p>Kun seinäosaaminen ja katto-osaaminen yhdistyivät, syntyi Pintanen. Yritys, joka nimensä mukaisesti tuntee pinnat lattiasta kattoon. Homma hoidetaan niin, että kokonaisuus kestää katseet ja aikaa.</p>
              <p>Pintanen syntyi halusta tehdä asiat paremmin ja reilummin. Ei raskasta kulurakennetta, vaan selkeää tekemistä, suoraa puhetta ja laadukasta jälkeä. Meille tärkeintä on, että asiakas voi luottaa siihen, että homma hoituu sovitusti – ja että lopputulos näyttää siltä kuin pitääkin.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'hsl(205 70% 88%)' }}>
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">Kaksi veljestä, kaksi erikoisalaa</h2>
            <p className="text-lg text-muted-foreground mb-6">Meillä molemmilla on takanamme viiden vuoden tiivis kokemus alalta, mutta olemme erikoistuneet omiin vahvuuksiimme:</p>
            <ul className="space-y-4 text-muted-foreground text-lg list-disc list-inside">
              <li><strong className="text-foreground">Eerik</strong> on elementissään korkeuksissa. Hänen heiniään ovat tiilikattojen pinnoitukset ja huollot, joilla jatketaan kodin tärkeimmän suojan ikää vuosikymmenillä.</li>
              <li><strong className="text-foreground">Eemil</strong> on erikoistunut seinien maalaukseen ja pintakäsittelyyn. Hän huolehtii siitä, että julkisivut ja sisäpinnat saavat kestävän ja silmiä hivelevän lopputuloksen.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">Miksi valita meidät?</h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>Pintanen perustettiin, jotta asiakkaat saavat laadukasta työtä ilman turhia lisäkuluja ja ammattilaiset voivat keskittyä siihen, minkä osaavat parhaiten.</p>
              <p>Päätimme hypätä kilpailuun eri taktiikalla: Huomasimme, kuinka raskaat kulurakenteet ja byrokratia nostavat isojen maalausyritysten hintoja – ilman, että se välttämättä näkyy itse työn jäljessä. Me karsimme kaiken turhan. Teemme jokaisen askeleen kustannustehokkaasti ja itse, jolloin voimme tarjota asiakkaillemme parasta laatua edulliseen hintaan. Kun maksat Pintasen palvelusta, maksat ammattitaidosta ja laadukkaista materiaaleista, et ison organisaation hallintokuluista.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">Leikkimökeistä taloyhtiöihin</h2>
            <p className="text-lg text-muted-foreground mb-6">Meille mikään kohde ei ole liian pieni tai liian suuri. Olemme nähneet ja hoitaneet kaikkea mahdollista:</p>
            <ul className="space-y-2 text-muted-foreground text-lg list-disc list-inside mb-6">
              <li>Pienet piharakennukset ja leikkimökit</li>
              <li>Omakotitalot ja kesähuvilat</li>
              <li>Suuret taloyhtiöt</li>
            </ul>
            <p className="text-lg text-muted-foreground">Olipa kyseessä pienen pinnan ehostus tai suuren kiinteistön täysvaltainen huolto, Pintanen hoitaa homman kotiin – ammatilla, kunnialla ja sopivaan hintaan.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {facts.map((fact, index) => (
              <motion.div key={fact.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="card-elevated text-center">
                <div className="text-4xl font-bold text-primary mb-2">{fact.number}</div>
                <div className="text-sm text-muted-foreground">{fact.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">Arvomme</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Nämä periaatteet ohjaavat kaikkea tekemistämme.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="card-elevated text-center bg-card">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">Miksi valita Pintanen?</h2>
            </motion.div>
            <div className="space-y-4">
              {[
                "Yrittäjät vahvasti mukana maalauksessa",
                "Käytämme vain parhaita materiaaleja",
                "Takuu kaikille töille",
                "Ilmainen ja sitomaton arviointi",
                "Reilu ja läpinäkyvä hinnoittelu",
                "Hyvä asiakaspalvelu",
                "Nopea vastaus yhteydenottoihin",
                "Siisti työmaa – siivoamme aina jälkemme",
              ].map((item, index) => (
                <motion.div key={item} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex items-start gap-3 p-4 bg-card rounded-xl">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection items={generalFAQ} />
      <ServiceContactSection variant="general" />
    </div>
  );
};

export default Meista;
