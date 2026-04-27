const phases = [
  {
    title: "Phase 1: Guided Intelligence",
    bullets: [
      "Plain-English explanations",
      "Control documentation assistant",
      "RAG over the wiki",
      "Manual recommendations",
    ],
  },
  {
    title: "Phase 2: Assisted Operations",
    bullets: [
      "Drift detection",
      "Suggested remediation",
      "Ticket generation",
      "Evidence summaries",
    ],
  },
  {
    title: "Phase 3: Approved Automation",
    bullets: [
      "Human-approved playbook execution",
      "Verification checks",
      "Rollback notes",
      "Control health scoring",
    ],
  },
  {
    title: "Phase 4: Adaptive Fabric",
    bullets: [
      "Pattern learning",
      "Risk-based recommendations",
      "Optional tamper-evident evidence",
      "Cross-environment insights with privacy controls",
    ],
  },
] as const;

export function RoadmapTimeline() {
  return (
    <div className="mt-10 space-y-6">
      {phases.map((phase) => (
        <div
          key={phase.title}
          className="rounded-2xl bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]"
        >
          <h3 className="text-base font-semibold text-white">{phase.title}</h3>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/75">
            {phase.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

