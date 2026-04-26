import { Button } from "@/components/landing/Button";
import { Container } from "@/components/landing/Container";

export default function AutomationRoadmapPage() {
  return (
    <div className="min-h-full bg-[#0B0F1A] text-white">
      <Container>
        <div className="py-20">
          <p className="text-xs font-semibold tracking-widest text-cyan-200/90 uppercase">
            Placeholder
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Automation Roadmap
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">
            This route is a placeholder for the automation roadmap. It will link
            controls to scripts, playbooks, drift correction, and verification
            tests over time.
          </p>
          <div className="mt-8">
            <Button href="/" variant="secondary">
              Back to Landing Page
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
