import { cn } from "@/utils/utils";
import { useRef } from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

type Variant = 'primary' | 'secondary' | 'danger' | 'warning' | 'success';

const Search = ({ onSearch, variant = 'secondary', className, ...props }: { onSearch: (value: string) => void, variant?: Variant, className?: string }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={cn('relative inline-block text-left min-w-64', className)} {...props}>
      <input ref={inputRef} className={cn('px-6 py-4 rounded-full bg-opacity-20 hover:bg-opacity-40 border transition-all w-64 border-opacity-20 focus:outline-none focus:border-opacity-50', styleMap?.[variant] || styleMap['primary'])} placeholder="Search..." />
      <button onClick={() => onSearch(inputRef.current?.value || '')} className={cn('absolute right-0 px-4 py-4 rounded-full bg-opacity-20 hover:bg-opacity-40 transition-all')}>
        <MagnifyingGlassIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Search;