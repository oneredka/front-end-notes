## 新建文件时快速生成Html

新建文件，输入`html:5`，按[Ctrl + E] 或者 Tab 键，



## 常用插件

### CSS Format

- css格式化。



### Emmet

- 它能够让你在编辑器中书写CSS和HTML的缩写并且动态地拓展它，是一个能大幅度提高前端开发效率的一个工具。这个软件的安装过程比较久。[官网教程](http://docs.emmet.io/)。



### Javascript Snippets

-  Js语法提示工具




### javascript complet：JavaScript代码自动提示


- [官网链接](https://packagecontrol.io/packages/JavaScript%20Completions)

- [GitHub链接](https://github.com/pichillilorenzo/JavaScript-Completions)

在google上搜关键字"sublime javascript complete"找到的。另外还搜到一个[SublimeAllAutocomp lete](https://github.com/alienhard/SublimeAllAutocomplete)




### JsFormat：JS代码格式化


快捷键是：选中JS代码，然后按ctrl+alt+f。

或者，先用快捷键打开命令面板 “ctrl + shift + p”, 再输入 “Format: Javascript” 就可以使用格式化命令




### Sublime Server

我们如果右键在浏览器中打开html网页，其实是以**文件路径**的方式打开的，导致很多api无法操作。最好的办法是：将html在服务器上打开。

我们如果安装 `Sublime Server`，就可以让网页在本地的服务器上打开。

安装成功之后，使用步骤如下：

（1）选择菜单栏"Tools --> SublimeServer --> Start SublimeServer"启动服务器。

（2）在html文档里，右键选	择 "View in SublimeServer"。

如果想关闭服务器，直接把Sublime Text 整个软件关掉就好。其他的关闭方式容易导致软件卡死。










## sublime text 快捷键

| Win快捷键               | Mac快捷键       | 作用                                                         | 备注                                                         |
| :---------------------- | :-------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| html:5+tab              |                 | html结构代码                                                 |                                                              |
| tab                     |                 | 补全标签代码                                                 |                                                              |
| tab                     | 补全标签代码    |                                                              | 比如，在html文件中输入`div`，然后	按住tab键后，会自动生成`<div></div>`。 |
| **Ctrl + Shift + D**    | Cmd + Shift + D | 复制当前行到下一行                                           |                                                              |
| Ctrl+Shift+K            |                 | 快速删除整行                                                 |                                                              |
| Ctrl+鼠标左键单击       |                 | 集体输入                                                     |                                                              |
| Ctrl+H                  | Option+Cmd+F    | 查找替换                                                     |                                                              |
| Ctrl+/                  |                 | 注释单行                                                     |                                                              |
| Ctrl+Shift+/            |                 | 注释多行                                                     |                                                              |
| Ctrl+L                  |                 | 快速选中整行，继续操作则继续选择下一行，效果和 `Shift + ↓` 效果一样 |                                                              |
| **Ctrl+Shift+L**        |                 | 先选中多行，再按下快捷键，会在每行行尾插入光标，即可同时编辑这些行 | 经常与上一个快捷键结合起来使用                               |
| **Ctrl + Shift +【↑/↓** | Ctrl + Cmd +↑/↓ | 移动当前行                                                   |                                                              |
| F11                     |                 | 全屏                                                         |                                                              |

