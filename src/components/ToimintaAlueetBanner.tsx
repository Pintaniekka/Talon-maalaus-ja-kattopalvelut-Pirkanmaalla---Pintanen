import { useState } from 'react';
import { MapPin, ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allCities } from '@/data/cityData';
import { getStorageUrl } from '@/lib/storage';
import { cn } from '@/lib/utils';

const mapImage = getStorageUrl("Toiminta-alue-kartta-pirkanmaa-kantahame.png");

type Service = 'maalaus' | 'pinnoitus';

interface ToimintaAlueetBannerProps {
  /** Nykyisen sivun paikkakunnan slug — korostetaan aktiivisena chippinä */
  activeCity?: string;
  /** Mihin chipit linkittävät: maalaussivuille (oletus) tai pinnoitussivuille */
  service?: Service;
}

const regionSlugs: Record<string, string[]> = {
  Pirkanmaa: [
    'tampere', 'akaa', 'hameenkyro', 'ikaalinen', 'juupajoki', 'kangasala',
    'kihnio', 'lempaala', 'mantta-vilppula', 'nokia', 'orivesi', 'parkano',
    'pirkkala', 'palkane', 'ruovesi', 'sastamala', 'urjala', 'valkeakoski',
    'vesilahti', 'virrat', 'ylojarvi',
  ],
  'Kanta-Häme': ['forssa', 'hameenlinna'],
  Satakunta: ['huittinen'],
};

const regions = Object.entries(regionSlugs).map(([title, slugs]) => ({
  title,
  cities: slugs
    .map((slug) => allCities.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c)),
}));

const cityHref = (slug: string, service: Service) =>
  service === 'pinnoitus' ? `/tiilikaton-pinnoitus-${slug}` : `/maalauspalvelut-${slug}`;

const chipBase =
  'px-4 py-2 bg-secondary/60 border border-border rounded-xl text-sm font-semibold transition-colors';
const chipIdle = 'text-muted-foreground hover:border-accent hover:text-accent';
const chipActive = 'bg-accent border-accent text-accent-foreground hover:border-accent';

const RegionCard = ({
  title,
  cities,
  defaultOpen,
  activeCity,
  service,
}: {
  title: string;
  cities: (typeof allCities)[number][];
  defaultOpen: boolean;
  activeCity?: string;
  service: Service;
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border transition-shadow duration-300',
        open
          ? 'border-border bg-card shadow-xl shadow-accent/5'
          : 'border-border/60 bg-accent-light/50'
      )}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 p-5 md:p-6 text-left"
      >
        <span className="flex items-center gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-lg shadow-accent/30">
            <MapPin className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-xl font-bold tracking-tight text-foreground font-heading">
            {title}
          </span>
        </span>
        <ChevronDown
          aria-hidden="true"
          className={cn(
            'h-6 w-6 shrink-0 text-accent transition-transform duration-300 motion-reduce:transition-none',
            open && 'rotate-180'
          )}
        />
      </button>

      {/* Sisältö pidetään aina DOM:ssa (SEO: sisäiset linkit crawlattavissa),
          piilotetaan vain visuaalisesti kun paneeli on kiinni. */}
      <div
        className={cn(
          'grid transition-[grid-template-rows,opacity] duration-300 motion-reduce:transition-none',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        )}
        aria-hidden={!open}
      >
        <div className="overflow-hidden">
          <div className="flex flex-wrap gap-2 px-5 pb-6 pt-1 md:px-6 md:pb-8">
            {cities.map((city) => {
              const isActive = activeCity === city.slug;
              return (
                <Link
                  key={city.slug}
                  to={cityHref(city.slug, service)}
                  tabIndex={open ? undefined : -1}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(chipBase, isActive ? chipActive : chipIdle)}
                >
                  {city.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const ToimintaAlueetBanner = ({ activeCity, service = 'maalaus' }: ToimintaAlueetBannerProps) => {
  const [mapFailed, setMapFailed] = useState(false);

  return (
    <section className="py-10 md:py-14 bg-accent-light">
      <div className="section-container">
        <div className="mx-auto flex max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-accent/20 bg-card shadow-[0_32px_64px_-16px_hsl(var(--accent)/0.15)] md:rounded-[2.5rem] lg:flex-row">
          {/* Vasen: otsikko + maakunnat */}
          <div className="flex-1 p-6 md:p-12 lg:p-14">
            <header className="mb-8 md:mb-10">
              <h2 className="mb-4 font-heading text-3xl font-black tracking-tight text-foreground md:text-4xl">
                Toiminta-alueet
              </h2>
              <div className="h-2 w-20 rounded-full bg-accent" aria-hidden="true" />
            </header>

            <div className="space-y-4">
              {regions.map((region, idx) => (
                <RegionCard
                  key={region.title}
                  title={region.title}
                  cities={region.cities}
                  defaultOpen={idx === 0}
                  activeCity={activeCity}
                  service={service}
                />
              ))}
            </div>
          </div>

          {/* Oikea: karttasarake */}
          <div className="relative flex flex-col items-center justify-center overflow-hidden bg-accent p-8 text-accent-foreground md:p-10 lg:w-[400px]">
            {/* Hienovarainen ruudukkokuvio */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  'linear-gradient(to right, hsl(var(--accent-foreground) / 0.5) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--accent-foreground) / 0.5) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            {/* Pehmeät valopallot */}
            <div aria-hidden="true" className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-accent-foreground/10 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-accent-foreground/10 blur-3xl" />

            {!mapFailed && (
              <div className="relative z-10 w-full max-w-[240px] rounded-3xl border border-accent-foreground/30 bg-accent-foreground/10 p-6 shadow-2xl">
                <img
                  src={mapImage}
                  alt="Toimialuekartta: Pirkanmaa ja Kanta-Häme"
                  className="h-auto w-full object-contain"
                  width={280}
                  height={350}
                  loading="lazy"
                  decoding="async"
                  onError={() => setMapFailed(true)}
                />
              </div>
            )}

            <div className="relative z-10 mt-8 text-center">
              <span className="mb-3 inline-block rounded-full bg-accent-foreground/20 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Paikallinen palvelu
              </span>
              <h3 className="text-2xl font-bold leading-tight font-heading">
                Kaikki palvelut aina lähelläsi
              </h3>
              <Link
                to="/toiminta-alueet"
                className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold underline-offset-4 transition-colors hover:underline"
              >
                Katso kaikki toiminta-alueet
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToimintaAlueetBanner;
