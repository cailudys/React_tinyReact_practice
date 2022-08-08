import isFunctionComponent from "./isFunctionComponent";

/**
 * mountComponent方法作用
 * 把类组件 和 函数组件 对应的 虚拟dom 转化为真实DOM;并且最后挂载到文档流中。
 */
export default function mountComponent(virtualDOM, container) {
  // 判断组件是类组件还是函数组件
  if (isFunctionComponent(virtualDOM)) {
    console.log("函数组件");
  } else {
    console.log("类组件");
  }
}
