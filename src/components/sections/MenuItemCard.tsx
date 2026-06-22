import { Badge } from "@/components/ui/Badge";
import { MenuItem } from "@/types";

const TAG_LABEL: Record<NonNullable<MenuItem["tags"]>[number], string> = {
  bestseller: "Bestseller",
  new: "New",
  vegan: "Vegan",
};

const TAG_TONE: Record<
  NonNullable<MenuItem["tags"]>[number],
  "coral" | "navy" | "gold"
> = {
  bestseller: "coral",
  new: "gold",
  vegan: "navy",
};

export function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border-2 border-bj-navy bg-white p-5 transition-transform hover:-translate-y-1">
      <div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold leading-snug text-bj-navy">
            {item.name}
          </h3>
          <span className="whitespace-nowrap font-display text-lg font-semibold text-bj-coral">
            ₹{item.price}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-bj-navy-soft">
          {item.description}
        </p>
      </div>

      {item.tags && item.tags.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Badge key={tag} tone={TAG_TONE[tag]}>
              {TAG_LABEL[tag]}
            </Badge>
          ))}
        </div>
      ) : null}
    </div>
  );
}
