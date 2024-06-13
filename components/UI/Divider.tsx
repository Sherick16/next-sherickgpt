import { cn } from "@/libs/utils";

const Divider = ({ className }: { className?: string }) => (
  <div className={cn("h-0.5 bg-gray-600 bg-opacity-40", className)} />
);

export default Divider;