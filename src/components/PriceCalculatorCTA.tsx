import { motion } from "framer-motion";
import { ArrowRight, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const PriceCalculatorCTA = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calculator className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
            Tiedätkö, mitä remonttisi maksaa?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Laske arvio projektisi hinnasta muutamassa sekunnissa. Meillä ei ole piilokuluja.
          </p>
          <Link
            to="/hinnat"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-colors shadow-lg"
          >
            Kokeile hintalaskuria
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PriceCalculatorCTA;
