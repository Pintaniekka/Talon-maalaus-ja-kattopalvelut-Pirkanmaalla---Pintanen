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

      {/* Paint Drip Shape Divider */}
      <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none" style={{ lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[60px] md:h-[80px] lg:h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 H1440 V40
               Q1400,40 1380,42 Q1350,46 1340,70 Q1330,95 1320,100 Q1310,105 1300,95 Q1290,80 1285,60 Q1280,45 1260,42 Q1240,40 1200,40
               Q1160,40 1140,44 Q1120,50 1115,75 Q1110,100 1100,110 Q1090,115 1080,100 Q1070,80 1065,55 Q1060,42 1040,40
               Q1000,40 960,40
               Q920,40 900,43 Q880,48 870,80 Q860,112 850,118 Q840,120 830,110 Q820,90 815,65 Q810,45 790,42 Q770,40 740,40
               Q700,40 680,42 Q660,46 655,58 Q650,70 645,75 Q640,78 635,70 Q630,60 625,48 Q620,42 600,40
               Q560,40 520,40
               Q480,40 460,44 Q440,50 430,85 Q420,115 410,120 Q400,120 390,108 Q380,90 375,60 Q370,44 350,42 Q330,40 300,40
               Q260,40 240,42 Q220,46 215,55 Q210,65 205,68 Q200,70 195,62 Q190,52 185,44 Q180,40 160,40
               Q120,40 100,43 Q80,48 70,75 Q60,105 50,112 Q40,116 30,105 Q20,88 15,60 Q10,44 0,40
               Z"
            style={{ fill: '#96dafb' }}
          />
        </svg>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-[fadeIn_0.6s_1s_both] z-20">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-[scrollBounce_1.5s_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
