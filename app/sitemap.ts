import type { MetadataRoute } from "next";
import { siteData } from "@/lib/siteData";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteData.url}/blog/${post.slug}`,
    lastModified: new Date(post.updated || post.date || Date.now()),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: siteData.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteData.url}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogEntries,
  ];
}
