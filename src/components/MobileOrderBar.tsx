import { SITE } from "@/data/site";

export function MobileOrderBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-bj-navy bg-bj-cream px-4 py-3 md:hidden">
      <div className="flex items-center gap-3">
        <a
          href="#outlets"
          className="flex-1 rounded-full border-2 border-bj-navy bg-white py-2.5 text-center font-display text-sm font-medium text-bj-navy"
        >
          Find outlet
        </a>
        <a
          href={SITE.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-full border-2 border-bj-navy bg-bj-coral py-2.5 text-center font-display text-sm font-medium text-bj-cream"
        >
          Order now
        </a>
      </div>
    </div>
  );
}
