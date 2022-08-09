import mountElement from "./mountElement";
import updateNodeElement from "./updateNodeElement";
import updateTextNode from "./updateTextNode";

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
  const oldVirtualDOM = oldDOM && oldDOM._virtualDOM;
  // 1. 判断oldDOM是否存在
  if (!oldDOM) {
    // 2. 用mountElement方法分别处理 是普通虚拟节点 还是 组件。
    mountElement(virtualDOM, container);
  } else if (oldVirtualDOM && virtualDOM.type === oldVirtualDOM.type) {
    /**
     * 首先处理 虚拟DOM {types,props,children} 类型不变的情况下:
     * 这种情况下又细分为两种情况(文本节点和元素节点的属性修改不同)
     *  第一种是修改文本节点属性的情况；文本节点
     *  第二种是修改元素节点属性的情况；
     */

    if (virtualDOM.type === "text") {
      // 更新内容
      updateTextNode(virtualDOM, oldVirtualDOM, oldDOM);
    } else {
      // 更新元素属性
      updateNodeElement(oldDOM, virtualDOM, oldVirtualDOM);
    }

    virtualDOM.children.forEach((child, i) => {
      diff(child, oldDOM, oldDOM.childNodes[i]);
    });
  }
}
