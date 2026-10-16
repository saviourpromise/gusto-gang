import { AssetPending } from "@/components/ui/AssetPending";

// node-id 84:31260 (quote card, exact) — see .figma-cache/design-context/84-31260-testimonial-card.tsx
// The outer "paper stack" backdrop + photo (node 84:31280, sibling of the quote card) and the carousel
// dots' exact styling were not pulled this budget — approximated here (cream paper card + plain dots)
// and flagged for a follow-up Figma call or hand export.
// Heading spelling "TESTIMONIOALS" is literal Figma content (typo kept, not corrected) — see 84:31257.
export function Testimonials() {
  return (
    <section className="bg-cream px-6 py-[102px]">
      <div className="mx-auto max-w-[1351px]">
        <p className="font-display text-ink mb-[53px] text-[75px] uppercase">Testimonioals</p>

        <div className="flex flex-col items-start gap-10 lg:flex-row">
          <div className="w-full max-w-[640px] rounded-[10px] border-4 border-black bg-[#fdf3e4] p-[64px] shadow-[8px_0px_0px_0px_black]">
            <div className="rotate-[-4.54deg]">
              <span className="bg-peach-tag text-maroon-tag font-display inline-block px-[15px] py-[6px] text-[24px] uppercase">
                Sandra M. - Lagos, NG
              </span>
            </div>
            <p className="font-display text-maroon-quote mt-[30px] text-[40px] leading-[1.1] uppercase">
              &ldquo;The food is absolutely amazing, and the energy here is completely unmatched.
              Gusto Gang always delivers on its promise of bold tastes and better vibes!&rdquo;
            </p>
            <div className="mt-[30px] flex flex-col items-start gap-[14px]">
              <div aria-hidden className="flex h-[16px] w-[211px] gap-[9px]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`bg-coral h-[13px] w-[48px] rounded-[1px] ${i % 2 ? "translate-y-[13px]" : ""}`}
                  />
                ))}
              </div>
              <div className="font-display flex items-center gap-[20px] text-[30px] capitalize">
                <p className="text-brand-red">Ordered</p>
                <p className="text-black">Jollof Rice</p>
              </div>
            </div>
          </div>

          <AssetPending
            label="Testimonials backdrop photo"
            className="h-[600px] w-full max-w-[824px] rounded-[10px]"
          />
        </div>

        <div className="mt-[80px] flex items-center justify-center gap-[9px]" aria-hidden>
          <span className="bg-ink h-[8px] w-[100px] rounded-full" />
          <span className="h-[8px] w-[100px] rounded-full bg-black/20" />
          <span className="h-[8px] w-[100px] rounded-full bg-black/20" />
        </div>
      </div>
    </section>
  );
}
