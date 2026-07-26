import About from "@/components/homepage-sections/About";
import Blog from "@/components/homepage-sections/Blog";
import Hero from "@/components/homepage-sections/Hero";
import Experience from "@/components/homepage-sections/Experience";
import Projects from "@/components/homepage-sections/Projects";
import Skills from "@/components/homepage-sections/Skills";
import Contact from "@/components/homepage-sections/Contact";
import Footer from "@/components/footer/Footer";
import ScrollToHash from "@/components/shared/ScrollToHash";
import type { BlogPost } from "@/lib/blog";

export interface IHomepageProps {
  posts?: BlogPost[];
}

export default function Homepage(props: IHomepageProps) {
  return (
    <>
      <ScrollToHash />
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
