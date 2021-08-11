

## React基本使用



### JSX基本使用

- 变量、表达式
- class style
- 子元素和组件

```js
import React from "react";
import "./style.css";
import List from "../List";

class JSXBaseDemo extends React.Component {
  state = {
    name: "云牧",
    imgUrl: "https://space.bilibili.com/145679856",
    flag: true,
  };

  render() {
    // // 获取变量 插值
    // const pElem = <p>{this.state.name}</p>
    // return pElem

    // // 表达式
    // const exprElem = <p>{this.state.flag ? 'yes' : 'no'}</p>
    // return exprElem

    // // 子元素
    // const imgElem = <div>
    //     <p>我的头像</p>
    //     <img src="xxxx.png"/>
    //     <img src={this.state.imgUrl}/>
    // </div>
    // return imgElem

    // // class
    // const classElem = <p className="title">设置 css class</p>
    // return classElem

    // // style
    // const styleData = { fontSize: '30px',  color: 'blue' }
    // const styleElem = <p style={styleData}>设置 style</p>
    // // 内联写法，注意 {{ 和 }}
    // // const styleElem = <p style={{ fontSize: '30px',  color: 'blue' }}>设置 style</p>
    // return styleElem

    // 原生 html
    const rawHtml = "<span>文本内容<i>斜体</i><b>加粗</b></span>";
    const rawHtmlData = {
      __html: rawHtml, // 注意，必须是这种格式
    };
    const rawHtmlElem = (
      <div>
        <p dangerouslySetInnerHTML={rawHtmlData}></p>
        <p>{rawHtml}</p>
      </div>
    );
    return rawHtmlElem;

    // // 加载组件
    // const componentElem = <div>
    //     <p>JSX 中加载一个组件</p>
    //     <hr/>
    //     <List/>
    // </div>
    // return componentElem
  }
}

export default JSXBaseDemo;
```





### 条件判断

- if else
- 三元表达式
- 逻辑运算符 && ||

```js
import React from "react";
import "./style.css";

class ConditionDemo extends React.Component {
  state = {
    theme: "black",
  };

  render() {
    const blackBtn = <button className="btn-black">black btn</button>;
    const whiteBtn = <button className="btn-white">white btn</button>;

    // // if else
    // if (this.state.theme === 'black') {
    //     return blackBtn
    // } else {
    //     return whiteBtn
    // }

    // // 三元运算符
    // return <div>
    //     { this.state.theme === 'black' ? blackBtn : whiteBtn }
    // </div>

    // &&
    return <div>{this.state.theme === "black" && blackBtn}</div>;
  }
}

export default ConditionDemo;
```





### 渲染列表

```js
import React from "react";

class ListDemo extends React.Component {
  state = {
    list: [
      {
        id: "id-1",
        title: "标题1",
      },
      {
        id: "id-2",
        title: "标题2",
      },
      {
        id: "id-3",
        title: "标题3",
      },
    ],
  };

  render() {
    return (
      <ul>
        {
          /* vue v-for */
          this.state.list.map((item, index) => {
            // 这里的 key 和 Vue 的 key 类似，必填，不能是 index 或 random
            return (
              <li key={item.id}>
                index {index}; id {item.id}; title {item.title}
              </li>
            );
          })
        }
      </ul>
    );
  }
}

export default ListDemo;
```





### 事件

- bind this
- 关于event参数
- 传递自定义参数





