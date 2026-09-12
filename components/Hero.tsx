import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "./ui/Container";
import Eyebrow from "./ui/Eyebrow";
import LaneLines from "./ui/LaneLines";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-white to-concrete">
      {/* warm red glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(85% 65% at 50% -10%, rgba(218,31,38,.10), transparent 55%)",
        }}
      />
      <LaneLines variant="light" />

      <Container className="relative py-[4.5rem] md:py-24">
        <Eyebrow>Defensive Riding &amp; Defensive Driving</Eyebrow>
        <h1 className="mt-5 max-w-[16ch] text-[clamp(2.9rem,7.4vw,6rem)] font-bold leading-[1.02] tracking-[-0.01em] text-ink">
          One road to <span className="text-signal">safety.</span> Two ways to
          get there.
        </h1>
        <p className="mt-6 font-stencil text-[clamp(1.1rem,2.4vw,1.7rem)] tracking-[0.08em] text-ink">
          Anticipate. Adapt. Arrive.
        </p>
        <p className="mt-6 max-w-[58ch] text-[1.12rem] leading-relaxed text-ink-soft">
          RoadShield helps organizations move beyond basic road-safety
          compliance and build a world-class safety culture — through defensive
          riding, defensive driving and lasting behavioural change.
        </p>
        <p className="mt-4 font-mono text-[0.74rem] uppercase tracking-[0.16em] text-muted">
          A Division of CVS Motors
        </p>

        {/* The fork — standard Ride Smart / Drive Smart marks */}
        <div className="mt-11 grid max-w-3xl gap-4 sm:grid-cols-2">
          <Link
            href="/ride-smart"
            className="group relative overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-signal hover:shadow-lift"
          >
            <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-signal transition-transform duration-300 group-hover:scale-x-100" />
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
              Two Wheeler
            </span>
            <div className="mt-3 flex h-24 items-center">
              <Image
                src="/logos/ride-smart.png"
                alt="Ride Smart — Stay Alert. Stay Safe."
                width={441}
                height={354}
                priority
                className="h-20 w-auto"
              />
            </div>
            <span className="mt-4 inline-flex items-center gap-2 text-[0.8rem] font-semibold uppercase tracking-[0.06em] text-signal">
              Enter the rider journey
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
            </span>
          </Link>

          <Link
            href="/drive-smart"
            className="group relative overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-ink hover:shadow-lift"
          >
            <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-ink transition-transform duration-300 group-hover:scale-x-100" />
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
              Four Wheeler
            </span>
            <div className="mt-3 flex h-24 items-center">
              <Image
                src="/logos/drive-smart.png"
                alt="Drive Smart — Make Safety Your Destination."
                width={436}
                height={207}
                priority
                className="h-16 w-auto"
              />
            </div>
            <span className="mt-4 inline-flex items-center gap-2 text-[0.8rem] font-semibold uppercase tracking-[0.06em] text-ink">
              Enter the driver journey
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
