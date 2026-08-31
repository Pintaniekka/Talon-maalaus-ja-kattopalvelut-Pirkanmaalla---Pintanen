import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Pintanen brand icon set — käsin piirretyt SVG-ikonit.
 * Nämä korvaavat geneeriset Lucide-ikonit brändipinnoilla.
 * Kaikki käyttävät currentColor -> teemavärit toimivat automaattisesti.
 */

export interface BrandIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

const base = (
  { size = 24, strokeWidth = 1.6, className, children, ...rest }: BrandIconProps & { children: React.ReactNode },
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    className={cn("shrink-0", className)}
    {...rest}
  >
    {children}
  </svg>
);

const make = (
  displayName: string,
  children: React.ReactNode,
) => {
  const Comp = (props: BrandIconProps) => base({ ...props, children });
  Comp.displayName = displayName;
  return Comp;
};

/* ---------------------------------- Palvelut --------------------------------- */

// Maalaus: sivelin vinossa, tuore vetopyyhkäisy
export const Paintbrush = make(
  "Paintbrush",
  <>
    <path d="M15.5 3.6 20.4 8.5" />
    <path d="M17.9 6 9.7 14.2a2.6 2.6 0 0 0-.7 1.3l-.5 2.4 2.4-.5a2.6 2.6 0 0 0 1.3-.7L20.4 8.5" />
    <path d="M8.4 17.9c-.6 1.8-1.9 2.9-4.4 3.1.9-1.6 1-2.7.5-3.7" />
    <path d="M4 12.8c2.1-1.1 4.2-.9 5.7.4" />
  </>,
);

// Tiiliseinä / tiilikatto
export const BrickWall = make(
  "BrickWall",
  <>
    <path d="M3 6.5h18v11H3z" />
    <path d="M3 12h18" />
    <path d="M9 6.5V12M15 12v5.5M6 12V6.5M18 6.5V12M12 12v5.5" />
  </>,
);

// Katto (harjakatto + savupiippu)
export const Mountain = make(
  "Mountain",
  <>
    <path d="m2.5 13 9.5-7.5L21.5 13" />
    <path d="M5.5 11.2V19h13v-7.8" />
    <path d="M16.5 7.6V5.2h2.2v4.2" />
  </>,
);

// Pesu / vesi (painepesu)
export const Droplets = make(
  "Droplets",
  <>
    <path d="M12 3.5c2.6 3 4.2 5.3 4.2 7.4A4.2 4.2 0 0 1 12 15a4.2 4.2 0 0 1-4.2-4.1c0-2.1 1.6-4.4 4.2-7.4Z" />
    <path d="M7 18.5c.9.7 1.9.7 2.8 0M11.6 20.6c.9.7 1.9.7 2.8 0M16 18.5c.9.7 1.9.7 2.8 0" />
  </>,
);

// Puhtaus / kiilto
export const Sparkles = make(
  "Sparkles",
  <>
    <path d="M10 3.5 11.6 8 16 9.6 11.6 11.2 10 15.7 8.4 11.2 4 9.6 8.4 8Z" />
    <path d="M17.5 14.2 18.3 16.4 20.5 17.2 18.3 18 17.5 20.2 16.7 18 14.5 17.2 16.7 16.4Z" />
  </>,
);

// Kerrokset / pinnoite
export const Layers = make(
  "Layers",
  <>
    <path d="m12 3.2 8.2 4.1L12 11.4 3.8 7.3Z" />
    <path d="m3.8 12 8.2 4.1 8.2-4.1" />
    <path d="m3.8 16.5 8.2 4.1 8.2-4.1" />
  </>,
);

// Työkalut
export const Wrench = make(
  "Wrench",
  <>
    <path d="M14.9 3.6a5 5 0 0 0-5.7 6.6L3.8 15.6a2 2 0 0 0 0 2.8l1.8 1.8a2 2 0 0 0 2.8 0l5.4-5.4a5 5 0 0 0 6.6-5.7l-2.9 2.9-3-.6-.6-3Z" />
  </>,
);

// Mittaus
export const Ruler = make(
  "Ruler",
  <>
    <path d="M3.5 15.2 15.2 3.5l5.3 5.3L8.8 20.5Z" />
    <path d="m7.2 11.5 1.8 1.8M10 8.7l1.8 1.8M12.8 5.9l1.8 1.8" />
  </>,
);

/* --------------------------------- Luottamus --------------------------------- */

// Takuu / kilpi + valintamerkki
export const ShieldCheck = make(
  "ShieldCheck",
  <>
    <path d="M12 3 5 5.6v5.2c0 4.3 2.9 8 7 9.2 4.1-1.2 7-4.9 7-9.2V5.6Z" />
    <path d="m9 11.9 2.1 2.1L15.3 9.8" />
  </>,
);

export const Shield = make(
  "Shield",
  <path d="M12 3 5 5.6v5.2c0 4.3 2.9 8 7 9.2 4.1-1.2 7-4.9 7-9.2V5.6Z" />,
);

// Sertifioitu
export const BadgeCheck = make(
  "BadgeCheck",
  <>
    <path d="M12 2.8 14 4.6l2.7-.2.4 2.6 2.2 1.5-1.2 2.4 1.2 2.4-2.2 1.5-.4 2.6-2.7-.2-2 1.8-2-1.8-2.7.2-.4-2.6L2.7 13l1.2-2.4L2.7 8.2l2.2-1.5.4-2.6L8 4.3Z" />
    <path d="m9.2 11.8 1.9 1.9 3.8-4" />
  </>,
);

