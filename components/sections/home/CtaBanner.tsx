import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionDivider } from "@/components/ui/SectionDivider";

// node-id 84:31428 (inner stamp card, exact) — see .figma-cache/design-context/84-31428-cta-banner-card.tsx
// Background photo (node 84:31427, "image 1642") fetched via the Figma REST API. The "LET'S COOK"
// sticker badge's exact font-size/rotation (node 84:31435-37) wasn't pulled — approximated from the
// home.png screenshot.
export function CtaBanner() {
  return (
    <section className="relative px-6 py-[79px]">
      <SectionDivider />
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[10px]">
        <Image
          src="/images/cta/cta-banner-bg.png"
          alt="Bowl of Nigerian pepper soup with assorted meat"
          fill
          className="object-cover"
        />

        <div className="relative flex justify-center py-[244px]">
          <div className="relative w-[698px] max-w-full rounded-stamp shadow-stamp border-5 border-black bg-white px-10 py-[60px] text-center">
            <p className="font-display text-ink text-[120px] leading-[0.96] font-extrabold uppercase">
              Gusto Gang
            </p>
            <p className="font-display text-ink-soft mt-[30px] text-[40px]">
              Bold tastes, better vibes.
            </p>
            <div className="mt-[30px] flex justify-center">
              <Button as="a" href="#" color="white" textSize={28} aria-disabled>
                Order Now
              </Button>
            </div>
          </div>

          <div className="shadow-pill absolute top-0 left-[40px] -rotate-[8deg] rounded-full border-2 border-black bg-white px-[20px] py-[16px]">
            <p className="font-display text-[20px] font-bold uppercase">Let&rsquo;s cook</p>
          </div>
        </div>
      </div>
    </section>
  );
}
