# Vue原理



## 虚拟DOM和Diff算法



### 什么是虚拟DOM

- `虚拟DOM`是一个`对象`，一个用来表示`真实DOM`的对象



请看以下的`真实DOM`

```html
<ul id="list">
    <li class="item">哈哈</li>
    <li class="item">呵呵</li>
    <li class="item">嘿嘿</li>
</ul>
```



对应的`虚拟DOM`为：

```js
let oldVDOM = { // 旧虚拟DOM
    tagName: 'ul', // 标签名
    props: { // 标签属性
        id: 'list'
    },
    children: [ // 标签子节点
        {
            tagName: 'li', props: { class: 'item' }, children: ['哈哈']
        },
        {
            tagName: 'li', props: { class: 'item' }, children: ['呵呵']
        },
        {
            tagName: 'li', props: { class: 'item' }, children: ['嘿嘿']
        },
    ]
}
```



这时候，我修改一个`li标签`的文本：

```html
<ul id="list">
    <li class="item">哈哈</li>
    <li class="item">呵呵</li>
    <li class="item">林三心哈哈哈哈哈</li> // 修改
</ul>
```



这时候生成的`新虚拟DOM`为：

```js
let newVDOM = { // 新虚拟DOM
    tagName: 'ul', // 标签名
    props: { // 标签属性
        id: 'list'
    },
    children: [ // 标签子节点
        {
            tagName: 'li', props: { class: 'item' }, children: ['哈哈']
        },
        {
            tagName: 'li', props: { class: 'item' }, children: ['呵呵']
        },
        {
            tagName: 'li', props: { class: 'item' }, children: ['林三心哈哈哈哈哈']
        },
    ]
}
```



这就是咱们平常说的`新旧两个虚拟DOM`，这个时候的`新虚拟DOM`是数据的最新状态，那么我们直接拿`新虚拟DOM`去渲染成`真实DOM`的话，效率真的会比直接操作真实DOM高吗？那肯定是不会的，看下图：

![image-20210812224324976](https://raw.githubusercontent.com/xixixiaoyu/cloundImg/main/img/20210812224335.png)



由上图，一看便知，肯定是第2种方式比较快，因为第1种方式中间还夹着一个`虚拟DOM`的步骤，所以**虚拟DOM比真实DOM快**这句话其实是错的，或者说是不严谨的。

正确的说法应该是**虚拟DOM算法操作真实DOM，性能高于直接操作真实DOM**

虚拟DOM`和`虚拟DOM算法`是两种概念。`

虚拟DOM算法 = 虚拟DOM + Diff算法





### 什么是Diff算法

> 我们知道了虚拟DOM，也知道了虚拟DOM加Diff算法才能真正的提高性能



![image-20210812224719637](https://raw.githubusercontent.com/xixixiaoyu/cloundImg/main/img/20210812224722.png)

上图中，其实只有一个li标签修改了文本，其他都是不变的，所以没必要所有的节点都要更新，只更新这个li标签就行，Diff算法就是查出这个li标签的算法

总结：**Diff算法是一种对比算法**。对比两者是`旧虚拟DOM和新虚拟DOM`，对比出是哪个`虚拟节点`更改了，找出这个`虚拟节点`，并只更新这个虚拟节点所对应的`真实节点`，而不用更新其他数据没发生改变的节点，实现`精准`地更新真实DOM，进而`提高效率`。



`使用虚拟DOM算法的损耗计算`： 总损耗 = 虚拟DOM增删改（与Diff算法效率有关） +真实DOM差异增删改+（较少的节点）排版与重绘



`直接操作真实DOM的损耗计算`： 总损耗 = 真实DOM完全增删改+ 排版与重绘（可能较多的节点）



### Diff算法的原理



#### Diff同层对比

- 新旧虚拟DOM对比的时候，Diff算法比较只会在同层级进行, 不会跨层级比较。 所以Diff算法是:`广度优先算法`。 时间复杂度:`O(n)`



![截屏2021-08-08 上午11.32.47.png](https://raw.githubusercontent.com/xixixiaoyu/cloundImg/main/img/20210812225910.webp)



### Diff对比流程

- 当数据改变时，会触发`setter`，并且通过`Dep.notify`去通知所有`订阅者Watcher`，订阅者们就会调用`patch方法`，给真实DOM打补丁，更新相应的视图。

![截屏2021-08-08 上午11.49.38.png](https://raw.githubusercontent.com/xixixiaoyu/cloundImg/main/img/20210812230209.webp)

`newVnode和oldVnode`：同层的新旧虚拟节点

