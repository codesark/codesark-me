import { ImageResponse } from "next/og";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { siteData } from "@/lib/siteData";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Blog post cover";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.title ?? "Blog";
  const date = post?.date
    ? new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0b",
          backgroundImage:
            "linear-gradient(#1c1c2044 1px, transparent 1px), linear-gradient(to right, #1c1c2044 1px, transparent 1px)",
          backgroundSize: "100px 100px",
          padding: "64px",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 12, height: 12, borderRadius: 9999, background: "#ef444499" }} />
            <div style={{ width: 12, height: 12, borderRadius: 9999, background: "#f59e0b99" }} />
            <div style={{ width: 12, height: 12, borderRadius: 9999, background: "#10b98199" }} />
            <div style={{ color: "#52525b", fontSize: 24, marginLeft: 12 }}>
              savinay@codesark:~/blog
            </div>
          </div>
          <div style={{ display: "flex", marginTop: 56, color: "#ffe100", fontSize: 28 }}>
            $ cat {slug}.md
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              color: "#f4f4f5",
              fontSize: 58,
              fontWeight: 700,
              lineHeight: 1.2,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #27272a",
            paddingTop: 28,
            color: "#a1a1aa",
            fontSize: 26,
          }}
        >
          <div style={{ display: "flex" }}>
            {siteData.name} · {siteData.role}
          </div>
          <div style={{ display: "flex", color: "#52525b" }}>{date}</div>
        </div>
      </div>
    ),
    size
  );
}
