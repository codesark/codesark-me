import * as React from "react";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";

export interface ISectionProps {
  id: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

// Consistent section shell with an eyebrow label + H2 title.
// Keeps a single H1 on the page (the hero) for correct SEO heading order.
export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: ISectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 md:py-28 ${className}`}>
      <div className="section-shell">
        <FadeInWhenVisible>
          <div className="max-w-2xl mb-12">
            {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-gray-50">
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-base md:text-lg text-gray-400 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </FadeInWhenVisible>
        {children}
      </div>
    </section>
  );
}
