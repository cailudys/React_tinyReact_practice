import mountElement from "./mountElement";

// 挂载 普通虚拟DOM的情况 (将普通的虚拟DOM转化为真实的DOM，并挂载到文档中)
export default function monutNativeElement(virtualDOM, container) {
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
  // 把这个虚拟DOM节点树，转化为真实的DOM树之后，插入到文档流中。
  container.appendChild(newElement);
}
