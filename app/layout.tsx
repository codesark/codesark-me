import type { Metadata } from "next";
import { Inter, Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import TopTag from "@/components/toptag/TopTag";
import Background from "@/components/background/Background";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
});
const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://codesark.me"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  title: {
    default: "Savinay Kumar | codesark",
    template: "%s | Savinay Kumar",
  },
  description:
    "Senior Software Engineer & Team Lead. Full-stack, ML, scalable systems. Building impact with technology.",
  openGraph: {
    title: "Savinay Kumar | codesark",
    description:
      "Senior Software Engineer & Team Lead. Full-stack, ML, scalable systems.",
    url: "https://codesark.me",
    siteName: "Savinay Kumar",
    images: [
      {
        url: "/savinay-wall.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@codesark",
    title: "Savinay Kumar | codesark",
    description:
      "Senior Software Engineer & Team Lead. Full-stack, ML, scalable systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${robotoMono.className} h-screen`}>
        <Background count={10} speed={0.1} />
        <TopTag />
        {children}
      </body>
    </html>
  );
}
