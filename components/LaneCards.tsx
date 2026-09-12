import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./ui/Reveal";
import { RIDE_SERVICES, DRIVE_SERVICES } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const lanes = [
  {
    href: "/ride-smart",
    kicker: "Two Wheeler",
    name: "Ride Smart",
    tagline: "Stay Alert. Stay Safe.",
    services: RIDE_SERVICES.slice(0, 4),
    strip: "bg-signal",
    hover: "hover:border-signal",
    text: "text-signal",
  },
  {
    href: "/drive-smart",
    kicker: "Four Wheeler",
    name: "Drive Smart",
    tagline: "Make Safety Your Destination.",
    services: DRIVE_SERVICES.slice(0, 4),
    strip: "bg-ink",
    hover: "hover:border-ink",
    text: "text-ink",
  },
];

export default function LaneCards() {
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-2">
      {lanes.map((lane, i) => (
        <Reveal key={lane.href} delay={i * 0.08}>
          <Link
            href={lane.href}
            className={cn(
              "group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift",
              lane.hover,
            )}
          >
            <div className={cn("h-1.5 w-full", lane.strip)} />
            <div className="flex flex-1 flex-col p-7">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
                {lane.kicker}
              </span>
              <h3 className="mt-1 text-3xl">{lane.name}</h3>
              <p className={cn("mt-1 font-stencil tracking-[0.04em]", lane.text)}>
                {lane.tagline}
              </p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {lane.services.map((s) => (
                  <li
                    key={s.title}
                    className="flex items-center gap-2 text-sm text-ink-soft"
                  >
                    <span className={cn("h-1.5 w-1.5 rotate-45", lane.strip)} />
                    {s.title}
                  </li>
                ))}
              </ul>
              <span
                className={cn(
                  "mt-6 inline-flex items-center gap-2 font-display font-semibold",
                  lane.text,
                )}
              >
                Enter this lane
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
