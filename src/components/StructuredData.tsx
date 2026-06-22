import { OUTLETS } from "@/data/outlets";
import { SITE } from "@/data/site";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": OUTLETS.map((outlet) => ({
      "@type": "CafeOrCoffeeShop",
      name: outlet.name,
      url: SITE.url,
      image: `${SITE.url}/images/logo.png`,
      address: {
        "@type": "PostalAddress",
        streetAddress: outlet.addressLines.join(" "),
        addressLocality: "Nashik",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      sameAs: [SITE.instagramUrl],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: SITE.rating,
        reviewCount: SITE.ratingCount,
      },
      servesCuisine: "Bubble tea",
      priceRange: "₹₹",
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
