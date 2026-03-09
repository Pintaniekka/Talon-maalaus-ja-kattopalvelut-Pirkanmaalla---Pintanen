import { ArrowRight, Star, Check } from "lucide-react";
import { getStorageUrl, getHeroSrcSet } from "@/lib/storage";

const heroSrc = getStorageUrl("Muut_referenssit/laivaston-sininen-talo-maalaus-jalkeen-hameenkyro.webp");

const Hero = () => {
  const svgUrl = "https://fndkkgfpsgghvewvoysr.supabase.co/storage/v1/object/public/images/maali_valuu.svg";

  return (
    <div className="relative">
      <section id="hero" className="hero-critical relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroSrc}
            srcSet={getHeroSrcSet(heroSrc)}
            sizes="100vw"
            alt="Laivastonsininen puutalo maalauksen jälkeen Hämeenkyrössä"
            className="w-full h-full object-cover"
            loading={undefined}
            decoding="async"
            fetchPriority="high"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-primary/55" />
        </div>

        {/* Content */}
        <div className="relative z-10 section-container py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="space-y-6">
              {/* Main Heading */}
              <h1 className="heading-style text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-lg">
                Tiilikaton pinnoitus ja talon maalaus{" "}
                <span className="text-accent drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">Pirkanmaalla</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-sans">
                Perheyritys, jossa yrittäjät tekevät työn itse – tiilikaton pinnoitukset ja talon maalaukset Pirkanmaalla.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="/hinnat" className="btn-hero shadow-lg">
                  Laske hinta
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#yhteystiedot" className="btn-hero-outline">
                  Ilmainen arviokäynti
                </a>
              </div>

              {/* Trust Indicators - Compact row */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-6 border-t border-white/10">
                <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-black/25 text-sm">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-white font-bold">4,9 / 5</span>
                  <span className="text-white/70 hidden sm:inline">Google</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-black/25 text-sm">
                  <Check className="w-4 h-4 text-accent" />
                  <span className="text-white">200+ projektia</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-black/25 text-sm">
                  <Check className="w-4 h-4 text-accent" />
                  <span className="text-white">5+ vuotta</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-black/25 text-sm">
                  <Check className="w-4 h-4 text-accent" />
                  <span className="text-white">Maksuton arvio</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-[fadeIn_0.6s_1s_both] z-10">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-[scrollBounce_1.5s_infinite]" />
          </div>
        </div>
      </section>

      {/* Paint drip – positioned at top-full so it starts exactly at hero bottom edge */}
      <div
        className="absolute top-full left-0 w-full h-[120px] z-10 pointer-events-none -mt-[1px]"
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
