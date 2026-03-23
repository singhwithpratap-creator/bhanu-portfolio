import Hero from "@/components/Hero";
import AnimationStrip from "@/components/AnimationStrip";
import Work from "@/components/Work";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
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
      <Testimonials />
      <Artwork />
      <Contact />
      <Footer />
    </main>
  );
}
