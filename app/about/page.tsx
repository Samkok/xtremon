import { AboutHeroSection } from "../../components/sections/AboutHeroSection";
import { AboutPhilosophySection } from "../../components/sections/AboutPhilosophySection";
import { AboutVisionSection } from "../../components/sections/AboutVisionSection";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "About Xtremon — Studio philosophy and vision",
  description:
    "Xtremon is a long-term multi-app product studio focused on durable, performance-first software portfolios."
});

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutPhilosophySection />
      <AboutVisionSection />
    </>
  );
}
