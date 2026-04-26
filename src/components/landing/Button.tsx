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
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-cyan-300 text-slate-950 hover:bg-cyan-200 shadow-[0_0_0_1px_rgba(34,211,238,0.24),0_10px_30px_rgba(34,211,238,0.18)]",
    secondary:
      "bg-white/8 text-white hover:bg-white/12 shadow-[0_0_0_1px_rgba(255,255,255,0.12)]",
    ghost: "text-white/80 hover:text-white hover:bg-white/5",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
