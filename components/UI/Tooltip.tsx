import { ReactNode, useState, useEffect } from "react";
import { cn } from "@/utils/utils";

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
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setShow(true);
    const handleMouseLeave = () => setShow(false);

    const element = document.getElementById("tooltip") as HTMLElement;
    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      id="tooltip"
      className={cn("relative inline-block", className)}
      {...props}
    >
      {children}
      {show && (
        <div
          role="tooltip"
          className="absolute z-10 p-2 mt-2 origin-top-right rounded-lg backdrop-blur-lg bg-gray-500 bg-opacity-20 shadow-xl border border-gray-400 border-opacity-20 text-sm animate-fade"
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
