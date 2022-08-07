// 用于创建虚拟DOM
// ...children的写法，表示我们要把后面的参数都放到children这个数组当中
export default function createElement(type, props, ...children) {
  /** 最简单的virtual DOM存在的问题
   * 1. 文本节点，以字符串表现的，不符合要求，应该也是以对象的形式表现出来。
   * 2. 布尔值为flase的时候也被当做文本节点被处理掉了。（要把 null false true 刨除出去）因为这些是不会在页面中呈现的。
   * 3. 暂时还不能通过props.children 来拿到子节点。
   */

  // 处理方法：循环遍历children，如果当前项是对象不处理，如果当前项不是对象，则说明是文本节点，则处理成文本节点对应对象。
  // 难点在于处理成文本节点对象，是通过重复调用createElement函数本身来实现的【其实是递归的知识点】。
  // 重点内容，因为我们要刨除某些内容，所以这里我们不能用map方法，而应该改用reduce方法。
  // 请务必弄清楚，为啥reduce方能满足需求。
  const childElements = [].concat(...children).reduce((result, child) => {
    if (child !== false && child !== true && child !== null) {
      if (child instanceof Object) {
        result.push(child);
      } else {
        result.push(createElement("text", { textContent: child }));
      }
    }
    return result;
  }, []);

  // 返回值是虚拟DOM,实际就是一个JavaScript对象。
  return {
    type,
    // 使用assign方法，来合并children和props，从而使可以使用props.children来拿到子属性。
    props: Object.assign({ children: childElements }, props),
    children: childElements,
  };
}
