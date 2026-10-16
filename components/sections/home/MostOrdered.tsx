import Image from "next/image";
import { SectionDivider } from "@/components/ui/SectionDivider";

// node-id 84:31410 — see .figma-cache/design-context/84-31410-most-ordered.tsx
// Photo verified against the Figma REST API's full-resolution original (imageRef 29594239...,
// same file as the Menu/Deals/About newsletter background) — 408x612 IS the source's native
// resolution, not an MCP export artifact. It's displayed here at ~1189x949 per the Figma layout
// itself, so the softness is inherent to the design file, not something this build introduced.
//
// Responsive note: the photo/sunburst/badge stack was fixed-pixel positioned (1263px-wide design
// canvas); converted to percentages of the container below so it scales fluidly instead of
// overflowing under 1263px, with an explicit aspect-ratio standing in for the old fixed height.
export function MostOrdered() {
  return (
    <section className="bg-brand-amber-dark relative overflow-hidden">
      <SectionDivider />
      <div className="flex flex-col items-center gap-[22px] px-6 py-[79px]">
        <p className="font-display max-w-[651px] text-center text-[96px] leading-[87px] font-extrabold text-[#292d32] uppercase">
          Most Ordered Right Now
        </p>
        <div className="shadow-pill rounded-pill border-2 border-black bg-white p-[15px]">
          <p className="font-display text-[28px] font-bold text-[#1a1a1a]">See Full Menu</p>
        </div>
      </div>

      <div
        className="relative mx-auto w-full max-w-[1263px] pb-[79px]"
        style={{ aspectRatio: "1263 / 1123" }}
      >
        <Image
          src="/icons/sunburst.svg"
          alt=""
          aria-hidden
          width={1100}
          height={1123}
          className="pointer-events-none absolute top-0 left-1/2 w-[87%] -translate-x-1/2"
        />
        <div
          className="absolute top-[17%] left-1/2 h-[84.5%] w-[94%] -translate-x-1/2 overflow-hidden"
        >
          <Image
            src="/images/home/most-ordered.png"
            alt="Bowl of shrimp lo mein noodles"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute top-[29.5%] right-0 z-10 w-[15.8%]" style={{ aspectRatio: 1 }}>
          <Image src="/icons/badge-hot-deal-large.svg" alt="" fill aria-hidden />
          <p className="font-body absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[clamp(14px,1.6vw,24px)] font-extrabold text-white uppercase">
            Hot deal
          </p>
        </div>
      </div>
      <SectionDivider flip />
    </section>
  );
}
