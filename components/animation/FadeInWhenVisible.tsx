import { MotionStyle, motion } from "framer-motion";
import * as React from "react";

export interface IFadeInWhenVisibleProps {
  children: React.ReactNode;
  className?: string;
  style?: MotionStyle;
}

export default function FadeInWhenVisible({
  children,
  ...others
}: IFadeInWhenVisibleProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.1 }}
      variants={{
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: { opacity: 0, scale: 1, y: 50 },
      }}
      {...others}
    >
      {children}
    </motion.div>
  );
}
