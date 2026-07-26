import * as React from "react";

export default function SkillCard() {
  return (
    <div className="w-full">
      <div className="text-[15px] text-gray-300 [&>p]:mb-5 [&>p]:leading-7 [&>p>strong]:text-gray-100">
        <p>
          My core is the <strong>AI operations layer</strong>, built mainly in{" "}
          <strong>Python</strong>: <strong>RAG</strong> pipelines (chunking,
          hybrid search, reranking), <strong>self-hosted inference</strong> of
          open-weight models (Llama, Qwen, Mistral) on vLLM plus hosted Gemini,
          automated <strong>evals</strong> (RAGAS, Langfuse) wired into CI, LLM tracing,
          and <strong>tool-calling agents</strong> over MCP. I optimize for
          reliability and cost, not demos.
        </p>
        <p>
          It runs on platforms I build myself: event-driven microservices in{" "}
          <strong>Go</strong> on <strong>Kubernetes</strong>, provisioned with
          multi-cloud <strong>Terraform</strong> across GCP, AWS, and
          Cloudflare, with <strong>gRPC/ConnectRPC</strong>, <strong>Kafka</strong>{" "}
          and <strong>NATS</strong>, <strong>PostgreSQL</strong> and{" "}
          <strong>Redis</strong>, all wired into a full observability stack.
        </p>
        <p>
          I&apos;ve <strong>led teams of 10+ engineers</strong>, mentored 5
          interns, and shipped products end-to-end as a founder, turning
          ambiguous real-world requirements into systems that run in production.
        </p>
      </div>
    </div>
  );
}
