import { Button } from "@/components/ui/button";
import { BagIcon } from "@/components/icons";

export function BottomCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[rgba(0,0,0,0.06)] bg-surface-primary/95 px-4 py-3 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="flex flex-1 flex-col">
          <span className="text-sm font-semibold text-text-primary">Trendly Bag</span>
          <span className="text-xs text-text-secondary">3 items • $248.50</span>
        </div>
        <Button size="lg" className="flex-1">
          <BagIcon size={18} />
          Checkout
        </Button>
      </div>
    </div>
  );
}
