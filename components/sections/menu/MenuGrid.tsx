import Image from "next/image";
import { Button } from "@/components/ui/Button";

type MenuItem = {
  image: string;
  alt: string;
  name: string;
  price: string;
  imageWidth: number;
  imageHeight: number;
  shadow: string;
};

// node-id 84:30891 (card pattern, exact) — see .figma-cache/design-context/84-30891-menu-card.tsx
// Text content and per-card image crop sizes from the cached full-page metadata
// (.figma-cache/metadata/canvas-2-3-full.xml, nodes 84:30890-84:30958). Cards 1-3 literally share the
// placeholder name "BASMATI FRIED RICE & CHICKEN" in Figma despite different photos — kept verbatim.
const ITEMS: MenuItem[] = [
  {
    image: "/images/menu/dish-basmati-fried-rice.png",
    alt: "Basmati fried rice topped with grilled chicken",
    name: "Basmati fried rice & chicken",
    price: "7,500",
    imageWidth: 400,
    imageHeight: 400,
    shadow: "shadow-[4px_0px_0px_0px_black]",
  },
  {
    image: "/images/menu/dish-ewa-agoyin.png",
    alt: "Ewa agoyin beans with fried plantain and beef",
    name: "Basmati fried rice & chicken",
    price: "7,500",
    imageWidth: 400,
    imageHeight: 442,
    shadow: "shadow-[6px_0px_0px_0px_black]",
  },
  {
    image: "/images/menu/dish-gourmet-cheeseburger.png",
    alt: "Gourmet bacon cheeseburger with fries",
    name: "Basmati fried rice & chicken",
    price: "7,500",
    imageWidth: 400,
    imageHeight: 393,
    shadow: "shadow-[5px_0px_0px_0px_black]",
  },
  {
    image: "/images/menu/dish-ofada-rice-sauce.png",
    alt: "Ofada rice with ayamase sauce",
    name: "Ofada rice & sauce",
    price: "7,500",
    imageWidth: 400,
    imageHeight: 400,
    shadow: "shadow-[4px_0px_0px_0px_black]",
  },
  {
    image: "/images/menu/dish-poridge-yam.png",
    alt: "Porridge yam",
    name: "Poridge yam",
    price: "7,500",
    imageWidth: 400,
    imageHeight: 362,
    shadow: "shadow-[5px_0px_0px_0px_black]",
  },
  {
    image: "/images/menu/dish-grilled-fish-bole.png",
    alt: "Grilled fish and bole (roasted plantain)",
    name: "Grilled fish & bole",
    price: "7,500",
    imageWidth: 400,
    imageHeight: 474,
    shadow: "shadow-[5px_0px_0px_0px_black]",
  },
];

export function MenuGrid() {
  return (
    <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-x-[41px] gap-y-[62px] px-6 sm:grid-cols-2 lg:grid-cols-3">
      {ITEMS.map((item, i) => (
        <article key={i} className="flex flex-col items-center gap-[35px]">
          <div
            className={`bg-sand relative h-[498px] w-full overflow-hidden border-4 border-black ${item.shadow}`}
          >
            <Image
              src={item.image}
              alt={item.alt}
              width={item.imageWidth}
              height={item.imageHeight}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
              style={{ width: item.imageWidth, height: item.imageHeight }}
            />
          </div>
          <div className="flex flex-col items-center gap-[20px]">
            <p className="font-display text-ink text-center text-[24px] uppercase">{item.name}</p>
            <div className="flex items-center gap-[4px]">
              <Image src="/icons/icon-naira.svg" alt="" width={24} height={22.5} aria-hidden />
              <p className="font-display text-ink text-[24px] font-bold">{item.price}</p>
            </div>
            <Button as="a" href="#" aria-disabled>
              {/* TODO: no order/checkout flow exists in the Figma design yet. */}
              Order Now
            </Button>
          </div>
        </article>
      ))}
    </div>
  );
}
