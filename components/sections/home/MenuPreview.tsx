import Image from "next/image";

type PreviewCard = {
  image: string;
  alt: string;
  name: string;
  price: string;
  imageHeight: number;
  shadow: string;
  badge?: string;
};

const CARDS: PreviewCard[] = [
  {
    image: "/images/menu/dish-basmati-fried-rice.png",
    alt: "Basmati fried rice topped with grilled chicken",
    name: "Basmati fried rice & chicken",
    price: "7,500",
    imageHeight: 445,
    shadow: "shadow-[4px_0px_0px_0px_black]",
  },
  {
    image: "/images/menu/dish-ewa-agoyin.png",
    alt: "Ewa agoyin beans with fried plantain (dodo) and beef",
    name: "Ewa agoyin, dodo and beef",
    price: "10,500",
    imageHeight: 500,
    shadow: "shadow-[6px_0px_0px_0px_black]",
  },
  {
    image: "/images/menu/dish-gourmet-cheeseburger.png",
    alt: "Gourmet bacon cheeseburger with fries",
    name: "Gourmet bacon cheeseburger",
    price: "8,500",
    imageHeight: 434,
    shadow: "shadow-[5px_0px_0px_0px_black]",
    badge: "Hot deal",
  },
];

// node-id 84:31182 — see .figma-cache/design-context/84-31182-home-menu-preview.tsx
export function MenuPreview() {
  return (
    <section className="flex flex-col items-center gap-[55px] bg-cream px-6 py-[79px]">
      <div className="flex w-[677px] max-w-full flex-col items-center gap-[12px] text-center">
        <p className="font-body text-ink text-[64px] leading-[113px] font-extrabold uppercase">
          Our Menu
        </p>
        <p className="font-body text-ink-soft text-[40px]">
          What are you in the mood for?
        </p>
      </div>

      <div className="flex w-full max-w-[1566px] items-start justify-center gap-[40px] overflow-x-auto">
        {CARDS.map((card) => (
          <article
            key={card.name}
            className="flex w-[467px] max-w-[85vw] shrink-0 flex-col items-center gap-[40px]"
          >
            <div
              className={`relative h-[498px] w-full overflow-hidden border-4 border-black bg-sand ${card.shadow}`}
            >
              <Image
                src={card.image}
                alt={card.alt}
                width={card.imageHeight}
                height={card.imageHeight}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
                style={{ width: card.imageHeight, height: card.imageHeight }}
              />
              {card.badge && (
                <div className="absolute top-[20px] left-[9px] h-[117px] w-[120px]">
                  <Image
                    src="/icons/badge-hot-deal.svg"
                    alt=""
                    fill
                    aria-hidden
                  />
                  <p className="font-body absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-[14.4px] font-extrabold text-white uppercase">
                    {card.badge}
                  </p>
                </div>
              )}
            </div>
            <div className="flex flex-col items-center gap-[20px]">
              <p className="font-display text-ink text-center text-[24px] uppercase">
                {card.name}
              </p>
              <div className="flex items-center gap-[7px]">
                <Image src="/icons/icon-naira.svg" alt="" width={24} height={22.5} aria-hidden />
                <p className="font-body text-ink text-[24px] font-semibold">{card.price}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Visual-only carousel controls — design shows no additional items beyond these 3. */}
      <div className="flex items-center gap-[14px]">
        <button
          type="button"
          aria-label="Previous"
          className="shadow-pill bg-brand-amber flex size-[48px] rotate-180 items-center justify-center rounded-pill border-2 border-black"
        >
          <Image src="/icons/arrow.svg" alt="" width={24} height={20} aria-hidden />
        </button>
        <button
          type="button"
          aria-label="Next"
          className="shadow-pill bg-brand-amber flex size-[48px] items-center justify-center rounded-pill border-2 border-black"
        >
          <Image src="/icons/arrow.svg" alt="" width={24} height={20} aria-hidden />
        </button>
      </div>
    </section>
  );
}
