import isFunction from "./isFunction";

/**
 * isFunctionComponent方法的作用：
 * 用于区分类组件还是函数组件
 */
export default function isFunctionComponent(virtualDOM) {
  const type = virtualDOM.type;
  return (
    // 如果组件身上有render方法则是类组件；如果没有则是函数组件。
    type && isFunction(virtualDOM) && !(type.prototype && type.prototype.render)
  );
}
