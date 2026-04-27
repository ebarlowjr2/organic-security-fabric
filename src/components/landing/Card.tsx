import type { ReactNode } from "react";
import Link from "next/link";

export function Card({
  title,
  icon,
  children,
  href,
}: {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3">
      {icon ? (
        <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-100 shadow-[0_0_0_1px_rgba(34,211,238,0.20)]">
          {icon}
        </div>
      ) : null}
      <div>
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <div className="mt-3 text-sm leading-6 text-white/75">{children}</div>
      </div>
    </div>
  );

  const className =
    "group rounded-2xl bg-white/[0.05] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.10)] backdrop-blur-sm transition hover:bg-white/[0.07]";

  if (href) {
    return (
      <Link href={href} className={`${className} block hover:cursor-pointer`}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
