import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ChipVariant = "filter" | "size" | "swatch";

type ChipProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ChipVariant;
  selected?: boolean;
  colorHex?: string;
};

export function Chip({
  variant = "filter",
  selected,
  colorHex,
  className,
  children,
  ...props
}: ChipProps) {
  const isSwatch = variant === "swatch";

  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center gap-2 rounded-full border text-xs font-medium transition-colors duration-150",
        "px-3 py-2",
        variant === "size" && "px-4 py-2",
        isSwatch && "px-2.5",
        selected
          ? "border-primary bg-[rgba(255,62,108,0.1)] text-primary"
          : "border-[rgba(0,0,0,0.08)] bg-surface-primary text-text-secondary",
        className,
      )}
      {...props}
    >
      {isSwatch && (
        <span
          className="size-4 rounded-full border border-[rgba(0,0,0,0.05)]"
          style={{ backgroundColor: colorHex }}
        />
      )}
      <span className="leading-none">{children}</span>
    </button>
  );
}
