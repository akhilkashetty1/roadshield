"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function StatCounter({
  value,
  suffix,
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

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
        setN(value);
        return;
      }
      const start = performance.now();
      const dur = 1500;
      const tick = (t: number) => {
        const p = Math.min((t - start) / dur, 1);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
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
      // Safety net for hidden/backgrounded documents where IO won't fire.
      timer = setTimeout(run, 2000);
    }

    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
      clearTimeout(timer);
    };
  }, [reduce, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {n.toLocaleString()}
      {suffix && <span className="text-signal">{suffix}</span>}
    </span>
  );
}
