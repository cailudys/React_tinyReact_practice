# 1.JSX到底是什么

> jsx语法让我们可用向写html那样，去写React元素。JSX代码运行时会被babel编译，返回值就是一个JavaScript对象（也就是我们说的virtualDOM）

# 2.真实DOM操作存在的问题

# 3.实现TinyReact.createElement方法

> 方法的作用是创建virtualDOM对象；
>
> 在创建virtualDOM对象的过程中我们要把JSX中的文本字符串，转化为对象类型；
>
> 然后还要刨除JSX中的 null false true 这三个值。 （map方法 => reduce方法）
>
>  最后还要在props对象下面添加children属性。 

# 4.实现TinyReact.render方法

> 方法的作用是把 virtualDOM对象转化为真实的DOM对象，并将真实DOM对象展示在页面当中。

### 实现步骤：

1.把虚拟dom转化为真实dom=》2.在真实dom上添加对应的属性

# 5.类组件和函数组件对应的virtualDOM和普通元素对应的virtualDOM的区别

```js
// 组件的Virtual DOM
{
    type: f function(){}
    props:{}
    children:[]
}
```

类组件和函数组件对应的virtualDOM的type的值都是一个函数；而通元素对应的virtualDOM的type的值是元素标签名。

另一个角度来看，元素对应的virtualDOM是直接可用的；而组件对应的virtualDOM不能直接使用，没有直接体现出内部结构。

> JSX代码在运行时才会被babel转化为virtualDOM,所以函数组件需要被运行才能拿到virtualDOM。



昨天让龚老师帮忙部署了一下移动端代码，但因为封网的原因手机上登陆不上去。

然后昨天我在看上周柏老师和我们说的接下来要做的一个需求。

在熟悉需求里面要用到的可视化ui组件库。