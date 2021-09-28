---
    title: Laravel Homestead
    date: 2021-08-02
    categories:
     - 工具
    tags:
     - laravel
     - homestead
---

<Boxx/>

Laravel Homestead：[Laravel 8 官方扩展 Homestead 安装文档](https://laravelacademy.org/post/21961)

具体简介请查看官方文档，以下只讲解自己是如何安装和使用此虚拟机的步骤。

- 电脑环境：Win 10
- vagrant box 版本：`11.3.0`
- homestead 版本：`12.3.2`

## 准备工作

::: warning
首次安装需要 Virtual Box、VMWare、Parallels 或 Hyper-V （四选一，我这用的是 VirtualBox，因为只有 VirtualBox 是免费的）
:::

1. 安装 VirtualBox，[官网](https://www.virtualbox.org/wiki/Downloads) 下载最新版本安装。

1. 安装 Vagrant，[官网](https://www.vagrantup.com/) 下载最新版本安装。

1. 下载 homestead vagrant box（近 2G 大小)，直接使用 vagrant 下载很慢，所以我这儿是先把 box 下载下来，然后再绑定到 vagrant 中去的：
    
    - box 官方版本下载链接：<https://app.vagrantup.com/laravel/boxes/homestead>
    
    - 我下载的版本是 [11.3.0](https://vagrantcloud.com/laravel/boxes/homestead/versions/11.3.0/providers/virtualbox.box) ，这里需要注意 box(v11.x) 和 homestead(v12.x) 的[版本对应关系](https://github.com/laravel/homestead) 

1. 下载 homestead：`git clone https://github.com/laravel/homestead.git`，直接使用 `git` 命令下载即即可。
    
### Vagrant 命令

``` shell script
# 初始化
vagrant init

# 启动虚拟机
vagrant up

# 关闭虚拟机
vagrant halt

# 重启虚拟机
vagrant reload

# SSH 至虚拟机
vagrant ssh

# 挂起虚拟机
vagrant suspend

# 唤醒虚拟机
vagrant resume

# 查看虚拟机运行状态
vagrant status

# 销毁当前虚拟机
vagrant destroy

# 销毁虚拟机
vagrant destroy --force

# 查看 box list
vagrant box list

# 添加 box
vagrant box add 名称  路径
vagrant box add json文件

# 删除 box, 例子: vagrant box remove laravel/homestead --box-version 0
vagrant box remove 名称 --box-version 版本
```

## 安装

### 修改默认虚拟电脑位置

打开 Virtual Box -> 管理 -> 全局设定 -> 常规，修改默认虚拟电脑位置（我将其修改在 `D盘`，__位置路径中不能含空格和中文__），要是 `C盘` 容量够大，可以不用改。

### 注入 Vagrant Box

1. 在下载的 homestead vagrant box 同目录下新建 box 的配置文件 `metadata.json`：

    ``` json
    {
        "name": "laravel/homestead",
        "versions":
        [
            {
                "version": "11.3.0",
                "providers": [
                    {
                      "name": "virtualbox",
                      "url": "D:/homestead/homestead_vagrant_box/virtualbox.box"
                    }
                ]
            }
        ]
    }
    ```
    字段说明：
    - `"version"`：你所使用的 Homestead Vagrant Box 虚拟机 的版本。
    - `"url"`：你所使用的 Homestead Vagrant Box 虚拟机 的路径(绝对相对都可)。

1. 在 `metadata.json` 文件夹中，将配置信息注入到 Vagrant 中：

    若之前直接使用 `vagrant box add laravel/homestead D:\homestead\homestead_vagrant_box\virtualbox.box` 此命令注入过 box，但是查看 box 列表时，含有版本为 `0` 的，需要先将其删除，再重新添加（先添加后删除也可），否则执行 `vagrant up` 时，提示 `Box 'laravel/homestead' could not be found` 后，会自动在下载某个东西。
    
    ``` shell script
    # 查看绑定的 vagrant box
    $ vagrant box list
    laravel/homestead (virtualbox, 0)
    
    # 删除版本为 0 的 box（若此版本不是 0 但与 homestead 不对应，也需删除）
    $ vagrant box remove laravel/homestead --box-version 0
    ```
    
    注入版本 `11.3.0` 的 box
    ``` shell script
    # 注入 metadata.json
    $ vagrant box add metadata.json
    ...
    ==> box: Successfully added box 'laravel/homestead' (v11.3.0) for 'virtualbox'!

    $ vagrant box list
    laravel/homestead (virtualbox, 11.3.0)
    ```

### 启动 Vagrant

1. 进入下载好的 `homestead` 项目的文件夹，执行命令（若已初始化，请忽略此步骤）：
    ```
    $ init.bat
    Homestead initialized!
    ```

1. 需要启动 Virtual Box，选择 homestead box 配置其网络，设置 -> 网络 -> 网卡2 -> 连接方式选择 `仅主机(Host-Only)网络`，界面名称选择`Virtual Box Host-Only Ethernet Adapter #2`，不配置的话启动会失败。

1. 初始化 homestead 后，再启动 vagrant：
    ```
    $ vagrant up
    Bringing machine 'homestead' up with 'virtualbox' provider...
    ==> homestead: Checking if box 'laravel/homestead' version '11.3.0' is up to date...
    ==> homestead: Setting the name of the VM: homestead
    ==> homestead: Clearing any previously set network interfaces...
    ==> homestead: Preparing network interfaces based on configuration...
    homestead: Adapter 1: nat
    homestead: Adapter 2: hostonly
    ==> homestead: Forwarding ports...
    ...
    ```
    
    此命令等同于：打开 Virtual Box -> 工具 -> 导入 -> 选择 vagrant 注入 box 后的文件路径：`C:\Users\用户名\.vagrant.d\boxes\laravel-VAGRANTSLASH-homestead\11.3.0\virtualbox\box.ovf`，再点击 `下一步`、`导入` 。

## 配置虚拟机

我们需要做的是，在虚拟机中创建项目，将该项目映射到 windows 的目录中，我们在 windows 环境下写代码，而代码在虚拟机的环境中被做处理，在 windows 环境下访问对应的站点查看运行结果。

### 启动虚拟机
- 打开虚拟机软件 -> 启动（若已启动，则点击显示）-> 输入密码 `vagrant` 即可进入虚拟机。
- 进入下载好的 `homestead` 项目的文件夹 -> 使用命令 `vagrant up` 启动虚拟机。

### 查看虚拟机目录
- 进入虚拟机图形界面点击左上角 Activities -> 打开 ImageMagick -> 单击这个图片 -> file -> open，便可以查看 ubuntu 目录。
- 在 `homestead` 项目的文件夹下执行下面的命令，就可以在 windows 下操作 ubuntu 中的命令行了。
    ``` shell script
    $ vagrant ssh
    ...
    vagrant@homestead:~$ ls               # 输入 ls ：查看当前目录的全部文件
    Desktop  Documents  Downloads  Music  Pictures  Public  Templates  vendor  Videos
    vagrant@homestead:~$ mkdir Projects   # 输入mkdir xx ：新建文件夹
    vagrant@homestead:~$ cd Projects      # 输入cd xx ：进入某个文件
    vagrant@homestead:~/Projects$ cd ..   # 输入cd .. ：返回到上一个目录
    ```

### 项目目录映射
1. 在虚拟机中创建 `Projects` 文件夹用于存放项目映射：通过 `vagrant ssh` 在 windows 下操作虚拟机，`mkdir Projects` 创建文件夹。
1. 在 windows 下创建一个目录存放项目，比如在D盘创建一个 projects 文件夹： D:\projects （虚拟机中的项目的实体就放在这里面了）。
1. 配置映射：打开 windows 下 `homestead` 目录中的 `Homestead.yaml` 文件，修改内容如下：
    ``` editorconfig
    # 此 IP 是用于访问虚拟机的 IP
    ip: "192.168.10.10"
    memory: 2048
    cpus: 2
    provider: virtualbox
    
    authorize: ~/.ssh/id_rsa.pub
    
    keys:
        - ~/.ssh/id_rsa
    
    folders:
        - map: D:\projects                         # windows 下的绝对路径，项目的实体
          to: /home/vagrant/Projects               # 虚拟机中的映射路径
    
    sites:
        - map: 192.168.10.10                       # 该项目的访问地址，即可访问 index.php
          to: /home/vagrant/Projects/demo/public   # 虚拟机中 index.php 的存放目录
    ```
   
1. 检查项目目录是否映射成功：

    每次修改 `Homestead.yaml` 内容，都要重启虚拟机
    ``` shell script
    # 在 homestead 目录下
    $ vagrant reload --provision
    ...
    # 重启成功
    ```
   
   在 windows 中打开浏览器，访问：192.168.10.10，显示了一段字符 ：No input file specified. 就代表映射成功了，因为没有 index.php ，所以就显示这段字符；若失败了，会显示 “无法显示此网页”。

1. 将 ip 地址访问形式改成 url 的形式访问：
    
    打开 `Homestead.yaml` ，修改下面配置，保存后重启虚拟机。
    ``` editorconfig
    ip: "192.168.10.10"
    ...
    sites:
        - map: homestead.test                      # 此访问的 url
          to: /home/vagrant/Projects/demo/public
    ...
    ```
   
    打开 `C:\Windows\System32\drivers\etc\hosts` ，填入：
    ```
    192.168.10.10 homestead.test
    ```
    
    便实现了url 与 ip 地址的映射了，访问 homestead.test 即可成功显示页面。

## 全局访问 Homestead
:::tip
Windows 环境
:::

1. 在系统的任意位置创建一个批处理文件` homestead.bat`：

    脚本中实例路径 `D:\Homestead` 调整为 `Homestead` 实际安装路径。
    ```shell script
    @echo off
    
    set cwd=%cd%
    set homesteadVagrant=D:\Homestead
    
    cd /d %homesteadVagrant% && vagrant %*
    cd /d %cwd%
    
    set cwd=
    set homesteadVagrant=
    ```

1. 创建文件之后，添加该文件所在目录路径到用户环境变量的 `PATH` 键中。

1. 在系统的任意位置即可运行 `homestead up` 或 `homestead ssh` 命令。

## 创建项目

windows环境，在 `homestead` 目录下，执行命令：
``` editorconfig
# 在 homestead 目录下，连接虚拟机
$ vagrant ssh
Welcome to Ubuntu 20.04.2 LTS (GNU/Linux 5.4.0-73-generic x86_64)
 _                               _                 _
| |                             | |               | |
| |__   ___  _ __ ___   ___  ___| |_ ___  __ _  __| |
| '_ \ / _ \| '_ ` _ \ / _ \/ __| __/ _ \/ _` |/ _` |
| | | | (_) | | | | | |  __/\__ \ ||  __/ (_| | (_| |
|_| |_|\___/|_| |_| |_|\___||___/\__\___|\__,_|\__,_|

* Homestead v12.3.1 | Thanks for using Homestead
* Settler v11.3.0

Last login: Mon Aug  2 08:22:58 2021 from 10.0.2.2

# 查看目录
vagrant@homestead:~$ ls
Desktop  Documents  Downloads  Music  Pictures Public  Templates  vendor  Videos

# 创建 Projects 文件夹
vagrant@homestead:~$ mkdir Projects

# 进入 Projects 目录
vagrant@homestead:~$ cd Projects

# 创建一个名为 demo 的 laravel 项目
vagrant@homestead:~/Projects$ laravel new demo
 _                               _
| |                             | |
| |     __ _ _ __ __ ___   _____| |
| |    / _` | '__/ _` \ \ / / _ \ |
| |___| (_| | | | (_| |\ V /  __/ |
|______\__,_|_|  \__,_| \_/ \___|_|

Creating a "laravel/laravel" project at "./demo"
Installing laravel/laravel (v8.5.22)
  - Downloading laravel/laravel (v8.5.22)
  - Installing laravel/laravel (v8.5.22): Extracting archive
Created project in /home/vagrant/Projects/demo
...
Application ready! Build something amazing.
# 创建成功
```

随后访问配置 `Homestead.yaml` 中对应的 index.php 的 IP 即可。

## 新增站点

1. 新增 sites

    ```shell script
    $ vim ~/.homestead/Homestead.yaml
    
    folders:
        - map: D:\Development\homestead\projects
          to: /home/vagrant/Projects
    
    # 在sites中新增一条map记录,修改后配置如下: 
    
    sites:
        ### 默认
        - map: homestead.test
          to: /home/vagrant/Projects/demo/public
        ### 新增一个网站
        - map: another.test
          to: /home/vagrant/Projects/demo2/public
    ```
   
1. 新增 host 记录

    ```shell script
    $ sudo vim /etc/hosts
    
    ### 新增一条host记录，IP是Homestead.yaml中"ip"，修改后如下：
    ### ... (略) ...
    192.168.10.10 homestead.test
    192.168.10.10 another.test
    ```

1. 重启虚拟机

    进入`homestead`文件夹目录：
    ```shell script
    vagrant reload --provision
    ```

1. 打开浏览器，输入`http://another.test/`, 即可正常访问。

## 连接 Homestead 数据库

### MySql

:::tip
地址：192.168.10.10，端口：3306

用户名：homestead，密码：secret
:::

- 使用客户端连接：

    配置连接，输入地址、端口、用户、密码即可。

- 使用命令登录虚拟机：

    先启动虚拟机，并用ssh连接，执行以下操作：
    ```shell script
    # 连接 mysql 数据库
    vagrant@homestead:~$ mysql -h192.168.10.10 -uhomestead -p
    # 输入密码
    Enter password:
    Welcome to the MySQL monitor.  Commands end with ; or \g.
    Your MySQL connection id is 9
    Server version: 8.0.25-0ubuntu0.20.04.1 (Ubuntu)
    
    Copyright (c) 2000, 2021, Oracle and/or its affiliates.
    
    Oracle is a registered trademark of Oracle Corporation and/or its
    affiliates. Other names may be trademarks of their respective
    owners.
    
    Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

    # 显示全部数据库
    mysql> show databases;
    +--------------------+
    | Database           |
    +--------------------+
    | homestead          |
    | information_schema |
    | mysql              |
    | performance_schema |
    | sys                |
    +--------------------+
    5 rows in set (0.00 sec)
    ```

### PostgreSQL

:::tip
地址：192.168.10.10，端口：3306

用户名：homestead，密码：secret
:::

- 使用客户端连接：

    配置连接，输入地址、端口、用户、密码即可。

- 使用命令连接：

    先启动虚拟机，并用ssh连接，执行以下操作：
    ```shell script
    # 连接 postgresql 数据库
    vagrant@homestead:~$ psql -U homestead -h localhost -W
    # 输入密码
    Password:
    psql (13.3 (Ubuntu 13.3-1.pgdg20.04+1))
    SSL connection (protocol: TLSv1.3, cipher: TLS_AES_256_GCM_SHA384, bits: 256, compression: off)
    Type "help" for help.
    
    # 显示全部数据库
    homestead=# \list
                                      List of databases
       Name    |   Owner   | Encoding |   Collate   |    Ctype    |   Access privileges
    -----------+-----------+----------+-------------+-------------+-----------------------
     homestead | homestead | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
     postgres  | postgres  | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
     template0 | postgres  | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/postgres          +
               |           |          |             |             | postgres=CTc/postgres
     template1 | postgres  | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/postgres          +
               |           |          |             |             | postgres=CTc/postgres
    (4 rows)
    ```

:::warning
__注意：__ 若无法使用`IP(192.168.10.10)`连接`PostgreSQL`数据库，需做以下操作：
:::

1. 查看`PostgreSQL`版本：

    ```shell script
    vagrant@homestead:$ psql -V
    psql (PostgreSQL) 13.3 (Ubuntu 13.3-1.pgdg20.04+1)
    ```
   
1. 根据版本进入需要配置的目录，我这里版本是`13.3`，所以进入的文件目录是`13`

    ```shell script
    # 进入配置文件夹
    vagrant@homestead:~$ cd /etc/postgresql/13/main/
    # 查看全部文件及其权限
    vagrant@homestead:/etc/postgresql/13/main$ ll
    # 省略其他...
    -rw-r----- 1 postgres postgres  5071 Sep 28 08:05 pg_hba.conf
    -rw-r--r-- 1 postgres postgres 28281 May 13 16:40 postgresql.conf
    ```
   
    需要 `postgresql.conf` 和 `pg_hba.conf` 文件的独写权限：
    ```shell script
    # 记得修改文件权限
    # 设置其他用户可独写 pg_hba.conf 文件
    vagrant@homestead:/etc/postgresql/13/main$ sudo chmod o+rw pg_hba.conf
    # 设置其他用户可独写 pg_hba.conf 文件
    vagrant@homestead:/etc/postgresql/13/main$ sudo chmod o+w postgresql.conf
    # 权限配置完成之后是这样的
    vagrant@homestead:/etc/postgresql/13/main$ ll
    # 省略其他...
    -rw-r--rw- 1 postgres postgres  5071 Sep 28 08:05 pg_hba.conf
    -rw-r--rw- 1 postgres postgres 28281 May 13 16:40 postgresql.conf
    ```

1. `postgresql.conf`配置项改为`listen_address='*'`：
    
    ```shell script
    # 使用上下键可以查看配置项
    # 按"I"键，可进行编辑
    # 编辑完成后按"Esc"退出编辑
    # 退出编辑后，按"Shift" + ":"，然后输入命令即可："wq"(保存并退出)、"q"(仅退出)
    vagrant@homestead:/etc/postgresql/13/main$ vim postgresql.conf
    ```

1. 配置`pg_hba.conf`：
    
    在此文件最下面一行加：
    ```editorconfig
    # IPv4 local connections 允许所有ip连接:
    host all all 0.0.0.0/0 trust
    ```
    编辑文件：
    ```shell script
    # 使用上下键可以查看配置项
    # 按"I"键，可进行编辑
    # 编辑完成后按"Esc"退出编辑
    # 退出编辑后，按"Shift" + ":"，然后输入命令即可："wq"(保存并退出)、"q"(仅退出)
    vagrant@homestead:/etc/postgresql/13/main$ vim pg_hba.conf
    ```

1. 重启`PostgreSql`服务：
    ```
    # 重启 PostgreSql 服务
    sudo service postgresql restart
    ```

1. 重新按照上面连接的命令执行即可使用IP连接
