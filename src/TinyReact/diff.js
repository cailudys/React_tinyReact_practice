import mountElement from "./mountElement";

/**
 * diff方法的作用：
 * 1. 计算出前后两份virtualDOM之间的变化。
 * 2. 把变化部分的virtualDOM转化为真实dom（创建真实dom）
 * 3. 然后把真实dom插入到文档流中（渲染页面）。
 */

/**
 * diff 方法的参数：
 * @param {*} virtualDOM  最新的virtualDOM树
 * @param {*} container 当前virtualDOM要挂载到的容器（一个真实DOM）
 * @param {*} oldDOM  旧的virtualDOM树
 */
export default function diff(virtualDOM, container, oldDOM) {
  // 1. 判断oldDOM是否存在
  if (!oldDOM) {
    // 2. 用mountElement方法分别处理 是普通虚拟节点 还是 组件。
    mountElement(virtualDOM, container);
  }
}
