import { Button } from "@/components/landing/Button";
import { Container } from "@/components/landing/Container";

export function CommunityHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 osf-grid opacity-70" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400/22 via-violet-500/14 to-fuchsia-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 left-[20%] h-[520px] w-[820px] rounded-full bg-gradient-to-r from-emerald-500/10 via-sky-500/10 to-cyan-400/10 blur-3xl" />

      <Container>
        <div className="relative py-16 sm:py-20">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/75 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
            Community-driven, vendor-neutral, practical
          </p>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Build the Fabric With Us
          </h1>
          <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-white/75">
            Organic Security Fabric is a community-driven effort to make
            cybersecurity implementation more practical, observable, and
            sustainable across real environments.
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-white/60">
            Frameworks define outcomes. The Fabric helps turn those outcomes
            into shared practices, implementation guidance, automation,
            monitoring, and verification.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#contribute" variant="primary">
              Become a Contributor
            </Button>
            <Button href="#endorse" variant="secondary">
              Endorse the Fabric
            </Button>
            <Button href="#areas" variant="secondary">
              View Contribution Areas
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

