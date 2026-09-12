"use client";

import { useState } from "react";
import { HardHat, Shirt, Hand, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

type Key = "helmet" | "jacket" | "gloves" | "guards";

const GEAR: { key: Key; name: string; icon: typeof HardHat; note: string }[] = [
  {
    key: "helmet",
    name: "Helmet",
    icon: HardHat,
    note: "Your most important gear — a certified helmet absorbs impact and slashes the risk of a fatal head injury.",
  },
  {
    key: "jacket",
    name: "Jacket",
    icon: Shirt,
    note: "Abrasion-resistant armour protecting your back, shoulders and torso in a slide.",
  },
  {
    key: "gloves",
    name: "Gloves",
    icon: Hand,
    note: "Grip and control now; a barrier between your hands and the tarmac when it counts.",
  },
  {
    key: "guards",
    name: "Knee & elbow guards",
    icon: Shield,
    note: "Hard-shell protection for the joints that hit the ground first.",
  },
];

export default function GearUp() {
  const [active, setActive] = useState<Key>("helmet");
  const on = (k: Key) => active === k;
  const fill = (k: Key) => (on(k) ? "#DA1F26" : "#C2C8D2");
  const line = (k: Key) => (on(k) ? "#B3141A" : "#8A909C");
  const glow = (k: Key) =>
    on(k) ? { filter: "drop-shadow(0 0 7px rgba(218,31,38,.55))" } : undefined;

  return (
    <div className="grid items-center gap-8 lg:grid-cols-2">
      {/* Rider figure */}
      <div className="mx-auto w-full max-w-[300px] rounded-2xl border border-line bg-white p-6 shadow-card">
        <svg viewBox="0 0 200 250" className="w-full" role="img" aria-label="Rider safety gear">
          {/* body base */}
          <rect x="92" y="72" width="16" height="16" fill="#3A3E49" />
          <path d="M89 150 L85 224" stroke="#3A3E49" strokeWidth="17" strokeLinecap="round" />
          <path d="M111 150 L115 224" stroke="#3A3E49" strokeWidth="17" strokeLinecap="round" />
          <path d="M79 228 L94 228" stroke="#26262A" strokeWidth="10" strokeLinecap="round" />
          <path d="M106 228 L121 228" stroke="#26262A" strokeWidth="10" strokeLinecap="round" />

          {/* jacket (torso + sleeves) */}
          <g style={glow("jacket")}>
            <path d="M74 98 L57 150" stroke={fill("jacket")} strokeWidth="15" strokeLinecap="round" />
            <path d="M126 98 L143 150" stroke={fill("jacket")} strokeWidth="15" strokeLinecap="round" />
            <path
              d="M68 94 Q100 82 132 94 L136 152 Q100 164 64 152 Z"
              fill={fill("jacket")}
              stroke={line("jacket")}
              strokeWidth="2"
            />
          </g>

          {/* guards (elbow + knee) */}
          <g style={glow("guards")}>
            <ellipse cx="60" cy="126" rx="9" ry="8" fill={fill("guards")} stroke={line("guards")} strokeWidth="1.5" />
            <ellipse cx="140" cy="126" rx="9" ry="8" fill={fill("guards")} stroke={line("guards")} strokeWidth="1.5" />
            <rect x="76" y="184" width="18" height="16" rx="5" fill={fill("guards")} stroke={line("guards")} strokeWidth="1.5" />
            <rect x="106" y="184" width="18" height="16" rx="5" fill={fill("guards")} stroke={line("guards")} strokeWidth="1.5" />
          </g>

          {/* gloves */}
          <g style={glow("gloves")}>
            <circle cx="55" cy="152" r="11" fill={fill("gloves")} stroke={line("gloves")} strokeWidth="2" />
            <circle cx="145" cy="152" r="11" fill={fill("gloves")} stroke={line("gloves")} strokeWidth="2" />
          </g>

          {/* helmet */}
          <g style={glow("helmet")}>
            <ellipse cx="100" cy="48" rx="30" ry="31" fill={fill("helmet")} stroke={line("helmet")} strokeWidth="2" />
            <path
              d="M74 46 Q100 58 126 46 L123 60 Q100 68 77 60 Z"
              fill={on("helmet") ? "#7a1015" : "#5B6472"}
            />
          </g>
        </svg>
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-3">
        {GEAR.map((g) => {
          const Icon = g.icon;
          return (
            <button
              key={g.key}
              type="button"
              onMouseEnter={() => setActive(g.key)}
              onFocus={() => setActive(g.key)}
              onClick={() => setActive(g.key)}
              aria-pressed={on(g.key)}
              className={cn(
                "flex items-start gap-3 rounded-xl border p-4 text-left transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal",
                on(g.key)
                  ? "border-signal bg-signal/[0.06] shadow-card"
                  : "border-line bg-white hover:border-line-strong",
              )}
            >
              <span
                className={cn(
                  "grid h-10 w-10 shrink-0 place-items-center rounded-lg transition-colors",
                  on(g.key) ? "bg-signal text-white" : "bg-concrete text-ink-soft",
                )}
              >
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <span>
                <span
                  className={cn(
                    "block font-display text-lg transition-colors",
                    on(g.key) && "text-signal",
                  )}
                >
                  {g.name}
                </span>
                <span className="mt-0.5 block text-sm leading-relaxed text-ink-soft">
                  {g.note}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
