import { Card } from "@/components/landing/Card";
import { Icon, Icons } from "@/components/landing/icons";

const areas = [
  {
    title: "Fabric Core",
    body: "Baseline controls, practical safeguards, and minimum security expectations.",
    icon: <Icon d={Icons.layers} />,
  },
  {
    title: "Fabric Automations",
    body: "PowerShell scripts, Bash scripts, Ansible playbooks, RMM automations, and deployment helpers.",
    icon: <Icon d={Icons.automate} />,
  },
  {
    title: "Fabric Monitor",
    body: "Logging guidance, SIEM use cases, Wazuh/Splunk queries, alerting ideas, and visibility patterns.",
    icon: <Icon d={Icons.pulse} />,
  },
  {
    title: "Fabric Verify",
    body: "Validation checks, evidence collection methods, pass/fail logic, and compliance mappings.",
    icon: <Icon d={Icons.verify} />,
  },
  {
    title: "Fabric Sentient Layer",
    body: "AI prompts, RAG sources, local LLM ideas, agent workflows, risk summaries, and human-in-the-loop guardrails.",
    icon: <Icon d={Icons.layers} />,
  },
  {
    title: "Documentation",
    body: "Plain-English guides, diagrams, wiki pages, examples, and implementation walkthroughs.",
    icon: <Icon d={Icons.book} />,
  },
] as const;

export function ContributionAreaGrid() {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {areas.map((area) => (
        <Card key={area.title} title={area.title} icon={area.icon}>
          {area.body}
        </Card>
      ))}
    </div>
  );
}

