import { Button } from "@/components/landing/Button";
import { Container } from "@/components/landing/Container";

export function LayerHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 osf-grid opacity-70" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400/22 via-sky-500/14 to-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 left-[20%] h-[520px] w-[820px] rounded-full bg-gradient-to-r from-violet-500/14 via-fuchsia-500/10 to-cyan-400/10 blur-3xl" />

      <Container>
        <div className="relative py-16 sm:py-20">
          <p className="text-xs font-semibold tracking-widest text-cyan-200/90 uppercase">
            Fifth Layer
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Fabric Sentient Layer
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-lg leading-8 text-white/75">
            The intelligence layer that helps the Organic Security Fabric
            observe, adapt, and prove security posture over time.
          </p>
          <p className="mt-4 text-sm text-white/60">
            AI recommends. Humans approve. Automation executes. Fabric verifies.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#capabilities" variant="primary">
              Explore Capabilities
            </Button>
            <Button href="#roadmap" variant="secondary">
              View Future Roadmap
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

