import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center px-5">
      <div className="terminal-card w-full max-w-md border border-slate-800 bg-black/40">
        <div className="flex items-center gap-1.5 border-b border-slate-800/70 px-4 py-2.5 font-mono">
          <span className="size-2.5 rounded-full bg-red-500/60" />
          <span className="size-2.5 rounded-full bg-amber-500/60" />
          <span className="size-2.5 rounded-full bg-emerald-500/60" />
          <span className="ml-3 text-[11px] text-gray-600">savinay@codesark:~</span>
        </div>
        <div className="px-6 py-8 font-mono text-sm leading-7">
          <p>
            <span className="text-primary">$ </span>
            <span className="text-gray-200">cat {"{page}"}</span>
          </p>
          <p className="text-red-400">cat: no such file or directory (404)</p>
          <p className="mt-4 text-gray-400">
            The page you&apos;re looking for doesn&apos;t exist or was moved.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-1.5 bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="size-4" aria-hidden />
            cd ~
          </Link>
        </div>
      </div>
    </main>
  );
}
