import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import JourneyRail from "./ui/JourneyRail";
import { AAA_STEPS } from "@/lib/site-data";

const RAIL_STOPS = [
  { label: "Anticipate", color: "bg-signal" },
  { label: "Adapt", color: "bg-amber" },
  { label: "Arrive", color: "bg-navy" },
];

export default function AAASection() {
  return (
    <section className="border-y border-line bg-concrete-2 py-20 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="The Positioning"
          title="Not a brochure. A safety partner people trust with their lives."
        >
          RoadShield&rsquo;s whole promise lives in its tagline — three chapters
          that also map cleanly onto every service we run.
        </SectionHeading>

        <JourneyRail stops={RAIL_STOPS} className="mt-10 hidden md:block" />

        <div className="mt-11 grid gap-5 md:grid-cols-3">
          {AAA_STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <article className="h-full rounded-2xl border border-line bg-white p-7 shadow-card">
                <div className="font-stencil text-4xl leading-none text-signal">
                  {s.letter}
                </div>
                <h3 className="mt-2.5 text-2xl">{s.title}</h3>
                <p className="mt-2 text-[0.98rem] leading-relaxed text-ink-soft">
                  {s.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line-strong px-2.5 py-1 font-mono text-[0.66rem] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
