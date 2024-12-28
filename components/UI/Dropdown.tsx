import { ReactNode, useEffect, useState } from "react";
import { cn } from "@/libs/utils";
import { ChevronDown } from "lucide-react";
import { styleMap, bgMap, rowStyleMap } from "./ui.common";
import { Variant } from "./ui.types";

const Dropdown = ({
  options,
  variant = "secondary",
  onSelect,
  selected,
  className,
  ...props
}: {
  options: { label: string; value: string }[];
  variant?: Variant;
  className?: string;
  onSelect?: (value: string) => void;
  selected?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // When escape key is pressed, close the dropdown.
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className={cn("relative inline-block text-left min-w-64", className)}
      {...props}
    >
      <button
        className={cn(
          "px-6 py-4 rounded-4xl bg-opacity-20 hover:bg-opacity-40 border transition-all flex items-center justify-between  border-opacity-20  min-w-64",
          styleMap?.[variant] || styleMap["primary"]
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected || "Select an option"}
        <ChevronDown
          className={cn("w-5 h-5 ml-2", isOpen ? "transform rotate-180" : "")}
        />
      </button>
      {isOpen && (
        <div
          className={cn(
            "absolute z-30 backdrop-blur-lg w-full p-2 mt-2 origin-top-right rounded-3xl bg-opacity-20 shadow-lg ring-1 ring-black ring-opacity-5 border border-opacity-30",
            bgMap?.[variant] || bgMap["primary"]
          )}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  onSelect && onSelect(option.value);
                  setIsOpen(false);
                }}
                className={cn(
                  "block w-full px-6 py-4 text-left rounded-2xl hover:bg-opacity-20 transition-all",
                  rowStyleMap?.[variant] || rowStyleMap["primary"],
                  selected === option.value ? "font-bold" : ""
                )}
                role="menuitem"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
      {isOpen && (
        <div
          className="fixed inset-0 z-20"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Dropdown;
