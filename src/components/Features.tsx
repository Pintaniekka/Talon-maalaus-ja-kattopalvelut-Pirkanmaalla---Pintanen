import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <section className="py-6 bg-primary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-3"
        >
          <div className="flex items-center gap-2 text-primary-foreground">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="font-semibold text-sm md:text-base">
              Palvelualueet: Pirkanmaa –
            </span>
          </div>
          <div className="text-primary-foreground/90 text-sm md:text-base flex flex-wrap gap-x-1">
            <Link to="/kattopalvelut/pinnoitus" className="hover:text-accent transition-colors underline underline-offset-2">Tampere</Link>,
            <Link to="/kattopalvelut/pinnoitus" className="hover:text-accent transition-colors underline underline-offset-2">Sastamala</Link>,
            <Link to="/kattopalvelut/pinnoitus" className="hover:text-accent transition-colors underline underline-offset-2">Hämeenkyrö</Link>,
            <Link to="/kattopalvelut/pinnoitus" className="hover:text-accent transition-colors underline underline-offset-2">Ylöjärvi</Link>,
            <Link to="/kattopalvelut/pinnoitus" className="hover:text-accent transition-colors underline underline-offset-2">Nokia</Link> sekä
            <Link to="/kattopalvelut/pinnoitus" className="hover:text-accent transition-colors underline underline-offset-2">Forssa</Link>
          </div>
          <Link 
            to="/kattopalvelut/pinnoitus" 
            className="text-accent hover:text-accent/80 text-sm font-medium underline underline-offset-2 transition-colors"
          >
            Tiilikaton pinnoitus →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