```js
import React from "react";

class EventDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "zhangsan",
      list: [
        {
          id: "id-1",
          title: "标题1",
        },
        {
          id: "id-2",
          title: "标题2",
        },
        {
          id: "id-3",
          title: "标题3",
        },
      ],
    };

    // 修改方法的 this 指向
    this.clickHandler1 = this.clickHandler1.bind(this);
  }

  clickHandler1() {
    // console.log('this....', this) // this 默认是 undefined
    this.setState({
      name: "lisi",
    });
  }
  // 赋值加箭头函数方法，this 指向当前实例
  clickHandler2 = () => {
    this.setState({
      name: "lisi",
    });
  };

  render() {
    // // this - 使用 bind
    // return <p onClick={this.clickHandler1}>
    //     {this.state.name}
    // </p>

    // // this - 使用赋值加箭头函数的方法
    // return <p onClick={this.clickHandler2}>
    //     clickHandler2 {this.state.name}
    // </p>

    // // event
    // return <a href="https://www.bilibili.com/" onClick={this.clickHandler3}>
    //     click me
    // </a>

    // 传递参数 - 用 bind(this, a, b)
    return (
      <ul>
        {this.state.list.map((item, index) => {
          return (
            <li
              key={item.id}
              onClick={this.clickHandler4.bind(this, item.id, item.title)}
            >
              index {index}; title {item.title}
            </li>
          );
        })}
      </ul>
    );
  }

  // 获取 event
  clickHandler3 = (event) => {
    event.preventDefault(); // 阻止默认行为
    event.stopPropagation(); // 阻止冒泡
    console.log("target", event.target); // 指向当前元素，即当前元素触发
    console.log("current target", event.currentTarget); // 指向当前元素，假象！！！

    // 注意，event 其实是 React 封装的。可以看 __proto__.constructor 是 SyntheticEvent 组合事件
    console.log("event", event); // 不是原生的 Event ，原生的 MouseEvent
    console.log("event.__proto__.constructor", event.__proto__.constructor);

    // 原生 event 如下。其 __proto__.constructor 是 MouseEvent
    console.log("nativeEvent", event.nativeEvent);
    console.log("nativeEvent target", event.nativeEvent.target); // 指向当前元素，即当前元素触发
    console.log("nativeEvent current target", event.nativeEvent.currentTarget); // 指向 document ！！！

    // 1. event 是 SyntheticEvent ，模拟出来 DOM 事件所有能力
    // 2. event.nativeEvent 是原生事件对象
    // 3. 所有的事件，都被挂载到 document 上
    // 4. 和 DOM 事件不一样，和 Vue 事件也不一样
  };
  // 传递参数
  clickHandler4(id, title, event) {
    console.log(id, title);
    console.log("event", event); // 最后追加一个参数，即可接收 event
  }
}

export default EventDemo;
```





### 表单

- 受控组件
- input textarea select 用 value
- checkbox radio 用 checked



```js
import React from "react";

class FormDemo extends React.Component {
  state = {
    name: "云牧",
    info: "个人信息",
    city: "changsha",
    flag: true,
    gender: "male",
  };

  onInputChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  onTextareaChange = (e) => {
    this.setState({
      info: e.target.value,
    });
  };
  onSelectChange = (e) => {
    this.setState({
      city: e.target.value,
    });
  };
  onCheckboxChange = () => {
    this.setState({
      flag: !this.state.flag,
    });
  };
  onRadioChange = (e) => {
    this.setState({
      gender: e.target.value,
    });
  };

  render() {
    // // 受控组件
    // return <div>
    //     <p>{this.state.name}</p>
    //     <label htmlFor="inputName">姓名：</label> {/* 用 htmlFor 代替 for */}
    //     <input id="inputName" value={this.state.name} onChange={this.onInputChange}/>
    // </div>

    // textarea - 使用 value
    return (
      <div>
        <p>{this.state.info}</p>
        <textarea value={this.state.info} onChange={this.onTextareaChange} />
      </div>
    );

    // // select - 使用 value
    // return <div>
    //     <select value={this.state.city} onChange={this.onSelectChange}>
    //         <option value="beijing">北京</option>
    //         <option value="shanghai">上海</option>
    //         <option value="shenzhen">深圳</option>
    //     </select>
    //     <p>{this.state.city}</p>
    // </div>

    // // checkbox
    // return <div>
    //     <input type="checkbox" checked={this.state.flag} onChange={this.onCheckboxChange}/>
    //     <p>{this.state.flag.toString()}</p>
    // </div>

    // // radio
    // return <div>
    //     male <input type="radio" name="gender" value="male" checked={this.state.gender === 'male'} onChange={this.onRadioChange}/>
    //     female <input type="radio" name="gender" value="female" checked={this.state.gender === 'female'} onChange={this.onRadioChange}/>
    //     <p>{this.state.gender}</p>
    // </div>

    // 非受控组件 - 后面再讲
  }
}

export default FormDemo;
```





