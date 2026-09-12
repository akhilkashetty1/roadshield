import { cn } from "@/lib/utils";

export default function Eyebrow({
  children,
  tone = "signal",
  className,
}: {
  children: React.ReactNode;
  tone?: "signal" | "navy" | "night" | "pink";
  className?: string;
}) {
  const tones: Record<string, string> = {
    signal: "text-signal before:bg-signal",
    navy: "text-navy before:bg-navy",
    night: "text-night-red before:bg-night-red",
    pink: "text-pinkcheck before:bg-pinkcheck",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.24em] before:inline-block before:h-0.5 before:w-6 before:content-['']",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
