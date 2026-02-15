import { useState } from "react";
import { motion } from "framer-motion";
import { getStorageUrl, getOptimizedUrl } from "@/lib/storage";

const kattoEnnen = getStorageUrl("Samaan_kohtaan_synkronoidut_kuvat_erikseen/Punainen liakainen katto ennen maalauspinnoitusta.webp");
const kattoJalkeen = getStorageUrl("Samaan_kohtaan_synkronoidut_kuvat_erikseen/Punainen kiiltava katto maalaukspinnoituksen jalkeen.webp");

const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <section className="section-padding bg-muted">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">Ennen & Jälkeen</h2>
          <p className="text-muted-foreground text-lg">
            Katso ero liukusäädintä vetämällä. Katot saavat uuden elämän ammattimaisella pinnoituksella.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div
            className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-xl"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleMove}
          >
            {/* After Image (Full width, behind) */}
            <img
              src={getOptimizedUrl(kattoJalkeen, 800)}
              alt="Jälkeen"
              className="absolute inset-0 w-full h-full object-cover"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
              draggable={false}
            />

            {/* Before Image (Clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={getOptimizedUrl(kattoEnnen, 800)}
                alt="Ennen"
                className="absolute inset-0 w-full h-full object-cover"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-primary-foreground shadow-lg"
              style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground shadow-lg flex items-center justify-center">
                <div className="flex gap-0.5">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[8px] border-r-primary" />
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-primary" />
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 px-4 py-2 rounded-lg bg-foreground/80 text-primary-foreground font-semibold text-sm">
              Ennen
            </div>
            <div className="absolute top-4 right-4 px-4 py-2 rounded-lg bg-accent/90 text-accent-foreground font-semibold text-sm">
              Jälkeen
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;
