export function GaneshSymbol({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
      aria-label="Ganesh Ji symbol"
      role="img"
    >
      <path d="M50 8C35 8 25 18 25 32c0 8 4 15 10 19-6 2-10 8-10 14 0 9 7 16 16 16h18c9 0 16-7 16-16 0-6-4-12-10-14 6-4 10-11 10-19C85 18 75 8 60 8H50zm-5 24c-3 0-5-2-5-5s2-5 5-5 5 2 5 5-2 5-5 5zm20 0c-3 0-5-2-5-5s2-5 5-5 5 2 5 5-2 5-5 5zM50 72c-6 0-11-3-14-8h28c-3 5-8 8-14 8z" />
      <path d="M15 45c-5 0-9 4-9 9v5c0 3 2 5 5 5h4l3 8c1 2 3 3 5 3h2c3 0 5-2 5-5v-8h-2v8h-2l-3-8c-1-2-3-3-5-3h-4c-1 0-2-1-2-2v-5c0-2 2-4 4-4h6v-4H15z" transform="scale(-1,1) translate(-100,0)" />
    </svg>
  );
}

export function FloralCorner({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={`${className} ${flip ? "scale-x-[-1]" : ""}`}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 0 Q20 20 0 40 Q30 25 50 0 Q25 30 0 0Z"
        fill="#C9A962"
        opacity="0.4"
      />
      <path
        d="M0 10 Q15 25 5 45 Q25 30 40 10 Q20 35 0 10Z"
        fill="#F4D4D4"
        opacity="0.6"
      />
      <circle cx="8" cy="8" r="3" fill="#E8B4B4" opacity="0.8" />
      <circle cx="20" cy="5" r="2" fill="#C9A962" opacity="0.6" />
    </svg>
  );
}

export function DividerOrnament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-gold" fill="currentColor">
        <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6z" />
      </svg>
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
    </div>
  );
}

export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-12 gsap-reveal">
      <DividerOrnament className="mb-4" />
      <h2 className="font-playfair text-3xl md:text-5xl text-maroon-dark mb-3">{title}</h2>
      {subtitle && (
        <p className="font-poppins text-maroon/70 text-sm md:text-base max-w-xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
