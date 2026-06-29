"use client";

import { LOVE_STORY } from "@/data/site";
import { SectionHeading } from "@/components/ui/Decorations";

export function LoveStory() {
  return (
    <section id="story" className="py-20 px-4 bg-cream">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Our Love Story" subtitle="A journey written in the stars" />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/20 via-gold to-gold/20 md:-translate-x-1/2" />

          {LOVE_STORY.map((item, i) => (
            <div
              key={item.year}
              className={`gsap-reveal relative flex items-start gap-6 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} pl-12 md:pl-0`}>
                <div
                  className={`bg-gradient-to-br from-cream to-blush/30 border border-gold/20 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow ${
                    i % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <span className="font-playfair text-2xl text-gold-dark">{item.year}</span>
                  <h3 className="font-playfair text-xl text-maroon-dark mt-1 mb-2">{item.title}</h3>
                  <p className="font-poppins text-sm text-maroon/70 leading-relaxed">{item.description}</p>
                </div>
              </div>

              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gold rounded-full border-4 border-cream shadow md:-translate-x-1/2 mt-6 z-10" />

              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
