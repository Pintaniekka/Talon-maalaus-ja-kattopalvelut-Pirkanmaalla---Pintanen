import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getStorageUrl, getImageSrcSet } from "@/lib/storage";
import BeforeAfterSlider from "./BeforeAfterSlider";
import OptimizedImage from "./OptimizedImage";
import { RoofTileIcon, RoofCleanIcon, PaintBrushIcon } from "./ServiceIcons";

const services = [
  {
    title: "Tiilikaton pinnoitus",
    href: "/kattopalvelut/pinnoitus",
    beforeImage: getStorageUrl("Muut_referenssit/punainen-tiilikatto-maalaus-ennen-valkeakoski.webp"),
    afterImage: getStorageUrl("Muut_referenssit/punainen-tiilikatto-maalaus-jalkeen-valkeakoski.webp"),
    description: "Vanha tiilikatto uuteen uskoon. Katto pestään ja päälle tulee 2-kerroksinen pinnoite.",
    features: ["Sammaleenpuhdistus", "Suojakäsittely", "Pinnoitus"],
    warranty: "5v takuu",
    icon: RoofTileIcon,
    colorClass: "bg-accent text-white",
  },
  {
    title: "Ulkomaalaus",
    href: "/talon-maalaus",
    beforeImage: getStorageUrl("Muut_referenssit/keltainen-talo-maalaus-varinvaihto-ennen-tampere.webp"),
    afterImage: getStorageUrl("Muut_referenssit/violetti-talo-maalaus-varinvaihto-jalkeen-tampere.webp"),
    description: "Huolelliset pohjatyöt ja laadukas maalipinta suojaavat taloasi vuosiksi eteenpäin.",
    features: ["Pohjatyöt", "Laadukkaat maalit", "Siisti työnjälki"],
    warranty: "2v takuu",
    icon: PaintBrushIcon,
    colorClass: "bg-accent text-white",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="palvelut" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="heading-style text-3xl md:text-4xl text-accent mb-4">Palvelumme</h2>
          <p className="text-muted-foreground text-lg">Ammattitaitoinen maalari sopuhintaan. Yli 200 tyytyväistä asiakasta.</p>
        </motion.div>

        {/* Services Grid - 2 columns */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }}>
                <div
                  role="link"
                  tabIndex={0}
                  onClick={() => navigate(service.href)}
                  onKeyDown={(e) => { if (e.key === 'Enter') navigate(service.href); }}
                  className={`card-elevated group block transition-colors duration-300 cursor-pointer ${service.colorClass}`}
                >
                  {/* Before/After Slider */}
                  <div className="mb-6">
                    <BeforeAfterSlider beforeImage={service.beforeImage} afterImage={service.afterImage} />
                  </div>

                  {/* Content */}
                  <div className="flex items-center gap-2 mb-3">
                    <IconComponent className="w-6 h-6 text-white flex-shrink-0" />
                    <h3 className="text-xl font-bold text-white font-heading">{service.title}</h3>
                  </div>
                  <p className="text-white/80 mb-6">{service.description}</p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map(feature => (
                      <li key={feature} className="flex items-center gap-2 text-white">
                        <Check className="w-4 h-4 text-white" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Warranty Badge */}
                  <div className="flex items-center justify-between">
                    <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">{service.warranty}</span>
                    <span className="flex items-center gap-1 text-white font-medium text-sm group-hover:gap-2 transition-all">
                      Lue lisää
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Roof Cleaning Banner */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 max-w-4xl mx-auto">
          <div
            role="link"
            tabIndex={0}
            onClick={() => navigate("/kattopalvelut/puhdistus")}
            onKeyDown={(e) => { if (e.key === 'Enter') navigate("/kattopalvelut/puhdistus"); }}
            className="block rounded-2xl overflow-hidden relative group cursor-pointer"
          >
            <OptimizedImage
              src={getStorageUrl("Muut_referenssit/katto-jalkeen-mekaaninen-puhdistus-sastamala.webp")}
              srcSet={getImageSrcSet(getStorageUrl("Muut_referenssit/katto-jalkeen-mekaaninen-puhdistus-sastamala.webp"))}
              alt="Mekaanisesti puhdistettu tiilikatto käsittelyn jälkeen Sastamalassa"
              className="absolute inset-0 w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 group-hover:from-black/75 transition-all duration-300" />
            <div className="relative flex items-center gap-4 p-6 md:p-8">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <RoofCleanIcon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white font-heading text-base">Katon puhdistus</h3>
                <p className="text-white/80 text-sm">Mekaaninen puhdistus ja kasvuston torjuntakäsittely pidentävät kattosi ikää.</p>
              </div>
              <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
export default Services;
