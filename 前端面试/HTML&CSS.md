# HTML&CSS面试

**前端初级面试框架**

![image-20210704104100705](https://raw.githubusercontent.com/xixixiaoyu/cloundImg/main/img/20210811145052.png)

## HTML



### 理解 HTML 语义化

- 让人更容易读懂(增加代码可读性)
- 让搜索引擎更容易读懂( SEO )



### 块状元素&内联元素?

- display: block/table;有div h1-h6  ul ol li p dl dt dd table等
- display: inline/inline-block;有span img strong  i b video audio input button等





### 常见浏览器内核

| **IE**      | **Trident** |
| ----------- | ----------- |
| **chrome**  | **Blink**   |
| **Opera**   | **Blink**   |
| **Safari**  | **webkit**  |
| **firefox** | **Gecko**   |

浏览器主要分成两部分：渲染引擎和JS引擎

- 渲染引擎：将代码转换成界面输出到浏览器界面
- JS引擎：解析和执行javascript来实现网页的动态效果
- 内核更倾向于只指渲染引擎



### HTML和XHTML的区别

XHTML是可以拓展的超文本标签语言，更严格的HTML语言，具有以下的特点：

1. 必须有根元素

2. 标签必须小写嵌套闭合；

   



### 简述一下 src 与 href 的区别

- href标识超文本引
- 用，用于link和a等元素应用，通过href将当前元素和引用资源之间建立联系；
- src表示引用资源替换当前元素用在img、script、iframe，无跨越问题，`<script src="js.js"></script>`当浏览器解析时会暂停其他资源的下载,通常放在最底部。




### link和@import的区别

1. link写在html页面中，只能存在于 head 部分，而@import写在CSS文件中。

2. link属于XHTML标签，除了加载CSS外，还能用于定义RSS, 定义rel连接属性等作用，而@import是CSS提供的，只能用于加载CSS;

3. link会按照顺序加载，而@import引用的CSS会等到页面被加载完再加载;

4. import是CSS2.1 提出的，只在IE5以上才能被识别，而link是XHTML标签，无兼容问题;



### meta标签viewport的理解

- 可以布局视口宽度width等于设备独立像素device-width更好进行布局



### 输入框autocomplete

- 表单输入自动完成
- 设置autocomplete为 off 可取消此功能





### 图片img标签title与alt属性的区别

- alt标签是图片无法正常显示时对图片的描述
- title鼠标悬停在元素上时会提示文字信息。





## CSS

### margin纵向重叠问题

![image-20201230213822396](https://i.loli.net/2020/12/30/l8XGNbCmfJwzuT6.png)

- 相邻元素的margin-top和margin-bottom会发生重叠
- 空白内容的\<p> \</p>也会重叠
- 答案15px





### 什么是BFC?如何应用?

**定义**

- 块格式化上下文（block formatting context）
- 一块独立渲染区域,内部元素的渲染不会影响边界以外的元素

**形成BFC的常见条件**

- overflow 不为 visible
- float 属性不为 none
- position 为 absolute 或 fixed
- display 为 inline-block ， flex， inline-flex，table-cell， table-caption



**开启BFC特点作用**

- 开启BFC的元素不会被浮动元素覆盖
- 开启BFC的元素父子外边距不会合并
- 开启BFC的元素可以包含浮动的子元素(解决浮动高度塌陷)



### float布局

1. 并排一行
2. 破坏文档流
3. 包裹块状化

```手写clearfix```

![image-20210704110158829](https://raw.githubusercontent.com/xixixiaoyu/cloundImg/main/img/20210811145114.png)



### 如何使一个元素水平垂直居中

**行内元素**

![image-20210704110224648](https://raw.githubusercontent.com/xixixiaoyu/cloundImg/main/img/20210811145123.png)





**定位元素**

![image-20201230215924997](https://i.loli.net/2020/12/30/JHfFdeoMbavPwWy.png)

、![image-20201230220008590](https://i.loli.net/2020/12/30/b6UCK5avtsqArn8.png)

![image-20201230220058274](https://i.loli.net/2020/12/30/Mzdk8GvKI3W4nQe.png)



**弹性盒模型**

![image-20201230220148491](https://i.loli.net/2020/12/30/n4zvls6SRW29wTX.png)



![image-20201230220213807](https://i.loli.net/2020/12/30/Bd2HVCGxg6sLJ8P.png)

![image-20201230220356200](https://i.loli.net/2020/12/30/rHpI2qPWBN6Ftei.png)



###  line-height如何继承

![image-20201230220528459](https://i.loli.net/2020/12/30/fheDyLPRnmKJZl8.png)

**line-height如何继承**

- 写具体数值,如30px,则继承该值(比较好理解)
- 写比例,如2/ 1.5 ,则继承该比例(比较好理解)
- 写百分比,如200% ,则继承计算出来的值(考点) 最终  **p元素的line-height:40px**



### 消除图片底部间隙的方法 

- 图片块状化 - 无基线对齐：img { display: block; }
- 父级设置font-size:0;
- 图片底线对齐：img { vertical-align: bottom; }



### 单行溢出隐藏

![image-20201230220719527](https://i.loli.net/2020/12/30/pwkV2PGzdlH45vc.png)



### label标签作用

- label标签for属性与一个表单控件id值一致'
- 点击label则自动聚焦到表单





### 响应式



#### 响应式布局的常用方案

- media-query ,根据不同的屏幕宽度设置根元素font-size
- rem ,基于根元素的相对单位

![image-20201230222317410](https://i.loli.net/2020/12/30/YyveORBZ736Pr5m.png)







### 使一个元素显示以及隐藏的方式?

**display:none**

- 结构上:元素在页面上将彻底消失，元素不占据空间且无法点击
- 继承性:父元素设置了 display:none 子元素无论怎么设置都无法显示
- 性能:会引起浏览器重绘重排，性能消耗较大



**opacity:0**

- 结构上:元素在页面上消失，元素占据空间可以点击

- 继承性:父元素设置了opacity:0  子元素无论怎么设置都无法显示

- 性能:重建图层，性能消耗小



**visibility:hidden**

- 结构上:元素在页面消失，其占据的空间依旧会保留;无法点击
- 继承性:visibility: hidden 会被子元素继承，但是子元素可以通过 设置 visibility: visible; 来取消隐藏
- 性能:只会导致浏览器重绘,性能消耗相对小



**其他方式**

1. 元素的border，padding，height和width，margin:0等影响元素盒模型的属性设置成0

   如果元素内有子元素或内容，还应该设置其overflow:hidden来隐藏其子元素

2. 设置元素的position与left，top，bottom，right等，将元素移出至屏幕外









### 选择器优先级 , 怎么计算?

- **！important>行内样式>id选择器>类选择器>标签选择器>通配符>继承**

权重算法：(0,0,0,0) ——> 第一个0对应的是important的个数，第二个0对应的是id选择器的个数，第三个0对应的类选择器的个数，第四个0对应的是标签选择器的个数，合起来就是当前选择器的权重。

比较：先从第一个0开始比较，如果第一个0大，那么说明这个选择器的权重高，如果第一个相同，比较第二个，依次类推。

(0,1,2,3)    >  (0,1,1,5)



### nth-child和nth-of-type的区别是什么?	

- "nth-child"选择的是父元素的子元素，这个子元素并没有指定确切类型，同时满足两个条件时方能有效果,其一是子元素，其二是子元素刚好处在那个位置
- "nth-of-type"选择的是某父元素的子元素，而且这个子元素是指定类型。

```html
<style>
  /* ul下的第二个li标签 */
  ul li:nth-of-type(2) {
    color: red;
  }
  /* ul的li标签且是第二个孩子所以匹配不到元素 */
  ul li:nth-child(2) {
    color: gold;
  }
</style>

<ul>
  <p>p元素</p>
  <span>span元素</span>
  <li>li元素</li>
  <li>li元素</li>
  <li>li元素</li>
</ul>
```





### 重绘和回流

**重绘和回流是面试题经常考的题目，也是性能优化当中应该注意的点**

- **重绘**：指的是当页面中的元素不脱离文档流，而简单地进行样式的变化，比如修改颜色、背景等，浏览器重新绘制样式
- **回流**：指的是处于文档流中 DOM 的尺寸大小、位置或者某些属性发生变化时，导致浏览器重新渲染部分或全部文档的情况

**回流要比重绘消耗性能开支更大**。



### 什么是 Css Hack？

- **解决各浏览器对 CSS 解释不同所采取的，区别不同浏览器制作不同CSS样式的设置就叫作 CSS Hack。**





### transform变形

1. `translate3d(x,y,z)`位移；
2. `scale3d(x,y,z)`缩放；
3. `rotateX(180deg)`旋转；
4. `skewX(30deg)`倾斜；



### CSS3 动画

- `animation-name`对应到动画名称，
- `animation-duration`是动画时长
- `animation-timing-function`：规定动画的速度曲线。默认是`ease`
- `animation-delay`：规定动画何时开始。默认是 0
- `animation-iteration-count`：规定动画被播放的次数。默认是 1
- `animation-direction`：规定动画是否在下一周期逆向地播放。默认是`normal`
- `animation-play-state` ：规定动画是否正在运行或暂停。默认是`running`
- `animation-fill-mode`：规定动画执行之前和之后如何给动画的目标应用，默认是`none`，保留在最后一帧可以用`forwards`



### transition 和 animate 有何区别?

- transition：用于做过渡效果，没有帧概念，只有开始和结束状态，由一个状态过渡到另一个状态，比如高度`100px`过渡到`200px`性能开销较小,被动触发,
- animate：用于做动画，有帧的概念，可以重复触发且有中间状态，性能开销较大,主动触发

