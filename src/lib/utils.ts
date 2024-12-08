import { Endpoints, Pages } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { compile } from "path-to-regexp";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toUrl = (path: Pages | Endpoints, params?: object) =>
  compile(path, { encode: encodeURIComponent })(params);
