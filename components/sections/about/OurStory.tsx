import Image from "next/image";

// node-id 84:31098 — see .figma-cache/design-context/84-31098-our-story.tsx
// NOTE: the `capitalize` CSS transform on the whole text block is literal Figma design — every word's
// first letter is capitalized, including mid-sentence. Kept exactly, not "fixed" to sentence case.
export function OurStory() {
  return (
    <section className="relative overflow-hidden bg-[#402011] px-6 py-[150px] md:px-[65px]">
      <div className="pointer-events-none absolute top-[-120px] right-[-100px] h-[700px] w-[700px] md:right-[-50px]">
        <Image
          src="/images/about/our-story-bg.png"
          alt=""
          fill
          aria-hidden
          className="scale-y-[-1] rotate-[158.59deg] object-cover"
        />
      </div>

      <div className="relative flex w-[850px] max-w-full flex-col items-start gap-[43px] text-white capitalize">
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
