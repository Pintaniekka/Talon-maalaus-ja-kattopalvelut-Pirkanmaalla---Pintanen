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
      <div className="absolute -bottom-px left-0 w-full z-10 pointer-events-none" style={{ lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          className="block w-full h-[70px] md:h-[100px] lg:h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 L0,25 Q20,25 40,26 Q80,28 120,30 Q140,31 148,40 Q152,48 154,62 Q156,78 153,88 Q149,96 143,92 Q138,86 136,72 Q134,58 130,48 Q126,38 118,34 Q110,30 100,30
               L200,30 Q220,30 228,35 Q234,40 237,55 Q240,72 238,85 Q235,98 230,105 Q224,110 218,100 Q213,88 211,70 Q210,55 206,44 Q202,36 195,32 Q188,30 180,30
               L340,28 Q360,27 370,30 Q378,34 382,46 Q386,60 388,80 Q390,100 387,115 Q383,128 376,132 Q368,134 362,122 Q357,108 355,88 Q353,68 350,52 Q346,38 338,32 Q330,28 320,28
               L480,26 Q510,25 530,27 Q540,30 545,38 Q550,48 552,65 Q554,82 551,94 Q548,104 542,100 Q537,94 535,78 Q533,62 530,48 Q526,36 518,30 Q510,27 500,27
               L620,28 Q640,28 652,32 Q660,36 665,48 Q670,62 673,82 Q676,104 674,120 Q672,132 665,138 Q656,140 650,128 Q645,112 643,90 Q641,68 638,52 Q634,38 625,33 Q616,29 600,28
               L780,26 Q800,25 810,28 Q818,31 822,42 Q826,56 828,74 Q830,92 827,106 Q823,118 816,114 Q810,108 808,90 Q806,72 803,56 Q799,42 792,34 Q784,28 770,27
               L920,26 Q940,26 948,30 Q954,34 958,48 Q962,64 964,84 Q966,106 963,124 Q959,136 952,138 Q944,138 939,124 Q935,108 933,86 Q931,64 928,48 Q924,36 916,30 Q908,27 900,27
               L1060,28 Q1080,28 1090,32 Q1098,37 1102,50 Q1106,66 1108,86 Q1110,108 1107,122 Q1103,132 1096,128 Q1090,120 1088,100 Q1086,80 1083,62 Q1079,46 1072,36 Q1064,30 1050,28
               L1200,26 Q1220,25 1232,30 Q1240,35 1244,48 Q1248,64 1250,82 Q1252,100 1249,112 Q1245,122 1238,118 Q1232,110 1230,92 Q1228,74 1225,58 Q1221,42 1214,34 Q1206,28 1195,27
               L1340,28 Q1360,28 1370,32 Q1378,38 1382,52 Q1386,68 1388,90 Q1390,112 1387,130 Q1383,140 1375,138 Q1368,132 1366,110 Q1364,88 1361,68 Q1357,50 1350,38 Q1342,30 1330,28
               L1440,26 L1440,0 Z"
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
