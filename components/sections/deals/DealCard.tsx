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
    /** rendered box before rotation, in px at the 643x698 reference card size from Figma */
    width: number;
    height: number;
    rotate: number;
    top: number;
    /** px subtracted from 50% for horizontal centering (Figma's left-[calc(50%-Npx)] pattern),
     * also at the 643x698 reference size */
    offsetX: number;
  };
};

const CARD_WIDTH = 643;
const CARD_HEIGHT = 698;

// node-id 84:31037 (pattern, exact) — see .figma-cache/design-context/84-31037-deal-card.tsx and
// 84-31021-deals-cards.tsx for all 5 cards' exact values.
//
// Responsive note: the photo wrapper's size/position was fixed-pixel at the 643x698 reference
// card. At a shrunk card width (card itself uses aspect-ratio instead of a fixed height so it
// scales as a whole) a fixed-pixel photo doesn't shrink with it — found this the hard way in a
// 390px screenshot, where the full-size photo overwhelmed a card a fifth its original width and
// buried the description text under it. Every photo value below is now a percentage of the
// reference card size instead, so the photo scales down in lockstep with the card.
export function DealCard({ data }: { data: DealCardData }) {
  const photoWidthPct = (data.photo.width / CARD_WIDTH) * 100;
  const photoHeightPct = (data.photo.height / CARD_HEIGHT) * 100;
  const photoTopPct = (data.photo.top / CARD_HEIGHT) * 100;
  const photoOffsetXPct = (data.photo.offsetX / CARD_WIDTH) * 100;

  return (
    <div
      className="relative w-full max-w-[643px] overflow-hidden rounded-card border-5 border-black"
      style={{ backgroundColor: data.bg, aspectRatio: `${CARD_WIDTH} / ${CARD_HEIGHT}` }}
    >
      <div
        className="absolute overflow-hidden"
        style={{
          width: `${photoWidthPct}%`,
          height: `${photoHeightPct}%`,
          top: `${photoTopPct}%`,
          left: `calc(50% - ${photoOffsetXPct}%)`,
          transform: `translateX(-50%) rotate(${data.photo.rotate}deg)`,
          zIndex: 0,
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

      <div className="absolute top-[4%] left-[6%] z-10 flex w-[64%] max-w-[410px] flex-col items-start gap-[5%]">
        <Image
          src={data.icon.src}
          alt=""
          width={data.icon.width}
          height={data.icon.height}
          className="h-auto w-[12%] min-w-[32px]"
        />
        <div className="flex flex-col items-start gap-[14px]">
          <p
            className={`font-display text-[clamp(22px,5.5vw,40px)] font-bold text-[#292d32] ${data.uppercase ? "uppercase" : ""}`}
          >
            {data.title}
          </p>
          <p className="font-display text-[clamp(14px,3vw,20px)] text-[#292d32]">
            {data.description}
          </p>
          <Button as="a" href="#" color="white" textSize={20} aria-disabled>
            {/* TODO: no order/checkout flow exists in the Figma design yet. */}
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
}
