export function ContributorRoles() {
  const roles = [
    {
      title: "Contributor",
      body: "Anyone who submits ideas, documentation, controls, scripts, detections, corrections, or examples.",
    },
    {
      title: "Maintainer",
      body: "Trusted reviewers who help validate accuracy, practicality, security, and alignment with the Fabric model.",
    },
    {
      title: "Core Steward",
      body: "Community leaders responsible for direction, governance, structure, and release decisions.",
    },
    {
      title: "Endorser",
      body: "Professionals or organizations that support the Fabric’s mission, review the model, and publicly lend their name or approval.",
    },
  ] as const;

  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {roles.map((role) => (
        <div
          key={role.title}
          className="rounded-2xl bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]"
        >
          <h3 className="text-base font-semibold text-white">{role.title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/75">{role.body}</p>
        </div>
      ))}
    </div>
  );
}

