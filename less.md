

## 1.Less初识



**CSS弊端**

CSS是一门非程序式语言，没有变量、函数、SCOPE (作用域)等概念

CSS需要书写大量看似没有逻辑的代码，CSS冗余度是比较高的。

不方便维护及扩展，不利于复用。

CSS没有很好的计算能力

非前端开发工程师来讲，往往会因为缺少CSS编写经验而很难写出组织良好且易于维护的CSS代码项目。





**介绍**

Less (Leaner Style Sheets的缩写)CSS预处理器。

作为CSS的一种形式的扩展，它并没有减少CSS的功能，而是在现有的CSS语法上，为CSS加入程序式语言的特性

它在CSS的语法基础之.上，引入了变量，Mixin (混入) ,运算以及函数等功能，大大简化了CSS的编写，并且降低了CSS的维护成本，就像它的名称所说的那样，Less 可以让我们用更少的代码做更多的事情。

但是浏览器无法直接执行less代码，要执行必须向将less转换为css,然后再由浏览器执行

Less中文网址:  http://lesscss.cn/

常见的CSS预处理器: Sass、 Less、 Stylus

一句话: **Less是一门CSS预处理语言，它扩展了CSS的动态特性。**







## 2.Less安装

1. 安装nodejs,可选择最新的版本，网址: https://nodejs.org/en/download/
2. 检查是否安装成功，使用cmd命令(win10 是 `win +r` 打开运行输入cmd ) 输入"`node -v`" 查看版本
3. 基于node.js在线安装Less，使用cmd命令 "`npm install less -g`" 即可
4. 检查是否安装成功，使用cmd命令 "`lessc-v`"查看版本即可





## 3.Less的使用

我们首先新建一个后缀名为.less的文件，在这个.less 文件里面书写Less语句。



## 4.Less变量

变量是指没有固定的值，可以动态改变的。因为我们CSS中的一些颜色和数值等经常使用。

`@变量名:值;`



**变量命名规范**

- 必须有@为前缀
- 不能包含特殊字符
- 不能以数字开头
- 大小写敏感

例: @color: pink;



**变量使用规范**

直接使用

```css
body{
    color: @color;
}
a:hover {
    color: @color;
}
```





```css
@baseW:100px;
@xiaomiC:#ff6700;

/*
	使用变量时，如果是直接使用则以@变量名的形式使用即可
	可以在变量声明声明前使用变量
*/
.wrap{
    width: @baseW;
    height: @baseW;
    background-color: pink;
}
```



```css
@baseW:100px;
@baseW:300px;
@xiaomiC:#ff6700;
/*变量重名  优先使用比较近的变量*/
```



作用域

```css
@baseW:100px;
@baseW:300px;
@xiaomiC:#ff6700;
.wrap{
    @baseW:50px;//局部
    width: @baseW;
    height: @baseW;
    background-color: @xiaomiC;
}
.con{
    width: @baseW;找寻全局的变量
}
```



直接引用其他样式的值

```css
div{
    width: 100px;
    height: $width;
    color: tomato;
    background-color: $color;
}
```



一部分变量作为类名，或者一部分值使用时必须以@{变量名}的形式使用

```css
@ele:wrap;
@w : width;
@h:height;
@bgc:background-color;
@imgUrl:images;


.@{ele}{
    @{w}: @baseW;
    @{h}: @baseW;
    @{bgc}: @xiaomiC;
    background-image: url("../@{imgUrl}/1.png");
}
```



## 5.Less编译

本质上，Less 包含一套自定义的语法及一个解析器，用户根据这些语法定义自己的样式规则，这些规则最终会通过解析器，编译生成对应的CSS文件。

所以，我们需要把我们的.less文件，编译生成为 .css 文件，这样我们的html页面才能使用。

推荐方法(nodejs) :在当前文件夹，使用cmd命令 "`lessc style.less > style.css`"



VScode Less插件 `Easy LESS`

Easy Less插件用来把less文件编译为css文件

安装完毕插件，重新加载下vscode。

只要编辑保存.less文件， 会在对应的目录下自动生成.css文件。



## 6.Less嵌套

```css
.wrap{
    width: 100px;
    height: 100px;
    background-color: pink;
    
    .con{
        width: 20px;
        height: 20px;
        background-color: red;
    }
}

/*这样嵌套会被解析成*/
.wrap {
  width: 100px;
  height: 100px;
  background-color: pink;
}
.wrap .con {
  width: 20px;
  height: 20px;
  background-color: green;
}
```



