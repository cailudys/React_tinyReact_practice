import TinyReact from "./TinyReact";

const root = document.getElementById("root");

const virtualDOM = (
  <div className="container">
    <h1>你好 Tiny React</h1>
    <h2 data-test="test">（编码必杀技）</h2>
    <div>
      嵌套1 <div>嵌套1.1</div>
    </div>
    <h3>观察：这个将会被改变</h3>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    <span>这是一段内容</span>
    <button onClick={() => alert("你好")}>点击我</button>
    <h3>这个将会被删除</h3>
    2,3
    <input type="text" value="13" />
  </div>
);

// 当执行到JSX代码的时候，因为在babel中配置了，所以会自动转化tinyReact的调用，最后返回的是虚拟DOM.
// console.log(virtualDOM);

// 把virtualDOM转换为真实的DOM
// render方法的第一个参数就是 virtualDOM
// render方法的第二个参数是 DOM容器
// TinyReact.render(virtualDOM, root);
function DEMO() {
  return <div>&hearts;</div>;
}

function Heart() {
  return <DEMO />;
}

TinyReact.render(<Heart />, root);
