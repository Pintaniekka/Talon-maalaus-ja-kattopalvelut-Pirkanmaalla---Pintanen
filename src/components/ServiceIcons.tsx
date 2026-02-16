interface IconProps {
  className?: string;
}

/** Tiilikatto / roof tile icon */
export const RoofTileIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 14l9-9 9 9" />
    <path d="M5 14v5a1 1 0 001 1h12a1 1 0 001-1v-5" />
    <path d="M7 14v2h4v-2" />
    <path d="M13 14v2h4v-2" />
    <path d="M9 16v4" />
    <path d="M15 16v4" />
  </svg>
);

/** Katon puhdistus / roof cleaning icon */
export const RoofCleanIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 14l9-9 9 9" />
    <path d="M5 14v5a1 1 0 001 1h12a1 1 0 001-1v-5" />
    <path d="M8 10l2 2" />
    <path d="M14 10l2 2" />
    <circle cx="10" cy="8" r="0.5" fill="currentColor" />
    <circle cx="14" cy="7" r="0.5" fill="currentColor" />
    <circle cx="12" cy="5.5" r="0.5" fill="currentColor" />
  </svg>
);

/** Maalauspensseli / paint brush icon */
export const PaintBrushIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18.37 2.63a2.12 2.12 0 013 3L14 13l-4 1 1-4z" />
    <path d="M11 13l-1.5 1.5" />
    <path d="M9.5 14.5L7 20a1 1 0 001.5 1L14 16" />
    <path d="M16 8l-5 5" />
  </svg>
);
