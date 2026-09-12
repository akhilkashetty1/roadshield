const SIDE_LINE: Record<"dark" | "light", string> = {
  dark: "rgba(255,255,255,.55)",
  light: "rgba(20,24,40,.12)",
};

export default function LaneLines({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const side = SIDE_LINE[variant];
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-50 [mask-image:linear-gradient(to_bottom,transparent,#000_20%,#000_70%,transparent)]"
    >
      <span
        className="lane-anim absolute inset-y-0 left-[26%] w-[2px]"
        style={{
          background: `repeating-linear-gradient(to bottom, ${side} 0 26px, transparent 26px 64px)`,
          animationDuration: "3.2s",
        }}
      />
      <span
        className="lane-anim absolute inset-y-0 left-1/2 w-[2px]"
        style={{
          background:
            "repeating-linear-gradient(to bottom, rgba(242,183,5,.65) 0 30px, transparent 30px 70px)",
          animationDuration: "2.6s",
        }}
      />
      <span
        className="lane-anim absolute inset-y-0 left-[74%] w-[2px]"
        style={{
          background: `repeating-linear-gradient(to bottom, ${side} 0 26px, transparent 26px 64px)`,
          animationDuration: "3.8s",
        }}
      />
    </div>
  );
}
