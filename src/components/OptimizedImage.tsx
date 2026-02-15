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

const OptimizedImage = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  draggable,
  style,
  onError,
  transformWidth,
}: OptimizedImageProps) => {
  const optimizedSrc = getOptimizedUrl(src, transformWidth ?? width ?? 800);

  return (
    <img
      src={optimizedSrc}
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
