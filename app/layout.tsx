import type { Metadata } from "next";
import { Inter, Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import Background from "@/components/background/Background";
import JsonLd from "@/components/seo/JsonLd";
import { siteData } from "@/lib/siteData";
import {
  personSchema,
  websiteSchema,
  profilePageSchema,
} from "@/lib/jsonLd";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteData.url),
  alternates: {
    canonical: "/",
  },
  applicationName: `${siteData.name} | ${siteData.handle}`,
  authors: [{ name: siteData.name, url: siteData.url }],
  creator: siteData.name,
  publisher: siteData.name,
  category: "technology",
  keywords: [
    siteData.name,
    siteData.handle,
    "Senior Software Engineer",
    "Tech Lead",
    "Backend Engineer",
    "AI Platform Engineer",
    "Go developer",
    "Kubernetes",
    "RAG",
    "LLM inference",
    "vLLM",
    "LangGraph",
    "Bengaluru",
    ...siteData.knowsAbout,
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  title: {
    default: `${siteData.name} | ${siteData.handle} · ${siteData.role}`,
    template: `%s | ${siteData.name}`,
  },
  description: siteData.summary,
  openGraph: {
    title: `${siteData.name} | ${siteData.handle}`,
    description: siteData.summary,
    url: siteData.url,
    siteName: siteData.name,
    images: [{ url: siteData.ogImage, width: 1200, height: 630, alt: siteData.name }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@codesark",
    title: `${siteData.name} | ${siteData.handle}`,
    description: siteData.summary,
    images: [siteData.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${robotoMono.variable} ${poppins.variable} ${inter.variable} font-sans min-h-screen bg-background text-foreground antialiased`}
      >
        <JsonLd
          data={[personSchema(), websiteSchema(), profilePageSchema()]}
        />
        <Background count={10} speed={0.1} />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
