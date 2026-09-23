import { Hero } from "@/components/hero";
import { Impact } from "@/components/impact";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { CaseStudies } from "@/components/case-studies";
import { Journey } from "@/components/journey";
import { Expertise } from "@/components/expertise";
import { Credentials } from "@/components/credentials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { LabTerminal } from "@/components/terminal";
import { RecruiterSummary } from "@/components/recruiter-summary";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <RecruiterSummary />
      <Impact />
      <About />
      <Skills />
      <Projects />
      <CaseStudies />
      <Journey />
      <Expertise />
      <Credentials />
      <LabTerminal />
      <Contact />
      <Footer />
    </main>
  );
}
