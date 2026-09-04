import { ArrowRight, Check } from "lucide-react";
import { Star } from "@/components/icons/BrandIcons";
import { getResponsiveSrc, getResponsiveSrcSet } from "@/lib/storage";
import { allTestimonials } from "@/data/testimonialsData";

const heroBaseName = "tummansininen-puutalo-ulkomaalaus-jalkeen";

const heroTestimonial =
  allTestimonials.find((t) => t.name === "Timo Leppänen") ?? allTestimonials[0];

const heroStats = [
  { value: "5,0 / 5", label: "Google", isRating: true },
  { value: "200+", label: "Projektia" },
  { value: "5+ vuotta", label: "Kokemus" },
  { value: "Maksuton", label: "Arviokäynti" },
];

const Hero = () => {
  const svgUrl = "https://fndkkgfpsgghvewvoysr.supabase.co/storage/v1/object/public/images/maali_valuu.svg";

  return (
    <div className="relative">
      <section id="hero" className="hero-critical relative min-h-screen flex flex-col lg:flex-row overflow-hidden bg-background">
        {/* Top scrim so the fixed light header stays legible over the light hero */}
        <div className="absolute top-0 inset-x-0 h-28 md:h-32 z-[5] pointer-events-none bg-gradient-to-b from-primary/90 via-primary/55 to-transparent" />
        {/* Left: Content */}
        <div className="relative z-10 w-full lg:w-[52%] flex flex-col justify-center px-6 sm:px-10 lg:pl-12 lg:pr-8 xl:pl-20 xl:pr-14 pt-28 lg:pt-32 pb-16">
          <div className="max-w-xl">
            <h1 className="heading-style text-4xl md:text-5xl lg:text-[3.4rem] text-primary leading-[1.08] tracking-tight">
              Tiilikaton pinnoitus ja talon maalaus{" "}
              <span className="text-accent">Pirkanmaalla</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Perheyritys</strong>, jossa <strong className="text-foreground">yrittäjät tekevät työn itse</strong> – <strong className="text-foreground">tiilikaton pinnoitukset</strong> ja <strong className="text-foreground">talon maalaukset</strong> Pirkanmaalla.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="/hinnat" className="btn-hero shadow-lg shadow-accent/20">
                Laske hinta
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#yhteystiedot"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Ilmainen arviokäynti
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5 mt-12 pt-8 border-t border-border">
              {heroStats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="flex items-center gap-1.5 text-lg font-bold text-primary">
                    {stat.isRating && (
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    )}
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Image with architectural clip-path edge */}
        <div className="relative w-full lg:w-[48%] min-h-[420px] lg:min-h-screen">
          <div className="absolute inset-0 lg:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%,0_26%)]">
            <img
              src={getResponsiveSrc(heroBaseName)}
              srcSet={getResponsiveSrcSet(heroBaseName)}
              sizes="(min-width: 1024px) 48vw, 100vw"
              alt="Tummansininen puutalo ulkomaalaus jälkeen Pirkanmaalla"
              className="w-full h-full object-cover"
              loading={undefined}
              decoding="async"
              fetchPriority="high"
              width={1920}
              height={1280}
            />
            <div className="absolute inset-0 bg-primary/10" />
          </div>

          {/* Floating customer review card */}
          <figure className="hidden xl:block absolute left-2 bottom-20 max-w-[280px] bg-card p-5 rounded-xl border-l-4 border-accent shadow-2xl">
            <blockquote className="text-sm text-foreground font-semibold leading-relaxed">
              ”{heroTestimonial.text}”
            </blockquote>
            <figcaption className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
              <Check className="w-3.5 h-3.5 text-accent" />
              {heroTestimonial.name} · Google-arvostelu
            </figcaption>
          </figure>
        </div>
      </section>

      <div
        className="absolute left-0 top-full mt-[1px] w-full h-[110px] block md:hidden pointer-events-none z-20"
        style={{
          backgroundColor: '#96dafb',
          WebkitMaskImage: `url("${svgUrl}")`,
          maskImage: `url("${svgUrl}")`,
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
          WebkitMaskPosition: 'top center',
          maskPosition: 'top center',
        }}
      />
    </div>
  );
};

export default Hero;
