import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Check, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    try {
      if (!supabase) {
        throw new Error('Yhteys palvelimeen ei ole käytettävissä');
      }
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formState,
      });

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
  return <section id="yhteystiedot" className="section-padding bg-primary">
      <div className="section-container">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-heading">
            Ota yhteyttä
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Pyydä ilmainen arviokäynti tai tarjouspyyntö. Vastaamme vuorokauden sisään!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-6 font-heading">
                Pintanen Oy
              </h3>
              <p className="text-primary-foreground/70 mb-8">
                <Link to="/kattopalvelut/pinnoitus" className="underline underline-offset-2 hover:text-primary-foreground transition-colors">Tiilikattojen pinnoitukset</Link> ja ulkomaalaukset ammattitaidolla. 
                Toiminta-alue: <Link to="/kattopalvelut/pinnoitus" className="underline underline-offset-2 hover:text-primary-foreground transition-colors">Pirkanmaa</Link> ja ympäröivät kunnat.
              </p>
            </div>

            <div className="space-y-4">
              <a href="tel:+358409640066" className="flex items-center gap-4 p-5 rounded-xl bg-white/10 hover:bg-white/15 transition-colors group border border-white/10">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/60">Soita meille</div>
                  <div className="font-bold text-primary-foreground text-xl">040 964 0066</div>
                </div>
              </a>

              <a href="mailto:myynti@pintanen.fi" className="flex items-center gap-4 p-5 rounded-xl bg-white/10 hover:bg-white/15 transition-colors group border border-white/10">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/60">Sähköposti</div>
                  <div className="font-bold text-primary-foreground text-lg">myynti@pintanen.fi</div>
                </div>
              </a>

              <Link to="/kattopalvelut/pinnoitus" className="flex items-center gap-4 p-5 rounded-xl bg-white/10 hover:bg-white/15 transition-colors group border border-white/10">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/60">Toiminta-alue</div>
                  <div className="font-bold text-primary-foreground text-lg">Pirkanmaa ja ympäristö</div>
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }}>
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-xl font-bold text-card-foreground mb-6 font-heading">
                Pyydä tarjous
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nimi *
                  </label>
                    <input type="text" required value={formState.name} onChange={e => setFormState({
                  ...formState,
                  name: e.target.value
                })} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" placeholder="Matti Meikäläinen" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Sähköposti *
                    </label>
                    <input type="email" required value={formState.email} onChange={e => setFormState({
                    ...formState,
                    email: e.target.value
                  })} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" placeholder="matti@esimerkki.fi" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Puhelin
                    </label>
                    <input type="tel" value={formState.phone} onChange={e => setFormState({
                    ...formState,
                    phone: e.target.value
                  })} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" placeholder="040 123 4567" />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Palvelu
                  </label>
                  <select id="service" name="service" value={formState.service} onChange={e => setFormState({
                  ...formState,
                  service: e.target.value
                })} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                    <option value="">Valitse palvelu</option>
                    <option value="tiilikatto">Tiilikaton pinnoitus</option>
                    <option value="ulkomaalaus">Ulkomaalaus</option>
                    <option value="puhdistus">Katon puhdistus</option>
                    <option value="muu">Muu</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Viesti
                  </label>
                  <textarea value={formState.message} onChange={e => setFormState({
                  ...formState,
                  message: e.target.value
                })} rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 resize-none" placeholder="Kerro projektistasi..." />
                </div>

                <button type="submit" disabled={isSubmitted || isLoading} className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all ${isSubmitted ? 'bg-green-500 text-white' : 'bg-accent text-accent-foreground hover:bg-accent/90'}`}>
                  {isSubmitted ? <>
                      <Check className="w-5 h-5" />
                      Lähetetty!
                    </> : isLoading ? <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Lähetetään...
                    </> : <>
                      <Send className="w-5 h-5" />
                      Lähetä tarjouspyyntö
                    </>}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Contact;