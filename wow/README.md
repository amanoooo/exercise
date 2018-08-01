##开发环境运行
one photo gallery project based on react
####根据慕课网 “React实战-打造画廊应用” 课程完成
因为前端工具改版太大，加上React也全面升级为ES6，所以踩过不少坑<br>
进入项目目录后command：
```
 npm install
 npm start
```
点击我：[源码地址](https://github.com/jiajiajiaga/generator/) 

预览：[wow-gallery](http://120.24.238.120/wow-gallery/index.html) 

##打包及发布
```
  npm run dist
```
入口就是dist目录里面的index<br>
如果遇到图片404，就把根目录cfg目录中的default.js中的publicPath改成'assets/'重新打包<br>
如果刚打开index.html就404，就把index.html中的script改成src="assets/app.js"> <br>
如有问题，欢迎打扰扣扣1060996790<br>
##相关目录说明
* src/: 本项目开发代码所在目录
  * index.html: 经Yeoman构建的入口文件
  * index.js：引入相关依赖
  * styles/：存放本项目样式表文件
    * App.scss 本项目相关样式表文件
  * images/: 存放本项目图片
  * data/:
    * imageDatas.json: 存放本项目图片src、alt等相关信息
  * components/：
    * Main.js: 项目核心组件所在目录
* dist/ :经webpack打包后的项目文件
  * index.html：打包后的项目入口文件
* cfg/: 存放webpack开发环境和生产环境的配置文件。
  * base.js
  * defaults.js：webpack开发环境配置文件
  * dev.js：
  * dist.js：webpack生产环境配置文件
* test.js: webpack测试代码配置文件
* test/: 测试代码所在目录
* .editorconfig：用于统一不同的编辑器/IDE的编码风格。
* .eslintrc：代码风格检测工具，用于约束es/js/jsx的写法。
* .yo-rc.json：Yeoman的配置文件。
* package.json：node项目的配置文件。
* karma.conf.js: karma测试框架的配置文件。
* node_modules/: 存放基于node的相关依赖包
