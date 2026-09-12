import { Check } from "lucide-react";
import Reveal from "./ui/Reveal";
import { PROGRAMS } from "@/lib/site-data";

export default function ProgramCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {PROGRAMS.map((p, i) => {
        const Icon = p.icon;
        return (
          <Reveal key={p.title} delay={i * 0.05}>
            <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-concrete text-navy">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <h3 className="text-xl">{p.title}</h3>
              </div>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                {p.desc}
              </p>
              <ul className="mt-4 space-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2.5 text-sm text-ink">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
