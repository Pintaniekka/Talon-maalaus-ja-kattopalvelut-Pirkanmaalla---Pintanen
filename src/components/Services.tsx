import { motion } from "framer-motion";
import { ArrowRight, Check, Droplets } from "lucide-react";
import { Link } from "react-router-dom";
import { getStorageUrl } from "@/lib/storage";
import BeforeAfterSlider from "./BeforeAfterSlider";

const services = [{
  title: "Tiilikaton pinnoitus",
  beforeImage: getStorageUrl("Samaan_kohtaan_synkronoidut_kuvat_erikseen/Punainen liakainen katto ennen maalauspinnoitusta.webp"),
  afterImage: getStorageUrl("Samaan_kohtaan_synkronoidut_kuvat_erikseen/Punainen kiiltava katto maalaukspinnoituksen jalkeen.webp"),
  description: "Vanha tiilikatto uuteen loistoon. Puhdistamme sammaleen, suojaamme tiilen ja maalaamme pinnan kestäväksi.",
  features: ["Sammaleenpuhdistus", "Suojakäsittely", "Pinnoitus"],
  warranty: "5v takuu",
}, {
  title: "Ulkomaalaus",
  beforeImage: getStorageUrl("Samaan_kohtaan_synkronoidut_kuvat_erikseen/Keltainen seina ennen maalausta.webp"),
  afterImage: getStorageUrl("Samaan_kohtaan_synkronoidut_kuvat_erikseen/Keltainen seina maalauksen jalkeen.webp"),
  description: "Huolelliset pohjatyöt ja laadukas maalipinta suojaavat taloasi vuosiksi eteenpäin.",
  features: ["Pohjatyöt", "Laadukkaat maalit", "Siisti työnjälki"],
  warranty: "2v takuu",
}];

const Services = () => {
  return <section id="palvelut" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">Palvelumme</h2>
          <p className="text-muted-foreground text-lg">Ammattitaitoinen maalari edullisesti. Yli 200 tyytyväistä asiakasta.</p>
        </motion.div>

        {/* Services Grid - 2 columns */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => <motion.div key={service.title} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.15
        }} className="card-elevated group">
              {/* Before/After Slider */}
              <div className="mb-6">
                <BeforeAfterSlider
                  beforeImage={service.beforeImage}
                  afterImage={service.afterImage}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 font-heading">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map(feature => <li key={feature} className="flex items-center gap-2 text-foreground">
                    <Check className="w-4 h-4 text-accent" />
                    <span className="text-sm">{feature}</span>
                  </li>)}
              </ul>

              {/* Warranty Badge */}
              <div className="flex items-center justify-between">
                <span className="feature-badge">{service.warranty}</span>
                <a href="#hintalaskuri" className="flex items-center gap-1 text-primary font-medium text-sm hover:gap-2 transition-all">
                  Laske hinta
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>)}
        </div>

        {/* Roof Cleaning Banner */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="mt-8 max-w-4xl mx-auto">
          <Link to="/kattopalvelut/puhdistus" className="block card-elevated bg-muted/50 hover:bg-muted transition-colors group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Droplets className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-foreground font-heading">Tarvitseeko kattosi vain puhdistuksen?</h4>
                <p className="text-muted-foreground text-sm">Mekaaninen puhdistus ja kasvuston torjuntakäsittely pidentävät kattosi ikää.</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </motion.div>

        {/* Process Steps */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="mt-20">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center font-heading text-foreground">
            Näin homma etenee Pintasilla
          </h3>
          <p className="text-muted-foreground text-center mb-12 text-lg max-w-2xl mx-auto">
            Avaimet käteen -palvelu alusta loppuun
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { num: 1, label: "Ilmainen kuntotarkastus", icon: "🔍" },
              { num: 2, label: "Pitävä tarjous", icon: "📋" },
              { num: 3, label: "Suunnittelu & tarvikkeet kohteelle", icon: "🚚" },
              { num: 4, label: "Perusteelliset pohjatyöt", icon: "🧹" },
              { num: 5, label: "Maalaus", icon: "🎨" },
              { num: 6, label: "Loppusiivous", icon: "✨" },
              { num: 7, label: "Lopputarkastus & dokumentointi", icon: "📸" },
              { num: 8, label: "Takuu", icon: "🛡️" },
            ].map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative card-elevated text-center flex flex-col items-center py-6 px-4"
              >
                <div className="text-3xl mb-3">{step.icon}</div>
                <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm mb-3">
                  {step.num}
                </div>
                <span className="text-sm font-medium text-foreground leading-tight">{step.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Services;
