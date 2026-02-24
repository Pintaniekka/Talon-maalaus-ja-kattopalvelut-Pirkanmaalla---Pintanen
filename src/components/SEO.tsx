import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getStorageUrl } from '@/lib/storage';

interface SEOProps {
  title?: string;
  description?: string;
  preloadImage?: string;
}

const defaultTitle = 'Tiilikaton pinnoitus ja talon maalaus Pirkanmaa | Pintanen';
const defaultDescription = 'Tiilikaton pinnoitus, katon puhdistus ja talon maalaus takuutyönä Pirkanmaalla. Yrittäjät mukana jokaisessa työssä. Pyydä maksuton arvio.';

const heroImage = "https://fndkkgfpsgghvewvoysr.supabase.co/storage/v1/object/public/images/Muut_referenssit/laivaston-sininen-talo-maalaus-jalkeen-hameenkyro.webp";

const SEO = ({ title, description, preloadImage }: SEOProps) => {
  const { pathname } = useLocation();
  const pageTitle = title ? `${title} | Pintanen` : defaultTitle;
  const pageDescription = description || defaultDescription;
  const canonicalUrl = `https://pintanen.fi${pathname === '/' ? '' : pathname}`;
  const imageToPreload = preloadImage || (!title ? heroImage : undefined);

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <link rel="canonical" href={canonicalUrl} />
      <meta name="description" content={pageDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      {imageToPreload && (
        <link rel="preload" as="image" href={imageToPreload} type="image/webp" />
      )}
    </Helmet>
  );
};

export default SEO;
