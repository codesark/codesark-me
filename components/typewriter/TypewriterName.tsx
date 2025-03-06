"use client";

import * as React from "react";
import { Typewriter } from "react-simple-typewriter";

export interface ITypewriterNameProps {}

export default function TypewriterName(props: ITypewriterNameProps) {
  return (
    <div className="text-3xl lg:text-5xl font-bold flex justify-center">
      <Typewriter
        words={["Savinay Kumar", "<CodeSark />"]}
        cursor
        loop
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={5000}
        cursorColor="white"
      />
    </div>
  );
}
