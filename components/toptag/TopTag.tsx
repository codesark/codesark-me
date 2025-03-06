"use client";

import CpuChipIcon from "@heroicons/react/24/outline/CpuChipIcon";
import HomeIcon from "@heroicons/react/24/outline/HomeIcon";
import NewspaperIcon from "@heroicons/react/24/outline/NewspaperIcon";
import UserCircleIcon from "@heroicons/react/24/outline/UserCircleIcon";
import WrenchScrewdriverIcon from "@heroicons/react/24/outline/WrenchScrewdriverIcon";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { motion, Variants } from "framer-motion";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export interface ITopTagProps {}

const MenuItems = [
  { name: "Home", icon: HomeIcon, path: "#hero" },
  { name: "About", icon: UserCircleIcon, path: "#about" },
  { name: "Skills", icon: WrenchScrewdriverIcon, path: "#skills" },
  { name: "Projects", icon: CpuChipIcon, path: "#projects" },
  { name: "Blog", icon: NewspaperIcon, path: "#blog" },
];

export default function TopTag(props: ITopTagProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function toggleMenu(event: React.MouseEvent) {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="z-10 fixed w-full h-0 bg-gray-500">
      <div className="max-w-screen-xl mx-auto bg-slate-700 h-full">
        <motion.div
          className="absolute"
          initial={false}
          animate={isMenuOpen ? "open" : "close"}
        >
          <motion.div
            whileTap={{ scale: 0.7 }}
            className="mt-[-10px] ml-2 md:ml-10 px-2 pb-2 pt-8 border-x border-b rounded-b-full bg-zinc-950 transition-all hover:bg-zinc-900 cursor-pointer"
          >
            <motion.div
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55 }}
            >
              {isMenuOpen ? (
                <XMarkIcon
                  onClick={toggleMenu}
                  className=" hover:animate-pulse"
                  width={50}
                  height={50}
                />
              ) : (
                <Image
                  onClick={toggleMenu}
                  className="hover:animate-pulse"
                  src="/profile-pic.png"
                  alt="Savinay Kumar's Pic"
                  width={50}
                  height={50}
                  priority
                />
              )}
            </motion.div>
          </motion.div>
          <motion.div
            hidden={!isMenuOpen}
            className="absolute bg-zinc-950 mt-2 ml-2 md:ml-10 p-1 min-w-[250px] overflow-hidden border rounded-lg"
          >
            {MenuItems.map((ele, idx) => (
              <motion.div key={idx} whileTap={{ scale: 0.9 }}>
                <Link
                  onClick={(e) => toggleMenu(e)}
                  className="flex py-2 px-3 align-middle hover:bg-zinc-900 rounded-sm overflow-hidden"
                  href={ele.path}
                  key={idx}
                >
                  <ele.icon className="h-6 w-6 mx-2" />
                  {ele.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </nav>
  );
}

/**
 *
 *  <motion.ul
            hidden={true}
            className="flex flex-col absolute bg-primary text-primary-foreground mt-3 ml-2 md:ml-10 py-2 border rounded-lg  min-w-[200px]"
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            // style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
          >
          {MenuItems.map((ele, idx) => (
              <motion.li variants={itemVariants} key={idx}>
                <Link href={ele.path}>
                  <div className="p-2 w-full hover:bg-zinc-800">{ele.name}</div>
                </Link>
              </motion.li>
            ))}
            <motion.li variants={itemVariants}>sdsd</motion.li>
            <motion.li variants={itemVariants}>sdsd</motion.li>
            <motion.li variants={itemVariants}>sdsd</motion.li>
            <motion.li variants={itemVariants}>sdsd</motion.li>
          </motion.ul>
 */
