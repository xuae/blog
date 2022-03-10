---
    title: NPM 源管理器 - NRM
    date: 2022-03-10
    tags:
     - npm
     - nrm
---

<Boxx/>

## 什么是nrm
`nrm` (npm registry manager) 是一个 `npm` 源管理器，允许你快速地在 `npm` 源间切换。

什么意思呢，npm 默认情况下是使用 npm 官方源（使用 `npm config ls` 命令可以查看），在国内用这个源肯定是不靠谱的，一般我们都会用淘宝 npm 源：<https://registry.npm.taobao.org/>，修改源的方式也很简单，在终端输入：

```shell script
npm set registry https://registry.npm.taobao.org/
```

再 `npm config ls` 查看，已经切换成功。

那么，问题来了，如果哪天你又跑去国外了，淘宝源肯定是用不了的，又要切换回官网源，或者哪天你们公司有自己的私有npm源了，又需要切换成公司的源，这样岂不很麻烦？于是有了nrm。

## nrm 安装

```shell script
npm install -g nrm
```

## nrm 使用

### 查看可选源（带*号即为当前使用源）
```shell script
$ nrm ls

  npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
* taobao - https://registry.npm.taobao.org/
  nj ----- https://registry.nodejitsu.com/
  npmMirror  https://skimdb.npmjs.com/registry/
  edunpm - http://registry.enpmjs.org/
  npmall - https://repo.ctbiyi.com/repository/npmall/
```
   
### 查看当前使用源
```shell script
$ nrm current
taobao
```

### 切换源
```shell script
nrm use <registry>
```

其中，registry为源名。

比如：切换为taobao源

```shell script
$ nrm use taobao

   Registry has been set to: https://registry.npm.taobao.org/

```

### 添加源
```shell script
nrm add <registry> <url>
```

其中，registry为源名，url为源地址。

比如：添加一个公司私有的npm源，源地址为：http://192.168.22.11:8888/repository/npm-public/，源名为cpm（随意取）。

```shell script
$ nrm add cpm http://192.168.22.11:8888/repository/npm-public/

    add registry cpm success

```

### 删除源
```shell script
nrm del <registry>
```

其中，registry为源名。

比如：删除刚才添加的cpm源

```shell script
$ nrm del cpm
[..................] - :
    delete registry cpm success

```

### 测试源速度（即响应时间）
```shell script
nrm test <registry>
```

其中，registry为源名。

比如：测试官方源和淘宝源的响应时间

```shell script
$ nrm test npm

  npm ---- 1005ms

$ nrm test taobao

* taobao - 496ms

```
