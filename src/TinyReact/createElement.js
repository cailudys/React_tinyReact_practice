// 用于创建虚拟DOM
// ...children的写法，表示我们要把后面的参数都放到children这个数组当中
export default function createElement(type, props, ...children) {
  // 返回值是虚拟DOM,实际就是一个JavaScript对象。
  return {
    type,
    props,
    children,
  };
}
