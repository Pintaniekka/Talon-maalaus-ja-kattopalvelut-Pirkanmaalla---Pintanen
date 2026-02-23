import { motion } from 'framer-motion';
import { getStorageUrl } from '@/lib/storage';
import OptimizedImage from './OptimizedImage';

const sideImage = getStorageUrl("laivaston-sininen-talo-maalaus-jalkeen-hameenkyro.webp");

const MiksiPintanen = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'hsl(205 70% 88%)' }}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-heading leading-tight">
              Miksi kannattaa tilata katon huolto tai maalaus Pintaselta?
            </h2>

            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                Terve, ja mukava että löysit Pintasen.
              </p>
              <p>
                Me olemme veljekset Eerik ja Eemil. Pintanen syntyi halusta tehdä maalaustyöt
                paremmin – ilman turhia välikäsiä tai raskasta kulurakennetta, ja ilman että
                laatu kärsii.
              </p>
              <p>
                Teemme työt itse. Tulemme paikan päälle, arvioimme kohteen ja hoidamme työn
                alusta loppuun omalla tiimillä. Näin tiedämme, että sovitut asiat myös
                toteutuvat.
              </p>
              <p>
                Eerik vastaa tiilikatoista – puhdistuksista ja pinnoituksista, joilla katon
                käyttöikää voidaan jatkaa vuosilla.{' '}
                Eemil keskittyy talojen seinien maalauksiin, joiden kanssa hänellä on pitkä
                historia.
              </p>
              <p>
                Meille mikään kohde ei ole liian pieni tai liian suuri. Teemme töitä
                kesämökeistä taloyhtiöihin noin tunnin säteellä Tampereelta.
              </p>
              <p>
                Arviointi on aina maksuton.{' '}
                Pinnoituksille annamme 5 vuoden takuun ja talon maalauksille 2 vuotta.
              </p>
              <p>
                Jos etsit tekijää, joka seisoo työnsä takana ja tekee sen minkä lupaa, ota
                yhteyttä — jutellaan rauhassa mikä olisi paras ratkaisu sinun katolle tai
                julkisivulle.
              </p>
              <p className="font-semibold text-primary">– Eerik &amp; Eemil</p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden"
          >
            <OptimizedImage
              src={sideImage}
              alt="Laivastonsininen puutalo maalauksen jälkeen Hämeenkyrössä"
              className="w-full h-full object-cover rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MiksiPintanen;
