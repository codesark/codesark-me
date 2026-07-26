// Centralized personal/site data, used by metadata, JSON-LD structured data,
// navigation, hero, and footer so everything stays consistent and DRY.

export const siteData = {
  name: "Savinay Kumar",
  handle: "codesark",
  url: "https://codesark.me",
  email: "codesark.me@gmail.com",
  role: "Senior Software Engineer & Tech Lead",
  location: "Bengaluru, India",
  tagline: "I build backend platforms and the AI that runs on them.",
  summary:
    "Senior Software Engineer & Tech Lead building backend and AI platforms: RAG, self-hosted LLM inference, automated evals, and tool-calling agents on Go, Kubernetes, and Terraform.",
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
    { cmd: "whoami", out: "senior engineer & tech lead · 7+ yrs" },
    { cmd: "kubectl get pods -n ai-platform", out: "RAG · inference · agents — in production", badge: "READY" },
    { cmd: "cat ~/focus", out: "reliability & cost, not demos" },
  ],
  socials: {
    x: "https://x.com/codesark",
    linkedin: "https://www.linkedin.com/in/codesark",
    github: "https://github.com/codesark",
  },
  // Drives the Person JSON-LD `knowsAbout`: high-signal terms for LLM/search entity understanding.
  knowsAbout: [
    "Backend Engineering",
    "Distributed Systems",
    "Go (Golang)",
    "Event-Driven Microservices",
    "Kubernetes",
    "Terraform",
    "Platform Engineering",
    "AI Platform Engineering",
    "Large Language Models (LLMs)",
    "Retrieval-Augmented Generation (RAG)",
    "Self-Hosted LLM Inference (vLLM)",
    "LLM Evaluation (RAGAS, Langfuse)",
    "Tool-Calling Agents (LangGraph, MCP)",
    "Vector Search (pgvector, Qdrant)",
    "Cloud Infrastructure (GCP, AWS, Cloudflare)",
    "Observability",
  ],
} as const;

export type SiteData = typeof siteData;
