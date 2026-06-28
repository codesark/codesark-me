"use client";

import * as React from "react";
import Section from "@/components/shared/Section";
import FadeInWhenVisible from "../animation/FadeInWhenVisible";
import ProjectCard from "../projects/ProjectCard";

const projects = [
  {
    title: "ViHi",
    category: "Flagship · Neosenth",
    description:
      "Video-first services platform: post a short video of your problem, get AI-matched professionals, compare bids, and hire. Built on 15+ event-driven Go microservices on Kubernetes with RAG, self-hosted inference, evals, and tool-calling agents.",
    technologies: [
      "Go", "Kubernetes", "Terraform", "Redis", "PostgreSQL", "pgvector",
      "Kafka", "NATS", "ConnectRPC", "gRPC", "Flutter", "Dart", "RAG",
      "vLLM", "LangGraph", "MCP", "Gemini",
    ],
    url: "https://neosenth.com",
    github: "",
    highlighted: true,
  },
  {
    title: "SML Saarthi",
    category: "Built at Zeliot · Fleet telematics",
    description:
      "Tracking, monitoring, alerting, and analytics for SML ISUZU: fleet optimization for buses and trucks, ingesting and processing high-volume vehicle telemetry at fleet scale.",
    technologies: [
      "React", "Node.js", "Kafka", "GraphQL", "Material UI", "Google Maps", "TypeScript",
    ],
    url: "https://pro.smlsaarthi.com",
    github: "",
    highlighted: false,
  },
  {
    title: "Avarta Life",
    category: "Side project · Google Gemini AI Challenge",
    description:
      "Hackathon project for the Google Gemini AI Challenge: a smart-recycling assistant that helps people recycle and reuse waste materials, with location-aware guidance.",
    technologies: [
      "Gemini AI", "Next.js", "Flutter", "FastAPI", "React", "Tailwind CSS", "Google Maps", "RAG", "Firebase",
    ],
    url: "https://avarta.life",
    github: "https://github.com/orgs/Avarta-Life/repositories",
    highlighted: false,
  },
];

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      description="Production systems shipped end-to-end, from AI platforms to enterprise telematics."
    >
      <div className="flex flex-col gap-6">
        <FadeInWhenVisible>
          <ProjectCard {...featured} />
        </FadeInWhenVisible>
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((project, index) => (
            <FadeInWhenVisible
              key={project.title}
              delay={index * 0.1}
              className="h-full"
            >
              <ProjectCard {...project} />
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </Section>
  );
}
