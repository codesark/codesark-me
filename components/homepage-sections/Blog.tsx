"use client";

import * as React from "react";
import FadeInWhenVisible from "../animation/FadeInWhenVisible";

export interface IBlogProps {}

export default function Blog(props: IBlogProps) {
  return (
    <div className="relative w-full min-h-screen max-w-screen-xl mx-auto flex flex-col justify-center overflow-hidden">
      <FadeInWhenVisible>
        <h1 className="text-5xl pt-20 py-10 px-5 leading-snug text-center">
          <span className="text-gray-500 font-light">Blog:</span> Do I write as
          well?
        </h1>
      </FadeInWhenVisible>
      <hr />
      <div className="flex align-items-stretch flex-wrap lg:flex-nowrap gap-4 lg:gap-10 p-5">
        <div className="w-full lg:w-2/3">
          <FadeInWhenVisible className="h-full">
            {/* <AboutCard /> */}
            <></>
          </FadeInWhenVisible>
        </div>
        <div className="w-full lg:w-1/3">
          <FadeInWhenVisible>
            {/* <ContactCard /> */}
            <></>
          </FadeInWhenVisible>
        </div>
      </div>
    </div>
  );
}
