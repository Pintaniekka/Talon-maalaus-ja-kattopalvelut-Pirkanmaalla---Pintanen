import { motion } from "framer-motion";

const ProcessTimeline = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-style text-3xl md:text-4xl text-primary mb-3">
            Näin projekti etenee
          </h2>
          <p className="text-muted-foreground text-lg">
            Avaimet käteen -palvelu alusta loppuun
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
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
                  <div className="w-14 h-14 rounded-full bg-card border-2 border-border flex items-center justify-center mb-4 relative z-10 group-hover:border-primary group-hover:shadow-md transition-all duration-300">
                    <span className="text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors duration-300 font-heading">
                      {step.num}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-foreground mb-1.5 font-heading leading-tight">
                    {step.title}
                  </p>
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
              {index < 7 && (
                <div className="absolute left-[23px] top-[56px] bottom-0 w-px bg-border" />
              )}
              <div className="w-12 h-12 rounded-full bg-card border-2 border-border flex items-center justify-center flex-shrink-0 relative z-10">
                <span className="text-sm font-bold text-muted-foreground font-heading">{step.num}</span>
              </div>
              <div className="pb-8">
                <p className="text-base font-bold text-foreground font-heading mb-1">{step.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
