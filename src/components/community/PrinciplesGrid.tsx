import { Card } from "@/components/landing/Card";

const principles = [
  "Open by default",
  "Vendor-neutral where possible",
  "Practical over theoretical",
  "Explainable in plain English",
  "Automation-ready",
  "Verification-focused",
  "Human-in-the-loop for high-impact actions",
  "Respectful peer review",
  "Attribution for contributors",
  "Security before convenience",
] as const;

export function PrinciplesGrid() {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {principles.map((principle) => (
        <Card key={principle} title={principle}>
          <span className="text-white/70">
            A shared default that keeps the Fabric usable and trustworthy.
          </span>
        </Card>
      ))}
    </div>
  );
}

