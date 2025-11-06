'use client';

import { KeyboardEvent, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface OtpInputProps {
  length?: number;
  label?: string;
  helperText?: string;
  errorText?: string;
}

export function OtpInput({ length = 4, label, helperText, errorText }: OtpInputProps) {
  const [values, setValues] = useState<string[]>(Array(length).fill(""));
  const inputs = useMemo(() => Array.from({ length }), [length]);
  const refs = useRef<Array<HTMLInputElement | null>>([]);
  const hasError = Boolean(errorText);

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;

    const next = [...values];
    next[index] = value;
    setValues(next);

    if (value && index < length - 1) {
      refs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && !values[index] && index > 0) {
      refs.current[index - 1]?.focus();
    }
    if (event.key === "ArrowLeft" && index > 0) {
      refs.current[index - 1]?.focus();
    }
    if (event.key === "ArrowRight" && index < length - 1) {
      refs.current[index + 1]?.focus();
    }
  };

  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <span className="text-sm font-semibold text-text-secondary">{label}</span>
      )}
      <div
        className={cn(
          "flex gap-3",
          hasError && "[--otp-border:#ef4444]",
        )}
      >
        {inputs.map((_, index) => (
          <input
            key={index}
            ref={(element) => {
              refs.current[index] = element;
            }}
            inputMode="numeric"
            maxLength={1}
            value={values[index]}
            onChange={(event) => handleChange(index, event.target.value)}
            onKeyDown={(event) => handleKeyDown(index, event)}
            className={cn(
              "size-14 rounded-[var(--radius-xs)] border text-center text-lg font-semibold transition-shadow",
              "border-[var(--otp-border,rgba(0,0,0,0.08))] bg-surface-primary",
              "focus:outline-none focus:border-primary focus:shadow-[0_0_0_2px_rgba(255,62,108,0.2)]",
            )}
          />
        ))}
      </div>
      {(helperText || errorText) && (
        <span className={cn("text-xs", hasError ? "text-error" : "text-text-secondary")}>
          {hasError ? errorText : helperText}
        </span>
      )}
    </div>
  );
}
