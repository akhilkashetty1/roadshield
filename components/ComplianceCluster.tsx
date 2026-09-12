"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const METRICS = [
  { label: "D/L validity tracked", target: 100 },
  { label: "Insurance validity tracked", target: 100 },
  { label: "Renewals to completion", target: 100 },
];

export default function ComplianceCluster() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [p, setP] = useState(0);

  useEffect(() => {
    const el = ref.current;
    let raf = 0;
    let timer: ReturnType<typeof setTimeout>;
    let io: IntersectionObserver | undefined;
    let started = false;

    const run = () => {
      if (started) return;
      started = true;
      io?.disconnect();
      clearTimeout(timer);
      if (reduce) {
        setP(1);
        return;
      }
      const start = performance.now();
      const dur = 1800;
      const tick = (t: number) => {
        const x = Math.min((t - start) / dur, 1);
        setP(1 - Math.pow(1 - x, 3));
        if (x < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    if (!el || typeof IntersectionObserver === "undefined") {
      run();
    } else {
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) run();
        },
        { threshold: 0.3 },
      );
      io.observe(el);
      timer = setTimeout(run, 2000);
    }

    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
      clearTimeout(timer);
    };
  }, [reduce]);

  const R = 54;
  const C = 2 * Math.PI * R;
  const pct = Math.round(100 * p);

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#242732] to-[#191b21] p-7 text-night-ink shadow-[0_24px_60px_-24px_rgba(0,0,0,0.75)] ring-1 ring-inset ring-white/[0.05]"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-night-ink-soft">
          Instrument Cluster
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-night-red">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-night-red opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-night-red" />
          </span>
          Live
        </span>
      </div>

      <div className="mt-6 flex flex-col items-center gap-7 sm:flex-row">
        <div className="relative grid shrink-0 place-items-center">
          <svg width="150" height="150" viewBox="0 0 140 140" className="-rotate-90">
            <circle cx="70" cy="70" r={R} fill="none" stroke="#2C2F38" strokeWidth="12" />
            <circle
              cx="70"
              cy="70"
              r={R}
              fill="none"
              stroke="#F1434A"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={C}
              strokeDashoffset={C * (1 - p)}
            />
          </svg>
          <div className="absolute text-center">
            <div className="font-mono text-4xl font-semibold tabular-nums">
              {pct}
              <span className="text-night-red">%</span>
            </div>
            <div className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-night-ink-soft">
              Compliance
            </div>
          </div>
        </div>

        <div className="w-full space-y-4">
          {METRICS.map((m) => (
            <div key={m.label}>
              <div className="flex justify-between font-mono text-[0.72rem]">
                <span className="text-night-ink-soft">{m.label}</span>
                <span className="tabular-nums">{Math.round(m.target * p)}%</span>
              </div>
              <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-night-line">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-night-navy to-night-red"
                  style={{ width: `${m.target * p}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-6 border-t border-night-line pt-4 font-mono text-[0.66rem] leading-relaxed text-night-ink-soft">
        Every licence &amp; insurance date tracked in real time and followed up
        until completion. 100% is the RoadShield standard.
      </p>
    </div>
  );
}
