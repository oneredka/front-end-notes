## Vue的基本使用

- 插值、表达式
- 指令、动态属性
- v-html :会有XSS风险，会覆盖子组件

```vue
<template>
    <p>文本插值 {{ name }}</p>

    <!--JS表达式   只能表达式 不能语句 返回一个值-->
    <p> {{ flag ? "Yes" : "No" }}</p>

    <p>{{ num }} -- {{ num + 1 }}</p>

    <p> {{ name.split("").reverse().join("") }} </p>

    <p :id="dynamicId">动态属性 id</p>

    <p v-html="rawHtml">
        <span>使用v-html之后将覆盖子元素{{rawHtml}}  有xss风险</span>
     </p>
</template>

<script>
    export default {
        data() {
            return {
                name: "云牧",
                flag: true,
                num:1,
                dynamicId: Math.random(),
                rawHtml: "原始html <strong>加粗字体</strong> <i>斜体</i>",
            };
        },
    };
</script>
```





### computed 和watch

- computed有缓存，data不变则不会重新计算
- watch 如何深度监听?
- watch 监听引用类型，拿不到oldVal



#### computed

```vue
<template>
    <p>num {{ num }}</p>
    <p>double1 {{ double1 }}</p>
    <input type="text" v-model="double2" />
</template>

<script>
    export default {
        data() {
            return {
                num: 20,
            };
        },

        computed: {    
            double1() {
                return this.num * 2;
            },

            double2: {
                get() {
                    return this.num * 2;
                },
                set(val) {
                    return (this.num = val / 2);
                },
            },
        },
    };
</script>
```





#### watch

```vue
<template>
    <p>{{ name }}</p>
    <p>{{ info.city }}</p>
    <button @click="handleClick">改变名字</button>
</template>

<script>
    export default {
        data() {
            return {
                name: "云牧",
                info: {
                    city: "长沙",
                },
            };
        },
        watch: {
            name(newValue, oldValue) {
                console.log(newValue, oldValue); // 值类型 正常拿到值
            },
            //对象写法监听引用数据类型 
            info: {
                handler(newVal) {
                    console.log(newVal); // 因为对象的引用关系不能拿到老值  
                },
                deep: true, // 深度监听
            },
        },
        
        methods: {
            handleClick() {
                this.info.city = "北京";
            },
        },
    };
</script>

```



### class和style

- 使用动态属性
- 使用驼峰式写法

```Vue
<template>
    <p :class="classString">使用class字符串</p>
    <p :class="classObject">使用class对象</p>
    <p :class="classArray">使用class数组</p>

    <p :style="styleString">使用Style字符串</p>
    <p :style="styleObject">使用Style对象</p>
</template>

<script>
    export default {
        data() {
            return {
                classString: "blue",
                classObject: { blue: false, purple: true },
                classArray: ["blue", "green", { purple: true }], //数组里面也可以写对象表示法

                styleString: "color:green; font-size:30px;",
                styleObject: {
                    color: "skyblue",
                    fontSize: "50px", //驼峰写法
                    backgroundColor: "#ccc", //驼峰写法
                },
            };
        },
    };
</script>

<style>
    .blue {
        color: blue;
    }

    .green {
        color: green;
    }

    .purple {
        color: purple;
    }
</style>
```





### 条件渲染

- v-if v-else的用法，可使用变量，也可以使用===表达式
- v-if 和v-show的区别?
- v-if 和v-show的使用场景?

```vue
<template>

<p v-if="type === 'a'">A</p>  
<p v-else-if="type === 'b'">B</p>
<p v-else>C</p>

<p v-show="type === 'a'">show A</p>
<p v-show="type === 'b'">show B</p>

<!--v-if和v-show都可以决定一个是否展示页面之上-->

<!-- v-if当条件为false时，压根不会有对应的元素在DOM中。 -->
<!-- v-show当条件为false时，仅仅是将元素的display属性设置为none而已。-->

<!-- 当需要在显示与隐藏之间切换很频繁时，使用v-show -->
<!-- 当只有一次切换时，通过使用v-if -->
</template>

<script>
    export default {
        data() {
            return {
                type: "b",
            };
        },
    };
</script>
```



### 循环（列表)渲染

- 如何遍历对象?——也可以用v-for
- key的重要性。key不能乱写（如random或者index)
- v-for和v-if 不能一起使用!

```vue
<template>
    <h2>遍历数组</h2>
    <ul>
        <li v-for="(item, index) in listArr" :key="item.id">
            {{ item }} -- {{ index }} --- {{ item.id }} --- {{ item.content }}
        </li>
        </ul>

    <!-- 注意  v-if v-for不能同时使用  v-for 比 v-if 具有更高的优先级 -->
    <h2>遍历对象</h2>
    <!-- 模板占位符 -->
    <template v-if="flag">
        <p v-for="(val, key, index) in listObj" :key="key">
            {{ val }} --- {{ key }} --- {{ index }}
        </p>
    </template>
</template>

<script>
    export default {
        data() {
            return {
                listArr: [
                    { id: "a", content: "内容1" },
                    { id: "b", content: "内容2" },
                    { id: "c", content: "内容3" },
                ],
                listObj: {
                    a: { content: "内容1" },
                    b: { content: "内容2" },
                    c: { content: "内容3" },
                },
                flag: true,
            };
        },
    };
</script>

```







