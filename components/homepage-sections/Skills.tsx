"use client";

import * as React from "react";
import Section from "@/components/shared/Section";
import FadeInWhenVisible from "../animation/FadeInWhenVisible";
import SkillCard from "../skills/SkillCard";
import SkillTagCard from "../skills/SkillTagCard";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I work with"
      description="Depth in backend platforms and the AI systems that run on them, not a checklist of everything I've touched."
      className="bg-white/[0.015]"
    >
      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12 items-start">
        <FadeInWhenVisible className="lg:sticky lg:top-24">
          <SkillCard />
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.1}>
          <SkillTagCard />
        </FadeInWhenVisible>
      </div>
    </Section>
  );
}
