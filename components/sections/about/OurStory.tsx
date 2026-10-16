import Image from "next/image";

// node-id 84:31098 — see .figma-cache/design-context/84-31098-our-story.tsx
// NOTE: the `capitalize` CSS transform on the whole text block is literal Figma design — every word's
// first letter is capitalized, including mid-sentence. Kept exactly, not "fixed" to sentence case.
// Section height 1109px and all positions below are the exact Figma values (frame 84:31098).
export function OurStory() {
  return (
    <section className="relative h-[1109px] max-w-full overflow-hidden bg-[#402011]">
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

      <div className="absolute top-[496px] left-[65px] flex w-[850px] max-w-[calc(100%-130px)] flex-col items-start gap-[43px] text-white capitalize">
        <p className="font-display text-[96px] leading-[1.1] font-extrabold opacity-60">
          Our Story
        </p>
        <p className="font-display text-[24px] leading-[1.36]">
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
