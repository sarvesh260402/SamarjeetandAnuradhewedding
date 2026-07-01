"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import { DividerOrnament } from "@/components/ui/Decorations";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { t, language, setLanguage, siteData } = useLanguage();
  const { COUPLE } = siteData;
  const offset = useMouseParallax(15);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-blush/20 to-cream animate-gradient-shift" />
      <div className="absolute inset-0 bg-floral-pattern opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 text-center">
        <motion.p
          className="font-poppins text-gold-dark text-sm tracking-[0.4em] uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.h1
          className="font-playfair text-5xl md:text-7xl lg:text-8xl text-maroon-dark mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {COUPLE.groom.name}{" "}
          <span className="text-gold">&</span> {COUPLE.bride.name}
        </motion.h1>

        <DividerOrnament className="mb-8" />

        <motion.p
          className="font-playfair text-xl md:text-2xl text-maroon/70 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {COUPLE.weddingDate}
        </motion.p>

        <motion.button
          type="button"
          onClick={() => setLanguage(language === "en" ? "hi" : "en")}
          className="inline-flex items-center justify-center px-6 py-3 mb-10 rounded-full border border-gold bg-gold/10 text-gold-dark font-poppins text-sm uppercase tracking-[0.15em] hover:bg-gold/20 transition-colors"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          {language === "en" ? t("hero.buttonHindi") : t("hero.buttonEnglish")}
        </motion.button>

        <motion.div
          className="relative mx-auto w-72 md:w-96 lg:w-[28rem]"
          style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="relative aspect-[3/4] overflow-hidden shadow-2xl shadow-gold/20 border-4 border-gold/30"
            style={{ borderRadius: "50% 50% 0 0 / 25% 25% 0 0" }}
          >
            <Image
              src={COUPLE.heroImage}
              alt={`${COUPLE.groom.name} and ${COUPLE.bride.name} together`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
              sizes="(max-width: 768px) 288px, 448px"
            />
          </div>
          <div className="absolute -inset-4 border border-gold/20 rounded-t-[50%] pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
