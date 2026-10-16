type AssetPendingProps = {
  /** What this slot is for — shown only via title attr, not rendered as fake content. */
  label: string;
  className?: string;
};

/**
 * Honest stand-in for a real Figma photo we haven't exported yet (budget- or scope-limited),
 * NEVER a stock photo. Renders as a plain diagonal-hatch block so it reads as "pending asset"
 * at a glance rather than looking like a finished image. Replace with next/image + the real
 * exported file once available.
 */
export function AssetPending({ label, className = "" }: AssetPendingProps) {
  return (
    <div
      role="img"
      aria-label={`Pending image: ${label}`}
      title={`Pending image: ${label}`}
      className={`bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.06)_0_10px,transparent_10px_20px)] ${className}`}
    />
  );
}
