# 初始化Vue项目

> 新创建Vue项目，按照以下操作步骤完成即可。
>
> 已有Vue项目，只需配置环境 > 安装依赖包 > 启动服务。

## 配置环境

1. 安装Node.js

    > Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。
    >
    > 安装 Node.js 自带 npm。
    >
    > npm 是 JavaScript 世界的包管理工具，并且是 Node.js 平台的默认包管理工具。通过 npm 可以安装、共享、分发代码，管理项目依赖关系。

    - 进入Node官网 [http://nodejs.cn/](http://nodejs.cn/) 下载安装包。
    - 安装Node。
    - 快捷键win+R进入cmd命令端，运行 `node -v`、`npm -v` 查看Node是否安装完成，安装完成则会显示node、npm的版本号。
1. npm | cnpm

    > 此步骤根据个人需求操作，可有可无。

    - 更新npm至最新版本。
    
        ```
        npm install -g npm
        ```
    - 安装cnpm，cnpm是中国版的npm镜像库 [https://cnpmjs.org/](https://cnpmjs.org/) ，国内速度会快一些。

        ```
        npm install -g cnpm --registry=http://r.cnpmjs.org
        ```

        或者使用淘宝npm镜像。

        ```
        npm install -g cnpm --registry=https://registry.npm.taoba.org
        ```

## vue-cli 搭建项目

> [Vue Cli 2.x 项目搭建步骤](vue-cli-2.md)
>
> [Vue Cli 3.x | 4.x 项目搭建步骤](vue-cli-3-4.md)
>
> Vue Cli 2.x 与 3.x 还是有很大的不同点，我觉得最大的区别在于3.x可以使用界面搭建项目，无需使用命令，具体使用什么版本可查看 [Vue CLi 2.x 与 3.x | 4.x 的区别](vue-cli-2-4.md) 后再决定，我个人更喜欢v4.0的，因为使用v3.11.0的版本创建了五六次新项目，但是只有一次创建成功，最终升级换成v4.0.4，一次性就搭建完成。

## 进入项目文件夹

```
cd 文件名
```

## 安装依赖包

> 若已安装，请忽略。

```
npm install
```
## 启动服务

> 开启测试环境，在浏览器中访问。

```
npm run dev // Vue Cli 3.x 创建的项目使用：npm run serve
```
出现 `Your application is running here: http://localhost:8080` 即启动成功。

浏览器中输入上面提示的网址即可访问。


## 发布项目

> 执行以下命令，将项目打包，把生成的dist文件夹（默认），放到线上服务器中即可访问。

```
npm run build
```
