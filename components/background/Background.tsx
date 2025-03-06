"use client";

import * as React from "react";
import "./Background.css";

export interface IBackgroundProps {
  count: number;
  speed: number;
}

export default function Background({ count, speed }: IBackgroundProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      ref.current?.style.setProperty("--x", e.clientX + "px");
      ref.current?.style.setProperty("--y", e.clientY + "px");
    });

    window.addEventListener("touchmove", (e) => {
      ref.current?.style.setProperty("--x", e.changedTouches[0].clientX + "px");
      ref.current?.style.setProperty("--y", e.changedTouches[0].clientY + "px");
    });
  }, []);

  return <div ref={ref} className="background"></div>;
}
