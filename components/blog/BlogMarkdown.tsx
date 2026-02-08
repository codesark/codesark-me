"use client";

import type { Components } from "react-markdown";

const anchorClassName =
  "text-primary hover:underline focus:underline underline-offset-2";

export const blogMarkdownComponents: Components = {
  // Headings: clear hierarchy, spacing
  h1: ({ children, ...props }) => (
    <h1
      className="text-3xl font-bold text-gray-100 mt-10 mb-4 first:mt-0 scroll-mt-20"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2
      className="text-2xl font-semibold text-gray-100 mt-8 mb-3 border-b border-slate-700/60 pb-2 scroll-mt-20"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      className="text-xl font-semibold text-gray-200 mt-6 mb-2 scroll-mt-20"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="text-lg font-medium text-gray-200 mt-5 mb-2" {...props}>
      {children}
    </h4>
  ),
  h5: ({ children, ...props }) => (
    <h5 className="text-base font-medium text-gray-300 mt-4 mb-1" {...props}>
      {children}
    </h5>
  ),
  h6: ({ children, ...props }) => (
    <h6 className="text-sm font-medium text-gray-400 mt-3 mb-1" {...props}>
      {children}
    </h6>
  ),

  // Paragraphs
  p: ({ children, ...props }) => (
    <p className="text-gray-300 leading-7 mb-4 last:mb-0" {...props}>
      {children}
    </p>
  ),

  // Lists
  ul: ({ children, ...props }) => (
    <ul className="list-disc list-outside pl-6 mb-4 space-y-1.5 text-gray-300" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="list-decimal list-outside pl-6 mb-4 space-y-1.5 text-gray-300" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="leading-7 pl-1" {...props}>
      {children}
    </li>
  ),

  // Blockquote
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="border-l-4 border-primary/60 pl-4 py-2 my-4 italic text-gray-400 bg-slate-800/30 rounded-r"
      {...props}
    >
      {children}
    </blockquote>
  ),

  // Code: inline vs block
  code: ({ className, children, ...props }) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code
          className="px-1.5 py-0.5 rounded bg-slate-800 text-gray-200 text-sm font-mono border border-slate-700"
          {...props}
        >
          {children}
        </code>
      );
    }
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  pre: ({ children, ...props }) => (
    <pre
      className="overflow-x-auto rounded-lg bg-slate-900 border border-slate-700 p-4 my-4 text-sm font-mono text-gray-300 leading-6"
      {...props}
    >
      {children}
    </pre>
  ),

  // Links
  a: ({ href, children, ...props }) => (
    <a
      href={href}
      target={href?.startsWith("#") ? undefined : "_blank"}
      rel={href?.startsWith("#") ? undefined : "noopener noreferrer"}
      className={anchorClassName}
      {...props}
    >
      {children}
    </a>
  ),

  // Emphasis
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-gray-200" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }) => (
    <em className="italic text-gray-300" {...props}>
      {children}
    </em>
  ),

  // Horizontal rule
  hr: () => <hr className="my-8 border-slate-700" />,

  // Tables
  table: ({ children, ...props }) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-slate-700">
      <table className="w-full text-left text-sm" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }) => (
    <thead className="bg-slate-800/60 text-gray-200" {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }) => (
    <tbody className="text-gray-300 divide-y divide-slate-700" {...props}>
      {children}
    </tbody>
  ),
  tr: ({ children, ...props }) => <tr {...props}>{children}</tr>,
  th: ({ children, ...props }) => (
    <th className="px-4 py-3 font-semibold" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="px-4 py-3" {...props}>
      {children}
    </td>
  ),

  // Image (optional)
  img: ({ src, alt, ...props }) => (
    <span className="block my-4">
      <img
        src={src}
        alt={alt ?? ""}
        className="rounded-lg border border-slate-700 max-w-full h-auto"
        {...props}
      />
    </span>
  ),
};
