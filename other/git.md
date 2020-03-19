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

## 分支合并

> git merge --squash [branch] 会变更提交者作者信息，追溯困难，解决方法是由 branch 分支作者来合并到当前分支
>
> 若要合并分支时需要合并commit，建议选用 rebase merge

1. git merge [branch] // 将 branch 分支的 commit 全部合并到当前分支

1. git merge --squash [branch] // 将 branch 分支上的所有 commit 合并到一个 commit 上，然后提交到主干。

1. rebase merge

    > 假设在master分支的B点拉出一个新的分支dev，经过一段时间开发后：
    >
    > master分支上有两个新的提交M1和M2
    >
    > dev分支上有三个提交D1，D2，和D3
    >
    > A ─> B ─> M1 ─> M2 ─> master
    >
    > A ─> B ─> D1 ─> D2 ─> D3 ─> dev
    >
    > 注意：在执行rebase的时候可能会出现冲突的问题，此时需要手工解决冲突的问题，然后执行(git add)命令；所有冲突解决完之后，这时不需要执行(git commit)命令，而是运行(git rebase --continue)命令，一直到rebase完成；如果中途想放弃rebase操作，可以运行(git rebase --abort)命令回到rebase之前的状态。

    ```
    $ git checkout dev
    $ git rebase -i master
    $ git checkout master
    $ git merge dev
    ```
   
   1. 执行rebase操作，结果是看起来dev分支是从M2拉出来的，而不是从B拉出来的，然后使用-i参数手动调整commit历史，是否合并如何合并。例如下rebase -i命令会弹出文本编辑框:
   
        ```
        pick <D1> Message for commit #1
        pick <D2> Message for commit #2
        pick <D3> Message for commit #3
        ```
        
        假设D2是对D1的一个拼写错误修正，因此可以不需要显式的指出来，我们把D2修改为fixup：
        
        ```
        pick <D1> Message for commit #1
        fixup <D2> Message for commit #2
        pick <D3> Message for commit #3
        ```
      
        rebase之后的状态变为：
        
        A ─> B ─> M1 ─> M2 ─> master
       
        A ─> B ─> D1' ─> D3 ─> dev
    
   1. 再执行merge操作，把dev分支合并到master分支：
   
        A ─> B ─> M1 ─> M2 ─> D1' ─> D3 ─> master
