import type { DealCardData } from "./DealCard";
import { DealCard } from "./DealCard";

// node-id 84:31021 — see .figma-cache/design-context/84-31021-deals-cards.tsx
const DEALS: DealCardData[] = [
  {
    bg: "#c2f4e4",
    icon: { src: "/icons/icon-fire.svg", width: 60, height: 60 },
    title: "Best Sellers Combo",
    description: "Our most-loved meals bundled together for the ultimate flavour experience.",
    photo: {
      src: "/images/deals/deal-best-sellers-combo.png",
      naturalWidth: 433,
      naturalHeight: 577,
      width: 779,
      height: 618,
      rotate: 79.61,
      top: 273,
      offsetX: 22,
    },
  },
  {
    bg: "#ffafcf",
    icon: { src: "/images/deals/deal-icon-lunch-combos.png", width: 60, height: 43 },
    title: "Lunch Combos",
    uppercase: true,
    description: "Quick, satisfying meals paired with a drink for the perfect midday break.",
    photo: {
      src: "/images/deals/deal-lunch-combos.png",
      naturalWidth: 427,
      naturalHeight: 585,
      width: 807,
      height: 684,
      rotate: 72.52,
      top: 229,
      offsetX: 10,
    },
  },
  {
    bg: "#e8f0fd",
    icon: { src: "/images/deals/deal-icon-burger-fries.png", width: 60, height: 60 },
    title: "Burger & Fries Deals",
    description: "Juicy burgers, crispy fries, and refreshing drinks at a great price.",
    photo: {
      src: "/images/deals/deal-burger-fries.png",
      naturalWidth: 500,
      naturalHeight: 500,
      width: 643,
      height: 643,
      rotate: 0,
      top: 246,
      offsetX: 0,
    },
  },
  {
    bg: "#ffdac7",
    icon: { src: "/images/deals/deal-icon-gusto-specials.png", width: 60, height: 60 },
    title: "Gusto Specials",
    description: "Exclusive chef-picked combos available for a limited time.",
    photo: {
      src: "/images/deals/deal-gusto-specials.png",
      naturalWidth: 447,
      naturalHeight: 559,
      width: 838,
      height: 743,
      rotate: -106.53,
      top: 184,
      offsetX: -12,
    },
  },
  {
    bg: "#ffecab",
    icon: { src: "/images/deals/deal-icon-family-feast.png", width: 60, height: 61 },
    title: "FAMILY FEAST",
    description: "Perfect for sharing with family and friends. More food, more smiles.",
    photo: {
      src: "/images/deals/deal-family-feast.png",
      naturalWidth: 447,
      naturalHeight: 559,
      width: 722,
      height: 628,
      rotate: 76.99,
      top: 274,
      offsetX: 17,
    },
  },
];

export function DealsGrid() {
  return (
    <div className="mx-auto grid w-full max-w-[1319px] grid-cols-1 gap-[33px] px-6 md:grid-cols-2">
      {DEALS.map((deal) => (
        <DealCard key={deal.title} data={deal} />
      ))}
    </div>
  );
}
