"use client";

import { SectionHeading } from "@/components/ui/Decorations";
import { useLanguage } from "@/context/LanguageContext";

export function Wishes() {
  const { t, siteData } = useLanguage();
  const { GUEST_WISHES } = siteData;
  return (
    <section id="wishes" className="py-20 px-4 bg-gradient-to-b from-cream to-blush/20">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title={t("wishes.title")} subtitle={t("wishes.subtitle")} />

        <div className="grid md:grid-cols-2 gap-6">
          {GUEST_WISHES.map((wish, i) => (
            <div
              key={i}
              className="gsap-reveal p-6 rounded-2xl bg-cream border border-gold/15 shadow-md hover:shadow-lg transition-shadow relative"
            >
              <span className="absolute top-4 right-4 text-3xl text-gold/20 font-playfair">&ldquo;</span>
              <p className="font-poppins text-sm text-maroon/70 leading-relaxed mb-4 relative z-10">
                {wish.message}
              </p>
              <p className="font-playfair text-gold-dark text-sm">— {wish.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
