import { motion } from 'framer-motion';
import { Check, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const cards = [
  {
    size: '150–180 m²',
    label: 'Pieni/keskisuuri koti',
    normalPrice: '2 850 € – 3 200 €',
    afterPrice: '2 150 €',
    afterRange: '2 150 € – 2 400 €',
    duration: '2 työpäivää',
    featured: false,
  },
  {
    size: '190–240 m²',
    label: 'Yleisin kattokoko',
    normalPrice: '3 300 € – 3 700 €',
    afterPrice: '2 480 €',
    afterRange: '2 480 € – 2 760 €',
    duration: '2–3 työpäivää',
    featured: true,
  },
  {
    size: '250–300 m²',
    label: 'Suuri omakotitalo',
    normalPrice: '3 750 € – 4 880 €',
    afterPrice: '2 800 €',
    afterRange: '2 800 € – 3 600 €',
    duration: '2–4 työpäivää',
    featured: false,
  },
];

const includes = [
  'Syväpuhdistava pesu',
  'Kasvustonestokäsittely',
  'Tiilien vaihto & huolto',
  '2x Maalaus / Pinnoitus',
];

interface PinnoitusPricingCardsProps {
  cityName: string;
}

const PinnoitusPricingCards = ({ cityName }: PinnoitusPricingCardsProps) => {
  return (
    <section id="hintalaskuri" className="section-padding bg-accent-light">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Mitä tiilikaton pinnoitus maksaa {cityName}lla?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Me uskomme täysin avoimeen hinnoitteluun. Katon lopullinen hinta riippuu pinta-alasta, jyrkkyydestä ja tiilen kunnosta. Pintasen hinta on aina "avaimet käteen" -urakka, jossa ei ole piilokuluja.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Suuntaa antavia hintaesimerkkejä (sis. ALV 25,5 % ja avaimet käteen -toteutus)
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={card.size}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl shadow-lg border overflow-hidden flex flex-col ${
                card.featured
                  ? 'bg-card border-primary/40 md:-mt-4 md:mb-0 md:pb-4 ring-2 ring-primary/20'
                  : 'bg-card border-border/50'
              }`}
            >
              {card.featured && (
                <div className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider text-center py-2">
                  Yleisin kattokoko
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <p className="text-lg font-bold text-foreground mb-1">{card.size}</p>
                <p className="text-sm text-muted-foreground mb-4">{card.label}</p>

                <p className="text-sm line-through text-muted-foreground/60">
                  Norm. {card.normalPrice}
                </p>
                <p className="text-4xl font-bold text-primary mt-1">alk. {card.afterPrice}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  kotitalousvähennyksen jälkeen
                </p>

                <ul className="space-y-2 mt-6 mb-6">
                  {includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 mt-auto">
                  <Clock className="w-4 h-4" />
                  <span>Kesto: {card.duration}</span>
                </div>

                <a
                  href="#yhteystiedot"
                  className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl font-semibold text-white transition-all hover:brightness-110"
                  style={{ backgroundColor: 'hsl(202, 100%, 61%)' }}
                >
                  Pyydä tarjous tästä
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/tiilikaton-pinnoitus-hinta-pirkanmaa"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-foreground transition-all hover:brightness-95 text-lg"
            style={{ backgroundColor: 'hsl(36, 56%, 91%)' }}
          >
            Laske hinta: tiilikaton pinnoitus {cityName}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PinnoitusPricingCards;
