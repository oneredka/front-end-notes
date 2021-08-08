#  async / await

async 和 await 是一种更加优雅的异步编程解决方案，是Promise 的拓展，如果对 Promise 还不了解的话，请移步 Promise 章节进行学习。

在我们处理异步的时候，比起回调函数，Promise的then方法会显得较为简洁和清晰，但是在处理多个彼此之间相互依赖的请求的时候，就会显的有些繁琐。这时候，用async/await更加优雅。

我们知道 JavaScript 是单线程的，使用 Promise 之后可以让我们书写异步操作更加简单，而 async 是让我们写起 Promise 像同步操作。看下示例：

## 基本语法

前面添加了async的函数在执行后都会自动返回一个Promise对象:

```js
function foo() {
    return 'imooc'
}
console.log(foo()) // 'imooc'
```

相当于

```js
async function foo() {
    return 'imooc' // Promise.resolve('imooc')

    // let res =  Promise.resolve('imooc')
    // console.log(res)
}
console.log(foo()) // Promise
foo()
```

await后面需要跟异步操作，不然就没有意义，而且await后面的Promise对象不必写then，因为await的作用之一就是获取后面Promise对象成功状态传递出来的参数。

```js
function timeout() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(1)
            resolve() // resolve('success')
        }, 1000)
    })
}

// 不加async和await是2、1   加了是1、2
async function foo() {
    await timeout() // let res = await timeout() res是success
    console.log(2)
}
foo()
```

### 对于失败的处理

```js
function timeout() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('success')
            reject('error')
        }, 1000)
    })
}
async function foo() {
    return await timeout()
}
foo().then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})
```

在async函数中使用await，那么await这里的代码就会变成同步的了，意思就是说只有等await后面的Promise执行完成得到结果才会继续下去，await就是等待。

## 应用

还是前面案例中的异步操作，我们需要发送多个请求，而后面请求的发送总是需要依赖上一个请求返回的数据。对于这个问题，我们既可以用的Promise的链式调用来解决，也可以用async/await来解决，然而后者会更简洁些。

按顺序读取a.json、b.json、c.json，如果使用async/await该如何实现呢？

我们在static文件夹下放入三个json文件：

a.json:

```json
{
    "a": "我是A"
}
```

b.json:

```json
{
    "b": "我是B"
}
```

c.json:

```json
{
    "c": "我是C"
}
// 把ajax封装成模块
import ajax from './ajax'

function request(url) {
    return new Promise(resolve => {
        ajax(url, res => {
            resolve(res)
        })
    })
}
async function getData() {
    let res1 = await request('static/a.json')
    console.log(res1)
    let res2 = await request('static/b.json')
    console.log(res2)
    let res3 = await request('static/c.json')
    console.log(res3)
}
getData()
```

注意

await 只能在 async 标记的函数内部使用，单独使用会触发 Syntax error。