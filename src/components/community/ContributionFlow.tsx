const steps = [
  {
    title: "1. Submit",
    body: "A contributor submits an idea, control, script, guide, detection, or verification method.",
  },
  {
    title: "2. Review",
    body: "Maintainers review for clarity, technical accuracy, security, and practical value.",
  },
  {
    title: "3. Validate",
    body: "The community tests or confirms whether the contribution works in real environments.",
  },
  {
    title: "4. Align",
    body: "The contribution is mapped to the correct Fabric layer and, where useful, to known standards.",
  },
  {
    title: "5. Publish",
    body: "Approved contributions are added to the wiki, GitHub repository, automation library, or Fabric documentation.",
  },
] as const;

export function ContributionFlow() {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-5">
      {steps.map((step) => (
        <div
          key={step.title}
          className="rounded-2xl bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]"
        >
          <h3 className="text-sm font-semibold text-white">{step.title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/75">{step.body}</p>
        </div>
      ))}
    </div>
  );
}

