import { ArrowUpRight, FileText, Github, Mail } from "lucide-react";
import { PROFILE } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="page-shell contact-shell">
        <p className="contact-kicker">04 / Contact</p>
        <h2 id="contact-title" className="contact-title">
          Have a hard AI problem?
        </h2>
        <p className="contact-copy">
          I&apos;m open to AI engineering roles in Berlin and remote across Europe, plus selected freelance builds.
        </p>
        <a href={`mailto:${PROFILE.email}`} className="contact-email">
          {PROFILE.email} <ArrowUpRight size={24} aria-hidden />
        </a>
        <div className="contact-actions">
          <a href={PROFILE.resumePath} className="contact-action">
            <FileText size={17} aria-hidden /> Résumé
          </a>
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="contact-action">
            <Github size={17} aria-hidden /> GitHub
          </a>
          <a href={`mailto:${PROFILE.email}`} className="contact-action">
            <Mail size={17} aria-hidden /> Email
          </a>
        </div>
      </div>
    </section>
  );
}
