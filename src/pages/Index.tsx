import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import Services from "@/components/Services";
import MiksiPintanen from "@/components/MiksiPintanen";
import PriceCalculatorCTA from "@/components/PriceCalculatorCTA";
import Gallery from "@/components/Gallery";
import ServiceContactSection from "@/components/ServiceContactSection";
import KotitalousVahennys from "@/components/KotitalousVahennys";
import FAQSection from "@/components/FAQSection";
import SEOTextSection from "@/components/SEOTextSection";
import ToimintaAlueetBanner from "@/components/ToimintaAlueetBanner";
import { generalFAQ } from "@/data/faqData";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO />
      <Hero />
      <Features />
      <TestimonialsMarquee />
      <Services />
      <PriceCalculatorCTA />
      <MiksiPintanen />
      <Gallery />
      <KotitalousVahennys />
      <FAQSection items={generalFAQ} />
      <ServiceContactSection variant="general" />
      <SEOTextSection />
      <ToimintaAlueetBanner />
    </>
  );
};

export default Index;
