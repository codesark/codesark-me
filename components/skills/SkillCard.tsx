import * as React from "react";

export interface ISkillCardProps {}

export default function SkillCard(props: ISkillCardProps) {
  return (
    <div className="w-full">
      <div className="text-md text-gray-300 [&>p]:mb-6 [&>p]:leading-7 [&>p]:text-justify [&>p]:break-words [&>p>strong]:text-gray-500 ">
        <p>
          As a <b className="text-yellow-600">software engineer</b>, I excel in{" "}
          <strong>JavaScript</strong>, <strong>TypeScript</strong>,{" "}
          <strong>React.js</strong>, and <strong>Node.js</strong>. My toolkit
          extends to <strong>Java</strong>, <strong>Python</strong> and{" "}
          <strong>Go</strong>, underpinned by strong <strong>algorithm</strong>{" "}
          and <strong>data structure</strong> foundations. I&lsquo;m adept at
          crafting <em>efficient, scalable solutions</em> across various
          programming paradigms. 💻
        </p>

        <p>
          In <b className="text-yellow-600">cloud and DevOps</b>, I specialize
          in <strong>Docker</strong>, <strong>Kubernetes</strong>,{" "}
          <strong>Terraform</strong>, and <strong>CI/CD pipelines</strong> using{" "}
          <strong>Jenkins</strong> and <strong>GitHub Actions</strong>, with
          extensive experience across <strong>AWS</strong>,{" "}
          <strong>GCP</strong>, and <strong>Azure</strong>. My proficiency in{" "}
          <strong>Linux</strong> and{" "}
          <strong>networking</strong> ensures robust system architectures and
          seamless deployments. ☁️
        </p>

        <p>
          <b className="text-yellow-600">Data management</b> is another forte,
          encompassing both <strong>SQL</strong> (MySQL, PostgreSQL) and{" "}
          <strong>NoSQL</strong> (Redis, MongoDB) databases. I&lsquo;m also
          versed in <strong>Elasticsearch</strong> and <strong>Neo4j</strong>,
          enabling me to design <em>sophisticated data solutions</em> specific
          to project needs. 📊
        </p>
        <p>
          My <b className="text-yellow-600">web development</b> skills cover{" "}
          <strong>RESTful</strong> and <strong>GraphQL</strong> APIs, utilizing
          frameworks like <strong>Express</strong>, <strong>Apollo</strong>,
          and <strong>FastAPI</strong>. I&lsquo;m experienced with{" "}
          <strong>WebRTC</strong> and{" "}
          <strong>Websockets</strong> for real-time applications. 🌐
        </p>

        <p>
          In <b className="text-yellow-600">AI and MLOps</b>, I work on the
          platform around LLMs: <strong>RAG</strong> pipelines with chunking,
          hybrid search, and reranking; automated <strong>evals</strong> (RAGAS,
          Langfuse) as a CI quality gate; <strong>LLM observability</strong> and
          tracing; <strong>self-hosted inference</strong> with vLLM alongside
          hosted models like Gemini; vector search with <strong>pgvector</strong>{" "}
          and <strong>Qdrant</strong>; and <strong>tool-calling agents</strong>{" "}
          built with LangGraph, the Claude Agent SDK, and MCP. I focus on
          reliability and cost, not demos. 🤖
        </p>

        <p>
          Beyond technical skills, I bring strong{" "}
          <b className="text-yellow-600">leadership</b>,{" "}
          <strong>problem-solving</strong>, and <strong>communication</strong>{" "}
          abilities. My background in <strong>ethical hacking</strong> adds a
          security-conscious perspective to my work, while my passion for{" "}
          <strong>electronics</strong> keeps me at the forefront of
          technological advancements. 🌟
        </p>
      </div>
    </div>
  );
}
