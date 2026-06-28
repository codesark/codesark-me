import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { blogMarkdownComponents } from "@/components/blog/BlogMarkdown";
import JsonLd from "@/components/seo/JsonLd";
import { siteData } from "@/lib/siteData";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/jsonLd";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };

  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    authors: [{ name: siteData.name, url: siteData.url }],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
      siteName: siteData.name,
      publishedTime: post.date || undefined,
      authors: [siteData.name],
      images: [{ url: siteData.ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@codesark",
      title: post.title,
      description: post.excerpt,
      images: [siteData.ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <article className="relative w-full max-w-3xl mx-auto px-5 pt-28 pb-24">
      <JsonLd
        data={[
          blogPostingSchema(post),
          breadcrumbSchema([
            { name: "Home", url: siteData.url },
            { name: "Blog", url: `${siteData.url}/#blog` },
            { name: post.title, url: `${siteData.url}/blog/${post.slug}` },
          ]),
        ]}
      />
      <Link
        href="/#blog"
        className="text-gray-400 hover:text-primary mb-8 inline-flex items-center gap-1.5 text-sm transition"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Back to all posts
      </Link>
      <header className="mb-10 border-b border-slate-800 pb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-100 tracking-tight leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 mt-4 text-sm text-gray-500">
          <time dateTime={post.date}>{formattedDate}</time>
          <span aria-hidden>·</span>
          <span>{siteData.name}</span>
        </div>
      </header>
      <div className="blog-content max-w-none">
        <ReactMarkdown components={blogMarkdownComponents}>
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
