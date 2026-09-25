import { Hero } from "@/components/Hero";
import { FeaturedBuilds } from "@/components/FeaturedBuilds";
import { Approach } from "@/components/Approach";
import { Capabilities } from "@/components/Capabilities";
import { LimeSection } from "@/components/LimeSection";
import { About } from "@/components/About";
import { FinalCta } from "@/components/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedBuilds />
      <Approach />
      <Capabilities />
      <LimeSection />
      <About />
      <FinalCta />
    </>
  );
}
