"use client";
import ChevronDoubleDownIcon from "@heroicons/react/24/outline/ChevronDoubleDownIcon";
import { motion } from "framer-motion";
import * as React from "react";

export interface IScrollDownButtonProps {
  onClick?: (event: React.MouseEvent) => void;
}

export default function ScrollDownButton(props: IScrollDownButtonProps) {
  function scrollDown(event: React.MouseEvent) {
    event.preventDefault();
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <motion.div
      onClick={scrollDown}
      initial={{ translateX: "-50%" }}
      whileTap={{ scale: 0.9 }}
      animate={{ translateY: "-50%" }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1,
        bounce: 0.4,
      }}
      className="absolute bottom-10 left-1/2 p-3 cursor-pointer transition-[border] rounded-full border border-transparent hover:border-slate-700 hover:bg-zinc-950"
    >
      <ChevronDoubleDownIcon className="w-10 h-10" />
    </motion.div>
  );
}
