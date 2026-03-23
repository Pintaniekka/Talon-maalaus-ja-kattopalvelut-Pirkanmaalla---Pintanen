import { getResponsiveSrc, getResponsiveSrcSet } from '@/lib/storage';

interface ResponsiveSupabaseImageProps {
  baseName: string;
  alt?: string;
  cityIn?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  draggable?: boolean;
  style?: React.CSSProperties;
  onError?: React.ReactEventHandler<HTMLImageElement>;
  width?: number;
  height?: number;
}

/**
 * Converts a hyphenated baseName to a human-readable Finnish alt text.
 * E.g. "vihrea-puutalo-ulkomaalaus-jalkeen" → "Vihreä puutalo ulkomaalaus jälkeen"
 */
const baseNameToAlt = (baseName: string): string => {
  const text = baseName.replace(/-/g, ' ');
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const ResponsiveSupabaseImage = ({
  baseName,
  alt,
  cityIn,
  className,
  priority = false,
  sizes = '(max-width: 768px) 100vw, 600px',
  draggable,
  style,
  onError,
  width,
  height,
}: ResponsiveSupabaseImageProps) => {
  const location = cityIn || 'Pirkanmaalla';
  const resolvedAlt = alt || `${baseNameToAlt(baseName)} ${location}`;

  return (
    <img
      src={getResponsiveSrc(baseName)}
      srcSet={getResponsiveSrcSet(baseName)}
      alt={resolvedAlt}
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
