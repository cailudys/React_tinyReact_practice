import mountElement from "./mountElement";

export default function diff(virtualDOM, container, oldDOM) {
  // 1. 判断oldDOM是否存在
  if (!oldDOM) {
    // 2. 用mountElement方法分别处理 是普通虚拟节点 还是 组件。
    mountElement(virtualDOM, container);
  }
}
