import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PRIMARY_NAV } from "@/lib/site";

type NavProps = {
  /**
   * "light" (default): white bg, Di Grotesk links — used on Menu/Deals/About (node 84:30845).
   * "overlay": red bg, white Plus Jakarta Sans links — Home-only variant that sits directly on
   * the hero with no white backdrop (node 84:31364). Same geometry, different color scheme + font.
   */
  variant?: "light" | "overlay";
};

// node-id 84:30845 (light) / 84:31364 (overlay) — see .figma-cache/design-context/
export function Nav({ variant = "light" }: NavProps) {
  const isOverlay = variant === "overlay";

  return (
    <header className={isOverlay ? "bg-brand-red" : "bg-white"}>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between py-[47px] pr-[65px] pl-[62px]">
        <div className={isOverlay ? "flex items-center gap-6" : "flex items-center gap-8"}>
          <Link href="/" aria-label="Gusto Gang home" className="shrink-0">
            <Image
              src={isOverlay ? "/icons/logo-mark-white.svg" : "/icons/logo-mark.svg"}
              alt="Gusto Gang"
              width={40}
              height={40}
              priority
            />
          </Link>
          <ul className="flex items-center gap-4">
            {PRIMARY_NAV.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  // TODO: no "Track Order" page exists in the Figma design yet — link is inert.
                  aria-disabled={link.inert}
                  tabIndex={link.inert ? -1 : undefined}
                  className={[
                    "text-[16px] uppercase hover:opacity-70 aria-disabled:pointer-events-none aria-disabled:opacity-40",
                    isOverlay
                      ? "font-body font-medium text-white"
                      : "font-display text-ink",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-[30px]">
          <Image
            src={isOverlay ? "/icons/search-cart-white.svg" : "/icons/search-cart.svg"}
            alt=""
            width={62}
            height={24}
            aria-hidden
          />
          <Button as="a" href="#" compact aria-disabled>
            {/* TODO: no order/checkout flow exists in the Figma design yet. */}
            Order Now
          </Button>
        </div>
      </div>
    </header>
  );
}
