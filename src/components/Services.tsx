import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ResponsiveSupabaseImage from "./ResponsiveSupabaseImage";

const services = [
  {
    title: "Tiilikaton pinnoitus",
    href: "/tiilikaton-pinnoitus-pirkanmaa",
    imageBase: "uutta-vastaava-tiilikatto-pesu-ja-suojakasittely",
    description:
      "Tiilikaton maalauspinnoitus pidentää katon käyttöikää jopa 15-20 vuotta murto-osalla uuden katon hinnasta.",
    tag: "5v takuu",
  },
  {
    title: "Katon puhdistus",
    href: "/katon-puhdistus-pirkanmaa",
    imageBase: "puhdas-tiilikatto-mekaanisen-puhdistuksen-jalkeen",
    description: "Mekaaninen katon puhdistus poistaa sammaleen, estää uuden kasvun ja suojaa kattoasi.",
    tag: "Laatutakuu",
  },
  {
    title: "Talon ulkomaalaus",
    href: "/talon-maalaus-pirkanmaa",
    imageBase: "violetti-puutalo-varinvaihto-peittomaalaus-jalkeen",
    description: "Ammattitaitoinen ulkomaalaus laadukkailla materiaaleilla suojaa taloasi säältä ja kosteudelta.",
    tag: "2v takuu",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="palvelut" className="section-padding" style={{ backgroundColor: "#e2f2ff" }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="heading-style text-3xl md:text-4xl text-accent mb-5">Meidän palvelut</h2>
          <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
            Suojaamme ja uudistamme kotisi ulkopinnat fiksusti ilman turhia välikäsiä.
            <br />
            Teemme tiilikattojen maalauspinnoitukset, pesut ja talojen ulkomaalaukset Pirkanmaalla –{" "}
            <strong>yrittäjät tekevät itse työn.</strong>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
            >
              <div
                role="link"
                tabIndex={0}
                onClick={() => navigate(service.href)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") navigate(service.href);
                }}
                className="relative rounded-2xl overflow-hidden group cursor-pointer h-full min-h-[420px] flex flex-col justify-end shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Background image */}
                <ResponsiveSupabaseImage
                  baseName={service.imageBase}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 group-hover:from-black/85 transition-all duration-300" />

                {/* Content */}
                <div className="relative p-6 flex flex-col gap-3">
                  {/* Tag */}
                  <span className="self-start bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                    {service.tag}
                  </span>

                  <h3 className="text-xl font-bold text-white font-heading leading-tight">{service.title}</h3>
                  <p className="text-white/85 text-sm leading-relaxed">{service.description}</p>

                  {/* CTA */}
                  <span className="inline-flex items-center gap-1.5 text-white font-semibold text-sm mt-1 group-hover:gap-2.5 transition-all duration-300">
                    Pyydä maksuton arvio
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
