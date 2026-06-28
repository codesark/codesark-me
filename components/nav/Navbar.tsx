"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/lib/siteData";

const sections = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Blog", id: "blog" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState<string>("");

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lightweight scroll-spy to highlight the section in view.
  React.useEffect(() => {
    const ids = ["hero", ...sections.map((s) => s.id)];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-slate-800/80"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-screen-xl px-5 h-16 flex items-center justify-between">
        <Link
          href="/#hero"
          className="group flex items-center gap-2.5"
          aria-label="Savinay Kumar home"
        >
          <Image
            src="/profile-pic.png"
            alt="Savinay Kumar"
            width={32}
            height={32}
            className="size-8 rounded-full object-cover ring-1 ring-slate-700 group-hover:ring-primary/60 transition"
          />
          <span className="font-mono text-sm text-gray-200 group-hover:text-primary transition-colors">
            codesark
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {sections.map((s) => (
            <Link
              key={s.id}
              href={`/#${s.id}`}
              className={`px-3 py-2 rounded-md text-sm transition-colors ${
                active === s.id
                  ? "text-primary"
                  : "text-gray-400 hover:text-gray-100"
              }`}
            >
              {s.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={siteData.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm px-3.5 py-2 rounded-md border border-slate-700 text-gray-200 hover:border-primary/60 hover:text-primary transition-colors"
          >
            <FileText className="size-4" aria-hidden />
            Resume
          </a>
          <Link
            href="/#contact"
            className="text-sm px-3.5 py-2 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Hire me
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid place-items-center size-10 rounded-md border border-slate-800 text-gray-200"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-md border-b border-slate-800"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {sections.map((s) => (
                <Link
                  key={s.id}
                  href={`/#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 rounded-md text-gray-300 hover:bg-white/5 hover:text-primary transition-colors"
                >
                  {s.name}
                </Link>
              ))}
              <div className="flex gap-3 pt-3 mt-2 border-t border-slate-800">
                <a
                  href={siteData.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 text-sm px-3.5 py-2.5 rounded-md border border-slate-700 text-gray-200"
                >
                  <FileText className="size-4" aria-hidden />
                  Resume
                </a>
                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="flex-1 text-center text-sm px-3.5 py-2.5 rounded-md bg-primary text-primary-foreground font-medium"
                >
                  Hire me
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
