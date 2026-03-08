import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Loader2, User, Phone, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

type RoofSlope = "5-19" | "20-30" | "31+" | null;

const RoofPriceCalculator = () => {
  const [roofSquareMeters, setRoofSquareMeters] = useState<string>("");
  const [roofSlope, setRoofSlope] = useState<RoofSlope>(null);
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPrice, setShowPrice] = useState(false);

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
  const readyForContact = roofSquareMeters && roofSlope;

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

      {/* Contact Info Step */}
      {readyForContact && roofSlope && !showPrice && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-6 rounded-2xl bg-muted/50 border border-border"
        >
          <label className="block text-foreground font-semibold mb-1 text-lg">
            3. Yhteystiedot
          </label>
          <p className="text-sm text-muted-foreground mb-4">
            Täytä yhteystietosi nähdäksesi hinta-arvion
          </p>
          <div className="space-y-3">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Nimi *"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              />
            </div>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="tel"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                placeholder="Puhelin"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder="Sähköposti"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              />
            </div>
            <p className="text-xs text-muted-foreground">* Nimi ja puhelin tai sähköposti vaaditaan</p>
            <button
              onClick={handleSubmitContact}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-all disabled:opacity-70"
            >
              {isLoading ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> Lähetetään...</>
              ) : (
                <><ArrowRight className="w-5 h-5" /> Näytä hinta-arvio</>
              )}
            </button>
          </div>
        </motion.div>
      )}

      {/* Price Result */}
      {roofPrice && showPrice && (
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
