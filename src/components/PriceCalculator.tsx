import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, Loader2, User, Phone, Mail } from 'lucide-react';
import { RoofTileIcon, PaintBrushIcon } from './ServiceIcons';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

type CalculatorType = 'roof' | 'wall' | null;
type RoofSlope = '5-19' | '20-30' | '31+' | null;
type WallStories = '1' | '1.5' | '2' | null;
type WallPeeling = 'none' | '1-2' | '3+' | null;

const ROOF_STEPS = ['size', 'slope', 'contact'] as const;
const WALL_STEPS = ['size', 'stories', 'peeling', 'contact'] as const;

const interpolatePrice = (m2: number): number => {
  const pricePoints = [
    { m2: 50, price: 2800 },
    { m2: 100, price: 4230 },
    { m2: 200, price: 6000 },
    { m2: 300, price: 7800 },
    { m2: 350, price: 8700 },
  ];
  if (m2 <= pricePoints[0].m2) return pricePoints[0].price;
  if (m2 >= pricePoints[pricePoints.length - 1].m2) return pricePoints[pricePoints.length - 1].price;
  for (let i = 0; i < pricePoints.length - 1; i++) {
    if (m2 >= pricePoints[i].m2 && m2 <= pricePoints[i + 1].m2) {
      const ratio = (m2 - pricePoints[i].m2) / (pricePoints[i + 1].m2 - pricePoints[i].m2);
      return pricePoints[i].price + ratio * (pricePoints[i + 1].price - pricePoints[i].price);
    }
  }
  return pricePoints[0].price;
};

