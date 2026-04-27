import { Button } from "@/components/landing/Button";
import { Container } from "@/components/landing/Container";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { CapabilityGrid } from "@/components/layers/sentient/CapabilityGrid";
import { CTASection } from "@/components/layers/sentient/CTASection";
import { GoodFitAvoidGrid } from "@/components/layers/sentient/GoodFitAvoidGrid";
import { GuardrailsList } from "@/components/layers/sentient/GuardrailsList";
import { InfoCallout } from "@/components/layers/sentient/InfoCallout";
import { LayerConnectionMap } from "@/components/layers/sentient/LayerConnectionMap";
import { LayerHero } from "@/components/layers/sentient/LayerHero";
import { ProcessFlow } from "@/components/layers/sentient/ProcessFlow";
import { RoadmapTimeline } from "@/components/layers/sentient/RoadmapTimeline";
import { TechnologyGrid } from "@/components/layers/sentient/TechnologyGrid";

export default function SentientLayerPage() {
  return (
    <div className="min-h-full bg-[#0B0F1A] text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0B0F1A]/80 backdrop-blur">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-300/10 shadow-[0_0_0_1px_rgba(34,211,238,0.20)]">
                <span className="text-sm font-semibold text-cyan-100">OSF</span>
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold tracking-tight">
                  Fabric Sentient Layer
                </p>
                <p className="text-xs text-white/55">
                  Intelligence with human oversight
                </p>
              </div>
            </div>

            <nav className="hidden items-center gap-6 text-sm text-white/75 md:flex">
              <a className="hover:text-white" href="#what">
                What it is
              </a>
              <a className="hover:text-white" href="#how">
                How it works
              </a>
              <a className="hover:text-white" href="#capabilities">
                Capabilities
              </a>
              <a className="hover:text-white" href="#roadmap">
                Roadmap
              </a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Button href="/#layers" variant="ghost">
                Back to Layers
              </Button>
              <Button href="#capabilities" variant="secondary">
                Explore Capabilities
              </Button>
            </div>
          </div>
        </Container>
      </header>

      <main>
        <LayerHero />

        <section id="what" className="border-t border-white/10 py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="What It Is"
              title="What Is the Fabric Sentient Layer?"
              description="The Fabric Sentient Layer is the supervised intelligence layer of the Organic Security Fabric. It is designed to help organizations make sense of security telemetry, understand control health, identify drift, recommend action, and verify whether protections are actually working."
            />

            <div className="mt-8 max-w-3xl text-base leading-7 text-white/75">
              <p>
                It does not replace human judgment. It supports security teams,
                business owners, and operators by translating complex security
                signals into clear, practical next steps.
              </p>
            </div>

            <div className="mt-10">
              <InfoCallout>
                Security that observes, adapts, and proves itself.
              </InfoCallout>
            </div>
          </Container>
        </section>

        <section className="border-t border-white/10 py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Why It Exists"
              title="Why the Fabric Needs Intelligence"
              description="Traditional frameworks define expectations, but they do not continuously interpret what is happening inside an environment. The Sentient Layer exists to close the gap between security guidance and real-world operations."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]">
                <h3 className="text-base font-semibold text-white">
                  Too Much Noise
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/75">
                  Logs, alerts, dashboards, and tools often create more
                  information than small teams can process.
                </p>
              </div>
              <div className="rounded-2xl bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]">
                <h3 className="text-base font-semibold text-white">
                  Not Enough Context
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/75">
                  Many alerts explain what happened, but not why it matters or
                  what should happen next.
                </p>
              </div>
              <div className="rounded-2xl bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]">
                <h3 className="text-base font-semibold text-white">
                  Controls Drift Over Time
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/75">
                  Security settings change, agents break, users are added, and
                  systems slowly move away from the baseline.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section id="how" className="border-t border-white/10 py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="How It Works"
              title="How the Sentient Layer Works"
              description="This is not “AI magic.” It is a supervised intelligence layer that helps observe, reason, recommend, automate with approval, verify results, and preserve evidence — while keeping humans in control."
            />
            <ProcessFlow />
          </Container>
        </section>

        <section
          id="capabilities"
          className="border-t border-white/10 py-16 sm:py-20"
        >
          <Container>
            <SectionHeading
              eyebrow="Capabilities"
              title="Core Capabilities"
              description="Designed to be practical on day one, and expandable later with links to docs, diagrams, GitHub repos, scripts, and wiki articles."
            />
            <CapabilityGrid />
          </Container>
        </section>

        <section className="border-t border-white/10 py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Technology Areas"
              title="Emerging Technologies Built Into the Roadmap"
              description="These are not all required on Day 1, but the architecture should account for them so the fabric can evolve without being rebuilt."
            />
            <TechnologyGrid />
          </Container>
        </section>

        <section className="border-t border-white/10 py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Blockchain & Web3"
              title="Where Blockchain and Web3 Fit"
              description="The Organic Security Fabric should not use blockchain for everything. Instead, blockchain and Web3 concepts should be used only where they improve trust, portability, or evidence integrity."
            />
            <GoodFitAvoidGrid />
          </Container>
        </section>

        <section className="border-t border-white/10 py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Guardrails"
              title="Human-in-the-Loop by Design"
              description="The Sentient Layer should be built with guardrails. AI can assist with interpretation, planning, and automation, but sensitive actions should require approval, logging, and verification."
            />
            <GuardrailsList />
          </Container>
        </section>

        <section className="border-t border-white/10 py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Connections"
              title="How It Connects to the Fabric"
              description="The Sentient Layer does not replace the other layers — it connects them: context, intelligence, recommendations, automation, and verification."
            />
            <LayerConnectionMap />
          </Container>
        </section>

        <section
          id="roadmap"
          className="border-t border-white/10 py-16 sm:py-20"
        >
          <Container>
            <SectionHeading
              eyebrow="Future Roadmap"
              title="Future Roadmap"
              description="A phased approach that starts with grounded guidance and matures into approved automation and adaptive insights."
            />
            <RoadmapTimeline />
          </Container>
        </section>

        <CTASection />
      </main>
    </div>
  );
}

