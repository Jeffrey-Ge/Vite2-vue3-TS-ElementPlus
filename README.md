# vue3-element-admin

🎉 基于 Vite 2.0 + Vue3.0 + ts + Vue-Router 4.0 + Vuex 4.0 + element-plus 的后台管理系统

## 简介

[vue3-element-admin](http://admin.xueyueob.cn) 是一个后台前端解决方案，它基于 [vue3](https://v3.cn.vuejs.org/guide/migration/introduction.html) 和 [element-plus](https://element-plus.gitee.io/#/zh-CN)实现。使用了最新的前端技术栈 [vite](https://cn.vitejs.dev/)，提供最基础的框架模型，可以帮助你快速搭建中后台产品原型。PS：我是参考 [@PanJiaChen](https://github.com/PanJiaChen) 开发维护的 [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)， 十分感谢大佬对开源社区做出的贡献 :)

## 前序准备

你需要在本地安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。本项目技术栈基于 [typeScript](https://www.tslang.cn/docs/home.html)、[vue3](https://v3.cn.vuejs.org/)、[vuex](https://next.vuex.vuejs.org/)、[vue-router](https://next.router.vuejs.org/) 、[vite](https://cn.vitejs.dev/) 、[axios](https://github.com/axios/axios) 和 [element-plus](https://element-plus.gitee.io/#/zh-CN)，提前了解和学习这些知识会对使用本项目有很大的帮助。

## 开发

```bash
# 克隆项目
git clone https://github.com/au1996/vue3-element-admin.git

# 进入项目目录
cd vue3-element-admin

# 安装依赖
npm install

# 建议修改为 taobao 源解决下载速度慢的问题
npm config set registry https://registry.npm.taobao.org/

# 启动服务
npm run dev
```

## 发布

```bash
# 构建生产环境
npm run build
```

## 其它

```bash
# eslint代码格式检查
npm run lint:js

# stylelint代码样式检查
npm run lint:css
```

## 浏览器支持

本地开发推荐使用`Chrome`浏览器, 在火狐浏览器进行开发相对卡顿。

支持现代浏览器, 不支持 IE

## License
