interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  srcSet?: string;
  draggable?: boolean;
  style?: React.CSSProperties;
  onError?: React.ReactEventHandler<HTMLImageElement>;
  width?: number;
  height?: number;
}

// No image transformations – use plain public URLs

const OptimizedImage = ({
  src,
  alt,
  className,
  priority = false,
  sizes,
  srcSet,
  draggable,
  style,
  onError,
  width,
  height,
}: OptimizedImageProps) => {
  return (
    <img
      src={src}
      srcSet={srcSet}
      alt={alt}
      className={className}
      loading={priority ? undefined : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "low"}
      sizes={sizes}
      draggable={draggable}
      style={style}
      onError={onError}
      width={width}
      height={height}
    />
  );
};

export default OptimizedImage;
