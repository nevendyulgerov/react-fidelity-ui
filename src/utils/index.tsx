/**
 * @description Is null
 * @param val
 */
export const isNull = (val: any) : boolean => val === null;

/**
 * @description Is array
 * @param val
 */
export const isArr = (val: any) : boolean => Array.isArray(val);

/**
 * @description Is object
 * @param val
 */
export const isObj = (val: any) : boolean => typeof val === 'object' && !isArr(val) && !isNull(val);

/**
 * @description Is number
 * @param val
 */
// eslint-disable-next-line no-restricted-globals
export const isNum = (val: any) : boolean => typeof val === 'number' && !isNaN(val);

/**
 * @description Is function
 * @param val
 */
export const isFunc = (val: any) : boolean => typeof val === 'function';

/**
 * @description Is string
 * @param val
 */
export const isStr = (val: any) : boolean => typeof val === 'string';

/**
 * @description Is undefined
 * @param val
 */
export const isUndef = (val: any) : boolean => typeof val === 'undefined';

/**
 * @description Is boolean
 * @param val
 */
export const isBool = (val: any) : boolean => typeof val === 'boolean';

/**
 * @description Is non empty string
 * @param val
 */
export const isNonEmptyStr = (val: any) : boolean => isStr(val) && val !== '';

/**
 * @description Uid
 * @param len
 */
export const uid = (len: number = 7): string => Math.random().toString(35).substr(2, len);

/**
 * @description Get object keys
 * @param obj
 * @returns {Array}
 */
export const getKeys = (obj: any) => Object.keys(obj);

/**
 * @description Each key
 * @param obj
 * @param callback
 */
export const eachKey = (obj: any, callback: (key: string, prop: any, index: number) => void) => {
  getKeys(obj).forEach((key, index) => callback(key, obj[key], index));
};

/**
 * @description Observe intersection
 * @param target
 * @param callback
 */
export const observeIntersection = (target: HTMLElement, callback: (items: []) => void) => {
  if (!isFunc(window.IntersectionObserver)) {
    return console.warn('IntersectionObserver is not supported.');
  }

  // eslint-disable-next-line compat/compat
  const Observe = new IntersectionObserver((items: []) => {
    callback(items);
  });

  Observe.observe(target);

  return Observe;
};

/**
 * @description Get css var
 * @param varName
 */
export const getCssVar = (varName: string): string | null => (
  getComputedStyle(document.documentElement).getPropertyValue(varName)
);

/**
 * @description Set css var
 * @param varName
 * @param varValue
 */
export const setCssVar = (varName: string, varValue: string | null) => {
  document.documentElement.style.setProperty(varName, varValue);
};

/**
 * @description Limit number
 * @param num
 * @param max
 */
export const limitNum = (num: number, max: number) => (num <= max ? num : max);

/**
 * @description Can render prop
 * @param prop
 */
export const isRenderable = (prop: any) => isNonEmptyStr(prop) || isNum(prop) || isObj(prop);
