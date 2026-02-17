import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send, Check, Loader2, User } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

type ContactVariant = 'katto' | 'maalaus' | 'general';

interface ServiceContactSectionProps {
  variant?: ContactVariant;
  cityName?: string;
}

const contactPersons = {
  katto: {
    name: 'Eerik Pitkänen',
    role: 'Yrittäjä – Kattopalvelut',
    phone: '040 964 0066',
    phoneHref: 'tel:+358409640066',
    email: 'myynti@pintanen.fi',
  },
  maalaus: {
    name: 'Eemil Pitkänen',
    role: 'Yrittäjä – Maalauspalvelut',
    phone: '040 964 0066',
    phoneHref: 'tel:+358409640066',
    email: 'myynti@pintanen.fi',
  },
};

const ServiceContactSection = ({ variant = 'general', cityName }: ServiceContactSectionProps) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    try {
      if (!supabase) throw new Error('Yhteys palvelimeen ei ole käytettävissä');
      const { data, error } = await supabase.functions.invoke('send-contact-email', { body: formState });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', phone: '', service: '', message: '' });
      toast({ title: 'Tarjouspyyntö lähetetty!', description: 'Vastaamme mahdollisimman pian.' });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err: unknown) {
      console.error('Form submission error:', err);
      toast({ title: 'Virhe lähetyksessä', description: 'Yritä uudelleen tai soita meille.', variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };

  const title = cityName ? `Yhteystiedot ${cityName} alueella` : 'Ota yhteyttä';

  const persons = variant === 'general'
    ? [contactPersons.katto, contactPersons.maalaus]
    : [contactPersons[variant]];

  return (
    <section id="yhteystiedot" className="section-padding bg-primary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-heading">{title}</h2>
          <p className="text-primary-foreground/70 text-lg">
            Pyydä ilmainen arviokäynti tai tarjouspyyntö. Vastaamme vuorokauden sisään!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Person Card(s) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {persons.map((person) => (
              <div key={person.name} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <User className="w-8 h-8 text-primary-foreground/70" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-foreground">{person.name}</h3>
                    <p className="text-sm text-primary-foreground/60">{person.role}</p>
                    <p className="text-xs text-primary-foreground/40 mt-0.5">Henkilökuva tulossa</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <a
                    href={person.phoneHref}
                    className="flex items-center gap-3 py-3 px-4 rounded-xl bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    {person.phone}
                  </a>
                  <a
                    href={`mailto:${person.email}`}
                    className="flex items-center gap-3 py-3 px-4 rounded-xl bg-white/10 text-primary-foreground font-medium hover:bg-white/15 transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    {person.email}
                  </a>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-xl font-bold text-card-foreground mb-6 font-heading">Pyydä tarjous</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nimi *</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    placeholder="Matti Meikäläinen"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Sähköposti *</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      placeholder="matti@esimerkki.fi"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Puhelin</label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      placeholder="040 123 4567"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-service" className="block text-sm font-medium text-foreground mb-2">Palvelu</label>
                  <select
                    id="contact-service"
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    <option value="">Valitse palvelu</option>
                    <option value="tiilikatto">Tiilikaton pinnoitus</option>
                    <option value="ulkomaalaus">Ulkomaalaus</option>
                    <option value="puhdistus">Katon puhdistus</option>
                    <option value="muu">Muu</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Viesti</label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 resize-none"
                    placeholder="Kerro projektistasi..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitted || isLoading}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all ${
                    isSubmitted ? 'bg-green-500 text-white' : 'bg-accent text-accent-foreground hover:bg-accent/90'
                  }`}
                >
                  {isSubmitted ? (
                    <><Check className="w-5 h-5" /> Lähetetty!</>
                  ) : isLoading ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Lähetetään...</>
                  ) : (
                    <><Send className="w-5 h-5" /> Lähetä tarjouspyyntö</>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceContactSection;
