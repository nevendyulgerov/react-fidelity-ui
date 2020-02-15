/**
 * @description Is null
 * @param val
 */
export declare const isNull: (val: any) => boolean;
/**
 * @description Is array
 * @param val
 */
export declare const isArr: (val: any) => boolean;
/**
 * @description Is object
 * @param val
 */
export declare const isObj: (val: any) => boolean;
/**
 * @description Is number
 * @param val
 */
export declare const isNum: (val: any) => boolean;
/**
 * @description Is function
 * @param val
 */
export declare const isFunc: (val: any) => boolean;
/**
 * @description Is string
 * @param val
 */
export declare const isStr: (val: any) => boolean;
/**
 * @description Is undefined
 * @param val
 */
export declare const isUndef: (val: any) => boolean;
/**
 * @description Is boolean
 * @param val
 */
export declare const isBool: (val: any) => boolean;
/**
 * @description Is non empty string
 * @param val
 */
export declare const isNonEmptyStr: (val: any) => boolean;
/**
 * @description Uid
 * @param len
 */
export declare const uid: (len?: number) => string;
/**
 * @description Observe intersection
 * @param target
 * @param callback
 */
export declare const observeIntersection: (target: HTMLElement, callback: (items: []) => void) => void | IntersectionObserver;
/**
 * @description Get css var
 * @param varName
 */
export declare const getCssVar: (varName: string) => string | null;
/**
 * @description Set css var
 * @param varName
 * @param varValue
 */
export declare const setCssVar: (varName: string, varValue: string | null) => void;
/**
 * @description Limit number
 * @param num
 * @param max
 */
export declare const limitNum: (num: number, max: number) => number;
/**
 * @description Can render prop
 * @param prop
 */
export declare const isRenderable: (prop: any) => boolean;
