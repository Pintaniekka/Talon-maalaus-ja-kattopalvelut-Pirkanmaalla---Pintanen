import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServicePageHero from '@/components/ServicePageHero';
import ServiceCTA from '@/components/ServiceCTA';
import SEO from '@/components/SEO';
import { cities } from '@/data/cityData';
import { getStorageUrl, getOptimizedUrl } from '@/lib/storage';
const heroImage = getOptimizedUrl(getStorageUrl("Samaan_kohtaan_synkronoidut_kuvat_erikseen/Harmaa seina varinvaihdon jalkeen.webp"), 1200);

const ToimintaAlueet = () => {
  return (
    <div>
      <SEO title="Toiminta-alueemme" description="Pintanen palvelee koko Pirkanmaan alueella: Tampere, Nokia, Kangasala, Ylöjärvi, Sastamala ja muut kunnat." />
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {cities.map((city, index) => (
                <motion.div
                  key={city.slug}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.02 }}
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
          </motion.div>
        </div>
      </section>

      <ServiceCTA />
    </div>
  );
};

export default ToimintaAlueet;
