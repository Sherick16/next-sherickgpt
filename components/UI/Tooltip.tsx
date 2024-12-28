import React, { ReactNode, useState, useEffect, useId } from "react";
import { cn } from "@/libs/utils";

const Tooltip = ({
  children,
  content,
  className,
  ...props
}: {
  children: ReactNode;
  content: ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  const id = useId();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setShow(true);
    const handleMouseLeave = () => setShow(false);

    const element = document.getElementById(`tooltip-${id}`) as HTMLElement;
    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      id={`tooltip-${id}`}
      className={cn("relative inline-block", className)}
      {...props}
    >
      {children}
      {show && (
        <div
          role="tooltip"
          className="absolute z-10 p-2 mt-2 origin-top-right rounded-lg backdrop-blur-lg min-w-32 w-full bg-gray-600 bg-opacity-50 shadow-lg text-sm animate-fade"
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
