// 用于创建虚拟DOM
// ...children的写法，表示我们要把后面的参数都放到children这个数组当中
export default function createElement(type, props, ...children) {
  /** 最简单的virtual DOM存在的问题
   * 1. 文本节点，以字符串表现的，不符合要求，应该也是以对象的形式表现出来。
   */

  // 处理方法：循环遍历children，如果当前项是对象不处理，如果当前项不是对象，则说明是文本节点，则处理成文本节点对应对象。
  // 难点在于处理成文本节点对象，是通过重复调用createElement函数本身来实现的【其实是递归的知识点】。
  const childElements = [].concat(...children).map((child) => {
    if (child instanceof Object) {
      return child;
    } else {
      return createElement("text", { textContent: child });
    }
  });

  // 返回值是虚拟DOM,实际就是一个JavaScript对象。
  return {
    type,
    props,
    children: childElements,
  };
}
