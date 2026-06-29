"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GaneshSymbol, FloralCorner } from "@/components/ui/Decorations";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { COUPLE, SHLOKA } from "@/data/site";

interface InvitationCardProps {
  onOpen: () => void;
}

interface SparkleItem {
  id: number;
  left: string;
  top: string;
  duration: number;
  delay: number;
}

function CandleGlow({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <div className="w-3 h-8 bg-gradient-to-b from-gold-light to-gold rounded-b-full animate-flicker" />
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-8 bg-gold/30 rounded-full blur-md animate-flicker" />
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-4 bg-orange-300 rounded-full animate-flicker opacity-80" />
    </div>
  );
}

export function InvitationCard({ onOpen }: InvitationCardProps) {
  const [sparkles, setSparkles] = useState<SparkleItem[]>([]);

  useEffect(() => {
    setSparkles(
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: `${10 + Math.random() * 80}%`,
        top: `${10 + Math.random() * 80}%`,
        duration: 2 + Math.random(),
        delay: Math.random() * 2,
      }))
    );
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-gradient-to-br from-maroon-dark/95 via-maroon/90 to-maroon-dark/95"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-floral-pattern opacity-20" />

      {/* Ambient sparkles */}
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute w-1.5 h-1.5 bg-gold rounded-full"
          style={{ left: s.left, top: s.top }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.5, 1.2, 0.5] }}
          transition={{ duration: s.duration, repeat: Infinity, delay: s.delay }}
        />
      ))}

      <motion.div
        className="relative max-w-md w-full rounded-3xl overflow-hidden max-h-[95vh] overflow-y-auto"
        initial={{ scale: 0.8, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ perspective: "1200px" }}
      >
        <div className="relative bg-gradient-to-b from-cream via-cream to-blush/40 border-2 border-gold/50 shadow-2xl shadow-gold/20 p-6 md:p-10 rounded-3xl">
          <FloralCorner className="absolute top-0 left-0 w-16 h-16 md:w-20 md:h-20" />
          <FloralCorner className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20" flip />
          <FloralCorner className="absolute bottom-0 left-0 w-16 h-16 md:w-20 md:h-20 rotate-180" />
          <FloralCorner className="absolute bottom-0 right-0 w-16 h-16 md:w-20 md:h-20 rotate-180" flip />

          <div className="text-center relative z-10">
            <p className="font-poppins text-gold-dark text-[10px] md:text-xs tracking-[0.3em] uppercase mb-2 md:mb-4">
              Wedding Invitation
            </p>

            <GaneshSymbol className="w-10 h-10 md:w-14 md:h-14 mx-auto text-gold mb-2 md:mb-3" />

            <p className="font-playfair text-maroon/80 text-xs md:text-sm italic leading-relaxed mb-1 px-2">
              {SHLOKA.sanskrit}
            </p>
            <p className="font-poppins text-maroon/50 text-[10px] md:text-xs mb-4 md:mb-6">{SHLOKA.meaning}</p>

            <div className="h-px w-24 md:w-32 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent mb-4 md:mb-6" />

            <p className="font-poppins text-maroon/60 text-xs md:text-sm mb-1">Together with their families</p>
            <h1 className="font-playfair text-2xl md:text-4xl text-maroon-dark mb-1">
              {COUPLE.groom.name}
            </h1>
            <p className="font-playfair text-xl md:text-2xl text-gold my-1 md:my-2">&</p>
            <h1 className="font-playfair text-2xl md:text-4xl text-maroon-dark mb-2 md:mb-4">
              {COUPLE.bride.name}
            </h1>

            <p className="font-poppins text-maroon/70 text-xs md:text-sm mb-1">Request the pleasure of your company</p>
            <p className="font-playfair text-base md:text-lg text-gold-dark mb-1">{COUPLE.weddingDate}</p>
            <p className="font-poppins text-maroon/60 text-[10px] md:text-xs mb-6 md:mb-8">{COUPLE.venue.name}</p>

            <MagneticButton
              onClick={onOpen}
              className="mx-auto flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-gradient-to-br from-gold via-gold-dark to-gold text-cream text-lg md:text-xl font-playfair shadow-lg shadow-gold/40 hover:shadow-gold/60 ring-4 ring-gold/20 hover:ring-gold/40"
              aria-label="Open wedding invitation"
            >
              <span className="flex items-center gap-1">
                S <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>❤️</motion.span> A
              </span>
            </MagneticButton>

            <p className="font-poppins text-maroon/40 text-[10px] md:text-xs mt-3 md:mt-4">Tap to open invitation</p>
          </div>

          <CandleGlow className="absolute bottom-6 left-8" />
          <CandleGlow className="absolute bottom-6 right-8" />
        </div>
      </motion.div>
    </motion.div>
  );
}

