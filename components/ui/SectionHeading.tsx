import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  tone = "signal",
  title,
  children,
  align = "left",
  className,
}: {
  eyebrow: string;
  tone?: "signal" | "navy" | "night" | "pink";
  title: React.ReactNode;
  children?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-[62ch]",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-[clamp(1.9rem,4vw,3rem)]">{title}</h2>
      {children && (
        <p className="mt-4 text-[1.08rem] leading-relaxed text-ink-soft">
          {children}
        </p>
      )}
    </Reveal>
  );
}
