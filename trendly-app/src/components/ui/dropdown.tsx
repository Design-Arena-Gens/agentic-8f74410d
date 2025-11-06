import { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "@/components/icons";

interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  helperText?: string;
  errorText?: string;
}

export function Dropdown({
  label,
  helperText,
  errorText,
  className,
  disabled,
  children,
  ...props
}: DropdownProps) {
  const hasError = Boolean(errorText);

  return (
    <label className="flex w-full flex-col gap-2">
      {label && (
        <span className="text-sm font-semibold text-text-secondary">{label}</span>
      )}
      <span
        className={cn(
          "relative flex items-center rounded-[var(--radius-sm)] border bg-surface-primary px-4 py-3 text-sm",
          disabled && "opacity-60",
          hasError
            ? "border-[rgba(239,68,68,0.5)]"
            : "border-[rgba(0,0,0,0.08)] focus-within:border-primary focus-within:shadow-[0_0_0_1px_rgba(255,62,108,0.2)]",
          className,
        )}
      >
        <select
          className="w-full appearance-none bg-transparent text-base text-text-primary outline-none"
          disabled={disabled}
          {...props}
        >
          {children}
        </select>
        <ChevronRightIcon
          size={18}
          className="text-text-secondary rotate-90"
        />
      </span>
      {(helperText || errorText) && (
        <span className={cn("text-xs", hasError ? "text-error" : "text-text-secondary")}>
          {hasError ? errorText : helperText}
        </span>
      )}
    </label>
  );
}
