"use client";

import * as React from "react";
import ScrollDownButton from "../buttons/ScrollDownButton";
import { motion } from "framer-motion";
import Link from "next/link";
import TypewriterName from "../typewriter/TypewriterName";
import SocialIcons from "../socials/SocialIcons";
import Image from "next/image";

const MenuItems = [
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Blog", path: "#blog" },
];

export const CustomLink = (props: any) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link
        href={href}
        className="px-2 lg:px-5 py-2 rounded-sm border border-transparent hover:border-slate-700 hover:bg-zinc-950 transition"
        {...props}
      >
        {props.children}
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

export interface IHeroProps {}

export default function Hero(props: IHeroProps) {
  return (
    <div className="relative w-full max-w-screen-xl mx-auto h-screen flex flex-col justify-center overflow-hidden">
      <motion.div
        initial={{ y: -500, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center"
      >
        <Image
          src="/profile-pic.png"
          alt="Savinay Kumar's Pic"
          width={200}
          height={200}
          priority
          className="rounded-full"
        />
      </motion.div>
      <motion.div
        initial={{ y: 0, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-2 flex justify-center"
      >
        <SocialIcons />
      </motion.div>
      <div className="pt-5 flex justify-center">
        <TypewriterName />
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0, scale: 1 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-10 flex justify-center lg:gap-10 text-lg flex-wrap"
      >
        {" "}
        {MenuItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className="px-5 py-2 rounded-sm border border-transparent hover:border-slate-700 hover:bg-zinc-950 transition"
          >
            {item.name}
          </Link>
        ))}
      </motion.div>
      <ScrollDownButton />
    </div>
  );
}
