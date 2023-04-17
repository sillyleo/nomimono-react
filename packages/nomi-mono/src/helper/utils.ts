import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// This is a little utility for making variants when using shadcn's component.
// https://ui.shadcn.com/docs/installation
