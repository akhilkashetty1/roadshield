import { ArrowRight } from "lucide-react";
import Container from "./ui/Container";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import LaneLines from "./ui/LaneLines";

export default function CTASection({
  title = "Ready to make safety your destination?",
  sub = "Book a defensive-driving session or a fleet assessment. We'll map the right program for your riders and drivers.",
}: {
  title?: string;
  sub?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-signal py-20 text-white">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(70% 90% at 50% 0%, rgba(0,0,0,.14), transparent 60%)",
        }}
      />
      <LaneLines variant="dark" />
      <Container className="relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-[20ch] text-[clamp(1.9rem,4.4vw,3rem)] text-white">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-[52ch] text-white/85">{sub}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact" variant="white">
              Book an assessment <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/programs" variant="whiteGhost">
              Explore programs
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
