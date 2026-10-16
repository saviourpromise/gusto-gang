import Image from "next/image";

const PHOTOS = [
  { src: "/images/shared/collage-1.png", offset: 17, width: 301, height: 244 },
  { src: "/images/shared/collage-2.png", offset: 3, width: 261, height: 272 },
  { src: "/images/shared/collage-3.png", offset: -11, width: 315, height: 300 },
  { src: "/images/shared/collage-4.png", offset: 19, width: 261, height: 239 },
  { src: "/images/shared/collage-5.png", offset: -6, width: 261, height: 291 },
] as const;

/** Decorative 5-photo strip that sits between the wave divider and the Footer on every page
 * (node "Frame 2147240212", e.g. 84:30960 on Menu). Shared across Home/Menu/Deals/About. */
export function PhotoCollage() {
  return (
    <div className="bg-cream overflow-hidden" aria-hidden>
      <div className="mx-auto flex max-w-[1440px] items-center justify-center gap-[25px] px-[30px] py-[40px]">
        {PHOTOS.map((photo, i) => (
          <div
            key={i}
            className="relative shrink-0 overflow-hidden rounded-[20px]"
            style={{
              width: photo.width,
              height: photo.height,
              transform: `translateY(${photo.offset}px)`,
            }}
          >
            <Image src={photo.src} alt="" fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
