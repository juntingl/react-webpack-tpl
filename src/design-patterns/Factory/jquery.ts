/**
 * 工厂模式（Factory Pattern） - Jquery 场景
 * @Author: Junting
 * @Date: 2022-11-19 09:56:54
 * @Last Modified by: Junting
 * @Last Modified time: 2022-11-19 10:23:46
 */

// 扩展 window 全局的属性
// 需要在类型声明文件里定义此扩展
// declare interface Window {
//   $: (selector: string) => JQuery;
// }

class JQuery {
  selector: string;
  length: number;

  constructor(selector: string) {
    const domList = Array.prototype.slice.call(document.querySelectorAll(selector));
    const length = domList.length;

    for (let i = 0; i < length; i++) {
      // @ts-ignore
      this[i] = domList[i];
    }
    this.selector = selector;
    this.length = length;
  }

  append(elem: HTMLElement): JQuery {
    // append 操作
    return this;
  }

  addClass (className: string): JQuery {
    // addClass 操作
    return this;
  }

  // other methods...
}

// 不使用工厂模式的情况下使用 JQuery， 每次都要 new JQuery 一下, 很繁琐
// const $div = new JQuery("div");
// const $p = new JQuery("p");

// 用工厂模式
window.$$ = (selector: string) =>{
  return new JQuery(selector);
};

export default JQuery;
