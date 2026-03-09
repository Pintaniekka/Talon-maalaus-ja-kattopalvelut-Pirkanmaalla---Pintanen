import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, ArrowLeft, Loader2, User, Phone, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

type WallStories = "1" | "1.5" | "2" | null;
type WallPeeling = "none" | "1-2" | "3+" | null;

const STEPS = ["size", "stories", "peeling", "contact"] as const;
type Step = typeof STEPS[number];

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
  const [currentStep, setCurrentStep] = useState<Step>("size");
  const [squareMeters, setSquareMeters] = useState<number>(150);
  const [wallStories, setWallStories] = useState<WallStories>(null);
  const [wallPeeling, setWallPeeling] = useState<WallPeeling>(null);
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPrice, setShowPrice] = useState(false);

  const stepIndex = STEPS.indexOf(currentStep);

  const canGoNext = () => {
    if (currentStep === "size") return true;
    if (currentStep === "stories") return wallStories !== null;
    if (currentStep === "peeling") return wallPeeling !== null;
    return false;
  };

  const goNext = () => {
    const idx = STEPS.indexOf(currentStep);
    if (idx < STEPS.length - 1 && canGoNext()) setCurrentStep(STEPS[idx + 1]);
  };

  const goBack = () => {
    const idx = STEPS.indexOf(currentStep);
    if (idx > 0) setCurrentStep(STEPS[idx - 1]);
  };

  const calculatePrice = () => {
    if (!wallStories || !wallPeeling) return null;
    const basePrice = interpolatePrice(squareMeters);
    const storyMultipliers: Record<string, number> = { "1": 1.0, "1.5": 1.225, "2": 1.475 };
    const peelingMultipliers: Record<string, number> = { none: 1.0, "1-2": 1.15, "3+": 1.275 };
    const finalPrice = basePrice * (storyMultipliers[wallStories] || 1) * (peelingMultipliers[wallPeeling] || 1) * 0.9;
    return { min: Math.round(finalPrice * 0.9), max: Math.round(finalPrice * 1.1) };
  };

  const price = calculatePrice();

  const handleSubmitContact = async () => {
    if (!contactName.trim() || (!contactPhone.trim() && !contactEmail.trim())) {
      toast({ title: "Täytä yhteystiedot", description: "Nimi ja puhelin tai sähköposti vaaditaan.", variant: "destructive" });
      return;
    }
    setIsLoading(true);
    try {
      const storyLabels: Record<string, string> = { "1": "1 kerros", "1.5": "1,5 kerrosta", "2": "2 kerrosta" };
      const peelingLabels: Record<string, string> = { none: "Ei hilseilyä", "1-2": "1–2 seinällä", "3+": "Yli 3 seinällä" };
      await supabase.functions.invoke("send-contact-email", {
        body: {
          name: contactName,
          email: contactEmail || "",
          phone: contactPhone || "",
          service: "ulkomaalaus",
          message: "",
          priceEstimate: price ? `${price.min.toLocaleString("fi-FI")} – ${price.max.toLocaleString("fi-FI")} €` : "",
          calculatorDetails: `Pohjapinta-ala: ${squareMeters} m², Kerrokset: ${storyLabels[wallStories!] || ""}, Hilseily: ${peelingLabels[wallPeeling!] || ""}`,
        },
      });
      setShowPrice(true);
      toast({ title: "Kiitos!", description: "Yhteystietosi on vastaanotettu." });
    } catch {
      toast({ title: "Virhe", description: "Yritä uudelleen tai soita meille.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const stepVariants = {
    enter: { opacity: 0, x: 30 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  };

  const progress = ((stepIndex + 1) / STEPS.length) * 100;

  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border">
      {/* Progress */}
      {!showPrice && (
        <div className="mb-6">
          <div className="flex justify-between text-xs text-muted-foreground mb-2">
            <span>Vaihe {stepIndex + 1}/{STEPS.length}</span>
          </div>
          <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div className="h-full bg-primary rounded-full" initial={false} animate={{ width: `${progress}%` }} transition={{ duration: 0.3 }} />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {/* Step 1: Size */}
        {currentStep === "size" && !showPrice && (
          <motion.div key="size" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}>
            <label className="block text-foreground font-medium mb-3">Talon pohjapinta-ala (m²)</label>
            <div className="flex items-center gap-6">
              <input
                type="range" min="50" max="350" step="10" value={squareMeters}
                onChange={(e) => setSquareMeters(Number(e.target.value))}
                className="flex-1 h-2 bg-secondary rounded-full appearance-none cursor-pointer accent-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              />
              <div className="flex items-center gap-2 min-w-[100px]">
                <input
                  type="number" min="50" max="350" value={squareMeters}
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
          </motion.div>
        )}

        {/* Step 2: Stories */}
        {currentStep === "stories" && !showPrice && (
          <motion.div key="stories" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}>
            <label className="block text-foreground font-medium mb-3">Talon kerrokset</label>
            <div className="grid grid-cols-3 gap-4">
              {([
                { value: "1", label: "1 kerros" },
                { value: "1.5", label: "1,5 kerrosta" },
                { value: "2", label: "2 kerrosta" },
              ] as const).map((option) => (
                <button
                  key={option.value}
                  onClick={() => setWallStories(option.value as WallStories)}
                  className={`p-4 rounded-xl border-2 transition-all ${wallStories === option.value ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}
                >
                  <div className="text-2xl mb-1">🏡</div>
                  <div className="font-bold text-foreground">{option.label}</div>
                  {wallStories === option.value && <Check className="w-5 h-5 text-primary mx-auto mt-2" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 3: Peeling */}
        {currentStep === "peeling" && !showPrice && (
          <motion.div key="peeling" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}>
            <label className="block text-foreground font-medium mb-3">Maalin hilseilyn määrä</label>
            <div className="grid grid-cols-3 gap-4">
              {([
                { value: "none", label: "Ei hilseilyä" },
                { value: "1-2", label: "1–2 seinällä" },
                { value: "3+", label: "Yli 3 seinällä" },
              ] as const).map((option) => (
                <button
                  key={option.value}
                  onClick={() => setWallPeeling(option.value as WallPeeling)}
                  className={`p-4 rounded-xl border-2 transition-all ${wallPeeling === option.value ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}
                >
                  <div className="font-bold text-foreground text-sm">{option.label}</div>
                  {wallPeeling === option.value && <Check className="w-5 h-5 text-primary mx-auto mt-2" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 4: Contact */}
        {currentStep === "contact" && !showPrice && (
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
        )}

        {/* Price Result */}
        {showPrice && price && (
          <motion.div key="price" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-6 rounded-2xl bg-service-card text-white text-center">
            <div className="text-sm mb-2">Arvioitu hinta</div>
            <div className="text-4xl font-bold mb-2">
              {price.min.toLocaleString("fi-FI")} – {price.max.toLocaleString("fi-FI")} €
            </div>
            <div className="text-sm opacity-80 mb-4">2 vuoden takuu</div>
            <a href="#yhteystiedot" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:scale-105 transition-transform">
              Pyydä tarkka tarjous <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Buttons */}
      {!showPrice && (
        <div className="flex justify-between mt-8">
          <button
            onClick={goBack}
            disabled={stepIndex === 0}
            className="flex items-center gap-2 px-5 py-3 rounded-xl font-medium border border-border text-foreground hover:bg-muted transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4" /> Takaisin
          </button>

          {currentStep !== "contact" ? (
            <button
              onClick={goNext}
              disabled={!canGoNext()}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Seuraava <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmitContact}
              disabled={isLoading}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-all disabled:opacity-70"
            >
              {isLoading ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> Lähetetään...</>
              ) : (
                <><ArrowRight className="w-5 h-5" /> Näytä hinta-arvio</>
              )}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default WallPriceCalculator;
