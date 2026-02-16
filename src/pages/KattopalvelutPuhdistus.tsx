import { motion } from "framer-motion";
import { Check, Droplets, Shield, Sparkles, Clock } from "lucide-react";
import ServicePageHero from "@/components/ServicePageHero";
import ServiceCTA from "@/components/ServiceCTA";
import KotitalousVahennys from "@/components/KotitalousVahennys";
import SEO from "@/components/SEO";
import { getStorageUrl, getOptimizedUrl } from "@/lib/storage";
const puhdistusImage = getOptimizedUrl(getStorageUrl("Samaan_kohtaan_synkronoidut_kuvat_erikseen/Punainen kiiltava katto maalaukspinnoituksen jalkeen.webp"), 1200);

const KattopalvelutPuhdistus = () => {
  const features = [
    {
      icon: Droplets,
      title: "Mekaaninen puhdistus",
      description: "Puhdistamme katon mekaanisesti ilman painepesua – painepesuri voi kuluttaa tiilen pintaa.",
    },
    {
      icon: Shield,
      title: "Sammaleentorjunta",
      description: "Kattoa suojaava kasvustontorjunta-aine estää sammalen ja jäkälän uudelleen kasvun.",
    },
    {
      icon: Sparkles,
      title: "Katon tarkastus",
      description: "Puhdistuksen yhteydessä vaihdamme kaikki rikkinäiset tiilet ja lisätyönä harjatiivisteen asennus.",
    },
    {
      icon: Clock,
      title: "Nopea työ",
      description: "Normaalin omakotitalon katon puhdistus tapahtuu yleensä yhden päivän aikana.",
    },
  ];

  const benefits = [
    "Pidentää katon käyttöikää",
    "Parantaa talon ulkonäköä",
    "Estää kosteusongelmia",
    "Ennaltaehkäisevä huolto",
    "Edullisempi kuin pinnoitus",
    "Ilmainen kuntotarkastus mukana",
  ];


  return (
    <div>
      <SEO title="Tiilikaton puhdistus" description="Ammattimainen tiilikaton mekaaninen puhdistus ja sammaleentorjunta. Alkaen 800 €. Ilmainen kuntotarkastus Pirkanmaalla." />
      <ServicePageHero
        title="Tiilikaton puhdistus"
        subtitle="Ammattimainen mekaaninen puhdistus ja käsittely pidentää kattosi ikää huomattavasti"
        backgroundImage={puhdistusImage}
      />

      {/* Seloste-osio */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Tiilikaton mekaaninen puhdistus ja käsittely
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Suosittelemme tiilikaton tarkastusta vuosittain. Sammal, jäkälä ja roskat kannattaa poistaa
                säännöllisesti, jotta katto pysyy hyvässä kunnossa mahdollisimman pitkään.
              </p>
              <p>
                <strong className="text-foreground">Käytämme ammattitason välineitä.</strong> Katon puhdistuksessa
                menetelmän valinta on erittäin tärkeää. Väärät menetelmät voivat vahingoittaa katon pintaa ja lyhentää
                sen käyttöikää. Siksi puhdistamme katon mekaanisesti käsityövälineillä, mikä säästää tiilen pintaa.
              </p>
              <p>
                Puhdistuksen jälkeen levitämme sammaleentorjunta-aineen, joka estää uuden kasvuston muodostumisen.
                Käsittely suojaa kattoa jopa useiksi vuosiksi.
              </p>
              <p>
                Puhdistuksen yhteydessä tarkastamme katon kunnon ja raportoimme mahdollisista korjaustarpeista.
                Rikkoutuneet tiilet vaihdetaan uusiin.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Mitä puhdistus sisältää?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kattavat puhdistuspalvelut yhdellä hinnalla – ei piilokustannuksia.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Pricing */}
      <section className="section-padding bg-secondary">
        <div className="section-container">
          {/* Benefits */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Puhdistuksen hyödyt</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-card p-4 rounded-xl"
                >
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pricing */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl p-8 text-center shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Hinnoittelu</h2>
              <p className="text-muted-foreground mb-6">
                Tiilikaton mekaanisen puhdistuksen ja käsittelyn hinta riippuu katon koosta ja sammaleen määrästä.
              </p>
              <div className="text-4xl font-bold text-primary mb-2">alkaen 800 €</div>
              <p className="text-accent font-medium">Pyydä tarjous, niin kerromme tarkan hinnan!</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* When to clean */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Milloin kannattaa puhdistuttaa katto?
            </h2>
            <div className="text-lg text-muted-foreground space-y-4">
              <p>
                <strong className="text-foreground">Sammalta tai muuta kasvustoa katolla?</strong> Jo pienikin määrä
                sammalta kannattaa poistaa ennen kuin se aiheuttaa vahinkoa koko katolla.
              </p>
              <p>
                <strong className="text-foreground">Aikaa edellisestä puhdistuksessta?</strong> Säännöllinen puhdistus
                pitää katon hyvässä kunnossa ja estää kalliimmat korjaukset tulevaisuudessa.
              </p>
              <p>
                <strong className="text-foreground">Myyntiä varten?</strong> Puhdas katto nostaa kiinteistön
                ensivaikutelmaa ja voi lisätä myyntiarvoa.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <KotitalousVahennys />

      <ServiceCTA />
    </div>
  );
};

export default KattopalvelutPuhdistus;
