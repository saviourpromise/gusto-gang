import Image from "next/image";

const STEPS = [
  { number: 1, title: "Pick your food", image: "/images/how-it-works/step-1.png" },
  { number: 2, title: "Pick your food", image: "/images/how-it-works/step-2.png" },
  { number: 3, title: "Pick your food", image: "/images/how-it-works/step-3.png" },
  { number: 4, title: "Pick your food", image: "/images/how-it-works/step-4.png" },
] as const;

const DESCRIPTION = "Browse by mood. Filter by category. Add what you want.";

// node-id 84:31291 (step 1 styling, exact) — see .figma-cache/design-context/84-31291-how-it-works-step.tsx
// Photos for all 4 steps sourced via the Figma REST API's /images endpoint (full-resolution originals,
// resolved through file.json's imageRef mapping — see .figma-cache/rest/).
// CONFIRMED in Figma metadata: all 4 steps share this identical title/description (literal design
// content, not a bug — see cache file note). Only the number and photo differ per step.
//
// Zigzag bar above each card uses the orange-steps.png asset (public/images/home/) rather than
// a CSS approximation — the earlier version used separated/gapped rectangles, but the real shape
// is a connected overlapping staircase (confirmed against a reference screenshot); the asset
// reproduces that exactly at its native 250x32 size (matches the Figma layout's own 250x31.8).
export function HowItWorks() {
  return (
    <section className="bg-cream relative z-10 px-6 py-[127px]">
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
              <Image
                src="/images/home/orange-steps.png"
                alt=""
                aria-hidden
                width={250}
                height={32}
                className="mb-[12px] h-auto w-[250px] max-w-full"
              />
              <div className="bg-amber-card relative h-[495px] w-full overflow-hidden rounded-card-sm">
                <p className="font-display absolute top-0 left-1/2 -translate-x-1/2 text-[64px] font-extrabold text-black">
                  {step.number}
                </p>
                <div className="absolute top-[102px] left-1/2 flex w-[261px] -translate-x-1/2 flex-col items-center gap-[12px] text-center text-[#292d32]">
                  <p className="font-display text-[36px] font-bold">{step.title}</p>
                  <p className="font-display text-[20px]">{DESCRIPTION}</p>
                </div>
                <div className="rounded-card-sm absolute top-[231px] left-1/2 h-[264px] w-[316px] -translate-x-1/2 overflow-hidden bg-[#292d32]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
