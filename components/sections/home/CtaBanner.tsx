import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { WaveDivider } from "@/components/ui/WaveDivider";

// node-id 84:31428 (inner stamp card, exact) — see .figma-cache/design-context/84-31428-cta-banner-card.tsx
// Background photo (node 84:31427, "image 1642") fetched via the Figma REST API. The "LET'S COOK"
// badge (node 84:31435-37) reuses the same red starburst shape as the "HOT DEAL" badges
// elsewhere on the page (public/icons/badge-hot-deal-large.svg) rather than a rotated pill —
// corrected per a reference screenshot of the actual Figma render.
//
// Responsive note: same "stamp card" pattern as About's hero/CTA cards — the 120px heading was
// fixed and clipped past the card's edge at narrow widths (found via About's version of this
// exact bug); clamp()'d here too.
export function CtaBanner() {
  return (
    <section className="relative px-6 py-[79px]">
      <WaveDivider color="var(--color-cream)" edge="top" />
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[10px]">
        <Image
          src="/images/cta/cta-banner-bg.png"
          alt="Bowl of Nigerian pepper soup with assorted meat"
          fill
          className="object-cover"
        />

        <div className="relative flex justify-center px-4 py-[100px] sm:py-[244px]">
          <div className="relative w-[698px] max-w-full rounded-stamp shadow-stamp border-5 border-black bg-white px-6 py-[40px] text-center sm:px-10 sm:py-[60px]">
            <p
              className="font-display text-ink font-extrabold uppercase"
              style={{ fontSize: "clamp(32px, 9vw, 120px)", lineHeight: 0.96 }}
            >
              Gusto Gang
            </p>
            <p className="font-display text-ink-soft mt-[30px] text-[clamp(20px,4vw,40px)]">
              Bold tastes, better vibes.
            </p>
            <div className="mt-[30px] flex justify-center">
              <Button as="a" href="#" color="white" textSize={28} aria-disabled>
                Order Now
              </Button>
            </div>
          </div>

          <div className="absolute top-0 left-[40px] size-[130px] sm:size-[160px]">
            <Image src="/icons/badge-hot-deal-large.svg" alt="" fill aria-hidden />
            <p className="font-display absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[16px] font-extrabold text-white uppercase sm:text-[20px]">
              Let&rsquo;s cook
            </p>
          </div>
        </div>
      </div>
      <WaveDivider color="var(--color-cream)" edge="bottom" />
    </section>
  );
}
