import { ReactNode } from "react";
import { cn } from "@/libs/utils";

export interface ModalFooterProps {
  children: ReactNode;
  className?: string;
}

export const ModalFooter = ({ children, className }: ModalFooterProps) => {
  return (
    <div
      className={cn(
        "px-6 py-4 mt-auto",
        "border-t border-gray-700/50",
        "flex items-center justify-end gap-3",
        className
      )}
    >
      {children}
    </div>
  );
};
