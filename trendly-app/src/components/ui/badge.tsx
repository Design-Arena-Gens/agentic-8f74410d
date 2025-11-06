import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type BadgeTone = "discount" | "new" | "bestseller" | "neutral";

interface BadgeProps {
  tone?: BadgeTone;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

const toneStyles: Record<BadgeTone, string> = {
  discount:
    "bg-[rgba(79,70,229,0.12)] text-secondary border border-secondary/30",
  new: "bg-[rgba(255,62,108,0.1)] text-primary border border-[rgba(255,62,108,0.2)]",
  bestseller: "bg-[rgba(22,163,74,0.12)] text-[#15803d] border border-[#6ee7b7]",
  neutral:
    "bg-surface-muted text-text-secondary border border-outline",
};

export function Badge({ tone = "neutral", children, icon, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium",
        toneStyles[tone],
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
