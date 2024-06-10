import { ReactNode } from "react";
import { cn } from "@/libs/utils";
import { styleMap } from "./ui.common";
import { Variant } from "./ui.types";

const Badge = ({
  children,
  variant = "primary",
  icon,
  className,
  ...props
}: {
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
}) => {
  return (
    <div
      {...props}
      className={cn(
        "px-2 py-2 rounded-4xl bg-opacity-20 hover:bg-opacity-40 transition-all flex items-center justify-center text-xs border border-opacity-20",
        className,
        styleMap?.[variant] || styleMap["primary"]
      )}
    >
      {icon && <span className="mr-2 inline-block align-middle">{icon}</span>}
      {children}
    </div>
  );
};

export default Badge;
