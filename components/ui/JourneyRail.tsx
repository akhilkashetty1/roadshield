"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type JourneyStop = { label: string; color: string };

export default function JourneyRail({
  stops,
  className,
}: {
  stops: JourneyStop[];
  className?: string;
}) {
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
    <div ref={ref} className={cn("mx-auto w-full max-w-2xl", className)}>
      <div className="relative h-2.5">
        <div className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-line">
          <div
            className={cn(
              "h-full rounded-full bg-gradient-to-r from-signal via-amber to-navy transition-[width] duration-[1400ms] ease-out",
              shown ? "w-full" : "w-0",
            )}
          />
        </div>
        <div className="relative flex items-center justify-between">
          {stops.map((s, i) => (
            <span
              key={s.label}
              className={cn(
                "h-2.5 w-2.5 rounded-full ring-4 ring-white transition-all duration-500",
                s.color,
                shown ? "scale-100 opacity-100" : "scale-50 opacity-0",
              )}
              style={{ transitionDelay: shown ? `${200 + i * 220}ms` : "0ms" }}
            />
          ))}
        </div>
      </div>
      <div className="relative mt-3 flex justify-between">
        {stops.map((s) => (
          <span
            key={s.label}
            className="flex-1 text-center font-mono text-[0.66rem] uppercase tracking-[0.1em] text-muted first:text-left last:text-right"
          >
            {s.label}
          </span>
        ))}
      </div>
    </div>
  );
}
