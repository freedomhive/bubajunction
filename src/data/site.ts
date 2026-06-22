import { NavLink } from "@/types";

export const SITE = {
  name: "Buba Junction",
  nameLocal: "बुबा जंक्शन",
  tagline: "Nashik's own boba stop",
  description:
    "Buba Junction is Nashik's neighbourhood bubble tea junction — milk teas, fruit teas and chewy tapioca pearls made fresh, every cup.",
  instagramHandle: "@buba_junction",
  instagramUrl: "https://www.instagram.com/buba_junction/",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  rating: 4.9,
  ratingCount: 33,
  url: "https://bubajunction.in",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Menu", href: "#menu" },
  { label: "Our story", href: "#story" },
  { label: "Outlets", href: "#outlets" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];
