import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Services from '@/components/Services';
import PriceCalculator from '@/components/PriceCalculator';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import KotitalousVahennys from '@/components/KotitalousVahennys';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <>
      <SEO />
      <Hero />
      <Features />
      <Services />
      <PriceCalculator />
      <Gallery />
      <Contact />
      <KotitalousVahennys />
    </>
  );
};

export default Index;
