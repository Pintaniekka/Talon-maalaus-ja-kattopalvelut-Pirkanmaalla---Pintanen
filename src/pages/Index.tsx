import Hero from "@/components/Hero";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import Services from "@/components/Services";
import MiksiPintanen from "@/components/MiksiPintanen";
import ProcessTimeline from "@/components/ProcessTimeline";
import PriceCalculatorCTA from "@/components/PriceCalculatorCTA";
import Gallery from "@/components/Gallery";
import FAQSection from "@/components/FAQSection";
import KotitalousVahennys from "@/components/KotitalousVahennys";
import ServiceContactSection from "@/components/ServiceContactSection";
import SEOTextSection from "@/components/SEOTextSection";
import ToimintaAlueetBanner from "@/components/ToimintaAlueetBanner";
import { generalFAQ } from "@/data/faqData";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO />
      <Hero />
      <TestimonialsMarquee />
      <Services />
      <PriceCalculatorCTA />
      <MiksiPintanen />
      <ProcessTimeline />
      <Gallery />
      <FAQSection items={generalFAQ} />
      <KotitalousVahennys />
      <ServiceContactSection variant="general" />
      <SEOTextSection />
      <ToimintaAlueetBanner />
    </>
  );
};

export default Index;
