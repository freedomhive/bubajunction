import { BobaCupIllustration } from "@/components/icons/BobaCupIllustration";
import { Button } from "@/components/ui/Button";
import { StarRating } from "@/components/ui/StarRating";
import { SITE } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-bj-sky">
      <div className="bj-noise pointer-events-none absolute inset-0" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-8 lg:py-24">
        <div className="relative z-10 order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-bj-navy bg-bj-cream px-4 py-1.5 font-display text-sm font-medium text-bj-navy">
            <StarRating rating={SITE.rating} size={14} />
            {SITE.rating} from {SITE.ratingCount} reviews
          </span>

          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] text-bj-navy sm:text-5xl lg:text-6xl">
            Real tea.
            <br />
            Chewy pearls.
            <br />
            <span className="text-bj-coral">No shortcuts.</span>
          </h1>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-bj-navy-soft">
            {SITE.name} brews every cup fresh at our two Nashik outlets —
            hand-cooked tapioca pearls, real fruit, and milk teas worth
            queuing for.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#menu" variant="primary">
              See the menu
            </Button>
            <Button href="#outlets" variant="secondary">
              Find an outlet
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-bj-navy-soft">
            <div>
              <p className="font-display text-2xl font-semibold text-bj-navy">2</p>
              <p>Nashik outlets</p>
            </div>
            <div className="h-8 w-px bg-bj-navy/20" />
            <div>
              <p className="font-display text-2xl font-semibold text-bj-navy">18+</p>
              <p>Flavours on tap</p>
            </div>
            <div className="h-8 w-px bg-bj-navy/20" />
            <div>
              <p className="font-display text-2xl font-semibold text-bj-navy">100%</p>
              <p>Fresh-cooked pearls</p>
            </div>
          </div>
        </div>

        <div className="relative order-1 z-10 mx-auto w-full max-w-xs sm:max-w-sm lg:order-2 lg:max-w-md">
          <BobaCupIllustration />
        </div>
      </div>

      <svg
        className="relative block w-full text-bj-cream"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 40 Q 180 0 360 40 T 720 40 T 1080 40 T 1440 40 V80 H0 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
