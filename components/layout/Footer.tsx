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
export function Footer() {
  return (
    <footer className="bg-brown-900">
      <div className="mx-auto max-w-[1440px] px-[60px] pt-[67px] pb-[30px]">
        <p className="font-display text-brand-amber-dark text-center text-[200px] leading-none font-black uppercase">
          Gusto Gang
        </p>

        <div className="mt-[99px] flex items-start justify-between">
          <div className="flex gap-[17px]">
            {FOOTER_COLUMNS.map((column, i) => (
              <ul key={i} className="flex w-[238px] flex-col">
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

          <div className="w-[175px] text-right">
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

        <div className="mt-[256px] flex items-center justify-between">
          <p className="font-display text-brand-amber-dark text-[11.5px] uppercase">
            2026 © Gusto Gang
          </p>
          <div className="font-display text-brand-amber-dark flex items-center gap-[29px] uppercase">
            <p className="text-[10.5px]">© 2026 Gusto Gang. All rights reserved.</p>
            <p className="font-['Arial'] text-[10.7px]">Website by FAVOURTHOMAS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
