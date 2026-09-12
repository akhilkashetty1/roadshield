import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceGrid from "@/components/ServiceGrid";
import GearUp from "@/components/GearUp";
import CTASection from "@/components/CTASection";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { RIDE_SERVICES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Ride Smart — 2-Wheeler Safety",
  description:
    "Defensive riding training, vehicle assessments, fleet data and safety gear for two-wheelers. Stay Alert. Stay Safe.",
};

export default function RideSmartPage() {
  return (
    <>
      <PageHero
        variant="ride"
        logoSrc="/logos/ride-smart.png"
        logoAlt="Ride Smart — a product of CVS Motors"
        logoW={441}
        logoH={354}
        eyebrow="Two Wheeler"
        title="Ride Smart"
        tagline="Stay Alert. Stay Safe."
        subtitle="The rider's world — from hazard-reading reflexes to the gear that protects you. Everything a two-wheeler rider or fleet needs to stay upright and arrive safely."
      />

      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="What's in this lane"
            title="Built for two wheels"
          >
            Every service below is delivered on-ground and tracked to
            completion — not a slide deck, a real change in how people ride.
          </SectionHeading>
          <div className="mt-11">
            <ServiceGrid services={RIDE_SERVICES} tone="signal" />
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-concrete-2 py-20 md:py-24">
        <Container>
          <SectionHeading eyebrow="Safety Gear" title="Hover the gear. See what it saves.">
            We don&rsquo;t just talk about gear — every training uses it. Explore
            the kit and what each piece protects.
          </SectionHeading>
          <div className="mt-11">
            <GearUp />
          </div>
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
                <h3 className="text-xl">Pink Vehicle Check for riders</h3>
                <p className="text-sm text-ink-soft">
                  What every woman should know about her two-wheeler.
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
        title="Put your riders in the right lane"
        sub="Book a defensive-riding session or a two-wheeler fleet assessment today."
      />
    </>
  );
}
