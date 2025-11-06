import Link from "next/link";
import { BagIcon, BellIcon, MenuIcon, SearchIcon } from "@/components/icons";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(0,0,0,0.06)] bg-surface-primary/95 backdrop-blur-xl">
      <div className="flex items-center justify-between px-4 py-3">
        <button type="button" className="text-text-primary">
          <MenuIcon size={22} />
        </button>
        <Link href="#" className="text-xl font-semibold tracking-tight text-text-primary">
          Trendly
        </Link>
        <div className="flex items-center gap-3 text-text-secondary">
          <button type="button" aria-label="Notifications">
            <BellIcon size={20} />
          </button>
          <button type="button" aria-label="Bag" className="relative">
            <BagIcon size={20} />
            <span className="absolute -right-1 -top-1 inline-flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-text-inverse">
              3
            </span>
          </button>
        </div>
      </div>
      <div className="px-4 pb-3">
        <div className="flex items-center gap-2 rounded-[var(--radius-md)] bg-surface-muted px-4 py-3 text-sm text-text-secondary">
          <SearchIcon size={18} />
          <input
            className="w-full bg-transparent text-base text-text-primary outline-none"
            placeholder="Search for brands, trends, or products"
          />
        </div>
      </div>
    </header>
  );
}
