import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import LaneLines from "@/components/ui/LaneLines";
import CTASection from "@/components/CTASection";
import { FOUNDERS, VISION, MISSION } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About & Founders",
  description:
    "Meet the founders of RoadShield — a road-safety campaign and services partner, a division of CVS Motors.",
};

export default function AboutPage() {
  return (
    <>
      {/* Founders — top priority */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-white to-concrete">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(90% 70% at 15% -10%, rgba(27,42,74,.09), transparent 60%)",
          }}
        />
        <LaneLines variant="light" />
        <Container className="relative py-16 md:py-20">
          <Eyebrow tone="navy">About RoadShield</Eyebrow>
          <h1 className="mt-4 max-w-[20ch] text-[clamp(2.1rem,4.8vw,3.4rem)] font-bold leading-[1.05] text-ink">
            Meet the people behind RoadShield
          </h1>
          <p className="mt-4 max-w-[60ch] leading-relaxed text-ink-soft">
            RoadShield exists for one reason: fewer people hurt on the road.
            We turn that mission into training, data and on-ground support —
            as a division of CVS Motors.
          </p>

          <div className="mt-10 space-y-6 md:mt-12">
            {FOUNDERS.map((f, i) =>
              f.bio && f.bio.length > 0 ? (
                // Featured profile — fixed-size portrait + rich bio + expertise
                <Reveal key={f.name} delay={i * 0.08}>
                  <article className="rounded-3xl border border-line bg-white p-6 shadow-card md:p-10">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                      <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl shadow-card sm:h-52 sm:w-52">
                        <Image
                          src={f.photo}
                          alt={f.name}
                          fill
                          sizes="(min-width: 640px) 208px, 160px"
                          className="object-cover"
                          style={{ objectPosition: f.photoPosition ?? "center" }}
                          priority
                        />
                      </div>
                      <div>
                        {f.title && (
                          <span className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-signal">
                            {f.title}
                          </span>
                        )}
                        <h2 className="mt-2 text-2xl md:text-3xl">{f.name}</h2>
                        <p className="mt-1 text-sm text-muted">{f.role}</p>
                      </div>
                    </div>

                    <div className="mt-6 space-y-3.5 text-[0.95rem] leading-relaxed text-ink-soft md:mt-8">
                      {f.bio.map((para, pi) => (
                        <p key={pi}>{para}</p>
                      ))}
                    </div>

                    {f.expertise && f.expertise.length > 0 && (
                      <div className="mt-7">
                        <span className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-muted">
                          Areas of Expertise
                        </span>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {f.expertise.map((x) => (
                            <span
                              key={x}
                              className="rounded-full border border-line-strong bg-concrete px-3 py-1.5 text-xs text-ink-soft"
                            >
                              {x}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </article>
                </Reveal>
              ) : (
                // Compact profile — photo + name, bio to follow
                <Reveal key={f.name} delay={i * 0.08}>
                  <article className="flex flex-col items-center gap-5 rounded-3xl border border-line bg-white p-6 shadow-card sm:flex-row md:p-8">
                    <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl shadow-card sm:h-32 sm:w-32">
                      <Image
                        src={f.photo}
                        alt={f.name}
                        fill
                        sizes="128px"
                        className="object-cover"
                        style={{ objectPosition: f.photoPosition ?? "center" }}
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl">{f.name}</h3>
                      <p className="mt-1 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-signal">
                        {f.role}
                      </p>
                      <p className="mt-2 text-sm italic leading-relaxed text-muted">
                        Full bio coming soon.
                      </p>
                    </div>
                  </article>
                </Reveal>
              ),
            )}
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="border-y border-line bg-concrete-2 py-20 md:py-24">
        <Container>
          <Reveal className="max-w-4xl">
            <Eyebrow>Our Vision</Eyebrow>
            <p className="mt-5 text-balance font-display text-[clamp(2rem,5vw,3.6rem)] font-semibold leading-[1.06]">
              <span className="text-signal">{VISION.lead}</span>
              {VISION.rest}
            </p>
            <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-ink-soft">
              {VISION.support}
            </p>
          </Reveal>

          <div className="mt-16">
            <Reveal>
              <Eyebrow tone="navy">Our Mission</Eyebrow>
              <h2 className="mt-4 text-[clamp(1.7rem,3.2vw,2.4rem)]">
                Raise the bar on road safety
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {MISSION.map((m, i) => {
                const Icon = m.icon;
                return (
                  <Reveal key={m.title} delay={i * 0.06}>
                    <article className="h-full rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-concrete text-signal">
                        <Icon className="h-6 w-6" strokeWidth={1.8} />
                      </span>
                      <h3 className="mt-4 text-xl">{m.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                        {m.desc}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Our story + CVS Motors */}
      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading eyebrow="Our Story" title="Anticipate. Adapt. Arrive.">
            Those three words are more than a tagline — they&rsquo;re how we work.
            We help riders and drivers anticipate danger, adapt with data and
            training, and arrive safely, every time. When something does go
            wrong, we&rsquo;re there on the ground, from first-aid to root-cause.
          </SectionHeading>

          <Reveal className="mt-14">
            <div className="grid items-center gap-8 rounded-3xl border border-line bg-concrete-2 p-8 md:grid-cols-[1fr_auto] md:p-10">
              <div>
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                  Backed by
                </span>
                <h3 className="mt-2 text-2xl">A Division of CVS Motors</h3>
                <p className="mt-2 max-w-[64ch] text-ink-soft">
                  RoadShield operates under CVS Motors, combining deep automotive
                  experience with a dedicated road-safety mission — the same
                  lineage behind the{" "}
                  <strong className="text-ink">Ride Smart</strong> and{" "}
                  <strong className="text-ink">Drive Smart</strong> campaigns.
                </p>
              </div>
              <Image
                src="/logos/road-shield.png"
                alt="RoadShield — A Division of CVS Motors"
                width={1159}
                height={1286}
                className="mx-auto h-44 w-auto md:h-52"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection
        title="Partner with a team that lives road safety"
        sub="Talk to us about training, assessments or a full annual program for your organisation."
      />
    </>
  );
}
