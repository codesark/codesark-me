"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="relative flex min-h-screen items-center justify-center px-5">
      <div className="terminal-card w-full max-w-md border border-slate-800 bg-black/40 px-6 py-8 font-mono text-sm leading-7">
        <p className="text-red-400">exit code 1: something went wrong.</p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 inline-flex items-center bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          retry
        </button>
      </div>
    </main>
  );
}
