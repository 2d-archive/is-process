/**
 * Check whether a value is the process.
 * @param value The value to check.
 *
 * @example
 * ```
 * import isProcess from "is-process";
 *
 * isProcess(process);
 * // => true
 *
 * isProcess({});
 * // => false
 *
 * isProcess(42069);
 * // => false
 * ```
 */
declare function isProcess(value: unknown): value is NodeJS.Process;

export = isProcess;