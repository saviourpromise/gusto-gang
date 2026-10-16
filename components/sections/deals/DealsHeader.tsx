// node-id 84:31094 ("Frame 2147240221") — NOT pulled via MCP (see .figma-cache/design-context/
// 84-31021-deals-cards.tsx note: it's a sibling of the deal cards, not under a shared small parent,
// and the 1-call budget for this page went to the cards instead since their text/prices/colors were
// the real unknown). Text content is exact (from the cached full-page metadata, where Figma text-node
// names equal their content). Styling is INFERRED from the identical pattern confirmed everywhere else
// on this site (Di Grotesk Extra Bold, uppercase, #292d32) — flag this as an estimate, not fetched data.
export function DealsHeader() {
  return (
    <div className="mx-auto flex max-w-[810px] flex-col items-center gap-[24px] px-6 text-center">
      <p className="font-display text-ink text-[80px] leading-[0.95] font-extrabold uppercase">
        More Food. Less Spend.
      </p>
      <p className="font-display text-ink max-w-[670px] text-[22px]">
        From family combos to customer favourites, enjoy unbeatable deals that satisfy your
        cravings without stretching your budget.
      </p>
    </div>
  );
}
