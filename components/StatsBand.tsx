import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import StatCounter from "./ui/StatCounter";
import Reveal from "./ui/Reveal";
import { STATS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export default function StatsBand() {
  return (
    <section className="border-y border-line bg-white py-20">
      <Container>
        <SectionHeading eyebrow="Impact" title="Numbers that earn trust">
          Figures below are illustrative placeholders — we swap in your real
          programme numbers before launch.
        </SectionHeading>
        <Reveal className="mt-10 grid grid-cols-2 gap-y-8 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={cn(
                "px-4 text-center",
                i < STATS.length - 1 && "md:border-r md:border-line",
              )}
            >
              <div className="font-mono text-[2.6rem] font-semibold leading-none">
                <StatCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-ink-soft">{s.label}</div>
              <div className="mt-1.5 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-muted">
                {s.note}
              </div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
