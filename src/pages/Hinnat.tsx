import { motion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck, Wrench, FileText, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import ServicePageHero from "@/components/ServicePageHero";
import PriceCalculator from "@/components/PriceCalculator";
import KotitalousVahennys from "@/components/KotitalousVahennys";
import ServiceContactSection from "@/components/ServiceContactSection";
import { getStorageUrl } from "@/lib/storage";

const heroImage = getStorageUrl("Pictures-750/Moderni-maalattu-musta-talo-pirkanmaa-750.webp");

const serviceCards = [
  {
    title: "Tiilikaton pinnoitus",
    description:
      "Katso tarkat hintaesimerkit erikokoisille kohteille, hintavertailu ja lue, mistä pinnoituksen hinta koostuu.",
    cta: "Katso pinnoituksen hintaesimerkit",
    href: "/hinnat/tiilikaton-pinnoitus",
    color: "from-[#B71C1C]/15 via-[#B71C1C]/8 to-transparent",
    iconBg: "bg-[#B71C1C]/15",
    iconColor: "text-[#B71C1C]",
  },
  {
    title: "Katon puhdistus",
    description:
      "Säännöllinen puhdistus ja suojakäsittely säästää kattoa. Katso edulliset alkaen-hintamme.",
    cta: "Katso puhdistuksen hinnasto",
    href: "/hinnat/katon-puhdistus",
    color: "from-primary/15 via-primary/8 to-transparent",
    iconBg: "bg-primary/15",
    iconColor: "text-primary",
  },
  {
    title: "Talon maalaus",
    description:
      "Tutustu ulkomaalauksen neliöhintoihin, pohjatöiden vaikutuksiin ja katso esimerkkilaskelmat puutaloille.",
    cta: "Katso maalauksen hintaesimerkit",
    href: "/hinnat/talon-maalaus",
    color: "from-[#ffec4e]/20 via-[#ffec4e]/10 to-transparent",
    iconBg: "bg-[#ffec4e]/20",
    iconColor: "text-[#D4A017]",
  },
];

const valueProps = [
  {
    icon: ShieldCheck,
    title: "Ei piilokuluja",
    description: "Kiinteä urakkahinta, joka pitää.",
  },
  {
    icon: Wrench,
    title: "Avaimet käteen -palvelu",
    description:
      "Hinta sisältää aina telineet, suojaukset, materiaalit ja loppusiivouksen.",
  },
  {
    icon: FileText,
    title: "Kirjallinen takuu",
    description:
      "Annamme työllemme selkeän takuun (esim. 2 vuotta ulkomaalauksille).",
  },
];

const Hinnat = () => {
  return (
    <>
      <SEO
        title="Tiilikaton pinnoitus ja talon maalaus hinta – Laske arvio"
        description="Paljonko tiilikaton pinnoitus tai talon maalaus maksaa? Laske arvio hintalaskurilla ja katso hintaesimerkit Pirkanmaan alueella."
        preloadImage={heroImage}
      />

      {/* 1. Hero */}
      <ServicePageHero
        title="Laske tiilikaton pinnoituksen tai talon maalauksen hinta heti"
        subtitle="Saat nopeasti suuntaa antavan hinnan urakallesi Pirkanmaalla. Meillä Pintasella hinnoittelu on läpinäkyvää – ei piilokuluja ja varmistamme tarkan urakkahinnan maksuttoman arviokäynnin aikana."
        backgroundImage={heroImage}
      />

      {/* Hintalaskuri */}
      <PriceCalculator />

      {/* Luottamussignaali */}
      <div className="bg-muted/50 border-y border-border">
        <div className="section-container py-4 text-center">
          <p className="text-muted-foreground text-sm md:text-base">
            Laskurin antama hinta on arvio. Tarkan ja pitävän hinnan saat aina{" "}
            <strong className="text-foreground">
              ilmaisen kuntotarkastuksen
            </strong>{" "}
            yhteydessä.
          </p>
        </div>
      </div>

      {/* 2. H2 + teksti */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-heading text-center">
              Mitä maalaustyöt maksavat Pirkanmaalla?
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Tiilikaton pinnoituksen, katon puhdistuksen ja talon
                ulkomaalauksen kustannukset vaihtelevat useista syistä. Hinta
                riippuu muun muassa kohteen koosta, kunnosta ja tarvittavista
                pohjatöistä. Tästä syystä tarkka urakkahinta määritellään
                yleensä ilmaisella arviointikäynnillä.
              </p>
              <p>
                Tällä sivulla näet suuntaa antavat hinnat eri palveluille sekä
                esimerkkejä aiemmista töistä. Näin voit saada realistisen
                käsityksen siitä, mitä kattotyöt tai ulkomaalaus yleensä maksavat
                Pirkanmaan alueella.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8 justify-center">
              {[
                "Ilmainen arviokäynti",
                "Ei sitoumuksia",
                "Vastaus 24h sisällä",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-foreground font-medium"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Palvelukohtaiset hintasivut */}
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-foreground mb-8 font-heading text-center"
          >
            Katso palvelukohtaiset hinnat
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {serviceCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={card.href}
                  className="group block h-full rounded-2xl border-2 border-border hover:border-primary/50 bg-card overflow-hidden transition-all hover:shadow-lg"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.color} pointer-events-none`}
                  />
                  <div className="relative p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 font-heading">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {card.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      {card.cta}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Arvolupaus */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-foreground mb-10 font-heading text-center"
          >
            Mitä Pintasen hinta aina sisältää?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Kotitalousvähennys */}
      <KotitalousVahennys />

      {/* 6. Yhteystiedot */}
      <ServiceContactSection variant="general" />
    </>
  );
};

export default Hinnat;
