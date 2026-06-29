"use client";

import Image from "next/image";
import { COUPLE } from "@/data/site";
import { SectionHeading } from "@/components/ui/Decorations";

function ProfileCard({
  name,
  fullName,
  parents,
  bio,
  image,
  align,
}: {
  name: string;
  fullName: string;
  parents: string;
  bio: string;
  image: string;
  align: "left" | "right";
}) {
  return (
    <div className={`gsap-reveal flex flex-col items-center ${align === "right" ? "md:items-end" : "md:items-start"}`}>
      <div className="relative w-48 h-60 md:w-56 md:h-72 rounded-2xl overflow-hidden border-2 border-gold/30 shadow-xl group">
        <Image
          src={image}
          alt={`Portrait of ${name}`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="224px"
        />
      </div>
      <div className={`mt-6 text-center ${align === "right" ? "md:text-right" : "md:text-left"}`}>
        <h3 className="font-playfair text-2xl md:text-3xl text-maroon-dark">{fullName}</h3>
        <p className="font-poppins text-gold-dark text-sm mt-1">{parents}</p>
        <p className="font-poppins text-maroon/70 text-sm mt-3 max-w-xs leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}

export function BrideGroom() {
  return (
    <section id="couple" className="py-20 px-4 bg-gradient-to-b from-blush/20 to-cream">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="The Happy Couple" subtitle="Two hearts, one beautiful love" />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <ProfileCard
            name={COUPLE.groom.name}
            fullName={COUPLE.groom.fullName}
            parents={COUPLE.groom.parents}
            bio={COUPLE.groom.bio}
            image={COUPLE.groom.image}
            align="left"
          />
          <ProfileCard
            name={COUPLE.bride.name}
            fullName={COUPLE.bride.fullName}
            parents={COUPLE.bride.parents}
            bio={COUPLE.bride.bio}
            image={COUPLE.bride.image}
            align="right"
          />
        </div>
      </div>
    </section>
  );
}
