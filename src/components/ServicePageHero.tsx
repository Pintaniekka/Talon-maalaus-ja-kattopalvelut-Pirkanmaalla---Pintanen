import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { getHeroSrcSet } from '@/lib/storage';

interface ServicePageHeroProps {
  title: string;
  subtitle: string | ReactNode;
  backgroundImage?: string;
  backgroundSrcSet?: string;
  children?: ReactNode;
}

const ServicePageHero = ({ title, subtitle, backgroundImage, backgroundSrcSet, children }: ServicePageHeroProps) => {
  return (
    <section className="hero-critical relative min-h-[70vh] flex items-center justify-center overflow-hidden isolate" style={{ backgroundColor: 'hsl(215,30%,10%)' }}>
      {/* Background image – separate layer, no blend/filter/opacity */}
      {backgroundImage ? (
        <img
          src={backgroundImage}
          srcSet={backgroundSrcSet || getHeroSrcSet(backgroundImage)}
          sizes="100vw"
          alt={`${title} – Pintanen Oy`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark" />
      )}

      {/* Overlay – own layer on top of image, no blend-mode */}
      {backgroundImage && (
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(18,28,40,0.55)' }} />
      )}

      {/* Content */}
      <div className="relative z-[2] section-container text-center text-primary-foreground pt-24 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-5xl mx-auto"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto italic"
        >
          {subtitle}
        </motion.p>
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ServicePageHero;
