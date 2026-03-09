import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { getStorageUrl } from "@/lib/storage";
import OptimizedImage from "./OptimizedImage";

const logoUrl = getStorageUrl("Pintanen-logo.webp");

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPalvelutOpen, setIsPalvelutOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsPalvelutOpen(false);
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
    { label: "Hinnat & Laskuri", href: "/hinnat" },
    { label: "Tutustu meihin", href: "/meista" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
    >
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between w-full h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0 relative z-50">
            <OptimizedImage
              src={logoUrl}
              alt="Pintanen Oy – tiilikaton pinnoitus ja ulkomaalaus Pirkanmaalla"
              className="h-20 md:h-24 lg:h-28 w-auto shrink-0 object-contain"
              priority={true}
              sizes="200px"
              width={200}
              height={80}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Päänavigaatio" className="hidden xl:flex items-center gap-4 lg:gap-6 flex-1 justify-end mr-4">
            {navItems.map((item) => {
              if (!item.dropdown) {
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`font-medium transition-colors duration-200 text-primary-foreground hover:text-primary-foreground/80 ${location.pathname === item.href ? "text-accent" : ""}`}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setIsPalvelutOpen(true)}
                  onMouseLeave={() => setIsPalvelutOpen(false)}
                >
                  <button className="flex items-center gap-1 font-medium transition-colors duration-200 text-primary-foreground hover:text-primary-foreground/80">
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isPalvelutOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isPalvelutOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-card rounded-xl shadow-lg border border-border overflow-hidden z-50"
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            className="block px-4 py-3 text-foreground hover:bg-muted transition-colors font-medium"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* CTA Button */}
          <a
            className="hidden lg:flex items-center gap-2 px-4 py-2 lg:px-5 lg:py-2.5 rounded-xl font-semibold transition-all duration-300 text-sm lg:text-base bg-accent text-white shadow-md hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            href="#yhteystiedot"
          >
            Pyydä tarjous
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-primary-foreground"
            aria-label={isMobileMenuOpen ? "Sulje valikko" : "Avaa päävalikko"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <nav aria-label="Mobiilinavigaatio" className="section-container py-4 flex flex-col gap-2">
              {navItems.map((item) => {
                if (!item.dropdown) {
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="py-3 px-4 text-foreground font-medium hover:bg-muted rounded-lg transition-colors"
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <div key={item.label}>
                    <div className="flex items-center">
                      <span className="flex-1 py-3 px-4 text-foreground font-medium">
                        {item.label}
                      </span>
                      <button
                        onClick={() => setIsPalvelutOpen(!isPalvelutOpen)}
                        className="py-3 px-4 text-foreground hover:bg-muted rounded-lg transition-colors"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isPalvelutOpen ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                    <AnimatePresence>
                      {isPalvelutOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4 border-l-2 border-primary/30"
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.href}
                              to={subItem.href}
                              className="block py-2 px-4 text-foreground/80 hover:text-primary transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
              <a
                href="#yhteystiedot"
                className="mt-2 flex items-center justify-center gap-2 py-3 px-4 bg-primary text-primary-foreground rounded-xl font-semibold"
              >
                Pyydä tarjous
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Header;
