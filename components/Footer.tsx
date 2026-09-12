import Link from "next/link";
import Image from "next/image";
import Container from "./ui/Container";

const cols = [
  {
    title: "Lanes",
    links: [
      { label: "Ride Smart · 2W", href: "/ride-smart" },
      { label: "Drive Smart · 4W", href: "/drive-smart" },
      { label: "Pink Vehicle Check", href: "/pink-vehicle-check" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "Annual Safety Map", href: "/programs" },
      { label: "Accident Management", href: "/programs" },
      { label: "Policy Frameworks", href: "/programs" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About & Founders", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-concrete-2 pb-10 pt-14 text-ink">
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-signal to-ink" />
      <Container>
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logos/roadshield-shield.png"
                alt="RoadShield"
                width={32}
                height={36}
                className="h-7 w-auto"
              />
              <div className="font-display text-2xl font-bold">
                ROAD<span className="text-signal">SHIELD</span>
              </div>
            </div>
            <div className="mt-2 font-stencil text-lg tracking-[0.06em] text-navy">
              Anticipate. Adapt. Arrive.
            </div>
            <p className="mt-3 text-sm text-ink-soft">
              A road-safety campaign and services partner. A Division of CVS
              Motors.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-8">
            {cols.map((col) => (
              <div key={col.title}>
                <h5 className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                  {col.title}
                </h5>
                {col.links.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="mb-2 block text-sm text-ink-soft transition-colors hover:text-signal"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-between gap-3 border-t border-line pt-5 font-mono text-[0.72rem] text-muted">
          <span>© {new Date().getFullYear()} RoadShield · CVS Motors</span>
          <span>road-shield.com</span>
        </div>
      </Container>
    </footer>
  );
}
