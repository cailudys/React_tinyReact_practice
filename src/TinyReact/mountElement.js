import monutNativeElement from "./mountNativeElement";

/**
 * mountElement方法的作用：
 * 1. 根据不同的virtualDOM类型，分情况渲染成真实DOM。
 * 2. 把真实DOM挂载到文档流中。
 */
export default function mountElement(virtualDOM, container) {
  // 1. 传入的虚拟dom 是 组件 还是 普通的virtualDOM
  monutNativeElement(virtualDOM, container);
}
