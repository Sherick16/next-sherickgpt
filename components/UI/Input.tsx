import { ReactNode, useState, useEffect } from "react";
import { cn } from "@/libs/utils";

const Input = ({
  placeholder,
  label,
  onChange,
  defaultValue,
  className,
  required,
  error,
  ...props
}: {
  placeholder?: string;
  label?: string;
  onChange?: (value: string) => void;
  defaultValue?: string;
  className?: string;
  required?: boolean;
  error?: boolean;
}) => {
  const [value, setValue] = useState(defaultValue || "");

  useEffect(() => {
    if (defaultValue) setValue(defaultValue || "");
  }, [defaultValue]);

  return (
    <div className={cn("flex flex-col", className)} {...props}>
      {label && (
        <label className="mb-2 font-semibold">
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}
      <input
        className={cn(
          "px-6 py-4 rounded-full bg-opacity-20 hover:bg-opacity-40 border transition-all min-w-64 border-opacity-20 focus:outline-none focus:border-opacity-50",
          !error
            ? "border-gray-400 bg-gray-400 text-gray-300 hover:bg-gray-500"
            : "border-red-500 border-opacity-40 focus:border-opacity-100 text-red-400 bg-red-500 bg-opacity-10 hover:bg-opacity-20 hover:bg-red-500"
        )}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onChange && onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
