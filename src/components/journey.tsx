import { EXPERIENCE } from "@/data/experience";

const EXPERIENCE_ORDER = [0, 2, 1, 3];

export function Journey() {
  return (
    <section id="experience" className="section-block section-tinted" aria-labelledby="experience-title">
      <div className="page-shell">
        <div className="section-heading">
          <p className="section-kicker">02 / Experience</p>
          <h2 id="experience-title" className="section-title">AI systems and full-stack delivery.</h2>
          <p className="section-copy">Selected roles across open source, applied ML, and client product engineering.</p>
        </div>

        <ol className="experience-list">
          {EXPERIENCE_ORDER.map((index) => {
            const role = EXPERIENCE[index];
            return (
              <li key={role.company} className="experience-row">
                <div className="experience-role">
                  <p>{role.company}</p>
                  <span>{role.dates}</span>
                </div>
                <div className="experience-detail">
                  <h3>{role.position}</h3>
                  <p>{role.achievements[0]}</p>
                </div>
                <p className="experience-stack">{role.technologies.slice(0, 4).join(" · ")}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
