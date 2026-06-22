import { Button } from "@/components/ui/Button";

export function Cta() {
  return (
    <section className="bg-bj-coral px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold text-bj-cream sm:text-4xl">
          Your next cup is two outlets away
        </h2>
        <p className="mx-auto mt-3 max-w-md text-base text-bj-cream/90">
          Walk in, sip, repeat. Or message us on Instagram to ask what&apos;s
          fresh today.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
          <Button href="#outlets" variant="secondary">
            Find an outlet
          </Button>
          <Button href="#menu" variant="primary" className="bg-bj-navy hover:bg-bj-navy-soft">
            Browse the menu
          </Button>
        </div>
      </div>
    </section>
  );
}
