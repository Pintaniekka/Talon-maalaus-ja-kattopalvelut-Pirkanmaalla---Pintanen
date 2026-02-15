
# SEO Configuration Improvement Plan

## Overview
Enhance the `index.html` `<head>` section with complete SEO metadata, structured data, and social sharing tags. Also create an OG image placeholder.

## Changes

### 1. Update `index.html` head section
- Add `<meta name="robots" content="index, follow">`
- Update Open Graph tags with correct `og:url`, `og:image` pointing to `https://pintanen.fi/og-image.png`
- Add missing `og:locale` and `og:site_name`
- Update Twitter Card tags with proper `twitter:title`, `twitter:description`, `twitter:image`
- Remove duplicate/outdated Lovable OG image references
- Add JSON-LD LocalBusiness structured data with real company info:
  - Name: Pintanen Oy
  - Phone: +358409640066
  - Email: myynti@pintanen.fi
  - Area: Pirkanmaa, Finland
  - Services: Tiilikaton pinnoitus, Ulkomaalaus, Katon puhdistus
  - Business ID (taxID): 3525786-9

### 2. Create OG image
- Need an `og-image.png` (1200x630px) in the `public/` folder
- Since we cannot generate images, we will reference the existing favicon-512.png as a temporary fallback OR use the hero background image from storage as the OG image
- Best approach: reference the navy blue house image from storage as the OG image URL directly, since it is already publicly accessible

## Technical Details

**`index.html` final head section will include:**

```html
<!-- Basic SEO -->
<meta name="description" content="Tiilikattojen pinnoitukset ja ulkomaalaukset ammattitaidolla Pirkanmaalla. 5 vuoden takuu. Ota yhteytta jo tanaan.">
<meta name="robots" content="index, follow">
<meta name="author" content="Pintanen Oy">
<meta name="keywords" content="tiilikatto, katon pinnoitus, ulkomaalaus, kattomaalaus, Pirkanmaa, Tampere">

<!-- Open Graph -->
<meta property="og:title" content="Pintanen Oy | Tiilikattojen pinnoitukset ja ulkomaalaukset">
<meta property="og:description" content="Tiilikattojen pinnoitukset ja ulkomaalaukset ammattitaidolla Pirkanmaalla. 5 vuoden takuu.">
<meta property="og:url" content="https://pintanen.fi/">
<meta property="og:type" content="website">
<meta property="og:locale" content="fi_FI">
<meta property="og:site_name" content="Pintanen Oy">
<meta property="og:image" content="https://pintanen.fi/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Pintanen Oy | Tiilikattojen pinnoitukset ja ulkomaalaukset">
<meta name="twitter:description" content="Tiilikattojen pinnoitukset ja ulkomaalaukset ammattitaidolla Pirkanmaalla. 5 vuoden takuu.">
<meta name="twitter:image" content="https://pintanen.fi/og-image.png">

<!-- JSON-LD LocalBusiness Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Pintanen Oy",
  "url": "https://pintanen.fi",
  "logo": "https://pintanen.fi/favicon-512.png",
  "image": "https://pintanen.fi/og-image.png",
  "description": "Tiilikattojen pinnoitukset ja ulkomaalaukset ammattitaidolla Pirkanmaalla. 5 vuoden takuu.",
  "telephone": "+358409640066",
  "email": "myynti@pintanen.fi",
  "taxID": "3525786-9",
  "areaServed": {
    "@type": "State",
    "name": "Pirkanmaa"
  },
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Pirkanmaa",
    "addressCountry": "FI"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Palvelut",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tiilikaton pinnoitus" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ulkomaalaus" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Katon puhdistus" } }
    ]
  }
}
</script>
```

### 3. OG Image Note
You will need to provide or upload a proper 1200x630px `og-image.png` to the `public/` folder. As a temporary solution, I will use `favicon-512.png` as the OG image reference. Once you have a proper OG image, just replace the file at `public/og-image.png`.

## Files Modified
- `index.html` -- complete head section rewrite with all SEO tags and structured data
