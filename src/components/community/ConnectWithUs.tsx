import { Container } from "@/components/landing/Container";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { Icon, Icons } from "@/components/landing/icons";
import { communityLinks } from "@/config/communityLinks";

function ExternalButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-full bg-white/8 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/12 shadow-[0_0_0_1px_rgba(255,255,255,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
    >
      {children}
    </a>
  );
}

function ConnectCard({
  title,
  description,
  url,
  buttonText,
  icon,
}: {
  title: string;
  description: string;
  url: string;
  buttonText: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-white/[0.05] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.10)] backdrop-blur-sm transition hover:bg-white/[0.07]">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-100 shadow-[0_0_0_1px_rgba(34,211,238,0.20)]">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/75">{description}</p>
          <div className="mt-6">
            <ExternalButton href={url}>{buttonText}</ExternalButton>
          </div>
          <p className="mt-3 text-xs text-white/45">
            Placeholder URL: <span className="font-mono">{url}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export function ConnectWithUs({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <section className={compact ? "" : "border-t border-white/10 py-16 sm:py-20"}>
      <Container>
        <SectionHeading
          eyebrow="Community"
          title="Connect With Us"
          description="Join the Organic Security Fabric community where practitioners, builders, and supporters can discuss ideas, contribute guidance, review controls, and help shape the future of the Fabric."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <ConnectCard
            title={communityLinks.slack.label}
            description={communityLinks.slack.description}
            url={communityLinks.slack.url}
            buttonText={communityLinks.slack.buttonText}
            icon={<Icon d={Icons.pulse} />}
          />
          <ConnectCard
            title={communityLinks.reddit.label}
            description={communityLinks.reddit.description}
            url={communityLinks.reddit.url}
            buttonText={communityLinks.reddit.buttonText}
            icon={<Icon d={Icons.book} />}
          />
          <ConnectCard
            title={communityLinks.linkedin.label}
            description={communityLinks.linkedin.description}
            url={communityLinks.linkedin.url}
            buttonText={communityLinks.linkedin.buttonText}
            icon={<Icon d={Icons.verify} />}
          />
        </div>
      </Container>
    </section>
  );
}

