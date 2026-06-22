"use client";

import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MENU_CATEGORIES, MENU_ITEMS } from "@/data/menu";
import { MenuCategoryId } from "@/types";
import { MenuItemCard } from "@/components/sections/MenuItemCard";

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryId>(
    MENU_CATEGORIES[0].id
  );

  const activeBlurb = useMemo(
    () => MENU_CATEGORIES.find((c) => c.id === activeCategory)?.blurb ?? "",
    [activeCategory]
  );

  const items = useMemo(
    () => MENU_ITEMS.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="menu" className="bg-bj-sky/40 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="The menu"
          title="Eighteen flavours. Zero compromises."
          description="Pick a category to see what's on tap. Every drink can be made classic, less sweet, or extra rich on request."
        />

        <div className="bj-scrollbar mt-8 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap">
          {MENU_CATEGORIES.map((category) => {
            const isActive = category.id === activeCategory;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={isActive}
                className={`shrink-0 rounded-full border-2 border-bj-navy px-5 py-2.5 font-display text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-bj-navy text-bj-cream"
                    : "bg-bj-cream text-bj-navy hover:bg-white"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <p className="mt-4 text-sm text-bj-navy-soft">{activeBlurb}</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
