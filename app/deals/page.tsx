import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { NewsletterSection } from "@/components/layout/NewsletterSection";
import { PhotoCollage } from "@/components/layout/PhotoCollage";
import { DealsGrid } from "@/components/sections/deals/DealsGrid";
import { DealsHeader } from "@/components/sections/deals/DealsHeader";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Deals — Gusto Gang",
  description: "More food. Less spend.",
};

export default function DealsPage() {
  return (
    <>
      <Nav />
      <section className="bg-cream relative z-10 flex flex-col gap-[80px] py-[79px]">
        <DealsHeader />
        <DealsGrid />
      </section>
      <Reveal>
        <NewsletterSection />
      </Reveal>
      <Footer />
      <PhotoCollage />
    </>
  );
}
