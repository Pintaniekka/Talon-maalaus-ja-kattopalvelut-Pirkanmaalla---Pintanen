import { motion } from "framer-motion";
import { ArrowRight, Check, Droplets } from "lucide-react";
import { Link } from "react-router-dom";
import { getStorageUrl } from "@/lib/storage";
import BeforeAfterSlider from "./BeforeAfterSlider";
import OptimizedImage from "./OptimizedImage";

interface CityServicesProps {
  cityName: string;
  citySlug: string;
}

const CityServices = ({ cityName, citySlug }: CityServicesProps) => {
  const services = [
    {
      title: "Tiilikaton pinnoitus",
      href: `/kattopalvelut/pinnoitus/${citySlug}`,
      beforeImage: getStorageUrl("Samaan_kohtaan_synkronoidut_kuvat_erikseen/Punainen liakainen katto ennen maalauspinnoitusta.webp"),
      afterImage: getStorageUrl("Samaan_kohtaan_synkronoidut_kuvat_erikseen/Punainen kiiltava katto maalaukspinnoituksen jalkeen.webp"),
      description: "Vanha tiilikatto uuteen loistoon. Puhdistamme sammaleen, suojaamme tiilen ja maalaamme pinnan kestäväksi.",
      features: ["Sammaleenpuhdistus", "Suojakäsittely", "Pinnoitus"],
      warranty: "5v takuu",
    },
    {
      title: "Ulkomaalaus",
      href: `/talon-maalaus/${citySlug}`,
      beforeImage: getStorageUrl("Samaan_kohtaan_synkronoidut_kuvat_erikseen/Keltainen seina ennen maalausta.webp"),
      afterImage: getStorageUrl("Samaan_kohtaan_synkronoidut_kuvat_erikseen/Keltainen seina maalauksen jalkeen.webp"),
      description: "Huolelliset pohjatyöt ja laadukas maalipinta suojaavat taloasi vuosiksi eteenpäin.",
      features: ["Pohjatyöt", "Laadukkaat maalit", "Siisti työnjälki"],
      warranty: "2v takuu",
    },
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
            Palvelut {cityName} alueella
          </h2>
          <p className="text-muted-foreground text-lg">
            Ammattitaitoinen maalari edullisesti. Yli 200 tyytyväistä asiakasta.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Link to={service.href} className="card-elevated group block hover:bg-muted/50 transition-colors duration-300">
                <div className="mb-6">
                  <BeforeAfterSlider
                    beforeImage={service.beforeImage}
                    afterImage={service.afterImage}
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-heading">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-foreground">
                      <Check className="w-4 h-4 text-accent" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
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

        {/* Roof Cleaning Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 max-w-4xl mx-auto"
        >
          <Link
            to={`/kattopalvelut/puhdistus/${citySlug}`}
            className="block rounded-2xl overflow-hidden relative group"
          >
            <OptimizedImage
              src={getStorageUrl("Muut_referenssit/Puhdistuksen jalkeen.webp")}
              alt="Puhdistettu tiilikatto"
              className="absolute inset-0 w-full h-full object-cover"
              width={800}
              height={400}
              sizes="(max-width: 640px) 90vw, 800px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 group-hover:from-black/75 transition-all duration-300" />
            <div className="relative flex items-center gap-4 p-6 md:p-8">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-white font-heading">Tarvitseeko kattosi vain puhdistuksen?</h4>
                <p className="text-white/80 text-sm">Mekaaninen puhdistus ja kasvuston torjuntakäsittely pidentävät kattosi ikää.</p>
              </div>
              <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CityServices;
