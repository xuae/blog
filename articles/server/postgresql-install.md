---
    title: PostgreSQL 安装
    date: 2021-02-08
    tags:
     - postgresql
---

<Boxx/>

## 系统环境

- 操作系统：Ubuntu Server 20.04 LTS 64bit
- PostgreSQL版本：12.9

## 安装
直接使用命令安装

`postgresql-contrib` 或者说 contrib 包，包含一些不属于 PostgreSQL 核心包的实用工具和功能，最好将 contrib 包与 PostgreSQL 核心一起安装。
```shell script
sudo apt install postgresql postgresql-contrib
```

## 是否安装成功
使用以下命令，检测是否安装成功
```shell script
psql -V
# 正常显示版本号，即安装成功
psql (PostgreSQL) 12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)
```

也可以通过执行以下命令来检查 PostgreSQL 是否正在运行
```shell script
service postgresql status
```

通过 `service` 命令，你可以启动、关闭或重启 `postgresql`。输入 `service postgresql` 并按回车将列出所有选项。

### 启动服务
```shell script
service postgresql start
```

### 关闭服务
```shell script
service postgresql stop
```

### 重启服务
```shell script
service postgresql restart
```

## 配置
默认情况下，`PostgreSQL` 会创建一个拥有所权限的特殊用户 `postgres`。要实际使用 `PostgreSQL`，你必须先登录该账户
```shell script
sudo su postgres
```

你的提示符会更改为类似于以下的内容，使用 `psql` 来启动 PostgreSQL Shell：
```shell script
postgres@VM-0-5-ubuntu:~$ psql
```

你应该会看到如下提示符：
```shell script
postgress=#
```

你可以输入 `\q` 以退出，输入` \?` 获取帮助。

要使用其他用户登录，使用 `\q` 命令退出，然后使用以下命令登录：
```shell script
psql -U user_name
```

使用 `-d` 参数直接连接数据库
```shell script
psql -U user_name -d dbname
```

## 数据库相关命令
输入如下命令:
```shell script
\l

# 输出结果
                                 List of databases
   Name    |  Owner   | Encoding |  Collate   |   Ctype    |   Access privileges   
-----------+----------+----------+------------+------------+-----------------------
 postgres  | postgres | UTF8     | en_US.utf8 | en_US.utf8 | 
 template0 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +
           |          |          |            |            | postgres=CTc/postgres
 template1 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +
           |          |          |            |            | postgres=CTc/postgres
(3 rows)
```

### 创建数据库
使用 `CREATE DATABASE` 命令来创建数据库
```shell script
CREATE DATABASE dbname;
```

## 用户相关命令
使用 `\du` 可查看用户列表
```shell script
\du

# 输出结果
                                   List of roles
 Role name |                         Attributes                         | Member of 
-----------+------------------------------------------------------------+-----------
 postgres  | Superuser, Create role, Create DB, Replication, Bypass RLS | {}
```

### 创建用户

使用 `CREATE USER user_name WITH PASSWORD 'user_password';` 可创建用户和其密码，例如：我需要创建一个 `gitea` 使用的账号，密码是 `gitea@psql`，则使用以下命令
```shell script
CREATE USER gitea WITH PASSWORD 'gitea@psql';
```

### 修改用户密码
```shell script
ALTER USER user_name WITH PASSWORD 'my_password';
```

### 删除用户
```shell script
DROP USER user_name;
```
