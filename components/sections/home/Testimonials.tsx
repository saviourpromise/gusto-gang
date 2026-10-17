import Image from "next/image";

// node-id 84:31256 (exact, full section) — see .figma-cache/design-context/84-31256-testimonials-section.tsx
// Heading spelling "TESTIMONIOALS" is literal Figma content (typo kept, not corrected) — see 84:31257.
//
// Corrected against exact Figma data (previous build approximated this from a screenshot only):
// - Heading is UNDERLINED, color #520b00 (was un-underlined, wrong color).
// - The whole quote card rotates -8.66deg (was: only the inner name tag rotated, card itself
//   square) — bg #fef2e1 (was #fdf3e4), no rounded corners (Figma has none here).
// - The photo is a SEPARATE element, independently rotated +17.81deg, same aspect ratio as the
//   card, overlapping it (was: a plain unrotated rectangle).
// - Carousel dots: first one filled #2e0800, the other two WHITE (was black/20% — much fainter
///  than the real white).
// - Rating zigzag bar uses the orange-steps.png asset (public/images/home/, user-provided)
//   instead of a CSS approximation, matching the corrected How It Works bar for consistency.
export function Testimonials() {
  return (
    <section className="bg-cream overflow-x-hidden px-6 py-[60px] sm:py-[102px]">
      <div className="mx-auto max-w-[1351px]">
        <p
          className="font-display mb-[40px] text-[#520b00] uppercase underline decoration-from-font sm:mb-[73px]"
          style={{ fontSize: "clamp(40px, 8vw, 96px)", lineHeight: 0.96, letterSpacing: "-1.92px" }}
        >
          Testimonioals
        </p>

        <div className="relative flex flex-col items-center gap-16 lg:h-[975px] lg:flex-row lg:items-start lg:gap-0">
          <div
            className="w-full max-w-[500px] shrink-0 bg-[#fef2e1] p-[28px] shadow-[8px_0px_0px_0px_black] sm:p-[50px] lg:rotate-[-8.66deg] lg:self-center"
            style={{ aspectRatio: "600 / 825.843" }}
          >
            <div className="rotate-[-4.54deg]">
              <span className="bg-peach-tag text-maroon-tag font-display inline-block px-[15px] py-[6px] text-[clamp(16px,2.5vw,24px)] uppercase">
                Sandra M. - Lagos, NG
              </span>
            </div>
            <p className="font-display text-maroon-quote mt-[24px] text-[clamp(22px,4vw,33px)] leading-[1.1] uppercase sm:mt-[30px]">
              &ldquo;The food is absolutely amazing, and the energy here is completely unmatched.
              Gusto Gang always delivers on its promise of bold tastes and better vibes!&rdquo;
            </p>
            <div className="mt-[24px] flex flex-col items-start gap-[14px] sm:mt-[30px]">
              <Image
                src="/images/home/orange-steps.png"
                alt=""
                aria-hidden
                width={176}
                height={23}
                className="h-auto w-[176px]"
              />
              <div className="font-display flex items-center gap-[16px] text-[clamp(20px,3vw,25px)] capitalize">
                <p className="text-brand-red">Ordered</p>
                <p className="text-black">Jollof Rice</p>
              </div>
              <Image src="/icons/stars-rating.svg" alt="5 out of 5 stars" width={126} height={20} />
            </div>
          </div>

          <div
            className="relative w-full max-w-[450px] shrink-0 overflow-hidden lg:absolute lg:top-0 lg:right-0 lg:w-[44.4%] lg:max-w-none lg:rotate-[17.81deg]"
            style={{ aspectRatio: "600 / 825.843" }}
          >
            <Image
              src="/images/testimonials/testimonials-bg.jpg"
              alt="Gusto Gang team member packaging a food delivery order"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-[80px] flex items-center justify-center gap-[9px]" aria-hidden>
          <span className="h-[8px] w-[100px] rounded-full bg-[#2e0800]" />
          <span className="h-[8px] w-[100px] rounded-full bg-white" />
          <span className="h-[8px] w-[100px] rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}
