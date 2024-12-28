"use client";

import React, { ReactNode, useState } from "react";
import { cn } from "@/libs/utils";
import { styleMap, bgMap } from "./ui.common";
import { Variant } from "./ui.types";

export interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

export const TabGroup = ({
  tabs,
  variant = "primary",
  className,
}: {
  tabs: Tab[];
  variant?: Variant;
  className?: string;
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);
  const longestTabLabel = Math.max(...tabs.map((tab) => tab.label.length));

  return (
    <div className={cn("w-full", className)}>
      <div className="relative flex bg-gray-500 bg-opacity-10 rounded-4xl">
        {/* Background highlight for active tab */}
        <div
          className={cn(
            "absolute h-full top-0 transition-all duration-200 rounded-3xl bg-opacity-30",
            bgMap[variant]
          )}
          style={{
            left: `${
              (tabs.findIndex((tab) => tab.id === activeTab) * 100) /
              tabs.length
            }%`,
            width: `${100 / tabs.length}%`,
          }}
        />

        {/* Tab buttons */}
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative flex-1 p-4 text-sm font-medium transition-colors duration-200 z-10 rounded-4xl",
              activeTab === tab.id
                ? cn(styleMap[variant], "bg-opacity-0 hover:bg-opacity-0")
                : cn(
                    styleMap[variant],
                    "bg-opacity-0 hover:bg-opacity-10 text-opacity-80"
                  )
            )}
            style={{
              // Width in pixels based on the length of the longest tab label.
              width: `${longestTabLabel * 20}px`,
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-4">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};
