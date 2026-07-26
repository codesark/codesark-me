// Centralized personal/site data, used by metadata, JSON-LD structured data,
// navigation, hero, and footer so everything stays consistent and DRY.

export const siteData = {
  name: "Savinay Kumar",
  handle: "codesark",
  url: "https://codesark.me",
  email: "codesark.me@gmail.com",
  role: "AI Platform Engineer & Tech Lead",
  location: "Bengaluru, India",
  tagline: "I build production AI systems and the platforms they run on.",
  summary:
    "AI Platform Engineer & Tech Lead designing AI platforms and the distributed systems they run on: RAG pipelines, self-hosted vLLM inference, automated evals, and tool-calling agents over MCP, on event-driven Go and Python services on Kubernetes. I ship production GenAI that is measured, reliable, and cost-aware, not demos.",
  availability: "Open to AI-platform, Platform / Backend & Forward-Deployed roles · Remote or relocation",
  resume: "/Savinay_Kumar_Resume.pdf",
  ogImage: "/og-home.jpg",
  profileImage: "/profile-pic.png",
  worksFor: {
    name: "Neosenth",
    url: "https://neosenth.com",
  },
  // Hero terminal ticker: commands type out, outputs pop in whole.
  terminal: [
    { cmd: "whoami", out: "ai platform engineer & tech lead · 7+ yrs" },
    { cmd: "kubectl get pods -n ai-platform", out: "RAG · inference · agents in production", badge: "READY" },
    { cmd: "cat ~/focus", out: "reliability & cost, not demos" },
  ],
  socials: {
    x: "https://x.com/codesark",
    linkedin: "https://www.linkedin.com/in/codesark",
    github: "https://github.com/codesark",
  },
  // Drives the Person JSON-LD `knowsAbout`: high-signal terms for LLM/search entity understanding.
  knowsAbout: [
    "AI Platform Engineering",
    "Large Language Models (LLMs)",
    "Retrieval-Augmented Generation (RAG)",
    "Self-Hosted LLM Inference (vLLM)",
    "LLM Evaluation (RAGAS, Langfuse)",
    "LLM Observability (Langfuse)",
    "Tool-Calling Agents (MCP)",
    "Vector Search (pgvector, Qdrant)",
    "Python (FastAPI AI Services)",
    "Backend Engineering",
    "Distributed Systems",
    "Go (Golang)",
    "Event-Driven Microservices",
    "Kubernetes",
    "Terraform",
    "Platform Engineering",
    "Cloud Infrastructure (GCP, AWS, Cloudflare)",
    "Observability",
  ],
} as const;

export type SiteData = typeof siteData;
