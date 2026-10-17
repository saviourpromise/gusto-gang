import { ZigzagDivider } from "./ZigzagDivider";

type WaveDividerProps = {
  color: string;
  edge: "top" | "bottom";
  className?: string;
};

/**
 * Re-exports ZigzagDivider for backward compatibility.
 * Uses inline vector SVG pattern with the section's background color instead of a static image file.
 */
export function WaveDivider({ color, edge, className = "" }: WaveDividerProps) {
  return <ZigzagDivider color={color} edge={edge} className={className} />;
}

