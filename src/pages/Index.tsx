import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Services from '@/components/Services';
import MiksiPintanen from '@/components/MiksiPintanen';
import PriceCalculator from '@/components/PriceCalculator';
import Gallery from '@/components/Gallery';
import TeamContactSection from '@/components/TeamContactSection';
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
      <MiksiPintanen />
      <PriceCalculator />
      <Gallery />
      <TeamContactSection />
      <Contact />
      <KotitalousVahennys />
    </>
  );
};

export default Index;
