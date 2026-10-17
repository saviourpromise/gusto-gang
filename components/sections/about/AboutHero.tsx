import Image from "next/image";

// node-id 84:31103 — see .figma-cache/design-context/84-31103-about-hero.tsx (cached in an earlier
// session). Background photos now sourced full-resolution via the Figma REST API (Route 1).
//
// Responsive note: the stamp card's heading was a fixed 120px — at a narrow max-w-[90vw] card
// that clipped text past the card's right edge ("THE GUSTO STORY" rendering as "...GUSTC").
// Font-size now uses clamp() scaled off the card's own vw-based width, and the card switches
// from a fixed height to flex-centered content with vertical padding so it grows to fit whatever
// the wrapped text needs instead of clipping.
export function AboutHero() {
  return (
    <section className="bg-cream relative h-[828px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/about/hero-bg-1.jpg"
          alt="Grilled chicken and vegetables, overhead view"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 opacity-90">
        <Image
          src="/images/about/hero-bg-2.jpg"
          alt=""
          fill
          aria-hidden
          className="object-cover"
        />
      </div>

      <div className="shadow-stamp absolute top-[158px] left-1/2 flex min-h-[200px] w-[698px] max-w-[90vw] -translate-x-1/2 items-center justify-center rounded-stamp border-5 border-black bg-white py-[40px] sm:min-h-[529px]">
        <p
          className="font-display text-ink text-center font-extrabold uppercase"
          style={{ fontSize: "clamp(32px, 10.5vw, 120px)", lineHeight: 0.96 }}
        >
          The <br /> Gusto <br /> Story
        </p>
      </div>
    </section>
  );
}
