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
          in <strong>Docker</strong>, <strong>Kubernetes</strong>, and{" "}
          <strong>CI/CD pipelines</strong> using <strong>Jenkins</strong> and{" "}
          <strong>GitHub Actions</strong>, with extensive experience across{" "}
          <strong>AWS</strong>, <strong>GCP</strong>, and <strong>Azure</strong>
          . My proficiency in <strong>Linux</strong> and{" "}
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
          frameworks like <strong>Express</strong>, <strong>Apollo</strong>,{" "}
          <strong>FastAPI</strong>, and <strong>Spring Boot</strong>. I&lsquo;m
          experienced with <strong>WebRTC</strong> and{" "}
          <strong>Websockets</strong> for real-time applications. 🌐
        </p>

        <p>
          In the realm of <b className="text-yellow-600">machine learning</b>,
          I&lsquo;m proficient with frameworks like <strong>PyTorch</strong> and
          data analysis tools such as <strong>Pandas</strong>. This expertise
          allows me to integrate AI capabilities into applications and derive
          insights from complex datasets. 🤖
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
