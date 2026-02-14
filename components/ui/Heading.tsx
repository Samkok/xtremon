import type { ReactNode } from "react";

type HeadingLevel = 1 | 2 | 3;

type HeadingProps = {
  level?: HeadingLevel;
  children: ReactNode;
  className?: string;
};

const levelToTag: Record<HeadingLevel, keyof JSX.IntrinsicElements> = {
  1: "h1",
  2: "h2",
  3: "h3"
};

const levelToClasses: Record<HeadingLevel, string> = {
  1: "text-4xl md:text-5xl font-semibold tracking-tight",
  2: "text-2xl md:text-3xl font-semibold tracking-tight",
  3: "text-xl md:text-2xl font-semibold tracking-tight"
};

export function Heading({ level = 1, children, className }: HeadingProps) {
  const Tag = levelToTag[level];
  const classes = `${levelToClasses[level]} ${className ?? ""}`.trim();

  return <Tag className={classes}>{children}</Tag>;
}

