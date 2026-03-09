import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, ArrowLeft, Loader2, User, Phone, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

type RoofSlope = "5-19" | "20-30" | "31+" | null;

const STEPS = ["size", "slope", "contact"] as const;
type Step = typeof STEPS[number];

const RoofPriceCalculator = () => {
  const [currentStep, setCurrentStep] = useState<Step>("size");
  const [roofSquareMeters, setRoofSquareMeters] = useState<number>(200);
  const [roofSlope, setRoofSlope] = useState<RoofSlope>(null);
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPrice, setShowPrice] = useState(false);

  const stepIndex = STEPS.indexOf(currentStep);

  const canGoNext = () => {
    if (currentStep === "size") return roofSquareMeters >= 100;
    if (currentStep === "slope") return roofSlope !== null;
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

  const calculateRoofPrice = () => {
    if (!roofSlope) return null;
    const m2 = roofSquareMeters;
    let pricePerM2Min: number, pricePerM2Max: number;
    switch (roofSlope) {
      case "5-19": pricePerM2Min = 15; pricePerM2Max = 17; break;
      case "20-30": pricePerM2Min = 18; pricePerM2Max = 21; break;
      case "31+": pricePerM2Min = 22; pricePerM2Max = 25; break;
      default: return null;
    }
    const minPrice = Math.max(2850, m2 * pricePerM2Min);
    const maxPrice = Math.max(2850, m2 * pricePerM2Max);
    return { min: minPrice, max: maxPrice };
  };

  const roofPrice = calculateRoofPrice();

  const handleSubmitContact = async () => {
    if (!contactName.trim() || (!contactPhone.trim() && !contactEmail.trim())) {
      toast({ title: "Täytä yhteystiedot", description: "Nimi ja puhelin tai sähköposti vaaditaan.", variant: "destructive" });
      return;
    }
    setIsLoading(true);
    try {
      const slopeLabels: Record<string, string> = { "5-19": "5-19° (Loiva)", "20-30": "20-30° (Normaali)", "31+": "31°+ (Jyrkkä)" };
      await supabase.functions.invoke("send-contact-email", {
        body: {
          name: contactName,
          email: contactEmail || "",
          phone: contactPhone || "",
          service: "tiilikatto",
          message: "",
          priceEstimate: roofPrice ? `${roofPrice.min.toLocaleString("fi-FI")} – ${roofPrice.max.toLocaleString("fi-FI")} €` : "",
          calculatorDetails: `Katon koko: ${roofSquareMeters} m², Kaltevuus: ${slopeLabels[roofSlope!] || ""}`,
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

  // Progress bar
  const progress = ((stepIndex + 1) / STEPS.length) * 100;

  return (
    <div className="card-elevated">
      {/* Progress */}
      {!showPrice && (
        <div className="mb-6">
          <div className="flex justify-between text-xs text-muted-foreground mb-2">
            <span>Vaihe {stepIndex + 1}/{STEPS.length}</span>
          </div>
          <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {/* Step 1: Size */}
        {currentStep === "size" && !showPrice && (
          <motion.div key="size" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}>
            <label className="block text-foreground font-medium mb-3">Katon koko neliömetreinä</label>
            <div className="flex items-center gap-6">
              <input
                type="range"
                min="100"
                max="400"
                step="10"
                value={roofSquareMeters}
                onChange={(e) => setRoofSquareMeters(Number(e.target.value))}
                className="flex-1 h-2 bg-secondary rounded-full appearance-none cursor-pointer accent-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              />
              <div className="flex items-center gap-2 min-w-[100px]">
                <input
                  type="number"
                  min="100"
                  max="400"
                  value={roofSquareMeters}
                  onChange={(e) => setRoofSquareMeters(Math.min(400, Math.max(100, Number(e.target.value))))}
                  className="w-20 px-3 py-2 rounded-lg border border-border bg-background text-foreground text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                />
                <span className="text-muted-foreground">m²</span>
              </div>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>100 m²</span>
              <span>400 m²</span>
            </div>
          </motion.div>
        )}

        {/* Step 2: Slope */}
        {currentStep === "slope" && !showPrice && (
          <motion.div key="slope" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}>
            <label className="block text-foreground font-medium mb-3">Katon kaltevuus</label>
            <div className="grid grid-cols-3 gap-4">
              {([
                { value: "5-19", label: "5-19°", desc: "Loiva" },
                { value: "20-30", label: "20-30°", desc: "Normaali" },
                { value: "31+", label: "31°+", desc: "Jyrkkä" },
              ] as const).map((option) => (
                <button
                  key={option.value}
                  onClick={() => setRoofSlope(option.value)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    roofSlope === option.value
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="text-2xl mb-1">🏠</div>
                  <div className="font-bold text-foreground">{option.label}</div>
                  <div className="text-sm text-muted-foreground">{option.desc}</div>
                  {roofSlope === option.value && <Check className="w-5 h-5 text-primary mx-auto mt-2" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 3: Contact – inline JSX, not a nested component */}
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
        {showPrice && roofPrice && (
          <motion.div key="price" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-6 rounded-2xl bg-service-card text-white text-center">
            <div className="text-sm mb-2">Arvioitu hinta</div>
            <div className="text-4xl font-bold mb-2">
              {roofPrice.min.toLocaleString("fi-FI")} – {roofPrice.max.toLocaleString("fi-FI")} €
            </div>
            <div className="text-sm opacity-80 mb-4">5 vuoden takuu</div>
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

export default RoofPriceCalculator;
