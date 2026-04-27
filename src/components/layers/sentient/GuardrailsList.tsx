export function GuardrailsList() {
  const guardrails = [
    "No silent high-impact changes",
    "Approval required for risky remediation",
    "Source-grounded answers",
    "Full action history",
    "Rollback awareness",
    "Role-based access control",
    "Clear separation between recommendation and execution",
  ] as const;

  return (
    <div className="mt-10 rounded-2xl bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]">
      <ul className="grid gap-3 text-sm text-white/75 sm:grid-cols-2">
        {guardrails.map((guardrail) => (
          <li key={guardrail} className="flex gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
            <span>{guardrail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

