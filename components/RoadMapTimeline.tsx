"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const ACTIVITIES = [
  { month: "Feb", pct: 8, label: "Winter Safety Drive", row: 0 },
  { month: "May", pct: 33, label: "Mid-Year Assessments", row: 1 },
  { month: "Aug", pct: 58, label: "Monsoon Readiness", row: 0 },
  { month: "Nov", pct: 92, label: "Annual Review", row: 1 },
];

export default function RoadMapTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setShown(true);
      io.disconnect();
      clearTimeout(timer);
    };
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) reveal();
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.2 },
    );
    io.observe(el);
    const timer = setTimeout(reveal, 1600);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="rounded-3xl border border-line bg-white p-6 shadow-card md:p-10"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">
          Annual Road Safety Map
        </span>
        <span className="rounded-full border border-line-strong px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-muted">
          Illustrative calendar
        </span>
      </div>

      {/* activity callouts above the track */}
      <div className="relative mt-10 h-12 sm:h-9">
        {ACTIVITIES.map((a, i) => (
          <div
            key={a.label}
            className={cn(
              "absolute flex -translate-x-1/2 flex-col items-center transition-all duration-500",
              a.row === 0 ? "top-0" : "top-0 sm:top-5",
              shown ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
            )}
            style={{ left: `${a.pct}%`, transitionDelay: shown ? `${500 + i * 150}ms` : "0ms" }}
          >
            <span className="whitespace-nowrap rounded-full border border-line-strong bg-concrete px-2.5 py-1 font-mono text-[0.62rem] text-ink-soft">
              {a.label}
            </span>
            <span className="mt-1 h-3 w-px bg-line-strong" />
          </div>
        ))}
      </div>

      {/* track */}
      <div className="relative mt-2 h-2.5">
        <div className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-concrete-2">
          <div
            className={cn(
              "h-full rounded-full bg-gradient-to-r from-signal via-amber to-navy transition-[width] duration-[1600ms] ease-out",
              shown ? "w-full" : "w-0",
            )}
          />
        </div>
        {ACTIVITIES.map((a, i) => (
          <span
            key={a.label}
            className={cn(
              "absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white ring-2 ring-signal transition-all duration-500",
              shown ? "scale-100 opacity-100" : "scale-50 opacity-0",
            )}
            style={{ left: `${a.pct}%`, transitionDelay: shown ? `${500 + i * 150}ms` : "0ms" }}
          />
        ))}
      </div>

      {/* month labels */}
      <div className="mt-3 flex justify-between">
        {MONTHS.map((m) => (
          <span
            key={m}
            className="font-mono text-[0.62rem] uppercase tracking-[0.05em] text-muted"
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}
