import Image from "next/image";

// node-id 84:31103 — see .figma-cache/design-context/84-31103-about-hero.tsx (cached in an earlier
// session). Background photos now sourced full-resolution via the Figma REST API (Route 1).
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

      <div className="shadow-stamp absolute top-[158px] left-1/2 h-[529px] w-[698px] max-w-[90vw] -translate-x-1/2 rounded-stamp border-5 border-black bg-white">
        <p className="font-display text-ink pt-[86px] text-center text-[120px] leading-[0.96] font-extrabold uppercase">
          The Gusto Story
        </p>
      </div>
    </section>
  );
}
