import Image from "next/image";
import { Button } from "@/components/ui/Button";

export type DealCardData = {
  bg: string;
  icon: { src: string; width: number; height: number };
  title: string;
  uppercase?: boolean;
  description: string;
  photo: {
    src: string;
    /** natural source dimensions, used only for the Image component */
    naturalWidth: number;
    naturalHeight: number;
    /** rendered box before rotation */
    width: number;
    height: number;
    rotate: number;
    top: number;
    /** px subtracted from 50% for horizontal centering (Figma's left-[calc(50%-Npx)] pattern) */
    offsetX: number;
  };
};

// node-id 84:31037 (pattern, exact) — see .figma-cache/design-context/84-31037-deal-card.tsx and
// 84-31021-deals-cards.tsx for all 5 cards' exact values.
export function DealCard({ data }: { data: DealCardData }) {
  return (
    <div
      className="relative h-[698px] w-[643px] max-w-full overflow-hidden rounded-card border-5 border-black"
      style={{ backgroundColor: data.bg }}
    >
      <div
        className="absolute overflow-hidden"
        style={{
          width: data.photo.width,
          height: data.photo.height,
          top: data.photo.top,
          left: `calc(50% - ${data.photo.offsetX}px)`,
          transform: `translateX(-50%) rotate(${data.photo.rotate}deg)`,
        }}
      >
        <Image
          src={data.photo.src}
          alt=""
          width={data.photo.naturalWidth}
          height={data.photo.naturalHeight}
          aria-hidden
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute top-[27px] left-[38px] flex w-[410px] max-w-[calc(100%-76px)] flex-col items-start gap-[35px]">
        <Image src={data.icon.src} alt="" width={data.icon.width} height={data.icon.height} />
        <div className="flex flex-col items-start gap-[14px]">
          <p
            className={`font-display text-[40px] font-bold text-[#292d32] ${data.uppercase ? "uppercase" : ""}`}
          >
            {data.title}
          </p>
          <p className="font-display text-[20px] text-[#292d32]">{data.description}</p>
          <Button as="a" href="#" color="white" textSize={20} aria-disabled>
            {/* TODO: no order/checkout flow exists in the Figma design yet. */}
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
}
