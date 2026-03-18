import { motion } from 'framer-motion';
import { getHeroSrcSet } from '@/lib/storage';

interface PinnoitusCityHeroProps {
  cityName: string;
  backgroundImage: string;
}

const PinnoitusCityHero = ({ cityName, backgroundImage }: PinnoitusCityHeroProps) => {
  return (
    <section
      className="relative min-h-[70svh] min-h-[70vh] flex items-center justify-center overflow-hidden isolate"
      style={{ backgroundColor: 'hsl(215,30%,10%)' }}
    >
      <img
        src={backgroundImage}
        srcSet={getHeroSrcSet(backgroundImage)}
        sizes="100vw"
        alt={`Tiilikaton pinnoitus ${cityName} – Pintanen Oy`}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        decoding="sync"
        fetchPriority="high"
      />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(18,28,40,0.55)' }} />

      <div className="relative z-[2] section-container text-center text-primary-foreground pt-24 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 max-w-5xl mx-auto"
        >
          Tiilikaton pinnoitus {cityName}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-black/25 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-10 md:mb-12"
        >
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
            Pysäytä katon kuluminen ennen kuin vauriot tulevat liian kalliiksi. Laadukas tiilikaton pinnoitus {cityName}lla on järkevin tapa estää kalliiden kattoremonttien tarve. Pintasen asiantuntija toteuttaa pinnoitukset ammattitaidolla, jolloin katto saa takaisin alkuperäisen suojansa. Tämä myös parantaa talon julkisivun ilmettä ja antaa katolle jopa 10–15 vuotta huoletonta lisäaikaa.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#yhteystiedot"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:brightness-110 text-lg"
            style={{ backgroundColor: 'hsl(202, 100%, 61%)' }}
          >
            Pyydä ilmainen kuntotarkastus
          </a>
          <a
            href="#hintalaskuri"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-foreground transition-all hover:brightness-95 text-lg"
            style={{ backgroundColor: 'hsl(36, 56%, 91%)' }}
          >
            Katso hinta hintalaskurilla!
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PinnoitusCityHero;
