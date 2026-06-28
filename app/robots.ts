import type { MetadataRoute } from "next";
import { siteData } from "@/lib/siteData";

// Explicitly welcome both traditional search crawlers and AI/LLM crawlers so the
// site can be indexed and cited by Google, ChatGPT, Claude, Perplexity, etc.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          "*",
          "Googlebot",
          "Bingbot",
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-User",
          "anthropic-ai",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Applebot",
          "Applebot-Extended",
          "CCBot",
          "cohere-ai",
          "DuckDuckBot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${siteData.url}/sitemap.xml`,
    host: siteData.url,
  };
}
