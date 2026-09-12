import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "navy" | "ghost" | "white" | "whiteGhost";

const variants: Record<Variant, string> = {
  primary:
    "bg-signal text-white shadow-[0_12px_26px_-12px_rgba(218,31,38,0.7)] hover:-translate-y-0.5",
  navy: "bg-navy text-white hover:-translate-y-0.5",
  ghost:
    "border border-line-strong text-ink hover:border-signal hover:text-signal",
  white:
    "bg-white text-signal shadow-[0_12px_26px_-14px_rgba(0,0,0,0.35)] hover:-translate-y-0.5",
  whiteGhost:
    "border border-white/50 text-white hover:border-white hover:bg-white/10",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-[10px] px-5 py-3 font-display text-[0.95rem] font-semibold tracking-[0.02em] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
