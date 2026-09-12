"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full rounded-[10px] border border-line-strong bg-concrete-2 px-3.5 py-3 text-[0.95rem] text-ink outline-none transition-colors placeholder:text-muted focus:border-signal focus:bg-white";
const labelClass =
  "mb-1.5 block font-mono text-[0.66rem] uppercase tracking-[0.12em] text-muted";

export default function ContactForm() {
  const [lane, setLane] = useState<"2W" | "4W">("2W");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const data = new FormData(e.currentTarget);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      org: data.get("org"),
      message: data.get("message"),
      lane,
      source: "RoadShield Contact Page",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }
      setSent(true);
      e.currentTarget.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-line bg-white p-10 text-center shadow-card">
        <CheckCircle2 className="h-14 w-14 text-signal" strokeWidth={1.6} />
        <h3 className="mt-4 text-2xl">Request received</h3>
        <p className="mt-2 max-w-[36ch] text-ink-soft">
          Thanks — we&rsquo;ll be in touch within one working day to map the
          right program for you.
        </p>
        <button
          type="button"
          onClick={() => {
            setSent(false);
            setError(null);
          }}
          className="mt-6 font-display font-semibold text-signal underline-offset-4 hover:underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-line bg-white p-6 shadow-card md:p-8"
    >
      <div className="mb-4">
        <span className={labelClass}>I&rsquo;m interested in</span>
        <div className="flex gap-2.5">
          <button
            type="button"
            onClick={() => setLane("2W")}
            className={cn(
              "flex-1 rounded-[10px] border py-3 text-sm font-medium transition-colors",
              lane === "2W"
                ? "border-signal bg-signal/[0.08] text-signal"
                : "border-line-strong text-ink-soft hover:border-line",
            )}
          >
            🏍 2-Wheeler
          </button>
          <button
            type="button"
            onClick={() => setLane("4W")}
            className={cn(
              "flex-1 rounded-[10px] border py-3 text-sm font-medium transition-colors",
              lane === "4W"
                ? "border-navy bg-navy/[0.08] text-navy"
                : "border-line-strong text-ink-soft hover:border-line",
            )}
          >
            🚗 4-Wheeler
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className={labelClass} htmlFor="name">
          Full name
        </label>
        <input id="name" name="name" required className={inputClass} placeholder="Your name" />
      </div>

      <div className="mb-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={inputClass}
            placeholder="+91 …"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className={labelClass} htmlFor="org">
          Organisation / fleet size
        </label>
        <input
          id="org"
          name="org"
          className={inputClass}
          placeholder="e.g. 40 vehicles"
        />
      </div>

      <div className="mb-5">
        <label className={labelClass} htmlFor="message">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={cn(inputClass, "resize-none")}
          placeholder="Training, assessment, accident support…"
        />
      </div>

      {error && (
        <div className="mb-4 flex items-start gap-2.5 rounded-[10px] border border-signal/30 bg-signal/[0.06] px-3.5 py-3 text-sm text-signal">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-signal px-5 py-3.5 font-display font-semibold text-white shadow-[0_12px_26px_-12px_rgba(218,31,38,0.7)] transition-transform hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Request my assessment"}
        {!submitting && <ArrowRight className="h-4 w-4" />}
      </button>
    </form>
  );
}
