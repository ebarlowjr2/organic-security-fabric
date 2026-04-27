import { Card } from "@/components/landing/Card";
import { Icon, Icons } from "@/components/landing/icons";

const capabilities = [
  {
    title: "Local LLM Support",
    body: "Run private models close to customer data where privacy and data control matter.",
    icon: <Icon d={Icons.layers} />,
  },
  {
    title: "RAG Knowledge Engine",
    body: "Answer from trusted sources such as the Organic Security Fabric wiki, control library, internal policies, and approved remediation playbooks.",
    icon: <Icon d={Icons.book} />,
  },
  {
    title: "Control Drift Detection",
    body: "Detect when systems move away from the approved security baseline.",
    icon: <Icon d={Icons.pulse} />,
  },
  {
    title: "Plain-English Risk Translation",
    body: "Turn complex security events into clear summaries for business owners and operators.",
    icon: <Icon d={Icons.verify} />,
  },
  {
    title: "Guided Remediation",
    body: "Recommend scripts, playbooks, or manual steps based on approved Fabric guidance.",
    icon: <Icon d={Icons.automate} />,
  },
  {
    title: "Evidence Preservation",
    body: "Store verification results, remediation history, and control evidence in a repeatable format.",
    icon: <Icon d={Icons.verify} />,
  },
] as const;

export function CapabilityGrid() {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {capabilities.map((capability) => (
        <Card
          key={capability.title}
          title={capability.title}
          icon={capability.icon}
        >
          {capability.body}
        </Card>
      ))}
    </div>
  );
}

