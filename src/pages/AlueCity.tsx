import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Users, Award, Clock, ChevronRight } from "lucide-react";
import ServicePageHero from "@/components/ServicePageHero";
import ServiceCTA from "@/components/ServiceCTA";
import TeamContactSection from "@/components/TeamContactSection";
import SEO from "@/components/SEO";
import OptimizedImage from "@/components/OptimizedImage";
import { RoofTileIcon, RoofCleanIcon, PaintBrushIcon } from "@/components/ServiceIcons";
import { getStorageUrl, getOptimizedUrl } from "@/lib/storage";
import { getCityBySlug, cityHasServicePages } from "@/data/cityData";

const heroImage = getOptimizedUrl(getStorageUrl("Samaan_kohtaan_synkronoidut_kuvat_erikseen/Harmaa seina varinvaihdon jalkeen.webp"), 1200);

const pinnoitusBg = getStorageUrl("Samaan_kohtaan_synkronoidut_kuvat_erikseen/Punainen kiiltava katto maalaukspinnoituksen jalkeen.webp");
const puhdistusBg = getStorageUrl("Muut_referenssit/Puhdistuksen jalkeen.webp");
const maalausBg = getStorageUrl("Samaan_kohtaan_synkronoidut_kuvat_erikseen/Violetti talo varin vaihdon jalkeen.webp");

const AlueCity = () => {
  const { city } = useParams<{ city: string }>();
  const cityData = city ? getCityBySlug(city) : undefined;

  if (!cityData) return <Navigate to="/toiminta-alueet" replace />;

  const hasSubPages = cityHasServicePages(cityData);

  const services = [
    {
      title: `Tiilikaton pinnoitus`,
      href: hasSubPages ? `/kattopalvelut/pinnoitus/${cityData.slug}` : '/kattopalvelut/pinnoitus',
      description: "Tiilikaton maalauspinnoitus pidentää katon ikää jopa 15–20 vuotta ja suojaa tiiliä rapautumiselta.",
      warranty: "5v takuu",
      bgImage: pinnoitusBg,
      Icon: RoofTileIcon,
    },
    {
      title: `Tiilikaton puhdistus`,
      href: hasSubPages ? `/kattopalvelut/puhdistus/${cityData.slug}` : '/kattopalvelut/puhdistus',
      description: "Mekaaninen puhdistus ja sammaleentorjuntakäsittely pitävät katon kunnossa vuosiksi eteenpäin.",
      warranty: "Ilmainen tarkastus",
      bgImage: puhdistusBg,
      Icon: RoofCleanIcon,
    },
    {
      title: `Talon maalaus`,
      href: hasSubPages ? `/talon-maalaus/${cityData.slug}` : '/talon-maalaus',
      description: "Ammattitaitoinen ulkomaalaus laadukkailla materiaaleilla suojaa taloasi säältä ja kosteudelta.",
      warranty: "2v takuu",
      bgImage: maalausBg,
      Icon: PaintBrushIcon,
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

      {/* Aluekohtainen intro */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-3xl mx-auto">
          {cityData.alueIntro.split('\n\n').map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-muted-foreground leading-relaxed mb-4 last:mb-0"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </section>

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
                  className="block rounded-2xl overflow-hidden group relative h-full min-h-[320px]"
                >
                  {/* Background image */}
                  <OptimizedImage
                    src={service.bgImage}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    width={500}
                    height={400}
                    transformWidth={500}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/85 transition-all duration-300" />

                  {/* Content overlay */}
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

      <TeamContactSection cityName={cityData.name} />
      <ServiceCTA />
    </div>
  );
};

export default AlueCity;
