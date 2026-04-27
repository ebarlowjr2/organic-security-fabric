import { Card } from "@/components/landing/Card";
import { Icon, Icons } from "@/components/landing/icons";

const connections = [
  {
    title: "Fabric Core",
    body: "Defines the baseline the Sentient Layer evaluates against.",
    icon: <Icon d={Icons.layers} />,
  },
  {
    title: "Fabric Automations",
    body: "Provides the scripts and playbooks the Sentient Layer can recommend or trigger.",
    icon: <Icon d={Icons.automate} />,
  },
  {
    title: "Fabric Monitor",
    body: "Provides telemetry, logs, alerts, and visibility.",
    icon: <Icon d={Icons.pulse} />,
  },
  {
    title: "Fabric Verify",
    body: "Confirms whether recommendations and automations were successful.",
    icon: <Icon d={Icons.verify} />,
  },
  {
    title: "Fabric Sentient Layer",
    body: "Connects context, intelligence, recommendations, automation, and verification.",
    icon: <Icon d={Icons.layers} />,
  },
] as const;

export function LayerConnectionMap() {
  return (
    <div className="mt-10">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {connections.map((item) => (
          <Card key={item.title} title={item.title} icon={item.icon}>
            {item.body}
          </Card>
        ))}
      </div>
    </div>
  );
}

