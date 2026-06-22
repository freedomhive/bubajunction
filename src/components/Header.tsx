"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, SITE } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-bj-navy bg-bj-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="#top" className="flex items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="Buba Junction logo"
            width={44}
            height={44}
            className="rounded-full border-2 border-bj-navy"
            priority
          />
          <span className="font-display text-xl font-semibold text-bj-navy">
            {SITE.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-[15px] font-medium text-bj-navy-soft transition-colors hover:text-bj-coral"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-bj-navy bg-bj-navy px-5 py-2 font-display text-sm font-medium text-bj-cream shadow-[2px_2px_0_0_var(--bj-coral)] transition-transform hover:translate-x-[1px] hover:translate-y-[1px]"
          >
            Order on Instagram
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-bj-navy md:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-[2.5px] w-5 bg-bj-navy transition-transform ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] h-[2.5px] w-5 bg-bj-navy transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[12px] h-[2.5px] w-5 bg-bj-navy transition-transform ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t-2 border-bj-navy bg-bj-cream px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 font-display text-base font-medium text-bj-navy hover:bg-bj-sky/40"
              >
                {link.label}
              </a>
            ))}
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full border-2 border-bj-navy bg-bj-navy px-4 py-2.5 text-center font-display text-base font-medium text-bj-cream"
            >
              Order on Instagram
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
