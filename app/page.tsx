import { createPageMetadata } from "../lib/seo";
import { HomeHero } from "../components/sections/HomeHero";
import { StudioPhilosophySection } from "../components/sections/StudioPhilosophySection";
import { ProductPortfolioSection } from "../components/sections/ProductPortfolioSection";
import { WhatWeBuildSection } from "../components/sections/WhatWeBuildSection";
import { TechnicalStandardsSection } from "../components/sections/TechnicalStandardsSection";
import { FinalCTASection } from "../components/sections/FinalCTASection";

export const metadata = createPageMetadata({
  title: "Xtremon Studio — Foundation",
  description:
    "Initial foundation build of the Xtremon multi-app product studio site, ready for future phases."
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StudioPhilosophySection />
      <ProductPortfolioSection />
      <WhatWeBuildSection />
      <TechnicalStandardsSection />
      <FinalCTASection />
    </>
  );
}
