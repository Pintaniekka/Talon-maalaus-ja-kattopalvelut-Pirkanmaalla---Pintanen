interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  draggable?: boolean;
  style?: React.CSSProperties;
  onError?: React.ReactEventHandler<HTMLImageElement>;
  width?: number;
  height?: number;
}

const SUPABASE_STORAGE_PREFIX = "https://fndkkgfpsgghvewvoysr.supabase.co/storage/v1/object/public/images/";

function buildTransformUrl(src: string, width: number): string {
  if (!src.startsWith(SUPABASE_STORAGE_PREFIX)) return src;
  const path = src.slice(SUPABASE_STORAGE_PREFIX.length);
  return `https://fndkkgfpsgghvewvoysr.supabase.co/storage/v1/render/image/public/images/${path}?width=${width}&format=webp&quality=80`;
}

function buildSrcSet(src: string): string | undefined {
  if (!src.startsWith(SUPABASE_STORAGE_PREFIX)) return undefined;
  const widths = [400, 800, 1200, 1920];
  return widths
    .map((w) => `${buildTransformUrl(src, w)} ${w}w`)
    .join(", ");
}

function buildDefaultSrc(src: string): string {
  if (!src.startsWith(SUPABASE_STORAGE_PREFIX)) return src;
  return buildTransformUrl(src, 800);
}

const OptimizedImage = ({
  src,
  alt,
  className,
  priority = false,
  sizes,
  draggable,
  style,
  onError,
  width,
  height,
}: OptimizedImageProps) => {
  const srcSet = buildSrcSet(src);

  const optimizedSrc = buildDefaultSrc(src);

  return (
    <img
      src={optimizedSrc}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "low"}
      sizes={sizes}
      srcSet={srcSet}
      draggable={draggable}
      style={style}
      onError={onError}
      width={width}
      height={height}
    />
  );
};

export default OptimizedImage;
