import type { Metadata } from "next";
import { HeartHandshake, Check, Wrench } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import JourneyRail from "@/components/ui/JourneyRail";
import { PINK_CHECKLIST } from "@/lib/site-data";

const WORKSHOP_STEPS = [
  { label: "Book", color: "bg-pinkcheck" },
  { label: "Learn", color: "bg-pinkcheck" },
  { label: "Practice", color: "bg-pinkcheck" },
  { label: "Confident", color: "bg-signal" },
];

export const metadata: Metadata = {
  title: "Pink Vehicle Check — Women Safety",
  description:
    "What every woman should know about her vehicle — a hands-on maintenance and safety workshop for two- and four-wheelers.",
};

export default function PinkVehicleCheckPage() {
  return (
    <>
      <PageHero
        variant="pink"
        icon={HeartHandshake}
        eyebrow="Women Safety"
        title="Pink Vehicle Check"
        tagline="What every woman should know about her vehicle."
        subtitle="A hands-on maintenance and safety workshop with practical demos — so every woman can handle her car or two-wheeler with total confidence."
      />

      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="The Workshop"
            tone="pink"
            title="Basic maintenance, made practical"
          >
            No jargon, no assumptions — just the essentials, demonstrated
            hands-on. Here&rsquo;s what we cover.
          </SectionHeading>
          <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PINK_CHECKLIST.map((item, i) => (
              <Reveal key={item} delay={i * 0.05}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-line bg-white p-5 shadow-card">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-pinkcheck/[0.1] text-pinkcheck">
                    <Check className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <span className="pt-1 font-medium">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-16 md:py-20">
        <Container>
          <SectionHeading eyebrow="How It Works" tone="pink" title="Your workshop journey">
            From booking to driving away confident — four simple steps.
          </SectionHeading>
          <div className="mt-10">
            <JourneyRail stops={WORKSHOP_STEPS} />
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-concrete-2 py-16">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-center gap-5 rounded-3xl border border-line bg-white p-8 shadow-card md:p-10">
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-pinkcheck/[0.1] text-pinkcheck">
                <Wrench className="h-8 w-8" strokeWidth={1.6} />
              </span>
              <p className="max-w-[60ch] text-lg text-ink-soft">
                Delivered as a <strong className="text-ink">practical workshop</strong> —
                individually or for teams, companies and communities. We bring
                the vehicles, the tools and the confidence.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection
        title="Bring the Pink Vehicle Check to your team"
        sub="Ideal for corporate women-safety initiatives, communities and colleges. Let's schedule a session."
      />
    </>
  );
}
