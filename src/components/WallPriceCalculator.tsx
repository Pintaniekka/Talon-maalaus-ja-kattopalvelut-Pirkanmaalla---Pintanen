import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

type WallStories = '1' | '1.5' | '2' | null;
type WallPeeling = 'none' | '1-2' | '3+' | null;

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

const WallPriceCalculator = () => {
  const [squareMeters, setSquareMeters] = useState<number>(150);
  const [wallStories, setWallStories] = useState<WallStories>(null);
  const [wallPeeling, setWallPeeling] = useState<WallPeeling>(null);

  const calculatePrice = () => {
    if (!wallStories || !wallPeeling) return null;
    const basePrice = interpolatePrice(squareMeters);
    const storyMultipliers: Record<string, number> = { '1': 1.0, '1.5': 1.225, '2': 1.475 };
    const peelingMultipliers: Record<string, number> = { 'none': 1.0, '1-2': 1.15, '3+': 1.275 };
    const finalPrice = basePrice * (storyMultipliers[wallStories] || 1) * (peelingMultipliers[wallPeeling] || 1) * 0.9;
    return { min: Math.round(finalPrice * 0.9), max: Math.round(finalPrice * 1.1) };
  };

  const price = calculatePrice();

  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border">
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
      <div className="mb-8">
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
      </div>

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
              { value: '1-2', label: '1–2 seinällä' },
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
      {price && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 rounded-2xl bg-primary text-primary-foreground text-center"
        >
          <div className="text-sm mb-2">Arvioitu hinta</div>
          <div className="text-4xl font-bold mb-2">
            {price.min.toLocaleString('fi-FI')} – {price.max.toLocaleString('fi-FI')} €
          </div>
          <div className="text-sm opacity-80 mb-4">2 vuoden takuu</div>
          <a
            href="#yhteystiedot"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:scale-105 transition-transform"
          >
            Pyydä tarkka tarjous
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default WallPriceCalculator;
