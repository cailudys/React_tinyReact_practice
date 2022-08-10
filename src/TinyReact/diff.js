import createDOMElement from "./createDOMElement";
import mountElement from "./mountElement";
import updateNodeElement from "./updateNodeElement";
import updateTextNode from "./updateTextNode";
import unmountNode from "./unmountNode";

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
    // 如果节点类型不同的处理情况（要刨除virtualDOM是组件的情况）
  } else if (
    virtualDOM.type !== oldVirtualDOM.type &&
    typeof virtualDOM !== "function"
  ) {
    // 使用virtualDOM 去创建一个新的virtualDOM对象。
    const newElement = createDOMElement(virtualDOM);
    oldDOM.parentNode.replaceChild(newElement, oldDOM);
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

    // 比对子节点
    virtualDOM.children.forEach((child, i) => {
      diff(child, oldDOM, oldDOM.childNodes[i]);
    });

    // 删除节点
    // 获取旧节点
    let oldChildNodes = oldDOM.childNodes;
    // 判断旧节点的数量
    if (oldChildNodes.length > virtualDOM.children.length - 1) {
      // console.log("执行了");
      for (
        let i = oldChildNodes.length - 1;
        i > virtualDOM.children.length - 1;
        i--
      ) {
        unmountNode(oldChildNodes[i]);
      }
    }
  }
}
