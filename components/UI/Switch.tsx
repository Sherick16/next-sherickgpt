"use client";

import React from "react";
import { cn } from "@/libs/utils";
import { bgMap } from "./ui.common";
import { Variant } from "./ui.types";

export const Switch = ({
  checked = false,
  onChange,
  variant = "primary",
  className,
}: {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  variant?: Variant;
  className?: string;
}) => {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange?.(!checked)}
      className={cn(
        "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        checked ? bgMap?.[variant] : "bg-gray-500 bg-opacity-20",
        className
      )}
    >
      <span
        className={cn(
          "inline-block h-4 w-4 rounded-full bg-white transition-transform",
          checked ? "translate-x-6" : "translate-x-1"
        )}
      />
    </button>
  );
};
