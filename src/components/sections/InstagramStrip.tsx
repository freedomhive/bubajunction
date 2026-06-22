import { SITE } from "@/data/site";

export function InstagramStrip() {
  return (
    <section className="border-y-2 border-bj-navy bg-bj-navy px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-display text-sm font-medium uppercase tracking-[0.18em] text-bj-gold">
            On Instagram
          </p>
          <h3 className="mt-1 font-display text-2xl font-semibold text-bj-cream sm:text-3xl">
            New flavours drop on {SITE.instagramHandle} first
          </h3>
        </div>
        <a
          href={SITE.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-bj-cream bg-bj-coral px-6 py-3 font-display text-sm font-medium text-bj-cream shadow-[3px_3px_0_0_var(--bj-gold)] transition-transform hover:translate-x-[1px] hover:translate-y-[1px]"
        >
          Follow {SITE.instagramHandle}
        </a>
      </div>
    </section>
  );
}
