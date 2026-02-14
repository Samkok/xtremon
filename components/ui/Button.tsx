"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const baseClasses =
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-black px-5 py-2.5 hover:bg-sky-300 shadow-glow",
  ghost: "border border-white/10 text-white px-5 py-2.5 hover:border-white/40 bg-white/5"
};

export function Button({ children, variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button className={clsx(baseClasses, variantClasses[variant], className)} {...props}>
      {children}
    </button>
  );
}

