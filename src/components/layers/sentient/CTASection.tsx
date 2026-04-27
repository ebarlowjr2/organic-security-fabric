import { Button } from "@/components/landing/Button";
import { Container } from "@/components/landing/Container";

export function CTASection() {
  return (
    <section className="border-t border-white/10 py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A Fabric That Learns Without Losing Control
            </h2>
            <p className="mt-4 text-pretty text-base leading-7 text-white/75">
              The Sentient Layer is designed to make cybersecurity easier to
              understand, easier to operate, and easier to prove. It brings
              intelligence into the fabric without removing human oversight.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/#layers" variant="primary">
                Back to Fabric Layers
              </Button>
              <Button href="/automation-roadmap" variant="secondary">
                View the Automation Roadmap
              </Button>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.04] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]">
            <p className="text-xs font-semibold tracking-widest text-cyan-200/90 uppercase">
              Core Message
            </p>
            <p className="mt-4 text-base leading-7 text-white/75">
              The Fabric Sentient Layer helps the fabric observe telemetry,
              understand risk, recommend action, trigger approved automation,
              verify results, and preserve evidence — while keeping humans in
              control.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

