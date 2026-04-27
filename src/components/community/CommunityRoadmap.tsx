import { Card } from "@/components/landing/Card";
import { Icon, Icons } from "@/components/landing/icons";

const items = [
  {
    title: "GitHub Repository",
    body: "For controls, scripts, issues, pull requests, and release history.",
    icon: <Icon d={Icons.layers} />,
  },
  {
    title: "Public Wiki",
    body: "For implementation guides, control explanations, examples, and mappings.",
    icon: <Icon d={Icons.book} />,
  },
  {
    title: "Contributor Directory",
    body: "For recognized contributors, maintainers, endorsers, and participating organizations.",
    icon: <Icon d={Icons.verify} />,
  },
  {
    title: "Review Board",
    body: "For experienced practitioners who help validate major updates.",
    icon: <Icon d={Icons.pulse} />,
  },
] as const;

export function CommunityRoadmap() {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <Card key={item.title} title={item.title} icon={item.icon}>
          {item.body}
        </Card>
      ))}
    </div>
  );
}

