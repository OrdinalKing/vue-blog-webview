# Best-Blog

## 注意
- 路由使用hash
- 打包完成后修改静态文件路径，分别在index.html-静态文件路径, static/js/manifeset.xx.js-模块路径, static/css/app.xx.css-字体


## 简介
vue-blog-webview 是一个用于React-Native中Webview组件的项目，另有[React版本](https://github.com/bestsamcn/react-blog)和[Angular版本](https://github.com/bestsamcn/angular-blog)。
- 前端使用了vue2全家桶完成，包括了``vue + vue-router + axios + vuex + element-ui``;
- 后端接口利用 ``express + mongodb + redis`` 开发，后端地址[请点我](https://github.com/bestsamcn/node-blog)

## 环境
- node v6
- npm  v4
- vue  v2.3.1

## 开发
- 因为自定义了element-ui主题，先要把根目录的theme文件夹，复制到``/node_modules/element-ui/lib``下
- 请先启动``redis和mongodb``
```
git clone https://github.com/bestsamcn/vue-blog.git

cd vue-blog

npm install

npm run dev

npm run build
```
## 图片
![piture](https://github.com/bestsamcn/vue-blog/blob/master/picture/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png)

## 预览
- 项目总体完成，部分细节有待修改。
- [请点击我](http://blog.bestsamcn.me/)预览vue版本
- [请点击我](http://react.bestsamcn.me/)预览react版本
- [请点击我](http://angular.bestsamcn.me/)预览angular版本
- [请点击我](http://gulp.bestsamcn.me/)预览gulp自动化版本



## 后续
给个星星呗...
