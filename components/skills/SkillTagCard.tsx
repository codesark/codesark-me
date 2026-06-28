import * as React from "react";
import { skillGroups } from "./technologies";
import TechIcon from "./TechIcon";

// Categorized skill grid. Each technology shows an accurate logo (or a tinted
// monogram where no real logo exists) plus its name, with no wrong/duplicate icons.
export default function SkillTagCard() {
  return (
    <div className="grid sm:grid-cols-2 gap-5">
      {skillGroups.map((group) => (
        <div
          key={group.category}
          className="rounded-2xl border border-slate-800 bg-white/[0.02] p-5 hover:border-slate-700 transition-colors"
        >
          <div className="mb-1.5 flex items-baseline justify-between gap-2">
            <h3 className="font-display text-base font-semibold text-gray-100">
              {group.category}
            </h3>
            <span className="text-xs text-gray-600">{group.items.length}</span>
          </div>
          <p className="text-xs text-gray-500 mb-4 leading-relaxed">
            {group.blurb}
          </p>
          <ul className="flex flex-wrap gap-2">
            {group.items.map((tech) => (
              <li
                key={tech.name}
                title={tech.description}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-white/[0.03] px-2.5 py-1.5 text-xs text-gray-300 hover:border-primary/40 hover:text-gray-100 transition-colors"
              >
                <TechIcon tech={tech} size={18} />
                {tech.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
