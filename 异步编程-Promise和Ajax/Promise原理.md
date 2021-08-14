# 手写实现Promise





## resolve和reject



咱们来看一段Promise的代码：

```js
let p1 = new Promise((resolve, reject) => {
    resolve('成功')
    reject('失败')
})
console.log('p1', p1)

let p2 = new Promise((resolve, reject) => {
    reject('失败')
    resolve('成功')
})
console.log('p2', p2)

let p3 = new Promise((resolve, reject) => {
    throw('报错')
})
console.log('p3', p3)
```



![截屏2021-08-01 上午11.53.33.png](https://raw.githubusercontent.com/xixixiaoyu/cloundImg/main/img/20210814171004.webp)





这里暴露出了四个知识点：

1、执行了`resolve`，Promise状态会变成`fulfilled`

2、执行了`reject`，Promise状态会变成`rejected`

3、Promise只以`第一次为准`，第一次成功就`永久`为`fulfilled`，第一次失败就永远状态为`rejected`

4、Promise中有`throw`的话，就相当于执行了`reject`

那么咱们就把这四个知识点一步步实现吧！！！



### 1、实现resolve与reject

> 大家要注意：Promise的初始状态是`pending`
>
> 这里很重要的一步是`resolve和reject的绑定this`，为什么要绑定`this`呢？这是为了resolve和reject的`this指向`永远指向当前的`MyPromise实例`，防止随着函数执行环境的改变而改变



```js
class MyPromise {
    // 构造方法
    constructor(executor) {

        // 初始化值
        this.initValue()
        // 初始化this指向
        this.initBind()
        // 执行传进来的函数
        executor(this.resolve, this.reject)
    }

    initBind() {
        // 初始化this
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
    }

    initValue() {
        // 初始化值
        this.PromiseResult = null // 终值
        this.PromiseState = 'pending' // 状态
    }

    resolve(value) {
        // 如果执行resolve，状态变为fulfilled
        this.PromiseState = 'fulfilled'
        // 终值为传进来的值
        this.PromiseResult = value
    }

    reject(reason) {
        // 如果执行reject，状态变为rejected
        this.PromiseState = 'rejected'
        // 终值为传进来的reason
        this.PromiseResult = reason
    }
}
```

咱们来测试一下代码吧：

```js
const test1 = new MyPromise((resolve, reject) => {
    resolve('成功')
})
console.log(test1) // MyPromise { PromiseState: 'fulfilled', PromiseResult: '成功' }

const test2 = new MyPromise((resolve, reject) => {
    reject('失败')
})
console.log(test2) // MyPromise { PromiseState: 'rejected', PromiseResult: '失败' }
```

