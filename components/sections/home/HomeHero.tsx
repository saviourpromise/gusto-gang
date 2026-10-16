import Image from "next/image";
import { Nav } from "@/components/layout/Nav";

// node-id 84:31363 — see .figma-cache/design-context/84-31363-home-hero-top.tsx
// Frame is 1440x1153 total; Nav (135px) flows normally, the rest is positioned relative to
// the 1018px remaining area (original Figma y-coords minus Nav's 135px height).
export function HomeHero() {
  return (
    <section className="bg-cream">
      <Nav variant="overlay" />

      <div className="relative h-[1018px]">
        <p className="font-display text-ink absolute top-[68px] left-1/2 w-[1399px] -translate-x-1/2 text-center text-[200px] leading-[208px] font-extrabold uppercase">
          Gusto Gang
        </p>

        <div className="shadow-hero-card absolute top-[177px] left-1/2 h-[695px] w-[1116px] -translate-x-1/2 overflow-hidden rounded-[10px] border-3 border-black bg-gradient-to-b from-brand-red to-hero-gradient-end">
          <div className="absolute top-[93px] left-1/2 h-[634px] w-[832px] -translate-x-1/2">
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
