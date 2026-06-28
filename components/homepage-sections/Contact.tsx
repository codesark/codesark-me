"use client";

import * as React from "react";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import Section from "@/components/shared/Section";
import FadeInWhenVisible from "../animation/FadeInWhenVisible";
import ContactCard from "../about/ContactCard";
import { siteData } from "@/lib/siteData";

const links = [
  { icon: Mail, label: "Email", value: siteData.email, href: `mailto:${siteData.email}` },
  { icon: Linkedin, label: "LinkedIn", value: "/in/codesark", href: siteData.socials.linkedin },
  { icon: Github, label: "GitHub", value: "@codesark", href: siteData.socials.github },
  { icon: FileText, label: "Résumé", value: "Download PDF", href: siteData.resume },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something"
      description={siteData.availability + ". The fastest way to reach me is below."}
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <FadeInWhenVisible>
          <div className="space-y-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-slate-800 bg-white/[0.02] p-4 hover:border-primary/40 hover:bg-white/[0.04] transition-colors"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <l.icon className="size-5" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wide text-gray-500">
                    {l.label}
                  </span>
                  <span className="block truncate text-sm text-gray-200">
                    {l.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.1}>
          <ContactCard />
        </FadeInWhenVisible>
      </div>
    </Section>
  );
}
