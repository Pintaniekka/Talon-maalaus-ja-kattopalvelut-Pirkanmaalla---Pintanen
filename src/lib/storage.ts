/**
 * Pintanen Oy – Kuvaresurssien hallinta
 *
 * Kaikki julkiset kuvat haetaan **aina** Pintanen-tilin Supabase Storage
 * -bucketista (projekti: fndkkgfpsgghvewvoysr, bucket: "images").
 *
 * ⚠️  ÄLÄ muuta FALLBACK_URL-arvoa äläkä vaihda polkuja suhteellisiksi.
 *     Kuvat on tarkoitettu ladattaviksi pilvestä kaikissa ympäristöissä.
 *
 * @module storage
 */

/** Kiinteä Supabase-osoite Pintanen-projektille (fndkkgfpsgghvewvoysr). */
const FIXED_SUPABASE_URL = "https://fndkkgfpsgghvewvoysr.supabase.co";

/**
 * Palauttaa absoluuttisen URL-osoitteen Lovable Cloudin tallennustilasta (images-bucket).
 * 
 * ⚠️  Tämä funktio käyttää AINA kiinteää osoitetta varmistaakseen kuvien näkymisen 
 *     myös muilla tileillä ilman ympäristömuuttujia.
 *
 * @param path - Polku bucket-kansion sisällä, esim. "Muut_referenssit/kuva.webp"
 * @returns Täydellinen HTTPS-osoite kuvaan
 */
export function getStorageUrl(path: string): string {
  // Varmistetaan, että käytetään images-bucketia ja kiinteää URL-osoitetta
  return `${FIXED_SUPABASE_URL}/storage/v1/object/public/images/${encodeURI(path)}`;
}

/**
 * Palauttaa mobiilioptimoitua kuvan URL:n annetusta desktop-URL:sta.
 * Mobiiliversiot sijaitsevat pictures-480/ tai pictures-750/ -kansiossa
 * ja tiedostonimeen lisätään leveys-suffiks (esim. kuva-480.webp).
 */
export function getMobileImageUrl(desktopUrl: string, width: 480 | 750): string {
  if (!desktopUrl.includes('/storage/v1/object/public/images/')) return desktopUrl;
  const basePath = desktopUrl.split('/storage/v1/object/public/images/')[1];
  const segments = basePath.split('/');
  const encodedFilename = segments[segments.length - 1];
  const filename = decodeURI(encodedFilename);
  const dotIdx = filename.lastIndexOf('.');
  const name = filename.substring(0, dotIdx);
  const ext = filename.substring(dotIdx);
  const folder = width === 750 ? 'pictures-750' : 'pictures-480';
  return `${FIXED_SUPABASE_URL}/storage/v1/object/public/images/${folder}/${encodeURI(`${name}-${width}${ext}`)}`;
}

/** Hero-kuville: 750w mobiili + 1200w desktop */
export function getHeroSrcSet(desktopUrl: string): string {
  return `${getMobileImageUrl(desktopUrl, 750)} 750w, ${desktopUrl} 1200w`;
}

/** Muille kuville: 480w mobiili + 900w desktop */
export function getImageSrcSet(desktopUrl: string): string {
  return `${getMobileImageUrl(desktopUrl, 480)} 480w, ${desktopUrl} 900w`;
}
