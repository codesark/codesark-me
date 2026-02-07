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
  const posts = getAllPosts();
  return (
    <main className="h-screen">
      <Homepage posts={posts} />
    </main>
  );
}
