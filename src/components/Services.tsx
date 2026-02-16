import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { getStorageUrl } from "@/lib/storage";
import BeforeAfterSlider from "./BeforeAfterSlider";
import OptimizedImage from "./OptimizedImage";
import { RoofTileIcon, RoofCleanIcon, PaintBrushIcon } from "./ServiceIcons";

const services = [{
  title: "Tiilikaton pinnoitus",
  href: "/kattopalvelut/pinnoitus",
  beforeImage: getStorageUrl("Samaan_kohtaan_synkronoidut_kuvat_erikseen/Punainen liakainen katto ennen maalauspinnoitusta.webp"),
  afterImage: getStorageUrl("Samaan_kohtaan_synkronoidut_kuvat_erikseen/Punainen kiiltava katto maalaukspinnoituksen jalkeen.webp"),
  description: "Vanha tiilikatto uuteen loistoon. Puhdistamme sammaleen, suojaamme tiilen ja maalaamme pinnan kestäväksi.",
  features: ["Sammaleenpuhdistus", "Suojakäsittely", "Pinnoitus"],
  warranty: "5v takuu",
}, {
  title: "Ulkomaalaus",
  href: "/talon-maalaus",
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
        }}>
              <Link to={service.href} className="card-elevated group block hover:bg-muted/50 transition-colors duration-300">
              {/* Before/After Slider */}
              <div className="mb-6">
                <BeforeAfterSlider
                  beforeImage={service.beforeImage}
                  afterImage={service.afterImage}
                />
              </div>

              {/* Content */}
              <div className="flex items-center gap-2 mb-3">
                {index === 0 ? <RoofTileIcon className="w-6 h-6 text-primary flex-shrink-0" /> : <PaintBrushIcon className="w-6 h-6 text-primary flex-shrink-0" />}
                <h3 className="text-xl font-bold text-foreground font-heading">{service.title}</h3>
              </div>
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
                <span className="flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
                  Lue lisää
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
              </Link>
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
          <Link
            to="/kattopalvelut/puhdistus"
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
                <RoofCleanIcon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-white font-heading">Tarvitseeko kattosi vain puhdistuksen?</h4>
                <p className="text-white/80 text-sm">Mekaaninen puhdistus ja kasvuston torjuntakäsittely pidentävät kattosi ikää.</p>
              </div>
              <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </motion.div>

        {/* Process Timeline */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-3">
              Näin projekti etenee
            </h3>
            <p className="text-muted-foreground text-lg">
              Avaimet käteen -palvelu alusta loppuun
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection line */}
              <div className="absolute top-[28px] left-[calc(100%/16)] right-[calc(100%/16)] h-px bg-border" />
              <div className="grid grid-cols-8 gap-3">
                {[
                  { num: "01", title: "Kuntokartoitus", desc: "Kohteen arviointi paikan päällä ja tarvittavien toimenpiteiden määrittely." },
                  { num: "02", title: "Sitova tarjous", desc: "Selkeä erittely työn sisällöstä, aikataulusta ja hinnasta." },
                  { num: "03", title: "Suunnittelu", desc: "Sävy- ja tuotesuunnittelu kohteen vaatimusten mukaan." },
                  { num: "04", title: "Pohjatyöt", desc: "Pintojen pesu, hionta, tasoitus ja suojaus ennen maalausta." },
                  { num: "05", title: "Maalaus", desc: "Työ suoritetaan sovitulla menetelmällä ja laatustandardilla." },
                  { num: "06", title: "Loppusiivous", desc: "Työmaa luovutetaan siistinä ja valmiina käyttöön." },
                  { num: "07", title: "Lopputarkastus", desc: "Kohde käydään läpi asiakkaan kanssa ja dokumentoidaan." },
                  { num: "08", title: "Takuutodistus", desc: "Kirjallinen takuu tehdylle työlle." },
                ].map((step, index) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.07 }}
                    className="group flex flex-col items-center text-center"
                  >
                    {/* Number circle */}
                    <div className="w-14 h-14 rounded-full bg-card border-2 border-border flex items-center justify-center mb-4 relative z-10 group-hover:border-primary group-hover:shadow-md transition-all duration-300">
                      <span className="text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors duration-300 font-heading">
                        {step.num}
                      </span>
                    </div>
                    {/* Content */}
                    <h4 className="text-sm font-bold text-foreground mb-1.5 font-heading leading-tight">
                      {step.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed px-1">
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Timeline */}
          <div className="lg:hidden max-w-lg mx-auto">
            {[
              { num: "01", title: "Maksuton kuntokartoitus", desc: "Kohteen arviointi paikan päällä ja tarvittavien toimenpiteiden määrittely." },
              { num: "02", title: "Kirjallinen ja sitova tarjous", desc: "Selkeä erittely työn sisällöstä, aikataulusta ja hinnasta." },
              { num: "03", title: "Suunnittelu & materiaalivalinnat", desc: "Sävy- ja tuotesuunnittelu kohteen vaatimusten mukaan." },
              { num: "04", title: "Huolelliset suojaus- ja pohjatyöt", desc: "Pintojen pesu, hionta, tasoitus ja suojaus ennen maalausta." },
              { num: "05", title: "Ammattimainen maalaus", desc: "Työ suoritetaan sovitulla menetelmällä ja laatustandardilla." },
              { num: "06", title: "Viimeistely & loppusiivous", desc: "Työmaa luovutetaan siistinä ja valmiina käyttöön." },
              { num: "07", title: "Yhteinen lopputarkastus", desc: "Kohde käydään läpi asiakkaan kanssa ja dokumentoidaan." },
              { num: "08", title: "Takuutodistus", desc: "Kirjallinen takuu tehdylle työlle." },
            ].map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="flex gap-5 relative"
              >
                {/* Vertical line */}
                {index < 7 && (
                  <div className="absolute left-[23px] top-[56px] bottom-0 w-px bg-border" />
                )}
                {/* Number circle */}
                <div className="w-12 h-12 rounded-full bg-card border-2 border-border flex items-center justify-center flex-shrink-0 relative z-10">
                  <span className="text-sm font-bold text-muted-foreground font-heading">{step.num}</span>
                </div>
                {/* Content */}
                <div className="pb-8">
                  <h4 className="text-base font-bold text-foreground font-heading mb-1">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Services;
