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
