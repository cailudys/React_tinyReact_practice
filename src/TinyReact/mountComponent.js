import isFunctionComponent from "./isFunctionComponent";
import monutNativeElement from "./mountNativeElement";
import isFunction from "./isFunction";

/**
 * mountComponent方法作用
 * 把类组件 和 函数组件 对应的 虚拟dom 转化为真实DOM;并且最后挂载到文档流中。
 */
export default function mountComponent(virtualDOM, container) {
  let nextVirtualDOM = null;
  // 判断组件是类组件还是函数组件
  if (isFunctionComponent(virtualDOM)) {
    nextVirtualDOM = buildFunctionComponent(virtualDOM);
    console.log(nextVirtualDOM);
  } else {
    console.log("类组件");
  }

  // 递归调用，判断nextVirtualDOM是否是组件。
  if (isFunction(nextVirtualDOM)) {
    mountComponent(nextVirtualDOM, container);
  }

  monutNativeElement(nextVirtualDOM, container);
}

/**
 * buildFunctionComponent方法的作用：
 * 处理函数组件，拿到组件返回的virtualDOM.
 */
//
function buildFunctionComponent(virtualDOM) {
  return virtualDOM.type();
}
