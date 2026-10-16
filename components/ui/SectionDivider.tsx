type SectionDividerProps = {
  flip?: boolean;
  className?: string;
};

/** Scalloped/wavy section-boundary line reused between several sections (e.g. top+bottom
 * of the amber "Most Ordered" banner). node asset: public/icons/wave-divider.svg */
export function SectionDivider({ flip = false, className = "" }: SectionDividerProps) {
  return (
    <div
      aria-hidden
      className={`h-[9px] w-full bg-repeat-x ${flip ? "rotate-180" : ""} ${className}`}
      style={{ backgroundImage: "url(/icons/wave-divider.svg)" }}
    />
  );
}