### 事件

- event参数，自定义参数
- 事件修饰符，按键修饰符
- 【观察】事件被绑定到哪里?



![image-20210124142247029](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210124142247029.png)





**按键修饰符**

![image-20210124142516123](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210124142516123.png)



```vue
<template>
    <p>{{ num }}</p>
    <button v-on:click="increment1">+1</button>
    <button v-on:click="increment2(6, $event)">+6</button>


    <h2>事件修饰符</h2>
    <!-- once 事件只触发一次 -->
    <!-- scroll.passive 提升滚动事件的性能 -->
    <div @click.self="handleDivClick">
        我是div里的内容
        <button @click="handleBtnClick">按钮</button>
        <!--<button @scroll.passive="handleBtnClick">按钮</button>-->
        </div>

    <h2>按键修饰符</h2>
    <!-- enter, tab, delete, esc, ctrl, space, alt, up, down, left, right -->
    <input type="text" @keydown="handleKeyDown" />

    <h2>鼠标和精确修饰符</h2>
    <!--鼠标: left, right, middle -->
    <!--精确: exact -->
    <div @click.ctrl.exact="handleClick">鼠标修饰符</div>
</template>

<script>
    export default {
        data() {
            return {
                num: 0,
            };
        },
        methods: {
            increment1(event) {
                console.log(event);
                console.log(event.__proto__.constructor); //Js原生的event对象
                console.log(event.target === event.currentTarget); // 事件被挂载到当前元素

                this.num++;
            },

            increment2(val, event) {
                console.log(event);
                this.num += val;
            },

            handleBtnClick() {
                console.log("btn clicked");
            },

      handleDivClick() {
          console.log("div clicked");
      },

      handleKeyDown() {
          console.log("handleKeyDown");
      },

      handleClick() {
          console.log("click");
      },
  },
};
</script>
```

