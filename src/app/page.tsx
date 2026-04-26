import { Button } from "@/components/landing/Button";
import { Card } from "@/components/landing/Card";
import { Container } from "@/components/landing/Container";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { Icon, Icons } from "@/components/landing/icons";

export default function Home() {
  const layers = [
    {
      title: "Fabric Core",
      description:
        "Baseline security controls applied at the beginning of an environment’s security journey.",
      examples: [
        "Separate admin and user accounts",
        "Enable logging",
        "Harden endpoint settings",
        "Apply basic firewall rules",
        "Establish patching expectations",
      ],
      icon: <Icon d={Icons.layers} />,
    },
    {
      title: "Fabric Automations",
      description:
        "Scripts, playbooks, and tools that help apply and maintain controls.",
      examples: [
        "PowerShell hardening scripts",
        "Bash scripts",
        "Ansible playbooks",
        "Drift correction",
        "Automated remediation",
      ],
      icon: <Icon d={Icons.automate} />,
    },
    {
      title: "Fabric Monitor",
      description:
        "Visibility into systems, logs, devices, and security-relevant activity.",
      examples: [
        "Syslog",
        "Wazuh or SIEM integrations",
        "Endpoint telemetry",
        "Alerting",
        "Security dashboards",
      ],
      icon: <Icon d={Icons.pulse} />,
    },
    {
      title: "Fabric Verify",
      description: "Validation that controls are actually working.",
      examples: [
        "Pass/fail control checks",
        "Evidence collection",
        "CMMC/NIST/CIS mappings",
        "Security posture scoring",
        "Repeatable verification",
      ],
      icon: <Icon d={Icons.verify} />,
    },
    {
      title: "Fabric Sentient Layer",
      description:
        "An intelligent future layer that helps users understand and improve security posture.",
      examples: [
        "Plain-English risk summaries",
        "AI-assisted recommendations",
        "Drift detection",
        "Control improvement guidance",
        "Adaptive security suggestions",
      ],
      icon: <Icon d={Icons.layers} />,
    },
  ] as const;

  return (
    <div className="min-h-full bg-[#071126] text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#071126]/80 backdrop-blur">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-400/10 shadow-[0_0_0_1px_rgba(45,212,191,0.18)]">
                <span className="text-sm font-semibold text-teal-200">OSF</span>
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold tracking-tight">
                  Organic Security Fabric
                </p>
                <p className="text-xs text-white/55">
                  From frameworks to fabrics
                </p>
              </div>
            </div>
            <nav className="hidden items-center gap-6 text-sm text-white/75 md:flex">
              <a className="hover:text-white" href="#why">
                Why
              </a>
              <a className="hover:text-white" href="#what">
                What
              </a>
              <a className="hover:text-white" href="#layers">
                Layers
              </a>
              <a className="hover:text-white" href="#automation">
                Automation
              </a>
              <a className="hover:text-white" href="#wiki">
                Wiki
              </a>
            </nav>
            <div className="hidden md:flex">
              <Button href="#layers" variant="secondary">
                View the Layers
              </Button>
            </div>
          </div>
        </Container>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 osf-grid opacity-70" />
          <div className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-teal-500/25 via-sky-500/15 to-emerald-500/15 blur-3xl" />

          <Container>
            <div className="relative py-20 sm:py-28">
              <div className="max-w-3xl">
                <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/75 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
                  A practical movement for real-world security
                </p>
                <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
                  From Frameworks to Fabrics
                </h1>
                <p className="mt-6 text-pretty text-lg leading-8 text-white/75">
                  Organic Security Fabric is a living cybersecurity system
                  designed to help organizations apply, monitor, and verify
                  real-world protections without getting buried in static
                  checklists.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button href="#what" variant="primary">
                    Explore the Fabric
                  </Button>
                  <Button href="#layers" variant="secondary">
                    View the Layers
                  </Button>
                </div>
                <p className="mt-6 text-sm text-white/60">
                  Frameworks define what good security looks like. Fabrics help
                  make it happen.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section id="why" className="border-t border-white/10 py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Why We Are Shifting"
              title="Why Another Framework Is Not the Answer"
              description="Most cybersecurity frameworks are valuable, but they often become static documents, audit checklists, or compliance exercises. Small businesses and everyday users do not need another complicated document. They need a clear way to improve security, apply protections, and know whether those protections are working."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]">
                <h3 className="text-sm font-semibold text-white">Frameworks</h3>
                <ul className="mt-4 space-y-2 text-sm text-white/75">
                  <li>Static</li>
                  <li>Document-heavy</li>
                  <li>Often compliance-focused</li>
                  <li>Hard to implement without experts</li>
                  <li>Tells you what should exist</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]">
                <h3 className="text-sm font-semibold text-white">Fabrics</h3>
                <ul className="mt-4 space-y-2 text-sm text-white/75">
                  <li>Living</li>
                  <li>Connected</li>
                  <li>Automation-ready</li>
                  <li>Built for real environments</li>
                  <li>Helps apply, monitor, and verify protections</li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        <section id="what" className="border-t border-white/10 py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Definition"
              title="What Is the Organic Security Fabric?"
              description="The Organic Security Fabric is a practical cybersecurity ecosystem built around essential controls, automation, monitoring, and verification. It is designed to help organizations improve security posture in a way that grows with them instead of overwhelming them."
            />

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <Card title="Execution layer" icon={<Icon d={Icons.layers} />}>
                It is not meant to replace NIST, CIS, CMMC, or other trusted
                standards. Instead, it acts as an execution layer that helps
                translate security expectations into real-world action.
              </Card>
              <Card title="Made for owners" icon={<Icon d={Icons.pulse} />}>
                Clear outcomes, simple implementation paths, and practical ways
                to tell whether protections are working — even without a
                dedicated security team.
              </Card>
              <Card title="Built to evolve" icon={<Icon d={Icons.verify} />}>
                A fabric is designed to adapt: controls connect to automation,
                monitoring, and verification as your environment matures.
              </Card>
            </div>

            <div className="mt-10 rounded-2xl bg-gradient-to-r from-teal-500/15 via-sky-500/10 to-emerald-500/10 p-6 shadow-[0_0_0_1px_rgba(45,212,191,0.18)]">
              <p className="text-center text-lg font-semibold tracking-tight text-white">
                Frameworks guide. Fabrics operate.
              </p>
            </div>
          </Container>
        </section>

        <section id="layers" className="border-t border-white/10 py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Core Layers"
              title="A fabric is built in layers"
              description="Each layer strengthens the one before it. Start with essentials, then connect implementation, visibility, and verification over time."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {layers.map((layer) => (
                <Card key={layer.title} title={layer.title} icon={layer.icon}>
                  <p className="text-sm text-white/75">{layer.description}</p>
                  <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/70">
                    {layer.examples.map((example) => (
                      <li key={example}>{example}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section
          id="automation"
          className="border-t border-white/10 py-16 sm:py-20"
        >
          <Container>
            <SectionHeading
              eyebrow="Automation"
              title="Automation Is Where the Fabric Comes Alive"
              description="The Organic Security Fabric is not intended to remain a document. Each control should eventually connect to an implementation path, such as a script, checklist, playbook, or verification test. The goal is to make security easier to apply and easier to prove."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <Card title="Apply" icon={<Icon d={Icons.automate} />}>
                Use scripts and guided instructions to implement protections.
              </Card>
              <Card title="Monitor" icon={<Icon d={Icons.pulse} />}>
                Collect logs and visibility from the environment.
              </Card>
              <Card title="Verify" icon={<Icon d={Icons.verify} />}>
                Confirm that controls remain in place and generate evidence.
              </Card>
            </div>

            <div className="mt-8">
              <Button href="/automation-roadmap" variant="secondary">
                View Automation Roadmap
              </Button>
            </div>
          </Container>
        </section>

        <section id="wiki" className="border-t border-white/10 py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Wiki"
              title="Built to Be Documented, Shared, and Improved"
              description="The Organic Security Fabric will be supported by a public wiki that documents each control, explains why it matters, provides implementation steps, and links to automation where available."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <Card title="What the wiki includes" icon={<Icon d={Icons.book} />}>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-white/70">
                  <li>Control explanations</li>
                  <li>Implementation guides</li>
                  <li>Scripts and automation</li>
                  <li>Verification steps</li>
                  <li>Mapping to known standards</li>
                  <li>Small business examples</li>
                  <li>Home user examples</li>
                  <li>MSSP deployment notes</li>
                </ul>
              </Card>
              <div className="rounded-2xl bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]">
                <h3 className="text-base font-semibold text-white">
                  Keep it practical
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/75">
                  The goal is a shared reference that stays usable: short
                  explanations, clear steps, and real examples — so security
                  improvements don’t depend on reading a 300-page document.
                </p>
                <div className="mt-6">
                  <Button href="/wiki" variant="primary">
                    Visit the Wiki
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-t border-white/10 py-16 sm:py-20">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Security Should Be Something You Can Use
                </h2>
                <p className="mt-4 text-pretty text-base leading-7 text-white/75">
                  The Organic Security Fabric is built for organizations that
                  need practical protection without unnecessary complexity. It
                  is designed to grow, adapt, and improve over time, just like
                  the environments it protects.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="#layers" variant="primary">
                    Start with Fabric Core
                  </Button>
                  <Button href="/automation-roadmap" variant="secondary">
                    View Automation Roadmap
                  </Button>
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.04] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]">
                <p className="text-xs font-semibold tracking-widest text-teal-300/90 uppercase">
                  What you get
                </p>
                <ul className="mt-5 space-y-3 text-sm text-white/75">
                  <li>
                    A clear starting point (Fabric Core) that doesn’t overwhelm
                    you
                  </li>
                  <li>Automation paths that reduce manual effort</li>
                  <li>Monitoring that builds visibility as you grow</li>
                  <li>Verification you can repeat and show</li>
                </ul>
                <p className="mt-6 text-xs text-white/55">
                  Static content for now — designed to evolve into a
                  documentation + automation ecosystem.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <footer className="border-t border-white/10 py-10">
          <Container>
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-white/55">
                © {new Date().getFullYear()} Organic Security Fabric
              </p>
              <div className="flex items-center gap-4 text-sm">
                <Button href="/wiki" variant="ghost">
                  Wiki
                </Button>
                <Button href="/automation-roadmap" variant="ghost">
                  Automation Roadmap
                </Button>
              </div>
            </div>
          </Container>
        </footer>
      </main>
    </div>
  );
}
