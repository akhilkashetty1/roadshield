import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact & Book an Assessment",
  description:
    "Book a defensive-driving session, a vehicle assessment or a full road-safety program with RoadShield.",
};

const lines = [
  { icon: Mail, k: "Email", v: "hello@road-shield.com", note: "placeholder" },
  { icon: Phone, k: "Phone / WhatsApp", v: "+91 ··········", note: "placeholder" },
  { icon: MapPin, k: "Service area", v: "On-site trainings & assessments", note: "your regions" },
  { icon: Clock, k: "Response time", v: "Within one working day", note: "", live: true },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        variant="contact"
        icon={Mail}
        eyebrow="Contact"
        title="Book an assessment"
        subtitle="Tell us about your riders, drivers or fleet and we'll map the right program. Every road leads here."
      />

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <ContactForm />
            </Reveal>

            <Reveal delay={0.08}>
              <div>
                <div className="divide-y divide-line rounded-2xl border border-line bg-white p-6 shadow-card md:p-8">
                  {lines.map((l) => {
                    const Icon = l.icon;
                    return (
                      <div key={l.k} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-signal/[0.1] text-signal">
                          <Icon className="h-5 w-5" strokeWidth={1.8} />
                        </span>
                        <div>
                          <div className="flex items-center gap-2 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-muted">
                            {l.k}
                            {l.live && (
                              <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-70" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
                              </span>
                            )}
                          </div>
                          <div className="font-semibold">
                            {l.v}{" "}
                            {l.note && (
                              <span className="font-normal text-sm text-muted">
                                ({l.note})
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                  Real contact details, socials and a map get dropped in before
                  launch. The form isn&rsquo;t wired to email/CRM yet — that&rsquo;s the
                  final build step.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
