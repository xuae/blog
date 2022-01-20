---
    title: SSH 相关
    date: 2020-03-14
    tags:
     - ssh
---

<Boxx/>

## 生成 ssh key

::: warning
注意：这里的 `xxxxx@xxxxx.com` 只是生成的 ssh key 的名称，并不约束或要求具体命名为某个邮箱

现网的大部分教程均讲解的使用邮箱生成，其一开始的初衷仅仅是为了便于辨识所以使用了邮箱
:::

按照提示完成三次回车，即可生成 ssh key。通过查看 `~/.ssh/id_rsa.pub` 文件内容，获取到你的 public key，然后将此 key 添加到 github、gitee、gitlab 即可
```
ssh-keygen -t rsa -C "xxxxx@xxxxx.com"
```

## 同一电脑多个 ssh key

同一电脑需要多个 `key` 时，需添加配置文件，在 `~/.ssh` 文件夹中添加 `config` 文件，存放 `key` 的文件不一样，需单独存放

``` editorconfig
# 配置
# Host 站点
# HostName 站点名
# 优先使用公钥连接
# PreferredAuthentications publickey
# IdentityFile 私钥路径
# User 用户名称

# github 配置
Host github.com
HostName github.com
IdentityFile ~/.ssh/id_rsa
User git

# gitee 配置
Host gitee.com
HostName gitee.com
IdentityFile ~/.ssh/id_rsa_gitee
User git

# 其它
...
```

## 测试

格式：`git@域名`，例如：
```
ssh -T git@github.com
```

提示以下内容，则表示配置成功
```
Hi xxx! You've successfully ... 
```

