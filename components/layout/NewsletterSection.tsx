import Image from "next/image";
import { ZigzagDivider } from "@/components/ui/ZigzagDivider";

type NewsletterSectionProps = {
  /** Optional custom photo — defaults to the signature grilled fish & bole platter matching Figma */
  photo?: { src: string; alt: string };
};

const DEFAULT_PHOTO = {
  src: "/images/home/newsletter-home.png",
  alt: "Grilled fish and bole (roasted plantain) platter with pepper sauce",
};

/**
 * Newsletter / subscribe section shared across all pages.
 * - Left half: Amber (#faae33) background with Di Grotesk headline, name & email pill inputs,
 *   full-width dark brown subscribe button, and matching amber zigzag dividers top & bottom.
 * - Right half: Red (brand-red) background with the signature grilled fish platter photo positioned
 *   at left: -25%, top: 43%, width: 152%, height: 84%, and matching red zigzag dividers top & bottom.
 */
export function NewsletterSection({ photo = DEFAULT_PHOTO }: NewsletterSectionProps) {
  const currentPhoto = photo?.src ? photo : DEFAULT_PHOTO;

  return (
    <section className="relative z-20">
      <div className="flex flex-col md:flex-row">
        {/* Left half: Amber column */}
        <div className="bg-brand-amber-dark relative flex flex-1 flex-col justify-between px-[24px] py-[60px] sm:px-[61px] sm:py-[100px] md:py-[120px]">
          <ZigzagDivider color="var(--color-brand-amber-dark)" edge="top" />

          <p
            className="font-display font-bold tracking-[-0.56px] text-[#402011] uppercase max-w-[640px]"
            style={{ fontSize: "clamp(32px, 5.5vw, 52.5px)", lineHeight: 1.01 }}
          >
            Hot, fresh, at your door in under 30 minutes. Or pick it up free — your call.
          </p>

          <form className="mt-[50px] flex flex-wrap gap-[16px] sm:mt-[100px]">
            <div className="flex w-full flex-col gap-[16px] sm:flex-row">
              <div className="rounded-pill flex-1 border border-[rgba(64,32,17,0.35)] px-[32px] py-[12px]">
                <input
                  type="text"
                  placeholder="ENTER YOUR FULL NAME"
                  aria-label="Full name"
                  className="font-body w-full bg-transparent text-[16px] sm:text-[18px] tracking-[0.08px] text-[#402011] uppercase placeholder:text-[#402011] focus:outline-none"
                />
              </div>
              <div className="rounded-pill flex-1 border border-[rgba(64,32,17,0.35)] px-[32px] py-[12px] text-center">
                <input
                  type="email"
                  placeholder="ENTER YOUR E-MAIL"
                  aria-label="Email address"
                  className="font-body w-full bg-transparent text-center text-[16px] sm:text-[18px] tracking-[0.08px] text-[#402011] uppercase placeholder:text-[#402011] focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="rounded-pill font-body w-full bg-[#402011] py-[18px] text-[18px] sm:text-[20px] font-bold tracking-[-0.1px] text-[#faae33] uppercase transition-opacity hover:opacity-90"
            >
              Subscribe
            </button>

            <p className="font-display w-full text-[11px] sm:text-[12px] tracking-[-0.085px] text-[#402011] uppercase">
              By signing up for updates, you agree to our{" "}
              <a href="#" className="underline">
                privacy policy
              </a>{" "}
              terms.
            </p>
          </form>

          <ZigzagDivider color="var(--color-brand-amber-dark)" edge="bottom" />
        </div>

        {/* Right half: Red column with food platter photo */}
        {/* Right half: Red column with food platter photo */}
        <div className="bg-brand-red relative flex-1 min-h-[420px] sm:min-h-[520px] md:min-h-[640px] lg:min-h-[760px]">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="pointer-events-none relative h-[80%] w-[90%]">
              <Image
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                fill
                priority
                className="object-contain"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>

          <ZigzagDivider color="var(--color-brand-red)" edge="top" />
          <ZigzagDivider color="var(--color-brand-red)" edge="bottom" />
        </div>
      </div>
    </section>
  );
}
