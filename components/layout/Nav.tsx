"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ZigzagDivider } from "@/components/ui/ZigzagDivider";
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
//
// Responsive note: Figma only defines this at 1440px, where the links/search/cart/Order Now all
// sit inline (no overflow room below ~1024px). Below `lg` this collapses into a hamburger toggle
// that opens the nav links as a dropdown panel — a decision this build made, not something in the
// Figma file, since the design gives no mobile nav to follow.
export function Nav({ variant = "light" }: NavProps) {
  const isOverlay = variant === "overlay";
  const [open, setOpen] = useState(false);

  const linkColorClass = isOverlay ? "font-body font-medium text-white" : "font-display text-ink";

  return (
    <header className={isOverlay ? "bg-brand-red relative z-30" : "bg-white relative z-30"}>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-[20px] lg:py-[47px] lg:pr-[65px] lg:pl-[62px]">
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
          <ul className="hidden items-center gap-4 lg:flex">
            {PRIMARY_NAV.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  // TODO: no "Track Order" page exists in the Figma design yet — link is inert.
                  aria-disabled={link.inert}
                  tabIndex={link.inert ? -1 : undefined}
                  className={[
                    "text-[16px] uppercase hover:opacity-70 aria-disabled:pointer-events-none aria-disabled:opacity-40",
                    linkColorClass,
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-[16px] lg:gap-[30px]">
          <Image
            src={isOverlay ? "/icons/search-cart-white.svg" : "/icons/search-cart.svg"}
            alt=""
            width={62}
            height={24}
            aria-hidden
            className="hidden lg:block"
          />
          {/* Wrapped in a span rather than passing "hidden" directly to Button: Button's own
              base classes already set display:inline-flex, and Tailwind's generated stylesheet
              order doesn't reliably let a later className win a conflicting display utility. */}
          <span className="hidden sm:inline-block">
            <Button as="a" href="#" compact aria-disabled>
              {/* TODO: no order/checkout flow exists in the Figma design yet. */}
              Order Now
            </Button>
          </span>

          <button
            type="button"
            className="flex size-[36px] flex-col items-center justify-center gap-[5px] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-[2px] w-[22px] transition-transform ${isOverlay ? "bg-white" : "bg-ink"} ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-[2px] w-[22px] transition-transform ${isOverlay ? "bg-white" : "bg-ink"} ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div
          className={`absolute inset-x-0 top-full z-40 flex flex-col gap-4 px-6 py-6 shadow-lg lg:hidden ${isOverlay ? "bg-brand-red" : "bg-white"}`}
        >
          {PRIMARY_NAV.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-disabled={link.inert}
              tabIndex={link.inert ? -1 : undefined}
              onClick={() => setOpen(false)}
              className={[
                "text-[18px] uppercase aria-disabled:pointer-events-none aria-disabled:opacity-40",
                linkColorClass,
              ].join(" ")}
            >
              {link.label}
            </Link>
          ))}
          <span className="mt-2 block w-fit sm:hidden">
            <Button as="a" href="#" aria-disabled>
              Order Now
            </Button>
          </span>
        </div>
      )}

      <ZigzagDivider color={isOverlay ? "var(--color-brand-red)" : "#ffffff"} edge="bottom" />
    </header>
  );
}
