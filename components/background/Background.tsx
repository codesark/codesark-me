"use client";

import * as React from "react";
import "./Background.css";

export default function Background() {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    // Cursor spotlight only makes sense with a precise pointer.
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let raf = 0;
    let x = 0;
    let y = 0;

    const flush = () => {
      raf = 0;
      ref.current?.style.setProperty("--x", x + "px");
      ref.current?.style.setProperty("--y", y + "px");
    };

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = requestAnimationFrame(flush);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} aria-hidden className="background" />;
}
