import createDOMElement from "./createDOMElement";

/**
 * monutNativeElement方法的作用：
 * 1. 将普通的虚拟DOM转化为真实的DOM，并挂载到文档中
 */
export default function monutNativeElement(virtualDOM, container) {
  const newElement = createDOMElement(virtualDOM);
  // 把这个虚拟DOM节点树，转化为真实的DOM树之后，插入到文档流中。
  container.appendChild(newElement);
}
