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
}

/**
 * SEO- ja suorituskykyoptimoitu kuvakomponentti.
 * - Hero-kuvat: priority=true (ei lazy, fetchpriority=high)
 * - Muut kuvat: loading=lazy, decoding=async
 * - Kaikki kuvat: sizes-attribuutti responsiivisuuteen
 */
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
}: OptimizedImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : undefined}
      sizes={sizes}
      draggable={draggable}
      style={style}
      onError={onError}
    />
  );
};

export default OptimizedImage;
