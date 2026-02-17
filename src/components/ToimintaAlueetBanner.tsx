import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';
import { getStorageUrl } from '@/lib/storage';

const mapImage = getStorageUrl("Suomi kartta pirkanmaa ja kanta-hame.webp");

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
    <section className="section-padding bg-secondary">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {/* Text + list */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground font-heading">Toiminta-alueet</h2>
            </div>
            <p className="text-muted-foreground mb-6">
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
            <OptimizedImage
              src={mapImage}
              alt="Pintanen Oy:n toiminta-alue – Pirkanmaa ja Kanta-Häme kartalla"
              className="w-full max-w-sm rounded-2xl"
              sizes="(max-width: 1024px) 80vw, 400px"
              width={400}
              height={500}
              transformWidth={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToimintaAlueetBanner;
