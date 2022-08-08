import diff from "./diff";

/**
 * render 方法的作用是：
 * 1. 使用 diff 算法，计算出前后两份virtualDOM之间的变化。
 * 2. 把变化部分的virtualDOM转化为真实dom（创建真实dom）
 * 3. 然后把真实dom插入到文档流中（渲染页面）。
 */

/**
 * render 方法的参数：
 * @param {*} virtualDOM  最新的virtualDOM树 (更准确的理解是，react元素或者组件，当然他们都最终变成virtualDOM)
 * @param {*} container 当前virtualDOM要挂载到的容器（一个真实DOM）
 * @param {*} oldDOM  旧的virtualDOM树
 */
export default function render(
  virtualDOM,
  container,
  oldDOM = container.firstChild
) {
  diff(virtualDOM, container, oldDOM);
}
