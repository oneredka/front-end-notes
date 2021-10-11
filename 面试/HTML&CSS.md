### 1. 如果理解 HTML 语义化



思考下面两段代码谁更有语义

![image-20201230212835167](https://raw.githubusercontent.com/xixixiaoyu/cloundImg/main/img/20211008115129.png)



![image-20201230212925992](https://raw.githubusercontent.com/xixixiaoyu/cloundImg/main/img/20211008115208.png)



- 增加代码`可读性`
- 让搜索引擎更容易读懂（`SEO`）





### 2. 块状元素&内联元素？

**块级元素**：`display`:`block`/`table` 的有 `div` `h1-h6` `table` `ulolli` `p `等

**内联元素**：`display`:`inline`/`inline-block` 的有 `span` `img` `input` `button` `strong`等





### 3.知道的网页制作会用到的图片格式有哪些？

- png，jp(e)g，gif，svg。
- 但是上面的那些都不是面试官想要的最后答案。面试官希望听到是 Webp。



### 4. 盒模型宽度计算

- `offsetWidth` = (内容宽度+内边距+边框)，`无`外边距

下面举例计算其 offsetWidth ：

```css
div{
	with:100px;
	padding:10px
	border 1px solid #ccc;
	margin: 10px;
}
```

其offsetWidth 为122px

注意:如果让offsetWidth等于100px如何做

```css
div{
    box-sizing:border-box;
    with:100px;
    padding:10px
    border 1px solid #ccc;
    margin: 10px;
}
```





###  5.如何简单实现一个三角形

- 首先我们需要把宽度为0
- 其次我们就可以设置边框
- 最后只要将其三块边框设置为透明色就可以达到想要的效果

```css
#triangle{
    width: 0;
    border: 30px solid transparent;
    border-bottom-color: tomato;
}
```





### 6.如何实现一个扇形

实现扇形跟上个实现三角形是一样的，无非多加了边框圆角，其次把不需要的设置为透明色

```css
#sector{
    width: 0;
    border-top: 100px solid red;
    border-bottom: 100px solid yellow;
    border-left: 100px solid green;
    border-right: 100px solid blue;
    border-radius: 100px;
}

<div id="sector"></div>
```

![image-20211008123549167](https://raw.githubusercontent.com/xixixiaoyu/cloundImg/main/img/20211008123556.png)







### 7.margin纵向重叠问题



```css
p{
    font-size: 16px;
    line-height: 1;
    margin-top: 10px;
    margin-bottom: 15px;
}

<p>aaa</p>
<p></p>
<p></p>
<p></p>
<p>bbb</p>
```

按道理来讲：aaa到bbb之间15px + (10px + 15px )*3+10px = 100px

但事实上aaa到bbb之间的距离为：15px

![image-20211008123851111](https://raw.githubusercontent.com/xixixiaoyu/cloundImg/main/img/20211008123852.png)





### 8.对margin的top left right bottom设置为负值，有何效果？

聊这这个问题我们需要知道

- margin-top left是平移元素自身
- margin-right bottom 平移其他元素

效果:

- margin-top和margin-left负值，元素向上、向左移动
- margin-right负值，右侧元素左移，自身不受影响
- margin-bottom负值，下方元素上移，自身不受影响



### 9. 什么是BFC？如何应用？

- 块格式化上下文（block formatting context）
- 一块独立渲染区域，内部元素的渲染不会影响边界以为的元素。



那么形成**BFC的常见条件**：

- float属性不为none
- position的值不是static或者relative;
- overflow不为visible
- display为inline-block, table-cell,table-caption,flex,inline-flex



开启BFC特点作用

1. 开启BFC的元素不会被浮动元素覆盖
2. 开启BFC的元素父子外边距不会合并
3. 开启BFC的元素可以包含浮动的子元素（解决浮动高度塌陷）







### 11.float布局

1. 并排一行
2. 破坏文档流
3. 包裹块状化



#### 手写clearfix(清除浮动)

```css
.clearfix::after{
	content:"";
	display:block;
	clear:both;
}
```



### 12. flex布局实现三个点的色子



聊这个问题之前必须得对flex有一个基本认识

思路：

1. 首先画出三个点和最大的盒子
2. 使用flex布局，且用justify-content分配容器的空间，两端对齐space-between
3. 那么在第二个设置垂直居中
4. 第三个点设置垂直居下



```css
.box{
    width: 200px;
    height: 200px;
    border: 2px solid #ccc;
    border-radius: 10px;
    padding: 20px;

    display: flex;
    justify-content: space-between;
    /* flex-direction: row-reverse;  */
}
.item{
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #666;
}
.item:nth-child(2){
    align-self: center;
}
.item:nth-child(3){
    align-self: flex-end;
}


<div class="box">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
</div>
```



### 13.定位有哪些? 分别参照什么定位？

- static     `无定位`
- relative   参照`自身定位`
- absolute 参照`最近一层有定位属性的祖先元素`
- fixed      参照`视口`定位
- sticky     参照`最近有滚动`的`祖先元素`







### 14.如何使一个元素水平垂直居中



**行内元素**

![image-20201230215707304](https://raw.githubusercontent.com/xixixiaoyu/cloundImg/main/img/20211008124933.png)





**定位元素**

![image-20211008124957056](https://raw.githubusercontent.com/xixixiaoyu/cloundImg/main/img/20211008125000.png)







![image-20211008125017228](https://raw.githubusercontent.com/xixixiaoyu/cloundImg/main/img/20211008125538.png)





![image-20211008125031592](https://raw.githubusercontent.com/xixixiaoyu/cloundImg/main/img/20211008125534.png)





**Flex布局**

![image-20211008125102588](https://raw.githubusercontent.com/xixixiaoyu/cloundImg/main/img/20211008125103.png)





![image-20211008125211426](https://raw.githubusercontent.com/xixixiaoyu/cloundImg/main/img/20211008125214.png)



**单元格**

- 行内元素

![image-20211008125526961](https://raw.githubusercontent.com/xixixiaoyu/cloundImg/main/img/20211008125529.png)



- 块级元素

![image-20211008125617373](https://raw.githubusercontent.com/xixixiaoyu/cloundImg/main/img/20211008125618.png)



### 15.line-height如何继承

![image-20201230220528459](https://raw.githubusercontent.com/xixixiaoyu/cloundImg/main/img/20211008145729.png)



- 写具体数值,如30px,则继承该值(比较好理解)
- 写比例,如2/1.5 ,则继承该比例(比较好理解)
- 写百分比,如200% ,则继承计算出来的值(考点)



### 16.哪些属性能继承

文本字体相关的属性普遍具有**继承性**，如 

- color
- font-开头的
- list-开头的
- text-开头的
- line-开头的





### 17.消除图片底部间隙的方法 

- 图片块状化 - 无基线对齐：img { display: block; }
- 图片底线对齐：img { vertical-align: bottom; }
- 父级设置font-size:0;
- 行高足够小 - 基线位置上移：.box { line-height: 0; }





### 18.单行溢出隐藏

![image-20201230220719527](https://raw.githubusercontent.com/xixixiaoyu/cloundImg/main/img/20211008150048.png)





### 19.rem是什么及 px，em，rem的区别？

- px像素。绝对单位，像素px是相当于于显示器屏幕分辨率而言的
- em,相对长度单位，相对于父元素，不常用
  - font-size设置em是相当于父元素的字体大小，
  - 而width和height是相对自身的字体大小

- rem,相对于根元素html的字体大小，常用于移动端布局
  - font-size、width和height始终相对于根字体大小



### 20.响应式布局常见的方案？

响应式是通过媒体查询技术使得一个网站兼容多种屏幕尺寸的设备



通过响应式实现rem布局

```css
/* 断点 320px 414px 540px 768px 992px 1200px */
html {
    font-size: 4px;
}
@media (min-width: 320px) {
    html {
        font-size: 5px;
    }
}
@media (min-width: 414px) {
    html {
        font-size: 6px;
    }
}
@media (min-width: 540px) {
    html {
        font-size: 8px;
    }
}
@media (min-width: 768px) {
    html {
        font-size: 11px;
    }
}
@media (min-width: 992px) {
    html {
        font-size: 14px;
    }
}
@media (min-width: 1200px) {
    html {
        font-size: 18px;
    }
}
```





通过js来实现rem布局

```js
{
    const docEl = document.documentElement;

    const setHtmlFontSize = () => {
        const viewWidth = docEl.clientWidth;
        // 1rem = 10px
        docEl.style.fontSize = `${viewWidth / 75}px`;
    };

    setHtmlFontSize();
    window.addEventListener('resize', setHtmlFontSize, false);
}
```



### 21.使用一个元素显示以及隐藏的方式？

- display:none;    元素不占据空间且`无法点击`  株连九族 性能消耗大 
- opacity: 0;        元素占据空间`可以点击`  株连九族  性能消耗小 
- visibility:hidden;  其占据的空间依旧会保留;无法点击   
- 通过移动元素位置比如margin 移动到屏幕外面进行隐藏
- 设置height，width等盒模型属性为0
  - 影响元素盒模型的属性设置成0   
  - 如果元素内有子元素或内容，还应该设置其`overflow:hidden`来隐藏其子元素





### 22.CSS Sprites是什么？它的优势和劣势？



CSS Sprite精灵图 把一堆小的图片整合到一张大的图片

优：

1. 很好的减少网页的请求，大大提高页面的性能;
2. 解决了网页设计师在图片命名上的困扰



劣：

1. 开发较麻烦，测量繁琐
2. 维护麻烦，背景少许改动有可能影响整张图片







### 23.描述一下 CSS 中的渐进增强，优雅降级之间的区别？

**渐进增强**（从上往下）:针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能，达到更好的用户体验。

**优雅降级**（从下往上）:一开始就构建完整的功能，然后再针对低版本的浏览器进行兼容。



### 24.介绍对浏览器内核的理解

| chrome  | Blink   |
| ------- | ------- |
| Opera   | Blink   |
| IE      | Trident |
| Safari  | webkit  |
| firefox | Gecko   |

浏览器内核分或两部分:`渲染引擎`和`JS引擎`。

`渲染染引擎`:将代码转换成页面输出到浏览器界面。

`JS引擎`:解析和执行javascript来实现网页的动态效果。

最开始渲染引擎和Js引擎并没有区分得很明确，后来Js引擎越来越独，内核就倾向于只指渲染引擎。





### 25.重绘和重排的区别

- 元素位置是相对的 一个元素位置移动可能改变其他元素位置移动 这个过程就叫重排(reflow)
- 一些属性不会影响位置变化 只影响元素外观风格 这个过程被称为重绘(repaint)

特点

- 重排要比重绘更消耗性能

- 重排必将重绘
- 重绘不一定重排



### 26.meta标签viewport的理解

- 可以布局视口宽度width等于设备独立像素device-width更好进行布局





### 27.图片img标签title与alt属性的区别

- alt标签是图片无法正常显示时对图片的描述
- title鼠标悬停在元素上时会提示文字信息。



### 28.link和@import的区别

- link写在html页面中，一般存在于 head 部分，而@import写在CSS文件中。
- link属于XHTML标签，除了加载CSS外，还能用于定义RSS, 定义rel连接属性等作用，而@import是CSS提供的，只能用于加载CSS;

- link会按照顺序加载，而@import引用的CSS会等到页面被加载完再加载;

- import是CSS2.1 提出的，只在IE5以上才能被识别，而link是XHTML标签，无兼容问题;





### 29.简述一下 src 与 href 的区别

- href标识超文本引用，用于link和a等元素应用，通过href将当前元素和引用资源之间建立联系；
- src表示引用资源替换当前元素，用在img、script、iframe，无跨越问题，`<script src="js.js"></script>`当浏览器解析时会暂停其他资源的下载,通常放在最底部。





### 30.HTML和XHTML的区别

XHTML是可以拓展的超文本标签语言，更严格的HTML语言，具有以下的特点：

1. 必须有根元素

2. 标签必须小写嵌套闭合






### 31.label标签作用

- label标签for属性与一个表单控件id值一致
- 点击label则自动聚焦到表单





### 32.transform变形

1. `translate3d(x,y,z)`位移；
2. `scale3d(x,y,z)`缩放；
3. `rotateX(180deg)`旋转；
4. `skewX(30deg)`倾斜；







### 33.CSS3 动画

- `animation-name`  动画名称，
- `animation-duration` 动画时长
- `animation-timing-function`： 规定动画的速度曲线。默认是`ease`
- `animation-delay`： 规定动画何时开始。默认是 0
- `animation-iteration-count`：规定动画被播放的次数。默认是 1
- `animation-direction`： 规定动画是否在下一周期逆向地播放。默认是`normal`
- `animation-play-state` ： 规定动画是否正在运行或暂停。默认是`running`
- `animation-fill-mode`： 规定动画是否保留在最后一帧，保留在最后一帧可以用`forwards`



### 33.CSS3过渡

- `transition-property` 参与过渡的属性
- `transition-duration`  过渡的持续时间
- `transition-delay` 设置过渡的延迟时间
- `transition-timing-function`  过渡的速率

 



### 34.transition 和 animation 有何区别?

- transition：用于做过渡效果，只需书写开始和结束状态和变化持续时间，由伪类事件被动触发，性能开销较小
- animation：用于做动画，可以定义多个元素变化过程中多个状态，主动出发，性能开销较大





### 35.nth-child和nth-of-type的区别是什么?

- “nth-child" 选择的是父元素的子元素，要同时满足两个条件时才能生效,其一是子元素，其二是子元素刚好处在那个位置
- "nth-of-type"  选择的是某父元素的子元素，而且这个子元素是指定类型。



### 36.选择器优先级 , 怎么计算?

- **!important>行内样式>id选择器>类选择器>标签选择器>通配符>继承**

权重算法：(0,0,0,0) ——> 第一个0对应的是important的个数，第二个0对应的是id选择器的个数，第三个0对应的类选择器的个数，第四个0对应的是标签选择器的个数，合起来就是当前选择器的权重。

比较：先从第一个0开始比较，如果第一个0大，那么说明这个选择器的权重高，如果第一个相同，比较第二个，依次类推。

(0,1,2,3)    >  (0,1,1,5)







### 37.CSS3中有哪些新特性

新增各种CSS选择器 （:not(.input)：所有 class 不是“input”的节点）

圆角 （border-radius:8px）

多列布局 （multi-column layout）

文本效果 阴影text-shadow，textwrap，word-break，word-wrap；

渐变 （gradient）

变换 （transform）

过渡和动画

多背景





### 38.画一条0.5px的线

- **采用transform: scale()的方式**，该方法用来定义元素的2D 缩放转换：

```css
transform: scale(0.5,0.5);
```

