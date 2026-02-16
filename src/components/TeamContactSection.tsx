import { motion } from 'framer-motion';
import { Phone, Mail, User } from 'lucide-react';

interface TeamContactSectionProps {
  cityName?: string;
}

const team = [
  {
    name: 'Eerik',
    role: 'Yrittäjä – Kattopalvelut',
    phone: '040 964 0066',
    phoneHref: 'tel:+358409640066',
    email: 'myynti@pintanen.fi',
  },
  {
    name: 'Eemil',
    role: 'Yrittäjä – Maalauspalvelut',
    phone: '040 964 0066',
    phoneHref: 'tel:+358409640066',
    email: 'myynti@pintanen.fi',
  },
];

const TeamContactSection = ({ cityName }: TeamContactSectionProps) => {
  const title = cityName ? `Ota yhteyttä – ${cityName}` : 'Yhteystiedot';

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading">{title}</h2>
          <p className="text-muted-foreground text-lg mt-3 max-w-xl mx-auto">
            Vastaamme mielellämme kysymyksiisi ja annamme maksuttoman arvion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {team.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-elevated flex flex-col items-center text-center"
            >
              {/* Placeholder avatar */}
              <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mb-4">
                <User className="w-10 h-10 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground mb-2">Henkilökuva tulossa</p>

              <h3 className="text-lg font-bold text-foreground">{person.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{person.role}</p>

              <div className="space-y-2 w-full">
                <a
                  href={person.phoneHref}
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {person.phone}
                </a>
                <a
                  href={`mailto:${person.email}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  {person.email}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamContactSection;
