import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import { getStorageUrl } from '@/lib/storage';
import WhatsAppIcon from './WhatsAppIcon';

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
    image: getStorageUrl('Pictures-200/Eerik-kattomaalari-200.webp'),
    whatsapp: 'https://wa.me/358409640066',
  },
  {
    name: 'Eemil',
    role: 'Yrittäjä – Maalauspalvelut',
    phone: '040 164 2233',
    phoneHref: 'tel:+358401642233',
    email: 'myynti@pintanen.fi',
    image: getStorageUrl('Pictures-200/Eemil-seinamaalari-200.webp'),
    whatsapp: 'https://wa.me/358401642233',
  },
];

const TeamContactSection = ({ cityName }: TeamContactSectionProps) => {
  const title = cityName ? `Yhteystiedot ${cityName} alueella` : 'Yhteystiedot';

  return (
    <section id="yhteystiedot" className="section-padding bg-background">
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
              <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mb-4 overflow-hidden">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={96}
                  height={96}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted-foreground"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';
                  }}
                />
              </div>

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
                <a
                  href={person.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 mt-4 px-6 py-2 rounded-full font-medium text-white transition-colors hover:opacity-90 text-sm"
                  style={{ backgroundColor: '#5ddb79' }}
                >
                  <WhatsAppIcon className="w-5 h-5" color="white" />
                  WhatsApp
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
