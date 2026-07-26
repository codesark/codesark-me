"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, FileText, MapPin } from "lucide-react";
import SocialIcons from "../socials/SocialIcons";
import TerminalTicker from "../hero/TerminalTicker";
import { siteData } from "@/lib/siteData";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/4 size-[28rem] rounded-full bg-primary/10 blur-3xl"
      />
      <div className="section-shell relative grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          animate="visible"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            {siteData.availability}
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display font-bold tracking-tight"
          >
            <span className="block text-4xl sm:text-5xl lg:text-6xl text-gray-50">
              {siteData.name}
            </span>
            <span className="mt-2 block text-xl sm:text-2xl lg:text-3xl text-gray-400">
              {siteData.role}
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-lg text-gray-300 leading-relaxed"
          >
            {siteData.tagline}
          </motion.p>
          <motion.p
            variants={item}
            className="mt-3 max-w-xl text-sm text-gray-500 leading-relaxed font-mono"
          >
            RAG · self-hosted inference (vLLM) · automated evals · tool-calling
            agents, running on Go, Kubernetes &amp; Terraform.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-5 flex items-center gap-2 text-sm text-gray-500"
          >
            <MapPin className="size-4 text-primary/80" aria-hidden />
            {siteData.location}
          </motion.div>

          <motion.div
            variants={item}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-1.5 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              View my work
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
            <a
              href={siteData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-slate-700 px-5 py-2.5 text-sm text-gray-200 hover:border-primary/60 hover:text-primary transition-colors"
            >
              <FileText className="size-4" aria-hidden />
              Résumé
            </a>
            <div className="pl-1">
              <SocialIcons />
            </div>
          </motion.div>

          <motion.div variants={item}>
            <TerminalTicker />
          </motion.div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="order-first lg:order-none justify-self-center mb-2 lg:mb-0"
        >
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary/30 to-transparent blur-2xl"
            />
            <div className="relative rounded-full p-[3px] bg-gradient-to-tr from-primary/70 via-primary/20 to-transparent">
              <Image
                src="/profile-pic.png"
                alt="Portrait of Savinay Kumar, Senior Software Engineer & Technical Lead"
                width={300}
                height={300}
                priority
                sizes="(min-width: 1024px) 300px, (min-width: 640px) 176px, 144px"
                className="size-36 sm:size-44 lg:size-[300px] rounded-full bg-background object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <Link
        href="/#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-600 hover:text-primary transition-colors"
      >
        <ArrowDown className="size-6 animate-bounce" aria-hidden />
      </Link>
    </section>
  );
}
