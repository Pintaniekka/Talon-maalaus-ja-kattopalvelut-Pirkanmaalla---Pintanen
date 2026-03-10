import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, UserRound, Phone, MapPin, Mail, Building, MessageSquare } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const DesktopQuoteDrawer = () => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const { toast } = useToast();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    postalCode: "",
    city: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleOpen = useCallback(() => {
    setOpen(true);
    setIsSubmitted(false);
  }, []);

  const handleClose = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    // Focus the close button when opened
    setTimeout(() => closeRef.current?.focus(), 100);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, handleClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast({ title: "Täytä vähintään nimi ja puhelinnumero", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: form.name,
          email: "",
          phone: form.phone,
          service: "Arviokäynti",
          message: `Osoite: ${form.address}\nPostinumero: ${form.postalCode}\nKaupunki: ${form.city}\n\n${form.message}`,
          isCalculator: false,
        },
      });
      if (error) throw error;
      setIsSubmitted(true);
      setForm({ name: "", phone: "", address: "", postalCode: "", city: "", message: "" });
      toast({ title: "Kiitos! Olemme sinuun yhteydessä pian." });
    } catch {
      toast({ title: "Jokin meni pieleen. Yritä uudelleen.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full rounded-lg border border-border bg-white px-3 py-2.5 pl-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition";

  const fields: {
    name: keyof typeof form;
    placeholder: string;
    icon: React.ReactNode;
    type?: string;
  }[] = [
    { name: "name", placeholder: "Nimi", icon: <UserRound className="w-4 h-4" /> },
    { name: "phone", placeholder: "Puhelinnumero", icon: <Phone className="w-4 h-4" />, type: "tel" },
    { name: "address", placeholder: "Osoite", icon: <MapPin className="w-4 h-4" /> },
    { name: "postalCode", placeholder: "Postinumero", icon: <Mail className="w-4 h-4" /> },
    { name: "city", placeholder: "Kaupunki", icon: <Building className="w-4 h-4" /> },
  ];

  return (
    <>
      {/* Fixed right-edge CTA tab — desktop only */}
      <button
        onClick={handleOpen}
        aria-label="Tilaa maksuton arviokäynti"
        className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-[60] items-center justify-center cursor-pointer group"
        style={{ writingMode: "vertical-rl" }}
      >
        <span
          className="flex items-center gap-2 px-3 py-6 rounded-l-xl text-white font-semibold text-sm tracking-wide shadow-md transition-all duration-200 group-hover:px-4 group-hover:shadow-lg"
          style={{ backgroundColor: "hsl(var(--accent))" }}
        >
          Tilaa maksuton arviokäynti
        </span>
      </button>

      {/* Overlay + Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="hidden lg:block fixed inset-0 z-[70] bg-black/30"
              onClick={handleClose}
              aria-hidden="true"
            />

            {/* Drawer panel */}
            <motion.div
              ref={drawerRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              role="dialog"
              aria-modal="true"
              aria-label="Pyydä arviokäynti"
              className="hidden lg:flex fixed right-0 top-0 bottom-0 z-[80] w-[380px] max-w-[90vw] flex-col shadow-xl"
              style={{ backgroundColor: "#f2e8d8" }}
            >
              {/* Header */}
              <div className="flex items-start justify-between px-6 pt-6 pb-2">
                <div className="flex-1 pr-4">
                  <h2 className="text-lg font-bold text-foreground leading-snug">
                    Pyydä meidät maksuttomalle arviokäynnille!
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Jätä tähän yhteystietosi, niin palaamme asiaan
                  </p>
                </div>
                <button
                  ref={closeRef}
                  onClick={handleClose}
                  aria-label="Sulje"
                  className="mt-1 rounded-full p-1.5 text-foreground/60 hover:text-foreground hover:bg-black/5 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-3">
                {fields.map((f) => (
                  <div key={f.name} className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      {f.icon}
                    </span>
                    <input
                      name={f.name}
                      type={f.type || "text"}
                      placeholder={f.placeholder}
                      value={form[f.name]}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                ))}

                {/* Textarea */}
                <div className="relative">
                  <span className="absolute left-3 top-3 text-muted-foreground">
                    <MessageSquare className="w-4 h-4" />
                  </span>
                  <textarea
                    name="message"
                    placeholder="Viestisi"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full rounded-lg border border-border bg-white px-3 py-2.5 pl-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="mt-2 w-full rounded-xl py-3 font-semibold text-white text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 disabled:opacity-60"
                  style={{ backgroundColor: "hsl(var(--accent))" }}
                >
                  {isSubmitted ? "Lähetetty ✓" : isSubmitting ? "Lähetetään..." : "Lähetä"}
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default DesktopQuoteDrawer;
