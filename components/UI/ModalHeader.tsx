import { ReactNode } from "react";
import { cn } from "@/libs/utils";

export interface ModalHeaderProps {
  children: ReactNode;
  className?: string;
}

export const ModalHeader = ({ children, className }: ModalHeaderProps) => {
  return (
    <div className={cn("px-6 pt-6 pb-4", className)}>
      <div className="text-lg font-semibold text-gray-200">{children}</div>
    </div>
  );
};
