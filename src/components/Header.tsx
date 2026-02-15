import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import logo from '@/assets/logo.png';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isKattoDropdownOpen, setIsKattoDropdownOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsKattoDropdownOpen(false);
  }, [location.pathname]);
  const isHomePage = location.pathname === '/';
  const navItems = [{
    label: 'Etusivu',
    href: '/'
  }, {
    label: 'Kattopalvelut',
    href: '#',
    dropdown: [{
      label: 'Tiilikaton pinnoitus',
      href: '/kattopalvelut/pinnoitus'
    }, {
      label: 'Tiilikaton puhdistus',
      href: '/kattopalvelut/puhdistus'
    }]
  }, {
    label: 'Talon maalaus',
    href: '/talon-maalaus'
  }, {
    label: 'Toiminta-alueet',
    href: '/toiminta-alueet'
  }, {
    label: 'Referenssit',
    href: '/referenssit'
  }, {
    label: 'Tutustu Pintaseen',
    href: '/meista'
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Pintanen Oy" className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {navItems.map(item => item.dropdown ? <div key={item.label} className="relative group" onMouseEnter={() => setIsKattoDropdownOpen(true)} onMouseLeave={() => setIsKattoDropdownOpen(false)}>
                  <button className="flex items-center gap-1 font-medium transition-colors duration-200 text-primary-foreground hover:text-primary-foreground/80">
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isKattoDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isKattoDropdownOpen && <motion.div initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: 10
              }} transition={{
                duration: 0.2
              }} className="absolute top-full left-0 mt-2 w-56 bg-card rounded-xl shadow-lg border border-border overflow-hidden z-50">
                        {item.dropdown.map(subItem => <Link key={subItem.href} to={subItem.href} className="block px-4 py-3 text-foreground hover:bg-muted transition-colors font-medium">
                            {subItem.label}
                          </Link>)}
                      </motion.div>}
                  </AnimatePresence>
                </div> : <Link key={item.href} to={item.href} className={`font-medium transition-colors duration-200 text-primary-foreground hover:text-primary-foreground/80 ${location.pathname === item.href ? 'text-accent' : ''}`}>
                  {item.label}
                </Link>)}
          </nav>

          {/* CTA Button */}
          <a className="hidden md:flex items-center gap-2 px-4 py-2 lg:px-5 lg:py-2.5 rounded-xl font-semibold transition-all duration-300 text-sm lg:text-base bg-accent text-accent-foreground hover:scale-105" href="tel:+358409640066">
            <Phone className="w-4 h-4" />
            Soita ja kysy!  
          </a>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 rounded-lg text-primary-foreground">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-card border-t border-border">
            <nav className="section-container py-4 flex flex-col gap-2">
              {navItems.map(item => item.dropdown ? <div key={item.label}>
                    <button onClick={() => setIsKattoDropdownOpen(!isKattoDropdownOpen)} className="w-full flex items-center justify-between py-3 px-4 text-foreground font-medium hover:bg-muted rounded-lg transition-colors">
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isKattoDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isKattoDropdownOpen && <motion.div initial={{
                opacity: 0,
                height: 0
              }} animate={{
                opacity: 1,
                height: 'auto'
              }} exit={{
                opacity: 0,
                height: 0
              }} className="ml-4 border-l-2 border-primary/30">
                          {item.dropdown.map(subItem => <Link key={subItem.href} to={subItem.href} className="block py-2 px-4 text-foreground/80 hover:text-primary transition-colors">
                              {subItem.label}
                            </Link>)}
                        </motion.div>}
                    </AnimatePresence>
                  </div> : <Link key={item.href} to={item.href} className="py-3 px-4 text-foreground font-medium hover:bg-muted rounded-lg transition-colors">
                    {item.label}
                  </Link>)}
              <a href="tel:+358409640066" className="mt-2 flex items-center justify-center gap-2 py-3 px-4 bg-primary text-primary-foreground rounded-xl font-semibold">
                <Phone className="w-4 h-4" />
                Soita meille
              </a>
            </nav>
          </motion.div>}
      </AnimatePresence>
    </header>;
};
export default Header;