"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays, FileText } from "lucide-react";
import FadeInWhenVisible from "../animation/FadeInWhenVisible";
import type { BlogPost } from "@/lib/blog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export interface IBlogProps {
  posts: BlogPost[];
}

export default function Blog(props: IBlogProps) {
  const { posts } = props;

  return (
    <div className="relative w-full min-h-screen max-w-screen-xl mx-auto flex flex-col justify-center overflow-hidden">
      <FadeInWhenVisible>
        <h1 className="text-5xl pt-20 py-10 px-5 leading-snug text-center">
          <span className="text-gray-500 font-light">Blog:</span> Do I write as
          well?
        </h1>
      </FadeInWhenVisible>
      <hr />
      <div className="flex flex-col gap-4 lg:gap-6 p-5 pb-20">
        {posts.length === 0 ? (
          <FadeInWhenVisible className="h-full">
            <p className="text-gray-500 text-center py-10">No posts yet.</p>
          </FadeInWhenVisible>
        ) : (
          posts.map((post, index) => (
            <FadeInWhenVisible key={post.slug} className="h-full" delay={index * 0.08}>
              <Card className="min-w-[300px] transition hover:border-slate-600 border-l-4 border-l-primary/40">
                <CardHeader>
                  <div className="flex items-start gap-2 mb-1">
                    <FileText className="size-5 text-primary shrink-0 mt-0.5" aria-hidden />
                    <CardTitle className="text-xl">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:underline focus:underline"
                      >
                        {post.title}
                      </Link>
                    </CardTitle>
                  </div>
                  <CardDescription className="mt-2">
                    {post.excerpt}
                  </CardDescription>
                  <time
                    dateTime={post.date}
                    className="text-gray-500 text-sm flex items-center gap-1.5 mt-2"
                  >
                    <CalendarDays className="size-4 shrink-0" aria-hidden />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </CardHeader>
                <CardContent>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary hover:underline font-medium inline-flex items-center gap-1.5 group"
                  >
                    Read more
                    <ArrowRight className="size-4 shrink-0 group-hover:translate-x-0.5 transition-transform" aria-hidden />
                  </Link>
                </CardContent>
              </Card>
            </FadeInWhenVisible>
          ))
        )}
      </div>
    </div>
  );
}
