---
    title: Node 版本管理器 - NVM
    date: 2022-03-10
    tags:
     - node
     - nvm
---

<Boxx/>

## 什么是nvm
nvm全称`Node Version Manager`，是 Nodejs 的版本管理器。由于有些老项目使用了较低版本的nodejs，版本之间的兼容性问题又不能让你轻易升级，而新的项目又需要使用新的版本，这就需要一个方便进行Nodejs版本切换的工具，这即是`nvm`的工作（类似的工具还有[n](https://github.com/tj/n)，这里只介绍nvm）。

nvm的[官方版本](https://github.com/nvm-sh/nvm)只支持Linux和 Mac。 Windows用户，可以用[nvm-windows](https://github.com/coreybutler/nvm-windows)。（这里只介绍 nvm-windows，Linux和Max请查看官方文档安装教程）

在使用nvm安装node之前，请确保之前安装的nodejs已卸载，以免冲突。

## 下载

下载地址：<https://github.com/coreybutler/nvm-windows/releases>，本次下载安装的是windows版本。打开网址我们可以看到有两个版本：
- nvm-noinstall.zip：绿色免安装版，但使用时需进行配置
- nvm-setup.zip：安装版，推荐使用

## 安装

选择 `nvm-setup.zip` 下载完成后进行安装，建议安装到一个特定的目录中，后续所有其他开发工具也会安装到此目录中，这里我安装到 `D:\Development\nvm`

安装成功后，可以设置一下node和npm的安装源，换成淘宝的要快一些（可选）：
```shell script
nvm npm_mirror https://npm.taobao.org/mirrors/npm/
nvm node_mirror http://npm.taobao.org/mirrors/node/
```

也可以自己在安装目录下的settings.txt文件中修改：
```shell script
root: D:\Development\nvm                         # 设置nvm目录
path: D:\Development\nodejs                      # 设置nodejs安装目录
arch: 64                                         # 64位或者32位
proxy: none                                      # 代理
node_mirror: http://npm.taobao.org/mirrors/node/ # 安装node使用的镜像源，设置成淘宝的比较快
npm_mirror: https://npm.taobao.org/mirrors/npm/  # 安装npm使用的镜像源，设置成淘宝的比较快
```

## 环境变量

设置环境变量，正常情况下会在环境变量的系统变量中，生成两个环境变量：
- `NVM_HOME`：`D:\Development\nvm`
- `NVM_SYMLINK`：`D:\Development\nodejs`

然后在Path中确保引用了这两个环境变量，如 `%NVM_HOME%`和 `%NVM_SYMLINK%`

在终端输入命令：`nvm version` 或者 `nvm` ，查看当前nvm的版本信息。如果正常显示版本号，说明安装成功，否则需要检查以上安装配置是否正确。

```shell script
$ nvm

Running version 1.1.7.

Usage:

  nvm arch                     : Show if node is running in 32 or 64 bit mode.
  nvm install <version> [arch] : The version can be a node.js version or "latest" for the latest stable version.
                                 Optionally specify whether to install the 32 or 64 bit version (defaults to system arch).
                                 Set [arch] to "all" to install 32 AND 64 bit versions.
                                 Add --insecure to the end of this command to bypass SSL validation of the remote download server.
  nvm list [available]         : List the node.js installations. Type "available" at the end to see what can be installed. Aliased as ls.
  nvm on                       : Enable node.js version management.
  nvm off                      : Disable node.js version management.
  nvm proxy [url]              : Set a proxy to use for downloads. Leave [url] blank to see the current proxy.
                                 Set [url] to "none" to remove the proxy.
  nvm node_mirror [url]        : Set the node mirror. Defaults to https://nodejs.org/dist/. Leave [url] blank to use default url.
  nvm npm_mirror [url]         : Set the npm mirror. Defaults to https://github.com/npm/cli/archive/. Leave [url] blank to default url.
  nvm uninstall <version>      : The version must be a specific version.
  nvm use [version] [arch]     : Switch to use the specified version. Optionally specify 32/64bit architecture.
                                 nvm use <arch> will continue using the selected version, but switch to 32/64 bit mode.
  nvm root [path]              : Set the directory where nvm should store different versions of node.js.
                                 If <path> is not set, the current root will be displayed.
  nvm version                  : Displays the current running version of nvm for Windows. Aliased as v.

```

如果是Mac用户的话，比较简单，直接使用 [Homebrew](https://brew.sh/index_zh-cn) 进行安装就好，也可以参考[官方文档](https://github.com/nvm-sh/nvm)进行安装。

**注意**：在mac上全局安装的包是在每个node版本的文件夹下（官方的说法是为了保证全局包和node版本的兼容性），所以使用nvm安装了新的版本会导致原来的全局包不可用。如果想将原来的全局包重新在新版本中安装一次，可以使用以下命令：

```shell script
# 加上 --reinstall-packages-from=current
nvm install latest --reinstall-packages-from=current
```

## 管理 NodeJs

1. 查看本地安装的所有版本；有可选参数available，显示所有可下载的版本。
    ```shell script
    nvm list [available]
    ```

1. 安装，命令中的版本号可自定义，具体参考命令1查询出来的列表
    ```shell script
    nvm install 11.13.0
    ```

1. 使用特定版本
    ```shell script
    nvm use 11.13.0
    ```

1. 卸载
    ```shell script
    nvm uninstall 11.13.0
    ```

## 配置 NPM

用 `nvm` 安装了 `nodejs`，那么同时也会安装 `npm`。如果希望 `npm` 安装的全局包也放在 `D:\Development` 下，可以使用以下命令设置：
```shell script
npm config set prefix "D:\Development\npm"               ## 设置全局模块安装目录
npm config set registry https://registry.npm.taobao.org  ## 设置镜像为淘宝
npm config set cache "D:\Development\npm_cache"          ## 设置缓存目录，默认会在C盘，可以修改到其他盘
```

可以查看用户目录下的 `.npmrc` 文件是否包含如下内容，确认是否设置成功。
```shell script
prefix=D:\Development\npm
registry=https://registry.npm.taobao.org
```

另外，需要在系统环境变量配置 `NPM_HOME`，变量值为 `D:\Development\npm`，然后在Path中引用该变量 `;%NPM_HOME%;` ,需要确保放在 `%NVM_SYMLINK%` 前面。

此时，如果安装一个全局模块，就会被安装到上面设置的目录中了。

## 命令提示

1. `nvm arch` ：显示node是运行在32位还是64位。
1. `nvm install <version> [arch]` ：安装node， version是特定版本也可以是最新稳定版本latest。可选参数arch指定安装32位还是64位版本，默认是系统位数。可以添加--insecure绕过远程服务器的SSL。
1. `nvm list [available]` ：显示已安装的列表。可选参数available，显示可安装的所有版本。list可简化为ls。
1. `nvm on` ：开启node.js版本管理。
1. `nvm off` ：关闭node.js版本管理。
1. `nvm proxy [url]` ：设置下载代理。不加可选参数url，显示当前代理。将url设置为none则移除代理。
1. `nvm node_mirror [url]` ：设置node镜像。默认是https://nodejs.org/dist/。如果不写url，则使用默认url。设置后可至安装目录settings.txt文件查看，也可直接在该文件操作。
1. `nvm npm_mirror [url]` ：设置npm镜像。https://github.com/npm/cli/archive/。如果不写url，则使用默认url。设置后可至安装目录settings.txt文件查看，也可直接在该文件操作。
1. `nvm uninstall <version>` ：卸载指定版本node。
1. `nvm use [version] [arch]` ：使用制定版本node。可指定32/64位。
1. `nvm root [path]` ：设置存储不同版本node的目录。如果未设置，默认使用当前目录。
1. `nvm version` ：显示nvm版本。version可简化为v。

