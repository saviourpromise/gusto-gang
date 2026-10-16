// node-id 84:30878 — see .figma-cache/design-context/84-30878-menu-header.tsx
export function MenuHeader() {
  return (
    <div className="flex flex-col items-center gap-[88px] px-6">
      <div className="flex w-[440px] max-w-full flex-col items-center gap-[14px] text-center text-ink">
        <p className="font-display text-[100px] leading-[99px] font-extrabold uppercase">
          Our
          <br />
          Menu
        </p>
        <p className="font-display text-[24px] uppercase">All flavor, no filler.</p>
      </div>
      <div className="flex w-full max-w-[1320px] items-center justify-between">
        <button
          type="button"
          // TODO: filter functionality not specified by the design — visual only.
          className="shadow-pill rounded-pill border-2 border-black bg-white p-[15px]"
        >
          <p className="font-display text-[24px] font-bold text-[#1a1a1a] uppercase">Filter</p>
        </button>
        <button
          type="button"
          // TODO: sort functionality not specified by the design — visual only.
          className="shadow-pill rounded-pill border-2 border-black bg-white p-[15px]"
        >
          <p className="font-display text-[24px] font-bold text-[#1a1a1a] uppercase">Sort</p>
        </button>
      </div>
    </div>
  );
}
