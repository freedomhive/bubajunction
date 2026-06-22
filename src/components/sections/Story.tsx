import { SectionHeading } from "@/components/ui/SectionHeading";

const PILLARS = [
  {
    title: "Cooked fresh, daily",
    body:
      "Tapioca pearls are cooked in small batches every morning at both outlets — never pre-made syrupy pearls shipped in.",
  },
  {
    title: "Real ingredients",
    body:
      "Brewed loose-leaf tea, real fruit purées, and fresh milk. No tea powders, no flavour concentrates.",
  },
  {
    title: "Made for Nashik",
    body:
      "Recipes tuned to local taste — balanced sweetness, and a few junction-only specials you won't find elsewhere.",
  },
];

export function Story() {
  return (
    <section id="story" className="bg-bj-cream px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Our story"
          title="Started on a street corner. Built one cup at a time."
          description="Buba Junction began as a single counter — a junction, literally — where friends would stop for a cup between errands. The name stuck, and so did the standard: every pearl cooked fresh, every tea brewed properly, every cup made to be photographed and then actually enjoyed."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border-2 border-bj-navy bg-white p-6 shadow-[4px_4px_0_0_var(--bj-navy)]"
            >
              <h3 className="font-display text-lg font-semibold text-bj-navy">
                {pillar.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-bj-navy-soft">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
