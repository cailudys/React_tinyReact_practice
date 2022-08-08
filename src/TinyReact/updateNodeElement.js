/**
 * updateNodeElement方法的作用：
 * 给真实DOM添加属性
 */

export default function updateNodeElement(newElement, virtualDOM) {
  // 获取节点对应的属性对象
  const newProps = virtualDOM.props;
  Object.keys(newProps).forEach((propName) => {
    // 获取属性值
    const newPropsVlue = newProps[propName];
    // 判断属性是否是事件属性 onClick -> click
    if (propName.slice(0, 2) === "on") {
      // 事件名称
      const eventName = propName.toLowerCase().slice(2);
      // 为元素添加事件
      newElement.addEventListener(eventName, newPropsVlue);
    } else if (propName === "value" || propName === "checked") {
      newElement[propName] = newPropsVlue;
    } else if (propName !== "children") {
      if (propName === "className") {
        newElement.setAttribute("class", newPropsVlue);
      } else {
        newElement.setAttribute(propName, newPropsVlue);
      }
    }
  });
}
