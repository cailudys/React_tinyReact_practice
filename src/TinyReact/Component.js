import diff from "./diff";
export default class Component {
  constructor(props) {
    this.props = props;
  }
  setState(state) {
    // setState 不是用现在的state覆盖原有的state；而是和原有的state进行assign合并。
    this.state = Object.assign({}, this.state, state);
    // setState 在被触发之后，会手动的去触发render方法。获取最新的virtualDOM
    /**
     * 如何更新页面当中的状态？
     * 1.调用this.render()方法获取到最新的virtualDOM
     * 2.使用新的virtualDOM 和旧的virtualDOM进行比对找出差异部分
     * 3.把差异部分更新到页面当中。
     */
    let virtualDOM = this.render();
    // 获取旧的 virtualDOM 对象进行比对
    let oldDOM = this.getDOM();

    // 获取容器
    let container = oldDOM.parentNode;
    // 新旧对比
    diff(virtualDOM, container, oldDOM);
  }
  // 在component类中定义一个方法，这个方法的名字叫做setDOM，通过setDOM方法，可以把这个DOM对象存在Component类的实例对象(也就是组件)当中。
  setDOM(dom) {
    this._dom = dom;
  }
  getDOM() {
    return this._dom;
  }
}
