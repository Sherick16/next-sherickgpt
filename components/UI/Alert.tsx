import { ReactNode, useState } from "react";
import { cn } from "@/libs/utils";
import { styleMap } from "./ui.common";
import { Variant } from "./ui.types";
import { AlertCircle, CheckCircle, Info, XCircle } from "lucide-react";
import { X } from "lucide-react";

const iconMap = {
  primary: Info,
  secondary: Info,
  danger: XCircle,
  warning: AlertCircle,
  success: CheckCircle,
};

export const Alert = ({
  children,
  variant = "primary",
  className,
  closeable = false,
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  closeable?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const Icon = iconMap?.[variant];

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "p-4 rounded-4xl bg-opacity-20 flex items-center justify-between hover:bg-opacity-20",
        styleMap[variant],
        className
      )}
    >
      <div className="flex items-center">
        <Icon className="w-5 h-5 mr-3" />
        <div>{children}</div>
      </div>
      {closeable && (
        <button onClick={() => setIsVisible(false)} className="ml-3 p-1">
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
