import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { NewsletterSection } from "@/components/layout/NewsletterSection";
import { PhotoCollage } from "@/components/layout/PhotoCollage";
import { MenuGrid } from "@/components/sections/menu/MenuGrid";
import { MenuHeader } from "@/components/sections/menu/MenuHeader";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Menu — Gusto Gang",
  description: "All flavor, no filler.",
};

export default function MenuPage() {
  return (
    <>
      <Nav />
      <section className="bg-cream relative z-10 flex flex-col gap-[80px] py-[79px]">
        <MenuHeader />
        <MenuGrid />
      </section>
      <Reveal>
        <NewsletterSection />
      </Reveal>
      <Footer />
      <PhotoCollage />
    </>
  );
}
