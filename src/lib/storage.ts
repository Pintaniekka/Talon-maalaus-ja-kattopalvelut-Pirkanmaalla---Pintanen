const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

export function getStorageUrl(path: string): string {
  return `${SUPABASE_URL}/storage/v1/object/public/images/${encodeURI(path)}`;
}
