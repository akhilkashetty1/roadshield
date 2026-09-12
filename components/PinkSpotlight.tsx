import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { PINK_CHECKLIST } from "@/lib/site-data";

export default function PinkSpotlight() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-pinkcheck/30 bg-gradient-to-br from-white to-pinkcheck/[0.07] p-8 md:p-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-pinkcheck">
                  <span className="inline-block h-0.5 w-6 bg-pinkcheck" />
                  Women Safety
                </span>
                <h2 className="mt-4 text-[clamp(1.8rem,3.6vw,2.6rem)]">
                  Pink Vehicle Check
                </h2>
                <p className="mt-3 max-w-[48ch] leading-relaxed text-ink-soft">
                  What every woman should know about her vehicle — a hands-on
                  maintenance and safety workshop, and our signature program.
                </p>
                <Link
                  href="/pink-vehicle-check"
                  className="mt-6 inline-flex items-center gap-2 rounded-[10px] bg-pinkcheck px-5 py-3 font-display font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  Explore the program <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {PINK_CHECKLIST.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 rounded-xl border border-line bg-white/70 px-3.5 py-3 text-sm"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-pinkcheck" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
