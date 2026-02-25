import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getStorageUrl, getImageSrcSet } from '@/lib/storage';

const mapImage = getStorageUrl("Toiminta-alue-kartta-pirkanmaa-kantahame.png");

const cities = [
  { name: "Tampere", slug: "tampere" },
  { name: "Nokia", slug: "nokia" },
  { name: "Hämeenkyrö", slug: "hameenkyro" },
  { name: "Sastamala", slug: "sastamala" },
  { name: "Ylöjärvi", slug: "ylojarvi" },
  { name: "Forssa", slug: "forssa" },
  { name: "Hämeenlinna", slug: "hameenlinna" },
  { name: "Huittinen", slug: "huittinen" },
];

const ToimintaAlueetBanner = () => {
  return (
    <section className="py-10 md:py-14" style={{ backgroundColor: 'hsl(205 70% 88%)' }}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-6 items-center max-w-4xl mx-auto">
          {/* Text + list */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-primary" />
              <h2 className="text-xl md:text-2xl font-bold text-foreground font-heading">Toiminta-alueet</h2>
            </div>
            <p className="text-foreground/80 mb-4 text-sm">
              Palvelemme koko Pirkanmaan alueella ja lähikunnissa:
            </p>
            <div className="flex flex-wrap gap-2">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/alue/${city.slug}`}
                  className="px-4 py-2 bg-card rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {city.name}
                </Link>
              ))}
            </div>
            <Link
              to="/toiminta-alueet"
              className="inline-block mt-4 text-sm text-primary font-medium hover:underline"
            >
              Katso kaikki alueet →
            </Link>
          </div>

          {/* Map image */}
          <div className="flex justify-center">
            <img
              src={mapImage}
              alt="Toimialuekartta: Pirkanmaa ja Kanta-Häme"
              className="w-full max-w-[280px] rounded-2xl object-contain"
              width={280}
              height={350}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToimintaAlueetBanner;
