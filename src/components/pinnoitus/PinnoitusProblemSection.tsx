import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import { getStorageUrl } from '@/lib/storage';

interface PinnoitusProblemSectionProps {
  cityName: string;
}

const warningSignsData = [
  { text: 'Väri on haalistunut.', detail: 'Se tarkoittaa, että suojakerros on kulunut pois ja tiili on alttiina sään vaihteluille.' },
  { text: 'Sammal kasvaa nopeasti.', detail: 'Se on merkki siitä, että pinta on huokoinen ja kulunut.' },
  { text: 'Rikkinäiset tiilet', detail: 'ovat selvä merkki siitä, että vesi on jo päässyt tiilen rakenteen sisään ja jäätynyt.' },
  { text: 'Pinta tuntuu karhealta.', detail: 'Se tarkoittaa, että tiili on menettänyt sileyden ja imee vettä sisäänsä jokaisella sateella.' },
];

const PinnoitusProblemSection = ({ cityName }: PinnoitusProblemSectionProps) => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Onko kattosi vaarassa {cityName}n vaihtelevassa säässä?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Moni tamperelainen luulee, että omakotitalon katto on kunnossa, jos se näyttää siistiltä kaukaa katsottuna. Mutta totuus on toinen. Kun tiilen suoja kuluu pois, tiili imee kosteutta kuin pesusieni. Siinä vaiheessa pelkkä puhdistus ei riitä. Katto tarvitsee ammattitaitoista pinnoitusta, jotta se kestää teknisesti pitkään.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
          {/* Left: Sticky Before/After slider */}
          <div className="lg:sticky lg:top-24">
            <BeforeAfterSlider
              beforeImage={getStorageUrl(
                'Samaan_kohtaan_synkronoidut_kuvat_erikseen/Punainen kulunut katto ennen maalauspinnoitusta.webp',
              )}
              afterImage={getStorageUrl(
                'Samaan_kohtaan_synkronoidut_kuvat_erikseen/Punainen katto maalauspinnoituksen jalkeen.webp',
              )}
              beforeAlt={`Kulunut tiilikatto ennen pinnoitusta ${cityName}`}
              afterAlt={`Tiilikatto pinnoituksen jälkeen ${cityName}`}
            />
          </div>

          {/* Right: Problem descriptions */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Pysäytä tiilen mureneminen eli pakkasrapautuminen
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Suomen talvi on kova testi katon kestämiselle. Kun vesi imeytyy huokoiseen tiileen ja jäätyy, se laajenee monta kertaa talven aikana ja murentaa tiiltä sisältäpäin. Tätä kutsutaan pakkasrapautumiseksi. Se johtaa lopulta tiilien halkeiluun ja pahimmillaan kosteuden pääsyyn aluskatteelle. Pinnoitus katkaisee tämän kierteen heti.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Sammaleen poisto on vasta alkua – pinta kaipaa suojan
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Sammal ja jäkälä eivät ole vain rumia. Niiden juuret avaavat tietä kosteudelle ja pitävät katon jatkuvasti märkänä. Se nopeuttaa rakenteiden rappeutumista. Pelkkä pesu poistaa näkyvän kasvuston, mutta vain ammattitaitoisen henkilön suorittama pinnoitus sulkee tiilen huokoset ja luo katolle vettä hylkivän suojan. Tämä suojaa tiilikattoa vuosiksi eteenpäin.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl border border-border/50 p-6"
            >
              <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-primary" />
                Tunnista nämä hälytysmerkit katollasi:
              </h4>
              <ul className="space-y-3">
                {warningSignsData.map((sign, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">{sign.text}</strong> {sign.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="pt-2">
              <a
                href="#yhteystiedot"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:brightness-110"
                style={{ backgroundColor: 'hsl(202, 100%, 61%)' }}
              >
                Varaa maksuton kuntotarkastus {cityName}lla
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PinnoitusProblemSection;
