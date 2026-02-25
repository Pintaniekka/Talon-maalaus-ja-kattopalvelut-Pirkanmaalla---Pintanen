import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { getHeroSrcSet } from '@/lib/storage';

interface ServicePageHeroProps {
  title: string;
  subtitle: string | ReactNode;
  backgroundImage?: string;
  children?: ReactNode;
}

const ServicePageHero = ({ title, subtitle, backgroundImage, children }: ServicePageHeroProps) => {
  return (
    <section className="hero-critical relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      {backgroundImage ? (
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            srcSet={getHeroSrcSet(backgroundImage)}
            sizes="100vw"
            alt={`${title} – Pintanen Oy`}
            className="w-full h-full object-cover"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary-dark/60" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark" />
      )}

      {/* Content */}
      <div className="relative z-10 section-container text-center text-primary-foreground pt-24 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
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
