import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Gauge } from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceGrid from "@/components/ServiceGrid";
import ComplianceCluster from "@/components/ComplianceCluster";
import CTASection from "@/components/CTASection";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import LaneLines from "@/components/ui/LaneLines";
import { DRIVE_SERVICES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Drive Smart — 4-Wheeler & Fleet Safety",
  description:
    "Defensive driving training, driver assessments, fleet data and compliance for four-wheelers. Make Safety Your Destination.",
};

export default function DriveSmartPage() {
  return (
    <>
      <PageHero
        variant="drive"
        logoSrc="/logos/drive-smart.png"
        logoAlt="Drive Smart — a product of CVS Motors"
        logoW={436}
        logoH={207}
        eyebrow="Four Wheeler"
        title="Drive Smart"
        tagline="Make Safety Your Destination."
        subtitle="The driver and fleet world — composed, measured and compliant. From objective driver assessments to end-to-end renewal management for whole fleets."
      />

      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="What's in this lane"
            tone="navy"
            title="Built for fleets & drivers"
          >
            Data-driven from the first assessment to the last renewal — with
            follow-up until every driver and vehicle is compliant.
          </SectionHeading>
          <div className="mt-11">
            <ServiceGrid services={DRIVE_SERVICES} tone="navy" />
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-concrete-2 py-20 md:py-24">
        <LaneLines variant="light" />
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <span className="inline-flex items-center gap-2 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-navy">
                <span className="inline-block h-0.5 w-6 bg-navy" /> Real-Time Data
              </span>
              <h2 className="mt-4 text-[clamp(1.9rem,4vw,2.8rem)] text-ink">
                Your fleet&rsquo;s safety, on one dial
              </h2>
              <p className="mt-4 max-w-[48ch] leading-relaxed text-ink-soft">
                Every driving licence and insurance policy tracked to its expiry,
                every renewal chased to completion. No spreadsheets, no
                surprises — one live source of truth for compliance.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "Digital data collection & analysis",
                  "Real-time validity tracking with alerts",
                  "Renewal service handled for you",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-sm text-ink">
                    <Check className="h-4 w-4 shrink-0 text-navy" />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.08}>
              <ComplianceCluster />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-concrete-2 py-20 md:py-24">
        <Container>
          <Reveal>
            <div className="grid items-center gap-8 rounded-3xl border border-line bg-white p-8 shadow-card md:grid-cols-[auto_1fr] md:p-12">
              <span className="grid h-20 w-20 place-items-center rounded-2xl bg-navy/[0.08] text-navy">
                <Gauge className="h-10 w-10" strokeWidth={1.6} />
              </span>
              <div>
                <h3 className="text-2xl">Fleet managers start here</h3>
                <p className="mt-2 max-w-[54ch] text-ink-soft">
                  Give us your fleet size and we&rsquo;ll map a full program —
                  driver assessments, defensive-driving batches, live D/L &
                  insurance tracking, and renewals handled end-to-end.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 rounded-[10px] bg-navy px-5 py-3 font-display font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  Assess my fleet <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <Reveal>
            <Link
              href="/pink-vehicle-check"
              className="group flex flex-wrap items-center gap-4 rounded-2xl border border-pinkcheck/30 bg-gradient-to-br from-white to-pinkcheck/[0.07] p-7 transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <Check className="h-6 w-6 text-pinkcheck" />
              <div className="mr-auto">
                <h3 className="text-xl">Pink Vehicle Check for drivers</h3>
                <p className="text-sm text-ink-soft">
                  What every woman should know about her car.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 font-display font-semibold text-pinkcheck">
                Explore
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
              </span>
            </Link>
          </Reveal>
        </Container>
      </section>

      <CTASection
        title="Make safety your fleet's destination"
        sub="Book a driver assessment or a full four-wheeler fleet program today."
      />
    </>
  );
}
