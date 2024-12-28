import React from "react";
import { cn } from "@/libs/utils";

export const Skeleton = ({ className, ...props }: { className?: string }) => {
  return (
    <div
      className={cn(
        "animate-pulse bg-gray-500 bg-opacity-20 rounded-4xl",
        className
      )}
      {...props}
    />
  );
};
