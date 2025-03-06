"use client";

import * as React from "react";
import { SocialIcon } from "react-social-icons";

export interface ISocialIconsProps {}

const socials = [
  {
    _id: 1,
    network: "x",
    url: "https://twitter.com/codesark",
  },
  {
    _id: 2,
    network: "linkedin",
    url: "https://www.linkedin.com/in/codesark",
  },
  {
    _id: 3,
    network: "github",
    url: "https://github.com/codesark",
  },
];

export default function SocialIcons(props: ISocialIconsProps) {
  return (
    <div className="flex gap-5">
      {socials.map((social) => (
        <div
          key={social._id}
          className="p-1 rounded-full border border-transparent hover:border-slate-700 hover:bg-zinc-950 transition"
        >
          <SocialIcon
            url={social.url}
            network={social.network}
            fgColor="white"
            bgColor="transparent"
          />
        </div>
      ))}
    </div>
  );
}
