import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Home, ArrowRight, Check } from 'lucide-react';
import { RoofTileIcon, PaintBrushIcon } from './ServiceIcons';

type CalculatorType = 'roof' | 'wall' | null;
type RoofSlope = '5-19' | '20-30' | '31+' | null;
type WallStories = '1' | '1.5' | '2' | null;
type WallPeeling = 'none' | '1-2' | '3+' | null;

// Price interpolation helper
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

const PriceCalculator = () => {
  const [calculatorType, setCalculatorType] = useState<CalculatorType>(null);
  const [squareMeters, setSquareMeters] = useState<number>(150);
  const [roofSquareMeters, setRoofSquareMeters] = useState<string>('');
  const [roofSlope, setRoofSlope] = useState<RoofSlope>(null);
  const [wallStories, setWallStories] = useState<WallStories>(null);
  const [wallPeeling, setWallPeeling] = useState<WallPeeling>(null);

  const calculateRoofPrice = () => {
    if (!roofSquareMeters || !roofSlope) return null;
    const m2 = parseFloat(roofSquareMeters);
    
    let pricePerM2Min: number, pricePerM2Max: number;
    switch (roofSlope) {
      case '5-19':
        pricePerM2Min = 15; pricePerM2Max = 17;
        break;
      case '20-30':
        pricePerM2Min = 18; pricePerM2Max = 21;
        break;
      case '31+':
        pricePerM2Min = 22; pricePerM2Max = 25;
        break;
      default:
        return null;
    }

    const minPrice = Math.max(2850, m2 * pricePerM2Min);
    const maxPrice = Math.max(2850, m2 * pricePerM2Max);

    return { min: minPrice, max: maxPrice };
  };

  const calculateWallPrice = () => {
    if (!wallStories || !wallPeeling) return null;
    
    // Get interpolated base price
    const basePrice = interpolatePrice(squareMeters);
    
    // Story multiplier
    const storyMultipliers: Record<string, number> = {
      '1': 1.0,
      '1.5': 1.225,
      '2': 1.475,
    };
    
    // Peeling multiplier
    const peelingMultipliers: Record<string, number> = {
      'none': 1.0,
      '1-2': 1.15,
      '3+': 1.275,
    };

    const storyMultiplier = storyMultipliers[wallStories] || 1;
    const peelingMultiplier = peelingMultipliers[wallPeeling] || 1;
    
    // Competition multiplier (10% discount)
    const competitionMultiplier = 0.9;
    
    const finalPrice = basePrice * storyMultiplier * peelingMultiplier * competitionMultiplier;
    
    // Return price range (±10%)
    return { 
      min: Math.round(finalPrice * 0.9), 
      max: Math.round(finalPrice * 1.1) 
    };
  };

  const roofPrice = calculateRoofPrice();
  const wallPrice = calculateWallPrice();

  const resetCalculator = () => {
    setSquareMeters(150);
    setRoofSquareMeters('');
    setRoofSlope(null);
    setWallStories(null);
    setWallPeeling(null);
  };

  return (
    <section id="hintalaskuri" className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
            Hintalaskuri
          </h2>
          <p className="text-muted-foreground text-lg">
            Laske arvio projektisi hinnasta muutamassa sekunnissa.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {/* Calculator Type Selection */}
          {!calculatorType && (
            <div className="grid md:grid-cols-2 gap-6">
              <button
                onClick={() => setCalculatorType('roof')}
                className="relative overflow-hidden rounded-2xl text-left group hover:border-primary border-2 border-transparent transition-colors card-elevated"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#B71C1C]/15 via-[#B71C1C]/8 to-transparent pointer-events-none" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#B71C1C]/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                     <RoofTileIcon className="w-8 h-8 text-[#B71C1C]" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 font-heading">
                    Tiilikaton pinnoitus
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Laske katon pinnoituksen hinta-arvio neliömetrien ja kaltevuuden perusteella.
                  </p>
                </div>
              </button>

              <button
                onClick={() => setCalculatorType('wall')}
                className="relative overflow-hidden rounded-2xl text-left group hover:border-primary border-2 border-transparent transition-colors card-elevated"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffec4e]/20 via-[#ffec4e]/10 to-transparent pointer-events-none" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#ffec4e]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                     <PaintBrushIcon className="w-8 h-8 text-[#D4A017]" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 font-heading">
                    Ulkomaalaus
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Laske seinien maalauksen hinta-arvio pinta-alan ja kerrosten perusteella.
                  </p>
                </div>
              </button>
            </div>
          )}

          {/* Roof Calculator */}
          <AnimatePresence mode="wait">
            {calculatorType === 'roof' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="card-elevated"
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-foreground font-heading">
                    Tiilikaton pinnoitus
                  </h3>
                  <button
                    onClick={() => { setCalculatorType(null); resetCalculator(); }}
                    className="text-muted-foreground hover:text-foreground text-sm"
                  >
                    ← Takaisin
                  </button>
                </div>

                {/* Square Meters */}
                <div className="mb-8">
                  <label className="block text-foreground font-medium mb-3">
                    1. Katon koko neliömetreinä
                  </label>
                  <input
                    type="number"
                    value={roofSquareMeters}
                    onChange={(e) => setRoofSquareMeters(e.target.value)}
                    placeholder="Esim. 150"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  />
                </div>

                {/* Roof Slope */}
                {roofSquareMeters && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                  >
                    <label className="block text-foreground font-medium mb-3">
                      2. Katon kaltevuus
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { value: '5-19', label: '5-19°', desc: 'Loiva' },
                        { value: '20-30', label: '20-30°', desc: 'Normaali' },
                        { value: '31+', label: '31°+', desc: 'Jyrkkä' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setRoofSlope(option.value as RoofSlope)}
                          className={`p-4 rounded-xl border-2 transition-all ${
                            roofSlope === option.value
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="text-2xl mb-1">🏠</div>
                          <div className="font-bold text-foreground">{option.label}</div>
                          <div className="text-sm text-muted-foreground">{option.desc}</div>
                          {roofSlope === option.value && (
                            <Check className="w-5 h-5 text-primary mx-auto mt-2" />
                          )}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Price Result */}
                {roofPrice && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 rounded-2xl bg-primary text-primary-foreground text-center"
                  >
                    <div className="text-sm mb-2">Arvioitu hinta</div>
                    <div className="text-4xl font-bold mb-2">
                      {roofPrice.min.toLocaleString('fi-FI')} - {roofPrice.max.toLocaleString('fi-FI')} €
                    </div>
                    <div className="text-sm opacity-80 mb-4">
                      5 vuoden takuu
                    </div>
                    <a
                      href="#yhteystiedot"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:scale-105 transition-transform"
                    >
                      Pyydä tarkka tarjous
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </motion.div>
                )}
              </motion.div>
            )}

            {calculatorType === 'wall' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="card-elevated"
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-foreground font-heading">
                    Ulkomaalaus
                  </h3>
                  <button
                    onClick={() => { setCalculatorType(null); resetCalculator(); }}
                    className="text-muted-foreground hover:text-foreground text-sm"
                  >
                    ← Takaisin
                  </button>
                </div>

                {/* Square Meters - Slider */}
                <div className="mb-8">
                  <label className="block text-foreground font-medium mb-3">
                    1. Talon pohjapinta-ala (m²)
                  </label>
                  <div className="flex items-center gap-6">
                    <input
                      type="range"
                      min="50"
                      max="350"
                      step="10"
                      value={squareMeters}
                      onChange={(e) => setSquareMeters(Number(e.target.value))}
                      className="flex-1 h-2 bg-secondary rounded-full appearance-none cursor-pointer accent-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    />
                    <div className="flex items-center gap-2 min-w-[100px]">
                      <input
                        type="number"
                        min="50"
                        max="350"
                        value={squareMeters}
                        onChange={(e) => setSquareMeters(Math.min(350, Math.max(50, Number(e.target.value))))}
                        className="w-20 px-3 py-2 rounded-lg border border-border bg-background text-foreground text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      />
                      <span className="text-muted-foreground">m²</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>50 m²</span>
                    <span>350 m²</span>
                  </div>
                </div>

                {/* Stories */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8"
                >
                  <label className="block text-foreground font-medium mb-3">
                    2. Talon kerrokset
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { value: '1', label: '1 kerros' },
                      { value: '1.5', label: '1,5 kerrosta' },
                      { value: '2', label: '2 kerrosta' },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setWallStories(option.value as WallStories)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          wallStories === option.value
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="text-2xl mb-1">🏡</div>
                        <div className="font-bold text-foreground">{option.label}</div>
                        {wallStories === option.value && (
                          <Check className="w-5 h-5 text-primary mx-auto mt-2" />
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Peeling */}
                {wallStories && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                  >
                    <label className="block text-foreground font-medium mb-3">
                      3. Maalin hilseilyn määrä
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { value: 'none', label: 'Ei hilseilyä' },
                        { value: '1-2', label: '1-2 seinällä' },
                        { value: '3+', label: 'Yli 3 seinällä' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setWallPeeling(option.value as WallPeeling)}
                          className={`p-4 rounded-xl border-2 transition-all ${
                            wallPeeling === option.value
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="font-bold text-foreground text-sm">{option.label}</div>
                          {wallPeeling === option.value && (
                            <Check className="w-5 h-5 text-primary mx-auto mt-2" />
                          )}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Price Result */}
                {wallPrice && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 rounded-2xl bg-primary text-primary-foreground text-center"
                  >
                    <div className="text-sm mb-2">Arvioitu hinta</div>
                    <div className="text-4xl font-bold mb-2">
                      {wallPrice.min.toLocaleString('fi-FI')} - {wallPrice.max.toLocaleString('fi-FI')} €
                    </div>
                    <div className="text-sm opacity-80 mb-4">
                      2 vuoden takuu
                    </div>
                    <a
                      href="#yhteystiedot"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:scale-105 transition-transform"
                    >
                      Pyydä tarkka tarjous
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PriceCalculator;
