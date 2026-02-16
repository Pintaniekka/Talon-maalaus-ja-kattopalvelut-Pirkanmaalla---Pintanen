import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cities } from '@/data/cityData';

const ToimintaAlueetSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Toiminta-alueet</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Palvelemme Pirkanmaalla ja lähialueilla. Valitse paikkakuntasi nähdäksesi tarkemmat tiedot ja aluekohtaiset palvelusivut.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {cities.map((city, index) => (
            <motion.div
              key={city.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
            >
              <Link
                to={`/alue/${city.slug}`}
                className="block bg-secondary text-secondary-foreground px-4 py-3 rounded-lg text-center font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {city.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToimintaAlueetSection;
