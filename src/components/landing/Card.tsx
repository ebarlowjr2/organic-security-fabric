import type { ReactNode } from "react";

export function Card({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="group rounded-2xl bg-white/[0.06] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.10)] backdrop-blur-sm transition hover:bg-white/[0.08]">
      <div className="flex items-start gap-3">
        {icon ? (
          <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-teal-400/10 text-teal-200 shadow-[0_0_0_1px_rgba(45,212,191,0.20)]">
            {icon}
          </div>
        ) : null}
        <div>
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <div className="mt-3 text-sm leading-6 text-white/75">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

