# 1.JSX到底是什么

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

类组件和函数组件对应的virtualDOM的type的值都是一个函数；而通元素对应的virtualDOM的type的值是元素标签名。