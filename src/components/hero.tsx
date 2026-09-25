import { ArrowDown, ArrowRight, Github } from "lucide-react";
import { PROFILE } from "@/data/profile";

export function Hero() {
  return (
    <section id="top" className="hero-section" aria-labelledby="hero-title">
      <div className="page-shell hero-grid">
        <div className="hero-primary">
          <p className="hero-kicker hero-enter hero-delay-1">
            <span className="availability-dot" aria-hidden /> Available for AI engineering roles
          </p>
          <h1 id="hero-title" className="hero-title hero-enter hero-delay-2">
            Harmanpreet <em>Singh</em>
          </h1>
          <p className="hero-role hero-enter hero-delay-3">AI Engineer · Agents · RAG · Full Stack</p>
          <p className="hero-copy hero-enter hero-delay-4">
            I build reliable AI products—from retrieval and agent workflows to the production systems around them.
          </p>
          <div className="hero-actions hero-enter hero-delay-5">
            <a href="#work" className="button-primary">
              View selected work <ArrowRight size={16} aria-hidden />
            </a>
            <a href={PROFILE.resumePath} className="button-secondary">
              Résumé
            </a>
          </div>
          <dl className="hero-proof hero-enter hero-delay-6" aria-label="Career highlights">
            <div>
              <dt>Agent task completion</dt>
              <dd>95%+</dd>
            </div>
            <div>
              <dt>Applications shipped</dt>
              <dd>10+</dd>
            </div>
          </dl>
        </div>

        <aside className="hero-aside hero-enter hero-delay-4" aria-label="Profile details">
          <p className="hero-aside-label">Current base</p>
          <p className="hero-aside-value">Berlin, Germany</p>
          <p className="hero-aside-copy">{PROFILE.workAuthorization}</p>
          <div className="hero-aside-rule" />
          <p className="hero-aside-label">Focus</p>
          <p className="hero-aside-value">Production AI systems</p>
          <p className="hero-aside-copy">
            Multi-agent orchestration, grounded retrieval, evaluation, and secure APIs.
          </p>
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="hero-aside-link">
            <Github size={16} aria-hidden /> GitHub <ArrowRight size={14} aria-hidden />
          </a>
        </aside>
      </div>
      <a href="#work" className="hero-scroll" aria-label="Scroll to selected work">
        Selected work <ArrowDown size={15} aria-hidden />
      </a>
    </section>
  );
}
