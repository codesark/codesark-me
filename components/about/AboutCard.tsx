import * as React from "react";

export function AboutCard() {
  return (
    <div className="w-full h-full bg-transparent border-none">
      {/* <CardHeader><CardTitle>Who am I?</CardTitle></CardHeader> */}
      <div className="text-md text-gray-300 [&>p]:mb-6 [&>p]:leading-7 [&>p]:text-justify [&>p]:break-words [&>p>strong]:text-gray-500 ">
        <p>
          <b className="text-yellow-600">Tech innovator</b> and{" "}
          <strong>problem solver</strong> with a knack for turning complex
          challenges into elegant solutions. As a{" "}
          <strong>Senior Software Engineer</strong> and{" "}
          <strong>Team Lead</strong>, I&apos;ve boosted API speeds by{" "}
          <em>500%</em>, scaled systems <em>10x</em>, and led teams to{" "}
          <em>higher productivity</em>.
        </p>

        <p>
          From <b className="text-yellow-600">founding a startup</b> recognized
          by India&apos;s Finance Minister to engineering systems that process{" "}
          <em>millions of records per minute</em>, I blend{" "}
          <strong>technical expertise</strong> with{" "}
          <strong>entrepreneurial drive</strong>. My toolkit spans{" "}
          <strong>full-stack development</strong>,{" "}
          <strong>cloud technologies</strong>, and{" "}
          <strong>performance optimization</strong>, with a proven track record
          in <strong>machine learning</strong> implementations.
        </p>

        <p>
          I&apos;m not just about code – I&apos;m about <strong>impact</strong>.
          Whether it&apos;s slashing load times, architecting{" "}
          <strong>scalable systems</strong>, or delivering{" "}
          <b className="text-yellow-600">AI-powered solutions</b>, I create
          technology that makes a difference. With a background in{" "}
          <strong>ethical hacking</strong> and a passion for{" "}
          <strong>cutting-edge tech</strong>, I bring a unique perspective to
          every project.
        </p>

        <p>
          Ready to build something{" "}
          <b className="text-yellow-600">extraordinary</b>? Let&apos;s connect
          and push the boundaries of what&apos;s possible in tech. 😊
        </p>
      </div>
    </div>
  );
}

export default AboutCard;
