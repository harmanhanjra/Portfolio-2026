// ─────────────────────────────────────────────────────────────
// skills.ts — ONLY technologies verified by the resume (v1 + v2).
// Never add tools the resume doesn't support.
// ─────────────────────────────────────────────────────────────

export interface SkillGroup {
  id: string;
  label: string;
  section: string; // hero node target, e.g. "#skills"
  description: string;
  items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "llm",
    label: "LLM",
    section: "#skills",
    description:
      "Production LLM systems: multi-agent orchestration, RAG pipelines, tool-calling, and evaluation harnesses.",
    items: [
      "Generative AI",
      "OpenAI API",
      "Anthropic API",
      "Google Gemini API",
      "Hugging Face",
      "LangChain",
      "LlamaIndex",
      "CrewAI",
      "MCP Servers",
      "Pinecone",
      "RAG Pipelines",
      "Multi-Agent Systems",
      "Agentic Workflows",
      "Prompt Engineering",
      "Prompt Chaining",
      "Evaluation Harnesses",
      "Structured Outputs",
      "Tool-Calling",
      "ReAct",
      "Chain-of-Thought",
      "LLM Fine-tuning",
    ],
  },
  {
    id: "rag",
    label: "RAG",
    section: "#case-docqa",
    description:
      "Retrieval pipelines over financial and research documents with dynamic context management.",
    items: [
      "Vector Databases",
      "Pinecone",
      "LlamaIndex",
      "Semantic Search",
      "Chunking & Retrieval",
      "Dynamic Context Management",
    ],
  },
  {
    id: "agents",
    label: "Agents",
    section: "#case-nexus",
    description:
      "Multi-agent platforms with per-agent model routing, streaming, and grounded search.",
    items: [
      "CrewAI",
      "LangChain Agents",
      "MCP Servers",
      "Model Routing",
      "SSE Token Streaming",
      "Search Grounding",
      "Semantic Memory",
    ],
  },
  {
    id: "automation",
    label: "Automation",
    section: "#automation",
    description:
      "AI-assisted automation systems and API orchestration for real business workflows.",
    items: ["n8n", "Zapier", "LLM Agent Pipelines", "API Orchestration", "HubSpot", "Calendly"],
  },
  {
    id: "apis",
    label: "APIs",
    section: "#fullstack",
    description:
      "Secure backends and integrations serving production traffic on every engagement.",
    items: [
      "REST APIs",
      "GraphQL",
      "JWT Auth",
      "Node.js",
      "Express.js",
      "Flask",
      "Secure API Integration",
      "OWASP-aligned API Security",
    ],
  },
  {
    id: "fullstack",
    label: "Full Stack",
    section: "#fullstack",
    description:
      "4+ years shipping web applications and AI-powered tools end to end.",
    items: [
      "Python",
      "JavaScript (ES6+)",
      "TypeScript",
      "Java",
      "React.js",
      "Angular",
      "Next.js",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Redux",
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    section: "#experience",
    description: "AWS Certified. Containerized, CI-tested, production deployments.",
    items: [
      "AWS (Certified)",
      "Azure",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Linux",
      "Vercel",
    ],
  },
  {
    id: "security",
    label: "Security",
    section: "#education",
    description:
      "MSc Cybersecurity (in progress) — focus on AI/agent security and adversarial robustness.",
    items: [
      "JWT Authentication",
      "Encrypted Data Storage",
      "OWASP Top 10",
      "Agent Security",
      "Adversarial Robustness",
    ],
  },
];

export const DATA_ML = [
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
  "Keras",
  "XGBoost",
  "SpaCy",
  "NLTK",
  "NLP",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "SQL",
  "Text Classification",
  "Named Entity Recognition",
  "Sentiment Analysis",
];

export const DATABASES = ["PostgreSQL", "MongoDB", "MySQL", "SQL Server", "Pinecone (vector)"];
