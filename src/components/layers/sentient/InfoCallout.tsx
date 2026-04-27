export function InfoCallout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-cyan-400/14 via-sky-500/10 to-emerald-500/10 p-6 shadow-[0_0_0_1px_rgba(34,211,238,0.18)]">
      <p className="text-center text-base font-semibold tracking-tight text-white sm:text-lg">
        {children}
      </p>
    </div>
  );
}

