import Image from "next/image";
import { AssetPending } from "@/components/ui/AssetPending";

const STEPS = [
  { number: 1, title: "Pick your food", image: "/images/how-it-works/step-1.png" },
  { number: 2, title: "Pick your food", image: null },
  { number: 3, title: "Pick your food", image: null },
  { number: 4, title: "Pick your food", image: null },
] as const;

const DESCRIPTION = "Browse by mood. Filter by category. Add what you want.";

// node-id 84:31291 (step 1, exact) — see .figma-cache/design-context/84-31291-how-it-works-step.tsx
// CONFIRMED in Figma metadata: all 4 steps share this identical title/description (literal design
// content, not a bug — see cache file note). Only the number and photo differ per step.
// Steps 2–4 photos were not pulled (out of this budget's scope) — rendered as AssetPending rather
// than reusing step 1's photo or any stock image.
export function HowItWorks() {
  return (
    <section className="bg-cream px-6 py-[127px]">
      <div className="mx-auto flex max-w-[1318px] flex-col items-center">
        <div className="flex w-[677px] max-w-full flex-col items-center gap-[12px] text-center">
          <p className="font-display text-ink text-[64px] leading-[87px] font-extrabold uppercase">
            How It Works
          </p>
          <p className="font-display text-ink text-[29px]">Order in 4 steps</p>
        </div>

        <div className="mt-[80px] grid grid-cols-1 gap-x-[18px] gap-y-[40px] sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.number} className="flex w-[316px] max-w-full flex-col items-center">
              {/* zigzag divider bar, coral, sits above the card */}
              <div className="mb-[12px] flex h-[16px] w-[250px] gap-[9px]" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`bg-coral h-[16px] w-[57px] rounded-[1.3px] ${i % 2 ? "translate-y-[16px]" : ""}`}
                  />
                ))}
              </div>
              <div className="bg-amber-card relative h-[495px] w-full overflow-hidden rounded-card-sm">
                <p className="font-display absolute top-0 left-1/2 -translate-x-1/2 text-[64px] font-extrabold text-black">
                  {step.number}
                </p>
                <div className="absolute top-[102px] left-1/2 flex w-[261px] -translate-x-1/2 flex-col items-center gap-[12px] text-center text-[#292d32]">
                  <p className="font-display text-[36px] font-bold">{step.title}</p>
                  <p className="font-display text-[20px]">{DESCRIPTION}</p>
                </div>
                <div className="rounded-card-sm absolute top-[231px] left-1/2 h-[264px] w-[316px] -translate-x-1/2 overflow-hidden bg-[#292d32]">
                  {step.image ? (
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={316}
                      height={264}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <AssetPending
                      label={`How It Works step ${step.number} photo`}
                      className="h-full w-full"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
