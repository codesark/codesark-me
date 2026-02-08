import Link from "next/link";

const links = [
  { label: "X", href: "https://x.com/codesark" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/codesark" },
  { label: "GitHub", href: "https://github.com/codesark" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-700/50 py-6 mt-auto">
      <div className="w-full max-w-screen-xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          Building with impact · Savinay Kumar · codesark
        </p>
        <nav className="flex gap-6 text-sm text-gray-500">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
