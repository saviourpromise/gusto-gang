import Image from "next/image";
import { Button } from "@/components/ui/Button";

const BADGES = [
  { icon: "/icons/badge-ready-time.svg", label: "Ready in 20–30 min" },
  { icon: "/icons/badge-pickup.svg", label: "Free pickup available" },
  { icon: "/icons/badge-delivery.svg", label: "Delivery from $2.50" },
  { icon: "/icons/badge-rating.svg", label: "4.9 Google Ratings" },
] as const;

// node-id 84:31386 — see .figma-cache/design-context/84-31386-home-hero.tsx
//
// Responsive note: headline font-size and the 4-badge row were fixed-pixel (120px text, 4x229px
// badges in one row) at 1440; headline now uses clamp() with a matching unitless line-height, and
// the badge row wraps to 2x2 below the point where 4 columns stop fitting comfortably.
export function GoodFoodHero() {
  return (
    <section className="flex flex-col items-center gap-[60px] bg-cream px-6 pt-[80px] pb-[100px] sm:gap-[102px] sm:pt-[120px] sm:pb-[160px]">
      <div className="flex w-[1060px] max-w-full flex-col items-center gap-[40px]">
        <p
          className="font-display text-ink text-center font-black uppercase"
          style={{ fontSize: "clamp(40px, 9vw, 120px)", lineHeight: 0.92 }}
        >
          Good food straight to <span className="text-brand-red">you</span>
        </p>
        <p className="font-display text-ink-soft text-center text-[32px]">
          Hot food. Fast delivery. No nonsense.
        </p>
        {/* literal #0f0 pure green per Figma — kept exact, not "corrected" */}
        <Button as="a" href="#" color="green" aria-disabled>
          Order Now
        </Button>
      </div>

      <div className="flex w-full flex-wrap items-start justify-center gap-x-[60px] gap-y-[32px]">
        {BADGES.map((badge) => (
          <div
            key={badge.label}
            className="flex w-[140px] flex-col items-center justify-center gap-[13px] sm:w-[229px]"
          >
            <Image src={badge.icon} alt="" width={143} height={139} aria-hidden />
            <p className="font-body text-ink text-center text-[24px] font-medium">
              {badge.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
