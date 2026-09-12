import type { Metadata } from "next";
import { Map as MapIcon } from "lucide-react";
import PageHero from "@/components/PageHero";
import ProgramCards from "@/components/ProgramCards";
import RoadMapTimeline from "@/components/RoadMapTimeline";
import CTASection from "@/components/CTASection";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Programs — Safety Map, Accident Management & Policy",
  description:
    "Cross-cutting road-safety programs: the Annual Road Safety Map, Accident Management, Policy Frameworks and Video Bytes.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        variant="programs"
        icon={MapIcon}
        eyebrow="Shared Programs"
        title="Programs that run under every lane"
        subtitle="Whether you ride or drive, these programs plan the year, respond to accidents, set the rules and keep safety top of mind."
      />

      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="The Full Set"
            tone="navy"
            title="Plan. Respond. Govern. Communicate."
          >
            Four programs that turn one-off trainings into a continuous
            safety culture.
          </SectionHeading>
          <div className="mt-11">
            <ProgramCards />
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-concrete-2 py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="See It Mapped"
            title="A year of safety, plotted out"
          >
            The Annual Road Safety Map turns scattered trainings into one
            charter roadmap — every activity plotted, tracked and followed
            through across the calendar year.
          </SectionHeading>
          <div className="mt-10">
            <RoadMapTimeline />
          </div>
        </Container>
      </section>

      <CTASection
        title="Build your annual road-safety map"
        sub="Let's plot a full calendar of trainings, assessments and campaigns for your organisation."
      />
    </>
  );
}
