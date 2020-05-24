# 项目简介

> bamboo-admin-web是一个后台前端解决方案。它基于vue & Element UI 实现。它使用了最新的前端技术栈，提炼了典型的业务模型，致力于打造一款企业级中后台产品原型。

目前版本为 `v1.0` 基于社区优秀开源项目 [vue-admin-template](https://github.com/PanJiaChen/vue-admin-template) 为基础模板进行构建开发

## 相关项目
- 后端服务器项目：[bamboo-admin](https://github.com/jiefangen/bamboo/tree/master/bamboo-admin) 提供本项目的接口服务

## 功能

## Build Setup

```bash
# 克隆项目
git clone https://github.com/jiefangen/bamboo-web.git

# 进入项目目录
cd bamboo-admin-web

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 [http://localhost:9528](http://localhost:9528)

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```



