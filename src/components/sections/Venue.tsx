"use client";

import { SectionHeading } from "@/components/ui/Decorations";
import { useLanguage } from "@/context/LanguageContext";

export function Venue() {
  const { t, siteData } = useLanguage();
  const { COUPLE } = siteData;
  return (
    <section id="venue" className="py-20 px-4 bg-gradient-to-b from-blush/10 to-cream">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title={t("venue.title")} subtitle={t("venue.subtitle")} />

        <div className="gsap-reveal grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl text-maroon-dark">{COUPLE.venue.name}</h3>
            <p className="font-poppins text-maroon/70 text-sm leading-relaxed">{COUPLE.venue.address}</p>
            <a
              href={COUPLE.venue.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 bg-gradient-to-r from-gold to-gold-dark text-cream font-poppins text-sm rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              {t("venue.directions")}
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden border-2 border-gold/20 shadow-xl aspect-video">
            <iframe
              src={COUPLE.venue.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding venue location on Google Maps"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
