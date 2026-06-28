"use client";

import * as React from "react";
import Link from "next/link";
import { Award, FileText, GraduationCap } from "lucide-react";
import Section from "@/components/shared/Section";
import FadeInWhenVisible from "../animation/FadeInWhenVisible";
import { siteData } from "@/lib/siteData";

interface Role {
  company: string;
  role: string;
  dates: string;
  current?: boolean;
  impact: string;
  award?: string;
}

const roles: Role[] = [
  {
    company: "Neosenth",
    role: "Technical Lead & Co-Founder",
    dates: "2026 to Present",
    current: true,
    impact:
      "Building ViHi, a video-first services platform, on 15+ event-driven Go microservices with an in-house RAG, inference, and agents stack.",
  },
  {
    company: "Lumen Technologies",
    role: "Senior Software Engineer (SDC-II)",
    dates: "2024 to 2026",
    impact:
      "Delivered Colorless and Intent-Based Networking on the NaaS platform; built network-automation workflows with Temporal and Itential.",
  },
  {
    company: "Zeliot",
    role: "Senior Software Engineer (Team Lead)",
    dates: "2023 to 2024",
    impact:
      "Led 10+ engineers and built SML Saarthi, a fleet tracking and analytics product for SML ISUZU, with GenAI/RAG analytics at ~400ms latency.",
  },
  {
    company: "S2T",
    role: "Software Engineer",
    dates: "2021 to 2023",
    impact:
      "Engineered microservices for AI-powered investigation products (WEBINT/OSINT), cutting service latency into the sub-second range.",
  },
  {
    company: "Career Capsule",
    role: "Technical Lead & Co-Founder",
    dates: "2019 to 2021",
    impact:
      "Built a WebRTC live-class platform supporting 100+ concurrent students in a single session.",
    award: "Recognized by India's Finance Minister",
  },
];

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      description="From co-founding in 2019 to senior engineering and technical-lead roles across startups and enterprise."
    >
      <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-start">
        <ol className="relative border-l border-slate-800 ml-2">
          {roles.map((r, i) => (
            <li key={r.company} className="relative pl-8 pb-9 last:pb-0">
              {/* node */}
              <span
                className={`absolute -left-[6.5px] top-1.5 size-3 rounded-full ring-4 ring-background ${
                  r.current ? "bg-primary" : "bg-slate-600"
                }`}
                aria-hidden
              />
              <FadeInWhenVisible delay={i * 0.05}>
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <h3 className="font-display text-lg font-semibold text-gray-50">
                    {r.company}
                  </h3>
                  {r.current && (
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] text-emerald-300 border border-emerald-500/30">
                      Current
                    </span>
                  )}
                  <span className="ml-auto font-mono text-xs text-gray-500">
                    {r.dates}
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-primary/90">{r.role}</p>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed max-w-2xl">
                  {r.impact}
                </p>
                {r.award && (
                  <p className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2.5 py-1 text-xs text-primary">
                    <Award className="size-3.5" aria-hidden />
                    {r.award}
                  </p>
                )}
              </FadeInWhenVisible>
            </li>
          ))}
        </ol>

        {/* Education + résumé link */}
        <FadeInWhenVisible delay={0.1} className="lg:w-64">
          <div className="rounded-2xl border border-slate-800 bg-white/[0.02] p-6">
            <div className="flex items-center gap-2 text-gray-400">
              <GraduationCap className="size-4 text-primary" aria-hidden />
              <span className="text-xs uppercase tracking-wide">Education</span>
            </div>
            <p className="mt-3 text-sm font-semibold text-gray-100">
              B.Tech, Computer Science
            </p>
            <p className="text-sm text-gray-400">
              IIIT Una
            </p>
            <p className="font-mono text-xs text-gray-500 mt-0.5">2017 to 2021</p>

            <a
              href={siteData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm text-gray-200 hover:text-primary transition-colors"
            >
              <FileText className="size-4" aria-hidden />
              Full history (résumé)
            </a>
          </div>
        </FadeInWhenVisible>
      </div>
    </Section>
  );
}
