import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

type RoofSlope = "5-19" | "20-30" | "31+" | null;

const RoofPriceCalculator = () => {
  const [roofSquareMeters, setRoofSquareMeters] = useState<string>("");
  const [roofSlope, setRoofSlope] = useState<RoofSlope>(null);

  const calculateRoofPrice = () => {
    if (!roofSquareMeters || !roofSlope) return null;
    const m2 = parseFloat(roofSquareMeters);

    let pricePerM2Min: number, pricePerM2Max: number;
    switch (roofSlope) {
      case "5-19":
        pricePerM2Min = 15; pricePerM2Max = 17;
        break;
      case "20-30":
        pricePerM2Min = 18; pricePerM2Max = 21;
        break;
      case "31+":
        pricePerM2Min = 22; pricePerM2Max = 25;
        break;
      default:
        return null;
    }

    const minPrice = Math.max(2850, m2 * pricePerM2Min);
    const maxPrice = Math.max(2850, m2 * pricePerM2Max);
    return { min: minPrice, max: maxPrice };
  };

  const roofPrice = calculateRoofPrice();

  return (
    <div className="card-elevated">
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
              { value: "5-19", label: "5-19°", desc: "Loiva" },
              { value: "20-30", label: "20-30°", desc: "Normaali" },
              { value: "31+", label: "31°+", desc: "Jyrkkä" },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setRoofSlope(option.value as RoofSlope)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  roofSlope === option.value
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
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
            {roofPrice.min.toLocaleString("fi-FI")} – {roofPrice.max.toLocaleString("fi-FI")} €
          </div>
          <div className="text-sm opacity-80 mb-4">5 vuoden takuu</div>
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

export default RoofPriceCalculator;
