'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface StepperProps {
  min?: number;
  max?: number;
  defaultValue?: number;
  label?: string;
}

export function Stepper({ min = 0, max = 10, defaultValue = 1, label }: StepperProps) {
  const [value, setValue] = useState(defaultValue);

  const decrease = () => setValue((prev) => Math.max(min, prev - 1));
  const increase = () => setValue((prev) => Math.min(max, prev + 1));

  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <span className="text-sm font-semibold text-text-secondary">{label}</span>
      )}
      <div className="flex items-center justify-between rounded-[var(--radius-sm)] border border-[rgba(0,0,0,0.08)] bg-surface-primary px-3 py-2">
        <Button
          variant="ghost"
          size="sm"
          className="size-10 rounded-full border border-[rgba(0,0,0,0.08)] p-0"
          onClick={decrease}
          disabled={value === min}
        >
          -
        </Button>
        <span className="text-base font-semibold">{value}</span>
        <Button
          variant="primary"
          size="sm"
          className="size-10 rounded-full p-0"
          onClick={increase}
          disabled={value === max}
        >
          +
        </Button>
      </div>
    </div>
  );
}
