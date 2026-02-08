import { MotionStyle, motion } from "framer-motion";
import * as React from "react";

export interface IFadeInWhenVisibleProps {
  children: React.ReactNode;
  className?: string;
  style?: MotionStyle;
  /** Optional delay in seconds for stagger effects */
  delay?: number;
}

export default function FadeInWhenVisible({
  children,
  delay = 0,
  ...others
}: IFadeInWhenVisibleProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      variants={{
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: { opacity: 0, scale: 0.98, y: 24 },
      }}
      {...others}
    >
      {children}
    </motion.div>
  );
}
