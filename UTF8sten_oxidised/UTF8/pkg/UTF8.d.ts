/* tslint:disable */
/* eslint-disable */

/**
 * function to deencode string that contains UTF-8 characters and returns Vector with codepoints of characters
 */
export function UTF8_den(string: string): Uint32Array;

/**
 * function to decode data from codepoints
 * decodes result of enSten and enSten2 functions
 */
export function deSten(arr: Uint32Array): Uint8Array;

/**
 * function to decode data from codepoints, second version of encoding
 * it's more optimized specifically for decoding second version
 * only decodes result of enSten2 function
 */
export function deSten2(arr: Uint32Array): Uint8Array;

/**
 * function to encode bytes in UTF-8 characters, recives array of bytes and length of that array, and returns vector with codepoints with data stored in it
 * uses new way to encode, which can be faster
 */
export function enSten(arr: Uint8Array): string;

/**
 * function to encode bytes in UTF-8 characters, recives array of bytes and length of that array, and returns vector with codepoints with data stored in it
 * secont, more efficient encoding methode
 * works reliably with ascii table values (x<=0x7f)
 * * other byte values are just gamble
 */
export function enSten2(arr: Uint8Array): string;

export function v2_encode_valid(arr: Uint8Array): boolean;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly UTF8_den: (a: number, b: number) => [number, number];
    readonly deSten: (a: number, b: number) => [number, number];
    readonly deSten2: (a: number, b: number) => [number, number];
    readonly enSten: (a: number, b: number) => [number, number];
    readonly enSten2: (a: number, b: number) => [number, number];
    readonly v2_encode_valid: (a: number, b: number) => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
