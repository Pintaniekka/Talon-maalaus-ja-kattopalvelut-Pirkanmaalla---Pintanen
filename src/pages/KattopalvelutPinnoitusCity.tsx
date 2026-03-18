import { useParams, Navigate } from "react-router-dom";
import PinnoitusCityHero from "@/components/pinnoitus/PinnoitusCityHero";
import PinnoitusTrustStats from "@/components/pinnoitus/PinnoitusTrustStats";
import PinnoitusProblemSection from "@/components/pinnoitus/PinnoitusProblemSection";
import PinnoitusCityProcess from "@/components/pinnoitus/PinnoitusCityProcess";
import PinnoitusComparison from "@/components/pinnoitus/PinnoitusComparison";
import PinnoitusPricingCards from "@/components/pinnoitus/PinnoitusPricingCards";
import PinnoitusFinancing from "@/components/pinnoitus/PinnoitusFinancing";
import PinnoitusEntrepreneur from "@/components/pinnoitus/PinnoitusEntrepreneur";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import KotitalousVahennys from "@/components/KotitalousVahennys";
import ServiceContactSection from "@/components/ServiceContactSection";
import FAQSection from "@/components/FAQSection";
import ToimintaAlueetBanner from "@/components/ToimintaAlueetBanner";
import { getPinnoitusCityFAQ } from "@/data/faqData";
import SEO from "@/components/SEO";
import { getStorageUrl } from "@/lib/storage";
import { getCityBySlug } from "@/data/cityData";

const kattoImage = getStorageUrl("Muut_referenssit/punainen-tiilikatto-maalaus-jalkeen-tampere.webp");

const KattopalvelutPinnoitusCity = ({ citySlug: propSlug }: { citySlug?: string }) => {
  const { city: paramCity } = useParams<{ city: string }>();
  const city = propSlug || paramCity;
  const cityData = city ? getCityBySlug(city) : undefined;

  if (!cityData) return <Navigate to="/tiilikaton-pinnoitus-pirkanmaa" replace />;

  return (
    <div>
      <SEO
        title={cityData.pinnoitusMetaTitle || `Tiilikaton pinnoitus ${cityData.name}`}
        description={
          cityData.pinnoitusMetaDesc ||
          `Tiilikaton maalauspinnoitus ${cityData.name} – pidentää katon ikää jopa 15-20 vuotta. 5 vuoden takuu.`
        }
        preloadImage={kattoImage}
      />

      <PinnoitusCityHero cityName={cityData.name} backgroundImage={kattoImage} />
      <PinnoitusTrustStats cityName={cityData.name} />

      {/* Testimonials */}
      <TestimonialsMarquee />

      <PinnoitusProblemSection cityName={cityData.name} />
      <PinnoitusCityProcess cityName={cityData.name} />
      <PinnoitusComparison />
      <PinnoitusPricingCards cityName={cityData.name} />
      <KotitalousVahennys />
      <PinnoitusFinancing />
      <PinnoitusEntrepreneur />

      <FAQSection items={getPinnoitusCityFAQ(cityData.name)} />
      <ServiceContactSection variant="katto" cityName={cityData.name} />
      <ToimintaAlueetBanner />
    </div>
  );
};

export default KattopalvelutPinnoitusCity;
