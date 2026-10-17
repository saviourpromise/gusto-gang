type WaveDividerProps = {
  /** Any CSS color value — the wave is recolored via mask, not baked into the asset. */
  color: string;
  /** Which edge of the parent section this sits on. Pulls the wave half-outside that edge via
   * negative margin so it visibly bumps into the neighboring section, rather than sitting flush
   * inside the parent's own background (where it would be invisible — same color underneath). */
  edge: "top" | "bottom";
  className?: string;
};

/**
 * Scalloped/wavy section-edge, reused at nearly every colored-block boundary in the design
 * (e.g. the amber "Most Ordered" banner's top+bottom, the newsletter section's top+bottom).
 * Each section renders this in ITS OWN background color and it overlaps on top of the
 * neighboring section — that's what creates the "torn paper" layered look.
 *
 * Source asset (public/images/home/zigzag.png) is a single flat cream color baked in, so it's
 * applied as a CSS mask (its alpha channel defines the wave shape) with an arbitrary
 * background-color behind it — one asset, recolorable per use, rather than needing a
 * differently-tinted PNG for every section.
 */
export function WaveDivider({ color, edge, className = "" }: WaveDividerProps) {
  return (
    <div
      aria-hidden
      className={`relative z-10 h-[14px] w-full sm:h-[22px] ${
        edge === "top" ? "-mt-[7px] sm:-mt-[11px]" : "-mb-[7px] rotate-180 sm:-mb-[11px]"
      } ${className}`}
      style={{
        backgroundColor: color,
        WebkitMaskImage: "url(/images/home/zigzag.png)",
        maskImage: "url(/images/home/zigzag.png)",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
      }}
    />
  );
}
