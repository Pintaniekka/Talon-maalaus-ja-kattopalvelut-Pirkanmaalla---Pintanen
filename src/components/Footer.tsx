import { Link } from 'react-router-dom';
import { getStorageUrl } from '@/lib/storage';
import OptimizedImage from './OptimizedImage';

const logoUrl = getStorageUrl("Pintanen-logo.webp");

const pirkanmaaCities = [
  { name: "Tampere", slug: "tampere" },
  { name: "Nokia", slug: "nokia" },
  { name: "Ylöjärvi", slug: "ylojarvi" },
  { name: "Sastamala", slug: "sastamala" },
  { name: "Hämeenkyrö", slug: "hameenkyro" },
  { name: "Kangasala", slug: "kangasala" },
  { name: "Lempäälä", slug: "lempaala" },
  { name: "Pirkkala", slug: "pirkkala" },
  { name: "Valkeakoski", slug: "valkeakoski" },
];

const pirkanmaaExtra = [
  { name: "Akaa", slug: "akaa" },
  { name: "Ikaalinen", slug: "ikaalinen" },
  { name: "Juupajoki", slug: "juupajoki" },
  { name: "Kihniö", slug: "kihnio" },
  { name: "Mänttä-Vilppula", slug: "mantta-vilppula" },
  { name: "Orivesi", slug: "orivesi" },
  { name: "Parkano", slug: "parkano" },
  { name: "Pälkäne", slug: "palkane" },
  { name: "Ruovesi", slug: "ruovesi" },
  { name: "Urjala", slug: "urjala" },
  { name: "Vesilahti", slug: "vesilahti" },
  { name: "Virrat", slug: "virrat" },
];

const kantaHameCities = [
  { name: "Forssa", slug: "forssa" },
  { name: "Hämeenlinna", slug: "hameenlinna" },
  { name: "Huittinen", slug: "huittinen" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo & Contact */}
          <div>
            <OptimizedImage
              src={logoUrl}
              alt="Pintanen logo"
              className="h-24 w-auto mb-4 brightness-0 invert object-contain"
              width={280}
              height={112}
              sizes="280px"
            />
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="mailto:myynti@pintanen.fi" className="hover:text-primary-foreground transition-colors">
                  myynti@pintanen.fi
                </a>
              </li>
              <li>
                <a href="tel:+358409640066" className="hover:text-primary-foreground transition-colors">
                  040 964 0066
                </a>
              </li>
              <li>Y-tunnus: 3525786-9</li>
            </ul>
          </div>

          {/* Column 2: Palvelumme */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Palvelumme</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link to="/kattopalvelut/pinnoitus" className="hover:text-primary-foreground transition-colors">
                  Tiilikaton pinnoitus
                </Link>
              </li>
              <li>
                <Link to="/talon-maalaus" className="hover:text-primary-foreground transition-colors">
                  Ulkomaalaus
                </Link>
              </li>
              <li>
                <Link to="/kattopalvelut/puhdistus" className="hover:text-primary-foreground transition-colors">
                  Katon puhdistus
                </Link>
              </li>
              <li>
                <Link to="/hinnat" className="hover:text-primary-foreground transition-colors">
                  Hintalaskuri
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Pirkanmaa */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Pirkanmaa</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70 mb-3">
              {pirkanmaaCities.map((city) => (
                <li key={city.slug}>
                  <Link to={`/alue/${city.slug}`} className="hover:text-primary-foreground transition-colors">
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs text-primary-foreground/50 leading-relaxed">
              {pirkanmaaExtra.map((city, i) => (
                <span key={city.slug}>
                  <Link to={`/alue/${city.slug}`} className="hover:text-primary-foreground/70 transition-colors">
                    {city.name}
                  </Link>
                  {i < pirkanmaaExtra.length - 1 && ", "}
                </span>
              ))}
            </p>
          </div>

          {/* Column 4: Kanta-Häme & Lähialueet */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Kanta-Häme & lähialueet</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {kantaHameCities.map((city) => (
                <li key={city.slug}>
                  <Link to={`/alue/${city.slug}`} className="hover:text-primary-foreground transition-colors">
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Pintanen Oy. Kaikki oikeudet pidätetään.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
