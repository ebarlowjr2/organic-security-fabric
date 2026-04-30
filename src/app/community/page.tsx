import { Button } from "@/components/landing/Button";
import { Container } from "@/components/landing/Container";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { CommunityHero } from "@/components/community/CommunityHero";
import { CommunityRoadmap } from "@/components/community/CommunityRoadmap";
import { ContributionAreaGrid } from "@/components/community/ContributionAreaGrid";
import { ContributionFlow } from "@/components/community/ContributionFlow";
import { ContributorRoles } from "@/components/community/ContributorRoles";
import { ConnectWithUs } from "@/components/community/ConnectWithUs";
import { EndorsementPanel } from "@/components/community/EndorsementPanel";
import { PrinciplesGrid } from "@/components/community/PrinciplesGrid";
import { TrustBadges } from "@/components/community/TrustBadges";
import Image from "next/image";

export default function CommunityPage() {
  return (
    <div className="min-h-full bg-[#0B0F1A] text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0B0F1A]/80 backdrop-blur">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-white/[0.05] shadow-[0_0_0_1px_rgba(255,255,255,0.10)]">
                <Image
                  src="/osf-logo.png"
                  alt="Organic Security Fabric logo"
                  width={36}
                  height={36}
                  priority
                />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold tracking-tight">
                  Organic Security Fabric
                </p>
                <p className="text-xs text-white/55">Community</p>
              </div>
            </div>

            <nav className="hidden items-center gap-6 text-sm text-white/75 md:flex">
              <a className="hover:text-white" href="#areas">
                Contribution Areas
              </a>
              <a className="hover:text-white" href="#contribute">
                Contribute
              </a>
              <a className="hover:text-white" href="#endorse">
                Endorse
              </a>
              <a className="hover:text-white" href="#connect">
                Connect With Us
              </a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Button href="/#layers" variant="ghost">
                Explore the Layers
              </Button>
              <Button href="#contribute" variant="secondary">
                Become a Contributor
              </Button>
            </div>
          </div>
        </Container>
      </header>

      <main>
        <CommunityHero />

        <section className="border-t border-white/10 py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Why Community Matters"
              title="Why Community Matters"
              description="Organic Security Fabric is being built around a simple belief: cybersecurity improves when practitioners share what actually works. Security teams, MSPs, MSSPs, engineers, auditors, educators, and business owners all see different parts of the problem. The Fabric brings those perspectives together into a practical model that can evolve over time."
            />

            <div className="mt-8 max-w-3xl text-base leading-7 text-white/75">
              <p>
                This is not intended to replace trusted standards. It is
                intended to help make security guidance easier to apply,
                monitor, and verify.
              </p>
            </div>

            <div className="mt-10 rounded-2xl bg-gradient-to-r from-cyan-400/14 via-sky-500/10 to-emerald-500/10 p-6 shadow-[0_0_0_1px_rgba(34,211,238,0.18)]">
              <p className="text-center text-base font-semibold tracking-tight text-white sm:text-lg">
                Security should not only be documented. It should be usable,
                repeatable, and verifiable.
              </p>
            </div>
          </Container>
        </section>

        <section id="areas" className="border-t border-white/10 py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Ways to Contribute"
              title="Ways to Contribute"
              description="Whether you write scripts, review controls, document lessons learned, or test guidance in real environments, your work can become shared building blocks for the community."
            />
            <ContributionAreaGrid />
          </Container>
        </section>

        <section
          id="contribute"
          className="border-t border-white/10 py-16 sm:py-20"
        >
          <Container>
            <SectionHeading
              eyebrow="Roles"
              title="Contributor Roles"
              description="A clear, transparent model keeps the project fair, practical, and usable as it grows."
            />
            <ContributorRoles />
          </Container>
        </section>

        <section className="border-t border-white/10 py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Process"
              title="How Contributions Flow"
              description="A simple review-and-validate loop helps ensure contributions are accurate, safe, and useful in real environments."
            />
            <ContributionFlow />
          </Container>
        </section>

        <section className="border-t border-white/10 py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Principles"
              title="Community Principles"
              description="We want the Fabric to stay open, practical, and trustworthy — without turning into a product or a checklist exercise."
            />
            <PrinciplesGrid />
          </Container>
        </section>

        <section id="endorse" className="border-t border-white/10 py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Endorsement"
              title="Endorse the Fabric"
              description="Endorsement is for professionals and organizations that believe cybersecurity needs a more practical operational layer. Endorsing the Fabric does not mean replacing NIST, CIS, CMMC, ISO, or other trusted standards. It means supporting a community effort to help make those expectations easier to implement and verify."
            />
            <EndorsementPanel />
          </Container>
        </section>

        <section className="border-t border-white/10 py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Recognition"
              title="Recognition and Trust"
              description="Contributors should receive visible credit for meaningful work. The Fabric should track attribution, review status, tested environments, version history, and verification status so users can understand the maturity of each contribution."
            />
            <TrustBadges />
          </Container>
        </section>

        <section className="border-t border-white/10 py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Coming Soon"
              title="Coming Soon"
              description="The community experience will grow over time with transparent workflows and public resources."
            />
            <CommunityRoadmap />
          </Container>
        </section>

        <div id="connect">
          <ConnectWithUs />
        </div>

        <section className="border-t border-white/10 py-16 sm:py-20">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Help Make Security Easier to Apply, Monitor, and Prove
                </h2>
                <p className="mt-4 text-pretty text-base leading-7 text-white/75">
                  The Organic Security Fabric grows through shared experience.
                  Whether you write scripts, review controls, test guidance,
                  build detections, document lessons learned, or simply endorse
                  the mission, your contribution helps make cybersecurity more
                  practical for everyone.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="#contribute" variant="primary">
                    Become a Contributor
                  </Button>
                  <Button href="/endorse" variant="secondary">
                    Endorse the Fabric
                  </Button>
                  <Button href="/#layers" variant="ghost">
                    Explore the Layers
                  </Button>
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.04] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]">
                <p className="text-xs font-semibold tracking-widest text-cyan-200/90 uppercase">
                  Community-First
                </p>
                <p className="mt-4 text-base leading-7 text-white/75">
                  Organic Security Fabric is not a vendor product or another
                  static framework. It is a practitioner-driven effort to build
                  practical, reusable guidance, automation, monitoring, and
                  verification methods that work across real environments.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
