// /**
//  * 🎨 clog
//  * Colourful console log.
//  * @Author: Junting
//  * @Date: 2022-09-20 13:53:06
//  * @Last Modified by: Junting
//  * @Last Modified time: 2022-10-11 16:03:26
//  */

// import { capitalizeFirstLetter, typeOf } from "./utilities";

// export type ColorTypes = keyof typeof chalkColors;
// export type TypeApiObjKeys = keyof typeof apiObj;
// export type ConsoleApiKey = keyof Console;

// interface ConsoleExtension extends Console {
//   [key: string]: any;
// }

// const clog = {} as any;
// // 防止 console 被篡改
// const _console: ConsoleExtension = console;

// if (!window.clog) {
//   window.clog = clog;
// }

// /**
//  * 色彩基调 - 画笔颜色
//  * 主色：
//  * 辅助色：#f5222d、#faad14、#52c41a、#1890ff
//  * 中性色：#000000、#FFFFFF、#808695、#dcdee2、#e8eaec、#f8f8f9
//  */
// const chalkColors = {
//   // 主色
//   // 中性色
//   black: "#000000",
//   white: "#FFFFFF",
//   // 辅助色，功能色
//   red: "#f5222d", // error
//   orange: "#faad14", // warn
//   green: "#52c41a", // success
//   blue: "#1890ff", // info
// };

// // 对外提供 API, 并搭配所属色
// // 1、七彩画笔，只对输出文字上色
// // 2、功能画笔，针对原 Console 对象的 log、info、error、image 等
// // 3、色块画笔
// // 4、缝合画笔，缝合怪

// const apiObj = {
//   // 修改文字颜色，并在开头加上所属标签：[Label], 首字母大写
//   log: "black",
//   info: "blue",
//   warn: "orange",
//   error: "red",
//   success: "green",
// } as const;

// // Console 所支持的替换字符：
// // object => %o or %O
// // number => %d or %i
// // float  => %f
// // string => %s
// // 隔离：
// // CSS Style => %c

// // 依据当前提供的功能 API 针对性着色
// // 1、添加功能标签

// // 生成样式
// const generateStyle = (color: string, bg = false, borderRadius = true) => {
//   const defaultStyle = `padding: 2px;`;
//   return bg
//     ? `${defaultStyle} color: #FFF; ${
//         borderRadius ? "border-radius: 3px;" : ""
//       } background: ${color};`
//     : `${defaultStyle} color: ${color};`;
// };

// function generateOutput(type: ColorTypes, ...args: any): any[];
// function generateOutput(type: TypeApiObjKeys, ...args: any): any[];
// function generateOutput(type: string, ...args: any): any[];
// function generateOutput(type: string, ...args: any) {
//   // 输出内容
//   const replaceCharacters = args.map((arg: any) => {
//     return ["object", "array", "function"].includes(typeOf(arg)) ? "%o" : "%s";
//   });

//   // 彩色画笔
//   if (Object.keys(chalkColors).includes(type)) {
//     const color = chalkColors[type as ColorTypes];
//     return [`%c ${replaceCharacters.join(" ")} `, generateStyle(color), ...args];
//   }
//   // 带背景色彩色画笔
//   if (
//     Object.keys(chalkColors)
//       .map((item) => `bg${capitalizeFirstLetter(item)}`)
//       .includes(type)
//   ) {
//     const color = chalkColors[type.replace("bg", "").toLowerCase() as ColorTypes];
//     return [
//       `%c ${replaceCharacters.join(" ")} `,
//       generateStyle(color, true),
//       ...args,
//     ];
//   }
//   // 功能彩色画笔
//   if (Object.keys(apiObj).includes(type)) {
//     const color = chalkColors[apiObj[type as TypeApiObjKeys] as ColorTypes];
//     const label = capitalizeFirstLetter(type);
//     return [
//       `%c[${label}] ${replaceCharacters.join(" ")} `,
//       generateStyle(color),
//       ...args,
//     ];
//   }
// }

// // Suture Monster
// // console.log(
// //   ...[
// //     "%c%s%c%s%c%s",

// //     "padding: 2px 4px; border-radius: 3px 0 0 3px; color: #fff; font-weight: bold; background:#000000;",
// //     123456789,

// //     "padding: 2px 4px; color: #000; font-weight: bold; background:#FEFE;",
// //     987654321,

// //     "padding: 2px 4px; border-radius: 0 3px 3px 0; color: #fff; font-weight: bold; background:#FF0000;",
// //     "qwertyt",
// //   ]
// // );
// function splicing(...args: any[]) {
//   const results = args.reduce((result, current) => {
//     const [outputs = "", ...otherContent] = result;
//     if (typeOf(current) === "array" && current.length > 2) {
//       const [output, ...others] = current;
//       return [outputs.concat(output), ...otherContent, ...others];
//     }
//     return result;
//   }, []);
//   return results;
// }

// // console 生成器
// const generatePrintFunc = (methodName: string) => {
//   const printFunc = _console[methodName] ? _console[methodName] : _console.log;
//   return (...args: any) => printFunc(...args);
// };

// // 七彩画笔
// Object.keys(chalkColors).forEach((key) => {
//   clog[key] = (...args: any) => generateOutput(key, ...args);
// });

// // 色块画笔
// Object.keys(chalkColors).forEach((key) => {
//   clog[`bg${capitalizeFirstLetter(key)}`] = (...args: any) => generateOutput(`bg${capitalizeFirstLetter(key)}`, ...args);
// });

// // 功能画笔
// Object.keys(apiObj).forEach((key) => {
//   clog[key] = (...args: any) => generatePrintFunc(key)(...generateOutput(key, ...args));
// });

// clog["splice"] = (...args: any[]) => {
//   return _console.log(...splicing(...args))
// };

// // 拼接色块
// export default clog;

export {}
