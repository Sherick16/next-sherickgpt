import { ReactNode } from "react";
import { cn } from "@/libs/utils";
import { styleMap } from "./ui.common";
import { Variant } from "./ui.types";

export const Card = ({
  children,
  variant = "primary",
  className,
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "p-6 rounded-4xl bg-opacity-20 hover:bg-opacity-20",
        styleMap[variant],
        className
      )}
    >
      {children}
    </div>
  );
};
