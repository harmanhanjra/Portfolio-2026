import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Journey } from "@/components/journey";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Projects />
      <Journey />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
