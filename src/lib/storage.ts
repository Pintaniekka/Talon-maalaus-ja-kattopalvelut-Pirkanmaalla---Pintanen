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

/** Kovakoodattu Supabase-osoite, jota käytetään jos VITE_SUPABASE_URL puuttuu. */
const FALLBACK_URL = "https://fndkkgfpsgghvewvoysr.supabase.co";

const SUPABASE_URL: string =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_SUPABASE_URL) ||
  FALLBACK_URL;

/**
 * Palauttaa absoluuttisen URL-osoitteen Supabase Storage -bucketissa olevalle kuvalle.
 *
 * @param path - Polku bucket-kansion sisällä, esim. `"Muut_referenssit/kuva.webp"`
 * @returns Täydellinen HTTPS-osoite kuvaan
 *
 * @example
 * ```ts
 * const url = getStorageUrl("Muut_referenssit/logo.webp");
 * // => "https://fndkkgfpsgghvewvoysr.supabase.co/storage/v1/object/public/images/Muut_referenssit/logo.webp"
 * ```
 */
export function getStorageUrl(path: string): string {
  return `${SUPABASE_URL}/storage/v1/object/public/images/${encodeURI(path)}`;
}
