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
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+358443227738" className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity">
              <Phone className="w-5 h-5" />
              Soita meille
            </a>
            <Link to="/yhteystiedot" className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground text-primary-foreground font-semibold px-8 py-4 rounded-xl hover:bg-primary-foreground/10 transition-colors">
              <Mail className="w-5 h-5" />
              Pyydä tarjous
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCTA;
};

export default ServiceCTA;