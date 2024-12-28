import Link from "next/link";
import React from "react";
import { cn } from "@/libs/utils";

const NavItem = ({
  children,
  icon,
  className,
  to,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  to: string;
}) => (
  <Link
    href={to}
    className={cn(
      "right-2 relative max-w-xs block overflow-hidden whitespace-nowrap text-ellipsis text-sm text-gray-200 hover:bg-gray-700 hover:bg-opacity-40 p-2 rounded-3xl",
      className
    )}
  >
    {icon && <span className="mr-2 inline-block align-middle">{icon}</span>}
    {children}
  </Link>
);

export default NavItem;
