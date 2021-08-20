// 判断数据类型函数
export function toRawType(value: unknown) {
  return Object.prototype.toString.call(value).slice(8, -1)
}

/** 字符串 类型 **/
export function isString(val: unknown): val is string {
  return typeof val === 'string' || val instanceof String
}

/** 数字 类型 **/
export function isNumber(val: unknown): val is number {
  return toRawType(val) === 'Number'
}

/** 布尔 类型 **/
export function isBoolean(val: unknown): val is boolean {
  return toRawType(val) === 'Boolean'
}

/** null 类型 **/
export function isNull(val: unknown): val is null {
  return val === null
}

/** undefined 类型 **/
export function isUndefined<T = unknown>(val?: T): val is T {
  return val === undefined
}

/** symbol 类型 **/
export function isSymbol(val: unknown): val is symbol {
  return toRawType(val) === 'Symbol'
}

/** 函数 类型 **/
export function isFunction(val: unknown): val is Function {
  return typeof val === 'function'
}

/** Object 类型 **/
export function isObject(val: any): val is Record<any, any> {
  return toRawType(val) === 'Object'
}

/** 数组 类型 **/
export function isArray(val: any): val is Array<any> {
  if (!Array.isArray) return toRawType(val) === 'Array'
  return Array.isArray(val)
}

/** 正则 类型 **/
export function isRegExp(val: unknown): val is RegExp {
  return toRawType(val) === 'RegExp'
}

/** Date 类型 **/
export function isDate(val: unknown): val is Date {
  return toRawType(val) === 'Date'
}

/** 空对象 类型 **/
export function isEmpty<T = unknown>(val: T): val is T {
  if (isArray(val) || isString(val)) return val.length === 0
  if (val instanceof Map || val instanceof Set) return val.size === 0
  if (isObject(val)) return Object.keys(val).length === 0
  return false
}

export function isWindow(val: any): val is Window {
  return typeof window !== 'undefined' && toRawType(val) === 'Window'
}

export const isServer = typeof window === 'undefined'

export const isClient = !isServer

export function isUrl(path: string): boolean {
  const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/
  return reg.test(path)
}
