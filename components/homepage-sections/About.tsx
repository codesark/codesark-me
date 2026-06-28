"use client";

import * as React from "react";
import { Briefcase, Compass, MapPin, Sparkles, Rocket, Award } from "lucide-react";
import Section from "@/components/shared/Section";
import FadeInWhenVisible from "../animation/FadeInWhenVisible";
import AboutCard from "../about/AboutCard";

const glance = [
  { icon: Briefcase, label: "Role", value: "Senior Software Engineer & Tech Lead" },
  { icon: Compass, label: "Focus", value: "AI platforms & event-driven backends" },
  { icon: Rocket, label: "Currently", value: "Co-founder at Neosenth, building ViHi" },
  { icon: MapPin, label: "Based in", value: "Bengaluru, India" },
  { icon: Award, label: "Recognition", value: "Work recognized by India's Finance Minister" },
  { icon: Sparkles, label: "Open to", value: "AI-platform · Platform / Backend · FDE roles" },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="I build platforms and the AI that runs on them"
      description="Senior engineer and tech lead who turns messy, real-world requirements into reliable production systems."
    >
      <div className="grid lg:grid-cols-[1.6fr_1fr] gap-8 lg:gap-12 items-start">
        <FadeInWhenVisible>
          <AboutCard />
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.1}>
          <div className="rounded-2xl border border-slate-800 bg-white/[0.02] p-6">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gray-400 mb-5">
              At a glance
            </h3>
            <dl className="space-y-5">
              {glance.map((item) => (
                <div key={item.label} className="flex gap-3.5">
                  <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="size-4" aria-hidden />
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-gray-500">
                      {item.label}
                    </dt>
                    <dd className="text-sm text-gray-200 mt-0.5">{item.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </FadeInWhenVisible>
      </div>
    </Section>
  );
}
