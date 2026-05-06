import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { getStorageUrl } from '@/lib/storage';

const mapImage = getStorageUrl("Toiminta-alue-kartta-pirkanmaa-kantahame.png");

interface CityLink {
  name: string;
  slug?: string; // jos puuttuu, näytetään pelkkänä tekstinä
}

interface Region {
  id: string;
  title: string;
  cities: CityLink[];
}

const regions: Region[] = [
  {
    id: "pirkanmaa",
    title: "PIRKANMAA",
    cities: [
      { name: "Tampere", slug: "tampere" },
      { name: "Akaa", slug: "akaa" },
      { name: "Hämeenkyrö", slug: "hameenkyro" },
      { name: "Ikaalinen", slug: "ikaalinen" },
      { name: "Juupajoki", slug: "juupajoki" },
      { name: "Kangasala", slug: "kangasala" },
      { name: "Kihniö", slug: "kihnio" },
      { name: "Lempäälä", slug: "lempaala" },
      { name: "Mänttä-Vilppula", slug: "mantta-vilppula" },
      { name: "Nokia", slug: "nokia" },
      { name: "Orivesi", slug: "orivesi" },
      { name: "Parkano", slug: "parkano" },
      { name: "Pirkkala", slug: "pirkkala" },
      { name: "Pälkäne", slug: "palkane" },
      { name: "Ruovesi", slug: "ruovesi" },
      { name: "Sastamala", slug: "sastamala" },
      { name: "Urjala", slug: "urjala" },
      { name: "Valkeakoski", slug: "valkeakoski" },
      { name: "Vesilahti", slug: "vesilahti" },
      { name: "Virrat", slug: "virrat" },
      { name: "Ylöjärvi", slug: "ylojarvi" },
    ],
  },
  {
    id: "kanta-hame",
    title: "KANTA-HÄME",
    cities: [
      { name: "Forssa", slug: "forssa" },
      { name: "Hämeenlinna", slug: "hameenlinna" },
    ],
  },
  {
    id: "satakunta",
    title: "SATAKUNTA",
    cities: [
      { name: "Huittinen", slug: "huittinen" },
    ],
  },
];

const ToimintaAlueetBanner = () => {
  return (
    <section className="py-10 md:py-14 bg-accent-light">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start max-w-5xl mx-auto">
          {/* Vasen: otsikko + accordion */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5" style={{ color: "#38b6ff" }} />
              <h2 className="text-xl md:text-2xl font-bold font-heading" style={{ color: "#38b6ff" }}>
                Toiminta-alueet
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-3">
              {regions.map((region) => (
                <AccordionItem
                  key={region.id}
                  value={region.id}
                  className="border-0 bg-card rounded-xl shadow-sm overflow-hidden"
                >
                  <AccordionTrigger
                    className="px-5 py-4 hover:no-underline font-heading text-lg md:text-xl font-extrabold italic tracking-wide"
                    style={{ color: "#38b6ff" }}
                  >
                    {region.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5 pt-0">
                    <p className="text-foreground/85 leading-relaxed text-sm md:text-base">
                      {region.cities.map((city, idx) => (
                        <span key={city.name}>
                          {city.slug ? (
                            <Link
                              to={`/maalauspalvelut-${city.slug}`}
                              className="underline decoration-transparent hover:decoration-primary underline-offset-4 transition-colors hover:text-primary"
                            >
                              {city.name}
                            </Link>
                          ) : (
                            <span>{city.name}</span>
                          )}
                          {idx < region.cities.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Link
              to="/toiminta-alueet"
              className="inline-block mt-5 text-sm text-primary font-medium hover:underline"
            >
              Katso kaikki alueet →
            </Link>
          </div>

          {/* Oikea: kartta */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <img
              src={mapImage}
              sizes="280px"
              alt="Toimialuekartta: Pirkanmaa ja Kanta-Häme"
              className="w-full max-w-[280px] rounded-2xl object-contain"
              width={280}
              height={350}
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