// Palkinto
export const Award = make(
  "Award",
  <>
    <circle cx="12" cy="9" r="5" />
    <path d="m8.6 13.4-1.3 7L12 18.2l4.7 2.2-1.3-7" />
  </>,
);

// Tähti (arvostelut)
export const Star = make(
  "Star",
  <path d="m12 3.6 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.8l5.9-.9Z" />,
);

// Tarkistettu
export const CheckCircle = make(
  "CheckCircle",
  <>
    <circle cx="12" cy="12" r="8.8" />
    <path d="m8.2 12.2 2.6 2.6 5-5.3" />
  </>,
);

export const ClipboardCheck = make(
  "ClipboardCheck",
  <>
    <path d="M9 4.2H7.4A1.6 1.6 0 0 0 5.8 5.8v13.4A1.6 1.6 0 0 0 7.4 20.8h9.2a1.6 1.6 0 0 0 1.6-1.6V5.8a1.6 1.6 0 0 0-1.6-1.6H15" />
    <rect x="9" y="2.6" width="6" height="3.2" rx="1" />
    <path d="m9.4 13.2 1.9 1.9 3.5-3.8" />
  </>,
);

export const FileText = make(
  "FileText",
  <>
    <path d="M13.6 2.8H7.6A1.8 1.8 0 0 0 5.8 4.6v14.8a1.8 1.8 0 0 0 1.8 1.8h8.8a1.8 1.8 0 0 0 1.8-1.8V7.4Z" />
    <path d="M13.6 2.8v4.6h4.6" />
    <path d="M8.8 12.4h6.4M8.8 15.8h6.4M8.8 9h2.4" />
  </>,
);

/* --------------------------------- Ihmiset ---------------------------------- */

export const Users = make(
  "Users",
  <>
    <circle cx="9.2" cy="8.4" r="3.4" />
    <path d="M3.4 19.6c.6-3.2 3-5 5.8-5s5.2 1.8 5.8 5" />
    <path d="M16 5.4a3.2 3.2 0 0 1 0 6.2" />
    <path d="M17.4 14.9c1.7.6 2.9 2.2 3.2 4.7" />
  </>,
);

export const User = make(
  "User",
  <>
    <circle cx="12" cy="8.2" r="3.6" />
    <path d="M5.2 20c.7-3.6 3.4-5.6 6.8-5.6s6.1 2 6.8 5.6" />
  </>,
);

export const UserRound = User;

/* --------------------------------- Yhteystiedot ------------------------------ */

export const Phone = make(
  "Phone",
  <path d="M6.4 3.5h2.4l1.5 3.7-1.9 1.4a11 11 0 0 0 5 5l1.4-1.9 3.7 1.5v2.4a2 2 0 0 1-2.2 2A16.4 16.4 0 0 1 4.4 5.7a2 2 0 0 1 2-2.2Z" />,
);

export const Mail = make(
  "Mail",
  <>
    <rect x="3" y="5.4" width="18" height="13.2" rx="2.2" />
    <path d="m3.6 7 7.3 5.4a1.9 1.9 0 0 0 2.2 0L20.4 7" />
  </>,
);

export const MessageSquare = make(
  "MessageSquare",
  <>
    <path d="M20.4 14.6a2 2 0 0 1-2 2H8.4L4 20.2V5.4a2 2 0 0 1 2-2h12.4a2 2 0 0 1 2 2Z" />
    <path d="M8 8.8h8M8 12h5" />
  </>,
);

export const MapPin = make(
  "MapPin",
  <>
    <path d="M12 21c4.2-4.6 6.3-7.9 6.3-10.4a6.3 6.3 0 1 0-12.6 0C5.7 13.1 7.8 16.4 12 21Z" />
    <circle cx="12" cy="10.4" r="2.4" />
  </>,
);

export const Building2 = make(
  "Building2",
  <>
    <path d="M4 20.6V8.2l6-3.4v15.8" />
    <path d="M10 10.4h8a2 2 0 0 1 2 2v8.2H10" />
    <path d="M13.4 13.8h1.2M17 13.8h1.2M13.4 17h1.2M17 17h1.2M6.8 10.4H8M6.8 13.8H8M6.8 17H8" />
    <path d="M2.6 20.6h18.8" />
  </>,
);

export const Building = Building2;

/* --------------------------------- Muut ------------------------------------- */

export const Clock = make(
  "Clock",
  <>
    <circle cx="12" cy="12" r="8.8" />
    <path d="M12 6.8V12l3.4 2.1" />
  </>,
);

export const Search = make(
  "Search",
  <>
    <circle cx="10.8" cy="10.8" r="6.4" />
    <path d="m15.6 15.6 4.4 4.4" />
  </>,
);

export const Target = make(
  "Target",
  <>
    <circle cx="12" cy="12" r="8.6" />
    <circle cx="12" cy="12" r="4.6" />
    <circle cx="12" cy="12" r="1.1" fill="currentColor" />
  </>,
);

export const Calculator = make(
  "Calculator",
  <>
    <rect x="4.6" y="2.8" width="14.8" height="18.4" rx="2.2" />
    <rect x="7.6" y="5.8" width="8.8" height="3.4" rx="1" />
    <path d="M8.4 13h.01M12 13h.01M15.6 13h.01M8.4 16.6h.01M12 16.6h.01M15.6 16.6h3" strokeWidth="2.2" />
  </>,
);

export const Euro = make(
  "Euro",
  <>
    <path d="M17.4 5.6a6.6 6.6 0 0 0-9.6 2.2 8.4 8.4 0 0 0 0 8.4 6.6 6.6 0 0 0 9.6 2.2" />
    <path d="M4.6 10.4h8M4.6 13.6h8" />
  </>,
);
