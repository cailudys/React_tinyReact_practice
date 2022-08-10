# 1.JSX 到底是什么

> jsx 语法让我们可用向写 html 那样，去写 React 元素。JSX 代码运行时会被 babel 编译，返回值就是一个 JavaScript 对象（也就是我们说的 virtualDOM）

# 2.真实 DOM 操作存在的问题

# 3.实现 TinyReact.createElement 方法

> 方法的作用是创建 virtualDOM 对象；
>
> 在创建 virtualDOM 对象的过程中我们要把 JSX 中的文本字符串，转化为对象类型；
>
> 然后还要刨除 JSX 中的 null false true 这三个值。 （map 方法 => reduce 方法）
>
> 最后还要在 props 对象下面添加 children 属性。

# 4.实现 TinyReact.render 方法

> 方法的作用是把 virtualDOM 对象转化为真实的 DOM 对象，并将真实 DOM 对象展示在页面当中。

### 实现步骤：

1.把虚拟 dom 转化为真实 dom=》2.在真实 dom 上添加对应的属性

# 5.类组件和函数组件对应的 virtualDOM 和普通元素对应的 virtualDOM 的区别

```js
// 组件的Virtual DOM
{
    type: f function(){}
    props:{}
    children:[]
}
```

类组件和函数组件对应的 virtualDOM 的 type 的值都是一个函数；而通元素对应的 virtualDOM 的 type 的值是元素标签名。

另一个角度来看，元素对应的 virtualDOM 是直接可用的；而组件对应的 virtualDOM 不能直接使用，没有直接体现出内部结构。

> JSX 代码在运行时才会被 babel 转化为 virtualDOM,所以函数组件需要被运行才能拿到 virtualDOM。

# virutalDOM 比对

## virtualDOM 比对顺序如下图所示：（深度优先的比对顺序）

![](src/public/virtualDOM%E6%AF%94%E5%AF%B9%E9%A1%BA%E5%BA%8F.png)

## 第一种情况：比对的节点类型相同的情况

![](src/public/virtualDOM%E8%8A%82%E7%82%B9%E7%B1%BB%E5%9E%8B%E4%B8%8D%E5%8F%98%E7%9A%84%E6%83%85%E5%86%B5%E4%B8%8B%E7%9A%84diff%E6%AF%94%E5%AF%B9.png)



```js
// 1.virtualDOM在比对的时候，执行的是同级对比。是不会发生跨级比对的。
// 2.如果比较的两个节点类型相同，就看看这个节点具体是什么类型。
// 2.1如果是文本类型就比较两个文本节点的内容是否相同，如果相同则不做处理，如果不同则修改旧的文本节点的内容。
// 2.2如果是元素节点，就比较元素节点的属性，看看新节点属性的值和旧节点属性的值是否相同，如果相同不做处理，如果不同就使用新节点属性值替换旧节点属性值.
// 2.2再看看新节点中有没有删除某些旧节点拥有的属性值，如果有则删除对应的属性
```

## 第二种情况：比对的节点类型不同的情况

```js
// 1.当比较的两个节点类型不相同的情况下，只需要使用新的virtualDOM对象去生成新的DOM对象，然后使用新的DOM对象去替换旧的DOM对象就行了。
```

## 第三种情况：删除节点的情况

```js
// 当旧节点的子节点数量多余，新节点的子节点的数量。就说明有节点要被删除。 而且不给key的情况下 都是从最后的节点开始删除的！
// 如下图所示，<li>2</li>,<li>3</li>会被修改掉。<li>4</li>会被删除掉【这很反直觉】
```

![image-20220809153411823](C:\Users\22001\Desktop\tiny-react-template\src\public\删除节点的情况.png)



