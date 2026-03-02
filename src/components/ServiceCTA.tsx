import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCTAProps {
  title?: string;
  subtitle?: string;
}

const ServiceCTA = ({
  title = "Kiinnostuitko?",
  subtitle = "Pyydä ilmainen arvio tai soita meille – vastaamme mielellämme kaikkiin kysymyksiisi."
}: ServiceCTAProps) => {
  return (
    <section className="section-padding bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">{title}</h2>
          <p className="text-muted-foreground text-lg mb-8">{subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+358409640066" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors">
              <Phone className="w-5 h-5" />
              Soita meille
            </a>
            <a href="#yhteystiedot" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:bg-accent/90 transition-colors">
              <Mail className="w-5 h-5" />
              Pyydä tarjous
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCTA;