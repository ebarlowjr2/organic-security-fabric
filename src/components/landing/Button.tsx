import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-teal-400/90 text-slate-950 hover:bg-teal-300 shadow-[0_0_0_1px_rgba(45,212,191,0.2),0_10px_30px_rgba(13,148,136,0.25)]",
    secondary:
      "bg-white/10 text-white hover:bg-white/15 shadow-[0_0_0_1px_rgba(255,255,255,0.12)]",
    ghost: "text-white/80 hover:text-white hover:bg-white/5",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

