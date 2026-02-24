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

// No image transformations – use plain public URLs

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
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "low"}
      draggable={draggable}
      style={style}
      onError={onError}
      width={width}
      height={height}
    />
  );
};

export default OptimizedImage;
