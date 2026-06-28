import { siteData } from "@/lib/siteData";
import type { BlogPost } from "@/lib/blog";

const personId = `${siteData.url}/#person`;
const siteId = `${siteData.url}/#website`;

// Person: the core entity. This is what Google's knowledge graph and LLMs read
// to answer "who is Savinay Kumar / codesark and what does he do".
export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: siteData.name,
    alternateName: siteData.handle,
    url: siteData.url,
    image: `${siteData.url}${siteData.ogImage}`,
    jobTitle: siteData.role,
    description: siteData.summary,
    email: `mailto:${siteData.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    worksFor: {
      "@type": "Organization",
      name: siteData.worksFor.name,
      url: siteData.worksFor.url,
    },
    knowsAbout: [...siteData.knowsAbout],
    sameAs: [
      siteData.socials.x,
      siteData.socials.linkedin,
      siteData.socials.github,
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": siteId,
    url: siteData.url,
    name: `${siteData.name} | ${siteData.handle}`,
    description: siteData.summary,
    inLanguage: "en",
    publisher: { "@id": personId },
  };
}

export function profilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: siteData.url,
    mainEntity: { "@id": personId },
  };
}

export function blogPostingSchema(post: BlogPost) {
  const postUrl = `${siteData.url}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${postUrl}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date || undefined,
    dateModified: post.date || undefined,
    inLanguage: "en",
    url: postUrl,
    mainEntityOfPage: postUrl,
    image: `${siteData.url}${siteData.ogImage}`,
    author: { "@id": personId, "@type": "Person", name: siteData.name },
    publisher: { "@id": personId, "@type": "Person", name: siteData.name },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
