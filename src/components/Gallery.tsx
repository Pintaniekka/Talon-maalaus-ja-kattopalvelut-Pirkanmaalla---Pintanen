import { motion } from "framer-motion";
import { getStorageUrl } from "@/lib/storage";
import OptimizedImage from "./OptimizedImage";

const images = [
  {
    src: getStorageUrl("Muut_referenssit/katto valmist tiilen punainen.webp"),
    alt: "Valmis punainen tiilikaton pinnoitus Pirkanmaalla – kiiltävä ja suojattu kattopinta",
    category: "Tiilikaton pinnoitus",
  },
  {
    src: getStorageUrl("Muut_referenssit/katto valmis harmaa.webp"),
    alt: "Harmaa tiilikaton maalauspinnoitus – kestävä suoja katollesi",
    category: "Tiilikaton pinnoitus",
  },
  {
    src: getStorageUrl("Samaan_kohtaan_synkronoidut_kuvat_erikseen/Punainen kiiltava katto maalaukspinnoituksen jalkeen.webp"),
    alt: "Kiiltävä punainen tiilikatto pinnoituksen jälkeen – ammattimainen lopputulos",
    category: "Tiilikaton pinnoitus",
  },
  {
    src: getStorageUrl("Samaan_kohtaan_synkronoidut_kuvat_erikseen/Laivaston sininen talo maalauksen jalkeen.webp"),
    alt: "Laivastonsiniseksi maalattu puutalo – julkisivumaalaus Pirkanmaalla",
    category: "Talon maalaus",
  },
  {
    src: getStorageUrl("Samaan_kohtaan_synkronoidut_kuvat_erikseen/Violetti talo varin vaihdon jalkeen.webp"),
    alt: "Violetiksi maalattu omakotitalo värinvaihdon jälkeen – ulkomaalaus ammattitaidolla",
    category: "Talon maalaus",
  },
  {
    src: getStorageUrl("Samaan_kohtaan_synkronoidut_kuvat_erikseen/Harmaa seina varinvaihdon jalkeen.webp"),
    alt: "Harmaaksi maalattu talon seinä värinvaihdon jälkeen – siisti ja kestävä lopputulos",
    category: "Talon maalaus",
  },
];

const Gallery = () => {
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
          {images.map((image, index) => (
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
                width={600}
                height={450}
                transformWidth={600}
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
      </div>
    </section>
  );
};

export default Gallery;
