import Image from "next/image";

// node-id 84:31098 — see .figma-cache/design-context/84-31098-our-story.tsx
// NOTE: the `capitalize` CSS transform on the whole text block is literal Figma design — every word's
// first letter is capitalized, including mid-sentence. Kept exactly, not "fixed" to sentence case.
//
// Responsive note: the section originally used a fixed h-[1109px] with the text block
// absolutely positioned at a fixed top offset (both exact Figma values) — at a narrow viewport
// the paragraph wraps to more lines than it has room for and gets clipped by the section's fixed
// height. Switched the text block to normal flow with padding so the section grows to fit
// whatever the wrapped text needs, and the heading uses clamp() instead of a flat 96px.
export function OurStory() {
  return (
    <section className="relative flex min-h-[600px] flex-col justify-center overflow-hidden bg-[#402011] px-[24px] py-[80px] sm:min-h-[1109px] sm:px-[65px] sm:py-[120px]">
      <div
        className="pointer-events-none absolute flex items-center justify-center"
        style={{ left: 855, top: -208, width: 1081, height: 1069 }}
      >
        <Image
          src="/images/about/our-story-bg.png"
          alt=""
          fill
          aria-hidden
          className="scale-y-[-1] rotate-[158.59deg] object-cover"
        />
      </div>

      <div className="relative flex w-[850px] max-w-full flex-col items-start gap-[43px] text-white capitalize">
        <p
          className="font-display font-extrabold opacity-60"
          style={{ fontSize: "clamp(40px, 8vw, 96px)", lineHeight: 1.1 }}
        >
          Our Story
        </p>
        <p className="font-display text-[clamp(16px,2.2vw,24px)] leading-[1.36]">
          Gusto Gang started with one mission: to serve food that people genuinely look forward
          to. What began as a love for bold flavours and feel-good meals has grown into a
          community of food lovers who know that great taste matters. Every dish we serve is
          crafted with fresh ingredients, packed with flavour, and made to turn everyday meals
          into moments worth savouring.
        </p>
      </div>
    </section>
  );
}
