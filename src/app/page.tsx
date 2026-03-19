import Hero from "@/components/Hero";
import AnimationStrip from "@/components/AnimationStrip";
import Work from "@/components/Work";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Artwork from "@/components/Artwork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <AnimationStrip />
      <Work />
      <About />
      <Skills />
      <Artwork />
      <Contact />
      <Footer />
    </main>
  );
}
