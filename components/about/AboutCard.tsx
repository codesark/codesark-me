import * as React from "react";

export function AboutCard() {
  return (
    <div className="w-full h-full bg-transparent border-none">
      {/* <CardHeader><CardTitle>Who am I?</CardTitle></CardHeader> */}
      <div className="text-md text-gray-300 [&>p]:mb-6 [&>p]:leading-7 [&>p]:text-justify [&>p]:break-words [&>p>strong]:text-gray-500 ">
        <p>
          I&apos;m <b className="text-yellow-600">founder of Neosenth</b>, where
          I&apos;m building <strong>ViHi,</strong> a video-first platform that
          reimagines how people get help and find work. I&apos;ve started my{" "}
          <strong>entrepreneurial journey again</strong>, this time putting my
          expertise in <strong>video</strong> and <strong>AI</strong> to work
          on a new solution: matching real problems (captured on video) with
          the right people, in real time.
        </p>

        <p>
          My background is in <strong>tech and scale</strong>: I&apos;ve built
          <strong> fleet tracking and analytics</strong> so operators could
          monitor thousands of vehicles in real time and reduce downtime, shipped
          an <strong>AI-powered app</strong> that helps people recycle and reuse
          materials, and led engineering teams that turn ideas into products
          people actually use. At my <b className="text-yellow-600">previous startup</b>, we were
          recognized by India&apos;s Finance Minister and built systems that
          process <em>millions of records per minute</em>. That same mix of{" "}
          <strong>technical depth</strong> and{" "}
          <strong>entrepreneurial drive</strong> is what I bring to Neosenth.
        </p>

        <p>
          I&apos;m not just about code – I&apos;m about <strong>impact</strong>.
          Whether it&apos;s architecting <strong>scalable systems</strong>,
          shipping <b className="text-yellow-600">AI-powered products</b>, or
          turning video and AI into tools that solve real problems, I focus on
          technology that makes a difference. With experience in{" "}
          <strong>full-stack development</strong>,{" "}
          <strong>cloud</strong>, and{" "}
          <strong>machine learning</strong>, I aim to build something people
          actually use.
        </p>

        <p>
          If you&apos;re interested in <b className="text-yellow-600">backing</b> or{" "}
          <strong>supporting</strong> this entrepreneurial journey whether as
          an investor, partner, or ally I&apos;d love to connect. Let&apos;s
          build something that matters.
        </p>
      </div>
    </div>
  );
}

export default AboutCard;
