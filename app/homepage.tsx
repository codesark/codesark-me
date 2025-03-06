"use client";
import About from "@/components/homepage-sections/About";
import Blog from "@/components/homepage-sections/Blog";
import Hero from "@/components/homepage-sections/Hero";
import Projects from "@/components/homepage-sections/Projects";
import Skills from "@/components/homepage-sections/Skills";
import * as React from "react";

export interface IHomepageProps {}

export default function Homepage(props: IHomepageProps) {
  const [isHydrated, setIsHydrated] = React.useState(false);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

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
        <Blog />
      </section>
    </>
  );
}
