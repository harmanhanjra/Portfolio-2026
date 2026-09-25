const CORE_SKILLS = [
  {
    label: "AI & agents",
    items: ["OpenAI", "Anthropic", "Gemini", "LangChain", "CrewAI", "Tool-calling"],
  },
  {
    label: "RAG & evaluation",
    items: ["LlamaIndex", "Pinecone", "Semantic search", "Prompt chains", "Eval harnesses"],
  },
  {
    label: "Product engineering",
    items: ["Next.js", "React", "TypeScript", "Python", "Node.js", "REST APIs"],
  },
  {
    label: "Platform & security",
    items: ["AWS", "Docker", "CI/CD", "JWT", "OWASP"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-block" aria-labelledby="skills-title">
      <div className="page-shell">
        <div className="section-heading">
          <p className="section-kicker">03 / Core skills</p>
          <h2 id="skills-title" className="section-title">The stack behind the work.</h2>
          <p className="section-copy">A focused toolkit for taking AI products from retrieval and orchestration to deployment.</p>
        </div>

        <dl className="skills-grid">
          {CORE_SKILLS.map((group) => (
            <div key={group.label} className="skill-group">
              <dt>{group.label}</dt>
              <dd>
                {group.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
