// src/utils/cn.ts

/**
 * Utility function to conditionally join class names.
 * Filters out any falsy values and joins the remaining classes with a space.
 *
 * @param classes - An array of class names or falsy values.
 * @returns A single string of concatenated class names.
 */
export function cn(...classes: Array<string | undefined | false>): string {
  return classes.filter(Boolean).join(' ');
}
