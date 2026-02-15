const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

export function getStorageUrl(path: string): string {
  return `${SUPABASE_URL}/storage/v1/object/public/images/${encodeURI(path)}`;
}

/**
 * Append Supabase Image Transformation query params to a storage URL.
 * Non-Supabase URLs are returned unchanged.
 */
export function getOptimizedUrl(url: string, width: number): string {
  if (url.includes('supabase.co')) {
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}width=${width}&format=webp&quality=60`;
  }
  return url;
}
