"use client";

import { FAMILY_MEMBERS } from "@/data/site";
import { SectionHeading } from "@/components/ui/Decorations";

export function Family() {
  const groomFamily = FAMILY_MEMBERS.filter((m) => m.side === "groom");
  const brideFamily = FAMILY_MEMBERS.filter((m) => m.side === "bride");

  return (
    <section id="family" className="py-20 px-4 bg-cream">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Our Families" subtitle="Blessed by the love of our dear ones" />

        <div className="grid md:grid-cols-2 gap-12">
          <div className="gsap-reveal">
            <h3 className="font-playfair text-xl text-gold-dark text-center mb-6">
              {FAMILY_MEMBERS[0] ? "Groom's Family" : ""}
            </h3>
            <div className="space-y-4">
              {groomFamily.map((member) => (
                <div
                  key={member.name}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-cream to-blush/20 border border-gold/15 hover:border-gold/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/30 to-blush/50 flex items-center justify-center font-playfair text-maroon-dark text-lg">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-playfair text-maroon-dark">{member.name}</p>
                    <p className="font-poppins text-xs text-maroon/60">{member.relation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="gsap-reveal">
            <h3 className="font-playfair text-xl text-gold-dark text-center mb-6">Bride&apos;s Family</h3>
            <div className="space-y-4">
              {brideFamily.map((member) => (
                <div
                  key={member.name}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-cream to-blush/20 border border-gold/15 hover:border-gold/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blush/50 to-gold/30 flex items-center justify-center font-playfair text-maroon-dark text-lg">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-playfair text-maroon-dark">{member.name}</p>
                    <p className="font-poppins text-xs text-maroon/60">{member.relation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
