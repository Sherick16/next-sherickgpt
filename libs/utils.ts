import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const capitalize = (str: string) => {
  if (typeof str !== "string") return "";
  if (str.length === 0) return "";

  return str.charAt(0).toUpperCase() + str.slice(1);
};
