import { ArrowUpRight, Github } from "lucide-react";
import { PROJECTS } from "@/data/projects";

export function Projects() {
  const featured = PROJECTS.filter((project) => project.featured);

  return (
    <section id="work" className="section-block" aria-labelledby="work-title">
      <div className="page-shell">
        <div className="section-heading">
          <p className="section-kicker">01 / Selected work</p>
          <h2 id="work-title" className="section-title">Three systems. Clear outcomes.</h2>
          <p className="section-copy">
            Production-minded work across agent orchestration, document intelligence, and evaluation.
          </p>
        </div>

        <div className="project-index">
          {featured.map((project, index) => (
            <article key={project.id} className="project-row">
              <p className="project-number" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="project-main">
                <p className="project-category">{project.category}</p>
                <h3 className="project-title">{project.name}</h3>
                <p className="project-summary">{project.summary}</p>
              </div>
              <div className="project-evidence">
                <p className="project-evidence-label">Outcome</p>
                <p>{project.outcome}</p>
                <p className="project-stack">{project.technologies.slice(0, 5).join(" · ")}</p>
              </div>
              <div className="project-action">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    <Github size={18} aria-hidden />
                  </a>
                ) : (
                  <span aria-hidden><ArrowUpRight size={18} /></span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
