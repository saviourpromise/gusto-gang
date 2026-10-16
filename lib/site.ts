export type NavLink = {
  label: string;
  href: string;
  /** No destination exists for this link in the Figma file — render inert (href="#", no navigation). */
  inert?: boolean;
};

// Top nav, from .figma-cache/design-context/84-30845-nav.tsx. Only Home/Menu/Deals/About
// are real pages in the design — "Track Order" has no page, so it's inert.
export const PRIMARY_NAV: NavLink[] = [
  { label: "Menu", href: "/menu" },
  { label: "Track Order", href: "#", inert: true },
  { label: "Deals", href: "/deals" },
  { label: "About", href: "/about" },
];

// Footer link columns, from .figma-cache/design-context/84-30815-footer.tsx. Labels here
// don't match the top nav's labels (leftover template copy) — kept verbatim per design.
export const FOOTER_COLUMNS: NavLink[][] = [
  [
    { label: "Full menu", href: "/menu" },
    { label: "Track your order", href: "#", inert: true },
    { label: "Deals", href: "/deals" },
    { label: "PICK UP", href: "#", inert: true },
  ],
  [
    { label: "About us", href: "/about" },
    { label: "Contact", href: "#", inert: true },
    { label: "FAQ", href: "#", inert: true },
    { label: "Instagram", href: "#", inert: true },
  ],
  [
    { label: "Privacy policy", href: "#", inert: true },
    { label: "Terms of use", href: "#", inert: true },
    { label: "Cookie settings", href: "#", inert: true },
  ],
];

export const SITE_ADDRESS = "Ocala, FL 34471, USA";
export const SITE_EMAIL = "info@GUSTOGANG.com";