如果我们想使用其他关系选择器

```css
.wrap{
    width: 100px;
    height: 100px;
    background-color: pink;
    > .son{
        width: 20px;
        height: 20px;
        background-color: green;
    }
}
/*直接在选择器前面书写*/
```



如果我们想使用伪类伪元素或者高级选择器

&表示外层的父元素

```css
.wrap{
    width: 100px;
    height: 100px;
    background-color: pink;
    &:hover{
        width: 100px;
        height: 20px;
        background-color: red;
    }
}
```



## 7.注释

```css
/* 这里注释会编译到css文件之中 */
//这是不会被编译到css文件的注释
```



## 8.运算

任何数字、颜色或者变量都可以参与运算。Less 提供了加(+)、减(-)、乘(*)、除
(/) 算术运算。

![image-20211009162659565](https://raw.githubusercontent.com/xixixiaoyu/cloundImg/main/img/20211009162711.png)



**注意**

乘号(*)和除号(/)的写法

对于两个不同的单位的值之间的运算,运算结果的值取第一个值的单位

如果两个值之间只有一个值有单位，则运算结果就取该单位

运算符中间左右有个空格隔 1px + 5rem



**扩展**

```css
.triangle{    
    	width: 0;    
    	height: 0;    
    	border: 100px solid transparent;}

.top:extend(.triangle){   border-bottom-color:tomato ;    border-top: none;}
```

## 9.混合mixin

> 将一系列的规则及引入另一个规则集
>
> 混合的定义在Less有明确的指定  使用.的形式来定义

```less
.triangle{    
    width: 0;   
    height: 0;    
    border: 100px solid transparent;  
}  
.top{ 
    //直接对指定的样式进行引用，这里就相当于样式在这里进行了复制  
    .triangle();    
    border-bottom-color:yellow ;    
    border-top: none;
}
```

```less
.center{    
    position: absolute;    
    top: 0;    
    left: 0;    
    right: 0;    
    bottom: 0;    
    margin: auto;
}

.top{    
    width: 100px;    
    height: 100px;    
    background-color: pink;    
    .center();
}/*没带参数写不写括号都一样  不写参数为普通混合  带括号为不带参数的混合*///使用类选择器时可以在选择器后边添加一个括号，这时我们实际上就创建了一个mixins
```



带参数的混合

```css
.test(@w , @h , @bgcolor) {    
    width: @w;    
    height: @h;    
    background-color: @bgcolor;
}
div {    
    //调用混合函数，按顺序传递参数    
    .test(200px, 300px, tomato);        
    //不按顺序     
    .test(@h:200px, @bgcolor:tomato, @w:300px );}
```

参数指定默认值

```css
.test(@w:100px , @h:100px , @bgcolor:pink) {    
    	width: @w;    
    	height: @h;    
    	background-color: @bgcolor;}

div { .test(200px);}
```

```less
.top-triangle(@w , @c){    
    	width: 0;    
    	height: 0;    
    	border-style: solid;    
    	border-color: transparent;    
    	border-width: @w;    
    	border-bottom-color: @c;    
    	border-top: none;
}

.top{   .top-triangle(200px , red) }
```

```css
.center(@w , @h , @b){    
    	width: @w;    
    	height: @h;    
    	background-color: @b;    
    	position: absolute;    
    	top: 0;    
    	left: 0;    
    	right: 0;    
    	bottom: 0;    
    	margin: auto;
}

.wrap{ .center(100px , 100px , pink);}
```

```css
.center(@w:100px , @h:100px , @b:transparent){/*默认值*/
    	position: absolute;    
    	top: 0;    
    	left: 0;    
    	right: 0;    
    	bottom: 0;    
    	margin: auto;    
    	width: @w;    
    	height: @h;    
    	background-color: @b;
}
.top{  .top-triangle(200px  ,solid, red); .center(100px , 100px , pink);}
```

- 当实参和形参不统一的时候


```css
.top-triangle(@w:10px , @c:#000){    width: 0;    height: 0;    border-style: solid;    border-color: transparent;    border-width: @w;    border-bottom-color: @c;    border-top: none;}.top{    .top-triangle(@c:pink)}
```



导入其他less文件

```css
@import "index.less";
```

