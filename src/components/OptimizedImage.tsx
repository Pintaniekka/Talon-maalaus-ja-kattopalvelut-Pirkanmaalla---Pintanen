import { getOptimizedUrl } from '@/lib/storage';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  draggable?: boolean;
  style?: React.CSSProperties;
  onError?: React.ReactEventHandler<HTMLImageElement>;
  /** Target render width for Supabase image transform. Defaults to width prop or 800. */
  transformWidth?: number;
}

const SRCSET_WIDTHS = [300, 600, 1200];

function buildSrcSet(src: string): string | undefined {
  if (!src.includes('supabase.co')) return undefined;
  return SRCSET_WIDTHS.map(
    (w) => `${getOptimizedUrl(src, w)} ${w}w`
  ).join(', ');
}

const OptimizedImage = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  sizes = "(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw",
  draggable,
  style,
  onError,
  transformWidth,
}: OptimizedImageProps) => {
  const optimizedSrc = getOptimizedUrl(src, transformWidth ?? width ?? 800);
  const srcSet = buildSrcSet(src);

  return (
    <img
      src={optimizedSrc}
      srcSet={srcSet}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "low"}
      sizes={sizes}
      draggable={draggable}
      style={style}
      onError={onError}
    />
  );
};

export default OptimizedImage;
