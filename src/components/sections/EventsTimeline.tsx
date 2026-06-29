"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { WEDDING_EVENTS, type WeddingEvent } from "@/data/site";
import { SectionHeading } from "@/components/ui/Decorations";
import { useLanguage } from "@/context/LanguageContext";
import "swiper/css";

const CATEGORIES = [
  { key: "pre-wedding", label: "Pre-Wedding" },
  { key: "wedding", label: "Wedding Day" },
  { key: "post-wedding", label: "Post-Wedding" },
] as const;

function EventCard({ event, isActive, onClick }: { event: WeddingEvent; isActive: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex-shrink-0 w-64 p-5 rounded-2xl border transition-all duration-300 text-left ${
        isActive
          ? "bg-gradient-to-br from-gold/20 to-blush/30 border-gold shadow-lg scale-105"
          : "bg-cream border-gold/20 hover:border-gold/40 hover:shadow-md"
      }`}
    >
      <span className="text-3xl">{event.icon}</span>
      <h3 className="font-playfair text-lg text-maroon-dark mt-2">{event.name}</h3>
      <p className="font-poppins text-xs text-gold-dark mt-1">{event.date}</p>
    </button>
  );
}

export function EventsTimeline() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<string>("pre-wedding");
  const [selected, setSelected] = useState<WeddingEvent>(WEDDING_EVENTS[0]);

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
              onClick={() => {
                setFilter(cat.key);
                const first = WEDDING_EVENTS.find((e) => e.category === cat.key);
                if (first) setSelected(first);
              }}
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

        <div className="gsap-reveal mb-8">
          <Swiper modules={[FreeMode]} freeMode slidesPerView="auto" spaceBetween={16} className="!px-2">
            {filtered.map((event) => (
              <SwiperSlide key={event.id} className="!w-auto">
                <EventCard
                  event={event}
                  isActive={selected.id === event.id}
                  onClick={() => setSelected(event)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="gsap-reveal bg-gradient-to-br from-cream via-blush/20 to-cream border border-gold/20 rounded-3xl p-5 sm:p-8 md:p-10 shadow-lg">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
            <span className="text-5xl flex-shrink-0">{selected.icon}</span>
            <div>
              <h3 className="font-playfair text-2xl md:text-3xl text-maroon-dark">{selected.name}</h3>
              <p className="font-poppins text-gold-dark text-sm mt-1">
                {selected.date}
              </p>
              <p className="font-poppins text-maroon/60 text-sm mt-1">📍 {selected.venue}</p>
              <p className="font-poppins text-maroon/70 mt-4 leading-relaxed">{selected.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
