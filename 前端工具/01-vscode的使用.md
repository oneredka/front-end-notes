## 前言

- VS Code 软件实在是太酷、太好用了，越来越多的新生代互联网青年正在使用它。
- 前端男神**尤雨溪**大大这样评价 VS Code：

![](https://raw.githubusercontent.com/xixixiaoyu/cloundImg/main/img/20210815003838.png)

有一点你可能会感到惊讶：VS Code 这款软件本身，是用 JavaScript 语言编写的（具体请自行查阅基于 JS 的 PC 客户端开发框架 `Electron`）。Jeff Atwood 在 2007 年提出了著名的 Atwood 定律：

> **任何能够用 JavaScript 实现的应用系统，最终都必将用 JavaScript 实现**。

Jeff Atwood 这个人是谁不重要（他是 Stack Overflow 网站的联合创始人），重要的是这条定律。

前端目前是处在春秋战国时代，各路英雄豪杰成为后浪，各种框架工具层出不穷，VS Code 软件无疑是大前端时代最骄傲的工具。

## IDE

> IDE (Integrated Development Environment，**集成开发环境**）是含代码编辑、关键词高亮、智能感应、智能纠错、格式美化、版本管理等功能于一身的“**高级代码编辑器**”

**每个IT工程师都要有自己趁手的IDE，它是我们的武器**

但是要知道无论使用什么IDE编写出来的代码，本质上都是底黑字”的，都是“纯文字”的

前端最常用的 IDE 有 [Webstorm](https://link.juejin.im/?target=https%3A%2F%2Fwww.jetbrains.com%2Fwebstorm%2F)、[Sublime](https://link.juejin.im/?target=https%3A%2F%2Fwww.sublimetext.com%2F)、[Atom](https://link.juejin.im/?target=https%3A%2F%2Fatom.io%2F) 和 [VSCode](https://link.juejin.im/?target=https%3A%2F%2Fcode.visualstudio.com%2F)和 [HBuider](https://www.dcloud.io/hbuilderx.html)  我们可以分别去它们的官网看一下。

![image-20201229205522651](https://i.loli.net/2020/12/29/V4svfA7xYr2cytP.png)

**Webstorm 是最强大的收费编辑器**，因为它拥有各种强大的插件和功能.

Sublime 同样非常好用，第一它免费，第二它轻量、高效，第三它插件非常多。

Atom 是 GitHub 出品的编辑器,免费并且插件丰富，而且跟 Sublime 相比风格上还有些小清新。

**VSCode 是我日常使用编辑器** 微软出品的轻量级（相对于 Visual Studio 来说）编辑器

- 如果你要走大牛、大咖、逼格的路线，就用 Webstorm
- 如果你走普通、屌丝、低调路线，就用 Sublime
- 如果你走小清新、个性路线，就用 VSCode 或者 Atom
- 如果你面试，最好有一个用的熟悉，其他都会一点

如果你是做前端开发（JavaScript 编程语言为主），则完全可以将 VS Code 作为「**主力开发工具**」。这款软件是为前端同学量身定制的。



如果你是做其他语言方向的开发，并且不需要太复杂的集成开发环境，那么，你可以把 VS Code 作为「**代码编辑器**」来使用，纵享丝滑。



甚至是一些写文档、写作的同学，也经常把 VS Code 作为 markdown **写作工具**，毫无违和感。



退而求其次，即便你不属于以上任何范畴，你还可以把 VS Code 当作最简单的**文本编辑器**来使用，完胜 Windows 系统自带的记事本。



写下这篇文章，是顺势而为。



> **最后注意**：千万不要说你使用 Dreamweaver 或者 notepad++ 写前端代码，会被人鄙视的。
>
> 如果你不做 .NET 也不要用 Visual Studio ，不做 Java 也不要用 Eclipse。
>
> Dreamweaver是曾经网页制作的王牌IDE，推崇“**所见即所得**”，用拖拽控件的方式进行网页开发。
>
> 但是近几年，**前端开发技术、形式已经发生了根本性的变化**, Dreamweaver现在不是前端开发工程师的主流选择了。



## Visual Studio Code简介



> Visual Studio Code简称VS Code，来自微软公司
>
> 是一款开源的、免费的、跨平台的、高性能的、轻量级的代码编辑器。它在性能、语言支持、开源社区方面，都做得很不错。
>
> 微软有两种软件：一种是 VS Code，一种是其他软件。

![image-20201229212321868](https://i.loli.net/2020/12/29/VTeFb5C2WL8MuQd.png)



**优点:内置功能非常丰富、插件全且安装简单、轻量、有MAC版本**





### IDE 与 编辑器的对比

IDE 和编辑器是有区别的：

- **IDE**（Integrated Development Environment，集成开发环境）：对代码有较好的智能提示和相互跳转，同时侧重于工程项目，对项目的开发、调试工作有较好的图像化界面的支持，因此比较笨重。比如 Eclipse 的定位就是 IDE。

- **编辑器**：要相对轻量许多，侧重于文本的编辑。比如 Sublime Text 的定位就是编辑器。再比如 Windows 系统自带的「记事本」就是最简单的编辑器。



需要注意的是，VS Code 的定位是**编辑器**，而非 IDE ，但 VS Code 又比一般的编辑器的功能要丰富许多。可以这样理解：VS Code 的体量是介于编辑器和 IDE 之间。



### VS Code 的安装

- VS Code 官网：<https://code.visualstudio.com>

- VS Code 的安装很简单，直接去官网下载安装包，然后双击安装即可

![](https://raw.githubusercontent.com/xixixiaoyu/cloundImg/main/img/20210815004143.png)



### VSCode颜色主题

- vs code提供了不同风格的颜色主题
- 在文件→首选项→颜色主题中，将主题改为Light+ (default light)



### ctrl +鼠标滚轮缩放字号

- 如果能用**ctrl＋鼠标滚轮缩放字号**，会非常方便
- 我们需要进行相关的配置，打开配置中心，搜索“滚动”即可

![image-20201229212710815](https://i.loli.net/2020/12/29/PqO53JoLysVt8um.png)



### vscode推荐插件

- **chinese** 汉化插件
- **open in browser** 右键打开浏览器
- **Live Server** 开启自动刷新功能
- **Prettier** 代码格式化 让代码的展示更加美观
- **vscode-icons** 根据文件的后缀名来显示不同的图标
- **Bracket Pair Colorizer 2** 以不同颜色显示成对的括号，并用连线标注括号范围。简称**彩虹括号**。
- **CSS Peak** 在HTML通过对应标签的名字快速跳转到对应的CSS
- **Image preview** 图片预览
- **Vetur**  vue语法高亮

### 常用快捷键

![image-20201229212742850](https://i.loli.net/2020/12/29/pSZRQHgixhzTNVE.png)

**ctrl+c** 复制

**ctrl+V** 粘贴

**ctrl+s** 保存

**ctrl+x**剪切 也可以用于删除整行

**ctrl+z** 返回上一步

**ctrl+y** 撤销返回上一步

**ctrl + f** 查询/替换内容



**Sublime快捷键扩展**

- Sublime是另外一个非常著名的编辑器，Sublime中的快捷键非常的经典，**而VS Code可以集成Sublime的快捷键**
- 需要安装插件，在插件中心搜索Sublime，安装插件即可

![image-20201229212909821](https://i.loli.net/2020/12/29/tDM72wrqhW6oklO.png)



![image-20201229212930396](https://i.loli.net/2020/12/29/cpWkAjHwRidFybJ.png)

#### 跳转操作

**Cmd +Pagedown/Pageup** 在已经打开的多个文件之间进行 非常实用

**Ctrl + Tab** 在已经打开的多个文件之间进行





#### 移动光标

**方向键** 在单个字符之间移动光标 地球人都知道

**Alt＋鼠标点击任意位** 在任意位置，同时出现光标

**Ctrl + D** 将全文中相同的词逐一加入选择



#### 工作区快捷键

**Cmd +B** 显示/隐藏侧边栏 很实用

**Ctrl + \\** 创建多个编辑器

**Cmd + Shift+N** 重新开一个软件的窗口

**Ctrl + W** 关闭当前文件



#### 其他快捷键

**shift + alt + f** 代码格式化快捷键

**shift + alt + ↓** 向下复制一份 ： 选中要复制的内容 



#### 鼠标操作

在当前行的位置，鼠标三击，可以选中当前行。

用鼠标单击文件的**行号**，可以选中当前行。
