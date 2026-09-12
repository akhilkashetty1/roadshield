"use client";

import { useEffect, useRef, useState } from "react";
import { RotateCw } from "lucide-react";
import { APPROACH_STEPS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export default function ApproachFlow() {
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
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 },
    );
    io.observe(el);
    const timer = setTimeout(reveal, 1600);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div ref={ref}>
      {/* connecting rail (desktop) */}
      <div className="relative mb-5 hidden h-[3px] lg:block">
        <div className="absolute inset-0 overflow-hidden rounded-full bg-line">
          <div
            className={cn(
              "h-full rounded-full bg-gradient-to-r from-signal via-amber to-navy transition-[width] duration-[1600ms] ease-out",
              shown ? "w-full" : "w-0",
            )}
          />
        </div>
      </div>

      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {APPROACH_STEPS.map((step, i) => (
          <li
            key={step}
            className={cn(
              "rounded-2xl border border-line bg-white p-5 shadow-card transition-all duration-500",
              shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
            )}
            style={{ transitionDelay: shown ? `${200 + i * 120}ms` : "0ms" }}
          >
            <span className="font-mono text-[0.66rem] tracking-[0.14em] text-muted">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-1 text-lg">{step}</h3>
          </li>
        ))}
      </ol>

      <p
        className={cn(
          "mt-5 inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted transition-opacity duration-500",
          shown ? "opacity-100" : "opacity-0",
        )}
        style={{ transitionDelay: shown ? "1000ms" : "0ms" }}
      >
        <RotateCw className="h-3.5 w-3.5 text-signal" strokeWidth={2} />
        A continuous cycle, not a one-off
      </p>
    </div>
  );
}
