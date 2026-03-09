import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SEOTextSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-lg max-w-none"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-heading">
            Luotettava maalausliike ja kattoasiantuntija Pirkanmaalla
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Joko talosi julkisivu on menettänyt uutuuden viehätyksen tai onko tiilikattosi alkanut kerätä sammalta? Pintanen Oy on pirkanmaalainen maalausliike ja kattohuoltojen ammattilainen. Yrityksemme on perustettu kahden veljeksen, Eerikin ja Eemilin, toimesta. Meidän tahtomme on tarjota korkealaatuista ja kestävää pintakäsittelyä ilman turhia välikäsiä. Toimimme laajasti koko Pirkanmaan alueella, palvellen asiakkaitamme muun muassa{" "}
            <Link to="/alue/tampere" className="text-primary hover:underline">Tampereella</Link>,{" "}
            <Link to="/alue/nokia" className="text-primary hover:underline">Nokialla</Link>,{" "}
            <Link to="/alue/ylojarvi" className="text-primary hover:underline">Ylöjärvellä</Link>,{" "}
            <Link to="/alue/sastamala" className="text-primary hover:underline">Sastamalassa</Link>,{" "}
            <Link to="/alue/kangasala" className="text-primary hover:underline">Kangasalla</Link> ja{" "}
            <Link to="/alue/hameenkyro" className="text-primary hover:underline">Hämeenkyrössä</Link>.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Oli kyseessä sitten omakotitalon ulkomaalaus, kesämökin huoltomaalaus tai taloyhtiön tiilikaton pinnoitus, me hoidamme urakan alusta loppuun saakka reippaalla asenteella. Tiedämme, että Suomen vaihtelevat sääolosuhteet asettavat rakennusten ulkopinnoille kovat vaatimukset. Siksi käytämme työssämme vain alan parhaita menetelmiä ja laadukkaimpia materiaaleja. Nämä saavat lopputuloksen kestämään katsetta ja aikaa.
          </p>

          <h3 className="text-2xl md:text-3xl font-bold text-primary mt-10 mb-4 font-heading">
            Tiilikaton pinnoitus ja puhdistus – jatka kattosi elinikää
          </h3>
          <p className="text-foreground/80 leading-relaxed">
            Tiesitkö, että huonokuntoisen näköistä tiilikattoa ei useinkaan tarvitse uusia kokonaan? Ammattitaitoisesti tehty tiilikaton pinnoitus ja sammaleenpuhdistus ovat kustannustehokkaita tapoja palauttaa vanha katto uudenveroiseen loistoon. Säännöllinen katon huolto ja pinnoitus estävät kosteuden pääsyn kattorakenteisiin, ehkäisevät pakkasrapautumista ja pidentävät katon käyttöikää jopa kymmenillä vuosilla.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Me Pintasella teemme tiilikaton pinnoitukset, huollot ja puhdistukset huolellisena käsityönä. Eerik vastaa tiilikattokohteistamme ja varmistaa, että jokainen neliömetri käsitellään huolellisesti. Annamme tekemillemme tiilikaton pinnoituksille aina reilun 5 vuoden takuun.
          </p>

          <h3 className="text-2xl md:text-3xl font-bold text-primary mt-10 mb-4 font-heading">
            Talon ulkomaalaus suojaa kotiasi säiltä
          </h3>
          <p className="text-foreground/80 leading-relaxed">
            Laadukas ulkomaalaus on paitsi esteettinen kasvojenkohotus, myös kotisi tärkein suojakilpi. Oikein tehty pohjatyö ja laadukas maalipinta suojaavat puuverhousta auringon UV-säteilyltä, sateelta ja homeelta. Eemil johtaa Pintasen maalausprojekteja vuosien kokemuksella, varmistaen, että maali pysyy seinässä ja rajaukset ovat viivasuoria.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Toteutamme talojen maalaukset aina avaimet käteen -periaatteella. Tämä tarkoittaa, että me huolehdimme kaikesta: huolellisista pesuista ja homeenpoistoista, kaapimisesta, suojauksista, itse maalaustyöstä ja loppusiivouksesta. Käytämme vain Suomessa suunniteltuja ja valmistettuja huippumaaleja. Myönnämme ulkomaalaustöillemme 2 vuoden takuun, jotta voit nukkua yösi rauhassa.
          </p>

          <h3 className="text-2xl md:text-3xl font-bold text-primary mt-10 mb-4 font-heading">
            Miksi valita Pintanen huoltamaan kotisi?
          </h3>
          <p className="text-foreground/80 leading-relaxed">
            Markkinoilla on monia toimijoita, mutta me erotumme joukosta henkilökohtaisella palvelulla ja suoraviivaisella toimintamallilla. Kun pyydät meiltä tarjouksen, kohtaat samat henkilöt, jotka tulevat suorittamaan itse työn.
          </p>
          <ul className="space-y-2 text-foreground/80 list-none pl-0">
            <li><strong className="text-foreground">Ei välikäsiä:</strong> Vastaamme itse työn laadusta alusta loppuun.</li>
            <li><strong className="text-foreground">Maksuton arviokäynti:</strong> Tulemme paikan päälle kartoittamaan tilanteen veloituksetta.</li>
            <li><strong className="text-foreground">Takuutyö:</strong> 5 vuoden takuu pinnoituksille ja 2 vuoden takuu maalauksille.</li>
            <li><strong className="text-foreground">Kotitalousvähennys:</strong> Kaikki työmme oikeuttavat verotuksessa tehtävään kotitalousvähennykseen (jopa 35 % työn osuudesta).</li>
          </ul>
          <p className="text-foreground/80 leading-relaxed mt-4">
            Älä anna kattosi sammaloitua tai julkisivusi rapistua. Ota yhteyttä luotettavaan pirkanmaalaiseen tekijään ja{" "}
            <a href="#yhteystiedot" className="text-primary font-semibold hover:underline">pyydä ilmainen kuntokartoitus jo tänään!</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SEOTextSection;
