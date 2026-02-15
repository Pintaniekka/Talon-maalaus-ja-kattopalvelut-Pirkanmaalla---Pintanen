import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
}

const defaultTitle = 'Pintanen.fi - Tiilikattojen pinnoitukset ja ulkomaalaukset Pirkanmaalla';
const defaultDescription = 'Tiilikattojen pinnoitukset ja ulkomaalaukset ammattitaidolla Pirkanmaalla. 5 vuoden takuu. Ota yhteyttä jo tänään.';

const SEO = ({ title, description }: SEOProps) => {
  const pageTitle = title ? `${title} | Pintanen Oy` : defaultTitle;
  const pageDescription = description || defaultDescription;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
    </Helmet>
  );
};

export default SEO;
