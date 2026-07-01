"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { SectionHeading } from "@/components/ui/Decorations";
import { useLanguage } from "@/context/LanguageContext";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function Counter({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const prevValue = useRef(value);

  useEffect(() => {
    if (prevValue.current === value || !ref.current) return;
    gsap.fromTo(
      ref.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
    );
    prevValue.current = value;
  }, [value]);

  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-cream to-blush/50 border border-gold/30 flex items-center justify-center shadow-lg">
        <span ref={ref} className="font-playfair text-2xl sm:text-3xl md:text-4xl text-maroon-dark">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="font-poppins text-[10px] sm:text-xs text-maroon/60 mt-2 uppercase tracking-wider">{label}</span>
    </div>
  );
}

export function Countdown() {
  const { t, siteData } = useLanguage();
  const { COUPLE } = siteData;
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(
      process.env.NEXT_PUBLIC_WEDDING_DATE || COUPLE.weddingDateISO
    ).getTime();

    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-cream to-blush/20">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title={t("countdown.title")} subtitle="" />

        <div
          className="flex justify-center gap-2 sm:gap-4 md:gap-8 gsap-reveal"
          aria-live="polite"
          aria-label="Wedding countdown timer"
        >
          <Counter value={timeLeft.days} label={t("countdown.days")} />
          <Counter value={timeLeft.hours} label={t("countdown.hours")} />
          <Counter value={timeLeft.minutes} label={t("countdown.minutes")} />
          <Counter value={timeLeft.seconds} label={t("countdown.seconds")} />
        </div>
      </div>
    </section>
  );
}
