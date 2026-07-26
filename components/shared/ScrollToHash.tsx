"use client";

import * as React from "react";

// Smooth-scroll to a hash target when landing with one (e.g. /#blog from a
// post). Progressive enhancement only — renders nothing and never gates the
// server-rendered content.
export default function ScrollToHash() {
  React.useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const timer = window.setTimeout(() => {
      document
        .getElementById(hash)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
    return () => window.clearTimeout(timer);
  }, []);

  return null;
}
