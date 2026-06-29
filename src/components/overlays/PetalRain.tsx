"use client";

import { useEffect, useState } from "react";

interface PetalItem {
  id: number;
  left: string;
  delay: string;
  duration: string;
  size: string;
  color: string;
}

export function PetalRain() {
  const [petals, setPetals] = useState<PetalItem[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${8 + Math.random() * 8}s`,
      size: `${6 + Math.random() * 10}px`,
      color: ["#F4D4D4", "#E8B4B4", "#C9A962", "#FAF6F0"][i % 4],
    }));
    setPetals(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden" aria-hidden="true">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute animate-petal-fall opacity-60"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            background: p.color,
            borderRadius: "50% 0 50% 50%",
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes petal-fall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(110vh) rotate(720deg);
            opacity: 0;
          }
        }
        .animate-petal-fall {
          animation: petal-fall linear infinite;
        }
      `}</style>
    </div>
  );
}

