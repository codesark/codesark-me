"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";
import { siteData } from "@/lib/siteData";

type Step = { text: string; mode: "type" | "instant" };

// Flatten: each command types char-by-char, each output pops in whole.
const steps: Step[] = siteData.terminal.flatMap((l) => [
  { text: l.cmd, mode: "type" as const },
  {
    text: "badge" in l && l.badge ? `${l.out}  [${l.badge}]` : l.out,
    mode: "instant" as const,
  },
]);

const CHAR_MS = 22; // per typed character
const OUT_MS = 260; // pause before an output line pops in
const CMD_MS = 400; // pause before the next command starts

function useTerminalProgress(enabled: boolean) {
  // [currentStepIndex, charsShownInCurrentStep]
  const [pos, setPos] = React.useState<[number, number]>([0, 0]);

  React.useEffect(() => {
    if (!enabled) return;
    let step = 0;
    let chars = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const s = steps[step];
      if (!s) return;
      if (s.mode === "type" && chars < s.text.length) {
        chars += 1;
        setPos([step, chars]);
        timer = setTimeout(tick, CHAR_MS);
      } else {
        step += 1;
        chars = 0;
        setPos([step, 0]);
        const next = steps[step];
        if (next) timer = setTimeout(tick, next.mode === "instant" ? OUT_MS : CMD_MS);
      }
    };
    timer = setTimeout(tick, 500); // lead-in while the hero settles
    return () => clearTimeout(timer);
  }, [enabled]);

  return pos;
}

export default function TerminalTicker() {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  // SSR / no-JS / reduced motion: fully-typed static render.
  const animate = mounted && !reduceMotion;
  const [stepIdx, charCount] = useTerminalProgress(animate);
  const done = !animate || stepIdx >= steps.length;

  const visibleText = (i: number) => {
    const s = steps[i];
    if (!animate || i < stepIdx) return s.text;
    if (i === stepIdx && s.mode === "type") return s.text.slice(0, charCount);
    return null; // not reached yet; instant lines are all-or-nothing
  };

  return (
    <div className="mt-8 max-w-xl">
      {/* Plain-text version for screen readers and crawlers */}
      <p className="sr-only">
        {siteData.terminal.map((l) => `${l.cmd}: ${l.out}`).join(". ")}.
      </p>

      <div
        aria-hidden
        className="border border-slate-800 bg-black/40 font-mono text-[13px] leading-6 overflow-hidden"
      >
        <div className="flex items-center gap-1.5 border-b border-slate-800/70 px-4 py-2.5">
          <span className="size-2.5 rounded-full bg-red-500/60" />
          <span className="size-2.5 rounded-full bg-amber-500/60" />
          <span className="size-2.5 rounded-full bg-emerald-500/60" />
          <span className="ml-3 text-[11px] text-gray-600">savinay@codesark:~</span>
        </div>

        {/* Fixed-height body: 6 content rows + idle prompt row, so typing never shifts layout */}
        <div className="px-4 py-3 min-h-[10.5rem]">
          {steps.map((s, i) => {
            const text = visibleText(i);
            const isCursorRow = animate && !done && i === stepIdx;
            return (
              <div key={i} className="min-h-6 whitespace-pre-wrap">
                {text !== null && (
                  <>
                    <span className={s.mode === "type" ? "text-primary" : "text-gray-600"}>
                      {s.mode === "type" ? "$ " : "> "}
                    </span>
                    <span className={s.mode === "type" ? "text-gray-200" : "text-gray-400"}>
                      {renderWithBadge(text)}
                    </span>
                    {isCursorRow && <Cursor />}
                  </>
                )}
              </div>
            );
          })}
          {done && mounted && !reduceMotion && (
            <div className="min-h-6">
              <span className="text-primary">$ </span>
              <Cursor />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Cursor() {
  return (
    <span className="ml-0.5 inline-block h-[1.1em] w-[0.55em] translate-y-[0.2em] bg-primary/80 animate-cursor-blink" />
  );
}

function renderWithBadge(text: string) {
  const m = text.match(/^(.*?)\s*\[(\w+)\]$/);
  if (!m) return text;
  return (
    <>
      {m[1]}
      <span className="ml-2 text-emerald-400">[{m[2]}]</span>
    </>
  );
}
