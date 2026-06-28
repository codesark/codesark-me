import type { ComponentType } from "react";

// Real brand icons (devicons): only used where an accurate logo exists.
import GoOriginal from "devicons-react/lib/icons/GoOriginal";
import PythonOriginal from "devicons-react/lib/icons/PythonOriginal";
import TypescriptOriginal from "devicons-react/lib/icons/TypescriptOriginal";
import JavascriptOriginal from "devicons-react/lib/icons/JavascriptOriginal";
import NodejsOriginal from "devicons-react/lib/icons/NodejsOriginal";
import FastapiOriginal from "devicons-react/lib/icons/FastapiOriginal";
import ReactOriginal from "devicons-react/lib/icons/ReactOriginal";
import NextjsOriginal from "devicons-react/lib/icons/NextjsOriginal";
import TailwindcssOriginal from "devicons-react/lib/icons/TailwindcssOriginal";
import PostgresqlOriginal from "devicons-react/lib/icons/PostgresqlOriginal";
import RedisOriginal from "devicons-react/lib/icons/RedisOriginal";
import GraphqlPlain from "devicons-react/lib/icons/GraphqlPlain";
import GrpcOriginal from "devicons-react/lib/icons/GrpcOriginal";
import ApachekafkaOriginal from "devicons-react/lib/icons/ApachekafkaOriginal";
import NatsOriginal from "devicons-react/lib/icons/NatsOriginal";
import DockerOriginal from "devicons-react/lib/icons/DockerOriginal";
import KubernetesOriginal from "devicons-react/lib/icons/KubernetesOriginal";
import TerraformOriginal from "devicons-react/lib/icons/TerraformOriginal";
import HelmOriginal from "devicons-react/lib/icons/HelmOriginal";
import AmazonwebservicesOriginalWordmark from "devicons-react/lib/icons/AmazonwebservicesOriginalWordmark";
import GooglecloudOriginal from "devicons-react/lib/icons/GooglecloudOriginal";
import CloudflareOriginal from "devicons-react/lib/icons/CloudflareOriginal";
import LinuxOriginal from "devicons-react/lib/icons/LinuxOriginal";
import GitOriginal from "devicons-react/lib/icons/GitOriginal";
import GithubactionsOriginal from "devicons-react/lib/icons/GithubactionsOriginal";
import GrafanaOriginal from "devicons-react/lib/icons/GrafanaOriginal";
import PytorchOriginal from "devicons-react/lib/icons/PytorchOriginal";
import FlutterOriginal from "devicons-react/lib/icons/FlutterOriginal";
import DartOriginal from "devicons-react/lib/icons/DartOriginal";

export type DeviconType = ComponentType<{ size?: number; className?: string }>;

export interface Tech {
  name: string;
  description: string;
  /** Accurate brand icon. Omit when no real logo exists; a monogram is shown instead. */
  icon?: DeviconType;
  /** Monogram label used when there's no brand icon (keeps the grid consistent, never a wrong logo). */
  mono?: string;
  /** Tint (HSL hue, sat%, light%) for the monogram chip. */
  tint?: string;
}

