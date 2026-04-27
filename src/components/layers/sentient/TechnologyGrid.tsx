import { Card } from "@/components/landing/Card";

const technologies = [
  {
    title: "Local LLMs",
    body: "For private analysis of logs, policies, configurations, and security events.",
  },
  {
    title: "AI Agents",
    body: "For supervised workflows such as triage, remediation planning, ticket creation, and verification.",
  },
  {
    title: "RAG and Vector Search",
    body: "For grounded answers based on trusted documentation and control mappings.",
  },
  {
    title: "Normalized Security Events",
    body: "Support for structured telemetry and schemas such as OCSF-style event models.",
  },
  {
    title: "SBOM and Software Supply Chain Data",
    body: "For tracking vulnerable software, vendor risk, and exposure.",
  },
  {
    title: "Zero Trust and Device Posture",
    body: "For identity-aware and device-aware decision support.",
  },
  {
    title: "Passkeys and Passwordless Identity",
    body: "For future-ready authentication guidance.",
  },
  {
    title: "Confidential Computing",
    body: "For protecting sensitive workloads and AI processing.",
  },
  {
    title: "Federated Learning",
    body: "For learning from patterns across environments without exposing raw customer data.",
  },
  {
    title: "Blockchain and Tamper-Evident Evidence",
    body: "For optional hashing, attestation, and integrity checks around compliance evidence.",
  },
  {
    title: "Decentralized Identity and Verifiable Credentials",
    body: "For training records, operator trust, and portable proof of completion.",
  },
  {
    title: "Cyber Ranges and Digital Twins",
    body: "For testing controls and remediation safely before production rollout.",
  },
] as const;

export function TechnologyGrid() {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {technologies.map((item) => (
        <Card key={item.title} title={item.title}>
          {item.body}
        </Card>
      ))}
    </div>
  );
}

