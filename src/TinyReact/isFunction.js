/**
 * isFunction方法的作用：
 * 区分React组件 和 普通的ReactDOM元素
 */
export default function isFunction(virtualDOM) {
  return virtualDOM && typeof virtualDOM.type === "function";
}
