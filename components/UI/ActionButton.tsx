import React, { ReactNode } from "react";
import { cn } from "@/libs/utils";
import { styleMap } from "./ui.common";
import { Variant } from "./ui.types";
import { Spinner } from "./Spinner";

const ActionButton = ({
  children,
  variant = "primary",
  icon,
  className,
  loading = false,
  onClick,
  ...props
}: {
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
  loading?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      {...props}
      className={cn(
        "px-6 py-4 rounded-4xl bg-opacity-20 hover:bg-opacity-40 transition-all flex items-center justify-center",
        styleMap?.[variant] || styleMap["primary"],
        loading ? "cursor-not-allowed opacity-60" : "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {icon && !loading ? (
        <span className="mr-2 inline-block align-middle">{icon}</span>
      ) : loading ? (
        <Spinner className="mr-2" size="small" />
      ) : null}
      {children}
    </button>
  );
};

export default ActionButton;
