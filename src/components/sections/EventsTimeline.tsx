"use client";

import { SectionHeading } from "@/components/ui/Decorations";
import { useLanguage } from "@/context/LanguageContext";

export function EventsTimeline() {
  const { t, siteData } = useLanguage();
  const { WEDDING_EVENTS } = siteData;

  return (
    <section id="events" className="py-20 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title={t("events.title")}
          subtitle={t("events.subtitle")}
        />

        <div className="gsap-reveal space-y-4">
          {WEDDING_EVENTS.map((event) => (
            <div key={event.id} className="flex gap-4 rounded-3xl border border-gold/20 bg-cream p-5 shadow-sm">
              <div className="flex items-start">
                <div className="mt-1 h-3 w-3 rounded-full bg-gold shadow-sm" />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-2xl">{event.icon}</span>
                  <h3 className="font-playfair text-lg text-maroon-dark">{event.name}</h3>
                </div>
                <p className="font-poppins text-sm text-gold-dark mt-1">{event.date}</p>
                <p className="font-poppins text-maroon/60 text-sm mt-1">📍 {event.venue}</p>
                <p className="font-poppins text-maroon/70 mt-3 leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
