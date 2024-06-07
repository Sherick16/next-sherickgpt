import { ReactNode } from "react";
import { cn } from "@/utils/utils";
import { styleMap } from "./ui.common";
import { Variant } from "./ui.types";

const ActionButton = ({
  children,
  variant = "primary",
  icon,
  className,
  onClick,
  ...props
}: {
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      {...props}
      className={cn(
        "px-6 py-4 rounded-full bg-opacity-20 hover:bg-opacity-40 transition-all flex items-center justify-center",
        className,
        styleMap?.[variant] || styleMap["primary"]
      )}
      onClick={onClick}
    >
      {icon && <span className="mr-2 inline-block align-middle">{icon}</span>}
      {children}
    </button>
  );
};

export default ActionButton;
