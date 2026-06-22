export type MenuCategoryId =
  | "milk-tea"
  | "fruit-tea"
  | "specials"
  | "ice-blends";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategoryId;
  tags?: Array<"bestseller" | "new" | "vegan">;
  spiceOrSweetness?: "classic" | "less-sweet" | "rich";
}

export interface MenuCategory {
  id: MenuCategoryId;
  label: string;
  blurb: string;
}

export interface OutletHours {
  day: string;
  hours: string;
}

export interface Outlet {
  id: string;
  name: string;
  addressLines: string[];
  mapsQuery: string;
  hours: OutletHours[];
  phone?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface InstagramPost {
  id: string;
  caption: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
}
