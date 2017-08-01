# 前端校验小工具

## 目录结构
```
+src    源代码目录
+test   单元测试目录
+dist   发布代码生成目录
```

## 注意事项
* JS统一使用ES6语法

## 第三方库参考文档
* webpack https://webpack.js.org/
* VUE http://vuejs.org/v2/guide/

## 依赖安装
* 安装node
* 安装全局的npm
* 安装工程依赖
```
cd path/to/project
npm install
```

## 打包
* 开发环境
```
webpack-dev-server
```

* 上线打包，代码将生成到dist目录，并且对代码进行压缩混淆、inline等
```
webpack
```
