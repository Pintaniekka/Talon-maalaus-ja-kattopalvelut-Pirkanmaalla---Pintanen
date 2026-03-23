import { getResponsiveSrc, getResponsiveSrcSet } from '@/lib/storage';

interface ResponsiveSupabaseImageProps {
  baseName: string;
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

const ResponsiveSupabaseImage = ({
  baseName,
  alt,
  className,
  priority = false,
  sizes = '(max-width: 768px) 100vw, 600px',
  draggable,
  style,
  onError,
  width,
  height,
}: ResponsiveSupabaseImageProps) => {
  return (
    <img
      src={getResponsiveSrc(baseName)}
      srcSet={getResponsiveSrcSet(baseName)}
      alt={alt}
      className={className}
      loading={priority ? undefined : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'low'}
      sizes={sizes}
      draggable={draggable}
      style={style}
      onError={onError}
      width={width}
      height={height}
    />
  );
};

export default ResponsiveSupabaseImage;
