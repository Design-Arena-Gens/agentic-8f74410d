import { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  errorText?: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

export function Input({
  label,
  helperText,
  errorText,
  leadingIcon,
  trailingIcon,
  className,
  disabled,
  ...props
}: InputProps) {
  const hasError = Boolean(errorText);

  return (
    <label className="flex w-full flex-col gap-2">
      {label && (
        <span className="text-sm font-semibold text-text-secondary">{label}</span>
      )}
      <span
        className={cn(
          "flex items-center gap-2 rounded-[var(--radius-sm)] border bg-surface-primary px-4 py-3 text-sm transition-shadow",
          disabled && "opacity-60",
          hasError
            ? "border-[rgba(239,68,68,0.5)] shadow-[0_0_0_1px_rgba(239,68,68,0.3)]"
            : "border-[rgba(0,0,0,0.08)] focus-within:border-primary focus-within:shadow-[0_0_0_1px_rgba(255,62,108,0.2)]",
          className,
        )}
      >
        {leadingIcon && <span className="text-text-secondary">{leadingIcon}</span>}
        <input
          className="w-full bg-transparent text-base text-text-primary outline-none placeholder:text-[rgba(107,114,128,0.65)]"
          disabled={disabled}
          {...props}
        />
        {trailingIcon && <span className="text-text-secondary">{trailingIcon}</span>}
      </span>
      {(helperText || errorText) && (
        <span
          className={cn(
            "text-xs",
            hasError ? "text-error" : "text-text-secondary",
          )}
        >
          {hasError ? errorText : helperText}
        </span>
      )}
    </label>
  );
}
