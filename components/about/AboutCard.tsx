import * as React from "react";

export function AboutCard() {
  return (
    <div className="w-full h-full bg-transparent border-none">
      {/* <CardHeader><CardTitle>Who am I?</CardTitle></CardHeader> */}
      <div className="text-md text-gray-300 [&>p]:mb-6 [&>p]:leading-7 [&>p]:text-justify [&>p]:break-words [&>p>strong]:text-gray-500 ">
        <p>
          I&apos;m a <b className="text-yellow-600">senior software engineer and technical lead</b>{" "}
          who builds the platforms AI runs on, and ships the AI on top. Most
          recently I co-founded <strong>Neosenth</strong> and built{" "}
          <strong>ViHi</strong>, a video-first services platform live on the App
          Store and Google Play, from zero to a production system of{" "}
          <strong>15+ services</strong>.
        </p>

        <p>
          My focus is the platform and operations layer around{" "}
          <b className="text-yellow-600">LLMs</b>: <strong>RAG</strong> pipelines
          (chunking, hybrid search, reranking), <strong>self-hosted inference</strong>{" "}
          with vLLM alongside hosted models like Gemini, automated{" "}
          <strong>evals</strong> (RAGAS, Langfuse) wired into CI, LLM tracing and
          observability, and <strong>tool-calling agents</strong> built with
          LangGraph and the Claude Agent SDK over MCP. I care about reliability
          and cost, not demos.
        </p>

        <p>
          Underneath that, I design <b className="text-yellow-600">event-driven
          microservices in Go</b> (plus Python and TypeScript) on{" "}
          <strong>Kubernetes</strong> (GKE), multi-cloud{" "}
          <strong>Terraform</strong> across GCP, AWS, and Cloudflare, with{" "}
          <strong>pgvector</strong> and <strong>Qdrant</strong> for retrieval and
          a full observability stack. Earlier, an ed-tech startup I co-founded
          earned recognition from India&apos;s Finance Minister, and at Zeliot I
          built real-time systems that process{" "}
          <em>high-volume vehicle telemetry at fleet scale</em>.
        </p>

        <p>
          I&apos;ve shipped directly for customers as a{" "}
          <b className="text-yellow-600">founder</b>, turning messy real-world
          requirements into working solutions, and I&apos;ve led teams of{" "}
          <strong>10+ engineers</strong>. Whether it&apos;s an{" "}
          <strong>AI-platform</strong>, <strong>forward-deployed</strong>, or{" "}
          <strong>senior backend</strong> role, I&apos;m interested in building
          technology people actually use. Let&apos;s connect.
        </p>
      </div>
    </div>
  );
}

export default AboutCard;
