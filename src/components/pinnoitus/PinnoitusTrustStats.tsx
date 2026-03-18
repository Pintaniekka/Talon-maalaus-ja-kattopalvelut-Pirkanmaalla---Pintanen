import { motion } from 'framer-motion';
import { Star, Shield, Clock, Award } from 'lucide-react';

const stats = [
  { icon: Star, value: '4,9 / 5', label: 'Google-arvostelut', color: 'hsl(45, 100%, 51%)' },
  { icon: Award, value: '100+', label: 'Pinnoitettua kattoa', color: 'hsl(202, 100%, 61%)' },
  { icon: Clock, value: '+5 Vuotta', label: 'Alalla', color: 'hsl(142, 71%, 45%)' },
  { icon: Shield, value: '5 Vuotta', label: 'Kirjallinen takuu', color: 'hsl(262, 83%, 58%)' },
];

const PinnoitusTrustStats = () => {
  return (
    <section className="py-10 md:py-14 bg-secondary">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-elevated text-center py-6 px-4"
            >
              <stat.icon className="w-7 h-7 mx-auto mb-2" style={{ color: stat.color }} />
              <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-lg text-muted-foreground italic">
            Olen toteuttanut jokaisen urakan henkilökohtaisesti. Tiedän tarkalleen, miten kattosi saadaan kuntoon.
          </p>
          <p className="text-sm text-muted-foreground mt-2">— Kotimainen yrittäjä vastaa laadusta.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default PinnoitusTrustStats;
