import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} | Savinay Kumar`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="relative w-full max-w-screen-xl mx-auto px-5 py-20">
      <Link
        href="/#blog"
        className="text-gray-500 hover:text-gray-300 mb-6 inline-block"
      >
        ← Back to Blog
      </Link>
      <header className="mb-8">
        <h1 className="text-4xl font-semibold text-gray-100">{post.title}</h1>
        <time
          dateTime={post.date}
          className="text-gray-500 text-sm mt-2 block"
        >
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </header>
      <div className="prose prose-invert prose-slate max-w-none [&>p]:mb-4 [&>h2]:mt-8 [&>h2]:mb-4 [&>ul]:my-4">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}
