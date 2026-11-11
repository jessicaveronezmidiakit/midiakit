import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Social } from "@/components/sections/Social";
import { Gallery } from "@/components/sections/Gallery";
import { Audience } from "@/components/sections/Audience";
import { Results } from "@/components/sections/Results";
import { Formats } from "@/components/sections/Formats";
import { Brands } from "@/components/sections/Brands";
import { Measures } from "@/components/sections/Measures";
import { Contact } from "@/components/sections/Contact";
import { SiteNav } from "@/components/SiteNav";

export default function Home() {
  return (
    <main>
      <SiteNav />
      <Hero />
      <About />
      <Social />
      <Gallery />
      <Audience />
      <Results />
      <Formats />
      <Brands />
      <Measures />
      <Contact />
    </main>
  );
}
