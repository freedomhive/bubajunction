import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { OUTLETS } from "@/data/outlets";

export function Outlets() {
  return (
    <section id="outlets" className="bg-bj-cream px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Find us"
          title="Two outlets across Nashik"
          description="Walk in, grab a cup, and go — both outlets are built for quick counter service with a few seats to linger."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {OUTLETS.map((outlet) => (
            <div
              key={outlet.id}
              className="flex flex-col justify-between rounded-2xl border-2 border-bj-navy bg-white p-6 shadow-[4px_4px_0_0_var(--bj-coral)] sm:p-8"
            >
              <div>
                <h3 className="font-display text-xl font-semibold text-bj-navy">
                  {outlet.name}
                </h3>
                <address className="mt-3 not-italic text-[15px] leading-relaxed text-bj-navy-soft">
                  {outlet.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>

                <div className="mt-4 space-y-1 border-t border-bj-navy/10 pt-4">
                  {outlet.hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between text-sm text-bj-navy-soft"
                    >
                      <span>{h.day}</span>
                      <span className="font-medium text-bj-navy">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  outlet.mapsQuery
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="mt-6 w-fit"
              >
                Get directions
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