![image-20210309162705205](https://i.loli.net/2021/03/09/8zWDyJXTxYcLuds.png)







![image-20210309162730872](https://i.loli.net/2021/03/09/ERr3imwa1IbdLXf.png)

### 表单

- v-model
- 常见表单项textarea checkbox radio select
- 修饰符lazy number trim

```vue
<template>
    <h2>输入框和修饰符{{ name }} --- {{ typeof age }}</h2> 
    <input type="text" v-model="name" />
    <input type="text" v-model.trim="name" />
    <input type="text" v-model.lazy="name" />
    <input type="text" v-model.number="age" />

    <h2>多行文本 {{ desc }}</h2>
    <textarea v-model="desc" ></textarea>
    <textarea v-model="desc" />
    <!--<textarea>{{desc}}</textarea> 不允许这种写法-->

    <h2>复选框 {{ checked1 }} --- {{checked2}}</h2>
    <input type="checkbox" v-model="checked1" />
    <input type="checkbox" v-model="checked2" true-value="hello" false-value="word"/>

    <h2>多个复选框 {{ checkedNames }}</h2>
    <!-- 选中谁 谁的value就会放在数组之中 -->
    <input type="checkbox" id="mu" value="云牧" v-model="checkedNames" />
    <label for="mu">云牧</label>
    <input type="checkbox" id="yan" value="夕颜" v-model="checkedNames" />
    <label for="yan">夕颜</label>
    <input type="checkbox" id="lan" value="蓝天" v-model="checkedNames" />
    <label for="lan">蓝天</label>

    <h2>单选 {{ gender }}</h2>
    <input type="radio" id="male" value="male" v-model="gender" />
    <label for="male">男</label>
    <input type="radio" id="female" value="female" v-model="gender" />
    <label for="female">女</label>

    <h2>下拉列表选择 {{ selected }}</h2>
    <select v-model="selected">
        <option disabled value="">请选择</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        </select>

    <h2>下拉列表选择(多选) {{ selectedList }}</h2>
    <select v-model="selectedList" multiple>
        <option disabled value="">请选择</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
    </select>

</template>

<script>
    export default {
        data() {
            return {
                name: "云牧",
                age: 18,
                desc: "自我介绍",

                checked1: true,
                checked2: "hello",
                checkedNames: [],

                gender: "female",

                selected: "",
                selectedList: [],

            };
        },
    };
</script>
```



## Vue组件使用

- props 和$emit
- 组件间通讯–自定义事件
- 组件生命周期



### todolist



#### index.Vue

```vue
<template>
    <Input @add="handleAdd" />
    <List :list="list" @delete="handleDelete" />
</template>



<script>
    import Input from "./Input";
    import List from "./List";
    export default {
        components: {
            Input,
            List,
        },
        data() {
            return {
                list: [
                    { id: "id-1", content: "内容1" },
                    { id: "id-2", content: "内容2" },
                ],

                isShow: false,
            };
        },

        methods: {
            //更新list列表内容
            handleAdd(content) {
                this.list.push({ id: `id-${Date.now()}`, content });
            },
			
            //过滤删除 如果点击删除的元素在当前list和传递过来的元素id比较  相等的删除
            handleDelete(id) {
                this.list = this.list.filter((item) => item.id !== id);
            },
        },

        created() {
            console.log("index created");
        },

        mounted() {
            console.log("index mounted");
        },

        beforeUpdate() {
            console.log("index beforeUpdate");
        },

        updated() {
            console.log("index updated");
        },

        beforeDestroy() {
            console.log("index beforeDestroy");
        },

        destroyed() {
            console.log("index destroyed");
        },
    };
</script>
```



#### Input.vue

```vue
<template>
    <input type="text" v-model="content" />
    <button @click="addContent">add</button>
</template>

<script>
    import event from "./event";

    export default {
        data() {
            return {
                content: "",
            };
        },

        methods: {
            addContent() {
                //触发父组件index的add事件  将content传递过去
                this.$emit("add", this.content);
				
                //触发自定义事件  
                event.$emit("MyFun", this.content);
				
                //表单清空
                this.content = "";
            },
        },
    };
</script>
```





#### List.vue

```vue
<template>
	<ul>
        <li v-for="item in list" :key="item.id">
            {{ item.content }}
            <button @click="deleteItem(item.id)">删除</button>
        </li>
    </ul>
</template>

<script>
    import event from "./event";

    export default {
        //props:["list"],
        props: {
            list: {
                type: Array,
                default() {
                    return [];
                },
            },
        },
        methods: {
            //触发父组件Index的delete事件并且携带从Input组件传递的id
            deleteItem(id) {
                this.$emit("delete", id);
            },

            //演示自定义
            handleContent(content) {
                console.log("内容:", content);
            },
        },

        created() {
            console.log("list created");
        },

        mounted() {
            //页面挂载触发
            event.$on("MyFun", this.handleContent);

            //event.$on("MyFun", (content) => {
            //  console.log("内容:", content);
            //});

            console.log("list mounted");
        },

        beforeUpdate() {
            console.log("list beforeUpdate");
        },

        updated() {
            console.log("list updated");
        },

        beforeDestroy() {
            //及时解绑 释放内存
            event.$off("MyFun", this.handleContent);

            console.log("list beforeDestroy");
        },

        destroyed() {
            console.log("list destroyed");
        },
    };
</script>
```



#### event.js

```js
import Vue from "vue";

export default new Vue();
```





### 生命周期(单个/多个组件）



![image-20210308233733620](https://i.loli.net/2021/03/08/tF1GJznWdmHvxyR.png)





![img](https://upload-images.jianshu.io/upload_images/3698455-f5ef85fda6c584e1.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)





## Vue高级特性



### 自定义v-model



#### 父组件

```vue
<template>
    <p>{{ name }}</p>
    <CustomVMdodel v-model="name" />-->
</template>

<script>
    export default {
        name: "云牧",
    };
</script>
```



#### 子组件

```vue
<template>
	<input :value="text1" @input="$emit('change1', $event.target.value)" />
</template>


<script>
    export default {
        model: {
            prop: "text1", //对应props的text
            event: "change1",
        },
        props: {
            text1: {
                type: String,
                default() {
                    return "";
                },
            },
        },
    };
</script>
```



#### 



### $nextTick

- Vue是异步渲染

-  data改变之后，DOM不会立刻渲染
- $nextTick会在DOM渲染之后被触发，以获取最新DOM节点

```vue
<template>
    <ul ref="ul_list">
        <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
    <button @click="addItem">添加一项</button>
</template>

<script>
    export default {
        data() {
            return {
                list: ["a", "b", "c"],
            };
        },
        methods: {
            addItem() {
                this.list.push(Math.random());
                this.list.push(Math.random());
                this.list.push(Math.random());

                //1.异步渲染  $nextTick 待DOM渲染完再回调
                //2.页面渲染 会将data的修改做整合  多次data修改只会渲染一次  调用一次$nextTick
                //this.$nextTick(() => {
                //  //获取DOM元素
                //  const ulItem = this.$refs.ul_list;

                //  console.log(ulItem.childNodes.length);
                //});
            },
        },

        updated() {
            const ulItem = this.$refs.ul_list;

            console.log(ulItem.childNodes.length);
        },
    };
</script>
```



### slot

-  基本使用
- 作用域插槽
- 具名插槽



#### 父组件

```vue
<template>	
	<!--slot -->
    <SlotDemo :url="webSite.url">
      {{ webSite.title }}
	</SlotDemo>
		
</template>	


<script>
    export default {
        data(){
            return {
                webSite: {
                    url: "https://space.bilibili.com/145679856",
                    title: "云牧的B站首页",
                },
            }
        }
    };
</script>
```





#### 子组件SlotDemo

```vue
<template>
    <a :href="url">
        <slot> 父组件没有插入内容 默认显示这里的内容 </slot>
    </a>
</template>

<script>
    export default {
        props: ["url"],
    };
</script>
```





#### 父组件

```vue
<template>
    <!-- ScopeSlotDemo -->
    <ScopeSlotDemo :url="webSite.url">
        <template v-slot="slotProps">
            {{ slotProps.slotData.title }}
    	</template>
    </ScopeSlotDemo>
</template>
```





#### 子组件ScopeSlotDemo

```vue
<template>
    <a :href="webSite.url">
        <slot :slotData="webSite">
             父组件没有插入内容 默认显示这里的内容
    	</slot>
    </a>
</template>


<script>
    export default {
        data() {
            return {
                webSite: {
                    url: "http://yun.y2y7.com/",
                    title: "云牧的个人博客1",
                },
            };
        },
    };
</script>
```



#### slot-具名插槽



![image-20210309000755245](https://i.loli.net/2021/03/09/SJ4Q3f7B2xZpzMI.png)





### 动态组件

-  :is= "component-name”用法
- 需要根据数据，动态渲染的场景。即组件类型不确定。

- 例如下图 页面组件不是固定类型的

![image-20210309001750196](https://i.loli.net/2021/03/09/4zNfKgZqnJvoHtk.png)

```vue
<template>
    <div v-for="(val, key) in newsData" :key="key">
        <component :is="val.type" />
     </div>
</template>


<script>
    export default {
        data() {
            return {
                newsData: {
                    1: {
                        type: "text",
                    },
                    2: {
                        type: "text",
                    },
                    3: {
                        type: "img",
                    },
                    4: {
                        type: "audio",
                    },
                },

            };
        },
    };
</script>
```



```js
// 动态组件 : 根据数据的变化  结合component标签  来随时动态切换组件的显示
const app = Vue.createApp({
    data() {
        return {
            currentItem: "input-item",
        };
    },
    methods: {
        hanleClick() {
            if (this.currentItem === "input-item") {
                this.currentItem = "common-item";
            } else {
                this.currentItem = "input-item";
            }
        },
    },
    template: `
            <keep-alive>
            	<component :is="currentItem"/>
            </keep-alive>
            <button @click="hanleClick">切换</button>
		`,
});

app.component("input-item", {
    template: ` <input> `,
});

app.component("common-item", {
    template: ` <div>hello world</div>`,
});

const vm = app.mount("#root");
```



### 异步组件

- import()函数
- 按需加载，异步加载大组件





```vue
<template>
 	<ComponentsDemo v-if="isShow"/>
    <button @click="isShow = true">show for ComponentsDemo</button>
</template>
<script>
    export default {
        components: {
            ComponentsDemo: () => import("../ComponentsDemo/index"),
        },
        data() {
            return {
                isShow:false
             };
          },
       };
</script>
```



### keep-alive

- Vue内置缓存组件  
- 被包裹的组件频繁切换，不用重复渲染。
- Vue常见性能优化



#### 父组件

```vue
<template>
  
    <keep-alive>
      <KeepALiveStateA v-if="state === 'A'" />
      <KeepALiveStateB v-if="state === 'B'" />
      <KeepALiveStateC v-if="state === 'C'" />
    </keep-alive>

  	<button @click="changeState('A')">A</button>
    <button @click="changeState('B')">B</button>
    <button @click="changeState('C')">C</button>
</template>

<script>
    import KeepALiveStateA from "./KeepALiveStateA";
    import KeepALiveStateB from "./KeepALiveStateB";
    import KeepALiveStateC from "./KeepALiveStateC";

    export default {
        data() {
            return {
                state: "A",
            };
        },

        components: {
            KeepALiveStateA,
            KeepALiveStateB,
            KeepALiveStateC,
        },
        methods: {
            changeState(state) {
                this.state = state;
            },
        },
    };
</script>
```



#### 子组件A/B/C

```vue
<template>
<p>State A</p>
</template>

<script>
    export default {
        mounted(){
            console.log("A mounted");
        },

        destroyed(){
            console.log("A destroyed");
        }
    }
</script>
```





### mixin

- 多个组件有相同的逻辑，抽离出来
- mixin并不是完美的解决方案，会有一些问题
- Vue 3提出的Composition API旨在解决这些问题



#### Mixin.js

```js
export default {
    data() {
        return {
            city: "长沙",
        };
    },
    methods: {
        showName() {
            console.log(this.name);
        },
    },

    mounted() {
        console.log("mixin mounted", this.name);
    },
};
```



#### Mixin.vue

```vue
<template>
    <h2>{{name}} --- {{major}} --- {{city}}</h2>
    <button @click="showName">显示姓名</button>、
</template>

<script>
    import myMixin from "./mixin"

    export default {
        mixins:[myMixin], //可以添加多个 会自动合并
        data() { 
            return {
                name: "云牧",
                major: "Web 前端"
            }
        },

        mounted(){
            console.log("component mounted", this.name);
        }
    }
</script>
```



#### mixin的问题

- 变量来源不明确，不利于阅读
- 多mixin可能会造成命名冲突
- mixin和组件可能出现多对多的关系，复杂度较高



## VueCli

> Vue的脚手架

### 前置准备

- 安装Node.js 
- npm install nrm -g 
  - nrm ls
  - nrm use taobao   切换镜像源
- npm uninstall vue-cli -g    卸载老版vuecli

### 使用新版cli

- npm install @vue/cli -g 
- vue create project-name



## Vuex基本概念

- state
- mutation
- action
- getters
- module





### State单一状态树

- 将数据存储放在一个全局唯一的仓库管理  方便读取修改 

![image-20210309023857662](https://i.loli.net/2021/03/09/OtdN6Zejzaw7UWy.png)



### Getters

- 处理state里面的数据

里面参数 第一个 state 第二个 getters







### Mutation

- 状态更新的唯一途径

**mutation的定义方式**

> 参数第一个state 第二个传递过来的参数payload

![image-20210309142509333](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210309142509333.png)



**通过mutation更新**

![image-20210309142518718](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210309142518718.png)





### Action

- Action类似Mutation  但是它是用来进行异步操作的 



![image-20210309143039204](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210309143039204.png)

- context是和store对象具有相同方法和属性的对象.
- 我们可以通过context去进行commit和context.state操作



![image-20210309145019799](https://i.loli.net/2021/03/09/RKwXl69St7ULiCI.png)





![image-20210309145023543](https://i.loli.net/2021/03/09/rye7SRmwGQHq9Ip.png)





### Module

- Vuex状态都由一个store对象管理  可能会变得异常臃肿
- Module允许我们将store分割成模块 而每个模块拥有自己的state、mutation、action、getters



![image-20210309145255972](https://i.loli.net/2021/03/09/iKQEmAYTnI9ez3u.png)





### 基本流程

1.  dispatch 方法，派发给action一个叫change的方法

   ```js
    methods: {
       handleClick() {
         //dispatch 和 actions 做关联
         this.$store.dispatch('change', 'hello world');
       }
     }
   ```

   

2. action里面的change方法感知并执行

3. change方法提交给mutations 叫做 change 的数据改变

   ```js
   actions: {
       change(store, str) {
           setTimeout(() => {
               // commit 和 mutation 做关联
               store.commit('change', str)
           }, 2000)
       }
   }
   ```

4. mutation 感知到提交的change改变，执行 change 方法改变数据

```js
mutations: {
    //mutation 里面只允许写同步代码，不允许写异步代码
    change(state, payload) {
        state.name = payload;
    }
},
```





### Composition API使用Vuex

```js
state: { name: 'yunmu' },
```

```js
<script>
import { toRefs } from 'vue';
import { useStore } from 'vuex';
export default {
    setup() {
        const store = useStore();
        const { name } = toRefs(store.state);
        const handleClick = () => {
            store.dispatch('getData')
        	}
    	}
	}
</script>
```

```js
actions: {
    getData(store) {
        setTimeout(() => {
            store.commit('changeName', 'hello')
        }, 2000)
    }
}
```

```js
mutations: {
    changeName(state, payload) {
        state.name = payload;
    }
}
```



### 用于Vue组件

- dispatch
- commit
- mapState
- mapGetters
- mapActions
- mapMutations









## Vue-router使用

> 前后端分离阶段 
>
> 后端只提供API来返回数据
>
> 前端通过Ajax获取数据,并通过ajax将数据渲染到页面 
>
> 如果是单页面富应用 SPA 则前端还要进行维护路由规则. 改变URL, 页面不整体刷新





- 路由模式( hash、H5 history )
- 路由配置（动态路由、懒加载)





### **Vue-router 路由模式**



- hash模式（默认），如http://abc.com/#/user/10  我们可以通过location.hash赋值来改变href
- H5 history模式，如http://abc.com/user/20  
  - HTML5新增 五种模式改变URL而不刷新页面
    - history.pushState()      push是压栈操作
    - history.replaceState()    replace是替换操作
    - history.go()    注:history.back()等价于 history.go(-1)    history.forward() 则等价于 history.go(1)

- 后者需要server端支持，因此无特殊需求可选择前者







**使用history模式**

![image-20210309152223560](https://i.loli.net/2021/03/09/jfyFvDOtsKwlq6N.png)



### Vue-router路由配置动态路由



![image-20210309152312769](https://i.loli.net/2021/03/09/m9UNOs7BDVglEei.png)



### Vue-router路由配置懒加载

![image-20210309152402886](https://i.loli.net/2021/03/09/En1deyFMiLPX94D.png)





### **导航守卫**

- 路由跳转触发的钩子函数

#### 全局前置守卫



```js
const router = new VueRouter({ ... })


router.beforeEach((to, from, next) => {
  // ...
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
})
```





#### 路由独享的守卫

```js
const router = new VueRouter({
    routes: [
        {
            path: '/foo',
            component: Foo,
            beforeEnter: (to, from, next) => {
                // ...
            }
        }
    ]
})
```



## Vue原理

### MVVM

- 传统组件   页面渲染更新依赖于DOM
- Vue-MVVM 数据驱动视图
- React setState 数据驱动视图

![image-20210309162121554](https://i.loli.net/2021/03/09/kIHmCuLnVUEYrOi.png)





- View层
  - 视图层(DOM层)  主要作用：展示用户信息
- Model层：
  - 数据层  数据来源我们手动写死或从服务器请求的
- VueModel层
  - 视图模型层(View和Model沟通的桥梁) 
    -  一方面实现Data Binding（数据绑定） 使得Model数据的改变实时反映到View视图层
    - 另一方面它实现了DOM Listener（DOM监听） 当DOM事件触发可以监听到并改变对应的Data 从而更新视图



### Vue响应式

- 组件data的数据一旦变化，立刻触发视图的更新
- 核心API - Object.defineProperty
- Object.defineProperty 的一些缺点(Vue3.0启用Proxy （Proxy有兼容性问题且无法Polyfill）)
  - Polyfill 是一块代码，为旧浏览器提供原生不支持的新功能









#### Object.defineProperty基本用法

- 对象定义一个name属性 去监听其获取和设置

![image-20210309163105597](https://i.loli.net/2021/03/09/ACfXwMLc8tGiuYB.png)

![image-20210309163109352](https://i.loli.net/2021/03/09/28fl17kXJj5dzwq.png)







#### Object.defineProperty 实现响应式

- 监听对象，监听数组
- 复杂对象，深度监听



```js
//更新视图
function updateView() {
  console.log("视图更新");
}

function observer(target) {
  if (typeof target !== "object" || target === null) {
    // 不是对象或数组
    return target;
  }

  //重新定义各个属性 (for in 也能遍历数组)
  for (let key in target) {
    defineReative(target, key, target[key]);
  }
}

//重新定义属性 监听
function defineReative(target, key, value) {
  //核心API
  Object.defineProperty(target, key, {
    get() {
      return value;
    },
    set(newValue) {
      if (newValue !== value) {
        //  设置新值   注意: value在闭包中 再get也是会获取到最新的值
        value = newValue;

        //触发更新视图
        updateView();
      }
    },
  });
}

//准备数据
const obj = {
  name: "云牧",
  age: 18,
};

observer(obj);

obj.name = "黛玉";
obj.age = 21;
```

**深度监听**

```js
//更新视图
function updateView() {
    console.log("视图更新");
}

function observer(target) {
    if (typeof target !== "object" || target === null) {
        // 不是对象或数组
        return target;
    }

    //重新定义各个属性 (for in 也能遍历数组)
    for (let key in target) {
        defineReative(target, key, target[key]);
    }
}

function defineReative(target, key, value) {
    //深度监听
    observer(value);

    //核心API
    Object.defineProperty(target, key, {
        get() {
            return value;
        },
        set(newValue) {
            if (newValue !== value) {
                //深度监听
                observer(newValue);

                value = newValue;

                updateView();
            }
        },
    });
}

//准备数据
const obj = {
    name: "云牧",
    age: 18,
    info: {
        city: "长沙", //需要深度监听
    },
};

observer(obj);

obj.name = "黛玉";
obj.age = { num: 21 };
obj.age.num = 22;
obj.info.city = "怀化";  //深度监听

obj.x = 100;  // 新增属性  监听不到  所以有Vue.set
delete obj.name;  // 删除属性 监听不到 所以有Vue.delete
```







#### Object.defineProperty 缺点

- 深度监听，需要递归到底，一次性计算量大
- 无法监听新增属性/删除属性(Vue.set Vue.delete )
- 无法原生监听数组，需要特殊处理

**特殊处理**

```js
// 重新定义数组原型
const oldArratProperty = Array.prototype;
// 创建新对象  原型指向 oldArratProperty 再扩展新的方法不会影响原型
const arrProto = Object.create(oldArratProperty);
["push", "pop", "shift", "unshift", "splice"].forEach((methodName) => {
    arrProto[methodName] = function () {
        oldArratProperty[methodName].call(this, ...arguments);

        updateView(); //触发视图更新
    };
});


function observer(target) {
    if (typeof target !== "object" || target === null) {
        // 不是对象或数组
        return target;
    }

    if (Array.isArray(target)) {
        target.__proto__ = arrProto;
    }

    //重新定义各个属性 (for in 也能遍历数组)
    for (let key in target) {
        defineReative(target, key, target[key]);
    }
}
```





### 虚拟DOM (Virtual DOM）和diff算法

- vdom是实现 Vue 和 React 的重要基石
- diff 算法是vdom中最核心、最关键的部分
- Vue和 React 是数据驱动视图      不直接操作真实DOM   因为频繁DOM操作非常耗费性能   



#### 解决方案- vdom

- 用JS模拟DOM结构，计算出最小的变更后去操作DOM

[[![68dB1x.md.png](https://s3.ax1x.com/2021/03/09/68dB1x.md.png)](https://imgtu.com/i/68dB1x)](https://imgtu.com/i/68dB1x)



##### 通过snabbdom学习vdom

- 简洁强大的vdom库，易学易用
- Vue参考它实现的 vdom 和diff
- https://github.com/snabbdom/snabbdom





#### diff 算法

- diff 算法是vdom中最核心、最关键的部分  在日常使用能体现 （如key）

- diff 即对比，是一个广泛的概念，如linux diff命令、git diff 等

- 两个js 对象可以做diff ，两棵树也可以做diff ，如这里的vdom diff

  

![image-20210309211945490](https://i.loli.net/2021/03/09/LdQcvEoYIJZWRA5.png)





##### 树diff的时间复杂度O(n^3)

- 第一，遍历tree1；
- 第二，遍历tree2
- 第三，排序
- 1000个节点，要计算1亿次，算法不可用



##### 优化时间复杂度到O(n)

- 只比较同一层级，不跨级比较
- tag 不相同，则直接删掉重建，不再深度比较
- tag和key ，两者都相同，则认为是相同节点，不再深度比较

![image-20210309221437823](https://i.loli.net/2021/03/09/gKIjHcFCbUTtJRq.png)

![image-20210309221525507](https://i.loli.net/2021/03/09/4sVrKaeMOD7ILdN.png)

#####  diff 算法总结

- patchVnode
- addVnodes removeVnodes
- updateChildren ( key的重要性)
- vdom核心概念很重要: h、vnode、patch、diff 、key等

 

### 模板编译

- 前置知识:JS的 with 语法
- vue template complier 将模板编译为 render 函数
- 执行render函数生成 vnode



#### With语法



- 改变{}内自由变量的查找规则，当做obj属性来查找
- 如果找不到匹配的obj属性，就会报错
- with慎用，它打破了作用域规则，易读性变差

![image-20210309230137846](https://i.loli.net/2021/03/09/XIHWyaNQM9jlwgF.png)







- 模板不是html ，有指令、插值、JS表达式，能实现判断、循环
- html是标签语言，只有JS才能实现判断、循环（图灵完备)
- 因此，模板一定是转换为某种JS代码，即编译模板





- 模板编译为render 函数，执行render 函数返回vnode
- 基于vnode 再执行patch和diff（后面会讲)
- 使用webpack vue-loader ，会在开发环境下编译模板（重要)





#### vue组件中使用render代替template

![image-20210309232707839](https://i.loli.net/2021/03/09/Lme7WMUr13FDoRY.png)





### 组件渲染/更新过程



**回顾之前的知识**

- 响应式:监听data属性getter setter (包括数组)
- 模板编译∶模板到render 函数，再到vnode
- vdom : patch(elem, vnodé) 和 patch(vnode, newVnode)



#### 初次渲染过程

- 解析模板为 render 函数（或在开发环境已完成， vue-loader )
- 触发响应式，监听data属性getter setter
- 执行render 函数，生成 vnode , patch(elem, vnode)
  

**执行render 函数会触发getter**

![image-20210309234852624](https://i.loli.net/2021/03/09/Qko8uIqe21cZYPx.png)



#### 更新过程

- 修改data ，触发setter (此前在getter中已被监听)
- 重新执行render 函数，生成newVnode
- patch(vnode, newVnode)



**完成流程图**

![image-20210309235105486](https://i.loli.net/2021/03/09/fTgJr5hUp9XDmbs.png)



#### 异步渲染  

- 回顾$nextTick
- 汇总data的修改，一次性更新视图
- 减少DOM操作次数，提高性能



### 前端路由原理

**网页url 组成部分**

![image-20210309235816142](https://i.loli.net/2021/03/09/jUZLh9DtueBqEGv.png)



#### **hash的特点**

- hash变化会触发网页跳转，即浏览器的前进、后退
- hash 变化不会刷新页面，SPA必需的特点
- hash永远不会提交到server端（前端自生自灭)

- 通过window.onhashchange可以监听hash变化    hash变化可以通过location.hash赋值  手动修改  浏览器前进和后退





#### H5 history

- 用url规范的路由，但跳转时不刷新页面
- history.pushState
- window.onpopstate  监听浏览器前进和后退







## Vue真题演练

### v-show 和v-if 的区别

- v-show通过CSS display控制显示和隐藏
- v-if 组件真正的渲染和销毁，而不是显示和隐藏
- 频繁切换显示状态用v-show ，否则用v-if





### 为何在v-for 中用key

- 必须用key ，且不能是index和random
- diff 算法中通过tag和key 来判断，是否是sameNode
- 减少渲染次数，提升渲染性能





### 什么是vue的生命周期、几个阶段

- Vue实例从开始创建、初始化数据、编译模板、挂载DOM->渲染、更新->渲染、卸载等一系列过程，我们称这是Vue的生命周期
- 它可以总共分为8个阶段：创建前/后,载入前/后，更新前/后，销毁前/销毁后
- 它的生命周期中有多个事件钩子，让我们在控制整个vue实例的过程时更容易形成好的逻辑
- 第一次页面加载时会触发beforeCreate,created,beforeMount,mounted
- DOM渲染在mounted中就已经完成了



### Vue组件如何通讯(常见)

- 父子组件props和this.$emit
- 自定义事件event.$no event.$off event.$emit
- Vuex





### 描述组件渲染/更新过程



![image-20210309235105486](https://i.loli.net/2021/03/09/fTgJr5hUp9XDmbs.png)





### 双向数据绑定v-model的实现原理

- input元素的value = this.name
- 绑定input事件this.name = $event.target.value
- data 更新触发re-render





### 对MVVM的理解

![image-20210309162121554](https://i.loli.net/2021/03/09/kIHmCuLnVUEYrOi.png)





### computed和watch有什么区别

- computed更多用于计算值的场景  有缓存，data不变不会重新计算    能提高性能
- watch更多是观察的作用，监听数据变化时来执行回调进行后续操作 无缓存性  页面重新渲染时值不变化也会执行



**选择**

- 当我们要进行数值计算，而且依赖于其他数据，那么把这个数据设计为computed
- 如果你需要在某个数据变化时做一些事情，使用watch来观察这个数据变化



### 为何组件data必须是一个函数?

- vue组件中data值不能为对象，因为对象是引用类型，组件可能会被多个实例同时引用
- 会导致其中一个组件改变data属性值，其它实例也会受到影响







### ajax请求应该放在哪个生命周期

- mounted





### 如何将组件所有props传递给子组件

- $props
- <User v-bind= "$props”/>



### 如何自己实现v-model

![image-20210310002846866](https://i.loli.net/2021/03/10/LSywGxeHXcviFJK.png)





### 多个组件有相同的逻辑，如何抽离?

- mixin
- 以及mixin的一些缺点



### 何时要使用异步组件?

- 加载大组件
- 异步加载路由





### 何时需要使用keep-alive ?

- 缓存组件，不需要重复渲染
- 如多个静态 tab页的切换
- 优化性能





### 何时需要使用beforeDestory

- 解绑自定义事件event.$off
- 清除定时器
- 解绑自定义的DOM 事件，如window scroll等





### 什么是作用域插槽

![image-20210310003113768](https://i.loli.net/2021/03/10/XtAWojzn7JpaI1Z.png)





### Vuex中action和mutation有何区别

- action中处理异步，mutation不可以
- mutation做原子操作
- action可以整合多个mutation





### Vue-router常用的路由模式

- hash 默认
- H5 history(需要服务端支持)
- 两者比较





### 如何配置Vue-router异步加载

![image-20210309152402886](https://i.loli.net/2021/03/09/En1deyFMiLPX94D.png)





### 请用vnode 描述一个 DOM结构

[[![68dB1x.md.png](https://s3.ax1x.com/2021/03/09/68dB1x.md.png)





### 监听data变化的核心API是什么

- Object.defineProperty
- 以及深度监听、监听数组
- 有何缺点







### Vue如何监听数组变化

- Object.defineProperty 不能监听数组变化
- 重新定义原型，重写push pop 等方法，实现监听
- Proxy 可以原生支持监听数组变化





### 请描述响应式原理

- 监听data变化
- 组件渲染和更新的流程



### diff 算法的时间复杂度

- o(n)
- 在O(n^3)基础上做了一些调整



### 简述diff 算法过程

- patch(elem, vnode)和patch(vnode, newVnode)
- patchVnode和addVnodes和removeVnodes
- updateChildren ( key的重要性)





### Vue为何是异步渲染，$nextTick何用?

- 异步渲染（以及合并data修改)，以提高渲染性能
- $nextTick在 DOM更新完之后，触发回调



### Vue常见性能优化方式

- 合理使用v-show和v-if
- 合理使用computed
- v-for时加key ，以及避免和v-if 同时使用
- 自定义事件、DOM事件及时销毁
- 合理使用异步组件
- 合理使用keep-alive
- data层级不要太深
- 前端通用的性能优化，如图片懒加载
- 使用SSR
- webpack层面的优化
- 使用vue-loader在开发环境做模板编译（预编译)





### vue等单页面应用及其优缺点

**缺点：**

- 第一次加载首页耗时相对长一些；
- 不利于SEO的优化（如果要支持SEO，建议通过服务端来进行渲染组件）；
- 不支持低版本的浏览器，最低只支持到IE9；
- 不可以使用浏览器的导航按钮需要自行实现前进、后退。



**优点：**

- 无刷新体验,提升了用户体验
- 前端开发不再以页面为单位，更多地采用组件化的思想，代码结构和组织方式更加规范化，便于修改和调整
- API 共享，同一套后端程序代码不用修改就可以用于Web界面、手机、平板等多种客户端
  用户体验好、快，内容的改变不需要重新加载整个页面。





### v-on可以监听多个方法吗？（可以的）

> 一个元素绑定多个事件的两种写法，一个事件绑定多个函数的两种写法，修饰符的使用

```js
<a style="cursor:default" v-on='{click:DoSomething,mouseleave:MouseLeave}'>doSomething</a>
```



