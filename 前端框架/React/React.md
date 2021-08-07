

# 1.邂逅React开发



## 1.1 React简介

### 框架定义

![img](https://i.loli.net/2021/03/11/TbjPvoVDir8E7kJ.png)



### 开发者



![img](https://i.loli.net/2021/03/11/Md9YPnRQcDZEl8A.png)





### 为什么学



![img](https://i.loli.net/2021/03/11/kPgtVHf2rjR48Ec.png)



### react特点

![img](https://i.loli.net/2021/03/11/OKXn4xP3dV5GaNy.png)



![img](https://i.loli.net/2021/03/11/KhtF9J28Vp6WaOb.png)



![img](https://docimg2.docs.qq.com/image/CIqpwKvZ7aheiVG3kJD2Ag?w=632&h=346)



![img](https://docimg2.docs.qq.com/image/3-YqJtc6_B8wRAg1NX-wOw?w=767&h=399)





### 掌握技能

![img](https://docimg4.docs.qq.com/image/_5FIjoAQSPZq3ADskCKWuw?w=672&h=381)









## 1.2 React基本使用

### babel作用



![img](https://docimg5.docs.qq.com/image/qPKqlsQI9m98T2IWtgREnA?w=553&h=424)



### 创建虚拟DOM渲染 

```html
<!-- 准备好一个“容器” -->
<div id="test"></div>

<!-- 引入react核心库 -->
<script type="text/javascript" src="../js/react.development.js"></script>
<!-- 引入react-dom，用于支持react操作DOM -->
<script type="text/javascript" src="../js/react-dom.development.js"></script>
<!-- 引入babel，用于将jsx转为js -->
<script type="text/javascript" src="../js/babel.min.js"></script>

<script type="text/babel" > /* 此处一定要写babel */
		//1.创建虚拟DOM
		const VDOM = <h1>Hello,React</h1> /* 此处一定不要写引号，因为不是字符串 */
		//2.渲染虚拟DOM到页面
		ReactDOM.render(VDOM,document.getElementById('test'))
</script>
```



### 通过jsx创建DOM

```html
<!-- 准备好一个“容器” -->
<div id="test"></div>

<!-- 引入react核心库 -->
<script type="text/javascript" src="../js/react.development.js"></script>
<!-- 引入react-dom，用于支持react操作DOM -->
<script type="text/javascript" src="../js/react-dom.development.js"></script>
<!-- 引入babel，用于将jsx转为js -->
<script type="text/javascript" src="../js/babel.min.js"></script>

<script type="text/babel" > /* 此处一定要写babel */
		//1.创建虚拟DOM
		const VDOM = (  /* 此处一定不要写引号，因为不是字符串 */
			<h1 id="title">
				<span>Hello,React</span>
    </h1>
		)
		//2.渲染虚拟DOM到页面
		ReactDOM.render(VDOM,document.getElementById('test'))
</script>
```



### 通过js创建虚拟DOM

```html
<!-- 准备好一个“容器” -->
<div id="test"></div>

<!-- 引入react核心库 -->
<script type="text/javascript" src="../js/react.development.js"></script>
<!-- 引入react-dom，用于支持react操作DOM -->
<script type="text/javascript" src="../js/react-dom.development.js"></script>

<script type="text/javascript">
    //1.创建虚拟DOM
    const VDOM = React.createElement(
        "h1",
        { id: "title" },
        React.createElement("span", {}, "Hello,React")
    );
    //2.渲染虚拟DOM到页面
    ReactDOM.render(VDOM, document.getElementById("test"));
</script>
```



### 真实/虚拟DOM比较

```html
<!-- 准备好一个“容器” -->
<div id="test"></div>
<div id="demo"></div>

<!-- 引入react核心库 -->
<script type="text/javascript" src="../js/react.development.js"></script>
<!-- 引入react-dom，用于支持react操作DOM -->
<script type="text/javascript" src="../js/react-dom.development.js"></script>
<!-- 引入babel，用于将jsx转为js -->
<script type="text/javascript" src="../js/babel.min.js"></script>

<script type="text/babel">
		//1.创建虚拟DOM
		const VDOM = (
			<h1 id="title">
				<span>Hello,React</span>
    		</h1>
		);
		//2.渲染虚拟DOM到页面
		ReactDOM.render(VDOM, document.getElementById("test"));

		const TDOM = document.getElementById("demo");
		console.log("虚拟DOM", VDOM);
		console.log("真实DOM", TDOM);
		
      	// console.log(typeof VDOM);
       // console.log(VDOM instanceof Object);
		/*
		关于虚拟DOM：
			1.本质是Object类型的对象（一般对象）
			2.虚拟DOM比较“轻”，真实DOM比较“重”，因为虚拟DOM是React内部在用，无需真实DOM上那么多的属性。
			3.虚拟DOM最终会被React转化为真实DOM，呈现在页面上。
			   */
	</script>
```



## 1.3 React JSX

### jsx语法规则

![img](https://docimg10.docs.qq.com/image/iXhbgWkTc6OEp7YhrqZT3w?w=519&h=239)





```html
<head>
	<title>jsx语法规则</title>
	<style>
		.title {
			background-color: orange;
			width: 200px;
		}
	</style>
</head>

<body>
	<!-- 准备好一个“容器” -->
	<div id="test"></div>

	<!-- 引入react核心库 -->
	<script type="text/javascript" src="../js/react.development.js"></script>
	<!-- 引入react-dom，用于支持react操作DOM -->
	<script type="text/javascript" src="../js/react-dom.development.js"></script>
	<!-- 引入babel，用于将jsx转为js -->
	<script type="text/javascript" src="../js/babel.min.js"></script>

	<script type="text/babel">
		const myId = 'aTgUiGu'
		const myData = 'HeLlo,rEaCt'

		//1.创建虚拟DOM
		const VDOM = (
			<div>
				<h2 className="title" id={myId.toLowerCase()}>
					<span style={{ color: 'white', fontSize: '29px' }}>{myData.toLowerCase()}</span>
				</h2>
				<h2 className="title" id={myId.toUpperCase()}>
					<span style={{ color: 'white', fontSize: '29px' }}>{myData.toLowerCase()}</span>
				</h2>
				<input type="text" />
			</div>
		)
		//2.渲染虚拟DOM到页面
		ReactDOM.render(VDOM, document.getElementById('test'))

	/*
		jsx语法规则：
			1.定义虚拟DOM时，不要写引号。
			2.标签中混入JS表达式时要用{}。
			3.样式的类名指定不要用class，要用className。
			4.内联样式，要用style={{key:value}}的形式去写。
			5.只有一个根标签
			6.标签必须闭合
			7.标签首字母
				(1).若小写字母开头，则将该标签转为html中同名元素，若html中无该标签对应的同名元素，则报错。
				(2).若大写字母开头，react就去渲染对应的组件，若组件没有定义，则报错。

		 */
	</script>
```

组件标签首字母一定大写



![img](https://docimg8.docs.qq.com/image/sKAgUra8twnC3sboUMMcOA?w=1729&h=711)







### jsx小练习

![image-20210313213034694](https://i.loli.net/2021/03/13/k8Uj1uAFbyenVHp.png)

react默认会遍历数组,但是对象不能遍历报错如下

```html
<script type="text/babel" >
		/* 
			一定注意区分：【js语句(代码)】与【js表达式】
					1.表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方
								下面这些都是表达式：
										(1). a
										(2). a+b
										(3). demo(1)
										(4). arr.map() 
										(5). function test () {}   test()
										(6). isLogin ? "欢迎回来~": "请先登录~"
					2.语句(代码)：
								下面这些都是语句(代码)：
										(1).if(){}
										(2).for(){}
										(3).switch(){case:xxxx}

	 */
	 
		//模拟一些数据  react默认自动遍历数组,不能遍历对象 ==> {data}
		const data = ['Angular','React','Vue']  
		//1.创建虚拟DOM
		const VDOM = (
			<div>	
				<h1>前端js框架列表</h1>
				<ul>
					{
						data.map((item,index)=>{
							return <li key={index}>{item}</li>
						})
					}
        		</ul>
        	</div>
		)
		//2.渲染虚拟DOM到页面
		ReactDOM.render(VDOM,document.getElementById('test'))
</script>
```





## 1.4 模块化与组件化的理解

### 模块

- 理解：向外提供特定功能的js程序, 一般就是一个js文件
- 为什么要拆成模块：随着业务逻辑增加，代码越来越多且复杂
- 作用：复用js, 简化js的编写, 提高js运行效率



### 组件

- 理解：用来实现局部功能效果的代码和资源的集合(html/css/js/image等等)
- 为什么要用组件： 一个界面的功能更复杂
- 作用：复用编码, 简化项目编码, 提高运行效率





### 模块化

- 当应用的js都以模块来编写的, 这个应用就是一个模块化的应用



### 组件化

- 当应用是以多组件的方式实现, 这个应用就是一个组件化的应用



![image-20210313125017529](https://i.loli.net/2021/03/13/oFLmkIhOHYSrMZ9.png)



# 2.React面向组件编程



## 2.1 使用React开发者工具调试

![image-20210313125152066](https://i.loli.net/2021/03/13/NTG8v7YwDUSFmHx.png)



## 2.2 **函数式组件**

- 适用于简单组件的构建,同时方法名称首字母必须大写,区分普通html标签

```js
<script type="text/babel">
    //1.创建函数式组件
    function MyComponent(){
    console.log(this); //此处的this是undefined，因为babel编译后开启了严格模式
    return <h2>我是用函数定义的组件(适用于【简单组件】的定义)</h2>
}
	//2.渲染组件到页面
 	ReactDOM.render(<MyComponent/>,document.getElementById('test'))
	/* 
	执行了ReactDOM.render(<MyComponent/>.......之后，发生了什么？
			1.React解析组件标签，找到了MyComponent组件。
			2.发现组件是使用函数定义的，随后调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面中。
	*/
</script>
```

![image-20210313125244674](https://i.loli.net/2021/03/13/LOb3qMpjQ4WHnBt.png)





## 2.3 **类式组件**



```js
<script type="text/babel">
		//1.创建类式组件
		class MyComponent extends React.Component {
			render(){
				//render是放在哪里的？—— MyComponent的原型对象上，供实例使用。
				//render中的this是谁？—— MyComponent的实例对象 <=> MyComponent组件实例对象。
				console.log('render中的this:',this);  //指向实例对象
				return <h2>我是用类定义的组件(适用于【复杂组件】的定义)</h2>
			}
		}
		//2.渲染组件到页面
		ReactDOM.render(<MyComponent/>,document.getElementById('test'))

		/* 
		执行了ReactDOM.render(<MyComponent/>.......之后，发生了什么？
			1.React解析组件标签，找到了MyComponent组件。
			2.发现组件是使用类定义的，随后new出来该类的实例，并通过该实例调用到原型上的render方法。
			3.将render返回的虚拟DOM转为真实DOM，随后呈现在页面中。
		*/
</script>
```

![image-20210313125259258](https://i.loli.net/2021/03/13/R7DSCitJdKE9a5O.png)



## 2.4 组件实例的三大核心属性



### 1.state

- state是组件对象最重要的属性, 值是对象(可以包含多个key-value的组合)
- 组件被称为"状态机", 通过更新组件的state来更新对应的页面显示(重新渲染组件)



#### state的基本使用

```js
<script type="text/babel">
          //1.创建组件
          class Weather extends React.Component {
            //构造器调用几次？ ———— 1次
            constructor(props) {
              super(props);
              
              //初始化状态
              this.state = { isHot: false, wind: "微风" };
              
              //解决changeWeather中this指向问题
              this.changeWeather = this.changeWeather.bind(this);
            }

            //render调用几次？ ———— 1+n次 1是初始化的那次 n是状态更新的次数
            render() {
              //读取状态
              const { isHot, wind } = this.state;
              return (
                <h1 onClick={this.changeWeather}>
                  今天天气很{isHot ? "炎热" : "凉爽"}，{wind}
    			</h1>
              );
            }

            //changeWeather调用几次？ ———— 点几次调几次
            changeWeather() {
              //changeWeather放在哪里？ ———— Weather的原型对象上，供实例使用
              //由于changeWeather是作为onClick的回调，所以不是通过实例调用的，是直接调用
              //类中的方法默认开启了局部的严格模式，所以changeWeather中的this为undefined

              //获取原来的isHot值
              const isHot = this.state.isHot;

              //严重注意：状态必须通过setState进行更新,且更新是一种合并，不是替换。
              this.setState({ isHot: !isHot });
            }
          }
          //2.渲染组件到页面
          ReactDOM.render(<Weather />, document.getElementById("test"));
</script>
```





#### state的简写方式

```js
<script type="text/babel">
		//1.创建组件
		class Weather extends React.Component{
			//初始化状态
			state = {isHot:false,wind:'微风'}

			render(){
				const {isHot,wind} = this.state
				return <h1 onClick={this.changeWeather}>
							今天天气很{isHot ? '炎热' : '凉爽'}，wind}
        				</h1>
			}

			//自定义方法————要用赋值语句的形式+箭头函数
			changeWeather = () => {
				const isHot = this.state.isHot
				this.setState({isHot:!isHot})
			}
		}
		//2.渲染组件到页面
		ReactDOM.render(<Weather/>,document.getElementById('test'))
</script>
```



**注意：**

-  组件中render方法中的this为组件实例对象

- 组件自定义的方法中this为undefined，如何解决？
  - 强制绑定this: 通过函数对象的bind()
  - 箭头函数
- 状态数据，不能直接修改或更新







### 2.props

- 每个组件对象都会有props(properties的简写)属性
- 组件标签的所有属性都保存在props中

#### prop的基本使用

- 通过标签属性从组件外向组件内传递变化的数据

```js
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>props基本使用</title>
    </head>
    <body>
        <!-- 准备好一个“容器” -->
        <div id="test1"></div>
        <div id="test2"></div>
        <div id="test3"></div>

        <!-- 引入react核心库 -->
        <script type="text/javascript" src="../js/react.development.js"></script>
        <!-- 引入react-dom，用于支持react操作DOM -->
        <script type="text/javascript" src="../js/react-dom.development.js"></script>
        <!-- 引入babel，用于将jsx转为js -->
        <script type="text/javascript" src="../js/babel.min.js"></script>

        <script type="text/babel">
      //创建组件
      class Person extends React.Component {
        render() {
          // console.log(this);
          const { name, age, sex } = this.props;
          return (
            <ul>
              <li>姓名：{name}</li>
              <li>性别：{sex}</li>
              <li>年龄：{age + 1}</li>
            </ul>
          );
        }
      }
      //渲染组件到页面
      ReactDOM.render(
        <Person name="jerry" age={19} sex="男" />,
        document.getElementById("test1")
      );
      ReactDOM.render(
        <Person name="tom" age={18} sex="女" />,
        document.getElementById("test2")
      );
      const p = { name: "老刘", age: 18, sex: "女" };
       // ReactDOM.render(<Person name={p.name} age={p.age} sex=										{p.sex}/>,document.getElementById('test3'))
       					//这里的{}是代表分隔符  这里只是...p
       ReactDOM.render(<Person {...p} />, document.getElementById("test3"));
        </script>
    </body>
</html>
```



#### 对props进行限制

- 注意: 组件内部不要修改props数据

```html
<!-- 准备好一个“容器” -->
<div id="test1"></div>
<div id="test2"></div>
<div id="test3"></div>

<!-- 引入react核心库 -->
<script type="text/javascript" src="../js/react.development.js"></script>
<!-- 引入react-dom，用于支持react操作DOM -->
<script type="text/javascript" src="../js/react-dom.development.js"></script>
<!-- 引入babel，用于将jsx转为js -->
<script type="text/javascript" src="../js/babel.min.js"></script>
<!-- 引入prop-types，用于对组件标签属性进行限制 -->
<script type="text/javascript" src="../js/prop-types.js"></script>

<script type="text/babel">
		//创建组件
		class Person extends React.Component{
			render(){
				// console.log(this);
				const {name,age,sex} = this.props
				//props是只读的
				//this.props.name = 'jack' //此行代码会报错，因为props是只读的
				return (
					<ul>
						<li>姓名：{name}</li>
						<li>性别：{sex}</li>
						<li>年龄：{age+1}</li>
    				</ul>
				)
			}
		}
		//对标签属性进行类型、必要性的限制
		Person.propTypes = {
			name:PropTypes.string.isRequired, //限制name必传，且为字符串
			sex:PropTypes.string,//限制sex为字符串
			age:PropTypes.number,//限制age为数值
			speak:PropTypes.func,//限制speak为函数
		}
		//指定默认标签属性值
		Person.defaultProps = {
			sex:'男',//sex默认值为男
			age:18 //age默认值为18
		}
		//渲染组件到页面
		ReactDOM.render(<Person name={100} speak={speak}/>,document.getElementById('test1'))
		ReactDOM.render(<Person name="tom" age={18} sex="女"/>,document.getElementById('test2'))

		const p = {name:'老刘',age:18,sex:'女'}
		// console.log('@',...p);
		// ReactDOM.render(<Person name={p.name} age={p.age} sex={p.sex}/>,document.getElementById('test3'))
		ReactDOM.render(<Person {...p}/>,document.getElementById('test3'))

		function speak(){
			console.log('我说话了');
		}
</script>
```



#### **props简写形式**

```js
<script type="text/babel">
		//创建组件
		class Person extends React.Component{

			constructor(props){
				//构造器是否接收props，是否传递给super，取决于：是否希望在构造器中通过this访问props
				// console.log(props);
				super(props)
				console.log('constructor',this.props);
			}

			//对标签属性进行类型、必要性的限制
			static propTypes = {
				name:PropTypes.string.isRequired, //限制name必传，且为字符串
				sex:PropTypes.string,//限制sex为字符串
				age:PropTypes.number,//限制age为数值
			}

			//指定默认标签属性值
			static defaultProps = {
				sex:'男',//sex默认值为男
				age:18 //age默认值为18
			}

			render(){
				const {name,age,sex} = this.props
				//props是只读的
				//this.props.name = 'jack' //此行代码会报错，因为props是只读的
				return (
					<ul>
						<li>姓名：{name}</li>
						<li>性别：{sex}</li>
						<li>年龄：{age+1}</li>
        			</ul>
				)
			}
		}

		//渲染组件到页面
		ReactDOM.render(<Person name="jerry"/>,document.getElementById('test1'))
</script>
```



#### 函数组件使用props

```js
<script type="text/babel">
		//创建组件
		function Person (props){
			const { name,age,sex } = props
			return (
					<ul>
						<li>姓名：{name}</li>
						<li>性别：{sex}</li>
						<li>年龄：{age}</li>
        			</ul>
				)
		}
		Person.propTypes = {
			name:PropTypes.string.isRequired, //限制name必传，且为字符串
			sex:PropTypes.string,//限制sex为字符串
			age:PropTypes.number,//限制age为数值
		}

		//指定默认标签属性值
		Person.defaultProps = {
			sex:'男',//sex默认值为男
			age:18 //age默认值为18
		}
		//渲染组件到页面
		ReactDOM.render(<Person name="jerry"/>,document.getElementById('test1'))
</script>
```



### 3. refs

#### 字符串形式的ref

- 组件内的标签可以定义ref属性来标识自己

```js
<script type="text/babel">
		//创建组件
		class Demo extends React.Component{
			//展示左侧输入框的数据
			showData = ()=>{
				const {input1} = this.refs
				alert(input1.value)
			}
			//展示右侧输入框的数据
			showData2 = ()=>{
				const {input2} = this.refs
				alert(input2.value)
			}
			
			render(){
				return(
					<div>
						<input ref="input1" type="text" placeholder="点击按钮提示数据"/>&nbsp;
						<button onClick={this.showData}>点我提示左侧的数据</button>&nbsp;
						<input ref="input2" onBlur={this.showData2} type="text" placeholder="失去焦点提示数据"/>
        </div>
				)
			}
		}
		//渲染组件到页面
		ReactDOM.render(<Demo a="1" b="2"/>,document.getElementById('test'))
</script>
```





#### 回调函数形式的ref

```js
<script type="text/babel">
		//创建组件
		class Demo extends React.Component{
			//展示左侧输入框的数据
			showData = ()=>{
				const {input1} = this
				alert(input1.value)
			}
			//展示右侧输入框的数据
			showData2 = () => {
				const {input2} = this
				alert(input2.value)
			}
			render(){
				return(
					<div>
						{/*自动执行回调函数 第一个参数是绑定的当前元素*/}
						<input ref={c => this.input1 = c } type="text" placeholder="点击按钮提																					示数据"/>
						<button onClick={this.showData}>点我提示左侧的数据</button>
						<input onBlur={this.showData2} ref={c => this.input2 = c } 											type="text" placeholder="失去焦点提示数据"/>
        			</div>
				)
			}
		}
		//渲染组件到页面
		ReactDOM.render(<Demo a="1" b="2"/>,document.getElementById('test'))
</script>
```



**回调ref中回调执行次数的问题**

- 如果ref回调函数以内联函数的形式定义  更新过程会执行两次   第一次传入参数为null 第二次传入参数是DOM元素
- 定义成class的绑定函数即可以避免上述问题

```js
<script type="text/babel">
		//创建组件
		class Demo extends React.Component{

			state = {isHot:false}

			showInfo = ()=>{
				const {input1} = this
				alert(input1.value)
			}

			changeWeather = ()=>{
				//获取原来的状态
				const {isHot} = this.state
				//更新状态
				this.setState({isHot:!isHot})
			}

			saveInput = (c)=>{
				this.input1 = c;
				console.log('@',c);
			}

			render(){
				const {isHot} = this.state
				return(
					<div>
						<h2>今天天气很{isHot ? '炎热':'凉爽'}</h2>
						{/*<input ref={(c)=>{this.input1 = c;console.log('@',c);}} type="text"/><br/><br/>*/}
						<input ref={this.saveInput} type="text"/><br/><br/>
						<button onClick={this.showInfo}>点我提示输入的数据</button>
						<button onClick={this.changeWeather}>点我切换天气</button>
            </div>
				)
			}
		}
		//渲染组件到页面
		ReactDOM.render(<Demo/>,document.getElementById('test'))
</script>
```



#### createRef的使用

```js
<script type="text/babel">
		//创建组件
		class Demo extends React.Component{
			/* 
			React.createRef调用后可以返回一个容器，该容器可以存储被ref所标识的节点,该容器是“专人专用”的
			 */
			myRef = React.createRef()
			myRef2 = React.createRef()
			//展示左侧输入框的数据
			showData = () => {
				//this.myRef.current就是对应的元素节点
				alert(this.myRef.current.value);
			}
			//展示右侧输入框的数据
			showData2 = ()=>{
				alert(this.myRef2.current.value);
			}
			render(){
				return(
					<div>
						<input ref={this.myRef} type="text" placeholder="点击按钮提示数据"/>
						<button onClick={this.showData}>点我提示左侧的数据</button>
						<input onBlur={this.showData2} ref={this.myRef2} type="text" placeholder="失去焦点提示数据"/>
        		</div>
				)
			}
		}
		//渲染组件到页面
		ReactDOM.render(<Demo a="1" b="2"/>,document.getElementById('test'))
</script>
```



## 2.5 事件处理

- 通过onXxx属性指定事件处理函数(注意大小写)
  - React使用的是自定义(合成)事件, 而不是使用的原生DOM事件   —————— 为了更好的兼容
  - React中的事件是通过事件委托方式处理的(委托给组件最外层的元素)  ————————为了高效
- 通过event.target得到发生事件的DOM元素对象  ——————————不要过度使用ref

```js
<script type="text/babel">
		//创建组件
		class Demo extends React.Component{
			//创建ref容器
			myRef = React.createRef()
			myRef2 = React.createRef()

			//展示左侧输入框的数据
			showData = (event) => {
				console.log(event.target);
				alert(this.myRef.current.value);
			}

			//展示右侧输入框的数据
			showData2 = (event) => {
				alert(event.target.value);
			}

			render(){
				return(
					<div>
						<input ref={this.myRef} type="text" placeholder="点击按钮提示数据"/>
						<button onClick={this.showData}>点我提示左侧的数据</button>
						<input onBlur={this.showData2} type="text" placeholder="失去焦点提示数据"/>
        			</div>
				)
			}
		}
		//渲染组件到页面
		ReactDOM.render(<Demo/>,document.getElementById('test'))
</script>
```



### jsx绑定事件和this处理

```js

    <script type="text/babel">
      class App extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            message: "你好啊",
            counter: 100,
          };

          this.btnClick = this.btnClick.bind(this);
        }

        render() {
          return (
            <div>
              {/* 1.方案一: bind绑定this(显示绑定) */}
              <button onClick={this.btnClick}>按钮1</button>
              <button onClick={this.btnClick}>按钮2</button>
              <button onClick={this.btnClick}>按钮3</button>

              {/* 2.方案二: 定义函数时, 使用箭头函数 */}
              <button onClick={this.increment}>+1</button>

              {/* 2.方案三(推荐): 直接传入一个箭头函数, 在箭头函数中调用需要执行的函数*/}
              <button
                onClick={() => {
                  this.decrement("why");
                }}
              >
                -1
              </button>
            </div>
          );
        }

        btnClick() {
          console.log(this.state.message);
        }

        // increment() {
        //   console.log(this.state.counter);
        // }
        // 箭头函数中永远不绑定this
        // ES6中给对象增加属性: class fields
        increment = () => {
          console.log(this.state.counter);
        };

        decrement(name) {
          console.log(this.state.counter, name);
        }
      }

      ReactDOM.render(<App />, document.getElementById("app"));
</script>
```



## 2.6 受控组件和非受控组件



### 非受控组件

- 非受控组件其实就是表单元素的值不会更新state。输入数据都是现用现取的。

```js
 <script type="text/babel">
      //创建组件
      class Login extends React.Component {
        handleSubmit = (event) => {
          event.preventDefault(); //阻止表单提交
          const { username, password } = this;
          alert(
            `你输入的用户名是：${username.value},你输入的密码是：${password.value}`
          );
        };
        render() {
          return (
            <form onSubmit={this.handleSubmit}>
              用户名：
              <input
                ref={(c) => (this.username = c)}
                type="text"
                name="username"
              />
              密码：
              <input
                ref={(c) => (this.password = c)}
                type="password"
                name="password"
              />
              <button>登录</button>
            </form>
          );
        }
      }
      //渲染组件
      ReactDOM.render(<Login />, document.getElementById("test"));
 </script>
```



### 受控组件

- 使 React 的 state 成为“唯一数据源”。输入类DOM随着输入可以把数据维护到状态之中，需要的时候直接读取状态

```js
	<script type="text/babel">
		//创建组件
		class Login extends React.Component{

			//初始化状态
			state = {
				username:'', //用户名
				password:'' //密码
			}

			//保存用户名到状态中
			saveUsername = (event)=>{
				this.setState({username:event.target.value})
			}

			//保存密码到状态中
			savePassword = (event)=>{
				this.setState({password:event.target.value})
			}

			//表单提交的回调
			handleSubmit = (event)=>{
				event.preventDefault() //阻止表单提交
				const {username,password} = this.state
				alert(`你输入的用户名是：${username},你输入的密码是：${password}`)
			}

			render(){
				return(
					<form onSubmit={this.handleSubmit}>
						用户名：<input onChange={this.saveUsername} type="text" name="username"/>
						密码：<input onChange={this.savePassword} type="password" name="password"/>
						<button>登录</button>
					</form>
				)
			}
		}
		//渲染组件
		ReactDOM.render(<Login/>,document.getElementById('test'))
	</script>
```

## 2.7 高阶函数函数柯里化

```js
  <script type="text/babel">
      //#region
      /* 
					高阶函数：如果一个函数符合下面2个规范中的任何一个，那该函数就是高阶函数。
									1.若A函数，接收的参数是一个函数，那么A就可以称之为高阶函数。
									2.若A函数，调用的返回值依然是一个函数，那么A就可以称之为高阶函数。
									常见的高阶函数有：Promise、setTimeout、arr.map()等等

					函数的柯里化：通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式。 
						function sum(a){
							return(b)=>{
								return (c)=>{
									return a+b+c
								}
							}
						}
					*/
      //#endregion
      //创建组件
      class Login extends React.Component {
        //初始化状态
        state = {
          username: "", //用户名
          password: "", //密码
        };

        //保存表单数据到状态中
        saveFormData = (dataType) => {
          return (event) => {
            this.setState({ [dataType]: event.target.value });
          };
        };

        //表单提交的回调
        handleSubmit = (event) => {
          event.preventDefault(); //阻止表单提交
          const { username, password } = this.state;
          alert(`你输入的用户名是：${username},你输入的密码是：${password}`);
        };
        render() {
          return (
            <form onSubmit={this.handleSubmit}>
              用户名：
              <input
                onChange={this.saveFormData("username")}
                type="text"
                name="username"
              />
              密码：
              <input
                onChange={this.saveFormData("password")}
                type="password"
                name="password"
              />
              <button>登录</button>
            </form>
          );
        }
      }
      //渲染组件
      ReactDOM.render(<Login />, document.getElementById("test"));
    </script>
```



**不用函数柯里化传递参数**

```js
<script type="text/babel">
		//创建组件
		class Login extends React.Component{
			//初始化状态
			state = {
				username:'', //用户名
				password:'' //密码
			}

			//保存表单数据到状态中
			saveFormData = (dataType,event)=>{
				this.setState({[dataType]:event.target.value})
			}

			//表单提交的回调
			handleSubmit = (event)=>{
				event.preventDefault() //阻止表单提交
				const {username,password} = this.state
				alert(`你输入的用户名是：${username},你输入的密码是：${password}`)
			}
			render(){
				return(
					<form onSubmit={this.handleSubmit}>
						用户名：<input onChange={event => this.saveFormData('username',event) } type="text" name="username"/>
						密码：<input onChange={event => this.saveFormData('password',event) } type="password" name="password"/>
						<button>登录</button>
					</form>
				)
			}
		}
		//渲染组件
		ReactDOM.render(<Login/>,document.getElementById('test'))
</script>
```



## 2.8 条件渲染和列表渲染



### 条件渲染

```js
 <script type="text/babel">
      class App extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
            isLogin: true,
          };
        }

        render() {
          const { isLogin } = this.state;

          // 1.方案一:通过if判断: 逻辑代码非常多的情况
          let welcome = null;
          let btnText = null;
          if (isLogin) {
            welcome = <h2>欢迎回来~</h2>;
            btnText = "退出";
          } else {
            welcome = <h2>请先登录~</h2>;
            btnText = "登录";
          }

          return (
            <div>
              <div>我是div元素</div>

              {welcome}
              {/* 2.方案二: 三元运算符 */}
              <button onClick={(e) => this.loginClick()}>
                {isLogin ? "退出" : "登录"}
              </button>

              <hr />

              <h2>{isLogin ? "你好啊, coderwhy" : null}</h2>

              {/* 3.方案三: 逻辑与&& */}
              {/* 逻辑与: 一个条件不成立, 后面的条件都不会进行判断了 */}
              <h2>{isLogin && "你好啊, coderwhy"}</h2>
              {isLogin && <h2>你好啊, coderwhy</h2>}
            </div>
          );
        }

        loginClick() {
          this.setState({
            isLogin: !this.state.isLogin,
          });
        }
      }

      ReactDOM.render(<App />, document.getElementById("app"));
    </script>
```



**条件渲染-v-show效果**

```js
 <script type="text/babel">
      class App extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
            isLogin: true,
          };
        }

        render() {
          const { isLogin } = this.state;
          const titleDisplayValue = isLogin ? "block" : "none";
          return (
            <div>
              <button onClick={(e) => this.loginClick()}>
                {isLogin ? "退出" : "登录"}
              </button>
              <h2 style={{ display: titleDisplayValue }}>你好啊, coderwhy</h2>
            </div>
          );
        }

        loginClick() {
          this.setState({
            isLogin: !this.state.isLogin,
          });
        }
      }

      ReactDOM.render(<App />, document.getElementById("app"));
    </script>
```

### 列表渲染



```html
 <script type="text/babel">
      class App extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
            names: ["abc", "cba", "nba", "mba", "dna"],
            numbers: [110, 123, 50, 32, 55, 10, 8, 333],
          };
        }

        render() {
          return (
            <div>
              <h2>名字列表</h2>
              <ul>
                {this.state.names.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>

              <h2>数字列表(过滤1)</h2>
              <ul>
                {this.state.numbers
                  .filter((item) => {
                    return item >= 50;
                  })
                  .map((item) => {
                    return <li>{item}</li>;
                  })}
              </ul>

              <h2>数字列表(过滤2)</h2>
              <ul>
                {this.state.numbers
                  .filter((item) => item >= 50)
                  .map((item) => (
                    <li>{item}</li>
                  ))}
              </ul>

              <h2>数字列表(截取)</h2>
              <ul>
                {this.state.numbers.slice(0, 4).map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </div>
          );
        }
      }

      ReactDOM.render(<App />, document.getElementById("app"));
    </script>
```



## 2.9 组件的生命周期

- 组件从创建到死亡它会经历一些特定的阶段
- React组件中包含一系列勾子函数(生命周期回调函数), 会在特定的时刻调用
- 我们在定义组件时，会在特定的生命周期回调函数中，做特定的工作。

### 引出生命周期

![component    生命周期](https://i.loli.net/2021/03/13/VP1w2TbaLAHex9Q.gif)



```js
<script type="text/babel">
		//创建组件
		//生命周期回调函数 <=> 生命周期钩子函数 <=> 生命周期函数 <=> 生命周期钩子
		class Life extends React.Component{

			state = {opacity:1}

			death = () => {
				//卸载组件
				ReactDOM.unmountComponentAtNode(document.getElementById('test'))
			}

			//组件挂完毕
			componentDidMount(){
				console.log('componentDidMount');
				this.timer = setInterval(() => {
					//获取原状态
					let {opacity} = this.state
					//减小0.1
					opacity -= 0.1
					if(opacity <= 0) opacity = 1
					//设置新的透明度
					this.setState({opacity})
				}, 200);
			}

			//组件将要卸载
			componentWillUnmount(){
				//清除定时器
				clearInterval(this.timer)
			}

			//初始化渲染、状态更新之后
			render(){
				console.log('render');
				return(
					<div>
						<h2 style={{opacity:this.state.opacity}}>React学不会怎么办？</h2>
						<button onClick={this.death}>不活了</button>
					</div>
				)
			}
		}
		//渲染组件
		ReactDOM.render(<Life/>,document.getElementById('test'))
</script>
```



### 生命周期(旧)

![react生命周期(旧)](https://i.loli.net/2021/03/13/GWP1z3KejTRuY6l.png)

```js
 <script type="text/babel">
      /* 
				1. 初始化阶段: 由ReactDOM.render()触发---初次渲染
									1.	constructor()
									2.	componentWillMount()
									3.	render()
									4.	componentDidMount() =====> 常用
							 				一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息
				2. 更新阶段: 由组件内部this.setSate()或父组件render触发
									1.	shouldComponentUpdate()
									2.	componentWillUpdate()
									3.	render() =====> 必须使用的一个
									4.	componentDidUpdate()
									
				3. 卸载组件: 由ReactDOM.unmountComponentAtNode()触发
									1.	componentWillUnmount()  =====> 常用
											一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息
		*/
      //创建组件
      class Count extends React.Component {
        //构造器
        constructor(props) {
          console.log("Count---constructor");
          super(props);
          //初始化状态
          this.state = { count: 0 };
        }

        //加1按钮的回调
        add = () => {
          //获取原状态
          const { count } = this.state;
          //更新状态
          this.setState({ count: count + 1 });
        };

        //卸载组件按钮的回调
        death = () => {
          ReactDOM.unmountComponentAtNode(document.getElementById("test"));
        };

        //强制更新按钮的回调
        force = () => {
          this.forceUpdate();
        };

        //组件将要挂载的钩子
        componentWillMount() {
          console.log("Count---componentWillMount");
        }

        //组件挂载完毕的钩子
        componentDidMount() {
          console.log("Count---componentDidMount");
        }

        //组件将要卸载的钩子
        componentWillUnmount() {
          console.log("Count---componentWillUnmount");
        }

        //控制组件更新的“阀门”
        shouldComponentUpdate() {
          console.log("Count---shouldComponentUpdate");
          return true;
        }

        //组件将要更新的钩子
        componentWillUpdate() {
          console.log("Count---componentWillUpdate");
        }

        //组件更新完毕的钩子
        componentDidUpdate() {
          console.log("Count---componentDidUpdate");
        }

        render() {
          console.log("Count---render");
          const { count } = this.state;
          return (
            <div>
              <h2>当前求和为：{count}</h2>
              <button onClick={this.add}>点我+1</button>
              <button onClick={this.death}>卸载组件</button>
              <button onClick={this.force}>
                不更改任何状态中的数据，强制更新一下
              </button>
            </div>
          );
        }
      }

      //父组件A
      class A extends React.Component {
        //初始化状态
        state = { carName: "奔驰" };

        changeCar = () => {
          this.setState({ carName: "奥拓" });
        };

        render() {
          return (
            <div>
              <div>我是A组件</div>
              <button onClick={this.changeCar}>换车</button>
              <B carName={this.state.carName} />
            </div>
          );
        }
      }

      //子组件B
      class B extends React.Component {
        //组件将要接收新的props的钩子
        componentWillReceiveProps(props) {
          console.log("B---componentWillReceiveProps", props);
        }

        //控制组件更新的“阀门”
        shouldComponentUpdate() {
          console.log("B---shouldComponentUpdate");
          return true;
        }
        //组件将要更新的钩子
        componentWillUpdate() {
          console.log("B---componentWillUpdate");
        }

        //组件更新完毕的钩子
        componentDidUpdate() {
          console.log("B---componentDidUpdate");
        }

        render() {
          console.log("B---render");
          return <div>我是B组件，接收到的车是:{this.props.carName}</div>;
        }
      }

      //渲染组件
      ReactDOM.render(<Count />, document.getElementById("test"));
</script>
```



### react生命周期(新)

![react生命周期(新)](https://i.loli.net/2021/03/13/dmEVJe5SIqWXU1L.png)



```js
 <script type="text/babel">
      //创建组件
      class Count extends React.Component {
        /* 
				1. 初始化阶段: 由ReactDOM.render()触发---初次渲染
								1.	constructor()
								2.	getDerivedStateFromProps 
								3.	render()
								4.	componentDidMount() =====> 常用
											一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息
				2. 更新阶段: 由组件内部this.setSate()或父组件重新render触发
								1.	getDerivedStateFromProps
								2.	shouldComponentUpdate()
								3.	render()
								4.	getSnapshotBeforeUpdate
								5.	componentDidUpdate()
				3. 卸载组件: 由ReactDOM.unmountComponentAtNode()触发
								1.	componentWillUnmount()  =====> 常用
											一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息
			*/
        //构造器
        constructor(props) {
          console.log("Count---constructor");
          super(props);
          //初始化状态
          this.state = { count: 0 };
        }

        //加1按钮的回调
        add = () => {
          //获取原状态
          const { count } = this.state;
          //更新状态
          this.setState({ count: count + 1 });
        };

        //卸载组件按钮的回调
        death = () => {
          ReactDOM.unmountComponentAtNode(document.getElementById("test"));
        };

        //强制更新按钮的回调
        force = () => {
          this.forceUpdate();
        };

        //若state的值在任何时候都取决于props，那么可以使用getDerivedStateFromProps
        static getDerivedStateFromProps(props, state) {
          console.log("getDerivedStateFromProps", props, state);
          return null;
        }

        //在更新之前获取快照
        getSnapshotBeforeUpdate() {
          console.log("getSnapshotBeforeUpdate");
          return "atguigu";
        }

        //组件挂载完毕的钩子
        componentDidMount() {
          console.log("Count---componentDidMount");
        }

        //组件将要卸载的钩子
        componentWillUnmount() {
          console.log("Count---componentWillUnmount");
        }

        //控制组件更新的“阀门”
        shouldComponentUpdate() {
          console.log("Count---shouldComponentUpdate");
          return true;
        }

        //组件更新完毕的钩子
        componentDidUpdate(preProps, preState, snapshotValue) {
          console.log(
            "Count---componentDidUpdate",
            preProps,
            preState,
            snapshotValue
          );
        }

        render() {
          console.log("Count---render");
          const { count } = this.state;
          return (
            <div>
              <h2>当前求和为：{count}</h2>
              <button onClick={this.add}>点我+1</button>
              <button onClick={this.death}>卸载组件</button>
              <button onClick={this.force}>
                不更改任何状态中的数据，强制更新一下
              </button>
            </div>
          );
        }
      }

      //渲染组件
      ReactDOM.render(<Count count={199} />, document.getElementById("test"));
</script>
```





### getSnapshotBeforeUpdate的使用场景

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>4_getSnapShotBeforeUpdate的使用场景</title>
    <style>
      .list {
        width: 200px;
        height: 150px;
        background-color: skyblue;
        overflow: auto;
      }
      .news {
        height: 30px;
      }
    </style>
  </head>
  <body>
    <!-- 准备好一个“容器” -->
    <div id="test"></div>

    <!-- 引入react核心库 -->
    <script type="text/javascript" src="../js/17.0.1/react.development.js"></script>
    <!-- 引入react-dom，用于支持react操作DOM -->
    <script type="text/javascript" src="../js/17.0.1/react-dom.development.js"></script>
    <!-- 引入babel，用于将jsx转为js -->
    <script type="text/javascript" src="../js/17.0.1/babel.min.js"></script>

    <script type="text/babel">
      class NewsList extends React.Component {
        state = { newsArr: [] };

        componentDidMount() {
          setInterval(() => {
            //获取原状态
            const { newsArr } = this.state;
            //模拟一条新闻
            const news = "新闻" + (newsArr.length + 1);
            //更新状态
            this.setState({ newsArr: [news, ...newsArr] });
          }, 1000);
        }

        getSnapshotBeforeUpdate() {
          return this.refs.list.scrollHeight;
        }

        componentDidUpdate(preProps, preState, height) {
          this.refs.list.scrollTop += this.refs.list.scrollHeight - height;
        }

        render() {
          return (
            <div className="list" ref="list">
              {this.state.newsArr.map((n, index) => {
                return (
                  <div key={index} className="news">
                    {n}
                  </div>
                );
              })}
            </div>
          );
        }
      }
      ReactDOM.render(<NewsList />, document.getElementById("test"));
    </script>
  </body>
</html>
```



## 2.10 虚拟DOM与diffing算法



![image-20210314001936516](https://i.loli.net/2021/03/14/5TtjC2wVa7Iknx4.png)

### 验证Diffing算法

```js
 <script type="text/babel">
      class Time extends React.Component {
        state = { date: new Date() };

        componentDidMount() {
          setInterval(() => {
            this.setState({
              date: new Date(),
            });
          }, 1000);
        }

        render() {
          return (
            <div>
              <h1>hello</h1>
              <input type="text" />
              <span>
                现在是：{this.state.date.toTimeString()}
                <input type="text" />
              </span>
            </div>
          );
        }
      }

      ReactDOM.render(<Time />, document.getElementById("test"));
</script>
```



### key的作用

```js
<script type="text/babel">
      /*
   经典面试题:
      1). react/vue中的key有什么作用？（key的内部原理是什么？）
      2). 为什么遍历列表时，key最好不要用index?
      
			1. 虚拟DOM中key的作用：
					1). 简单的说: key是虚拟DOM对象的标识, 在更新显示时key起着极其重要的作用。

					2). 详细的说: 当状态中的数据发生变化时，react会根据【新数据】生成【新的虚拟DOM】, 
												随后React进行【新虚拟DOM】与【旧虚拟DOM】的diff比较，比较规则如下：

									a. 旧虚拟DOM中找到了与新虚拟DOM相同的key：
												(1).若虚拟DOM中内容没变, 直接使用之前的真实DOM
												(2).若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM

									b. 旧虚拟DOM中未找到与新虚拟DOM相同的key
												根据数据创建新的真实DOM，随后渲染到到页面
									
			2. 用index作为key可能会引发的问题：
								1. 若对数据进行：逆序添加、逆序删除等破坏顺序操作:
												会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。

								2. 如果结构中还包含输入类的DOM：
												会产生错误DOM更新 ==> 界面有问题。
												
								3. 注意！如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，
									仅用于渲染列表用于展示，使用index作为key是没有问题的。
					
			3. 开发中如何选择key?:
								1.最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值。
								2.如果确定只是简单的展示数据，用index也是可以的。
   */

      /* 
		慢动作回放----使用index索引值作为key

			初始数据：
					{id:1,name:'小张',age:18},
					{id:2,name:'小李',age:19},
			初始的虚拟DOM：
					<li key=0>小张---18<input type="text"/></li>
					<li key=1>小李---19<input type="text"/></li>

			更新后的数据：
					{id:3,name:'小王',age:20},
					{id:1,name:'小张',age:18},
					{id:2,name:'小李',age:19},
			更新数据后的虚拟DOM：
					<li key=0>小王---20<input type="text"/></li>
					<li key=1>小张---18<input type="text"/></li>
					<li key=2>小李---19<input type="text"/></li>

	-----------------------------------------------------------------

	慢动作回放----使用id唯一标识作为key

			初始数据：
					{id:1,name:'小张',age:18},
					{id:2,name:'小李',age:19},
			初始的虚拟DOM：
					<li key=1>小张---18<input type="text"/></li>
					<li key=2>小李---19<input type="text"/></li>

			更新后的数据：
					{id:3,name:'小王',age:20},
					{id:1,name:'小张',age:18},
					{id:2,name:'小李',age:19},
			更新数据后的虚拟DOM：
					<li key=3>小王---20<input type="text"/></li>
					<li key=1>小张---18<input type="text"/></li>
					<li key=2>小李---19<input type="text"/></li>


	 */
      class Person extends React.Component {
        state = {
          persons: [
            { id: 1, name: "小张", age: 18 },
            { id: 2, name: "小李", age: 19 },
          ],
        };

        add = () => {
          const { persons } = this.state;
          const p = { id: persons.length + 1, name: "小王", age: 20 };
          this.setState({ persons: [p, ...persons] });
        };

        render() {
          return (
            <div>
              <h2>展示人员信息</h2>
              <button onClick={this.add}>添加一个小王</button>
              <h3>使用index（索引值）作为key</h3>
              <ul>
                {this.state.persons.map((personObj, index) => {
                  return (
                    <li key={index}>
                      {personObj.name}---{personObj.age}
                      <input type="text" />
                    </li>
                  );
                })}
              </ul>
              <hr />
              <hr />
              <h3>使用id（数据的唯一标识）作为key</h3>
              <ul>
                {this.state.persons.map((personObj) => {
                  return (
                    <li key={personObj.id}>
                      {personObj.name}---{personObj.age}
                      <input type="text" />
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        }
      }

      ReactDOM.render(<Person />, document.getElementById("test"));
  </script>
```



## 2.11 购物车案例



**format.js**

```js
function formatPrice(price) {
  if (typeof price !== "number") {
    price = Number(price) || 0;
  }

  return "¥" + price.toFixed(2);
}
```



```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <style>
      table {
        border: 1px solid #eee;
        border-collapse: collapse;
      }

      th,
      td {
        border: 1px solid #eee;
        padding: 10px 16px;
        text-align: center;
      }

      th {
        background-color: #ccc;
      }

      .count{
        margin: 0 5px;
      }
    </style>
  </head>
  <body>
    <div id="app"></div>

    <script src="../react/react.development.js"></script>
    <script src="../react/react-dom.development.js"></script>
    <script src="../react/babel.min.js"></script>

    <script src="./format-utils.js"></script>
    <script type="text/babel">
      class App extends React.Component {
        state = {
          books: [
            {
              id: 1,
              name: "《算法导论》",
              date: "2006-9",
              price: 85.0,
              count: 2,
            },
            {
              id: 2,
              name: "《UNIX编程艺术》",
              date: "2006-2",
              price: 59.0,
              count: 1,
            },
            {
              id: 3,
              name: "《编程珠玑》",
              date: "2008-10",
              price: 39.0,
              count: 1,
            },
            {
              id: 4,
              name: "《代码大全》",
              date: "2006-3",
              price: 128.0,
              count: 1,
            },
          ],
        };

        renderBook() {
          return (
            <div>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>书籍名称</th>
                    <th>出版日期</th>
                    <th>价格</th>
                    <th>购买数量</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.books.map((item, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.date}</td>
                        <td>{item.price}</td>
                        <td>
                          <button onClick={() => this.changeCount(index, -1)}>
                            -
                          </button>
                          <span className="count">{item.count}</span>
                          <button onClick={() => this.changeCount(index, 1)}>
                            +
                          </button>
                        </td>
                        <td onClick={(e) => this.removeBook(e, index)}>
                          移除
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <h2>总价格{this.totoalPrice()}</h2>
            </div>
          );
        }

        renderEmptyBook() {
          return <h2>购物车已被清空</h2>;
        }

        render() {
          return this.state.books.length
            ? this.renderBook()
            : this.renderEmptyBook();
        }

        totoalPrice() {
          const total = this.state.books.reduce((preVal, item) => {
            return preVal + item.count * item.price;
          }, 0);

          return formatPrice(total);
        }

        removeBook(e, index) {
          const changeBook = this.state.books.filter(
            (item, indey) => index !== indey
          );

          this.setState({
            books: changeBook,
          });
        }

        changeCount(index, count) {
          const newBookArr = [...this.state.books];

          newBookArr[index].count += count;

          if (newBookArr[index].count <= 0) newBookArr[index].count = 0;

          this.setState({
            books: newBookArr,
          });
        }
      }

      ReactDOM.render(<App />, document.getElementById("app"));
    </script>
  </body>
</html>

```



# 3.React应用（基于React脚手架）



## 3.1 脚手架介绍

-  xxx脚手架: 用来帮助程序员快速创建一个基于xxx库的模板项目
  - 包含了所有需要的配置（语法检查、jsx编译、devServer…）
  - 下载好了所有相关的依赖
  - 可以直接运行一个简单效果
- react提供了一个用于创建react项目的脚手架库: create-react-app
- 项目的整体技术架构为:  react + webpack + es6 + eslint
- 使用脚手架开发的项目的特点: 模块化 , 组件化 ,  工程化



## 3.2 创建项目并启动

- 第一步，全局安装：npm i -g create-react-app
- 第二步，切换到想创项目的目录，使用命令：create-react-app hello-react
- 第三步，进入项目文件夹：cd hello-react
- 启动项目：npm start



![img](https://docimg4.docs.qq.com/image/-NuKs4ZNb24FgGip-QDcjg?w=1252&h=644)

### **node包管理工具yarn**

- Yarn是由Facebook、Google、Exponent和Tilde 联合推出了一个新的JS包管理工具
- Yarn是为了弥补nom的—此缺陷而出现的
- React脚手架默认也是使用yarn 

![image-20210316162429346](https://i.loli.net/2021/03/16/sAbpC3VZIcghdqJ.png)



![image-20210316161708791](https://i.loli.net/2021/03/16/FITrtOL9pPMqEge.png)

> public ---- 静态资源文件夹
>
> ​		favicon.icon ------ 网站页签图标
>
> ​		**index.html------- 主页面**
>
> ​		logo192.png ------- logo图
>
> ​		logo512.png ------- logo图
>
> ​		manifest.json ----- 应用加壳的配置文件
>
> ​		robots.txt -------- 爬虫协议文件
>
> src ---- 源码文件夹
>
> ​		App.css -------- App组件的样式
>
> ​		**App.js ------ App组件**
>
> ​		App.test.js ------ 用于给App做测试
>
> ​		index.css ------ 样式
>
> ​		**index.js ------ 入口文件**
>
> ​		logo.svg ------- logo图
>
> ​		reportWebVitals.js
>
> ​			--- 页面性能分析文件(需要web-vitals库的支持)
>
> ​		setupTests.js
>
> ​			---- 组件单元测试的文件(需要jest-dom库的支持)





### **public文件夹介绍**

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <!-- %PUBLIC_URL%代表public文件夹的路径 -->
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <!-- 开启理想视口，用于做移动端网页的适配 -->
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <!-- 用于配置浏览器页签+地址栏的颜色(仅支持安卓手机浏览器) -->
        <meta name="theme-color" content="red" />
        <meta
              name="description"
              content="Web site created using create-react-app"
              />
        <!-- 用于指定网页添加到手机主屏幕后的图标 -->
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <!-- 应用加壳时的配置文件 -->
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>React App</title>
    </head>
    <body>
        <!-- 若浏览器不支持js则展示标签中的内容 -->
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
    </body>
</html>
```



## 3.3 组件模块化

### 样式模块化

![img](https://docimg10.docs.qq.com/image/G01Fy-gPfnDwrTjC5YwFtQ?w=1315&h=696)

### 插件安装

rcc rfc 第二个插件



![img](https://docimg10.docs.qq.com/image/I2mJRti3PKdGNX7GpFZa7w?w=650&h=449)

### **拆分组件步骤**

1. 拆分组件: 拆分界面,抽取组件

2. 实现静态组件: 使用组件实现静态页面效果

3. 实现动态组件

   3.1 动态显示初始化数据

   ​	3.1.1 数据类型

   ​	3.1.2 数据名称

   ​	3.1.2 保存在哪个组件?

   3.2 交互(从绑定事件监听开始)



## 3.4 组件的组合使用TodoList

1. 拆分组件、实现静态组件，注意：className、style的写法
2. 动态初始化列表，如何确定将数据放在哪个组件的state中？
   			——某个组件使用：放在其自身的state中
      			——某些组件使用：放在他们共同的父组件state中（官方称此操作为：状态提升）
3. 关于父子之间通信：
   		1.【父组件】给【子组件】传递数据：通过props传递
      		2.【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数
4. 注意defaultChecked 和 checked的区别，类似的还有：defaultValue 和 value
5. 状态在哪里，操作状态的方法就在哪里



# 4.React-ajax



- React本身只关注于界面, 并不包含发送ajax请求的代码
- 前端应用需要通过ajax请求与后台进行交互(json数据)
- react应用中需要集成第三方ajax库(或自己封装)



## 4.1 常用的ajax请求库

1. jQuery: 比较重, 如果需要另外引入不建议使用
2.  axios: 轻量级, 建议使用 https://github.com/axios/axios
   1. 封装XmlHttpRequest对象的ajax
   2. promise风格
   3. 可以用在浏览器端和node服务器端



安装

![img](https://docimg1.docs.qq.com/image/jSgCQFlTZmuFue7HHyMMdw?w=938&h=223)

## 4.2 配置代理



### 代理原理

![img](https://docimg4.docs.qq.com/image/4NZMRR4S5ynz9jpUB8Hezw?w=1007&h=641)



### 配置代理方式

- 第一种代理到服务器的5000端口,前端端口是3000,请求时候http://localhost:3000/students 所有3000端口下没有的资源都会转发到http://localhost:5000,如果有则不转发



![img](https://docimg4.docs.qq.com/image/ShSkEnt_N7IpJFpqqFi_Sg?w=790&h=320)





- 第二种配置多个代理

![img](https://docimg9.docs.qq.com/image/IDKa1w1Oo-pEAF0523rBLw?w=1028&h=734)





![img](https://docimg2.docs.qq.com/image/ptCPngmwFvTP5Dbvr2yHYw?w=1219&h=635)





![img](https://docimg4.docs.qq.com/image/dih7SXlhJDwiKhZEq_1F7A?w=1638&h=921)

**但是如果后端配置了cors则可以不用设置代理都能够跨域访问**







## 4.3 github搜索案例

### 相关知识点

```js
1.设计状态时要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办。
2.ES6小知识点：解构赋值+重命名
let obj = {a:{b:1}}
const {a} = obj; //传统解构赋值
const {a:{b}} = obj; //连续解构赋值
const {a:{b:value}} = obj; //连续解构赋值+重命名
3.消息订阅与发布机制
1.先订阅，再发布（理解：有一种隔空对话的感觉）
2.适用于任意组件间通信
3.要在组件的componentWillUnmount中取消订阅
4.fetch发送请求（关注分离的设计思想）
try {
    const response= await fetch(`/api1/search/users2?q=${keyWord}`)
    const data = await response.json()
    console.log(data);
} catch (error) {
    console.log('请求出错',error);
}
```



![img](https://docimg9.docs.qq.com/image/AyGFuWoGsYmTJcOji4h_fA?w=721&h=370)



### 消息订阅-发布机制



1. 工具库: PubSubJS

2. 下载: npm install pubsub-js --save

3.  使用:

   1. import PubSub from 'pubsub-js' //引入xx
   2. PubSub.subscribe('delete', function(_,data){ }); //订阅
   3. PubSub.publish('delete', data) //发布消息

   

   



![img](https://docimg10.docs.qq.com/image/ueFm71oH3JfLf-fOGDrfHA?w=813&h=824)



![img](https://docimg5.docs.qq.com/image/4b6abfaMY96uu0ogJOL7Ow?w=1437&h=796)





### 扩展Fetch-Promise

#### 文档

1. https://github.github.io/fetch/
2. https://segmentfault.com/a/1190000003810652



#### 特点

1. fetch: 原生函数，不再使用XmlHttpRequest对象提交ajax请求
2. 老版本浏览器可能不支持



![img](https://docimg6.docs.qq.com/image/J3cN0vV_6xfU9wk8kHZ3pQ?w=1004&h=1005)





![image-20210319213210761](https://i.loli.net/2021/03/19/EagwLXRpyxziY4v.png)





![image-20210319213243340](https://i.loli.net/2021/03/19/TQvGgei4CjYq6ZV.png)





![image-20210319213409462](https://i.loli.net/2021/03/19/948tESDidoNxZ2m.png)

### 相关API

1. GET请求

   ```js
   fetch(url).then(function(response) {
       return response.json()
   }).then(function(data) {
       console.log(data)
   }).catch(function(e) {
       console.log(e)
   });
   ```

2. POST请求

   ```js
   fetch(url, {
       method: "POST",
       body: JSON.stringify(data),
   }).then(function(data) {
       console.log(data)
   }).catch(function(e) {
       console.log(e)
   })
   ```

   



# 5.React路由



## 5.1 SPA的理解



1. 单页Web应用（single  page  application，SPA)
2. 整个应用只有**一个完整的页面**
3. 点击页面中的链接**不会刷新**页面，只会做页面的**局部更新**
4.  数据都需要通过ajax请求获取, 并在前端异步展现。





### 路由的理解

### 什么是路由

![image-20210319221109463](https://i.loli.net/2021/03/19/svzFgMNQ7fY6Z94.png)



![img](https://docimg9.docs.qq.com/image/sb3KjTHfMt_ya39nwRMU8w?w=981&h=653)







![img](https://docimg4.docs.qq.com/image/KYw8PqQGOZK8T1F6bl7B3A?w=795&h=572)





![img](https://docimg8.docs.qq.com/image/3866neFuDKE7xsF0S7pyag?w=818&h=444)

##  5.2 react-router-dom

1.  react的一个插件库。
2. 专门用来实现一个SPA应用。
3. 基于react的项目基本都会用到此库。









### 安装

![img](https://docimg2.docs.qq.com/image/j9htvEMjm5XG_A_uWKxF2Q?w=595&h=147)





### 相关API

1. \<BrowserRouter>
2.  \<HashRouter>
3. \<Route>
4. \<Redirect>
5. \<Link>
6. \<NavLink>
7. \<Switch>



**其他**

1. history对象
2. match对象
3. withRouter函数





## 5.3 路由的基本使用



1. 明确好界面中的导航区、展示区
2. 导航区的a标签改为Link标签  \<Link to="/xxxxx">Demo\</Link>
3. 展示区写Route标签进行路径的匹配    \<Route path='/xxxx' component={Demo}/>
4. \<App>的最外侧包裹了一个\<BrowserRouter>或\<HashRouter>





#### 注册路由并包裹BrowserRouter





![img](https://docimg10.docs.qq.com/image/btzvGKlcWMiIVn7R7UBLzA?w=815&h=612)



![img](https://docimg10.docs.qq.com/image/TeFn6wxvjpT9MmtUSZyMmQ?w=947&h=495)



![image-20210320141628680](https://i.loli.net/2021/03/20/hneZ4gOmpJtyvE2.png)











![img](https://docimg6.docs.qq.com/image/h1k9fC1SUF-tg6-Up3qyCg?w=1093&h=356)





#### 路由组件和普通组件区别

```js
			1.写法不同：
						一般组件：<Demo/>
						路由组件：<Route path="/demo" component={Demo}/>
			2.存放位置不同：
						一般组件：components
						路由组件：pages
			3.接收到的props不同：
						一般组件：写组件标签时传递了什么，就能收到什么
						路由组件：接收到三个固定的属性
                        history:
                            go: ƒ go(n)
                            goBack: ƒ goBack()
                            goForward: ƒ goForward()
                            push: ƒ push(path, state)
                            replace: ƒ replace(path, state)
						location:
                            pathname: "/about"
                            search: ""
                            state: undefined
                        match:
                            params: {}
                            path: "/about"
                            url: "/about"
```





#### NavLink

![image-20210320142352311](https://i.loli.net/2021/03/20/gfDwXmEWNHnQOzi.png)





#### 封装NavLink组件

![image-20210320143011447](https://i.loli.net/2021/03/20/McO8pwot4znBaNX.png)

<img src="https://i.loli.net/2021/03/20/J2wCUcNWBYXAyz1.png" alt="image-20210320143101840" style="zoom:150%;" />

![img](https://docimg7.docs.qq.com/image/gJb6qFCXBAtM2l3RHYLBBg?w=1263&h=267)

#### Switch

![img](https://docimg4.docs.qq.com/image/_Ttmciqh3f3mmid3ET4oQw?w=943&h=585)



![image-20210320143705899](https://i.loli.net/2021/03/20/MuogJeDk5mjwcKl.png)





#### **解决多级路径刷新页面样式丢失的问题**

```js
1.public/index.html 中 引入样式时不写 ./ 写 / （常用）
2.public/index.html 中 引入样式时不写 ./ 写 %PUBLIC_URL% （常用）
3.使用HashRouter
```



#### 路由的严格匹配与模糊匹配

```js
1.默认使用的是模糊匹配（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致）
2.开启严格匹配：<Route exact={true} path="/about" component={About}/>
3.严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由
```





![image-20210320165340643](https://i.loli.net/2021/03/20/qEDzxWbN7BaLGC8.png)







#### **Redirect的使用**  

```js
1.一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
				2.具体编码：
						<Switch>
							<Route path="/about" component={About}/>
							<Route path="/home" component={Home}/>
							<Redirect to="/about"/>
						</Switch>
```

![image-20210320194351686](https://i.loli.net/2021/03/20/icTbd9tjMLOCBle.png)







## 5.4 嵌套路由的使用

```js
1.注册子路由时要写上父路由的path值
2.路由的匹配是按照注册路由的顺序进行的
```



## 5.5 向路由组件传递参数

### 1.params参数

- 路由链接(携带参数)：<Link to='/demo/test/tom/18'}>详情\</Link>
- 注册路由(声明接收)：\<Route path="/demo/test/:name/:age" component={Test}/>
- 接收参数：this.props.match.params



![image-20210321205021826](https://i.loli.net/2021/03/21/ZvMCdG6UBw9HksP.png)



![image-20210321205101541](https://i.loli.net/2021/03/21/pxIGPE2CAVUiYRL.png)







### 2.search参数

- 路由链接(携带参数)：<Link to='/demo/test?name=tom&age=18'}>详情</Link>
-  注册路由(无需声明，正常注册即可)：\<Route path="/demo/test" component={Test}/>
- 接收参数：this.props.location.search
- 备注：获取到的search是urlencoded编码字符串，需要借助querystring解析

  

![image-20210321220319716](https://i.loli.net/2021/03/21/jpeBA5Ix28chZrC.png)          

​           ![image-20210321220410429](https://i.loli.net/2021/03/21/b7ABm5Dhcx8lptT.png)

​              

### 3.state参数

- 路由链接(携带参数)：<Link to={{pathname:'/demo/test',state:{name:'tom',age:18}}}>详情\</Link>

- 注册路由(无需声明，正常注册即可)：\<Route path="/demo/test" component={Test}/>

- 接收参数：this.props.location.state

- 备注：刷新也可以保留住参数

  ​          

  ​           

![image-20210321220503675](https://i.loli.net/2021/03/21/EFQqMrhYR97leyn.png)

![image-20210321220527861](https://i.loli.net/2021/03/21/tfBMnQ63sAkH1Rd.png)





## 5.6 多种路由跳转方式



### push和replace模式

**默认是push可以回退**

![image-20210321222601798](https://i.loli.net/2021/03/21/ETVPOH1avDWhNmp.png)



![img](https://docimg4.docs.qq.com/image/6a-_aATXZoPAvAuLQgA4Bg?w=841&h=541)



### 编程式路由导航

- 借助this.prosp.history对象上的API对操作路由跳转、前进、后退

  ​              -this.prosp.history.push()

  ​              -this.prosp.history.replace()

  ​              -this.prosp.history.goBack()

  ​              -this.prosp.history.goForward()

  ​              -this.prosp.history.go()

![image-20210321230248932](https://i.loli.net/2021/03/21/1B2L489UXuhGFyl.png)



![image-20210321230409370](https://i.loli.net/2021/03/21/VhiR8QG9luByvms.png)



### withRouter的使用



![image-20210322125414956](https://i.loli.net/2021/03/22/JuHo78Ddc5Y4PwA.png)



### BrowserRouter与HashRouter的区别

1.底层原理不一样：

​            BrowserRouter使用的是H5的history API，不兼容IE9及以下版本。

​            HashRouter使用的是URL的哈希值。

​      2.path表现形式不一样

​            BrowserRouter的路径中没有#,例如：localhost:3000/demo/test

​            HashRouter的路径包含#,例如：localhost:3000/#/demo/test

​      3.刷新后对路由state参数的影响

​            (1).BrowserRouter没有任何影响，因为state保存在history对象中。

​            (2).HashRouter刷新后会导致路由state参数的丢失！！！

​      4.备注：HashRouter可以用于解决一些路径错误相关的问题。





# 6.React UI组件库



## 6.1 流行的开源React UI组件库



### material-ui(国外)

1. 官网: [http://www.material-ui.com/#/](#/)

2. github: https://github.com/callemall/material-ui



### ant-design(国内蚂蚁金服)

1. 官网: https://ant.design/index-cn
2. Github: https://github.com/ant-design/ant-design/



## 6.2 antd基本使用

![image-20210322150256524](https://i.loli.net/2021/03/22/SogIQcqxzu13kth.png)





## 6.3 antd的按需引入+自定主题

```js
1.安装依赖：yarn add react-app-rewired customize-cra babel-plugin-import less less-loader
			2.修改package.json
					....
						"scripts": {
							"start": "react-app-rewired start",
							"build": "react-app-rewired build",
							"test": "react-app-rewired test",
							"eject": "react-scripts eject"
						},
					....
			3.根目录下创建config-overrides.js
					//配置具体的修改规则
					const { override, fixBabelImports, addLessLoader} = require('customize-cra');
					module.exports = override(
						fixBabelImports('import', {
							libraryName: 'antd',
							libraryDirectory: 'es',
							style: true,
						}),
						addLessLoader({
							lessOptions:{
								javascriptEnabled: true,
								modifyVars: { '@primary-color': 'green' },
							}
						}),
					);
				4.备注：不用在组件里亲自引入样式了，即：import 'antd/dist/antd.css'应该删掉
```



# 7.redux



## 7.1 redux理解

### 学习文档

1. 英文文档: https://redux.js.org/

2. 中文文档: http://www.redux.org.cn/
3. Github: https://github.com/reactjs/redux



### redux是什么

1. redux是一个专门用于做**状态管理**的JS库(不是react插件库)
2. 它可以用在react, angular, vue等项目中, 但基本与react配合使用
3. 作用: 集中式管理react应用中多个组件**共享**的状态





### 什么情况下需要使用redux



1. 某个组件的状态，需要让其他组件可以随时拿到（共享）
2.  一个组件需要改变另一个组件的状态（通信）
3. 总体原则：能不用就不用, 如果不用比较吃力才考虑使用





### redux工作流程



![image-20210322154921164](https://i.loli.net/2021/03/22/hsiGtNIbM5AmSn8.png)





## 7.2 redux的三个核心概念



### action

1. 动作的对象

2. 包含2个属性

​       type：标识属性, 值为字符串, 唯一, 必要属性

​        data：数据属性, 值类型任意, 可选属性

3. 例子：{ type: 'ADD_STUDENT',data:{name: 'tom',age:18} }



### reducer

1. 用于初始化状态、加工状态

2. 加工时，根据旧的state和action， 产生新的state的**纯函数**





### store

1. 将state、action、reducer联系在一起的对象

2. 如何得到此对象?

   ​		1) import {createStore} from 'redux'

   ​		2) import reducer from './reducers'

   ​		3) const store = createStore(reducer)

3. 此对象的功能?

   ​		1) getState(): 得到state

   ​		2) dispatch(action): 分发action, 触发reducer调用, 产生新的state

   ​		3) subscribe(listener): 注册监听, 当产生了新的state时, 自动调用



## 7.3 redux的核心API

### createstore()

- 作用：创建包含指定reducer的store对象



### Store对象

- 作用: redux库最核心的管理对象
- 它内部维护着:
  -  state
  - reducer
- 核心方法:
  - getState()
  - dispatch(action)
  - subscribe(listener)
- 具体编码:
  - store.getState()
  - store.dispatch({type:'INCREMENT', number})
  - store.subscribe(render)



### applyMiddleware()

- 作用：应用上基于redux的中间件(插件库)



###  combineReducers()

- 作用：合并多个reducer函数



## 7.4 Redux求和案例

### 精简版

```js
	(1).去除Count组件自身的状态
	(2).src下建立:
        -redux
            -store.js
            -count_reducer.js

	(3).store.js：
        1).引入redux中的createStore函数，创建一个store
        2).createStore调用时要传入一个为其服务的reducer
        3).记得暴露store对象

    (4).count_reducer.js：
         1).reducer的本质是一个函数，接收：preState,action，返回加工后的状态
         2).reducer有两个作用：初始化状态，加工状态
          3).reducer被第一次调用时，是store自动触发的，
            传递的preState是undefined,
                传递的action是:{type:'@@REDUX/INIT_a.2.b.4}

    (5).在index.js中监测store中状态的改变，一旦发生改变重新渲染<App/>
        备注：redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写。
```

![image-20210322163833769](https://i.loli.net/2021/03/22/wa86tIeSW3rb5Fu.png)



![image-20210322164217035](https://i.loli.net/2021/03/22/2aSAHJksQDTdzUL.png)

![image-20210322164254124](https://i.loli.net/2021/03/22/RES5HJvFrCiO1jI.png)

```js
import React, { Component } from "react";
//引入store，用于获取redux中保存状态
import store from "../../redux/store";
//引入actionCreator，专门用于创建action对象

export default class Count extends Component {
	componentDidMount() {
		//检测redux中状态的变化，只要变化，就调用render
		store.subscribe(() => {
			console.log(1);
		})
	}

  //加法
  increment = () => {
    const { value } = this.selectNumber;

    store.dispatch({type:"increment", data:Number(value)});
  };
  //减法
  decrement = () => {
    const { value } = this.selectNumber;

	store.dispatch({type:"decrement", data:Number(value)});
  };
  //奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber;

	const count = store.getState();

    if (count % 2 !== 0) {
		store.dispatch({type:"increment", data:Number(value)});
    }
  };
  //异步加
  incrementAsync = () => {
    const { value } = this.selectNumber;
    setTimeout(() => {
		store.dispatch({type:"increment", data:Number(value)});
	}, 500);
  };

  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    );
  }
}
```



### 完整版

```js
	新增文件：
			1.count_action.js 专门用于创建action对象
			2.constant.js 放置容易写错的type值
```

![image-20210322193709679](https://i.loli.net/2021/03/22/ZkrW7cLedI5sOyf.png)





![image-20210322193722529](https://i.loli.net/2021/03/22/ZI6QdJEmRxKCNcy.png)



![image-20210322193743329](https://i.loli.net/2021/03/22/BSJj1cNChbAd45o.png)





![image-20210322193753947](https://i.loli.net/2021/03/22/7jnuSgW2EoFU35p.png)





![image-20210322204759095](https://i.loli.net/2021/03/22/ij2tho94SQJGOv7.png)



### 异步action

(1).明确：延迟的动作不想交给组件自身，想交给action

(2).何时需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回。

 (3).具体编码：

​          1).yarn add redux-thunk，并配置在store中

​          2).创建action的函数不再返回一般对象，而是一个函数，该函数中写异步任务。

​          3).异步任务有结果后，分发一个同步的action去真正操作数据。

(4).备注：异步action不是必须要写的，完全可以自己等待异步任务的结果了再去分发同步action。



![image-20210322205003037](https://i.loli.net/2021/03/22/NkW7eD1sJPxa38S.png)





![image-20210322205044513](https://i.loli.net/2021/03/22/9BeuqfT2DgsY8M7.png)

![image-20210322205109762](https://i.loli.net/2021/03/22/shjG38aozK9xUr1.png)







# 8.React-redux



## 8.1 基本使用



```js
	(1).明确两个概念：
			1).UI组件:不能使用任何redux的api，只负责页面的呈现、交互等。
			2).容器组件：负责和redux通信，将结果交给UI组件。
	(2).如何创建一个容器组件————靠react-redux 的 connect函数
							connect(mapStateToProps,mapDispatchToProps)(UI组件)
								-mapStateToProps:映射状态，返回值是一个对象
								-mapDispatchToProps:映射操作状态的方法，返回值是一个对象
	(3).备注1：容器组件中的store是靠props传进去的，而不是在容器组件中直接引入
	(4).备注2：mapDispatchToProps，也可以是一个对象
```



![img](https://docimg8.docs.qq.com/image/yiFIFdkfT8GoVu16SCe_pA?w=1439&h=868)



![image-20210322210411434](https://i.loli.net/2021/03/22/nFPvixeSYBIUrlb.png)



**容器组件**

![image-20210322224122570](https://i.loli.net/2021/03/22/zIpjAcfauHZr75U.png)





**UI组件**

![image-20210322224230799](https://i.loli.net/2021/03/23/DslGdC26Yyn3OiU.png)







## 8.2 优化

```js
			(1).容器组件和UI组件整合一个文件
			(2).无需自己给容器组件传递store，给<App/>包裹一个<Provider store={store}>即可。
			(3).使用了react-redux后也不用再自己检测redux中状态的改变了，容器组件可以自动完成这个工作。
			(4).mapDispatchToProps也可以简单的写成一个对象
			(5).一个组件要和redux“打交道”要经过哪几步？
						(1).定义好UI组件---不暴露
						(2).引入connect生成一个容器组件，并暴露，写法如下：
								connect(
									state => ({key:value}), //映射状态
									{key:xxxxxAction} //映射操作状态的方法
								)(UI组件)
						(3).在UI组件中通过this.props.xxxxxxx读取和操作状态
```



### mapDispatchToProps的简写

![image-20210323144530606](https://i.loli.net/2021/03/23/cHTmaoWbNqJRx8Q.png)





### Provider组件的使用



![image-20210323145157177](https://i.loli.net/2021/03/23/KHMzPqtlRW6eL2p.png)



### 整合UI组件和容器组件

```js
import React, { Component } from 'react'
//引入action
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction
} from '../../redux/count_action'
//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

//定义UI组件
class Count extends Component {

	state = {carName:'奔驰c63'}

	//加法
	increment = ()=>{
		const {value} = this.selectNumber
		this.props.jia(value*1)
	}
	//减法
	decrement = ()=>{
		const {value} = this.selectNumber
		this.props.jian(value*1)
	}
	//奇数再加
	incrementIfOdd = ()=>{
		const {value} = this.selectNumber
		if(this.props.count % 2 !== 0){
			this.props.jia(value*1)
		}
	}
	//异步加
	incrementAsync = ()=>{
		const {value} = this.selectNumber
		this.props.jiaAsync(value*1,500)
	}

	render() {
		//console.log('UI组件接收到的props是',this.props);
		return (
			<div>
				<h1>当前求和为：{this.props.count}</h1>
				<select ref={c => this.selectNumber = c}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
				<button onClick={this.incrementAsync}>异步加</button>&nbsp;
			</div>
		)
	}
}

//使用connect()()创建并暴露一个Count的容器组件
export default connect(
	state => ({count:state}),

	//mapDispatchToProps的一般写法
	/* dispatch => ({
		jia:number => dispatch(createIncrementAction(number)),
		jian:number => dispatch(createDecrementAction(number)),
		jiaAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time)),
	}) */

	//mapDispatchToProps的简写
	{
		jia:createIncrementAction,
		jian:createDecrementAction,
		jiaAsync:createIncrementAsyncAction,
	}
)(Count)
```





## 8.3 数据共享

```js
(1).定义一个Pserson组件，和Count组件通过redux共享数据。
			(2).为Person组件编写：reducer、action，配置constant常量。
			(3).重点：Person的reducer和Count的Reducer要使用combineReducers进行合并，
					合并后的总状态是一个对象！！！
			(4).交给store的是总reducer，最后注意在组件中取出状态的时候，记得“取到位”。


(1).所有变量名字要规范，尽量触发对象的简写形式。
(2).reducers文件夹中，编写index.js专门用于汇总并暴露所有的reducer
```



### 整合多个reducer





![img](https://docimg6.docs.qq.com/image/Q6PQIm9X_aWarw-iMo65pA?w=1256&h=895)





### 组件redux数据共享



![image-20210323155217180](https://i.loli.net/2021/03/23/JLDNaYgX321h6kK.png)



### 纯函数





![img](https://docimg2.docs.qq.com/image/YMFRoKviumLi1M3cNK1znQ?w=864&h=886)



## 8.4 redux开发者工具

1. 安装工具Redux DevTools
2. 安装插件 yarn add redux-devtools-extension
3. 引入redux-devtools-extension并修改createStore方法



```js
(1).yarn add redux-devtools-extension
			(2).store中进行配置
					import {composeWithDevTools} from 'redux-devtools-extension'
					const store = createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
```

![img](https://docimg10.docs.qq.com/image/Rq9baetu5qmBd8p_7eKxYQ?w=1650&h=748)



![img](https://docimg10.docs.qq.com/image/_fht_hqIAzdRwqsjn5iHYg?w=1825&h=546)





## 8.5 部署运行



![img](https://docimg2.docs.qq.com/image/2KwiE7_DeQEx0eqmNo4OfA?w=965&h=389)



![img](https://docimg2.docs.qq.com/image/1xgQiBie7H1iSVAHqLPrJQ?w=495&h=256)

- 借助serve指定文件夹为服务器
- 全局安装serve
- npm i serve -g



![img](https://docimg10.docs.qq.com/image/K3bEFV9GLIYoKM3-ta-pmg?w=940&h=376)



![img](https://docimg1.docs.qq.com/image/BKhgHjIwmzrFysLqhXfC2g?w=1122&h=967)







![img](https://docimg9.docs.qq.com/image/goaeQXI_93Nkv20fXDOUZA?w=1225&h=735)







# 9.拓展



## 1. setState

### setState更新状态的2种写法

```
	(1). setState(stateChange, [callback])------对象式的setState
            1.stateChange为状态改变对象(该对象可以体现出状态的更改)
            2.callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用
					
	(2). setState(updater, [callback])------函数式的setState
            1.updater为返回stateChange对象的函数。
            2.updater可以接收到state和props。
            4.callback是可选的回调函数, 它在状态更新、界面也更新后(render调用后)才被调用。
总结:
		1.对象式的setState是函数式的setState的简写方式(语法糖)
		2.使用原则：
				(1).如果新状态不依赖于原状态 ===> 使用对象方式
				(2).如果新状态依赖于原状态 ===> 使用函数方式
				(3).如果需要在setState()执行后获取最新的状态数据, 
					要在第二个callback函数中读取
```



------



![img](https://docimg8.docs.qq.com/image/O10mUL7zm2xQmlocnch-sA?w=840&h=352)







------



## 2. lazyLoad

### 路由组件的lazyLoad

```js
	//1.通过React的lazy函数配合import()函数动态加载路由组件 ===> 路由组件代码会被分开打包
	const Login = lazy(()=>import('@/pages/Login'))
	
	//2.通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面
	<Suspense fallback={<h1>loading.....</h1>}>
        <Switch>
            <Route path="/xxx" component={Xxxx}/>
            <Redirect to="/login"/>
        </Switch>
    </Suspense>
```



![img](https://docimg5.docs.qq.com/image/QBQ4FD2zWYkRaKgrclFnig?w=1529&h=716)







![img](https://docimg8.docs.qq.com/image/mc3VbROHmefb0jXagt0vvw?w=1097&h=432)





**写成懒加载组件**

![img](https://docimg6.docs.qq.com/image/clMLO4sgL64ZMpsy7xgYxw?w=827&h=348)







------



## 3. Hooks

#### 1. React Hook/Hooks是什么?

```
(1). Hook是React 16.8.0版本增加的新特性/新语法
(2). 可以让你在函数组件中使用 state 以及其他的 React 特性
```

#### 2. 三个常用的Hook

```
(1). State Hook: React.useState()
(2). Effect Hook: React.useEffect()
(3). Ref Hook: React.useRef()
```

#### 3. State Hook

```
(1). State Hook让函数组件也可以有state状态, 并进行状态数据的读写操作
(2). 语法: const [xxx, setXxx] = React.useState(initValue)  
(3). useState()说明:
        参数: 第一次初始化指定的值在内部作缓存
        返回值: 包含2个元素的数组, 第1个为内部当前状态值, 第2个为更新状态值的函数
(4). setXxx()2种写法:
        setXxx(newValue): 参数为非函数值, 直接指定新的状态值, 内部用其覆盖原来的状态值
        setXxx(value => newValue): 参数为函数, 接收原本的状态值, 返回新的状态值, 内部用其覆盖原来的状态值
```



![img](https://docimg7.docs.qq.com/image/w0UY0vgUaNT-lYuQnNCvHQ?w=1479&h=812)



![img](https://docimg9.docs.qq.com/image/Af_zXaKjEY5rKoK3bFFbtA?w=1535&h=963)







#### 4. Effect Hook

```
(1). Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
(2). React中的副作用操作:
        发ajax请求数据获取
        设置订阅 / 启动定时器
        手动更改真实DOM
(3). 语法和说明: 
        useEffect(() => { 
          // 在此可以执行任何带副作用操作
          return () => { // 在组件卸载前执行
            // 在此做一些收尾工作, 比如清除定时器/取消订阅等
          }
        }, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行
    
(4). 可以把 useEffect Hook 看做如下三个函数的组合
        componentDidMount()
        componentDidUpdate()
    	componentWillUnmount() 
```

![image-20210323201402616](https://i.loli.net/2021/03/23/dQjXYHsWtCybuge.png)



#### 5. Ref Hook

```
(1). Ref Hook可以在函数组件中存储/查找组件内的标签或任意其它数据
(2). 语法: const refContainer = useRef()
(3). 作用:保存标签对象,功能与React.createRef()一样
```



------



## 4. Fragment

### 使用

	<Fragment><Fragment>
	<></>

### 作用

> 可以不用必须有一个真实的DOM根标签了



<hr/>

## 5. Context

### 理解

> 一种组件间通信方式, 常用于【祖组件】与【后代组件】间通信

### 使用

```js
1) 创建Context容器对象：
	const XxxContext = React.createContext()  
	
2) 渲染子组时，外面包裹xxxContext.Provider, 通过value属性给后代组件传递数据：
	<xxxContext.Provider value={数据}>
		子组件
    </xxxContext.Provider>
    
3) 后代组件读取数据：

	//第一种方式:仅适用于类组件 
	  static contextType = xxxContext  // 声明接收context
	  this.context // 读取context中的value数据
	  
	//第二种方式: 函数组件与类组件都可以
	  <xxxContext.Consumer>
	    {
	      value => ( // value就是context中的value数据
	        要显示的内容
	      )
	    }
	  </xxxContext.Consumer>
```

### 注意

	在应用开发中一般不用context, 一般都用它的封装react插件



<hr/>


## 6. 组件优化

### Component的2个问题 

> 1. 只要执行setState(),即使不改变状态数据, 组件也会重新render() ==> 效率低
>
> 2. 只当前组件重新render(), 就会自动重新render子组件，纵使子组件没有用到父组件的任何数据 ==> 效率低

### 效率高的做法

>  只有当组件的state或props数据发生改变时才重新render()

### 原因

>  Component中的shouldComponentUpdate()总是返回true

### 解决

	办法1: 
		重写shouldComponentUpdate()方法
		比较新旧state或props数据, 如果有变化才返回true, 如果没有返回false
	办法2:  
		使用PureComponent
		PureComponent重写了shouldComponentUpdate(), 只有state或props数据有变化才返回true
		注意: 
			只是进行state和props数据的浅比较, 如果只是数据对象内部数据变了, 返回false  
			不要直接修改state数据, 而是要产生新数据
	项目中一般使用PureComponent来优化



<hr/>


## 7. render props

### 如何向组件内部动态传入带内容的结构(标签)?

	Vue中: 
		使用slot技术, 也就是通过组件标签体传入结构  <A><B/></A>
	React中:
		使用children props: 通过组件标签体传入结构
		使用render props: 通过组件标签属性传入结构,而且可以携带数据，一般用render函数属性

### children props

	<A>
	  <B>xxxx</B>
	</A>
	{this.props.children}
	问题: 如果B组件需要A组件内的数据, ==> 做不到 

### render props

	<A render={(data) => <C data={data}></C>} />
	A组件: {this.props.render(内部state数据)}
	C组件: 读取A组件传入的数据显示 {this.props.data} 



<hr/>

## 8. 错误边界

#### 理解：

错误边界(Error boundary)：用来捕获后代组件错误，渲染出备用页面

#### 特点：

只能捕获后代组件生命周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误

##### 使用方式：

getDerivedStateFromError配合componentDidCatch

```js
// 生命周期函数，一旦后台组件报错，就会触发
static getDerivedStateFromError(error) {
    console.log(error);
    // 在render之前触发
    // 返回新的state
    return {
        hasError: true,
    };
}

componentDidCatch(error, info) {
    // 统计页面的错误。发送请求发送到后台去
    console.log(error, info);
}
```

## 9. 组件通信方式总结

#### 组件间的关系：

- 父子组件
- 兄弟组件（非嵌套组件）
- 祖孙组件（跨级组件）

#### 几种通信方式：

		1.props：
			(1).children props
			(2).render props
		2.消息订阅-发布：
			pubs-sub、event等等
		3.集中式管理：
			redux、dva等等
		4.conText:
			生产者-消费者模式

#### 比较好的搭配方式：

		父子组件：props
		兄弟组件：消息订阅-发布、集中式管理
		祖孙组件(跨级组件)：消息订阅-发布、集中式管理、conText(开发用的少，封装插件用的多)

