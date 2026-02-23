import { Link } from 'react-router-dom';
import { getStorageUrl } from '@/lib/storage';
import OptimizedImage from './OptimizedImage';

const logoUrl = getStorageUrl("Pintanen-logo.webp");

const Footer = () => {
  return <footer className="bg-primary text-primary-foreground py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Info */}
          <div>
            <OptimizedImage
              src={logoUrl}
              alt="Pintanen logo"
              className="h-16 w-auto mb-4 brightness-0 invert object-contain"
              sizes="200px"
            />
            <p className="text-primary-foreground/70 text-sm">
              <Link to="/kattopalvelut/pinnoitus" className="hover:text-primary-foreground transition-colors underline underline-offset-2">Tiilikattojen pinnoitukset</Link> ja ulkomaalaukset ammattitaidolla. 
              Toiminta-alue: <Link to="/toiminta-alueet" className="hover:text-primary-foreground transition-colors underline underline-offset-2">Pirkanmaa</Link> ja lähialueet (Forssa)
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Palvelut</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/kattopalvelut/pinnoitus" className="hover:text-primary-foreground transition-colors">Tiilikaton pinnoitus</Link></li>
              <li><Link to="/talon-maalaus" className="hover:text-primary-foreground transition-colors">Ulkomaalaus</Link></li>
              <li><Link to="/kattopalvelut/puhdistus" className="hover:text-primary-foreground transition-colors">Katon puhdistus</Link></li>
              <li><Link to="/#hintalaskuri" className="hover:text-primary-foreground transition-colors">Hintalaskuri</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Yhteystiedot</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="tel:+358409640066" className="hover:text-primary-foreground transition-colors">040 964 0066</a></li>
              <li><a href="mailto:myynti@pintanen.fi" className="hover:text-primary-foreground transition-colors">myynti@pintanen.fi</a></li>
              <li>Y-tunnus: 3525786-9</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Pintanen Oy. Kaikki oikeudet pidätetään.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;
