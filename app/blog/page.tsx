import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical write-ups on backend platforms, AI in production, and scaling real systems.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="relative w-full max-w-5xl mx-auto px-5 pt-28 pb-24">
      <Link
        href="/#blog"
        className="text-gray-400 hover:text-primary mb-8 inline-flex items-center gap-1.5 text-sm transition"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Home
      </Link>
      <header className="mb-10 max-w-2xl">
        <p className="eyebrow mb-3">Writing</p>
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-gray-50">
          Notes from the build
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-400 leading-relaxed">
          Practical write-ups on backend platforms, AI in production, and
          scaling real systems.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-gray-500">No posts yet. Check back soon.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-5">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="terminal-card group flex h-full flex-col border border-slate-800 bg-white/[0.02] p-6 hover:border-primary/40 transition-colors"
            >
              <time
                dateTime={post.date}
                className="inline-flex items-center gap-1.5 text-xs text-gray-500"
              >
                <CalendarDays className="size-3.5 shrink-0" aria-hidden />
                {post.date
                  ? new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : ""}
              </time>
              <h2 className="mt-3 font-display text-lg font-semibold text-gray-100 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 flex-1 text-sm text-gray-400 leading-relaxed">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Read more
                <ArrowRight
                  className="size-4 group-hover:translate-x-0.5 transition-transform"
                  aria-hidden
                />
              </span>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
