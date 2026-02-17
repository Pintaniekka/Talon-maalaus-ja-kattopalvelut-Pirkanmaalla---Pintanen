import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Award, MapPin } from "lucide-react";
import { getStorageUrl, getOptimizedUrl } from "@/lib/storage";

const heroImage = getStorageUrl("Samaan_kohtaan_synkronoidut_kuvat_erikseen/Laivaston sininen talo maalauksen jalkeen.webp");

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={getOptimizedUrl(heroImage, 640, 40)}
          srcSet={`${getOptimizedUrl(heroImage, 640, 40)} 640w, ${getOptimizedUrl(heroImage, 960, 60)} 960w, ${getOptimizedUrl(heroImage, 1200, 70)} 1200w, ${getOptimizedUrl(heroImage, 1920, 75)} 1920w`}
          alt="Laivastonsiniseksi maalattu puutalo Pirkanmaalla – ammattitaitoinen julkisivumaalaus"
          className="w-full h-full object-cover"
          sizes="100vw"
          width={1600}
          height={900}
          loading="eager"
          decoding="sync"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-primary/55" />
      </div>

      {/* Content — no opacity:0 animation, renders instantly for LCP */}
      <div className="relative z-10 section-container py-32">
        <div className="max-w-3xl">
          <div className="space-y-6">
            {/* Location & Trust Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-white/90 text-sm font-medium">Pirkanmaan alue</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight font-heading">
              Uutta ilmettä kotisi <span className="text-sky-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">katoille ja seinille</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              Tiilikattojen pinnoitukset ja ulkomaalaukset ammattitaidolla Pirkanmaalla. Pidennä talosi elinikää ja
              nosta sen arvoa takuutyöllä.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#hintalaskuri" className="btn-hero shadow-lg">
                Laske hinta
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#yhteystiedot" className="btn-hero-outline">
                Ilmainen arviokäynti
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">5+ vuotta</div>
                  <div className="text-white/80 text-sm">kokemusta</div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">200+</div>
                  <div className="text-white/80 text-sm">tyytyväistä asiakasta</div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">24h</div>
                  <div className="text-white/80 text-sm">vastausaika</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 rounded-full bg-white/60"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
