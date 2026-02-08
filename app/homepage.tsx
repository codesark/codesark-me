"use client";
import About from "@/components/homepage-sections/About";
import Blog from "@/components/homepage-sections/Blog";
import Hero from "@/components/homepage-sections/Hero";
import Projects from "@/components/homepage-sections/Projects";
import Skills from "@/components/homepage-sections/Skills";
import Footer from "@/components/footer/Footer";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";
import type { BlogPost } from "@/lib/blog";
import * as React from "react";

export interface IHomepageProps {
  posts?: BlogPost[];
}

export default function Homepage(props: IHomepageProps) {
  const [isHydrated, setIsHydrated] = React.useState(false);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Scroll to hash target when landing with a hash (e.g. /#blog from "Back to Blog")
  React.useEffect(() => {
    if (!isHydrated) return;
    const hash = typeof window !== "undefined" ? window.location.hash.slice(1) : "";
    if (!hash) return;
    const timer = window.setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
    return () => window.clearTimeout(timer);
  }, [isHydrated]);

  return !isHydrated ? (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-20 h-20 animate-spin rounded-full border-4 border-solid border-slate-500 border-t-transparent">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  ) : (
    <>
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-start">
        <About />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="blog" className="snap-start">
        <Blog posts={props.posts ?? []} />
      </section>
      <FadeInWhenVisible delay={0.1}>
        <Footer />
      </FadeInWhenVisible>
    </>
  );
}
