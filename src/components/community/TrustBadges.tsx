const badges = [
  "Draft",
  "Community Reviewed",
  "Technically Validated",
  "Automation Available",
  "Verification Available",
  "Maintainer Approved",
] as const;

function Badge({ label }: { label: string }) {
  return (
    <div className="rounded-full bg-white/5 px-3 py-2 text-xs font-medium text-white/80 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]">
      {label}
    </div>
  );
}

export function TrustBadges() {
  return (
    <div className="mt-10">
      <div className="flex flex-wrap gap-3">
        {badges.map((badge) => (
          <Badge key={badge} label={badge} />
        ))}
      </div>
      <p className="mt-6 max-w-3xl text-sm leading-6 text-white/75">
        These are example labels the community can use to communicate maturity,
        review status, and availability of automation and verification over
        time.
      </p>
    </div>
  );
}

