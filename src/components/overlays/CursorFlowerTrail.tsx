"use client";

import { useEffect, useState } from "react";

interface TrailDot {
  id: number;
  x: number;
  y: number;
}

export function CursorFlowerTrail() {
  const [dots, setDots] = useState<TrailDot[]>([]);

  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || prefersReduced) return;

    let id = 0;
    let lastTime = 0;

    const handleMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < 80) return;
      lastTime = now;

      const newDot: TrailDot = { id: id++, x: e.clientX, y: e.clientY };
      setDots((prev) => [...prev.slice(-8), newDot]);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useEffect(() => {
    if (!dots.length) return;
    const timer = setTimeout(() => {
      setDots((prev) => prev.slice(1));
    }, 600);
    return () => clearTimeout(timer);
  }, [dots]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[60]" aria-hidden="true">
      {dots.map((dot) => (
        <span
          key={dot.id}
          className="absolute text-sm opacity-70 transition-opacity duration-500"
          style={{ left: dot.x - 8, top: dot.y - 8 }}
        >
          🌸
        </span>
      ))}
    </div>
  );
}
