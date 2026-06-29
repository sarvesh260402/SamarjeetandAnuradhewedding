import { COUPLE } from "@/data/site";
import { DividerOrnament } from "@/components/ui/Decorations";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-maroon-dark to-maroon text-cream py-16 px-4">
      <div className="absolute inset-0 bg-floral-pattern opacity-10" />
      <div className="relative max-w-4xl mx-auto text-center">
        <DividerOrnament className="mb-6 [&_svg]:text-gold-light [&_div]:from-transparent [&_div]:to-gold-light/60" />

        <h3 className="font-playfair text-3xl md:text-4xl text-gold-light mb-2">
          {COUPLE.groom.name} & {COUPLE.bride.name}
        </h3>
        <p className="font-poppins text-cream/60 text-sm mb-6">{COUPLE.weddingDate}</p>

        <p className="font-playfair text-gold/80 italic text-sm mb-8">
          &ldquo;Two souls, one heart, forever bound by love&rdquo;
        </p>

        <div className="flex justify-center gap-6 mb-8">
          {["#home", "#events", "#rsvp", "#contact"].map((href) => (
            <a
              key={href}
              href={href}
              className="font-poppins text-xs text-cream/50 hover:text-gold-light transition-colors uppercase tracking-wider"
            >
              {href.replace("#", "")}
            </a>
          ))}
        </div>

        <p className="font-poppins text-cream/40 text-xs">
          © {new Date().getFullYear()} Samarjeet & Anuradha. Made with ♥
        </p>
      </div>
    </footer>
  );
}