### 组件和props

- props传递数据
- props传递函数
- props类型检查



```js
import React from "react";
import PropTypes from "prop-types";

class Input extends React.Component {
  state = {
    title: "",
  };

  onTitleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  onSubmit = () => {
    const { submitTitle } = this.props;
    submitTitle(this.state.title); // 'abc'

    this.setState({
      title: "",
    });
  };
  render() {
    return (
      <div>
        <input value={this.state.title} onChange={this.onTitleChange} />
        <button onClick={this.onSubmit}>提交</button>
      </div>
    );
  }
}
// props 类型检查
Input.propTypes = {
  submitTitle: PropTypes.func.isRequired,
};

class List extends React.Component {
  render() {
    const { list } = this.props;

    return (
      <ul>
        {list.map((item, index) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
    );
  }
}
// props 类型检查
List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

class Footer extends React.Component {
  render() {
    return (
      <p>
        {this.props.text}
        {this.props.length}
      </p>
    );
  }
  componentDidUpdate() {
    console.log("footer did update");
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.text !== this.props.text ||
      nextProps.length !== this.props.length
    ) {
      return true; // 可以渲染
    }
    return false; // 不重复渲染
  }

  // React 默认：父组件有更新，子组件则无条件也更新！！！
  // 性能优化对于 React 更加重要！
  // SCU 一定要每次都用吗？—— 需要的时候才优化
}

class TodoListDemo extends React.Component {
  // 状态（数据）提升
  state = {
    list: [
      {
        id: "id-1",
        title: "标题1",
      },
      {
        id: "id-2",
        title: "标题2",
      },
      {
        id: "id-3",
        title: "标题3",
      },
    ],
    footerInfo: "上面todolist的数量为",
  };

  render() {
    return (
      <div>
        <Input submitTitle={this.onSubmitTitle} />
        <List list={this.state.list} />
        <Footer text={this.state.footerInfo} length={this.state.list.length} />
      </div>
    );
  }
  onSubmitTitle = (title) => {
    this.setState({
      list: this.state.list.concat({
        id: `id-${Date.now()}`,
        title,
      }),
    });
  };
}

export default TodoListDemo;
```



### setState



- 不可变值
- 可能是异步更新
- 可能会被合并

```js
import React from "react";

// 函数组件（后面会讲），默认没有 state
class StateDemo extends React.Component {
  constructor(props) {
    super(props);

    // 第一，state 要在构造函数中定义
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increase}>累加</button>
      </div>
    );
  }
  increase = () => {
    // // 第二，不要直接修改 state ，使用不可变值 ----------------------------
    // // this.state.count++ // 错误
    // this.setState({
    //     count: this.state.count + 1 // SCU
    // })
    // 操作数组、对象的的常用形式

    // 第三，setState 可能是异步更新（有可能是同步更新） ----------------------------

    // this.setState({
    //     count: this.state.count + 1
    // },
    // () => {
    //     // 联想 Vue $nextTick - DOM
    //     console.log('count by callback', this.state.count) // 回调函数中可以拿到最新的 state
    // }
    //)
    // console.log('count', this.state.count) // 异步的，拿不到最新值

    // // setTimeout 中 setState 是同步的
    // setTimeout(() => {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    //     console.log('count in setTimeout', this.state.count)
    // }, 0)

    // 自己定义的 DOM 事件，setState 是同步的。再 componentDidMount 中

    // 第四，state 异步更新的话，更新前会被合并 ----------------------------

    // // 传入对象，会被合并（类似 Object.assign ）。执行结果只一次 +1
    // this.setState({
    //     count: this.state.count + 1
    // })
    // this.setState({
    //     count: this.state.count + 1
    // })
    // this.setState({
    //     count: this.state.count + 1
    // })

    // 传入函数，不会被合并。执行结果是 +3
    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1,
      };
    });
    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1,
      };
    });
    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1,
      };
    });
  };
  // bodyClickHandler = () => {
  //     this.setState({
  //         count: this.state.count + 1
  //     })
  //     console.log('count in body event', this.state.count)
  // }
  // componentDidMount() {
  //     // 自己定义的 DOM 事件，setState 是同步的
  //     document.body.addEventListener('click', this.bodyClickHandler)
  // }
  // componentWillUnmount() {
  //     // 及时销毁自定义 DOM 事件
  //     document.body.removeEventListener('click', this.bodyClickHandler)
  //     // clearTimeout
  // }
}

export default StateDemo;

// -------------------------- 我是分割线 -----------------------------

// // 不可变值（函数式编程，纯函数） - 数组
// const list5Copy = this.state.list5.slice()
// list5Copy.splice(2, 0, 'a') // 中间插入/删除
// this.setState({
//     list1: this.state.list1.concat(100), // 追加
//     list2: [...this.state.list2, 100], // 追加
//     list3: this.state.list3.slice(0, 3), // 截取
//     list4: this.state.list4.filter(item => item > 100), // 筛选
//     list5: list5Copy // 其他操作
// })
// // 注意，不能直接对 this.state.list 进行 push pop splice 等，这样违反不可变值
                                                                    
// // 不可变值 - 对象
// this.setState({
//     obj1: Object.assign({}, this.state.obj1, {a: 100}),
//     obj2: {...this.state.obj2, a: 100}
// })
// // 注意，不能直接对 this.state.obj 进行属性设置，这样违反不可变值
```



