import Image from "next/image";
import { Nav } from "@/components/layout/Nav";

// node-id 84:31363 — see .figma-cache/design-context/84-31363-home-hero-top.tsx
// Decorative badges/peppers: nodes 84:31439 ("HOT PLATE!"), 84:31442 ("FULL OF FLAVORS"),
// 84:31445/84:31446 (peppers) — these were entirely missing from the first build, not just
// styled wrong. Positions below are computed as percentages of the hero card's own box (the
// card's 1116x695 @1440 reference) from each element's exact Figma coordinates, so they scale
// and stay correctly placed at any width, including hanging outside the card's own edges where
// Figma has them (e.g. the badges straddle the card's left/right edges, the peppers hang below).
//
// Responsive note: Figma only defines this at 1440px, with the wordmark and photo card both
// absolutely positioned at fixed pixel sizes/offsets that overlap by design (the card's top edge
// sits inside the wordmark's bottom, a deliberate layered effect). Below 1440 this switches from
// absolute positioning to normal flow with a clamp()-based wordmark size and a negative margin
// that preserves roughly the same proportional overlap at any size, rather than the fixed 1399px/
// 1116px boxes breaking outright on narrow viewports.
export function HomeHero() {
  return (
    <section className="bg-cream relative" style={{ overflowX: "hidden", overflowY: "visible" }}>
      <Nav variant="overlay" />

      <div className="flex flex-col items-center px-4 pt-[40px] pb-[160px] sm:pt-[68px] sm:pb-[260px]">
        <p
          className="font-display text-ink w-full text-center font-extrabold uppercase"
          style={{ fontSize: "clamp(44px, 12.5vw, 200px)", lineHeight: 1.04 }}
        >
          Gusto Gang
        </p>

        <div
          className="relative w-full max-w-[1116px]"
          style={{ marginTop: "-0.5em" }}
        >
          <div
            className="shadow-hero-card relative overflow-hidden rounded-[10px] border-3 border-black bg-gradient-to-b from-brand-red to-hero-gradient-end"
            style={{ aspectRatio: "1116 / 695" }}
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

          {/* "HOT PLATE!" speech-bubble badge — straddles the card's left edge */}
          <div
            className="pointer-events-none absolute"
            style={{ left: "-5.4%", top: "23%", width: "30.3%", height: "49%" }}
          >
            <Image src="/icons/badge-hot-plate.svg" alt="" fill />
            <p
              className="font-display absolute top-[44%] left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[19.45deg] text-center font-extrabold whitespace-nowrap text-[#1a1a1a]"
              style={{ fontSize: "clamp(14px, 1.8vw, 26px)" }}
            >
              HOT PLATE!
            </p>
          </div>

          {/* "FULL OF FLAVORS" starburst badge — straddles the card's right edge */}
          <div
            className="pointer-events-none absolute"
            style={{ left: "78.8%", top: "22.7%", width: "26.9%", height: "42.1%" }}
          >
            <Image src="/icons/badge-full-of-flavors.svg" alt="" fill />
            <p
              className="font-display absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center leading-[1.1] font-extrabold whitespace-nowrap text-[#292d32]"
              style={{ fontSize: "clamp(11px, 1.4vw, 20px)" }}
            >
              FULL OF
              <br />
              FLAVORS
            </p>
          </div>

          {/* chili peppers hanging below the card's bottom-left/bottom-right corners */}
          <div
            className="pointer-events-none absolute"
            style={{ left: "17.2%", top: "108.8%", width: "30%", height: "35%" }}
          >
            <Image src="/images/shared/floating-decor-2.png" alt="" fill className="object-contain" />
          </div>
          <div
            className="pointer-events-none absolute"
            style={{ left: "84.2%", top: "95.3%", width: "31.4%", height: "45%" }}
          >
            <Image src="/images/shared/floating-decor-1.png" alt="" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
