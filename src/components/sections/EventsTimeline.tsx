"use client";

import { useState } from "react";
import { WEDDING_EVENTS } from "@/data/site";
import { SectionHeading } from "@/components/ui/Decorations";
import { useLanguage } from "@/context/LanguageContext";

const CATEGORIES = [
  { key: "pre-wedding", label: "Pre-Wedding" },
  { key: "wedding", label: "Wedding Day" },
  { key: "post-wedding", label: "Post-Wedding" },
] as const;

export function EventsTimeline() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<string>("pre-wedding");

  const filtered = WEDDING_EVENTS.filter((e) => e.category === filter);

  return (
    <section id="events" className="py-20 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title={t("events.title")}
          subtitle={t("events.subtitle")}
        />

        <div className="flex flex-wrap justify-center gap-2 mb-8 gsap-reveal">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-4 py-2 rounded-full font-poppins text-xs uppercase tracking-wider transition-all ${
                filter === cat.key
                  ? "bg-gold text-cream shadow-md"
                  : "bg-blush/30 text-maroon/70 hover:bg-blush/50"
              }`}
            >
              {cat.key === "pre-wedding" ? t("events.pre") : cat.key === "wedding" ? t("events.wedding") : t("events.post")}
            </button>
          ))}
        </div>

        <div className="gsap-reveal space-y-4">
          {filtered.map((event) => (
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
