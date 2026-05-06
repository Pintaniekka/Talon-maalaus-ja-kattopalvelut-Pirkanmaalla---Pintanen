import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { getStorageUrl } from '@/lib/storage';

const mapImage = getStorageUrl('Toiminta-alue-kartta-pirkanmaa-kantahame.png');

/** Tampere on omalla rivillään koska sen kaupunginosat näytetään selkeästi. */
const tampere = { name: 'Tampere', slug: 'tampere' };
const tampereNeighborhoods = [
  'Hervanta',
  'Pispala',
  'Lielahti',
  'Vuores',
  'Kaukajärvi',
  'Tesoma',
  'Linnainmaa',
];

const muutPirkanmaa = [
  { name: 'Nokia', slug: 'nokia' },
  { name: 'Ylöjärvi', slug: 'ylojarvi' },
  { name: 'Sastamala', slug: 'sastamala' },
  { name: 'Hämeenkyrö', slug: 'hameenkyro' },
  { name: 'Kangasala', slug: 'kangasala' },
  { name: 'Lempäälä', slug: 'lempaala' },
  { name: 'Pirkkala', slug: 'pirkkala' },
  { name: 'Valkeakoski', slug: 'valkeakoski' },
  { name: 'Akaa', slug: 'akaa' },
  { name: 'Ikaalinen', slug: 'ikaalinen' },
  { name: 'Juupajoki', slug: 'juupajoki' },
  { name: 'Kihniö', slug: 'kihnio' },
  { name: 'Mänttä-Vilppula', slug: 'mantta-vilppula' },
  { name: 'Orivesi', slug: 'orivesi' },
  { name: 'Parkano', slug: 'parkano' },
  { name: 'Pälkäne', slug: 'palkane' },
  { name: 'Ruovesi', slug: 'ruovesi' },
  { name: 'Urjala', slug: 'urjala' },
  { name: 'Vesilahti', slug: 'vesilahti' },
  { name: 'Virrat', slug: 'virrat' },
];

const kantaHame = [
  { name: 'Hämeenlinna', slug: 'hameenlinna' },
  { name: 'Forssa', slug: 'forssa' },
];

const satakunta = [{ name: 'Huittinen', slug: 'huittinen' }];

const cityLinkClass =
  'inline-block text-sm md:text-base text-foreground/85 hover:text-primary transition-colors story-link';

const CityList = ({ items }: { items: { name: string; slug: string }[] }) => (
  <p className="text-foreground/85 leading-relaxed flex flex-wrap items-baseline gap-x-1 gap-y-2">
    {items.map((c, i) => (
      <span key={c.slug} className="inline-flex items-baseline">
        <Link to={`/maalauspalvelut-${c.slug}`} className={cityLinkClass}>
          {c.name}
        </Link>
        {i < items.length - 1 && (
          <span className="text-muted-foreground/60 mx-1">,</span>
        )}
      </span>
    ))}
  </p>
);

const ToimintaAlueetBanner = () => {
  return (
    <section className="py-12 md:py-16 bg-accent-light">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
          {/* Vasen palsta: Otsikko + Accordion */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-6 h-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-primary-dark font-heading">
                Toiminta-alueet
              </h2>
            </div>
            <p className="text-foreground/80 mb-6 text-sm md:text-base">
              Palvelemme <strong className="text-foreground">koko Pirkanmaan alueella</strong>{' '}
              sekä Kanta-Hämeessä ja Satakunnassa. Valitse maakunta nähdäksesi paikkakunnat.
            </p>

            <Accordion
              type="single"
              collapsible
              defaultValue="pirkanmaa"
              className="w-full space-y-3"
            >
              {/* PIRKANMAA */}
              <AccordionItem
                value="pirkanmaa"
                className="border border-border/50 rounded-2xl bg-card shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="px-5 md:px-6 py-4 text-base md:text-lg font-bold text-primary-dark hover:no-underline hover:bg-primary/5">
                  PIRKANMAA
                </AccordionTrigger>
                <AccordionContent className="px-5 md:px-6 pb-5 pt-1">
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                        Tampere ja kaupunginosat
                      </div>
                      <p className="leading-relaxed">
                        <Link
                          to={`/maalauspalvelut-${tampere.slug}`}
                          className={`${cityLinkClass} font-semibold text-foreground`}
                        >
                          {tampere.name}
                        </Link>
                        <span className="text-foreground/85">
                          : {tampereNeighborhoods.join(', ')}.
                        </span>
                      </p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                        Muut Pirkanmaan kaupungit
                      </div>
                      <CityList items={muutPirkanmaa} />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* KANTA-HÄME */}
              <AccordionItem
                value="kanta-hame"
                className="border border-border/50 rounded-2xl bg-card shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="px-5 md:px-6 py-4 text-base md:text-lg font-bold text-primary-dark hover:no-underline hover:bg-primary/5">
                  KANTA-HÄME
                </AccordionTrigger>
                <AccordionContent className="px-5 md:px-6 pb-5 pt-1">
                  <CityList items={kantaHame} />
                </AccordionContent>
              </AccordionItem>

              {/* SATAKUNTA */}
              <AccordionItem
                value="satakunta"
                className="border border-border/50 rounded-2xl bg-card shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="px-5 md:px-6 py-4 text-base md:text-lg font-bold text-primary-dark hover:no-underline hover:bg-primary/5">
                  SATAKUNTA
                </AccordionTrigger>
                <AccordionContent className="px-5 md:px-6 pb-5 pt-1">
                  <CityList items={satakunta} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Link
              to="/toiminta-alueet"
              className="inline-block mt-6 text-sm md:text-base text-primary font-medium hover:underline"
            >
              Katso kaikki alueet →
            </Link>
          </div>

          {/* Oikea palsta: Kartta */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <img
              src={mapImage}
              alt="Toimialuekartta: Pirkanmaa, Kanta-Häme ja Satakunta"
              className="w-full max-w-[320px] md:max-w-[380px] lg:max-w-[420px] rounded-2xl object-contain"
              width={420}
              height={520}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToimintaAlueetBanner;
