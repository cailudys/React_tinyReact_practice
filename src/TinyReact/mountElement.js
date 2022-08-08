import monutNativeElement from "./mountBatuveElement";
export default function mountElement(virtualDOM, container) {
  // 1. 传入的虚拟dom 是 组件 还是 普通的virtualDOM
  monutNativeElement(virtualDOM, container);
}
