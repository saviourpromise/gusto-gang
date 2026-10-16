// node-id 84:31152 ("Frame 2147240076") — NOT pulled via MCP, same budget reasoning as the Deals
// header: it's a sibling of "Our Story" with no shared small parent, and the call went to "Our Story"
// instead (longer unique copy + an unconfirmed font choice, higher risk than this one-line statement).
// Text is exact (Figma text-node name = content, from cached metadata). Styling is INFERRED from the
// matching pattern used for other single-statement banners on this site (Di Grotesk Extra Bold,
// uppercase, centered, #292d32 on an amber background) — flagged as an estimate, not fetched data.
export function MissionBanner() {
  return (
    <div className="bg-brand-amber-dark flex items-center justify-center px-6 py-[150px]">
      <p className="font-display text-ink max-w-[1180px] text-center text-[48px] leading-[1.25] font-extrabold uppercase">
        We specialize in crafting fresh, flavourful meals that satisfy cravings and turn everyday
        dining into a memorable experience.
      </p>
    </div>
  );
}
