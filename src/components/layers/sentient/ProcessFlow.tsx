import { Card } from "@/components/landing/Card";
import { Icon, Icons } from "@/components/landing/icons";

const steps = [
  {
    title: "1. Observe",
    body: "Collect telemetry from endpoints, logs, RMM tools, SIEM platforms, cloud services, and identity systems.",
    icon: <Icon d={Icons.pulse} />,
  },
  {
    title: "2. Understand",
    body: "Normalize and interpret signals using the Fabric control model, customer context, and trusted knowledge sources.",
    icon: <Icon d={Icons.layers} />,
  },
  {
    title: "3. Recommend",
    body: "Generate plain-English guidance, remediation options, and risk summaries.",
    icon: <Icon d={Icons.verify} />,
  },
  {
    title: "4. Approve",
    body: "Keep humans in control before higher-impact changes are made.",
    icon: <Icon d={Icons.verify} />,
  },
  {
    title: "5. Execute",
    body: "Trigger approved scripts, playbooks, tickets, or automation workflows.",
    icon: <Icon d={Icons.automate} />,
  },
  {
    title: "6. Verify",
    body: "Confirm whether the action worked and preserve evidence for review or compliance.",
    icon: <Icon d={Icons.verify} />,
  },
] as const;

export function ProcessFlow() {
  return (
    <div className="mt-10">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {steps.map((step) => (
          <Card key={step.title} title={step.title} icon={step.icon}>
            {step.body}
          </Card>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-white/60">
        AI recommends. Humans approve. Automation executes. Fabric verifies.
      </p>
    </div>
  );
}

