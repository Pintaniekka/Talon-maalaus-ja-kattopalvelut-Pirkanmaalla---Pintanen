import { useParams, Navigate } from "react-router-dom";
import PinnoitusCityHero from "@/components/pinnoitus/PinnoitusCityHero";
import PinnoitusTrustStats from "@/components/pinnoitus/PinnoitusTrustStats";
import PinnoitusLocalHook from "@/components/pinnoitus/PinnoitusLocalHook";
import PinnoitusProblemSection from "@/components/pinnoitus/PinnoitusProblemSection";
import PinnoitusCityProcess from "@/components/pinnoitus/PinnoitusCityProcess";
import PinnoitusComparison from "@/components/pinnoitus/PinnoitusComparison";
import PinnoitusPricingCards from "@/components/pinnoitus/PinnoitusPricingCards";
import PinnoitusFinancing from "@/components/pinnoitus/PinnoitusFinancing";
import PinnoitusEntrepreneur from "@/components/pinnoitus/PinnoitusEntrepreneur";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import { roofTestimonials } from "@/data/testimonialsData";
import KotitalousVahennys from "@/components/KotitalousVahennys";
import ServiceContactSection from "@/components/ServiceContactSection";
import FAQSection from "@/components/FAQSection";
import ToimintaAlueetBanner from "@/components/ToimintaAlueetBanner";
import { getPinnoitusCityFAQ } from "@/data/faqData";
import SEO from "@/components/SEO";
import { getResponsiveSrc, getResponsiveSrcSet } from "@/lib/storage";
import { getCityBySlug } from "@/data/cityData";

const heroBase = "kirkkaan-punainen-tiilikatto-pinnoituksen-jalkeen";
const heroImage = getResponsiveSrc(heroBase);
const heroSrcSet = getResponsiveSrcSet(heroBase);

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
        preloadImage={heroImage}
      />

      <PinnoitusCityHero cityName={cityData.name} cityIn={cityData.cityIn} backgroundImage={heroImage} />
      <PinnoitusTrustStats cityName={cityData.name} />

      {/* Local Hook – kaupunkikohtainen paikallisteksti heti luottamuslaatikon jälkeen */}
      {cityData.pinnoitusLocalHookTitle && cityData.pinnoitusLocalHookText && (
        <PinnoitusLocalHook
          title={cityData.pinnoitusLocalHookTitle}
          text={cityData.pinnoitusLocalHookText}
        />
      )}

      <TestimonialsMarquee />

      <PinnoitusProblemSection cityName={cityData.name} cityIn={cityData.cityIn} cityGenitive={cityData.cityGenitive} />
      <PinnoitusCityProcess cityName={cityData.name} />
      <PinnoitusComparison cityIn={cityData.cityIn} />
      <PinnoitusPricingCards cityName={cityData.name} cityIn={cityData.cityIn} />
      <KotitalousVahennys />
      <PinnoitusFinancing />
      <PinnoitusEntrepreneur />

      <FAQSection items={getPinnoitusCityFAQ(cityData.name)} />
      <ServiceContactSection variant="katto" cityName={cityData.name} cityGenitive={cityData.cityGenitive} />
      <ToimintaAlueetBanner />
    </div>
  );
};

export default KattopalvelutPinnoitusCity;
