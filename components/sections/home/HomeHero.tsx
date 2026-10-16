import Image from "next/image";
import { Nav } from "@/components/layout/Nav";

// node-id 84:31363 — see .figma-cache/design-context/84-31363-home-hero-top.tsx
//
// Responsive note: Figma only defines this at 1440px, with the wordmark and photo card both
// absolutely positioned at fixed pixel sizes/offsets that overlap by design (the card's top edge
// sits inside the wordmark's bottom, a deliberate layered effect). Below 1440 this switches from
// absolute positioning to normal flow with a clamp()-based wordmark size and a negative margin
// that preserves roughly the same proportional overlap at any size, rather than the fixed 1399px/
// 1116px boxes breaking outright on narrow viewports.
export function HomeHero() {
  return (
    <section className="bg-cream overflow-hidden">
      <Nav variant="overlay" />

      <div className="flex flex-col items-center px-4 pt-[40px] pb-[60px] sm:pt-[68px]">
        <p
          className="font-display text-ink w-full text-center font-extrabold uppercase"
          style={{ fontSize: "clamp(44px, 12.5vw, 200px)", lineHeight: 1.04 }}
        >
          Gusto Gang
        </p>

        <div
          className="shadow-hero-card relative w-full max-w-[1116px] overflow-hidden rounded-[10px] border-3 border-black bg-gradient-to-b from-brand-red to-hero-gradient-end"
          style={{ aspectRatio: "1116 / 695", marginTop: "-0.5em" }}
        >
          <div className="absolute inset-0 flex items-center justify-center p-[8%]">
            <Image
              src="/images/home/hero-bowl.png"
              alt="Hand holding a bowl of jollof rice topped with grilled chicken"
              width={832}
              height={634}
              priority
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
