import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { getStorageUrl } from "@/lib/storage";
import OptimizedImage from "./OptimizedImage";
import WhatsAppIcon from "./WhatsAppIcon";

const logoUrl = getStorageUrl("Pintanen-logo.webp");

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tyhjennä kaikki tilat kun sivu vaihtuu
  useEffect(() => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);

    // Pieni viive navigoinnin jälkeen ennen kuin hover sallitaan uudelleen
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const navItems = [
    {
      label: "Palvelut",
      href: "#",
      dropdown: [
        { label: "Tiilikaton pinnoitus", href: "/kattopalvelut/pinnoitus" },
        { label: "Katon puhdistus", href: "/kattopalvelut/puhdistus" },
        { label: "Ulkomaalaus", href: "/talon-maalaus" },
      ],
    },
    {
      label: "Hinnat & Laskuri",
      href: "/hinnat",
      dropdown: [
        { label: "Tiilikaton pinnoitus hinta", href: "/hinnat/tiilikaton-pinnoitus" },
        { label: "Katon puhdistus hinta", href: "/hinnat/katon-puhdistus" },
        { label: "Talon maalaus hinta", href: "/hinnat/talon-maalaus" },
      ],
    },
    { label: "Referenssit", href: "/referenssit" },
    { label: "Tutustu meihin", href: "/meista" },
  ];

  const handleLinkClick = () => {
    setIsNavigating(true); // Lukitsee hover-eventit
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const handleMouseEnter = (label: string) => {
    if (isNavigating) return;
    setOpenDropdown(label);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      } ${isNavigating ? "pointer-events-none" : "pointer-events-auto"}`}
    >
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Mobile Layout */}
        <div className="flex xl:hidden items-center justify-between w-full h-20">
          <a href="https://wa.me/358409640066" target="_blank" rel="noopener noreferrer" className="p-2">
            <WhatsAppIcon className="w-7 h-7" />
          </a>
          <Link to="/" onClick={handleLinkClick} className="flex items-center shrink-0">
            <OptimizedImage
              src={logoUrl}
              alt="Pintanen Oy"
              className="h-20 w-auto object-contain"
              priority
              width={200}
              height={80}
            />
          </Link>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-primary-foreground">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden xl:flex items-center justify-between w-full h-20">
          <Link to="/" onClick={handleLinkClick} className="flex items-center shrink-0">
            <OptimizedImage
              src={logoUrl}
              alt="Pintanen Oy"
              className="h-24 w-auto object-contain"
              priority
              width={200}
              height={80}
            />
          </Link>

          <nav
            ref={navRef}
            className="flex items-center gap-6 flex-1 justify-end mr-8"
            onMouseLeave={() => setOpenDropdown(null)}
          >
            {navItems.map((item) => (
              <div key={item.label} className="relative py-4" onMouseEnter={() => handleMouseEnter(item.label)}>
                {!item.dropdown ? (
                  <Link
                    to={item.href}
                    onClick={handleLinkClick}
                    className={`font-medium transition-colors text-primary-foreground hover:text-accent ${
                      location.pathname === item.href ? "text-accent" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div className="flex items-center gap-1 cursor-default">
                    <span className="font-medium text-primary-foreground">{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 text-primary-foreground ${openDropdown === item.label ? "rotate-180" : ""}`}
                    />

                    <AnimatePresence>
                      {openDropdown === item.label && !isNavigating && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-0 w-60 bg-card rounded-xl shadow-xl border border-border overflow-hidden"
                        >
                          <div className="py-2">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.href}
                                to={subItem.href}
                                onClick={handleLinkClick}
                                className="block px-4 py-3 text-foreground hover:bg-muted transition-colors font-medium"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/358409640066"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:scale-110 transition-transform"
            >
              <WhatsAppIcon className="w-7 h-7" />
            </a>
            <a
              className="px-6 py-2.5 rounded-xl font-semibold bg-accent text-white shadow-md hover:scale-105 transition-all"
              href="#yhteystiedot"
            >
              Pyydä tarjous
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="xl:hidden bg-card border-t overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <div key={item.label} className="flex flex-col">
                  {item.dropdown ? (
                    <>
                      <div className="py-3 px-4 font-bold text-primary uppercase text-xs tracking-widest">
                        {item.label}
                      </div>
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          onClick={handleLinkClick}
                          className="py-3 px-6 text-foreground hover:bg-muted rounded-lg"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={handleLinkClick}
                      className="py-3 px-4 text-foreground font-medium hover:bg-muted rounded-lg"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
