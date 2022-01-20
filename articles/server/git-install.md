---
    title: Git 服务器搭建
    date: 2021-01-19
    tags:
     - git
---

<Boxx/>

## 系统环境

- 操作系统：Ubuntu Server 20.04 LTS 64bit
- git版本：2.25.1


## 安装 Git

```shell script
# 使用 apt-get 安装
lighthouse@VM-0-5-ubuntu:~$ sudo apt-get install git

# 查看版本
lighthouse@VM-0-5-ubuntu:~$ git --version
git version 2.25.1
```

## 创建用户

```shell script
# 查看已创建的用户列表
cat /etc/passwd|grep -v nologin|grep -v halt|grep -v shutdown|awk -F":" '{ print $1"|"$3"|"$4 }'|more
# 返回的结果
root|0|0
sync|4|65534
tss|106|111
pollinate|110|1
ubuntu|1000|1000
lxd|998|100
lighthouse|1001|1001

# 创建用户并创建此用户的文件夹，若仅需创建用户，请使用 useradd
sudo adduser 用户名
#... 按照提示配置姓名、邮箱、密码等即可

# 删除用户
sudo userdel 用户名
```

## 创建仓库

::: tip
注意：`git init --bare`用于初始化服务器仓库，`git init`用于初始化本地仓库
:::
```shell script
# 进入home文件夹
cd /home
# 创建仓库文件夹
sudo mkdir project.git
# 初始化仓库
git init --bare project.git
```

## 本地使用

```shell script
# 同步本地仓库，之后输入密码即可
git clone Git用户名@服务器IP地址:/home/project.git
```

## 使用hook实现自动部署

1. 进入hooks文件夹

    ```shell script
    cd /home/project.git/hooks
    ```

1. 创建`post-update`或者`post-receive`

    ```shell script
    # 创建并编辑
    sudo vim post-update
    ```

1. 编辑`post-update`

    按`I`进入编辑，`Esc`退出编辑，退出编辑后输入`:wq`保存并退出文件编辑
    
    ```shell script
    #!/bin/sh
    # 项目名
    PROJECT_NAME=project
    # 打包后的包名
    PROJECT_DIST=dist
    # 项目路径，临时存放git的代码路径和仓库地址
    PROJECT_DIR=/home/$PROJECT_NAME
    # 存放打包后的包文件路径
    PACKAGE_DIR=/home/html/$PROJECT_NAME
    
    
    if [ -d $PROJECT_DIR ]; then
            rm -rf $PROJECT_DIR;
    fi
    mkdir $PROJECT_DIR
    chmod -R 777 $PROJECT_DIR
    
    if [ -d $PACKAGE_DIR ]; then
            rm -rf $PACKAGE_DIR
    fi
    
    cd $PROJECT_DIR
    unset GIT_DIR # 必须重置，否则无法进入文件夹
    
    git init
    git remote add origin $PROJECT_DIR.git
    git pull origin master
    
    # 安装依赖，并打包，将打包文件放入nginx配置的路径中
    npm install
    npm run build
    mv $PROJECT_DIST $PACKAGE_DIR
    
    cd $PACKAGE_DIR
    unset GIT_DIR
    
    rm -rf $PROJECT_NAME
    ```

1. 修改`post-update`权限（赋予执行权限）
    
    ```shell script
    sudo chmod +x post-update
    ```

1. 完成之后，本地往服务器推送(`push`)代码，即可触发`post-update`文件内的命令
