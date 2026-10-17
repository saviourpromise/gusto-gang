"use client";

import { useId } from "react";

type ZigzagDividerProps = {
  /** The background color of the SECTION this zigzag belongs to — the zigzag teeth will be
   * this color, visually reaching into the neighboring section. Accepts CSS var or hex. */
  color: string;
  /** Which edge of the parent section this sits on:
   * - "top": teeth reach UPWARD into the section above
   * - "bottom": teeth reach DOWNWARD into the section below */
  edge: "top" | "bottom";
  /** Optional custom className */
  className?: string;
};

/**
 * Vector scalloped/zigzag section divider.
 * Creates the torn-paper wave edge using an inline repeating SVG pattern filled with
 * the parent section's background color — no external image files required.
 */
export function ZigzagDivider({
  color,
  edge,
  className = "",
}: ZigzagDividerProps) {
  const reactId = useId();
  const patternId = `scallop-${edge}-${reactId.replace(/[^a-zA-Z0-9_-]/g, "")}`;

  // Wavelength = 44px, amplitude = 16px (matches Figma Vector 7412 geometry)
  const W = 44;
  const H = 16;

  // Bottom edge: teeth reach DOWN into the next section
  // Top edge: teeth reach UP into the previous section
  const pathD =
    edge === "bottom"
      ? `M 0 0 C ${W * 0.25} 0, ${W * 0.25} ${H}, ${W * 0.5} ${H} C ${W * 0.75} ${H}, ${W * 0.75} 0, ${W} 0 Z`
      : `M 0 ${H} C ${W * 0.25} ${H}, ${W * 0.25} 0, ${W * 0.5} 0 C ${W * 0.75} 0, ${W * 0.75} ${H}, ${W} ${H} Z`;

  const positionClass =
    edge === "top"
      ? "absolute bottom-full left-0 right-0 z-20"
      : "absolute top-full left-0 right-0 z-20";

  return (
    <div
      aria-hidden
      className={`${positionClass} w-full overflow-hidden leading-none h-[14px] sm:h-[16px] pointer-events-none ${className}`}
    >
      <svg
        className="block h-full w-full"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={patternId}
            width={W}
            height={H}
            patternUnits="userSpaceOnUse"
          >
            <path d={pathD} style={{ fill: color }} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
