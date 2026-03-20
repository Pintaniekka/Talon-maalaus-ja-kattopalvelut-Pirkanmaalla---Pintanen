import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MaalausComparison = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6 text-center">
              Talon maalaus vai kokonaan uusi ulkoverhousremontti?
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Tämä on kysymys, jota moni vanhemman talon omistaja pohtii, kun maali hilseilee pahasti. Nyrkkisääntö on selkeä: jos alla oleva puu on vielä kovaa eikä laho, ulkoverhousremontti on usein täysin turha ja ylimitoitettu investointi.
              </p>
              <p>
                Perusteellisilla pohjatöillä ja laadukkaalla maalauksella vanhakin paneeli saadaan pelastettua. Talon huoltomaalaus on ekologinen ja kustannustehokas vaihtoehto, joka maksaa vain <strong className="text-foreground">murto-osan uuden laudoituksen hinnasta</strong>. Kun maalaus tehdään ajoissa, vältät raskaan rakennusprojektin, pihan mylläyksen ja säästät kymmeniä tuhansia euroja.
              </p>
            </div>

            <div className="text-center mt-8">
              <Link
                to="/talon-maalaus-hinta-pirkanmaa"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-foreground transition-all hover:brightness-95 text-lg"
                style={{ backgroundColor: 'hsl(36, 56%, 91%)' }}
              >
                Hintalaskuri
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MaalausComparison;
