/**
 * updateTextNode方法用于更新文本节点
 * @param {*} virtualDOM
 * @param {*} oldVirtualDOM
 * @param {*} oldDOM
 */
export default function updateTextNode(virtualDOM, oldVirtualDOM, oldDOM) {
  if (virtualDOM.props.textContent !== oldVirtualDOM.props.textContent) {
    oldDOM.textContent = virtualDOM.props.textContent;
    oldDOM._virtualDOM = virtualDOM;
  }
}
