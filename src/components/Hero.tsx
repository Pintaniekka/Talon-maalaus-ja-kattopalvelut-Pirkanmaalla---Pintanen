import { ArrowRight, Star, Check } from "lucide-react";
import { getStorageUrl, getHeroSrcSet } from "@/lib/storage";

const heroSrc = getStorageUrl("Muut_referenssit/laivaston-sininen-talo-maalaus-jalkeen-hameenkyro.webp");

const Hero = () => {
  return (
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
        <div className="max-w-3xl">
          <div className="space-y-6">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight font-heading">
              Tiilikaton pinnoitus ja talon maalaus{" "}
              <span className="text-sky-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">Pirkanmaalla</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/80 max-w-2xl font-sans">
              Perheyritys, jossa yrittäjät tekevät työn itse – tiilikaton pinnoitukset ja talon maalaukset Pirkanmaalla.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="/hinnat" className="btn-hero shadow-lg">
                Laske hinta
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#yhteystiedot" className="btn-hero-outline">
                Ilmainen arviokäynti
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-black/25">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="text-white font-bold">4,9 / 5</span>
                <span className="text-white/70 text-sm">Google-arvosteluista</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-black/25">
                <Check className="w-5 h-5 text-accent" />
                <span className="text-white text-sm">200+ toteutettua projektia</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-black/25">
                <Check className="w-5 h-5 text-accent" />
                <span className="text-white text-sm">5+ vuotta kokemusta</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-black/25">
                <Check className="w-5 h-5 text-accent" />
                <span className="text-white text-sm">Maksuton arviokäynti</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-[fadeIn_0.6s_1s_both]">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-[scrollBounce_1.5s_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
