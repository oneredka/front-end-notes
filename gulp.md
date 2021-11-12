# Gulp

**是什么**

- 自动化**构建**工具
- 构建:把我们在开发环境写的代码，转换成生产环境的代码
  - ES6 -> ES5
  - Sass -> CSS
  - 文件的压缩、混淆等等





**为什么学**

- Gulp可以帮助我们减少构建过程中的重复劳动

- 降低构建出错概率

- 把精力投入更有意义的事情




**学什么**

- Gulp的使用流程
- 任务
- 文件读写
- 插件
- 文件监控
- Gulp实战





## Gulp入门



### Gulp使用流程

- 安装node和npm
  - https://nodejs.org/en/
  - Gulp依赖于node环境
- 安装gulp-cli命令行工具(全局安装)
  - 换源: npm config set registry https://registry.npm.taobao.org
  - npm install -g gulp-cli@2.3.0
  - gulp -v    查看版本号

- 创建项目目录
- 在项目目录下创建package.json文件
  - npm init
  - 使用默认值创建: npm init -y 
- 安装gulp,作为开发时依赖(本地安装)
  - npm install  gulp@4.0.2 -D
- 在项目目录下创建gulpfile.js文件
- 编写gulp任务
- 在命令行工具中执行编写好的gulp任务
  - gulp task
  - gulp task1 task2 ...





### 编写和执行Gulp任务

- 获取gulp
- 创建任务
- 导出任务
- 
  执行任务
  

