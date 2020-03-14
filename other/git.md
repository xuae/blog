# Git

## 基本命令

1. 提交日志

    ```
    git log // 查看全部提交日志，按 `q` 键退出
    git log –pretty=oneline // 每一次提交日志只显示一行信息
    ```

1. 远程仓库
    
    ```
    git remote // 查看远程仓库的信息
    git remote -v // 查看远程仓库的详细信息
    ```
   
1. 标签

    ```
    git tag // 显示所有标签
    git tag -l "v3.3.*" // 显示过滤后的标签
    git tag [name] // 新建标签
    git tag -a [name] [commit_id] // 在指定的某个 commit 上添加标签
    git tag -a [name] [commit_id] -m "备注信息" // -m 添加备注信息
    git show [name] // 显示标签的详细信息 
    git push origin [name] // 向远程分支提交单个标签
    git push origin --tags // 推送所有标签
    git tag -d [name] // 删除某个标签
    git push origin :refs/tags/<name> // 远程删除标签
    ```
   
1. 推送
    ```
    git push origin HEAD --force // 强制推送，慎用
    ```

## 如何彻底删除已提交的 commit

> 此操作谨慎使用，千万不要随便使用
>
> 必须看懂之后才能操作，或者可以新建一个分支，测试一下效果
>
> 如果误操作删除了不该删除的，我也不知道怎么办，找回方法还没试过，以后再研究

1. git reset --hard commit_id (可用 `git log –oneline` 查看)

    > 注意 git reset 的三种模式，--hard会删除commit_id之后提交的记录和工作区域 

1. git push origin HEAD --force 强制推送

    > 强推可能会导致其他用户提交的commit丢失

