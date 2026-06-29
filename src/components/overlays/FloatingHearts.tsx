"use client";

export function FloatingHearts() {
  const hearts = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: `${10 + i * 12}%`,
    delay: `${i * 1.2}s`,
    size: `${14 + (i % 3) * 6}px`,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-[4] overflow-hidden" aria-hidden="true">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute text-blush-deep/40 animate-float"
          style={{
            left: h.left,
            bottom: "-5%",
            fontSize: h.size,
            animationDelay: h.delay,
            animationDuration: `${6 + h.id}s`,
          }}
        >
          ♥
        </div>
      ))}
    </div>
  );
}
