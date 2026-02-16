import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, MapPin, ArrowRight, Users, Award, Clock, Shield } from "lucide-react";
import ServicePageHero from "@/components/ServicePageHero";
import ServiceCTA from "@/components/ServiceCTA";
import SEO from "@/components/SEO";
import { getStorageUrl, getOptimizedUrl } from "@/lib/storage";
import { getCityBySlug } from "@/data/cityData";

const heroImage = getOptimizedUrl(getStorageUrl("Samaan_kohtaan_synkronoidut_kuvat_erikseen/Harmaa seina varinvaihdon jalkeen.webp"), 1200);

const AlueCity = () => {
  const { city } = useParams<{ city: string }>();
  const cityData = city ? getCityBySlug(city) : undefined;

  if (!cityData) return <Navigate to="/toiminta-alueet" replace />;

  const services = [
    {
      title: `Tiilikaton pinnoitus – ${cityData.name}`,
      href: `/kattopalvelut/pinnoitus/${cityData.slug}`,
      description: "Tiilikaton maalauspinnoitus pidentää katon ikää jopa 15–20 vuotta ja suojaa tiiliä rapautumiselta.",
      warranty: "5v takuu",
    },
    {
      title: `Tiilikaton puhdistus – ${cityData.name}`,
      href: `/kattopalvelut/puhdistus/${cityData.slug}`,
      description: "Mekaaninen puhdistus ja sammaleentorjuntakäsittely pitävät katon kunnossa vuosiksi eteenpäin.",
      warranty: "Ilmainen tarkastus",
    },
    {
      title: `Talon maalaus – ${cityData.name}`,
      href: `/talon-maalaus/${cityData.slug}`,
      description: "Ammattitaitoinen ulkomaalaus laadukkailla materiaaleilla suojaa taloasi säältä ja kosteudelta.",
      warranty: "2v takuu",
    },
  ];

  const whyChoose = [
    {
      icon: MapPin,
      title: "Kotimainen ja paikallinen toimija",
      description: `Olemme suomalainen yritys ja toimimme aktiivisesti ${cityData.name}-alueella ja lähikunnissa.`,
    },
    {
      icon: Users,
      title: "Yrittäjät tekevät työn itse",
      description: "Yrittäjät ovat itse työmaalla tekemässä työn alusta loppuun. Emme myy urakoita eteenpäin.",
    },
    {
      icon: Award,
      title: "Vahva kokemus",
      description: "Laaja kokemus tiilikattojen pinnoituksista, katon puhdistuksista ja ulkomaalauksista.",
    },
    {
      icon: Clock,
      title: "Nopea vaste",
      description: "Reagoimme nopeasti ja pidämme kiinni sovituista aikatauluista.",
    },
  ];

  return (
    <div>
      <SEO
        title={`Palvelut – ${cityData.name}`}
        description={`Maalaus- ja kattopalvelut ${cityData.name} – tiilikaton pinnoitus, katon puhdistus ja talon maalaus ammattitaidolla. Pintanen Oy.`}
      />
      <ServicePageHero
        title={`Maalaus- ja kattopalvelut – ${cityData.name}`}
        subtitle={`Ammattitaitoiset maalaus- ja kattopalvelut ${cityData.name}-alueella. Ota yhteyttä ja pyydä ilmainen arvio.`}
        backgroundImage={heroImage}
      />

      {/* Palvelut kaupunki-alueella */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Palvelut {cityData.name}-alueella
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tarjoamme kattavat maalaus- ja kattopalvelut {cityData.name}-alueella.
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
                  className="card-elevated group block hover:bg-muted/50 transition-colors duration-300 h-full"
                >
                  <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{service.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="feature-badge">{service.warranty}</span>
                    <span className="flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
                      Lue lisää
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Miksi valita Pintanen */}
      <section className="section-padding bg-secondary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Miksi valita Pintanen {cityData.name}-alueella?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChoose.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated bg-card"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA />
    </div>
  );
};

export default AlueCity;
