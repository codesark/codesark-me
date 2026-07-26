import * as React from "react";

export function AboutCard() {
  return (
    <div className="w-full h-full bg-transparent border-none">
      <div className="text-md text-gray-300 [&>p]:mb-6 [&>p]:leading-7 [&>p]:text-justify [&>p]:break-words [&>p>strong]:text-gray-500 ">
        <p>
          I&apos;m an <b className="text-yellow-600">AI platform engineer and technical lead</b>{" "}
          who ships production AI end to end. Most recently I co-founded{" "}
          <strong>Neosenth</strong> and shipped <strong>ViHi</strong>, a
          video-first services platform live on the App Store and Google Play,
          building its AI layer from scratch: <strong>RAG on pgvector</strong>,
          Gemini media analysis, and a <strong>Python ML ranking service</strong>.
        </p>

        <p>
          I work mainly in <b className="text-yellow-600">Python</b> for the
          operations layer around <strong>LLMs</strong>: <strong>RAG</strong>{" "}
          pipelines (chunking, hybrid search, reranking),{" "}
          <strong>self-hosted inference</strong> with vLLM alongside hosted
          models like Gemini, automated <strong>evals</strong> (RAGAS, Langfuse)
          wired into CI, LLM tracing and observability, and{" "}
          <strong>tool-calling agents</strong> over MCP. I care about
          reliability and cost, not demos.
        </p>

        <p>
          The platform underneath is mine too: <b className="text-yellow-600">event-driven
          microservices in Go</b> on <strong>Kubernetes</strong> (GKE),
          multi-cloud <strong>Terraform</strong> across GCP, AWS, and
          Cloudflare, with <strong>pgvector</strong> and <strong>Qdrant</strong>{" "}
          for retrieval and a full observability stack. Earlier, an ed-tech
          startup I co-founded earned recognition from India&apos;s Finance
          Minister, and at Zeliot I built real-time systems that process{" "}
          <em>high-volume vehicle telemetry at fleet scale</em>.
        </p>

        <p>
          I&apos;ve shipped directly for customers as a{" "}
          <b className="text-yellow-600">founder</b>, turning messy real-world
          requirements into working solutions, and I&apos;ve led teams of{" "}
          <strong>10+ engineers</strong>. Whether it&apos;s an{" "}
          <strong>AI-platform</strong>, <strong>forward-deployed</strong>, or{" "}
          <strong>platform engineering</strong> role, I&apos;m interested in
          building technology people actually use. Let&apos;s connect.
        </p>
      </div>
    </div>
  );
}

export default AboutCard;
