import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Paintbrush, Shield, Clock, BadgeCheck, Home, Sun, MapPin } from "lucide-react";
import ServicePageHero from "@/components/ServicePageHero";
import ServiceCTA from "@/components/ServiceCTA";
import KotitalousVahennys from "@/components/KotitalousVahennys";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import CityServices from "@/components/CityServices";
import ServiceContactSection from "@/components/ServiceContactSection";
import FAQSection from "@/components/FAQSection";
import { getMaalausCityFAQ } from "@/data/faqData";
import SEO from "@/components/SEO";
import { getStorageUrl } from "@/lib/storage";
import { getCityBySlug } from "@/data/cityData";

const heroImage = getStorageUrl("Muut_referenssit/talon-maalaus-ylojarvi-header.webp");

const TalonMaalausCity = () => {
  const { city } = useParams<{ city: string }>();
  const cityData = city ? getCityBySlug(city) : undefined;

  if (!cityData) return <Navigate to="/talon-maalaus" replace />;

  const processSteps = [
    { icon: Home, title: "Kunnon arviointi", description: "Arvioimme talon pintojen kunnon ja annamme pitävän tarjouksen." },
    { icon: Shield, title: "Pohjatyöt", description: "Märkähomepesu, kaapiminen ja tarvittavat paikkaukset." },
    { icon: Paintbrush, title: "Pohjamaalaus", description: "Laadukas pohjamaalaus paljaisiin puuosiin varmistaa pintamaalin tarttuvuuden." },
    { icon: Sun, title: "Pintamaalaus", description: "Laadukas kerros kestävää ulkomaalia suojaamaan pintoja." },
    { icon: BadgeCheck, title: "Tarkastus", description: "Huolellinen lopputarkastus ja dokumentointi." },
  ];

  const benefits = [
    "Huolelliset pohjatyöt (märkähomepesu aina)",
    "Laadukkaat maalit ja materiaalit",
    "Tarkka työnjälki",
    "Työmaa jätetään siistiin kuntoon",
    "Vankka kokemus",
    "2 vuoden takuu työlle",
  ];

  const services = [
    { name: "Puutalon ulkomaalaus", description: "Lautaverhoilut, hirsi- ja paneelipinnat" },
    { name: "Terassien ja kuistien maalaus ja öljyäminen", description: "Kuistit ja terassit" },
    { name: "Sokkeleiden maalaus", description: "Sokkeleiden pinnoitus ja maalaus" },
  ];

  return (
    <div>
      <SEO
        title={cityData.maalausMetaTitle || `Talon maalaus ${cityData.name}`}
        description={cityData.maalausMetaDesc || `Ammattitaitoinen ulkomaalaus ${cityData.name} laadukkailla materiaaleilla. 2 vuoden takuu.`}
      />
      <ServicePageHero
        title={`Talon maalaus – ${cityData.name}`}
        subtitle="Ammattitaitoinen ulkomaalaus laadukkailla materiaaleilla – 2 vuoden takuu"
        backgroundImage={heroImage}
      />

      {/* City Intro */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto space-y-6 text-foreground text-base md:text-lg leading-relaxed">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-2 text-center">
              Miksi maalata talo?
            </h2>
            <p>{cityData.maalausIntro}</p>
            <p>
              Talo kannattaa maalata noin 10 vuoden välein tai kun alat huomaamaan seinässä epäkohtia kuten hilseilevää maalia tai homepilkkuja.
            </p>
            <p>
              Maalipinta toimii ennen kaikkea puuverhouksen suojana säältä ja kosteudelta. Kun maalaus tehdään ajoissa ja ammattitaidolla, lopputulos näkyy sekä rakenteiden kestävyydessä että kiinteistön arvossa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-accent-light">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">Maalauspalvelumme</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tarjoamme kattavat ulkomaalauspalvelut kaikenlaisiin taloihin.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <motion.div key={service.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="card-elevated">
                <h3 className="font-bold text-foreground mb-2">{service.name}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-secondary">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">Työprosessimme</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Huolellinen työ takaa kestävän lopputuloksen.</p>
          </motion.div>
          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <motion.div key={step.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="card-elevated text-center bg-card">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">Miksi valita Pintanen?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Olemme erikoistuneet ulkomaalaukseen ja tiedämme, mitä laadukas työ vaatii.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li key={benefit} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-primary/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Pyydä ilmainen arvio</h3>
              <p className="text-muted-foreground mb-6">
                Tulemme mielellämme arvioimaan maalaustyön laajuuden ja antamaan tarjouksen. Arvio on aina maksuton.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Arvio 1-3 arkipäivän sisällä</span>
                </div>
                <div className="flex items-center gap-3">
                  <BadgeCheck className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Sitomaton tarjous</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 font-heading">Ennen & Jälkeen</h2>
            <p className="text-muted-foreground text-lg">Vedä liukusäädintä ja näe ero.</p>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            <BeforeAfterSlider
              beforeImage={getStorageUrl("Muut_referenssit/keltainen-talo-maalaus-varinvaihto-ennen-tampere.webp")}
              afterImage={getStorageUrl("Muut_referenssit/violetti-talo-maalaus-varinvaihto-jalkeen-tampere.webp")}
              beforeAlt={`Puutalo ennen värinvaihtoa ${cityData.name}`}
              afterAlt={`Omakotitalo värinvaihdon jälkeen ${cityData.name}`}
            />
          </div>
        </div>
      </section>

      {/* Local Section */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-accent">
                Palvelu {cityData.name}-alueella
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">{cityData.localSection}</p>
          </motion.div>
        </div>
      </section>

      <FAQSection items={getMaalausCityFAQ(cityData.name)} />
      <CityServices cityName={cityData.name} citySlug={city!} />
      <ServiceContactSection variant="maalaus" cityName={cityData.name} />
      <KotitalousVahennys />
      <ServiceCTA />
    </div>
  );
};

export default TalonMaalausCity;
