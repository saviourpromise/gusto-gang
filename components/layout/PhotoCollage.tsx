import Image from "next/image";
import type { CSSProperties } from "react";
import { WaveDivider } from "@/components/ui/WaveDivider";

const PHOTOS = [
    { src: "/images/shared/collage-1.png", offset: 17, ratio: 301 / 244 },
    { src: "/images/shared/collage-2.png", offset: 3, ratio: 261 / 272 },
    { src: "/images/shared/collage-3.png", offset: -11, ratio: 315 / 300 },
    { src: "/images/shared/collage-4.png", offset: 19, ratio: 261 / 239 },
    { src: "/images/shared/collage-5.png", offset: -6, ratio: 261 / 291 },
] as const;

/** Decorative 5-photo strip that sits between the wave divider and the Footer on every page
 * (node "Frame 2147240212", e.g. 84:30960 on Menu). Shared across Home/Menu/Deals/About.
 *
 * Responsive note: the Figma file only defines this at 1440px (fixed pixel widths per photo).
 * Below 1440 each photo instead gets an equal flex share of the row (aspect-ratio preserved,
 * no fixed px) so the whole strip scales down smoothly instead of overflowing; the small
 * per-photo vertical offset is dropped under 640px since it reads as visual noise once the
 * photos are this small rather than the subtle "scattered" effect it is at full size.
 *
 * Renders AFTER the Footer in page order (confirmed against a reference screenshot — this was
 * previously placed before the Footer, which was backwards), with a cream wave at its own top
 * edge bumping up into the Footer's brown background above it. */
export function PhotoCollage() {
    return (
        <div className="bg-cream relative">
            <WaveDivider color="var(--color-cream)" edge="top" />
            <div
                aria-hidden
                className="mx-auto flex max-w-[1440px] items-center justify-center gap-[12px] overflow-hidden px-[16px] py-[24px] sm:gap-[25px] sm:px-[30px] sm:py-[40px]"
            >
                {PHOTOS.map((photo, i) => (
                    <div
                        key={i}
                        className="relative min-w-0 flex-1 overflow-hidden rounded-[10px] sm:rounded-[20px] sm:[transform:translateY(var(--offset))]"
                        style={{ aspectRatio: photo.ratio, "--offset": `${photo.offset}px` } as CSSProperties}
                    >
                        <Image src={photo.src} alt="" fill className="object-cover" sizes="20vw" />
                    </div>
                ))}
            </div>
        </div>
    );
}
