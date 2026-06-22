import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarRating } from "@/components/ui/StarRating";
import { TESTIMONIALS } from "@/data/content";
import { SITE } from "@/data/site";

export function Reviews() {
  return (
    <section id="reviews" className="bg-bj-sky/40 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Reviews"
            title="What Nashik is saying"
          />
          <div className="flex items-center gap-3 rounded-2xl border-2 border-bj-navy bg-white px-5 py-3">
            <span className="font-display text-3xl font-semibold text-bj-navy">
              {SITE.rating}
            </span>
            <div>
              <StarRating rating={SITE.rating} size={16} />
              <p className="text-xs text-bj-navy-soft">
                {SITE.ratingCount} Google reviews
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="flex flex-col justify-between rounded-2xl border-2 border-bj-navy bg-white p-5"
            >
              <div>
                <StarRating rating={testimonial.rating} size={14} />
                <blockquote className="mt-3 text-[15px] leading-relaxed text-bj-navy">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>
              <figcaption className="mt-4 font-display text-sm font-medium text-bj-navy-soft">
                — {testimonial.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
