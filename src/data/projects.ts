// ─────────────────────────────────────────────────────────────
// projects.ts — VERIFIED projects only. No fake screenshots, stars,
// users, or revenue. Outcomes use resume wording only.
// ─────────────────────────────────────────────────────────────

export interface Project {
  id: string;
  name: string;
  category: string;
  summary?: string;
  problem: string;
  whyItMatters: string;
  architecture: string[];
  technologies: string[];
  built: string[];
  challenges: string;
  solution: string;
  outcome: string;
  github?: string;
  demo?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "nexus-ai",
    name: "Nexus AI",
    category: "AI Agent Operating System",
    summary:
      "Five specialized agents with model routing, shared memory, streaming responses, and cited search results.",
    problem: "Teams juggle disconnected AI tools with no shared memory, routing, or grounded answers.",
    whyItMatters:
      "A single operating layer where specialized agents collaborate — with memory and cited sources — instead of isolated chatbots.",
    architecture: ["USER", "ORCHESTRATOR", "SPECIALIZED AGENTS ×5", "MODEL ROUTING", "TOOLS / SEARCH", "MEMORY", "STREAMING RESPONSE"],
    technologies: ["Next.js 15", "TypeScript", "Google Gemini API", "gemini-embedding-001", "SSE", "Google Search Grounding", "Vercel"],
    built: [
      "Multi-agent platform with 5 specialized agents on per-agent model routing",
      "Real-time SSE token streaming with Google Search grounding and cited sources",
      "Semantic memory layer (gemini-embedding-001) with full conversation/memory API",
      "Zero-config deploy: live on Vercel in under 2 minutes",
    ],
    challenges:
      "Coordinating five agents with different model needs while keeping responses fast, grounded, and stateful across conversations.",
    solution:
      "Per-agent model routing, streaming responses over SSE, search grounding with citations, and an embedding-backed memory API layer.",
    outcome: "Deployable to Vercel in under 2 minutes with zero required config.",
    github: "https://github.com/harmanhanjra/NEXUS-AI-The-Next-Generation-AI-Agent-Operating-System",
    featured: true,
  },
  {
    id: "doc-qa",
    name: "Agentic Document Q&A",
    category: "RAG · Agentic Retrieval",
    summary:
      "Multi-turn retrieval over financial and research documents with tool use and compact, context-aware answers.",
    problem: "Analysts drown in financial and research documents they must read line by line.",
    whyItMatters:
      "Multi-turn Q&A that retrieves, reasons with tools, and manages context — resolving most queries with zero human intervention.",
    architecture: ["DOCUMENT", "INGESTION", "CHUNKING / RETRIVAL", "RAG", "AGENT", "TOOLS", "ANSWER"],
    technologies: ["LangChain", "RAG", "Tool-Calling", "OpenAI APIs", "Vector Search"],
    built: [
      "Multi-turn agentic Q&A over financial and research documents",
      "RAG with tool-calling and dynamic context management",
    ],
    challenges:
      "Long documents overflow context windows while naive chunking loses the thread across follow-up questions.",
    solution:
      "Agentic retrieval loop: the agent decides what to fetch next and compacts context dynamically per turn.",
    outcome: "Autonomously resolved 70% of queries with zero human intervention.",
    featured: true,
  },
  {
    id: "rag-eval",
    name: "RAG Evaluation & Agent Reliability Framework",
    category: "Evaluation Harness",
    summary:
      "A multi-axis scorecard for RAG accuracy, tool-use reliability, and failure-mode coverage across agent workflows.",
    problem: "RAG pipelines fail silently — hallucinations and tool misuse reach users undetected.",
    whyItMatters:
      "Benchmarks accuracy, tool-use reliability, and failure-mode coverage so agent systems can be trusted in production.",
    architecture: ["DATASETS", "RAG VARIANTS", "TOOL-USE PROBES", "FAILURE-MODE SUITE", "SCORECARD"],
    technologies: ["LlamaIndex", "LangChain", "Evaluation Harnesses", "Prompt Chaining"],
    built: [
      "Harness benchmarking RAG accuracy, tool-use reliability, and failure-mode coverage",
      "Coverage across LlamaIndex and LangChain workflows",
    ],
    challenges:
      "Single-metric evals hide tool-use failures and edge-case hallucinations that only appear in multi-step runs.",
    solution:
      "Multi-axis scorecard: accuracy + tool reliability + failure-mode coverage, run against both frameworks.",
    outcome: "Cut hallucination rate meaningfully and raised task completion to 95%+.",
    featured: true,
  },
  {
    id: "prompt-pipeline",
    name: "LLM Prompt Pipeline",
    category: "Document Intelligence",
    problem: "Single-pass prompting produces inconsistent extraction from complex documents.",
    whyItMatters: "Chained prompts with evaluation at each step compound accuracy gains.",
    architecture: ["DOCUMENT", "PROMPT CHAIN", "EVAL GATE", "REFINE", "STRUCTURED OUTPUT"],
    technologies: ["Prompt Chaining", "Structured Outputs", "OpenAI API"],
    built: ["Prompt-chaining system for document intelligence with per-step evaluation"],
    challenges: "Errors compound across chain steps without intermediate checks.",
    solution: "Evaluation gates between steps with structured outputs constraining each handoff.",
    outcome: "22% accuracy improvement over single-pass prompting.",
  },
  {
    id: "nlp-chatbot",
    name: "NLP Support Chatbot",
    category: "Conversational AI",
    problem: "Support queues grow faster than teams can staff them.",
    whyItMatters: "End-to-end chatbot that resolves routine queries instantly and escalates the rest.",
    architecture: ["USER QUERY", "NER + INTENT", "TRANSFORMER REASONING", "RESPONSE / ESCALATE"],
    technologies: ["SpaCy", "Transformers", "Python"],
    built: ["End-to-end chatbot with entity-aware understanding and escalation paths"],
    challenges: "Noisy real-world queries with slang, typos, and multi-intent messages.",
    solution: "SpaCy pipelines for robust entity extraction feeding transformer reasoning.",
    outcome: "Autonomously resolved 70% of support queries, cutting response time by 40%.",
  },
  {
    id: "sales-forecast",
    name: "Sales Forecasting Model",
    category: "Applied ML",
    problem: "A retail client bled cash to overstock and stockouts from gut-feel ordering.",
    whyItMatters: "Reliable forecasts turn inventory from guesswork into a plan.",
    architecture: ["SALES HISTORY", "FEATURE ENGINEERING", "REGRESSION MODEL", "FORECAST API"],
    technologies: ["Scikit-learn", "Pandas", "NumPy", "REST API"],
    built: ["Regression forecasting model with preprocessing pipeline and API delivery"],
    challenges: "Seasonal, sparse retail data that overfits naive models.",
    solution: "Careful feature engineering and regularized regression validated on holdout seasons.",
    outcome: "85% accuracy, reducing inventory forecasting errors by 18%.",
  },
  {
    id: "recommender",
    name: "E-commerce Recommendation Engine",
    category: "Applied ML",
    problem: "Shoppers couldn't discover relevant products in a large catalog.",
    whyItMatters: "Personalization embedded directly into the storefront experience.",
    architecture: ["USER EVENTS", "COLLABORATIVE FILTER", "RANKING", "STOREFRONT WIDGET"],
    technologies: ["Python", "Collaborative Filtering", "Node.js"],
    built: ["Collaborative filtering model embedded into an e-commerce platform"],
    challenges: "Cold-start users and sparse interaction matrices.",
    solution: "Hybrid collaborative signals with popularity priors for new users.",
    outcome: "Serving personalized suggestions to 5,000+ platform users.",
  },
  {
    id: "smb-automation",
    name: "SMB Lead Automation System",
    category: "AI Automation · Harman AI Labs",
    problem: "SMBs lose leads to slow, manual intake and follow-up.",
    whyItMatters: "Every inquiry captured, qualified by AI, booked, and followed up — automatically.",
    architecture: ["MULTI-CHANNEL INTAKE", "n8n ORCHESTRATION", "AI QUALIFICATION", "HUBSPOT + CALENDLY", "FOLLOW-UP SEQUENCE"],
    technologies: ["n8n", "HubSpot", "Calendly", "LLM Pipelines"],
    built: ["Demo-ready n8n system: intake, CRM sync, booking, AI summaries, sequencing"],
    challenges: "Five tools, five APIs, one coherent lead journey with no dropped handoffs.",
    solution: "n8n as the orchestration spine with AI summarization at the qualification step.",
    outcome: "Demo-ready automation covering the full lead lifecycle.",
  },
  {
    id: "quantpunjab",
    name: "QuantPunjab Trading Systems",
    category: "Algorithmic Trading",
    problem: "Discretionary gold scalping is emotional and inconsistent.",
    whyItMatters: "Rule-based systems with risk controls execute the plan without the psychology.",
    architecture: ["SMC ANALYSIS", "SIGNAL ENGINE", "RISK LAYER (SL/TP)", "EXECUTION (MQL5)", "CIRCUIT BREAKER"],
    technologies: ["Python", "Pine Script v5", "MQL5", "TradingView"],
    built: [
      "Python XAUUSD bot using Smart Money Concepts analysis",
      "TradingView Pine Script v5 signal indicator with dynamic SL/TP",
      "10-layer MQL5 scalping EA: HTF trend filter, RSI, MACD, ADX, ATR-dynamic SL/TP, session filtering, trade scoring, circuit breaker",
    ],
    challenges: "Choppy gold sessions destroy naive scalpers; risk must adapt to volatility.",
    solution: "Layered confluence (trend + momentum + volatility) with ATR-dynamic stops and a hard circuit breaker.",
    outcome: "Full signal-to-execution stack across Python, Pine Script, and MQL5.",
  },
];

export const IMPACT = [
  { value: 95, suffix: "%+", label: "Agent Task Completion", note: "Eval harnesses + prompt chaining" },
  { value: 70, suffix: "%", label: "Queries Automated", note: "Zero human intervention" },
  { value: 22, suffix: "%", label: "Accuracy Improvement", note: "Prompt chaining vs single-pass" },
  { value: 10, suffix: "+", label: "Apps & AI Tools Shipped", note: "Production freelance delivery" },
];

export const EXPLORING = [
  "AI/agent security & adversarial robustness (MSc focus)",
  "MCP servers & agent tool ecosystems",
  "GPU inference optimization for LLM serving",
  "Voice + multimodal agent workflows for SMB automation",
];
