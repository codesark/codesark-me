import * as React from "react";
import type { Tech } from "./technologies";

// Renders an accurate brand logo when one exists, otherwise a tinted monogram
// chip. This guarantees we never show a wrong/borrowed logo for a technology.
export default function TechIcon({
  tech,
  size = 22,
}: {
  tech: Tech;
  size?: number;
}) {
  if (tech.icon) {
    const Icon = tech.icon;
    return <Icon size={size} className="shrink-0" />;
  }

  const tint = tech.tint ?? "240 5% 65%";
  return (
    <span
      aria-hidden
      className="grid shrink-0 place-items-center rounded-[5px] font-mono font-semibold leading-none"
      style={{
        width: size,
        height: size,
        fontSize: Math.max(8, Math.round(size * 0.42)),
        color: `hsl(${tint})`,
        backgroundColor: `hsl(${tint} / 0.16)`,
        border: `1px solid hsl(${tint} / 0.32)`,
      }}
    >
      {tech.mono ?? tech.name.slice(0, 2)}
    </span>
  );
}
