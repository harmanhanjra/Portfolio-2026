// ─────────────────────────────────────────────────────────────
// experience.ts — VERIFIED roles only. Copy kept concise; details on page.
// ─────────────────────────────────────────────────────────────

export interface Experience {
  company: string;
  position: string;
  dates: string;
  location: string;
  type: string;
  technologies: string[];
  achievements: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    company: "Reality AI Labs",
    position: "Generative AI Engineer (Open-Source Contributor)",
    dates: "Dec 2024 – Jul 2025",
    location: "London (Remote)",
    type: "Open Source",
    technologies: ["LangChain", "Hugging Face Transformers", "LlamaIndex", "Anthropic API", "OpenAI API"],
    achievements: [
      "Architected multi-step agentic pipelines for document intelligence and diligence extraction, speeding up unstructured-source processing for investment teams.",
      "Built evaluation harnesses and prompt-chaining pipelines that raised end-to-end agent task completion to 95%+.",
      "Integrated Anthropic and OpenAI APIs into production tooling — LP reporting automation and IC prep material generation.",
      "Contributed LlamaIndex-based RAG pipeline and agentic reasoning modules to open-source generative AI frameworks.",
      "Engineered prompt-chaining pipelines that improved model output accuracy by 22%; optimized GPU training workflows, boosting inference speed by 30%.",
    ],
  },
  {
    company: "NextGen AI",
    position: "AI / Machine Learning Engineer Intern",
    dates: "Sep 2024 – Nov 2024",
    location: "India",
    type: "Internship",
    technologies: ["TensorFlow", "Scikit-learn", "SpaCy", "NLTK", "REST APIs"],
    achievements: [
      "Built and deployed ML classification models and structured data extraction pipelines integrated into downstream REST API workflows.",
      "Built NLP pipelines for document intelligence, entity extraction, and fund material summarization — cutting analyst document review time.",
      "Automated data preprocessing and feature engineering workflows, reducing manual effort by 40%.",
    ],
  },
  {
    company: "Freelance",
    position: "Full Stack Developer",
    dates: "Jan 2021 – Present",
    location: "Remote",
    type: "Freelance",
    technologies: ["React", "Node.js", "Express", "MongoDB", "LangChain", "OpenAI APIs"],
    achievements: [
      "Delivered 10+ web applications and AI-powered automation tools; multiple engagements included LLM integrations for content generation and data extraction.",
      "Built LLM-powered document processing pipelines for financial services clients — automating extraction from investment memos, contracts, and reports.",
      "Implemented JWT authentication, encrypted data storage, and OWASP Top 10-aligned API security on every engagement.",
      "Developed secure, scalable backends supporting 5,000+ active users.",
    ],
  },
  {
    company: "Webtech Institute",
    position: "Digital Marketing & Automation Specialist",
    dates: "Jul 2022 – Dec 2023",
    location: "India",
    type: "Full-time",
    technologies: ["Python", "Automation", "Analytics Dashboards", "SEO"],
    achievements: [
      "Built AI-assisted automation systems and analytics dashboards (Python), reducing reporting workflow time.",
      "Led SEO strategy and paid advertising campaigns, increasing client conversions.",
    ],
  },
];

export interface Venture {
  name: string;
  tagline: string;
  description: string;
  technologies: string[];
}

export const VENTURES: Venture[] = [
  {
    name: "Harman AI Labs",
    tagline: "AI automation agency for SMBs",
    description:
      "Demo-ready n8n automation system: multi-channel lead intake, HubSpot integration, Calendly booking, AI-summarized lead qualification, and automated follow-up sequencing.",
    technologies: ["n8n", "HubSpot", "Calendly", "LLM Pipelines"],
  },
  {
    name: "QuantPunjab",
    tagline: "Algorithmic trading systems",
    description:
      "Python XAUUSD trading bot using Smart Money Concepts analysis plus a TradingView Pine Script v5 signal indicator with dynamic SL/TP; engineered a 10-layer MQL5 scalping EA (HTF trend filter, RSI, MACD, ADX, ATR-dynamic SL/TP, session filtering, trade scoring, circuit breaker).",
    technologies: ["Python", "Pine Script v5", "MQL5", "Smart Money Concepts"],
  },
  {
    name: "BAAG",
    tagline: "Punjabi-culture-rooted streetwear brand",
    description:
      "Built and audited a Shopify storefront with GraphQL-based catalog/SKU management via Shopify MCP.",
    technologies: ["Shopify", "GraphQL", "Shopify MCP"],
  },
];

export const EDUCATION = [
  {
    school: "Arden University Berlin",
    degree: "MSc Cybersecurity — currently pursuing",
    detail: "Focus: AI/agent security and adversarial robustness",
  },
  {
    school: "Chitkara University",
    degree: "Bachelor of Computer Applications (BCA)",
    detail: "2021",
  },
];

export const CERTIFICATIONS = [
  "AWS Certified Developer – Associate",
  "MongoDB Certified Developer",
  "LangChain & LLM Application Development (DeepLearning.AI)",
  "AI & ML for Business (Coursera)",
];
