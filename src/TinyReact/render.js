import diff from "./diff";

// 方法的作用是把 virtualDOM对象转化为真实的DOM对象，并将真实DOM对象展示在页面当中。
// 还需要考虑的是，有没有旧的DOM，如果有则需要对比，如果没有直接放置到文档的节点上。
export default function render(virtualDOM, container, oldDOM) {
  // 用diff方法在做比对的事情。
  diff(virtualDOM, container, oldDOM);
  // 首先我应该知道，怎样才能在页面上显示内容。分为下面两个步骤。
  // 1. 创建真实的DOM节点 2.把真实的DOM挂载到document中的节点上。
}
