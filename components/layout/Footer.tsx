import Link from "next/link";
import { FOOTER_COLUMNS, SITE_ADDRESS, SITE_EMAIL } from "@/lib/site";

// node-id 84:30815 — see .figma-cache/design-context/84-30815-footer.tsx
//
// Notes vs. Figma:
// - The Instagram icon layer in the source file sits at x=1557 on a 1440px-wide section
//   (entirely off-canvas) and never appears in any of the 4 page screenshots — it's an
//   orphaned layer, not part of the visible design, so it's intentionally not rendered here.
// - Footer link labels ("Full menu", "Track your order", "PICK UP"...) differ from the top
//   nav's labels ("Menu", "Track Order"...) in the design itself — kept verbatim, not a bug.
// - Copyright line read "© 2026 Ember." in Figma (leftover template text) — replaced with
//   "Gusto Gang" per instruction. "Website by FAVOURTHOMAS" kept exactly as designed.
//
// Responsive note: Figma only defines this at 1440px (200px wordmark, fixed-width columns in
// one rigid row, huge fixed vertical gaps calibrated to the wordmark's size). Below 1440 the
// wordmark scales down with clamp() and the link columns + address wrap onto their own rows
// instead of overflowing off-canvas; the big gaps scale down proportionally with it.
//
// Correction: the wordmark is LEFT-aligned in the actual Figma render, not centered — fixed
// against a reference screenshot (text-center was a build-time assumption, not Figma data).
export function Footer() {
  return (
    <footer className="bg-brown-900">
      <div className="mx-auto max-w-[1440px] px-[24px] pt-[48px] pb-[30px] sm:px-[60px] sm:pt-[67px]">
        <p
          className="font-display text-brand-amber-dark text-left leading-none font-black uppercase"
          style={{ fontSize: "clamp(52px, 13vw, 200px)" }}
        >
          Gusto Gang
        </p>

        <div className="mt-[48px] flex flex-col flex-wrap items-start justify-between gap-[32px] lg:mt-[99px] lg:flex-row">
          <div className="flex flex-wrap gap-[32px] lg:flex-nowrap lg:gap-[17px]">
            {FOOTER_COLUMNS.map((column, i) => (
              <ul key={i} className="flex w-[160px] flex-col lg:w-[238px]">
                {column.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      aria-disabled={link.inert}
                      tabIndex={link.inert ? -1 : undefined}
                      // TODO: inert footer links have no destination page in the Figma design.
                      className="font-display text-brand-amber-dark text-[11px] leading-[17.28px] uppercase hover:opacity-70 aria-disabled:pointer-events-none aria-disabled:opacity-40"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div className="text-left lg:w-[175px] lg:text-right">
            <p className="font-display text-brand-amber-dark text-[11px] leading-[17.28px] uppercase">
              {SITE_ADDRESS}
            </p>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="font-display text-brand-amber-dark text-[11px] leading-[17.28px] uppercase hover:opacity-70"
            >
              {SITE_EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-[64px] flex flex-col items-start gap-[16px] sm:mt-[256px] sm:flex-row sm:items-center sm:justify-between sm:gap-0">
          <p className="font-display text-brand-amber-dark text-[11.5px] uppercase">
            2026 © Gusto Gang
          </p>
          <div className="font-display text-brand-amber-dark flex flex-col items-start gap-[8px] uppercase sm:flex-row sm:items-center sm:gap-[29px]">
            <p className="text-[10.5px]">© 2026 Gusto Gang. All rights reserved.</p>
            <p className="font-['Arial'] text-[10.7px]">Website by FAVOURTHOMAS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
