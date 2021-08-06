JavaScript 是 ECMAScript 规范的一种实现，本小节重点梳理下 ECMAScript 中的常考知识点，然后就一些容易出现的题目进行解析。

## 知识点梳理



## 变量类型和计算 



### typeof 能判断哪些类型

- 识别所有值类型  **数值  字符串  布尔值 undefined  Symbol**  **bigInt** 除了**null**是Object(bug)
- 识别函数  funcition
- 识别数组对象都为Object  



### 值类型和引用类型的区别

- **基本数据**类型直接**按值存在栈中.**      基础数据类型赋值时给值 
- **引用数据**类型的**数据存在堆内存中**，但是数据**指针是存放在栈内存中**,访问引用数据时，先从栈内存中获取指针，通过指针在堆内存中找到数据     引用数据类型赋值时给地址





### 何时使用 === 何时使用 ==

![image-20201231161331627](https://i.loli.net/2020/12/31/U1s4vH8Z7apYSxB.png)





### 手写深拷贝

![image-20210704130444575](C:\Users\云牧丫\Desktop\前端学习笔记\图片资源\图片\image-20210704130444575.png)



![image-20201231161628230](https://i.loli.net/2020/12/31/KH4AomRyDeJIlaS.png)

- **注意判断是值类型和引用类型,是数组还是对象**  
- **递归**





## 作用域链和闭包

- JS查找变量先在当前作用域AO寻找，没有则往上层作用域寻找自由变量，直到全局作用域GO

- 自由变量的查找 **依据的是函数定义时的作用域链，而不是函数执行时**

  

![image-20201231164111249](https://i.loli.net/2020/12/31/CDlJskdcAuBU5j3.png)



### 闭包

**闭包**: 函数执行导致函数被定义 (一个函数中嵌套另一个函数，内部函数使用了外部函数的参数或变量，就构成了闭包（这个内部函数就叫做闭包)



#### 闭包主要有两个应用场景：

1. **函数作为返回值**
2. **函数作为参数传递**

![image-20201231164331476](https://i.loli.net/2020/12/31/HAetfnDIwGW8SVR.png)



![image-20201231164339913](https://i.loli.net/2020/12/31/LgzoUA9Bd7sMX8l.png)

#### 闭包作用

- 利用闭包缓存数据
- 模拟私有变量

![image-20201231165945893](https://i.loli.net/2020/12/31/6qburZVRSt3lAhN.png)

#### 使用闭包的注意点

- 不能滥用闭包，否则会造成网页的性能问题，严重时可能导致内存泄露(程序中不再被需要的内存, 由于某种原因, 无法被释放)。

  

### 创建10\<a>，点击弹出序号

**先来看一个案例**

![image-20201231175112542](https://i.loli.net/2020/12/31/mZLDaXG6Us9i78M.png)

[![0Przod.png](https://s1.ax1x.com/2020/09/26/0Przod.png)](https://imgchr.com/i/0Przod)

**方法一:**

```js
//使用IIFE形成闭包  保存变量
for (var i = 0; i < btn.length; i++) {
    (function (index) {
        btn[i].onclick = function () {
            console.log(index);
        };
    })(i);
}
```

[![0Ps2tA.png](https://s1.ax1x.com/2020/09/26/0Ps2tA.png)](https://imgchr.com/i/0Ps2tA)



```js
//使用let 形成块级作用域
for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        console.log(i);
    };
}
//let直接产生一个作用域 和里面的事件函数  构成闭包  i不会被回收
```



[![0PsXpq.png](https://s1.ax1x.com/2020/09/26/0PsXpq.png)](https://imgchr.com/i/0PsXpq)



**答案:**

![image-20201231175251791](https://i.loli.net/2020/12/31/aOcPnEFh2GtTjp5.png)



### this的不同应用场景，如何取值

![image-20201231163344023](https://i.loli.net/2020/12/31/Vj3Gv5xFPsOzbL1.png)

- **箭头函数**没有this指向**上层的作用域**



### 手写bind函数

![image-20201231163507521](https://i.loli.net/2020/12/31/2rSV3sFeoTuniRw.png)



## 原型和原型链



### 如何准确判断一个变量是不是数组?

1. A instanceot Array
2. Array.isArray(A)





### class的原型和本质

1. 每个class都有显式原型 prototype
2. 每个实例都有隐式原型 \__proto__
3. 实例的 \__proto___ 指向对应class的 prototype

**获取属性或者执行方法的时候先从自身属性和方法寻找,如果找不到自动去__proto__查找.**

**class是语法糖，class的类型实际上是函数**





### 手写简易jQuery考虑插件和扩展性

![image-20201231163145474](https://i.loli.net/2020/12/31/cBv7EHXqNwy8l6R.png)



![image-20201231163148201](https://i.loli.net/2020/12/31/BdkJR7xea2DGp6U.png)





## 异步和单线程

JS 需要异步的根本原因是 **JS 是单线程运行的**，即在同一时间只能做一件事，不能“一心二用”。

一个 Ajax 请求由于网络比较慢，请求需要 5 秒钟。

如果是同步，这 5 秒钟页面就卡死在这里啥也干不了了。

异步的话，就好很多了，5 秒等待就等待了，其他事情不耽误做，至于那 5 秒钟等待是网速太慢，不是因为 JS 的原因。

结论

- **异步不会阻塞代码执行**
- **同步会阻塞代码执行**



### 前端异步的场景

- 定时 `setTimeout` setInverval
- 网络请求，如 `Ajax` `图片`加载



**Ajax 代码示例**

[![DdWVBR.png](https://s3.ax1x.com/2020/11/25/DdWVBR.png)](https://imgchr.com/i/DdWVBR)

**img 代码示例**

[![DdWcEq.png](https://s3.ax1x.com/2020/11/25/DdWcEq.png)](https://imgchr.com/i/DdWcEq)

**定时器代码示例**

[![DdWq56.png](https://s3.ax1x.com/2020/11/25/DdWq56.png)](https://imgchr.com/i/DdWq56)



[![DdWvxe.png](https://s3.ax1x.com/2020/11/25/DdWvxe.png)](https://imgchr.com/i/DdWvxe)





**setTimeout 笔试题**

```js
console.log(1) //1
setTimeout(function(){
    console.log(2) //5
} ,1000) 
console.log(3) //2
setTimeout(function () {
    console.log(4) //4
},0) 
console.log(5) //3
```





## ES6/7 新标准的考查





### 题目：ES6 模块化如何使用？

ES6 中模块化语法更加简洁，如果只是输出一个**唯一的对象**，使用`export default`即可，代码如下

```js
// 创建 util1.js 文件，内容如
export default {
    a: 100
}

// 创建 index.js 文件，内容如下 
import obj from './util1.js' //obj是自己定义的名字
console.log(obj)
```

如果想要输出许多个对象，就不能用`default`了，且`import`时候要加`{...}`，代码如下

```js
// 创建 util2.js 文件，内容如
export function fn1() {
    alert('fn1')
}
export function fn2() {
    alert('fn2')
}

//或者直接export {fn1, fn2}

// 创建 index.js 文件，内容如
import { fn1, fn2 } from './util2.js'
fn1()
fn2()
```



### 题目：ES6 class 和普通构造函数的区别



**JS 构造函数的写法**

```js
function MathHandle(x, y) {
  this.x = x;
  this.y = y;
}

MathHandle.prototype.add = function () {
  return this.x + this.y;
};

var m = new MathHandle(1, 2);
console.log(m.add())
```



**用 ES6 class 的写法**

```js
class MathHandle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add() {
        return this.x + this.y;
    }
}
const m = new MathHandle(1, 2);
console.log(m.add())
```





**JS 构造函数实现继承**

```js
// 动物
function Animal() {
    this.eat = function () {
        console.log('animal eat')
    }
}
// 狗
function Dog() {
    this.bark = function () {
        console.log('dog bark')
    }
}
Dog.prototype = new Animal()
// 哈士奇
var hashiqi = new Dog()
```


**ES6 class 实现继承**

```js
class Animal {
    constructor(name) {
        this.name = name
    }
    eat() {
        console.log(`${this.name} eat`)
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
        this.name = name
    }
    say() {
        console.log(`${this.name} say`)
    }
}
const dog = new Dog('哈士奇')
dog.say()
dog.eat()
```



**注意以下两点：**

1. 使用`extends`即可实现继承，更加符合经典面向对象语言的写法，如 Java
2. 子类的`constructor`一定要执行`super()`，以调用父类的`constructor`





### 题目：ES6 中新增的数据结构有哪些？

#### Set 和 Map

Set 和 Map 都是 ES6 中新增的数据结构，是对当前 JS 数组和对象这两种重要数据结构的扩展。

- Set 类似于数组，但数组可以允许元素重复，Set 不允许元素重复
- Map 类似于对象，但普通对象的 key 必须是字符串或者数字，而 Map 的 key 可以是任何数据类型

#### Set

**Set 实例不允许元素有重复**,可以通过一个数组初始化一个 Set 实例，或者通过`add`添加元素，元素不能重复，重复的会被忽略。

```js
const set = new Set([1, 2, 3, 4, 4]);
set.add(4);
console.log(set) // Set(4) {1, 2, 3, 4}
```

**Set 实例的属性和方法有**

- `size`：获取元素数量。
- `add(value)`：添加元素，返回 Set 实例本身。
- `delete(value)`：删除元素，返回一个布尔值，表示删除是否成功。
- `has(value)`：返回一个布尔值，表示该值是否是 Set 实例的元素。
- `clear()`：清除所有元素，没有返回值。

```js
const s = new Set(); //需要使用new Set()初始化一个实例  里面接受原生可遍历的元素作为参数
s.add(1).add(2).add(2); // 添加元素

s.size // 2

s.has(1) // true
s.has(2) // true
s.has(3) // false

s.delete(2);
s.has(2) // false

s.clear();
console.log(s);  // Set(0) {}
```



**Set 实例的遍历，可使用如下方法**

```js
let set = new Set(['aaa', 'bbb', 'ccc']);

for (let item of set.keys()) {
  console.log(item);
}
// aaa
// bbb
// ccc

for (let item of set.values()) {
  console.log(item);
}
// aaa
// bbb
// ccc

for (let item of set.entries()) {
  console.log(item);
}
// ["aaa", "aaa"]
// ["bbb", "bbb"]
// ["ccc", "ccc"]

set.forEach((value, key) => console.log(key + ' : ' + value))
// aaa : aaa
// bbb : bbb
// ccc : ccc
```



#### Map

Map 的用法和普通对象基本一致，先看一下它能用非字符串或者数字作为 key 的特性。

```js
const map = new Map(); //需要使用new Map()初始化一个实例  里面接受二维数组作为参数
const obj = {p: 'Hello World'};

map.set(obj, 'OK')
map.get(obj) // "OK"

map.has(obj) // true
map.delete(obj) // true
map.has(obj) // false
```



**Map 实例的属性和方法如下：**

- `size`：获取成员的数量
- `set`：设置成员 key 和 value
- `get`：获取成员属性值
- `has`：判断成员是否存在
- `delete`：删除成员
- `clear`：清空所有

```js
const map = new Map();
map.set('aaa', 100);
map.set('bbb', 200);

map.size // 2

map.get('aaa') // 100

map.has('aaa') // true

map.delete('aaa')

map.has('aaa') // false

map.clear()
```



**Map 实例的遍历方法有：**

- `keys()`：返回键名的遍历器。
- `values()`：返回键值的遍历器。
- `entries()`：返回所有成员的遍历器。
- `forEach()`：遍历 Map 的所有成员。

```js
const map = new Map();
map.set('aaa', 100);
map.set('bbb', 200);

for (let key of map.keys()) {
  console.log(key);
}
// "aaa"
// "bbb"

for (let value of map.values()) {
  console.log(value);
}
// 100
// 200

for (let item of map.entries()) {
  console.log(item[0], item[1]);
}
// aaa 100
// bbb 200

// 或者
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
// aaa 100
// bbb 200
```



### Promise

`Promise` 可以将回调地狱的写法变成链式调用写法，流程更加清晰，代码更加优雅。

简单归纳下 Promise：**三个状态、两个过程、一个方法**，快速记忆方法：**3-2-1**

**三个状态**：`pending`、`fulfilled`、`rejected`

**两个过程：**

- pending→fulfilled（resolve）
- pending→rejected（reject）

**一个方法**：`then`

**Promise.all()**

> 所有状态都变成resolved，最终的状态才会变成resolved
>
> 只要有一个变成rejected，最终的状态就变成 rejected



**Promise.race()**

> 最终的状态取决于第一个完成的 Promise 实例对象
>
> 如果第一个完成的成功了，那最终的就成功



**Promise.allSettled()**

> 最终的状态永远都是成功的，与传入的Promise 对象状态无关
>
> 会记录下各个Promise的表现





## BOM

**BOM（浏览器对象模型）是浏览器本身的一些信息的设置和获取，例如获取浏览器的宽度、高度，设置让浏览器跳转到哪个地址。**

- `navigator`
- `screen`
- `location`
- `history`



**获取浏览器特性（即俗称的`UA`）然后识别客户端，例如判断是不是 Chrome 浏览器**

```js
var ua = navigator.userAgent
var isChrome = ua.indexOf('Chrome')
console.log(isChrome)
```



**获取屏幕的宽度和高度**

```js
console.log(screen.width)
console.log(screen.height)
```



**获取网址、协议、path、参数、hash 等**

```js
// 例如当前网址是 https://juejin.im/timeline/frontend?a=10&b=10#some
console.log(location.href)  // https://juejin.im/timeline/frontend?a=10&b=10#some
console.log(location.protocol) // https:
console.log(location.pathname) // /timeline/frontend
console.log(location.search) // ?a=10&b=10
console.log(location.hash) // #some
```


**另外，还有调用浏览器的前进、后退功能等**

```js
history.back()
history.forward()
```





## DOM



### DOM是哪种数据结构?

- 树（DOM树)



### DOM 操作的基本 API 



**获取节点**

```js
document.getElmentById()
document.getElementsByClassName() 
document.getElementsByTagName()
document.getElementsByName()
document.querySelector()
document.querySelectorAll()
```

![image-20210704170332704](C:\Users\云牧丫\Desktop\前端学习笔记\图片资源\图片\image-20210704170332704.png)



**操作元素的内容**

```js
innerHTML
innerText
```

**操作元素属性**

```
元素.合法属性 = 属性值
element.getAttribute(值)
element.setAttribute(值)
element.removeAttribute(值)
classList.add()
classList.remove()
```

**操作元素样式**

```
oBox.style.样式名 = "样式值";
```

 **节点的创建**

```
document.createElement('div'); 
document.createTextNode("如果云层是天空的一封信");
createDocumentFragment()
```

**添加节点**

```
父节点. appendChild(孤儿节点);
父节点. insertBefore(孤儿节点，标杆节点);
```

**移动节点**

```js
新父节点.appendChild(已经有父亲的节点);
新父节点. insertBefore(已经有父亲的节点，标杆子节点);
```

**删除节点**

```js
父节点. removeChild(要删除子节点);
```

克隆节点

```js
let 孤儿节点 = 老节点.cloneNode(true); //true代表深度克隆
```



### 题目：property 和 attribute 的区别是什么？

- **DOM 节点就是一个 JS 对象**，property 的获取和修改，是直接改变 JS 对象
- 而 attribute 是直接改变 HTML 的属性













### 事件

#### 事件绑定

**普通的事件绑定写法如下：**

```js
var btn = document.getElementById('btn1')
btn.addEventListener('click', function (event) {
    // event.preventDefault() // 阻止默认行为
    // event.stopPropagation() // 阻止冒泡
    console.log('clicked')
})

element.removeEventListener(event, function, useCapture)
```



#### 题目：什么是事件冒泡？

- 当一个元素触发事件的时候 会把他触发到的事件类型传递自己的父级，父级也会传递，一直到document。

```html
<body>
    <div id="div1">
        <p id="p1">激活</p>
        <p id="p2">取消</p>
        <p id="p3">取消</p>
        <p id="p4">取消</p>
    </div>
    <div id="div2">
        <p id="p5">取消</p>
        <p id="p6">取消</p>
    </div>
</body>
```





#### 题目：如何使用事件代理？有何好处？

- 利用**事件冒泡机制**，将**后代元素**事件委托给**祖先元素**

```js
let div1 = document.getElementById('parent')
div1.addEventListener('click', function (e) {
    if (e.nodeName === 'A') {
        // 点击的是 <a> 元素
        alert(e.target.innerHTML) // e.target 可以监听到触发点击事件的元素是哪一个
    }
})
```



## Ajax

### XMLHttpRequest

```js
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;

    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        console.log(xhr.responseText);
    }
};

xhr.open("GET", url, true);

xhr.send(null);
```





#### 题目：HTTP 协议中，response 的状态码，常见的有哪些？

`xhr.status`即 HTTP 状态码，有 `2xx``3xx``4xx``5xx` 这几种，比较常用的有以下几种：

- 1xx 服务器收到请求
- 2xx 请求成功
  - `200` 正常

- `3xx` 重定向
  - `301`  Moved Permanently  永久重定向。（配合location ，浏览器自动处理)
  - `302` Move Temporarily 临时重定向。临时的，不是永久的
  - `304`  Not Modified 资源未被修改
- 4xx 客户端请求错误
  - `403` 没有权限
  - `404` 找不到资源
- `5xx` 服务器端出错
  -  `504` 网关超时

看完要明白，为何上述代码中要同时满足`xhr.readyState == 4`和`xhr.status == 200`。



### http缓存

**一张图说明一切 我前面详细说过**

![image-20201231220221339](https://i.loli.net/2020/12/31/vzmKVfNgkShubMQ.png)



![image-20210704171827116](C:\Users\云牧丫\Desktop\前端学习笔记\图片资源\图片\image-20210704171827116.png)



### 常见的HTTP headers

- 常见的 Request Headers
- 常见的 Response Headers



**Request Headers**

- Accept  浏览器可接收的数据格式
- Accept-Encoding 浏览器可接收的压缩算法，如gzip
- Accept-Languange 浏览器可接收的语言，如zh-CN
- Connection: keep-alive 一次TCP连接重复使用
- Host 请求域名
- Cookie
- User-Agent(简称UA）浏览器信息
- Content-type发送数据的格式，如application/json

**Response Headers**

- Content-type 返回数据的格式，如application/json

- Content-length 返回数据的大小，多少字节

- Content-Encoding 返回数据的压缩算法，如gzip

- Set-Cookie  服务端修改Cookie

- **缓存相关的headers**

  - Cache-Control Expires

  - Expires

  - If-Modified-Since

  - If-None-Match

  - Last-Modified

  - Etag

    

  - 

    Last-Modified

    Etag





### Fetch API

目前已经有一个获取 HTTP 请求更加方便的 API：`Fetch`，

通过`Fetch`提供的`fetch()`这个全局函数方法可以很简单地发起异步请求，并且支持`Promise`的回调。

但是 Fetch API 是比较新的 API，具体使用的时候还需要查查 [caniuse](https://link.juejin.im/?target=https%3A%2F%2Fcaniuse.com%2F)，看下其浏览器兼容情况。

**看一个简单的例子：**

```js
fetch('some/api/data.json', {
    method:'POST', //请求类型 GET、POST
    headers:{}, // 请求的头信息，形式为 Headers 对象或 ByteString
    body:{}, //请求发送的数据 blob、BufferSource、FormData、URLSearchParams（get 或head 方法中不能包含 body）
    mode:'', //请求的模式，是否跨域等，如 cors、 no-cors 或 same-origin
    credentials:'', //cookie 的跨域策略，如 omit、same-origin 或 include
    cache:'', //请求的 cache 模式: default、no-store、reload、no-cache、 force-cache 或 only-if-cached
}).then(function(response) { ... });
```

:::details

`Fetch` 支持`headers`定义，通过`headers`自定义可以方便地实现多种请求方法（ PUT、GET、POST 等）、请求头（包括跨域）和`cache`策略等；除此之外还支持 response（返回数据）多种类型，比如支持二进制文件、字符串和`formData`等。

:::



### 跨域

#### 题目：如何实现跨域？

浏览器中有 **同源策略** ，即一个域下的页面中，无法通过 Ajax 获取到其他域的接口。

例如有一个接口`http://m.juejin.com/course/ajaxcourserecom?cid=459`，你自己的一个页面`http://www.yourname.com/page1.html`中的 Ajax 无法获取这个接口。

这正是命中了“同源策略”。如果浏览器哪些地方忽略了同源策略，那就是浏览器的安全漏洞，需要紧急修复。



**url 哪些地方不同算作跨域？**

- 协议
- 域名
- 端口

:::tip

但是 HTML 中几个标签能逃避过同源策略

`<script src="xxx">`、`<img src="xxxx"/>`、`<link href="xxxx">`，这三个标签的`src/href`可以加载其他域的资源，不受同源策略限制。

因此，这使得这三个标签可以做一些特殊的事情。

- `<script>`和`<link>`可以使用 CDN，CDN 基本都是其他域的链接。
- 另外`<script>`还可以实现 JSONP，能获取其他域接口的信息，接下来马上讲解。

:::



:::warning

但是请注意，所有的跨域请求方式，最终都需要信息提供方来做出相应的支持和改动，也就是要经过信息提供方的同意才行，否则接收方是无法得到它们的信息的，浏览器是不允许的

:::



##### 解决跨域 一 (CORS跨域资源共享) 服务器端设置 http header

这是需要在服务器端设置的，作为前端工程师我们不用详细掌握，但是要知道有这么个解决方案。

而且，现在推崇的跨域解决方案是这一种，比 JSONP 简单许多。

```js
response.setHeader("Access-Control-Allow-Origin", "http://m.juejin.com/");  // 第二个参数填写允许跨域的域名称，不建议直接写 "*" 
response.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
response.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

// 接收跨域的cookie
response.setHeader("Access-Control-Allow-Credentials", "true");
```



##### 解决跨域 二  JSONP

首先，有一个概念你要明白，例如访问

`http://coding.m.juejin.com/classindex.html`的时候，服务器端就一定有一个`classindex.html`文件吗？—— 不一定，服务器可以拿到这个请求，动态生成一个文件，然后返回。 同理

\<script src="http://coding.m.juejin.com/api.js">也不一定加载一个服务器端的静态文件，服务器也可以动态生成文件并返回。OK，接下来正式开始。

例如我们的网站和掘金网，肯定不是一个域。

我们需要掘金网提供一个接口，供我们来获取。首先，我们在自己的页面这样定义

```html
<script>
window.callback = function (data) {
    // 这是我们跨域得到信息
    console.log(data)
}
</script>
```

然后掘金网给我提供了一个`http://coding.m.juejin.com/api.js`，内容如下（之前说过，服务器可动态生成内容）

```js
callback({x:100, y:200})
```

最后我们在页面中加入

\<script src="http://coding.m.juejin.com/api.js">\</script>，那么这个js加载之后，就会执行内容，我们就得到内容了。

## 存储

cookie 本身不是用来做服务器端存储的，它是设计用来在服务器和客户端进行信息传递的，因此我们的每个 HTTP 请求都带着 cookie。

（计算机领域有很多这种“狗拿耗子”的例子，例如 CSS 中的 float）

但是 cookie 也具备浏览器端存储的能力（例如记住用户名和密码），因此就被开发者用上了。



使用起来也非常简单，`document.cookie = ....`即可。

但是 cookie 有它致命的缺点：

- 存储量太小，只有 4KB
- 所有 HTTP 请求都带着，会影响获取资源的效率
- API 简单，需要封装才能用



### locationStorage 和 sessionStorage

后来，HTML5 标准就带来了`sessionStorage`和`localStorage`

先拿`localStorage`来说，它是专门为了浏览器端缓存而设计的。其优点有

- 存储量增大到 5MB
- 不会带到 HTTP 请求中
- API 适用于数据存储 `localStorage.setItem(key, value)``localStorage.getItem(key)`

`sessionStorage`的区别就在于它是根据 session 过去时间而实现，而`localStorage`会永久有效，应用场景不同。

例如，一些**需要及时失效的重要信息放在`sessionStorage`中**，一些不重要但是不经常设置的信息，放在`localStorage`中。

:::tip

针对`localStorage.setItem`，使用时尽量加入到`try-catch`中，某些浏览器是禁用这个 API 的，要注意。

:::