const stepVariants = {
  enter: { opacity: 0, x: 30 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
};

const PriceCalculator = () => {
  const [calculatorType, setCalculatorType] = useState<CalculatorType>(null);

  // Roof state
  const [roofStep, setRoofStep] = useState(0);
  const [roofSquareMeters, setRoofSquareMeters] = useState<number>(200);
  const [roofSlope, setRoofSlope] = useState<RoofSlope>(null);

  // Wall state
  const [wallStep, setWallStep] = useState(0);
  const [squareMeters, setSquareMeters] = useState<number>(150);
  const [wallStories, setWallStories] = useState<WallStories>(null);
  const [wallPeeling, setWallPeeling] = useState<WallPeeling>(null);

  // Contact state (shared)
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPrice, setShowPrice] = useState(false);

  const resetCalculator = () => {
    setRoofStep(0);
    setWallStep(0);
    setRoofSquareMeters(200);
    setRoofSlope(null);
    setSquareMeters(150);
    setWallStories(null);
    setWallPeeling(null);
    setContactName('');
    setContactPhone('');
    setContactEmail('');
    setShowPrice(false);
  };

  // Price calculations
  const calculateRoofPrice = () => {
    if (!roofSlope) return null;
    const m2 = roofSquareMeters;
    let min: number, max: number;
    switch (roofSlope) {
      case '5-19': min = 15; max = 17; break;
      case '20-30': min = 18; max = 21; break;
      case '31+': min = 22; max = 25; break;
      default: return null;
    }
    return { min: Math.max(2850, m2 * min), max: Math.max(2850, m2 * max) };
  };

  const calculateWallPrice = () => {
    if (!wallStories || !wallPeeling) return null;
    const basePrice = interpolatePrice(squareMeters);
    const storyMul: Record<string, number> = { '1': 1.0, '1.5': 1.225, '2': 1.475 };
    const peelMul: Record<string, number> = { none: 1.0, '1-2': 1.15, '3+': 1.275 };
    const final = basePrice * (storyMul[wallStories] || 1) * (peelMul[wallPeeling] || 1) * 0.9;
    return { min: Math.round(final * 0.9), max: Math.round(final * 1.1) };
  };

  const roofPrice = calculateRoofPrice();
  const wallPrice = calculateWallPrice();
  const currentPrice = calculatorType === 'roof' ? roofPrice : wallPrice;

  const currentSteps = calculatorType === 'roof' ? ROOF_STEPS : WALL_STEPS;
  const currentStepIdx = calculatorType === 'roof' ? roofStep : wallStep;
  const setCurrentStepIdx = calculatorType === 'roof' ? setRoofStep : setWallStep;
  const currentStepName = currentSteps[currentStepIdx];

  const canGoNext = () => {
    if (calculatorType === 'roof') {
      if (currentStepName === 'size') return roofSquareMeters >= 100;
      if (currentStepName === 'slope') return roofSlope !== null;
    } else {
      if (currentStepName === 'size') return true;
      if (currentStepName === 'stories') return wallStories !== null;
      if (currentStepName === 'peeling') return wallPeeling !== null;
    }
    return false;
  };

  const goNext = () => { if (currentStepIdx < currentSteps.length - 1 && canGoNext()) setCurrentStepIdx(currentStepIdx + 1); };
  const goBack = () => { if (currentStepIdx > 0) setCurrentStepIdx(currentStepIdx - 1); };

  const handleSubmitContact = async () => {
    if (!contactName.trim() || (!contactPhone.trim() && !contactEmail.trim())) {
      toast({ title: 'Täytä yhteystiedot', description: 'Nimi ja puhelin tai sähköposti vaaditaan.', variant: 'destructive' });
      return;
    }
    setIsLoading(true);
    try {
      const service = calculatorType === 'roof' ? 'tiilikatto' : 'ulkomaalaus';
      let details = '';
      let estimate = '';
      if (calculatorType === 'roof') {
        const slopeLabels: Record<string, string> = { '5-19': '5-19° (Loiva)', '20-30': '20-30° (Normaali)', '31+': '31°+ (Jyrkkä)' };
        details = `Katon koko: ${roofSquareMeters} m², Kaltevuus: ${slopeLabels[roofSlope!] || ''}`;
        estimate = roofPrice ? `${roofPrice.min.toLocaleString('fi-FI')} – ${roofPrice.max.toLocaleString('fi-FI')} €` : '';
      } else {
        const storyLabels: Record<string, string> = { '1': '1 kerros', '1.5': '1,5 kerrosta', '2': '2 kerrosta' };
        const peelLabels: Record<string, string> = { none: 'Ei hilseilyä', '1-2': '1–2 seinällä', '3+': 'Yli 3 seinällä' };
        details = `Pohjapinta-ala: ${squareMeters} m², Kerrokset: ${storyLabels[wallStories!] || ''}, Hilseily: ${peelLabels[wallPeeling!] || ''}`;
        estimate = wallPrice ? `${wallPrice.min.toLocaleString('fi-FI')} – ${wallPrice.max.toLocaleString('fi-FI')} €` : '';
      }
      await supabase.functions.invoke('send-contact-email', {
        body: { name: contactName, email: contactEmail || '', phone: contactPhone || '', service, message: '', priceEstimate: estimate, calculatorDetails: details },
      });
      setShowPrice(true);
      toast({ title: 'Kiitos!', description: 'Yhteystietosi on vastaanotettu.' });
    } catch {
      toast({ title: 'Virhe', description: 'Yritä uudelleen tai soita meille.', variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };

  const progress = calculatorType ? ((currentStepIdx + 1) / currentSteps.length) * 100 : 0;

  // Contact form JSX (inline to avoid remount on every keystroke)
  const contactStepJSX = (
    <motion.div key="contact" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}>
      <label className="block text-foreground font-semibold mb-1 text-lg">Yhteystiedot</label>
      <p className="text-sm text-muted-foreground mb-4">Täytä yhteystietosi nähdäksesi hinta-arvion</p>
      <div className="space-y-3">
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input type="text" value={contactName} onChange={(e) => setContactName(e.target.value)} placeholder="Nimi *"
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" />
        </div>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input type="tel" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} placeholder="Puhelin"
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" />
        </div>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input type="email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} placeholder="Sähköposti"
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" />
        </div>
        <p className="text-xs text-muted-foreground">* Nimi ja puhelin tai sähköposti vaaditaan</p>
      </div>
    </motion.div>
  );

  return (
    <section id="hintalaskuri" className="section-padding bg-accent-light">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">Hintalaskuri</h2>
          <p className="text-muted-foreground text-lg">Laske arvio projektisi hinnasta muutamassa sekunnissa.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
          {/* Type selection */}
          {!calculatorType && (
            <div className="grid md:grid-cols-2 gap-6">
              <button onClick={() => setCalculatorType('roof')} className="relative overflow-hidden rounded-2xl text-left group hover:border-primary border-2 border-transparent transition-colors card-elevated">
                <div className="absolute inset-0 bg-gradient-to-br from-[#B71C1C]/15 via-[#B71C1C]/8 to-transparent pointer-events-none" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#B71C1C]/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <RoofTileIcon className="w-8 h-8 text-[#B71C1C]" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 font-heading">Tiilikaton pinnoitus</h3>
                  <p className="text-muted-foreground text-sm">Laske katon pinnoituksen hinta-arvio neliömetrien ja kaltevuuden perusteella.</p>
                </div>
              </button>
              <button onClick={() => setCalculatorType('wall')} className="relative overflow-hidden rounded-2xl text-left group hover:border-primary border-2 border-transparent transition-colors card-elevated">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffec4e]/20 via-[#ffec4e]/10 to-transparent pointer-events-none" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#ffec4e]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <PaintBrushIcon className="w-8 h-8 text-[#D4A017]" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 font-heading">Ulkomaalaus</h3>
                  <p className="text-muted-foreground text-sm">Laske seinien maalauksen hinta-arvio pinta-alan ja kerrosten perusteella.</p>
                </div>
              </button>
            </div>
          )}

          {/* Calculator wizard */}
          {calculatorType && (
            <div className="card-elevated">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-foreground font-heading">
                  {calculatorType === 'roof' ? 'Tiilikaton pinnoitus' : 'Ulkomaalaus'}
                </h3>
                <button onClick={() => { setCalculatorType(null); resetCalculator(); }} className="text-muted-foreground hover:text-foreground text-sm">
                  ← Vaihda laskuri
                </button>
              </div>

              {/* Progress */}
              {!showPrice && (
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-muted-foreground mb-2">
                    <span>Vaihe {currentStepIdx + 1}/{currentSteps.length}</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div className="h-full bg-primary rounded-full" initial={false} animate={{ width: `${progress}%` }} transition={{ duration: 0.3 }} />
                  </div>
                </div>
              )}

              <AnimatePresence mode="wait">
                {/* ROOF STEPS */}
                {calculatorType === 'roof' && currentStepName === 'size' && !showPrice && (
                  <motion.div key="roof-size" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}>
                    <label className="block text-foreground font-medium mb-3">Katon koko neliömetreinä</label>
                    <div className="flex items-center gap-6">
                      <input type="range" min="100" max="400" step="10" value={roofSquareMeters} onChange={(e) => setRoofSquareMeters(Number(e.target.value))}
                        className="flex-1 h-2 bg-secondary rounded-full appearance-none cursor-pointer accent-primary" />
                      <div className="flex items-center gap-2 min-w-[100px]">
                        <input type="number" min="100" max="400" value={roofSquareMeters} onChange={(e) => setRoofSquareMeters(Math.min(400, Math.max(100, Number(e.target.value))))}
                          className="w-20 px-3 py-2 rounded-lg border border-border bg-background text-foreground text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" />
                        <span className="text-muted-foreground">m²</span>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-2"><span>100 m²</span><span>400 m²</span></div>
                  </motion.div>
                )}

                {calculatorType === 'roof' && currentStepName === 'slope' && !showPrice && (
                  <motion.div key="roof-slope" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}>
                    <label className="block text-foreground font-medium mb-3">Katon kaltevuus</label>
                    <div className="grid grid-cols-3 gap-4">
                      {([{ value: '5-19', label: '5-19°', desc: 'Loiva' }, { value: '20-30', label: '20-30°', desc: 'Normaali' }, { value: '31+', label: '31°+', desc: 'Jyrkkä' }] as const).map((o) => (
                        <button key={o.value} onClick={() => setRoofSlope(o.value)}
                          className={`p-4 rounded-xl border-2 transition-all ${roofSlope === o.value ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}>
                          <div className="text-2xl mb-1">🏠</div>
                          <div className="font-bold text-foreground">{o.label}</div>
                          <div className="text-sm text-muted-foreground">{o.desc}</div>
                          {roofSlope === o.value && <Check className="w-5 h-5 text-primary mx-auto mt-2" />}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* WALL STEPS */}
                {calculatorType === 'wall' && currentStepName === 'size' && !showPrice && (
                  <motion.div key="wall-size" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}>
                    <label className="block text-foreground font-medium mb-3">Talon pohjapinta-ala (m²)</label>
                    <div className="flex items-center gap-6">
                      <input type="range" min="50" max="350" step="10" value={squareMeters} onChange={(e) => setSquareMeters(Number(e.target.value))}
                        className="flex-1 h-2 bg-secondary rounded-full appearance-none cursor-pointer accent-primary" />
                      <div className="flex items-center gap-2 min-w-[100px]">
                        <input type="number" min="50" max="350" value={squareMeters} onChange={(e) => setSquareMeters(Math.min(350, Math.max(50, Number(e.target.value))))}
                          className="w-20 px-3 py-2 rounded-lg border border-border bg-background text-foreground text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" />
                        <span className="text-muted-foreground">m²</span>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-2"><span>50 m²</span><span>350 m²</span></div>
                  </motion.div>
                )}

                {calculatorType === 'wall' && currentStepName === 'stories' && !showPrice && (
                  <motion.div key="wall-stories" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}>
                    <label className="block text-foreground font-medium mb-3">Talon kerrokset</label>
                    <div className="grid grid-cols-3 gap-4">
                      {([{ value: '1', label: '1 kerros' }, { value: '1.5', label: '1,5 kerrosta' }, { value: '2', label: '2 kerrosta' }] as const).map((o) => (
                        <button key={o.value} onClick={() => setWallStories(o.value as WallStories)}
                          className={`p-4 rounded-xl border-2 transition-all ${wallStories === o.value ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}>
                          <div className="text-2xl mb-1">🏡</div>
                          <div className="font-bold text-foreground">{o.label}</div>
                          {wallStories === o.value && <Check className="w-5 h-5 text-primary mx-auto mt-2" />}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {calculatorType === 'wall' && currentStepName === 'peeling' && !showPrice && (
                  <motion.div key="wall-peeling" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}>
                    <label className="block text-foreground font-medium mb-3">Maalin hilseilyn määrä</label>
                    <div className="grid grid-cols-3 gap-4">
                      {([{ value: 'none', label: 'Ei hilseilyä' }, { value: '1-2', label: '1–2 seinällä' }, { value: '3+', label: 'Yli 3 seinällä' }] as const).map((o) => (
                        <button key={o.value} onClick={() => setWallPeeling(o.value as WallPeeling)}
                          className={`p-4 rounded-xl border-2 transition-all ${wallPeeling === o.value ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}>
                          <div className="font-bold text-foreground text-sm">{o.label}</div>
                          {wallPeeling === o.value && <Check className="w-5 h-5 text-primary mx-auto mt-2" />}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* CONTACT (shared) */}
                {currentStepName === 'contact' && !showPrice && contactStepJSX}

                {/* PRICE RESULT */}
                {showPrice && currentPrice && (
                  <motion.div key="price" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-6 rounded-2xl bg-primary text-primary-foreground text-center">
                    <div className="text-sm mb-2">Arvioitu hinta</div>
                    <div className="text-4xl font-bold mb-2">
                      {currentPrice.min.toLocaleString('fi-FI')} – {currentPrice.max.toLocaleString('fi-FI')} €
                    </div>
                    <div className="text-sm opacity-80 mb-4">{calculatorType === 'roof' ? '5 vuoden takuu' : '2 vuoden takuu'}</div>
                    <a href="#yhteystiedot" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:scale-105 transition-transform">
                      Pyydä tarkka tarjous <ArrowRight className="w-4 h-4" />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation */}
              {!showPrice && (
                <div className="flex justify-between mt-8">
                  <button onClick={goBack} disabled={currentStepIdx === 0}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl font-medium border border-border text-foreground hover:bg-muted transition-all disabled:opacity-30 disabled:cursor-not-allowed">
                    <ArrowLeft className="w-4 h-4" /> Takaisin
                  </button>
                  {currentStepName !== 'contact' ? (
                    <button onClick={goNext} disabled={!canGoNext()}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                      Seuraava <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button onClick={handleSubmitContact} disabled={isLoading}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-all disabled:opacity-70">
                      {isLoading ? <><Loader2 className="w-5 h-5 animate-spin" /> Lähetetään...</> : <><ArrowRight className="w-5 h-5" /> Näytä hinta-arvio</>}
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PriceCalculator;
