# 实现TinyReact.createElement方法

> 方法的作用是创建virtualDOM对象；
>
> 在创建virtualDOM对象的过程中我们要把JSX中的文本字符串，转化为对象类型；
>
> 然后还要刨除JSX中的 null false true 这三个值。 （map方法 => reduce方法）
>
>  最后还要在props对象下面添加children属性。 