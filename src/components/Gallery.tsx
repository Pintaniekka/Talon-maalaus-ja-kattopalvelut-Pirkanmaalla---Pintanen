import { useState } from "react";
import { motion } from "framer-motion";
import { getStorageUrl } from "@/lib/storage";
import OptimizedImage from "./OptimizedImage";

const images = [
  {
    src: getStorageUrl("tiilikatto-maalattu-forssa.webp"),
    alt: "Ammattimaisesti maalattu tiilikatto Forssassa",
    category: "Tiilikaton pinnoitus",
  },
  {
    src: getStorageUrl("tiilikaton-pinnoitus-tummanharmaa-pirkkala.webp"),
    alt: "Tummanharmaa tiilikaton pinnoitus kohteessa Pirkkalassa",
    category: "Tiilikaton pinnoitus",
  },
  {
    src: getStorageUrl("punainen-tiilikatto-maalaus-jalkeen-tampere.webp"),
    alt: "Valmis punainen tiilikatto kattomaalauksen jälkeen Tampereella",
    category: "Tiilikaton pinnoitus",
  },
  {
    src: getStorageUrl("laivaston-sininen-talo-maalaus-jalkeen-hameenkyro.webp"),
    alt: "Laivastonsininen puutalo maalauksen jälkeen Hämeenkyrössä",
    category: "Talon maalaus",
  },
  {
    src: getStorageUrl("violetti-talo-maalaus-varinvaihto-jalkeen-tampere.webp"),
    alt: "Violetti omakotitalo värinvaihdon jälkeen Tampereella",
    category: "Talon maalaus",
  },
  {
    src: getStorageUrl("harmaa-talon-maalaus-varinvaihdos-jalkeen-pirkanmaa.webp"),
    alt: "Talon värinvaihto punaisesta harmaaksi Pirkanmaalla",
    category: "Talon maalaus",
  },
];

const INITIAL_COUNT = 3;

const Gallery = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const visibleImages = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;

  return (
    <section id="referenssit" className="section-padding bg-muted">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">Esimerkkikohteita</h2>
          <p className="text-muted-foreground text-lg">
            Tutustu tekemiimme töihin. Jokainen työ on tehty ammattitaidolla alusta loppuun.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium mb-2">
                  {image.category}
                </span>
                <p className="text-primary-foreground text-sm">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {hasMore && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleCount(images.length)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Näytä lisää
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
