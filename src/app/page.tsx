import { ShotListProvider } from "@/components/site/ShotList";
import { ScrollEffects } from "@/components/site/ScrollEffects";
import { SiteNav } from "@/components/SiteNav";
import { BagSymbol, Intro } from "@/components/sections/Intro";
import { Hero } from "@/components/sections/Hero";
import { Band, Brands } from "@/components/sections/Brands";
import { About } from "@/components/sections/About";
import { Social } from "@/components/sections/Social";
import { Videos } from "@/components/sections/Videos";
import { Gallery } from "@/components/sections/Gallery";
import { Audience } from "@/components/sections/Audience";
import { Results } from "@/components/sections/Results";
import { Formats } from "@/components/sections/Formats";
import { Measures } from "@/components/sections/Measures";
import { Contact, Footer } from "@/components/sections/Contact";

export default function Home() {
  return (
    <ShotListProvider>
      <Intro />
      <BagSymbol />
      <SiteNav />
      <Hero />
      <Band />
      <Brands />
      <About />
      <Social />
      <Videos />
      <Gallery />
      <Audience />
      <Results />
      <Formats />
      <Measures />
      <Contact />
      <Footer />
      <ScrollEffects />
    </ShotListProvider>
  );
}
