import { Phone, FileText } from "lucide-react";

const MobileBottomBar = () => {
  return (
    <nav aria-label="Mobiilitoiminnot" className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="backdrop-blur-md bg-white/70 dark:bg-black/70 border-t border-white/20 dark:border-black/10 px-4 py-3 flex items-center justify-between gap-3">
        <a
          href="tel:+358409640066"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-accent text-accent-foreground font-semibold text-sm transition-all hover:scale-105"
        >
          <Phone className="w-4 h-4" />
          Soita meille
        </a>
        <a
          href="#yhteystiedot"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm transition-all hover:scale-105"
        >
          <FileText className="w-4 h-4" />
          Pyydä tarjous
        </a>
      </div>
    </nav>
  );
};

export default MobileBottomBar;
