import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Droplets, Paintbrush, Shield, Clock, BadgeCheck, MapPin } from "lucide-react";
import ServicePageHero from "@/components/ServicePageHero";
import ServiceCTA from "@/components/ServiceCTA";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import CityServices from "@/components/CityServices";
import PriceCalculator from "@/components/PriceCalculator";
import KotitalousVahennys from "@/components/KotitalousVahennys";
import ServiceContactSection from "@/components/ServiceContactSection";
import SEO from "@/components/SEO";
import { getStorageUrl, getOptimizedUrl } from "@/lib/storage";
import { getCityBySlug } from "@/data/cityData";

const kattoImage = getOptimizedUrl(getStorageUrl("Samaan_kohtaan_synkronoidut_kuvat_erikseen/Punainen kiiltava katto maalaukspinnoituksen jalkeen.webp"), 1200);

const KattopalvelutPinnoitusCity = () => {
  const { city } = useParams<{ city: string }>();
  const cityData = city ? getCityBySlug(city) : undefined;

  if (!cityData) return <Navigate to="/kattopalvelut/pinnoitus" replace />;

  const processSteps = [
    { icon: Droplets, title: "1. Pesu painepesurilla", description: "Huolellinen puhdistus painepesurilla takaa puhtaan pinna ja maalin tarttuvuuden." },
    { icon: Shield, title: "2. Tiilien tarkastus & vaihto", description: "Rikkinäiset tiilet vaihdetaan uusiin, varmistetaan katon tiiviys." },
    { icon: Paintbrush, title: "3. Torjunta-ainekäsittely", description: "Sammaleentorjunta-aine estää uuden kasvuston muodostumisen." },
    { icon: Clock, title: "4. Pohjamaalaus", description: "Laadukas pohjamaalaus varmistaa pintamaalin tarttuvuuden." },
    { icon: BadgeCheck, title: "5. Pintamaalaus", description: "Toinen kerros kestävää kattopinnoitetta antaa lopullisen suojan." },
  ];

  const benefits = [
    "Jopa 15-20 vuotta lisäikää katolle",
    "Suojaa tiiliä rapautumiselta",
    "Estää sammalen ja jäkälän kasvun",
    "Parantaa kiinteistön ulkonäköä",
    "5 vuoden takuu työlle",
  ];

  return (
    <div>
      <SEO
        title={cityData.pinnoitusMetaTitle || `Tiilikaton pinnoitus ${cityData.name}`}
        description={cityData.pinnoitusMetaDesc || `Tiilikaton maalauspinnoitus ${cityData.name} – pidentää katon ikää jopa 15-20 vuotta. 5 vuoden takuu.`}
      />
      <ServicePageHero
        title={`Tiilikaton pinnoitus – ${cityData.name}`}
        subtitle='"Eikö me sovittu, että se kiiltää?"'
        backgroundImage={kattoImage}
      />

      {/* City Intro */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Miksi tiilikaton pinnoitus?
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>{cityData.pinnoitusIntro}</p>
              <p>
                Tiilikaton maalauspinnoitus antaa katolle vedenpitävän suojan ja pidentää sen käyttöikää merkittävästi.
                Pinnoitus estää kosteuden imeytymisen tiiliin, mikä vähentää pakkasvaurioita ja rapautumista.
              </p>
              <p>
                Tiilikaton todellista kuntoa ei voi selvittää tähystämällä kaukaa. Siksi teemme aina ilmaisen
                kuntotarkastuksen paikan päällä ennen tarjouksen antamista.
              </p>
              <p className="font-medium text-foreground">
                Jos tiilikattoa ei huolla ajoissa, voi edessä olla monta kertaa kalliimpi urakka – koko katon uusiminen.
                Ota yhteyttä ja sovitaan ilmainen tarkastuskäynti!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding" style={{ backgroundColor: 'hsl(205 70% 88%)' }}>
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">5-vaiheinen pinnoitusprosessi</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Jokainen vaihe on tarkasti suunniteltu takaamaan pitkäikäinen ja kaunis lopputulos.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <motion.div key={step.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="card-elevated text-center">
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
      <section className="section-padding bg-secondary">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Miksi pinnoittaa tiilikatto?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Tiilikaton pinnoitus on edullisin tapa pidentää katon käyttöikää merkittävästi verrattuna täydelliseen katon uusimiseen.
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
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">Ennen & Jälkeen</h2>
            <p className="text-muted-foreground text-lg">Vedä liukusäädintä ja näe ero.</p>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            <BeforeAfterSlider
              beforeImage={getStorageUrl("Samaan_kohtaan_synkronoidut_kuvat_erikseen/Punainen kulunut katto ennen maalauspinnoitusta.webp")}
              afterImage={getStorageUrl("Samaan_kohtaan_synkronoidut_kuvat_erikseen/Punainen katto maalauspinnoituksen jalkeen.webp")}
              beforeAlt={`Kulunut tiilikatto ennen maalauspinnoitusta ${cityData.name}`}
              afterAlt={`Tiilikatto maalauspinnoituksen jälkeen ${cityData.name}`}
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Palvelu {cityData.name}-alueella
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">{cityData.localSection}</p>
          </motion.div>
        </div>
      </section>

      {/* Price Calculator */}
      <section id="hintalaskuri" className="section-padding bg-secondary">
        <div className="section-container">
          <PriceCalculator />
        </div>
      </section>

      <CityServices cityName={cityData.name} citySlug={city!} />
      <ServiceContactSection variant="katto" cityName={cityData.name} />
      <KotitalousVahennys />
      <ServiceCTA />
    </div>
  );
};

export default KattopalvelutPinnoitusCity;
