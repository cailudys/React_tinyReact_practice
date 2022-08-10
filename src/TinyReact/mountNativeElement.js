import createDOMElement from "./createDOMElement";

/**
 * monutNativeElement方法的作用：
 * 1. 将普通的虚拟DOM转化为真实的DOM，并挂载到文档中
 */
export default function monutNativeElement(virtualDOM, container) {
  const newElement = createDOMElement(virtualDOM);
  // 把这个虚拟DOM节点树，转化为真实的DOM树之后，插入到文档流中。
  container.appendChild(newElement);

  // 要在monutNativeElement的时候调用setDOM方法，通过这个方法把DOM对象存储到 Component类的实例对象当中。
  // 因为setDOM方法是类的方法，所有需要通过类的实例对象去调用，那么就得拿到Component类的实例对象
  let component = virtualDOM.component;
  if (component) {
    component.setDOM(newElement);
  }
}
