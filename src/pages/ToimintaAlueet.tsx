import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServicePageHero from '@/components/ServicePageHero';
import ServiceCTA from '@/components/ServiceCTA';
import SEO from '@/components/SEO';
import kattoImage from '@/assets/katto_1.png';

const pirkanmaanKunnat = [
  'Tampere',
  'Nokia',
  'Ylöjärvi',
  'Kangasala',
  'Lempäälä',
  'Pirkkala',
  'Vesilahti',
  'Valkeakoski',
  'Akaa',
  'Urjala',
  'Pälkäne',
  'Orivesi',
  'Juupajoki',
  'Ruovesi',
  'Virrat',
  'Parkano',
  'Kihniö',
  'Ikaalinen',
  'Hämeenkyrö',
  'Sastamala',
  'Mänttä-Vilppula',
];

const lahialueet = ['Forssa'];

const ToimintaAlueet = () => {
  return (
    <div>
      <SEO title="Toiminta-alueet" description="Pintanen palvelee koko Pirkanmaan alueella: Tampere, Nokia, Kangasala, Ylöjärvi, Sastamala ja muut kunnat." />
      <ServicePageHero
        title="Toiminta-alueet"
        subtitle="Pirkanmaa ja lähialueet"
        backgroundImage={kattoImage}
      />

      <section className="section-padding bg-background">
        <div className="section-container max-w-4xl">
          {/* Johdanto */}
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

          {/* Pirkanmaa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-primary" />
              Pirkanmaa
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {pirkanmaanKunnat.map((kunta, index) => (
                <motion.div
                  key={kunta}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.02 }}
                >
                  <Link
                    to="/kattopalvelut/pinnoitus"
                    className="block bg-secondary text-secondary-foreground px-4 py-3 rounded-lg text-center font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {kunta}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pirkanmaan ulkopuoliset lähialueet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-accent" />
              Pirkanmaan ulkopuoliset lähialueet
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {lahialueet.map((alue, index) => (
                <motion.div
                  key={alue}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.02 }}
                >
                  <Link
                    to="/kattopalvelut/pinnoitus"
                    className="block bg-secondary text-secondary-foreground px-4 py-3 rounded-lg text-center font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {alue}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Lisähuomio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-muted p-6 rounded-xl text-center"
          >
            <p className="text-muted-foreground">
              Tarvittaessa palvelemme myös <strong>Hämeenlinnan</strong> ja{' '}
              <strong>Huittisten</strong> alueella sopimuksen mukaan.
            </p>
          </motion.div>
        </div>
      </section>

      <ServiceCTA />
    </div>
  );
};

export default ToimintaAlueet;
