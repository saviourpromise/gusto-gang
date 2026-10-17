import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { NewsletterSection } from "@/components/layout/NewsletterSection";
import { PhotoCollage } from "@/components/layout/PhotoCollage";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { MissionBanner } from "@/components/sections/about/MissionBanner";
import { OurStory } from "@/components/sections/about/OurStory";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About — Gusto Gang",
  description: "The Gusto Story.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <AboutHero />
      <MissionBanner />
      <Reveal>
        <OurStory />
      </Reveal>
      <Reveal>
        <NewsletterSection />
      </Reveal>
      <Footer />
      <PhotoCollage />
    </>
  );
}
