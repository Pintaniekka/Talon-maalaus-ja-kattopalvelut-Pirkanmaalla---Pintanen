import { useEffect, useRef, useState } from "react";

const testimonials = [
  { name: "Anna-Riitta Taipale", stars: 5, text: "Katon pesu ja maalaus hoitui aikataulussa. Työnjälki on hyvä ja ammattitaidolla tehty. Olemme olleet tyytyväisiä." },
  { name: "J S", stars: 5, text: "Reipas nuorimies joka tuli sovittuna ajankohtana.Korjasi,pesi ja maalasi tiilikaton sovitun hinnan mukaan.Hyvin tehty työ." },
  { name: "Mauri Rajuvaara", stars: 5, text: "Excellent quality of work within agreed budget and time frame" },
  { name: "Juuso Heimonen", stars: 5, text: "Erittäin hyvää palvelua. Urakka valmistui juuri niin kuin sovittiin ja työn jälki oli erinomaista. Suosittelen!" },
  { name: "Timo Leppänen", stars: 5, text: "Erittäin toimiva palvelu; hyvä yhteydenpito, siisti työnjälki ja ripeää toimintaa! Suosittelen!" },
  { name: "Timo Piilonen", stars: 5, text: "Eerik Pitkänen teki hyvän tarjouksen kattomaalauksesta ja -pinnoituksesta. Tarjous piti hyvin, työn laatu oli loistava ja itse työ sujui aikataulun mukaisesti." },
  { name: "Terttu Anneli", stars: 4, text: "Olemme tyytyväisiä työhön. Katollammme oli runsaasti sammalta jonka puhdistus ja käsittely tuli tarpeeseen." },
];

const getInitials = (name: string) => {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill={filled ? "#FBBF24" : "#D1D5DB"} aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
  </svg>
);

const GoogleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const TestimonialCard = ({ name, stars, text }: { name: string; stars: number; text: string }) => (
  <div className="flex-shrink-0 w-[300px] sm:w-[340px] bg-card rounded-xl p-5 shadow-sm border border-border/50 mx-2">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold font-heading">
        {getInitials(name)}
      </div>
      <span className="font-medium text-sm text-foreground">{name}</span>
    </div>
    <div className="flex gap-0.5 mb-2" role="img" aria-label={`${stars} tähteä viidestä`}>
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} filled={i < stars} />
      ))}
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed mb-3">"{text}"</p>
    <div className="flex items-center gap-1.5 text-xs text-muted-foreground/70">
      <GoogleIcon />
      <span>Google-arvostelu</span>
    </div>
  </div>
);

const TestimonialsMarquee = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const items = [...testimonials, ...testimonials];

  const pausedRef = useRef(false);
  const offsetRef = useRef(0);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    const speed = 0.4;
    const halfWidth = track.scrollWidth / 2;

    const animate = () => {
      if (!pausedRef.current) {
        offsetRef.current -= speed;
        if (Math.abs(offsetRef.current) >= halfWidth) offsetRef.current = 0;
        track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section
      className="section-padding overflow-hidden bg-background"
      aria-label="Asiakasarvostelut"
    >
      <div className="section-container mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-heading text-foreground">
          Asiakkaidemme kokemuksia
        </h2>
        <p className="mt-2 text-muted-foreground">Lue mitä asiakkaamme sanovat palvelustamme</p>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <div ref={trackRef} className="flex will-change-transform" style={{ width: "max-content" }}>
          {items.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMarquee;
