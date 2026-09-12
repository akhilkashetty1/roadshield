import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Container from "./ui/Container";
import LaneLines from "./ui/LaneLines";
import { cn } from "@/lib/utils";

type Variant = "ride" | "drive" | "pink" | "programs" | "about" | "contact";

const V: Record<Variant, { glow: string; accent: string; dot: string }> = {
  ride: { glow: "rgba(218,31,38,.11)", accent: "text-signal", dot: "bg-signal" },
  drive: { glow: "rgba(27,42,74,.09)", accent: "text-navy", dot: "bg-navy" },
  pink: { glow: "rgba(229,57,127,.13)", accent: "text-pinkcheck", dot: "bg-pinkcheck" },
  programs: { glow: "rgba(242,183,5,.15)", accent: "text-amber-deep", dot: "bg-amber" },
  about: { glow: "rgba(27,42,74,.09)", accent: "text-navy", dot: "bg-navy" },
  contact: { glow: "rgba(218,31,38,.11)", accent: "text-signal", dot: "bg-signal" },
};

export default function PageHero({
  variant,
  eyebrow,
  title,
  subtitle,
  tagline,
  icon: Icon,
  logoSrc,
  logoAlt = "",
  logoW = 200,
  logoH = 150,
}: {
  variant: Variant;
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  tagline?: string;
  icon?: LucideIcon;
  logoSrc?: string;
  logoAlt?: string;
  logoW?: number;
  logoH?: number;
}) {
  const v = V[variant];
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-white to-concrete text-ink">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(90% 80% at 12% -20%, ${v.glow}, transparent 60%)`,
        }}
      />
      <LaneLines variant="light" />
      <Container className="relative pb-16 pt-28 md:pb-20 md:pt-32">
        <span
          className={cn(
            "inline-flex items-center gap-2 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.24em]",
            v.accent,
          )}
        >
          <span className={cn("inline-block h-0.5 w-6", v.dot)} /> {eyebrow}
        </span>
        <div className="mt-5 flex flex-col-reverse items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="max-w-[18ch] text-[clamp(2.3rem,5.5vw,4rem)] font-bold leading-[1.03] text-ink">
              {title}
            </h1>
            {tagline && (
              <p className={cn("mt-3 font-stencil text-lg tracking-[0.06em]", v.accent)}>
                {tagline}
              </p>
            )}
            {subtitle && (
              <p className="mt-4 max-w-[56ch] leading-relaxed text-ink-soft">
                {subtitle}
              </p>
            )}
          </div>
          {logoSrc ? (
            <span className="shrink-0 rounded-2xl border border-line bg-white p-4 shadow-card">
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={logoW}
                height={logoH}
                className="h-20 w-auto md:h-24"
              />
            </span>
          ) : Icon ? (
            <span
              className={cn(
                "hidden shrink-0 rounded-2xl border border-line bg-white p-4 shadow-card sm:block",
                v.accent,
              )}
            >
              <Icon className="h-9 w-9" strokeWidth={1.6} />
            </span>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
