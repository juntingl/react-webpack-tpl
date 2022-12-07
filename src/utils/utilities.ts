// 是否是浏览器环境
export const isBrowser = () => {
  return typeof window === "undefined";
};

/**
 * 大驼峰
 * @param {String} str
 * @returns
 */
export const capitalizeFirstLetter = (str: string) =>
  str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());

/**
 * 获取类型
 * @param {unknown} data
 */
export const typeOf = (data: unknown) => {
  const toString = Object.prototype.toString;
  const map = {
    "[object Boolean]": "boolean",
    "[object Number]": "number",
    "[object String]": "string",
    "[object Symbol]": "symbol",
    "[object Array]": "array",
    "[object Object]": "object",
    "[object Undefined]": "undefined",
    "[object Null]": "null",
    "[object RegExp]": "regexp",
    "[object Function]": "function",
    "[object Date]": "date",
  } as const;
  return map[toString.call(data) as keyof typeof map];
};
