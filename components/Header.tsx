"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Gutter — collapses to 0 on scroll so the pill un-floats flush to the edges */}
      <div
        className={cn(
          "transition-all duration-500",
          EASE,
          scrolled ? "px-0 pt-0" : "px-3 pt-3 sm:px-4 sm:pt-4",
        )}
      >
        {/* The capsule — floating pill at rest, rearranges into a normal bar on scroll */}
        <div
          className={cn(
            "mx-auto flex items-center gap-2 border backdrop-blur-xl backdrop-saturate-150 transition-all duration-500 sm:gap-3",
            EASE,
            scrolled
              ? "max-w-full rounded-none border-x-0 border-t-0 border-b border-line/80 bg-white/65 px-4 py-2.5 shadow-[0_14px_34px_-20px_rgba(20,24,40,0.3)] sm:px-6"
              : "max-w-[1140px] rounded-full border-white/60 bg-white/35 px-2.5 py-2 shadow-[0_8px_28px_-18px_rgba(20,24,40,0.28)] sm:px-3",
          )}
        >
          <Link
            href="/"
            className="flex items-center gap-2 whitespace-nowrap pl-1.5"
          >
            <Image
              src="/logos/roadshield-shield.png"
              alt="RoadShield"
              width={40}
              height={45}
              priority
              className={cn(
                "w-auto transition-all duration-500",
                EASE,
                scrolled ? "h-6" : "h-8",
              )}
            />
            <span
              className={cn(
                "font-display font-bold tracking-[0.02em] transition-all duration-500",
                EASE,
                scrolled ? "text-base" : "text-lg sm:text-xl",
              )}
            >
              ROAD<span className="text-signal">SHIELD</span>
            </span>
          </Link>

          <nav className="ml-auto hidden items-center gap-0.5 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-[0.82rem] font-medium transition-colors",
                  isActive(item.href)
                    ? "bg-signal/10 text-signal"
                    : "text-ink-soft hover:bg-concrete hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className={cn(
              "ml-1 hidden items-center gap-1.5 rounded-full bg-signal font-display font-semibold text-white shadow-[0_10px_22px_-12px_rgba(218,31,38,0.85)] transition-all duration-500 hover:-translate-y-0.5 lg:inline-flex",
              EASE,
              scrolled ? "px-3.5 py-2 text-[0.8rem]" : "px-4 py-2.5 text-[0.85rem]",
            )}
          >
            Book <ArrowRight className="h-4 w-4" />
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="ml-auto grid h-10 w-10 place-items-center rounded-full border border-white/70 bg-white/60 text-ink backdrop-blur transition-colors hover:border-signal lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile floating menu */}
        <div
          className={cn(
            "mx-auto max-w-[1140px] overflow-hidden transition-all duration-300 lg:hidden",
            open ? "mt-2 max-h-[75vh] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="rounded-2xl border border-white/60 bg-white/85 p-3 shadow-[0_24px_54px_-20px_rgba(20,24,40,0.42)] backdrop-blur-xl backdrop-saturate-150">
            <div className="flex flex-col gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-xl px-3 py-3 text-base font-medium transition-colors",
                    isActive(item.href)
                      ? "bg-signal/10 text-signal"
                      : "text-ink hover:bg-concrete",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-signal px-5 py-3.5 font-display font-semibold text-white"
              >
                Book an assessment <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
