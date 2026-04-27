import { Button } from "@/components/landing/Button";

const checklist = [
  "I support practical cybersecurity implementation.",
  "I believe controls should be understandable and verifiable.",
  "I support automation where it improves consistency and reduces risk.",
  "I support community-driven improvement.",
  "I understand the Fabric is a complement to existing standards, not a replacement.",
] as const;

export function EndorsementPanel() {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]">
        <h3 className="text-base font-semibold text-white">
          Endorsement Checklist
        </h3>
        <ul className="mt-4 space-y-2 text-sm text-white/75">
          {checklist.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]">
        <h3 className="text-base font-semibold text-white">Endorse the Fabric</h3>
        <p className="mt-3 text-sm leading-6 text-white/75">
          Endorsement is a public signal that you support a community effort to
          make implementation and verification more practical — without
          replacing trusted standards.
        </p>
        <div className="mt-6">
          <Button href="/endorse" variant="primary">
            Endorse the Fabric
          </Button>
        </div>
        <p className="mt-4 text-xs text-white/55">
          Placeholder link for now: <span className="font-mono">/endorse</span>
        </p>
      </div>
    </div>
  );
}