### 生命周期



https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/







## React高级特性

- 函数组件
- context
- 非受控组件
- 异步组件
- Portals
- 性能优化
- 性能优化
- 高阶组件HOC
- Render Props







### 函数组件

- 纯函数，输入props，输出JSX
- 没有实例，没有生命周期，没有state
- 不能扩展其他方法



![image-20210324192903478](https://i.loli.net/2021/03/24/JFbASr4ws9jcdmh.png)







### 非受控组件

- ref
- defaultValue defaultChecked
- 手动操作DOM元素



```js
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "云牧",
      flag: true,
    };
    this.nameInputRef = React.createRef(); // 创建 ref
    this.fileInputRef = React.createRef();
  }
  alertName = () => {
    const elem = this.nameInputRef.current; // 通过 ref 获取 DOM 节点
    alert(elem.value); // 不是 this.state.name
  };
  alertFile = () => {
    const elem = this.fileInputRef.current; // 通过 ref 获取 DOM 节点
    alert(elem.files[0].name);
  };

  render() {
    // // input defaultValue
    // return <div>
    //     {/* 使用 defaultValue 而不是 value ，使用 ref */}
    //     <input defaultValue={this.state.name} ref={this.nameInputRef}/>
    //     {/* state 并不会随着改变 */}
    //     <span>state.name: {this.state.name}</span>
    //     <br/>
    //     <button onClick={this.alertName}>alert name</button>
    // </div>

    // // checkbox defaultChecked
    // return <div>
    //     <input
    //         type="checkbox"
    //         defaultChecked={this.state.flag}
    //     />
    // </div>

    // file
    return (
      <div>
        <input type="file" ref={this.fileInputRef} />
        <button onClick={this.alertFile}>alert file</button>
      </div>
    );
  }
}

export default App;
```



#### 非受控组件-使用场景

- 必须手动操作DOM元素，setState 实现不了
- 文件上传\<input type=file>
- 某些富文本编辑器，需要传入DOM元素



#### 受控组件vs非受控组件

- 优先使用受控组件，符合React设计原则
- 必须操作 DOM时，再使用非受控组件





### Portals

- 组件默认会按照既定层次嵌套渲染
- 如何让组件渲染到父组件以外?

```js
import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

class App extends React.Component {
  state = {};

  render() {
    // // 正常渲染
    // return <div className="modal">
    //     {this.props.children} {/* vue slot */}
    // </div>

    // 使用 Portals 渲染到 body 上。
    // fixed 元素要放在 body 上，有更好的浏览器兼容性。
    return ReactDOM.createPortal(
      <div className="modal">{this.props.children}</div>,
      document.body // DOM 节点
    );
  }
}

export default App;
```





#### Portals使用场景

- overflow: hidden
- 父组件z-index值太小
- fixed需要放在body第一层级



### context

- 公共信息（语言、主题）如何传递给每个组件?
- 用props太繁琐
- 用redux 小题大做

```js
import React from "react";

// 创建 Context 
const ThemeContext = React.createContext();

// 底层组件 - 函数是组件
function ThemeLink(props) {
  // const theme = this.context // 会报错。函数式组件没有实例，即没有 this

  // 函数式组件可以使用 Consumer
  return (
    <ThemeContext.Consumer> {/*value就是context中的value数据*/}
      {(value) => <p>link's theme is {value}</p>}
    </ThemeContext.Consumer>
  );
}

// 底层组件 - class 组件
class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // static contextType = ThemeContext // 也可以用 ThemedButton.contextType = ThemeContext
  render() {
    const theme = this.context; // React 会往上找到最近的 theme Provider，然后使用它的值。
    return (
      <div>
        <p>button's theme is {theme}</p>
      </div>
    );
  }
}
ThemedButton.contextType = ThemeContext; // 指定 contextType 读取当前的 theme context。

// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
      <ThemeLink />
    </div>
  );
}

class App extends React.Component {
  state = {
    theme: "light",
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <Toolbar />
        <hr />
        <button onClick={this.changeTheme}>change theme</button>
      </ThemeContext.Provider>
    );
  }
  changeTheme = () => {
    this.setState({
      theme: this.state.theme === "light" ? "dark" : "light",
    });
  };
}

export default App;
```





### 异步组件

- import()
- React.lazy
- React.Suspense



```js
import React from 'react'

const ContextDemo = React.lazy(() => import('./ContextDemo'))

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            <p>引入一个动态组件</p>
            <hr />
            <React.Suspense fallback={<div>Loading...</div>}>
                <ContextDemo/>
            </React.Suspense>
        </div>

        // 1. 强制刷新，可看到 loading （看不到就限制一下 chrome 网速）
        // 2. 看 network 的 js 加载
    }
}

export default App
```





### 性能优化

- shouldComponentUpdate (简称SCU)
- PureComponent和 React.memo
- 不可变值immutable.js





#### SCU 基本用法

![image-20210324210929251](https://i.loli.net/2021/03/24/h39ISR6PcDTZjLW.png)



```js
import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }
    render() {
        return <div>
            <input value={this.state.title} onChange={this.onTitleChange}/>
            <button onClick={this.onSubmit}>提交</button>
        </div>
    }
    onTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    onSubmit = () => {
        const { submitTitle } = this.props
        submitTitle(this.state.title)

        this.setState({
            title: ''
        })
    }
}
// props 类型检查
Input.propTypes = {
    submitTitle: PropTypes.func.isRequired
}

class List extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { list } = this.props

        return <ul>{list.map((item, index) => {
            return <li key={item.id}>
                <span>{item.title}</span>
            </li>
        })}</ul>
    }

    // 增加 shouldComponentUpdate
    shouldComponentUpdate(nextProps, nextState) {
        // _.isEqual 做对象或者数组的深度比较（一次性递归到底）
        if (_.isEqual(nextProps.list, this.props.list)) {
            // 相等，则不重复渲染
            return false
        }
        return true // 不相等，则渲染
    }
}
// props 类型检查
List.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired
}

class TodoListDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {
                    id: 'id-1',
                    title: '标题1'
                },
                {
                    id: 'id-2',
                    title: '标题2'
                },
                {
                    id: 'id-3',
                    title: '标题3'
                }
            ]
        }
    }
    render() {
        return <div>
            <Input submitTitle={this.onSubmitTitle}/>
            <List list={this.state.list}/>
        </div>
    }
    onSubmitTitle = (title) => {
        // 正确的用法
        this.setState({
            list: this.state.list.concat({
                id: `id-${Date.now()}`,
                title
            })
        })

        // // 为了演示 SCU ，故意写的错误用法
        // this.state.list.push({
        //     id: `id-${Date.now()}`,
        //     title
        // })
        
        // this.setState({
        //     list: this.state.list
        // })
    }
}

export default TodoListDemo
```







##### SCU使用总结

- SCU 默认返回true ，即 React默认重新渲染所有子组件
- 必须配合“不可变值”一起使用
- 可先不用SCU，有性能问题时再考虑使用





#### PureComponent和memo



- PureComponent , SCU中实现了浅比较
- memo，函数组件中的 PureComponent
- 浅比较已使用大部分情况（尽量不要做深度比较)



![image-20210324221144451](https://i.loli.net/2021/03/24/TbrxkZaESslBNUJ.png)





#### immutable.js



- 拥抱 不可变值
- 基于共享数据（不是深拷贝)，速度好
- 有一定学习和迁移成本，按需使用



![image-20210324221545233](https://i.loli.net/2021/03/24/N4fgxbcHClykKI9.png)





### 关于组件公共逻辑的抽离

- mixin，已被React 弃用
- 高阶组件HOC
- Render Props





#### 高阶组件基本用法





### Render Props

![image-20210324222419107](https://i.loli.net/2021/03/24/WItQZd25gGqK4jD.png)







## React-router



### React路由模式

![image-20210325143202876](https://i.loli.net/2021/03/25/ElnrGkH4eybZ5T2.png)



###  动态路由

![image-20210325144133833](https://i.loli.net/2021/03/25/758h1YiIVQRaMnN.png)





###  编程式路由

![image-20210325144232654](https://i.loli.net/2021/03/25/hRWYQGmxH7usTiJ.png)





### 懒加载

![image-20210325144259421](https://i.loli.net/2021/03/25/EjXIi9g3GsQ17qf.png)









## Redux



- 基本概念
- 异步action
- 单项数据流
- react-redux



![image-20210322154921164](https://i.loli.net/2021/03/22/hsiGtNIbM5AmSn8.png)



- dispatch(action)
- reducer -> newState
- subscribe触发通知



### 异步Action



![image-20210325151110380](https://i.loli.net/2021/03/25/qLOIyfnXHgeoxsv.png)





![image-20210325151328701](https://i.loli.net/2021/03/25/GxQ4Hcw1sEUV32L.png)





## React-redux



- <Provider>
- connect 
- mapStateToProps mapDispatchToProps







## 真题演练







### 组件之间如何通讯?



- 父子组件props
- 自定义事件
- Redux和Context



### setState场景题

![image-20210325151638714](https://i.loli.net/2021/03/25/tPUmAWqTMJVCf96.png)









### 什么是纯函数

- 返回一个新值，没有副作用（不会“偷偷”修改其他值)
- 重点:不可变值
- 如arr1 = arr.slice()





### React发起ajax应该再在哪个生命周期

- 同Vue
- componentDidMount







### 渲染列表，为何使用key



- 同Vue。必须用key ,且不能是index和random
- diff 算法中通过tag和key 来判断，是否是sameNode
- 减少渲染次数，提升渲染性能







### 函数组件和class组件区别

- 纯函数，输入props，输出JSX
- 没有实例，没有生命周期，没有state
- 不能扩展其他方法





### 什么是受控组件?

- 表单的值，收state 控制
- 需要自行监听onChange ，更新state
- 对比非受控组件





### 何时使用异步组件

- 同Vue
- 加载大组件
- 路由懒加载





### redux如何进行异步请求

- 使用异步action
- 如redux-thunk





### react-router 如何配置懒加载

![image-20210325152018955](https://i.loli.net/2021/03/25/DIxol61yXA9mpSk.png)







### PureComponent有何区别

- 实现了浅比较的shouldComponentUpdate
- 优化性能
- 但要结合不可变值使用





### React 事件和 DOM 事件的区别

- 所有事件挂载到document 上
- event 不是原生的，是SyntheticEvent合成事件对象







### React性能优化

- 渲染列表时加key
- 自定义事件、DOM事件及时销毁
- 合理使用异步组件
- 减少函数bind this的次数
- 合理使用SCU PureComponent和memo







### React 和 Vue 的区别



组件化 模块化

- 都支持组件化
- 都是数据驱动视图     
- 都使用  vdom  操作DOM  





.jsx  .js



- React使用JSX拥抱JS，Vue使用模板拥抱html
- React 函数式编程，Vue声明式编程
- React 更多需要自力更生，Vue把想要的都给你