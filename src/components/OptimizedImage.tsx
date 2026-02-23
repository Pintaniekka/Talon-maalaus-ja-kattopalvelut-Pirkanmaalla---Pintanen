interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  draggable?: boolean;
  style?: React.CSSProperties;
  onError?: React.ReactEventHandler<HTMLImageElement>;
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
}: OptimizedImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
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
