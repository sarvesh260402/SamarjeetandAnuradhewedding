"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_IMAGES } from "@/data/site";
import { SectionHeading } from "@/components/ui/Decorations";

export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-cream to-blush/10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Gallery" subtitle="Moments we treasure" />

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {GALLERY_IMAGES.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="gsap-reveal block w-full break-inside-avoid rounded-xl overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <div className="relative aspect-auto">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={i % 3 === 0 ? 800 : i % 3 === 1 ? 400 : 600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-maroon/0 group-hover:bg-maroon/20 transition-colors duration-300" />
              </div>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[90] bg-maroon-dark/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-label="Image lightbox"
          >
            <button
              className="absolute top-4 right-4 text-cream text-3xl z-10 hover:text-gold"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
            >
              ×
            </button>
            <button
              className="absolute left-4 text-cream text-2xl z-10 hover:text-gold p-2"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((lightbox - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
              }}
              aria-label="Previous image"
            >
              ‹
            </button>
            <motion.div
              key={lightbox}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_IMAGES[lightbox].src}
                alt={GALLERY_IMAGES[lightbox].alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />
            </motion.div>
            <button
              className="absolute right-4 text-cream text-2xl z-10 hover:text-gold p-2"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((lightbox + 1) % GALLERY_IMAGES.length);
              }}
              aria-label="Next image"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
