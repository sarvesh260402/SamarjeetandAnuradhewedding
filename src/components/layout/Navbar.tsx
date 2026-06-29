"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ block: "start" });
  };

  return (
    <nav
      className={`fixed top-1 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "top-0 bg-cream/75 backdrop-blur-xl border-b border-gold/20 shadow-lg shadow-gold/5"
          : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => handleNav("#home")}
          className="font-playfair text-xl md:text-2xl text-maroon-dark hover:text-gold transition-colors"
        >
          S <span className="text-blush-deep">♥</span> A
        </button>

        <ul className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="font-poppins text-sm text-maroon/70 hover:text-gold-dark transition-colors relative group"
              >
                {t(`nav.${link.href.replace("#", "")}`)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => setLanguage(language === "en" ? "hi" : "en")}
              className="px-3 py-1 bg-gold/10 text-gold-dark rounded-full font-poppins text-xs font-semibold hover:bg-gold/20 transition-colors"
            >
              {language === "en" ? "हिंदी" : "English"}
            </button>
          </li>
        </ul>

        <button
          className="lg:hidden p-2 text-maroon-dark"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-cream/95 backdrop-blur-xl border-t border-gold/20 overflow-hidden"
          >
            <ul className="px-4 py-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="font-poppins text-sm text-maroon/80 hover:text-gold-dark w-full text-left py-2"
                  >
                    {t(`nav.${link.href.replace("#", "")}`)}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    setLanguage(language === "en" ? "hi" : "en");
                    setMobileOpen(false);
                  }}
                  className="px-4 py-2 mt-2 bg-gold/10 text-gold-dark rounded-full font-poppins text-sm font-semibold hover:bg-gold/20 transition-colors w-full text-left"
                >
                  {language === "en" ? "Translate to हिंदी" : "Translate to English"}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
