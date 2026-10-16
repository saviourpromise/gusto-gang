import Image from "next/image";
import { SectionDivider } from "@/components/ui/SectionDivider";

// node-id 84:31410 — see .figma-cache/design-context/84-31410-most-ordered.tsx
export function MostOrdered() {
  return (
    <section className="bg-brand-amber-dark relative">
      <SectionDivider />
      <div className="flex flex-col items-center gap-[22px] px-6 py-[79px]">
        <p className="font-display max-w-[651px] text-center text-[96px] leading-[87px] font-extrabold text-[#292d32] uppercase">
          Most Ordered Right Now
        </p>
        <div className="shadow-pill rounded-pill border-2 border-black bg-white p-[15px]">
          <p className="font-display text-[28px] font-bold text-[#1a1a1a]">See Full Menu</p>
        </div>
      </div>

      <div className="relative mx-auto h-[1123px] max-w-[1263px] pb-[79px]">
        <Image
          src="/icons/sunburst.svg"
          alt=""
          aria-hidden
          width={1100}
          height={1123}
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2"
        />
        <div className="absolute top-[192px] left-1/2 h-[949px] w-[1189px] -translate-x-1/2 overflow-hidden">
          <Image
            src="/images/home/most-ordered.png"
            alt="Bowl of shrimp lo mein noodles"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute top-[331px] right-0 z-10 h-[195px] w-[200px]">
          <Image src="/icons/badge-hot-deal-large.svg" alt="" fill aria-hidden />
          <p className="font-body absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[24px] font-extrabold text-white uppercase">
            Hot deal
          </p>
        </div>
      </div>
      <SectionDivider flip />
    </section>
  );
}
