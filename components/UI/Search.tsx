import React, { useRef } from "react";
import { cn } from "@/libs/utils";
import { Search as SearchIcon } from "lucide-react";
import { styleMap } from "./ui.common";
import { Variant } from "./ui.types";
import { Spinner } from "./Spinner";

const Search = ({
  onSearch,
  variant = "secondary",
  className,
  loading = false,
  ...props
}: {
  onSearch: (value: string) => void;
  variant?: Variant;
  className?: string;
  loading?: boolean;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const debounce = (func: Function, delay: number) => {
    let timer: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const handleSearch = debounce((value: string) => {
    onSearch(value);
  }, 300);

  return (
    <div
      className={cn("relative inline-block text-left", className)}
      {...props}
    >
      <input
        ref={inputRef}
        className={cn(
          "px-6 py-4 rounded-4xl bg-opacity-20 hover:bg-opacity-40 border transition-all border-opacity-20 focus:outline-none focus:border-opacity-50",
          styleMap?.[variant] || styleMap["primary"],
          loading ? "cursor-not-allowed opacity-60" : "cursor-pointer"
        )}
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button
        onClick={() => onSearch(inputRef.current?.value || "")}
        className={cn(
          "absolute right-0 px-4 py-4 rounded-4xl bg-gray-400 bg-opacity-0 hover:bg-opacity-10 transition-all",
          loading ? "cursor-not-allowed opacity-60" : "cursor-pointer"
        )}
      >
        {loading ? (
          <Spinner className="w-6 h-6" />
        ) : (
          <SearchIcon className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default Search;
