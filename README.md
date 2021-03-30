# 朋友圈
朋友圈是一个基于Taro + Taro UI + Redux + Typescript + Koa开发的微信小程序。本项目实现了朋友圈的基本功能，包括用户的授权和登陆，朋友圈的浏览、发布和删除等。



##### 主要技术

- 使用`@tarojs/cli 3.x`初始化项目
- 使用`Typescript`编写代码，使用`React`框架，使用`Redux` + `React-redux`管理当前用户信息、朋友圈内容等应用状态
- 使用`Taro UI`作为UI组件库，使用`SCSS`编写样式
- 通过`Koa2`框架搭建服务端，使用`koa-router`管理路由，使用`koa2-request`中间件简化请求

- 前端通过 `Taro.login `接口获取用户临时登录凭证 `code `并传至服务端，服务端通过`auth.code2session`接口获取`openid`和`session_key`，最后前端将用户唯一标识和用户信息（昵称、头像等）存入`storage`



### 项目功能&截图

- 用户授权
- 用户登录
- 浏览朋友圈
- 发布朋友圈
- 删除朋友圈

![截图1](https://img-blog.csdnimg.cn/20210330170532890.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0xvcmllbm4=,size_16,color_FFFFFF,t_70#pic_center)
![截图2](https://img-blog.csdnimg.cn/20210330170559955.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0xvcmllbm4=,size_16,color_FFFFFF,t_70#pic_center)
![截图3](https://img-blog.csdnimg.cn/20210330170438795.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0xvcmllbm4=,size_16,color_FFFFFF,t_70#pic_center)



### 快速启动

##### 微信小程序
```javascript
// 1.将项目下载至本地
git clone https://github.com/Lorienn/wechat-moments.git
// 2.安装依赖
cd wechat-moments
npm install
// 3.启动前端项目
npm run dev:weapp
// 4.启动服务端
cd src/server
nodemon index.js
// 5.用微信开发者工具打开dist目录
```



### 项目结构

```
- src
 - pages // 项目页面级组件
 - store // redux初始化文件
 - reducers // redux中的相关同步操作
 - actions // redux中的相关异步操作
 - server // 服务端目录
 - static // 静态资源。包括图片资源
 - utils // 可复用的工具类方法
 - app.tsx // 项目入口文件
 - app.config.ts // 项目全局配置。包括路由配置
 - app.scss // 全局样式
```