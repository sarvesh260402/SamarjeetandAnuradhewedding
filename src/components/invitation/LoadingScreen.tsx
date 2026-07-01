"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GaneshSymbol } from "@/components/ui/Decorations";
import { SHLOKA } from "@/data/site";

interface LoadingScreenProps {
  onComplete: () => void;
}

interface SparkleItem {
  id: number;
  left: string;
  top: string;
  delay: number;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [sparkles, setSparkles] = useState<SparkleItem[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return p + 2;
      });
    }, 50);

    setSparkles(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 2,
      }))
    );

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-maroon-dark via-maroon to-maroon-dark"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-floral-pattern opacity-30" />

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center"
        >
          <GaneshSymbol className="w-20 h-20 text-gold mb-6 animate-pulse" />

          <motion.h1
            className="font-playfair text-4xl md:text-5xl text-gold-light text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Samarjeet <span className="text-blush">&</span> Anuradha
          </motion.h1>

          <motion.p
            className="font-poppins text-gold/80 text-lg md:text-xl text-center mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            Wedding Invitation
          </motion.p>

          <motion.p
            className="font-poppins text-cream/70 text-sm mt-3 text-center max-w-md px-4 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {SHLOKA.transliteration.split("|")[0]?.trim()}
          </motion.p>

          <div className="mt-10 w-48 h-1 bg-cream/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="font-poppins text-cream/50 text-xs mt-3">{progress}%</p>
        </motion.div>

        {/* Sparkles */}
        {sparkles.map((s) => (
          <motion.div
            key={s.id}
            className="absolute w-1 h-1 bg-gold rounded-full"
            style={{
              left: s.left,
              top: s.top,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: s.delay,
            }}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

