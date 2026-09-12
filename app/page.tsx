import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import AAASection from "@/components/AAASection";
import LaneCards from "@/components/LaneCards";
import ApproachFlow from "@/components/ApproachFlow";
import ProgramCards from "@/components/ProgramCards";
import PinkSpotlight from "@/components/PinkSpotlight";
import StatsBand from "@/components/StatsBand";
import ClosingBand from "@/components/ClosingBand";
import CTASection from "@/components/CTASection";
import { APPROACH_NOTE } from "@/lib/site-data";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <Hero />
      <AAASection />

      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Choose Your Lane"
            title="One brand, one road, two journeys"
          >
            Every visitor arrives as a rider or a driver. Pick a lane and see the
            services built specifically for you.
          </SectionHeading>
          <LaneCards />
        </Container>
      </section>

      <section className="border-y border-line bg-concrete-2 py-20 md:py-24">
        <Container>
          <SectionHeading eyebrow="Our Approach" title="Educate. Engage. Empower.">
            {APPROACH_NOTE.lead} {APPROACH_NOTE.body}
          </SectionHeading>
          <div className="mt-11">
            <ApproachFlow />
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-white py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Shared Programs"
            tone="navy"
            title="Safety that runs under both lanes"
          >
            Cross-cutting programs that serve riders and drivers alike — from the
            annual safety map to full accident management.
          </SectionHeading>
          <div className="mt-10">
            <ProgramCards />
          </div>
          <div className="mt-8">
            <Button href="/programs" variant="ghost">
              See all programs <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>

      <PinkSpotlight />
      <StatsBand />
      <ClosingBand />
      <CTASection />
    </>
  );
}
