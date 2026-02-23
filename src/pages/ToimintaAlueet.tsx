import { motion } from 'framer-motion';
import { MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServicePageHero from '@/components/ServicePageHero';
import ServiceCTA from '@/components/ServiceCTA';
import SEO from '@/components/SEO';
import { allCities } from '@/data/cityData';
import { getStorageUrl } from '@/lib/storage';

const heroImage = getStorageUrl("keltainen-talo-maalaus-jalkeen-hameenlinna.webp");

const ToimintaAlueet = () => {
  return (
    <div>
      <SEO title="Toiminta-alueet Pirkanmaa ja lähikunnat" description="Palvelemme koko Pirkanmaan alueella ja lähikunnissa. Katon pinnoitus, puhdistus ja talon maalaus noin tunnin säteellä Tampereelta." />
      <ServicePageHero
        title="Toiminta-alueemme"
        subtitle="Pirkanmaa ja lähialueet"
        backgroundImage={heroImage}
      />

      <section className="section-padding bg-background">
        <div className="section-container max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground mb-12 text-center"
          >
            Toimimme pääasiassa noin tunnin ajomatkan säteellä Tampereelta. 
            Palvelemme koko Pirkanmaan alueella sekä valituilla lähialueilla 
            Pirkanmaan ulkopuolella.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-primary" />
              Palvelualueet
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
              {allCities.map((city, index) => (
                <motion.div
                  key={city.slug}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.02 }}
                >
                  <Link
                    to={`/alue/${city.slug}`}
                    className="flex items-center justify-between gap-1 bg-secondary text-secondary-foreground px-4 py-3 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors group"
                  >
                    <span>{city.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <ServiceCTA />
    </div>
  );
};

export default ToimintaAlueet;
