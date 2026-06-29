"use client";

import { useEffect, useState } from "react";

interface SparkleItem {
  id: number;
  left: string;
  top: string;
  delay: string;
  size: string;
}

export function Sparkles() {
  const [items, setItems] = useState<SparkleItem[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      size: `${2 + Math.random() * 3}px`,
    }));
    setItems(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[3]" aria-hidden="true">
      {items.map((s) => (
        <div
          key={s.id}
          className="absolute bg-gold rounded-full animate-twinkle"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  );
}

