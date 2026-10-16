import Image from "next/image";
import { Button } from "@/components/ui/Button";

const BADGES = [
  { icon: "/icons/badge-ready-time.svg", label: "Ready in 20–30 min" },
  { icon: "/icons/badge-pickup.svg", label: "Free pickup available" },
  { icon: "/icons/badge-delivery.svg", label: "Delivery from $2.50" },
  { icon: "/icons/badge-rating.svg", label: "4.9 Google Ratings" },
] as const;

// node-id 84:31386 — see .figma-cache/design-context/84-31386-home-hero.tsx
export function GoodFoodHero() {
  return (
    <section className="flex flex-col items-center gap-[102px] bg-cream px-6 pt-[120px] pb-[160px]">
      <div className="flex w-[1060px] max-w-full flex-col items-center gap-[40px]">
        <p className="font-display text-ink text-center text-[120px] leading-[110px] font-black uppercase">
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

      <div className="flex w-full items-center justify-center gap-[60px]">
        {BADGES.map((badge) => (
          <div
            key={badge.label}
            className="flex w-[229px] flex-col items-center justify-center gap-[13px]"
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
