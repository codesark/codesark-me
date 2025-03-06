"use client";

import * as React from "react";
import FadeInWhenVisible from "../animation/FadeInWhenVisible";
import ProjectCard from "../projects/ProjectCard";

export interface IProjectsProps {}


const projects = [
  {
    title: "SML Saarthi ",
    description: "Tracking, Monitoring, Alerting and Analytics solution for SML ISUZU customer. Fleet Optimization for buses and trucks.",
    technologies: ["React", "Node.js", "Kafka", "GraphQL", "Material UI", "Google Maps", "Typescript"],
    url: "https://pro.smlsaarthi.com",
    github: "",
    images: ["image1.png", "image2.png"],
    features: ["Feature 1", "Feature 2"],
  },
  {
    title: "Avarta Life",
    description: "Smart Recycling App | Gemini AI powered app to help people recycle and reuse waste materials.",
    technologies: ["Gemini AI", "Next.js", "Flutter", "FastAPI", "React", "Tailwind CSS", "Google Maps", "RAG","Firebase"],
    url: "https://avarta.life",
    github: "https://github.com/orgs/Avarta-Life/repositories",
    images: ["image1.png", "image2.png"],
    features: ["Feature 1", "Feature 2"],
  },
  // {
  //   title: "",
  //   description: "Smart Recycling App | Gemini AI powered app to help people recycle and reuse waste materials.",
  //   technologies: ["Gemini AI", "Next.js", "Flutter", "FastAPI", "React", "Tailwind CSS", "Google Maps", "RAG","Firebase"],
  //   url: "https://avarta.life",
  //   github: "https://github.com/orgs/Avarta-Life/repositories",
  //   images: ["image1.png", "image2.png"],
  //   features: ["Feature 1", "Feature 2"],
  // },
]

export default function Projects(props: IProjectsProps) {
  return (
    <div className="relative w-full max-w-screen-xl mx-auto flex flex-col justify-center overflow-hidden">
      <FadeInWhenVisible>
        <h1 className="text-5xl pt-20 py-10 px-5 leading-snug text-center">
          <span className="text-gray-500 font-light">Projects:</span> What
          things I&apos;ve built?
        </h1>
      </FadeInWhenVisible>
      <hr />
      <div className="flex align-items-stretch flex-wrap lg:flex-nowrap gap-4 lg:gap-10 p-5">
        {projects.map((project) => (
          <div key={project.title} className="w-full lg:w-2/3">
            <FadeInWhenVisible className="h-full">
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                url={project.url}
                github={project.github}
                images={project.images}
                features={project.features}
              />
            </FadeInWhenVisible>
          </div>
        ))}
      </div>
    </div>
  );
}
