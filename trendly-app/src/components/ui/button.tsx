import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "lg" | "md" | "sm";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-text-inverse shadow-[0_16px_32px_rgba(255,62,108,0.25)] hover:bg-[#ff2960] active:bg-[#e42355] disabled:bg-[#ff9db4]",
  secondary:
    "bg-transparent border border-[var(--color-primary)] text-primary hover:bg-[rgba(255,62,108,0.08)] active:bg-[rgba(255,62,108,0.16)] disabled:text-[rgba(255,62,108,0.4)] disabled:border-[rgba(255,62,108,0.3)]",
  ghost:
    "bg-transparent text-text-primary hover:bg-surface-muted active:bg-[rgba(0,0,0,0.05)] disabled:text-[rgba(107,114,128,0.5)]",
};

const sizeStyles: Record<ButtonSize, string> = {
  lg: "h-14 px-6 text-base rounded-[var(--radius-md)]",
  md: "h-12 px-5 text-sm rounded-[var(--radius-sm)]",
  sm: "h-10 px-4 text-sm rounded-[var(--radius-xs)]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = "primary",
    size = "md",
    disabled,
    loading,
    children,
    ...props
  }, ref) => {
    const isDisabled = Boolean(disabled || loading);

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-150 active:scale-[0.98]",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
          variantStyles[variant],
          sizeStyles[size],
          { "opacity-70 cursor-not-allowed": isDisabled },
          className,
        )}
        disabled={isDisabled}
        {...props}
      >
        {loading && (
          <span className="size-4 rounded-full border-2 border-current border-r-transparent animate-spin" />
        )}
        <span className="truncate">{children}</span>
      </button>
    );
  },
);

Button.displayName = "Button";
