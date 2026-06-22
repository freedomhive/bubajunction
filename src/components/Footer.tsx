import Image from "next/image";
import { NAV_LINKS, SITE } from "@/data/site";
import { OUTLETS } from "@/data/outlets";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bj-navy px-4 py-12 text-bj-cream sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/logo.png"
                alt="Buba Junction logo"
                width={40}
                height={40}
                className="rounded-full border-2 border-bj-cream"
              />
              <span className="font-display text-lg font-semibold">
                {SITE.name}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-bj-cream/70">
              {SITE.description}
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-bj-gold">
              Explore
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-bj-cream/80">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-bj-cream">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-bj-gold">
              Outlets
            </h4>
            <ul className="mt-3 space-y-3 text-sm text-bj-cream/80">
              {OUTLETS.map((outlet) => (
                <li key={outlet.id}>{outlet.name.replace("Buba Junction — ", "")}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-bj-gold">
              Get in touch
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-bj-cream/80">
              <li>
                <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-bj-cream">
                  {SITE.instagramHandle} on Instagram
                </a>
              </li>
              <li>
                <a href={SITE.phoneHref} className="hover:text-bj-cream">
                  {SITE.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-bj-cream/15 pt-6 text-xs text-bj-cream/60 sm:flex-row">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <p>{SITE.nameLocal} · Nashik, Maharashtra</p>
        </div>
      </div>
    </footer>
  );
}
