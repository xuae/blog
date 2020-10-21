---
    title: Github
    date: 2020-03-09
    categories:
     - 工具
    tags:
     - github
---

<Boxx/>

## 配置可访问的静态页面

:::tip

使用 `https://账号名.github.io` 或者 `https://账号名.github.io/仓库名` 访问。

:::

1. 新建一个 github 仓库（已有无需创建）。

1. 进入需要发布网站的项目，点击页面右侧 “Settings”，进入设置页面。

1. 在设置页面往下滚动，找到 “Github Pages” 设置项。

    1. `master branch`. // master 分支作为页面访问根路径
    
    1. `master branch / docs folder`. // master 分支根目录下 `docs` 文件夹作为根路径，网站预览地址为 `https://账号名.github.io/仓库名`

        测试项目地址：<https://github.com/xuae/githubio>

    1. `none`. // 不启动 github pages

## 仓库代码自动同步到 Gitee

:::tip

利用 Github Action 实现 Github 仓库自动同步到 Gitee，可手动、自动，可同步所有公开仓库。

:::

详细配置请查看项目地址：<https://github.com/xuae/gitee-repos-mirror>
