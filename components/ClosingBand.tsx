import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { CLOSING_LINES } from "@/lib/site-data";

export default function ClosingBand() {
  return (
    <section className="border-y border-line bg-concrete-2 py-20 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          {CLOSING_LINES.map((line, i) => (
            <Reveal key={line.subject} delay={i * 0.12}>
              <p className="font-display text-[clamp(1.5rem,3.6vw,2.4rem)] leading-[1.15] text-ink">
                <span className="text-signal">{line.subject}</span>{" "}
                {line.predicate}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
