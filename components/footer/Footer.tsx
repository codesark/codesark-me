import Link from "next/link";
import Image from "next/image";
import { siteData } from "@/lib/siteData";

const nav = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];

const socials = [
  { label: "X", href: siteData.socials.x },
  { label: "LinkedIn", href: siteData.socials.linkedin },
  { label: "GitHub", href: siteData.socials.github },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80">
      <div className="section-shell py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Image
                src="/profile-pic.png"
                alt="Savinay Kumar"
                width={32}
                height={32}
                className="size-8 rounded-full object-cover ring-1 ring-slate-700"
              />
              <span className="font-mono text-sm text-gray-200">codesark</span>
            </div>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              {siteData.tagline} Based in {siteData.location}.
            </p>
          </div>

          <div className="flex gap-16">
            <nav aria-label="Footer">
              <p className="text-xs uppercase tracking-wide text-gray-600 mb-3">
                Navigate
              </p>
              <ul className="space-y-2">
                {nav.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-gray-400 hover:text-primary transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-600 mb-3">
                Elsewhere
              </p>
              <ul className="space-y-2">
                {socials.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-primary transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800/60 pt-6 text-xs text-gray-600">
          © {new Date().getFullYear()} {siteData.name} · {siteData.role}
        </div>
      </div>
    </footer>
  );
}
