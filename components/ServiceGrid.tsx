import { cn } from "@/lib/utils";
import Reveal from "./ui/Reveal";
import type { Service } from "@/lib/site-data";

const toneMap: Record<string, string> = {
  signal: "text-signal",
  navy: "text-navy",
  pink: "text-pinkcheck",
};

export default function ServiceGrid({
  services,
  tone = "signal",
}: {
  services: Service[];
  tone?: "signal" | "navy" | "pink";
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => {
        const Icon = s.icon;
        return (
          <Reveal key={s.title} delay={i * 0.05}>
            <article className="h-full rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
              <div
                className={cn(
                  "grid h-12 w-12 place-items-center rounded-xl bg-concrete",
                  toneMap[tone],
                )}
              >
                <Icon className="h-6 w-6" strokeWidth={1.8} />
              </div>
              <h3 className="mt-4 text-xl">{s.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                {s.desc}
              </p>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
