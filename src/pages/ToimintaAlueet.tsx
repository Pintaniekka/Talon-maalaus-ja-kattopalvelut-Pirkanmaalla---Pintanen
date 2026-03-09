import { motion } from 'framer-motion';
import { MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServicePageHero from '@/components/ServicePageHero';
import ServiceContactSection from '@/components/ServiceContactSection';
import SEO from '@/components/SEO';
import { allCities } from '@/data/cityData';
import { getStorageUrl } from '@/lib/storage';

const heroImage = getStorageUrl("Muut_referenssit/keltainen-talo-maalaus-jalkeen-hameenlinna.webp");

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base text-muted-foreground mb-12 space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 text-center">Missä toimimme?</h2>
            <p>
              Meidän toiminta-alueemme on Pirkanmaa ja sen lähialueet. Pintanen Oy suorittaa tiilikattojen pinnoitukset, katon puhdistukset ja talojen ulkomaalaukset pääasiassa Pirkanmaan alueella. Suurin osa asiakkaistamme on Tampereella ja sen ympäristökunnissa, mutta me palvelemme myös muualla Pirkanmaalla ja valituilla lähialueilla.
            </p>
            <p>
              Me toimimme yleensä noin tunnin ajomatkan säteellä Tampereelta. Tämä mahdollistaa sujuvan työskentelyn ja kohtuulliset matkakulut asiakkaillemme. Me teemme vuosittain projekteja useissa Pirkanmaan kunnissa, ja kohteita löytyy sekä kaupunkialueilta että maaseudulta.
            </p>
            <p>
              Tyypillisiä työalueitamme ovat esimerkiksi Tampere, Nokia, Ylöjärvi, Kangasala, Pirkkala ja Lempäälä. Me toteutamme kattotöitä ja ulkomaalauksia myös muualla Pirkanmaalla sekä lähialueilla, kuten Hämeenlinnassa ja Forssassa.
            </p>
            <p>
              Jos et ole varma, kuuluuko paikkakuntasi toiminta-alueeseemme, kannattaa silti ottaa yhteyttä. Me kerromme nopeasti, onnistuuko kohteesi toteutus, ja voimme tarvittaessa sopia maksuttoman arviokäynnin.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-accent">
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

      <ServiceContactSection variant="general" />
    </div>
  );
};

export default ToimintaAlueet;
