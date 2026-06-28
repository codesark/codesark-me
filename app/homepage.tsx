"use client";

import About from "@/components/homepage-sections/About";
import Blog from "@/components/homepage-sections/Blog";
import Hero from "@/components/homepage-sections/Hero";
import Experience from "@/components/homepage-sections/Experience";
import Projects from "@/components/homepage-sections/Projects";
import Skills from "@/components/homepage-sections/Skills";
import Contact from "@/components/homepage-sections/Contact";
import Footer from "@/components/footer/Footer";
import type { BlogPost } from "@/lib/blog";
import * as React from "react";

export interface IHomepageProps {
  posts?: BlogPost[];
}

export default function Homepage(props: IHomepageProps) {
  // Smooth-scroll to a hash target when landing with one (e.g. /#blog from a post).
  // This is a progressive enhancement only; it never gates rendering, so all
  // section content is server-rendered for search engines and LLM crawlers.
  React.useEffect(() => {
    const hash =
      typeof window !== "undefined" ? window.location.hash.slice(1) : "";
    if (!hash) return;
    const timer = window.setTimeout(() => {
      document
        .getElementById(hash)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Blog posts={props.posts ?? []} />
      <Contact />
      <Footer />
    </>
  );
}