export interface SkillGroup {
  category: string;
  blurb: string;
  items: Tech[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    blurb: "Day-to-day for services, tooling, and AI pipelines.",
    items: [
      { name: "Go", icon: GoOriginal, description: "Primary language for event-driven microservices." },
      { name: "Python", icon: PythonOriginal, description: "AI services, data pipelines, and tooling." },
      { name: "TypeScript", icon: TypescriptOriginal, description: "Type-safe services and front-ends." },
      { name: "JavaScript", icon: JavascriptOriginal, description: "The language of the web." },
      { name: "Node.js", icon: NodejsOriginal, description: "Runtime for scalable server-side apps." },
    ],
  },
  {
    category: "AI / LLM Platform",
    blurb: "The platform and operations layer around LLMs, built for reliability and cost, not demos.",
    items: [
      { name: "RAG", mono: "RAG", tint: "262 80% 66%", description: "Retrieval-Augmented Generation: chunking, hybrid search, reranking." },
      { name: "vLLM", mono: "vL", tint: "200 90% 60%", description: "High-throughput engine for self-hosted LLM inference." },
      { name: "LangGraph", mono: "LG", tint: "150 60% 55%", description: "Stateful, multi-step tool-calling agents." },
      { name: "MCP", mono: "MCP", tint: "24 90% 60%", description: "Model Context Protocol: connects agents to tools and data." },
      { name: "Evals (RAGAS · Langfuse)", mono: "Ev", tint: "330 75% 65%", description: "Automated LLM evaluation and tracing, run as a CI quality gate." },
      { name: "pgvector", mono: "pgv", tint: "204 70% 53%", description: "Vector similarity search inside PostgreSQL." },
      { name: "Qdrant", mono: "Qd", tint: "350 80% 62%", description: "Vector database for similarity search and retrieval." },
      { name: "Gemini", mono: "Gem", tint: "217 89% 61%", description: "Google's multimodal models, used alongside self-hosted inference." },
      { name: "PyTorch", icon: PytorchOriginal, description: "Deep-learning framework underpinning model work." },
    ],
  },
  {
    category: "Backend & Data",
    blurb: "Event-driven services, APIs, durable workflows, and storage.",
    items: [
      { name: "gRPC", icon: GrpcOriginal, description: "High-performance, Protobuf-based RPC." },
      { name: "ConnectRPC", mono: "cR", tint: "210 9% 60%", description: "Simple, Protobuf-based RPC over HTTP." },
      { name: "GraphQL", icon: GraphqlPlain, description: "Query language and runtime for APIs." },
      { name: "FastAPI", icon: FastapiOriginal, description: "High-performance Python API framework." },
      { name: "Kafka", icon: ApachekafkaOriginal, description: "Distributed event-streaming platform." },
      { name: "NATS", icon: NatsOriginal, description: "Lightweight, high-performance eventing (JetStream)." },
      { name: "Temporal", mono: "Tp", tint: "0 0% 75%", description: "Durable, fault-tolerant workflow orchestration." },
      { name: "PostgreSQL", icon: PostgresqlOriginal, description: "Relational database (with PostGIS and pgvector)." },
      { name: "Redis", icon: RedisOriginal, description: "In-memory store for caching and queues." },
    ],
  },
  {
    category: "Cloud & Infra",
    blurb: "Multi-cloud, containerized, and observable by default.",
    items: [
      { name: "Kubernetes", icon: KubernetesOriginal, description: "Container orchestration (GKE in production)." },
      { name: "Docker", icon: DockerOriginal, description: "Packages and runs apps in containers." },
      { name: "Terraform", icon: TerraformOriginal, description: "Infrastructure-as-code across GCP, AWS, and Cloudflare." },
      { name: "Helm", icon: HelmOriginal, description: "Package manager for Kubernetes deployments." },
      { name: "GCP", icon: GooglecloudOriginal, description: "Google Cloud, including GKE." },
      { name: "AWS", icon: AmazonwebservicesOriginalWordmark, description: "Amazon Web Services cloud platform." },
      { name: "Cloudflare", icon: CloudflareOriginal, description: "Edge networking, DNS, and Workers." },
      { name: "CI/CD", icon: GithubactionsOriginal, description: "Continuous delivery with GitHub Actions." },
      { name: "Observability", icon: GrafanaOriginal, description: "Grafana, Loki, and VictoriaMetrics for metrics, logs, and dashboards." },
      { name: "Linux", icon: LinuxOriginal, description: "Unix-like operating system foundation." },
      { name: "Git", icon: GitOriginal, description: "Distributed version control." },
    ],
  },
  {
    category: "Mobile",
    blurb: "Cross-platform clients for shipped products.",
    items: [
      { name: "Flutter", icon: FlutterOriginal, description: "Cross-platform mobile app framework." },
      { name: "Dart", icon: DartOriginal, description: "The language behind Flutter." },
    ],
  },
];

// Flat lookup kept for components that reference a technology by name (e.g. ProjectCard).
export const technologies: Tech[] = skillGroups.flatMap((g) => g.items);
