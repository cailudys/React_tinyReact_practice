import monutNativeElement from "./mountNativeElement";
import isFunction from "./isFunction";
import mountComponent from "./mountComponent";

/**
 * mountElement方法的作用：
 * 1. 根据不同的virtualDOM类型，分情况渲染成真实DOM。
 * 2. 把真实DOM挂载到文档流中。
 */
export default function mountElement(virtualDOM, container) {
  // isFunction方法；用来根据virtualDOM对象判断对应的virtualDOM形式是 组件 还是 React元素。
  if (isFunction(virtualDOM)) {
    // 1. 当virtualDOM形式是组件的时候执行这里
    mountComponent(virtualDOM, container);
  } else {
    // 1. 当virtualDOM形式是普通React元素的时候执行这里
    monutNativeElement(virtualDOM, container);
  }
}
