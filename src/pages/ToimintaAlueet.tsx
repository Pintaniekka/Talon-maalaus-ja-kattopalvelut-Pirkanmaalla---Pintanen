import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServicePageHero from '@/components/ServicePageHero';
import ServiceCTA from '@/components/ServiceCTA';
import SEO from '@/components/SEO';
import { getStorageUrl, getOptimizedUrl } from '@/lib/storage';
const kattoImage = getOptimizedUrl(getStorageUrl("Samaan_kohtaan_synkronoidut_kuvat_erikseen/Harmaa seina varinvaihdon jalkeen.webp"), 1200);

// Cities that have dedicated pages
const citySlugMap: Record<string, string> = {
  'Tampere': 'tampere',
  'Nokia': 'nokia',
  'Ylöjärvi': 'ylojarvi',
  'Hämeenkyrö': 'hameenkyro',
  'Sastamala': 'sastamala',
  'Forssa': 'forssa',
  'Hämeenlinna': 'hameenlinna',
  'Huittinen': 'huittinen',
};

const pirkanmaanKunnat = [
  'Tampere', 'Nokia', 'Ylöjärvi', 'Kangasala', 'Lempäälä', 'Pirkkala',
  'Vesilahti', 'Valkeakoski', 'Akaa', 'Urjala', 'Pälkäne', 'Orivesi',
  'Juupajoki', 'Ruovesi', 'Virrat', 'Parkano', 'Kihniö', 'Ikaalinen',
  'Hämeenkyrö', 'Sastamala', 'Mänttä-Vilppula',
];

const lahialueet = ['Forssa'];

const ToimintaAlueet = () => {
  const renderCityLink = (kunta: string) => {
    const slug = citySlugMap[kunta];
    const linkTo = slug ? `/kattopalvelut/pinnoitus/${slug}` : '/kattopalvelut/pinnoitus';
    return (
      <Link
        to={linkTo}
        className="block bg-secondary text-secondary-foreground px-4 py-3 rounded-lg text-center font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
      >
        {kunta}
      </Link>
    );
  };

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
                  {renderCityLink(kunta)}
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
                  {renderCityLink(alue)}
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
              Tarvittaessa palvelemme myös{' '}
              <Link to="/kattopalvelut/pinnoitus/hameenlinna" className="text-foreground font-semibold hover:text-primary transition-colors underline underline-offset-2">Hämeenlinnan</Link> ja{' '}
              <Link to="/kattopalvelut/pinnoitus/huittinen" className="text-foreground font-semibold hover:text-primary transition-colors underline underline-offset-2">Huittisten</Link> alueella sopimuksen mukaan.
            </p>
          </motion.div>
        </div>
      </section>

      <ServiceCTA />
    </div>
  );
};

export default ToimintaAlueet;
