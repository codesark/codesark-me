import Homepage from "./homepage";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function Home() {
  // Only the homepage Blog teaser needs slug/title/excerpt/date. Strip the full
  // post body so it isn't serialized into the homepage payload (smaller HTML,
  // and post content stays on its own /blog/[slug] page).
  const posts = getAllPosts().map(({ content, ...meta }) => ({
    ...meta,
    content: "",
  }));
  return (
    <main>
      <Homepage posts={posts} />
    </main>
  );
}
