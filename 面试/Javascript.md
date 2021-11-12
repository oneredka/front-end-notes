## 判断数据类型的方法

### typeof

> 优点：能够快速区分基本数据类型 缺点：不能将Object、Array和Null区分，都返回object

1. `typeof`的作用？

   区分数据类型，可以返回8种数据类型：

   `number、string、boolean、undefined、object、function` 

   新增的 `symbol` 和 `bigInt`

2. `typeof` 能正确区分数据类型吗？

   不能。

   对于原始类型，除 `null`返回 Object 其余都可以正确判断；

   对于引用类型，除 `function` 外，都会返回 `"object"`

3. `typeof` 注意事项

   - `typeof` 返回值为 `string` 格式
   - `typeof(NaN) -> "number"`
   - `typeof` 未定义的变量不会报错，返回 `"undefiend"`

### instanceof

> 优点：能够区分Array、Object和Function，适合用于判断自定义的类实例对象 缺点：Number，Boolean，String基本数据类型不能判断

1. `instanceof` 判断对象的原型链上是否存在构造函数的原型。只能判断引用类型。
2. `instanceof` 常用来判断 `A` 是否为 `B` 的实例

### Object.prototype.toString.call()

> 优点：精准判断数据类型 缺点：写法繁琐不容易记，推荐进行封装后使用

```js
toString.call(()=>{})        // [object Function]
toString.call({})           // [object Object]
toString.call([])           // [object Array]
toString.call('')           // [object String]
toString.call(22)           // [object Number]
toString.call(undefined)      // [object undefined]
toString.call(null)         // [object null]
toString.call(new Date)       // [object Date]
toString.call(Math)         // [object Math]
toString.call(window)       // [object Window]
```



## typeof为什么对null错误的显示

这只是 JS 存在的一个悠久 Bug。在 JS 的最初版本中使用的是 32 位系统，为了性能考虑使用低位存储变量的类型信息，000 开头代表是对象然而 null 表示为全零，所以将它错误的判断为 object

