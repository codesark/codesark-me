"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import Section from "@/components/shared/Section";
import FadeInWhenVisible from "../animation/FadeInWhenVisible";
import type { BlogPost } from "@/lib/blog";

export interface IBlogProps {
  posts: BlogPost[];
}

export default function Blog({ posts }: IBlogProps) {
  return (
    <Section
      id="blog"
      eyebrow="Writing"
      title="Notes from the build"
      description="Practical write-ups on backend platforms, AI in production, and scaling real systems."
      className="bg-white/[0.015]"
    >
      {posts.length === 0 ? (
        <p className="text-gray-500">No posts yet. Check back soon.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-5">
          {posts.map((post, index) => (
            <FadeInWhenVisible key={post.slug} delay={index * 0.08} className="h-full">
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-white/[0.02] p-6 hover:border-primary/40 transition-colors"
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
                <h3 className="mt-3 font-display text-lg font-semibold text-gray-100 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
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
            </FadeInWhenVisible>
          ))}
        </div>
      )}
    </Section>
  );
}
