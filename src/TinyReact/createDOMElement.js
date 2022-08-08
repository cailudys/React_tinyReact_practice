import mountElement from "./mountElement";

/**
 * createDOMElement方法的作用：
 * 1. 将普通的虚拟DOM转化为真实的DOM。并返回出去。
 */
export default function createDOMElement(virtualDOM) {
  let newElement = null;
  if (virtualDOM.type == "text") {
    // 文本节点
    newElement = document.createTextNode(virtualDOM.props.textContent);
  } else {
    // 元素节点
    newElement = document.createElement(virtualDOM.type);
  }
  // 递归创建子节点
  virtualDOM.children.forEach((child) => {
    mountElement(child, newElement);
  });
  return newElement;
}
