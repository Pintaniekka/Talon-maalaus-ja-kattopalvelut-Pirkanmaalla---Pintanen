import { Helmet } from 'react-helmet-async';
import { getStorageUrl, getOptimizedUrl } from '@/lib/storage';

interface SEOProps {
  title?: string;
  description?: string;
  preloadImage?: string;
}

const defaultTitle = 'Tiilikaton pinnoitus ja talon maalaus Pirkanmaa | Pintanen';
const defaultDescription = 'Tiilikattojen pinnoitukset ja ulkomaalaukset ammattitaidolla Pirkanmaalla. 5 vuoden takuu. Ota yhteyttä jo tänään.';

const heroImage = getOptimizedUrl(getStorageUrl("Samaan_kohtaan_synkronoidut_kuvat_erikseen/Laivaston sininen talo maalauksen jalkeen.webp"), 1200);

const SEO = ({ title, description, preloadImage }: SEOProps) => {
  const pageTitle = title ? `${title} | Pintanen` : defaultTitle;
  const pageDescription = description || defaultDescription;
  const imageToPreload = preloadImage || (!title ? heroImage : undefined);

  return (
    <Helmet>
      <title>{pageTitle}</title>
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
