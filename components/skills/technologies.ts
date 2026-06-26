import TypescriptOriginal from "devicons-react/lib/icons/TypescriptOriginal";
import JavascriptOriginal from "devicons-react/lib/icons/JavascriptOriginal";
import ReactOriginal from "devicons-react/lib/icons/ReactOriginal";
import NodejsOriginal from "devicons-react/lib/icons/NodejsOriginal";
import PythonOriginal from "devicons-react/lib/icons/PythonOriginal";
import FastapiOriginal from "devicons-react/lib/icons/FastapiOriginal";
import NextjsOriginal from "devicons-react/lib/icons/NextjsOriginal";
import TailwindcssOriginal from "devicons-react/lib/icons/TailwindcssOriginal";
import GoOriginal from "devicons-react/lib/icons/GoOriginal";
import DockerOriginal from "devicons-react/lib/icons/DockerOriginal";
import KubernetesOriginal from "devicons-react/lib/icons/KubernetesOriginal";
import GraphqlPlain from "devicons-react/lib/icons/GraphqlPlain";
import PostgresqlOriginal from "devicons-react/lib/icons/PostgresqlOriginal";
import GitOriginal from "devicons-react/lib/icons/GitOriginal";
import AmazonwebservicesOriginalWordmark from "devicons-react/lib/icons/AmazonwebservicesOriginalWordmark";
import GooglecloudOriginal from "devicons-react/lib/icons/GooglecloudOriginal";
import RedisOriginal from "devicons-react/lib/icons/RedisOriginal";
import LinuxOriginal from "devicons-react/lib/icons/LinuxOriginal";
import JenkinsOriginal from "devicons-react/lib/icons/JenkinsOriginal";
import FlutterOriginal from "devicons-react/lib/icons/FlutterOriginal";
import ApachekafkaOriginal from "devicons-react/lib/icons/ApachekafkaOriginal";
import GrpcOriginal from "devicons-react/lib/icons/GrpcOriginal";
import DartOriginal from "devicons-react/lib/icons/DartOriginal";
import PytorchOriginal from "devicons-react/lib/icons/PytorchOriginal";

export const technologies = [
  {
    name: "Go (Golang)",
    icon: GoOriginal,
    description:
      "Go is a statically typed, compiled language I use for event-driven microservices.",
  },
  {
    name: "Python",
    icon: PythonOriginal,
    description:
      "Python powers my AI services, data pipelines, and tooling.",
  },
  {
    name: "TypeScript",
    icon: TypescriptOriginal,
    description:
      "TypeScript adds static types to JavaScript for safer services and UIs.",
  },
  {
    name: "JavaScript",
    icon: JavascriptOriginal,
    description: "JavaScript is the language of the web.",
  },
  {
    name: "Node.js",
    icon: NodejsOriginal,
    description:
      "Node.js is a runtime for building scalable server-side applications.",
  },
  {
    name: "FastAPI",
    icon: FastapiOriginal,
    description: "FastAPI is a high-performance Python framework for building APIs.",
  },
  {
    name: "React",
    icon: ReactOriginal,
    description: "React is a JavaScript library for building user interfaces.",
  },
  {
    name: "Next.js",
    icon: NextjsOriginal,
    description:
      "Next.js is a React framework for server-side rendering and static sites.",
  },
  {
    name: "Tailwind CSS",
    icon: TailwindcssOriginal,
    description:
      "Tailwind CSS is a utility-first CSS framework for building UIs fast.",
  },
  {
    name: "PostgreSQL",
    icon: PostgresqlOriginal,
    description:
      "PostgreSQL is an open-source relational database (with PostGIS and pgvector).",
  },
  {
    name: "pgvector",
    icon: PostgresqlOriginal,
    description: "pgvector adds vector similarity search to PostgreSQL.",
  },
  {
    name: "Redis",
    icon: RedisOriginal,
    description: "Redis is an in-memory key-value store for caching and queues.",
  },
  {
    name: "GraphQL",
    icon: GraphqlPlain,
    description: "GraphQL is a query language and runtime for APIs.",
  },
  {
    name: "gRPC",
    icon: GrpcOriginal,
    description: "gRPC is a high-performance, Protobuf-based RPC framework.",
  },
  {
    name: "ConnectRPC",
    icon: GrpcOriginal,
    description: "ConnectRPC is a simple, Protobuf-based RPC framework.",
  },
  {
    name: "Kafka",
    icon: ApachekafkaOriginal,
    description: "Apache Kafka is a distributed event-streaming platform.",
  },
  {
    name: "NATS",
    icon: ApachekafkaOriginal,
    description: "NATS JetStream is a lightweight, high-performance eventing system.",
  },
  {
    name: "Docker",
    icon: DockerOriginal,
    description:
      "Docker packages and runs applications in containers.",
  },
  {
    name: "Kubernetes",
    icon: KubernetesOriginal,
    description:
      "Kubernetes automates deployment, scaling, and management of containers.",
  },
  {
    name: "Terraform",
    icon: KubernetesOriginal,
    description:
      "Terraform is infrastructure-as-code for provisioning multi-cloud infrastructure.",
  },
  {
    name: "Temporal",
    icon: GoOriginal,
    description:
      "Temporal orchestrates durable, fault-tolerant workflows (used for network automation at Lumen).",
  },
  {
    name: "Observability (Grafana, Loki)",
    icon: LinuxOriginal,
    description:
      "Grafana, Loki, and VictoriaMetrics for metrics, logs, and dashboards across the platform.",
  },
  {
    name: "AWS",
    icon: AmazonwebservicesOriginalWordmark,
    description: "Amazon Web Services (AWS) is a comprehensive cloud platform.",
  },
  {
    name: "Google Cloud",
    icon: GooglecloudOriginal,
    description: "Google Cloud Platform (GCP), including GKE for Kubernetes.",
  },
  {
    name: "Linux",
    icon: LinuxOriginal,
    description: "Linux is a Unix-like operating system.",
  },
  {
    name: "Git",
    icon: GitOriginal,
    description: "Git is a distributed version control system.",
  },
  {
    name: "CI/CD",
    icon: JenkinsOriginal,
    description: "Continuous integration and delivery with GitHub Actions and Jenkins.",
  },
  {
    name: "RAG",
    icon: PytorchOriginal,
    description:
      "Retrieval-Augmented Generation grounds LLM responses in retrieved context.",
  },
  {
    name: "vLLM",
    icon: PytorchOriginal,
    description:
      "vLLM is a high-throughput inference and serving engine for self-hosted LLMs.",
  },
  {
    name: "LangGraph",
    icon: PytorchOriginal,
    description:
      "LangGraph builds stateful, multi-step tool-calling agents.",
  },
  {
    name: "MCP",
    icon: GrpcOriginal,
    description:
      "Model Context Protocol connects agents to tools and data.",
  },
  {
    name: "Qdrant",
    icon: RedisOriginal,
    description: "Qdrant is a vector database for similarity search and retrieval.",
  },
  {
    name: "Evals (RAGAS, Langfuse)",
    icon: PytorchOriginal,
    description:
      "Automated LLM evaluation and observability, run as a CI quality gate.",
  },
  {
    name: "Gemini",
    icon: GooglecloudOriginal,
    description: "Gemini is Google's family of multimodal generative AI models.",
  },
  {
    name: "Flutter",
    icon: FlutterOriginal,
    description: "Flutter is a cross-platform mobile app framework.",
  },
  {
    name: "Dart",
    icon: DartOriginal,
    description: "Dart is the language behind Flutter.",
  },
];
