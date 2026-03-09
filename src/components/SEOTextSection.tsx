import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const bulletVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

const SEOTextSection = () => {
  const bullets = [
    { bold: "Ei välikäsiä:", text: "Vastaamme itse työn laadusta alusta loppuun." },
    { bold: "Maksuton arviokäynti:", text: "Tulemme paikan päälle kartoittamaan tilanteen veloituksetta." },
    { bold: "Takuutyö:", text: "5 vuoden takuu pinnoituksille ja 2 vuoden takuu maalauksille." },
    { bold: "Kotitalousvähennys:", text: "Kaikki työmme oikeuttavat verotuksessa tehtävään kotitalousvähennykseen (jopa 35 % työn osuudesta)." },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="section-container max-w-4xl mx-auto space-y-20">
        {/* Block 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-style text-3xl md:text-4xl text-accent mb-6">
            Luotettava maalausliike ja kattoasiantuntija Pirkanmaalla
          </h2>
          <div className="space-y-5 text-foreground/80 leading-relaxed text-base">
            <p>
              Joko talosi julkisivu on menettänyt uutuuden viehätyksen tai onko tiilikattosi alkanut kerätä sammalta? Pintanen Oy on pirkanmaalainen maalausliike ja kattohuoltojen ammattilainen. Yrityksemme on perustettu kahden veljeksen, Eerikin ja Eemilin, toimesta. Meidän tahtomme on tarjota korkealaatuista ja kestävää pintakäsittelyä ilman turhia välikäsiä.
            </p>
            <p>
              Toimimme laajasti koko Pirkanmaan alueella, palvellen asiakkaitamme muun muassa{" "}
              <Link to="/alue/tampere" className="text-primary hover:underline">Tampereella</Link>,{" "}
              <Link to="/alue/nokia" className="text-primary hover:underline">Nokialla</Link>,{" "}
              <Link to="/alue/ylojarvi" className="text-primary hover:underline">Ylöjärvellä</Link>,{" "}
              <Link to="/alue/sastamala" className="text-primary hover:underline">Sastamalassa</Link>,{" "}
              <Link to="/alue/kangasala" className="text-primary hover:underline">Kangasalla</Link> ja{" "}
              <Link to="/alue/hameenkyro" className="text-primary hover:underline">Hämeenkyrössä</Link>.
            </p>
            <p>
              Oli kyseessä sitten omakotitalon ulkomaalaus, kesämökin huoltomaalaus tai taloyhtiön tiilikaton pinnoitus, me hoidamme urakan alusta loppuun saakka reippaalla asenteella. Tiedämme, että Suomen vaihtelevat sääolosuhteet asettavat rakennusten ulkopinnoille kovat vaatimukset. Siksi käytämme työssämme vain alan parhaita menetelmiä ja laadukkaimpia materiaaleja. Nämä saavat lopputuloksen kestämään katsetta ja aikaa.
            </p>
          </div>
        </motion.div>

        {/* Block 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="heading-style text-2xl md:text-3xl text-accent mb-6">
            Tiilikaton pinnoitus ja puhdistus – jatka kattosi elinikää
          </h3>
          <div className="space-y-5 text-foreground/80 leading-relaxed text-base">
            <p>
              Tiesitkö, että huonokuntoisen näköistä tiilikattoa ei useinkaan tarvitse uusia kokonaan? Ammattitaitoisesti tehty tiilikaton pinnoitus ja sammaleenpuhdistus ovat kustannustehokkaita tapoja palauttaa vanha katto uudenveroiseen loistoon. Säännöllinen katon huolto ja pinnoitus estävät kosteuden pääsyn kattorakenteisiin, ehkäisevät pakkasrapautumista ja pidentävät katon käyttöikää jopa kymmenillä vuosilla.
            </p>
            <p>
              Me Pintasella teemme tiilikaton pinnoitukset, huollot ja puhdistukset huolellisena käsityönä. Eerik vastaa tiilikattokohteistamme ja varmistaa, että jokainen neliömetri käsitellään huolellisesti. Annamme tekemillemme tiilikaton pinnoituksille aina reilun 5 vuoden takuun.
            </p>
          </div>
        </motion.div>

        {/* Block 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="heading-style text-2xl md:text-3xl text-accent mb-6">
            Talon ulkomaalaus suojaa kotiasi säiltä
          </h3>
          <div className="space-y-5 text-foreground/80 leading-relaxed text-base">
            <p>
              Laadukas ulkomaalaus on paitsi esteettinen kasvojenkohotus, myös kotisi tärkein suojakilpi. Oikein tehty pohjatyö ja laadukas maalipinta suojaavat puuverhousta auringon UV-säteilyltä, sateelta ja homeelta. Eemil johtaa Pintasen maalausprojekteja vuosien kokemuksella, varmistaen, että maali pysyy seinässä ja rajaukset ovat viivasuoria.
            </p>
            <p>
              Toteutamme talojen maalaukset aina avaimet käteen -periaatteella. Tämä tarkoittaa, että me huolehdimme kaikesta: huolellisista pesuista ja homeenpoistoista, kaapimisesta, suojauksista, itse maalaustyöstä ja loppusiivouksesta. Käytämme vain Suomessa suunniteltuja ja valmistettuja huippumaaleja. Myönnämme ulkomaalaustöillemme 2 vuoden takuun, jotta voit nukkua yösi rauhassa.
            </p>
          </div>
        </motion.div>

        {/* Block 4 - Miksi valita Pintanen */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="heading-style text-2xl md:text-3xl text-sky-300 mb-6">
            Miksi valita Pintanen huoltamaan kotisi?
          </h3>
          <div className="space-y-5 text-foreground/80 leading-relaxed text-base">
            <p>
              Markkinoilla on monia toimijoita, mutta me erotumme joukosta henkilökohtaisella palvelulla ja suoraviivaisella toimintamallilla. Kun pyydät meiltä tarjouksen, kohtaat samat henkilöt, jotka tulevat suorittamaan itse työn.
            </p>

            <ul className="space-y-4 list-none pl-0">
              {bullets.map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={bulletVariants}
                  className="flex items-start gap-3"
                >
                  <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span>
                    <strong className="text-foreground">{item.bold}</strong> {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>

            <p className="mt-6">
              Älä anna kattosi sammaloitua tai julkisivusi rapistua. Ota yhteyttä luotettavaan pirkanmaalaiseen tekijään ja{" "}
              <a href="#yhteystiedot" className="text-primary font-semibold hover:underline">pyydä ilmainen kuntokartoitus jo tänään!</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SEOTextSection;
