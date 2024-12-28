import { cn } from "@/libs/utils";

const Divider = ({
  className,
  orientation = "horizontal",
}: {
  className?: string;
  orientation?: "horizontal" | "vertical";
}) => (
  <div
    className={cn(
      orientation === "horizontal" ? "h-0.5 w-full" : "w-0.5 h-full",
      "bg-gray-600 bg-opacity-40",
      className
    )}
  />
);

export default Divider;
