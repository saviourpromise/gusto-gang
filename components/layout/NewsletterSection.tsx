import Image from "next/image";
import { AssetPending } from "@/components/ui/AssetPending";

type NewsletterSectionProps = {
  /** Right-side food photo — differs per page (image 1641 reused on Menu/Deals/About, image 1664 on
   * Home). Pass the exported path once available; omitted pages show an honest pending placeholder. */
  photo?: { src: string; alt: string };
};

// node-id 84:30862 (left text+form, exact) — see .figma-cache/design-context/84-30862-newsletter.tsx
export function NewsletterSection({ photo }: NewsletterSectionProps) {
  return (
    <section className="bg-brand-amber-dark flex flex-col md:flex-row">
      <div className="relative flex-1 px-[61px] py-[100px] md:py-[135px]">
        <p className="font-display text-[52.5px] leading-[52.9px] font-bold tracking-[-0.56px] text-[#402011] uppercase">
          Hot, fresh, at your door in under 30 minutes. Or pick it up free — your call.
        </p>

        <form className="mt-[150px] flex flex-wrap gap-[20px]">
          <div className="rounded-pill flex-1 border border-[rgba(64,32,17,0.35)] px-[40px] py-[12px]">
            <input
              type="text"
              placeholder="Enter your full name"
              className="font-body w-full bg-transparent text-[18px] tracking-[0.08px] text-[#402011] uppercase placeholder:text-[#402011] focus:outline-none"
            />
          </div>
          <div className="rounded-pill min-w-[276px] border border-[rgba(64,32,17,0.35)] px-[25px] py-[12px] text-center">
            <input
              type="email"
              placeholder="Enter your E-MAIL"
              className="font-body w-full bg-transparent text-center text-[18px] tracking-[0.08px] text-[#402011] uppercase placeholder:text-[#402011] focus:outline-none"
            />
          </div>
          <button
            type="submit"
            // TODO: no newsletter backend exists yet — form does not submit anywhere.
            className="rounded-pill font-body w-full bg-[#402011] py-[20px] text-[20px] tracking-[-0.1px] text-[#faae33] uppercase"
          >
            Subscribe
          </button>
          <p className="font-display w-full text-[12px] tracking-[-0.085px] text-[#402011] uppercase">
            By signing up for updates, you agree to our{" "}
            <a href="#" className="underline">
              privacy policy
            </a>{" "}
            terms.
          </p>
        </form>
      </div>

      <div className="relative min-h-[320px] flex-1 overflow-hidden md:min-h-0">
        {photo ? (
          <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
        ) : (
          <AssetPending label="Newsletter section photo" className="h-full w-full" />
        )}
      </div>
    </section>
  );
}
