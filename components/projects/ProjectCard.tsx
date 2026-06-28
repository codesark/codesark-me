"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Github, Star } from "lucide-react";
import { technologies, type Tech } from "../skills/technologies";
import TechIcon from "../skills/TechIcon";

const techMap = technologies.reduce((acc, tech) => {
  acc[tech.name] = tech;
  return acc;
}, {} as Record<string, Tech>);

export interface IProjectCardProps {
  title: string;
  category?: string;
  description: string;
  technologies: string[];
  url?: string;
  github?: string;
  highlighted?: boolean;
}

export default function ProjectCard(props: IProjectCardProps) {
  const highlighted = props.highlighted === true;
  const maxTech = highlighted ? 14 : 8;
  const shown = props.technologies.slice(0, maxTech);
  const overflow = props.technologies.length - shown.length;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "tween", duration: 0.2 }}
      className={`group relative flex h-full flex-col rounded-2xl border bg-white/[0.02] p-6 transition-colors ${
        highlighted
          ? "border-primary/40 hover:border-primary/70"
          : "border-slate-800 hover:border-slate-700"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
          <Star className="size-3" aria-hidden />
          Flagship
        </span>
      )}

      <div className="flex items-start justify-between gap-3">
        <div>
          {props.category && (
            <p className="text-xs uppercase tracking-wide text-primary/80 mb-1">
              {props.category}
            </p>
          )}
          <h3 className="font-display text-xl font-bold text-gray-50">
            {props.title}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          {props.github && (
            <Link
              href={props.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${props.title} on GitHub`}
              className="grid size-9 place-items-center rounded-lg border border-slate-700 text-gray-300 hover:border-primary/60 hover:text-primary transition-colors"
            >
              <Github className="size-4" aria-hidden />
            </Link>
          )}
          {props.url && (
            <Link
              href={props.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${props.title}`}
              className="grid size-9 place-items-center rounded-lg bg-primary/15 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          )}
        </div>
      </div>

      <p className="mt-3 flex-1 text-sm text-gray-400 leading-relaxed">
        {props.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {shown.map((name) => {
          const tech = techMap[name] ?? { name, description: name };
          return (
            <span
              key={name}
              className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-white/[0.03] px-2 py-1 text-xs text-gray-400"
            >
              <TechIcon tech={tech} size={15} />
              {name}
            </span>
          );
        })}
        {overflow > 0 && (
          <span className="inline-flex items-center rounded-md border border-slate-800 px-2 py-1 text-xs text-gray-500">
            +{overflow} more
          </span>
        )}
      </div>
    </motion.div>
  );
}
