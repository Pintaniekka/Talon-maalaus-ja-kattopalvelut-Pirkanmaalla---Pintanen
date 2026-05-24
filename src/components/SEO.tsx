import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getStorageUrl } from '@/lib/storage';

interface SEOProps {
  title?: string;
  description?: string;
  preloadImage?: string;
  ogImage?: string;
}

const defaultTitle = 'Tiilikaton pinnoitus ja talon maalaus Pirkanmaa | Pintanen';
const defaultDescription = 'Tiilikaton pinnoitus, katon puhdistus ja talon maalaus takuutyönä Pirkanmaalla. Yrittäjät mukana jokaisessa työssä. Pyydä maksuton arvio.';

const heroImage = "https://fndkkgfpsgghvewvoysr.supabase.co/storage/v1/object/public/images/Muut_referenssit/laivaston-sininen-talo-maalaus-jalkeen-hameenkyro.webp";
const defaultOgImage = "https://fndkkgfpsgghvewvoysr.supabase.co/storage/v1/object/public/images/Pictures-1500/tummansininen-puutalo-ulkomaalaus-jalkeen-1500.webp";

const SEO = ({ title, description, preloadImage, ogImage }: SEOProps) => {
  const { pathname } = useLocation();
  const pageTitle = title ? `${title} | Pintanen` : defaultTitle;
  const pageDescription = description || defaultDescription;
  const cleanPath = pathname.replace(/\/+$/, '');
  const canonicalUrl = cleanPath === '' ? 'https://pintanen.fi/' : `https://pintanen.fi${cleanPath}/`;
  const imageToPreload = preloadImage || (!title ? heroImage : undefined);
  const imageUrl = ogImage || defaultOgImage;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <link rel="canonical" href={canonicalUrl} />
      <meta name="description" content={pageDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:width" content="1500" />
      <meta property="og:image:height" content="2000" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={imageUrl} />
      {imageToPreload && (
        <link rel="preload" as="image" href={imageToPreload} type="image/webp" />
      )}
    </Helmet>
  );
};

export default SEO;
