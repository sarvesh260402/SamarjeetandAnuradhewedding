"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

interface OpenInvitationAnimationProps {
  onComplete: () => void;
}

interface PetalItem {
  id: number;
  left: string;
  top: string;
  width: string;
  height: string;
  color: string;
  rotate: string;
}

export function OpenInvitationAnimation({ onComplete }: OpenInvitationAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const petalsRef = useRef<HTMLDivElement>(null);
  const [petalsData, setPetalsData] = useState<PetalItem[]>([]);

  useEffect(() => {
    // Generate petals only on mount to prevent SSR hydration mismatch
    const generated = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${40 + Math.random() * 20}%`,
      top: `${40 + Math.random() * 20}%`,
      width: `${8 + Math.random() * 12}px`,
      height: `${8 + Math.random() * 12}px`,
      color: ["#F4D4D4", "#E8B4B4", "#C9A962", "#FAF6F0"][i % 4],
      rotate: `${Math.random() * 360}deg`,
    }));
    setPetalsData(generated);
  }, []);

  useEffect(() => {
    if (petalsData.length === 0) return;

    const left = leftRef.current;
    const right = rightRef.current;
    const petals = petalsRef.current;
    if (!left || !right || !petals) return;

    const petalEls = petals.querySelectorAll(".petal");

    const tl = gsap.timeline({
      onComplete: () => {
        if (containerRef.current) {
          containerRef.current.style.pointerEvents = "none";
        }
        onComplete();
      },
    });

    tl.to(left, {
      rotateY: -120,
      duration: 1.2,
      ease: "power3.inOut",
      transformOrigin: "left center",
    })
      .to(
        right,
        {
          rotateY: 120,
          duration: 1.2,
          ease: "power3.inOut",
          transformOrigin: "right center",
        },
        "<"
      )
      .to(
        petalEls,
        {
          x: () => (Math.random() - 0.5) * window.innerWidth * 1.5,
          y: () => (Math.random() - 0.5) * window.innerHeight,
          rotation: () => Math.random() * 720,
          opacity: 0,
          duration: 2,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        onStart: () => {
          if (containerRef.current) {
            containerRef.current.style.pointerEvents = "none";
          }
        },
      }, "-=0.3");

    return () => {
      tl.kill();
    };
  }, [onComplete, petalsData]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[95] flex items-center justify-center bg-maroon-dark/95"
      style={{ perspective: "1200px" }}
    >
      <div className="relative w-full max-w-[300px] sm:max-w-md md:max-w-lg h-64 sm:h-80 md:h-96 flex" style={{ transformStyle: "preserve-3d" }}>
        <div
          ref={leftRef}
          className="w-1/2 h-full bg-gradient-to-br from-cream to-blush border-r border-gold/30 rounded-l-2xl shadow-2xl flex items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="font-playfair text-4xl text-gold-dark">S</span>
        </div>
        <div
          ref={rightRef}
          className="w-1/2 h-full bg-gradient-to-bl from-cream to-blush border-l border-gold/30 rounded-r-2xl shadow-2xl flex items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="font-playfair text-4xl text-gold-dark">A</span>
        </div>
      </div>

      <div ref={petalsRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        {petalsData.map((p) => (
          <div
            key={p.id}
            className="petal absolute"
            style={{
              left: p.left,
              top: p.top,
              width: p.width,
              height: p.height,
              background: p.color,
              borderRadius: "50% 0 50% 50%",
              transform: `rotate(${p.rotate})`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

interface ConfettiItem {
  id: number;
  color: string;
  left: string;
  top: string;
  delay: number;
}

export function WelcomePopup({ onClose }: { onClose: () => void }) {
  const [confetti, setConfetti] = useState<ConfettiItem[]>([]);

  useEffect(() => {
    // Generate confetti on mount to prevent SSR hydration mismatch
    const generated = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      color: ["#C9A962", "#F4D4D4", "#E8B4B4", "#6B2D3C"][i % 4],
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 1.5,
    }));
    setConfetti(generated);
  }, []);

  useEffect(() => {
    const timer = setTimeout(onClose, 5500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center pointer-events-none overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-labelledby="welcome-title"
    >
      <motion.div
        className="relative bg-cream/95 backdrop-blur-xl border-2 border-gold/40 rounded-3xl p-6 sm:p-10 md:p-14 shadow-2xl text-center max-w-md mx-4 pointer-events-auto"
        initial={{ scale: 0.5, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: -30 }}
        transition={{ type: "spring", damping: 20 }}
      >
        {/* Floating flowers */}
        {["🌸", "🌺", "💮", "🪷"].map((flower, i) => (
          <motion.span
            key={i}
            className="absolute text-2xl"
            style={{ left: `${10 + i * 25}%`, top: "-10px" }}
            animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
          >
            {flower}
          </motion.span>
        ))}

        <motion.p
          className="text-4xl mb-2"
          animate={{ rotate: [0, 14, -8, 14, 0] }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          🙏
        </motion.p>
        <h2 id="welcome-title" className="font-playfair text-2xl sm:text-3xl md:text-4xl text-maroon-dark mb-2">
          Namaste!
        </h2>
        <p className="font-poppins text-maroon/70 text-sm md:text-base">
          Welcome to the wedding celebration of
        </p>
        <p className="font-playfair text-2xl text-gold-dark mt-2">Samarjeet & Anuradha</p>
        <p className="font-poppins text-maroon/50 text-xs mt-4">May blessings shower upon you</p>

        {/* Confetti dots */}
        {confetti.map((c) => (
          <motion.div
            key={c.id}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: c.color,
              left: c.left,
              top: c.top,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], y: [0, -30] }}
            transition={{ duration: 2, delay: c.delay, repeat: Infinity }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

