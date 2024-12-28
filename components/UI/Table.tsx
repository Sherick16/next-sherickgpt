import { ReactNode } from "react";
import { cn } from "@/libs/utils";
import { rowStyleMap } from "./ui.common";
import { Variant } from "./ui.types";

export const Table = ({
  headers,
  rows,
  variant = "primary",
  className,
}: {
  headers: string[];
  rows: ReactNode[][];
  variant?: Variant;
  className?: string;
}) => {
  return (
    <div className={cn("w-full overflow-auto", className)}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-500 border-opacity-20">
            {headers?.map((header, i) => (
              <th
                key={i}
                className="px-4 py-3 text-left text-sm font-medium text-gray-300"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.map((row, i) => (
            <tr
              key={i}
              className={cn(
                "border-b border-gray-500 border-opacity-20 transition-colors hover:bg-opacity-10",
                rowStyleMap[variant]
              )}
            >
              {row?.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-sm text-gray-100">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
