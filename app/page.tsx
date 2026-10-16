import { Footer } from "@/components/layout/Footer";
import { NewsletterSection } from "@/components/layout/NewsletterSection";
import { CtaBanner } from "@/components/sections/home/CtaBanner";
import { GoodFoodHero } from "@/components/sections/home/GoodFoodHero";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { HowItWorks } from "@/components/sections/home/HowItWorks";
import { MenuPreview } from "@/components/sections/home/MenuPreview";
import { MostOrdered } from "@/components/sections/home/MostOrdered";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <>
      <HomeHero />
      <GoodFoodHero />
      <Reveal>
        <MenuPreview />
      </Reveal>
      <MostOrdered />
      <Reveal>
        <HowItWorks />
      </Reveal>
      <Reveal>
        <CtaBanner />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      {/* Newsletter photo (image 1664) not yet exported — see check-in notes. */}
      <Reveal>
        <NewsletterSection />
      </Reveal>
      <Footer />
    </>
  );
}
