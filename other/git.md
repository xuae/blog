---
    title: Git
    date: 2020-03-14
    categories:
     - git
    tags:
     - git
---

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

1. git 账号信息

    ```
    git config user.name // 查看当前登录的用户名
    git config user.email // 查看当前登录的邮箱

    git config user.name 'Your_User_Name' // 修改当前用户名
    git config user.email 'Your_Email' // 修改当前邮箱

    git config --global user.name 'Your_User_Name' // 修改全局用户名
    git config --global user.email 'Your_Email' // 修改全局邮箱
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

## 如何修改已提交 commit 的用户信息
> 警告：此操作会破坏历史记录。
>
> 如果正在与其他人在存储库上进行协作，则重写已发布的历史记录被认为是不好的做法。
>
> 只应在紧急情况下这样做。

1. Git Bash 复制并粘贴脚本，根据需要替换以下变量：
    - OLD_EMAIL: 旧的邮箱地址
    - CORRECT_NAME: 新的用户名
    - CORRECT_EMAIL: 新的邮箱地址

    ```
    #!/bin/sh

    git filter-branch --env-filter '

    OLD_EMAIL="your-old-email@example.com"
    CORRECT_NAME="Your Correct Name"
    CORRECT_EMAIL="your-correct-email@example.com"

    if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
    then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
    fi
    if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
    then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
    fi
    ' --tag-name-filter cat -- --branches --tags
    ```

1. 按Enter键运行脚本。

1. 查看新的Git历史记录是否有错误。

1. 将更正的历史记录推送到GitHub：
    ```
    git push --force --tags origin 'refs/heads/*'
    ```

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

## 分支命名规范

几乎所有的版本控制系统都以某种形式支持分支。 使用分支意味着你可以把你的工作从开发主线上分离开来，以免影响开发主线。有人把 Git 的分支模型称为它的“必杀技特性”，因为基于指针的实现使其足够轻量。

Git 鼓励在工作流程中频繁地使用分支与合并，哪怕一天之内进行许多次，但仍要遵循一定的规范

- master 分支
    - master 为主分支，也是用于部署生产环境的分支，master 分支要确保稳定性
    - master 分支一般由 develop 以及 hotfix 分支合并，任何时间都不能直接修改代码

- develop 分支
    - develop 为开发分支，始终保持最新完成以及bug修复后的代码
    - 一般开发新功能时，feature 分支都是基于 develop 分支下创建的

- feature 分支
    - 开发新功能时，以 develop 分支为基础创建 feature 分支
    - 分支命名: feature/ 开头的为特性分支， 命名规则: feature/user_module、 feature/cart_module

- release 分支
    - release 为预上线分支，发布提测阶段，以 release 分支代码为基准提测

- hotfix 分支
    - 分支命名: hotfix/ 开头的为修复分支，它的命名规则与 feature 分支类似
    - 线上出现紧急问题时，需要及时修复，以 master 分支为基线，创建 hotfix 分支，修复完成后，需要合并到 master 分支和 develop 分支

当有一组 feature 开发完成，首先会合并到 develop 分支，进入提测时，会创建 release 分支。

如果测试过程中存在 bug 需要修复，则直接由开发者在 release 分支修复并提交。

当测试完成之后，合并 release 分支到 master 和 develop 分支，此时 master 为最新代码，用作上线。

以上规范不一定是必须的，一般是根据实际情况来的，总结下自己工作中的一些问题
- 自己的分支一定要自测，切记不要提交后，影响到其他代码，更别说别人拉下代码还报错这种低级错误
- 本地分支要做到勤提交，分小功能提交，一次提交一大堆各种功能的做法也要杜绝
- 每天第一件事就是更新 develop 分支内容到本地分支，避免大规模 merge，太容易出错了
- 迭代新版本时，一定要保证当前开发分支和线上分支一样

## Git Commit Message 规范
> 此规范来自 Angular 规范的整理。

Commit message 包括三个部分：Header、Body 和 Footer。

其中，Header 是必需的，Body 和 Footer 可以省略。

不管是哪一个部分，任何一行都不得超过72个字符（或100个字符）。这是为了避免自动换行影响美观。

```
<type>(<scope>): <subject>
// 空一行
<body>
// 空一行
<footer>
```

### Header

格式： type(scope): subject

- type(必填)：用于说明commit的类别，只允许使用下面7个标识
    > 如果 type 为 feat 和 fix ，则该 commit 将肯定出现在 Change log 之中。其他情况（docs、chore、style、refactor、test）由你决定，要不要放入 Change log，建议是不要。

    - feat：新功能（feature）
    - fix：修复bug
    - docs：修改文档（documentation）
    - style：仅仅修改了空格、缩进等，不改变代码逻辑，不影响代码运行的变动
    - refactor：重构（即不是新增功能，也不是修改bug的代码变动）
    - test：测试用例的修改
    - chore：构建过程或辅助工具的变动，非src和test的修改
    
- scope(可选)：用于说明commit的影响范围，比如数据层、控制层、视图层等等，视项目不同而不同

- subject(必填)：commit的简要说明，不超过50个字符
    - 以动词开头，使用第一人称现在时，比如change，而不是changed或changes
    - 第一个字母小写
    - 结尾不加句号（.）

### Body

Body 部分是对本次 commit 的详细描述，可以分成多行。下面是一个范例。

```
More detailed explanatory text, if necessary.  Wrap it to 
about 72 characters or so. 

Further paragraphs come after blank lines.

- Bullet points are okay, too
- Use a hanging indent
```

有两个注意点。

（1）使用第一人称现在时，比如使用change而不是changed或changes。

（2）应该说明代码变动的动机，以及与以前行为的对比。

### Footer

Footer 部分只用于两种情况。

1. 不兼容变动

   如果当前代码与上一个版本不兼容，则 Footer 部分以BREAKING CHANGE开头，后面是对变动的描述、以及变动理由和迁移方法。
   
   ```
   BREAKING CHANGE: isolate scope bindings definition has changed.
       To migrate the code follow the example below:
   
       Before:
   
       scope: {
         myAttr: 'attribute',
       }
   
       After:
   
       scope: {
         myAttr: '@',
       }
   
       The removed `inject` wasn't generaly useful for directives so there should be no code using it
   ```

1. 关闭 Issue

   如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issue 。

   ```
   Closes #234
   ```
   
   也可以一次关闭多个 issue 。
   
   ```
   Closes #123, #245, #992
   ```

### Revert

还有一种特殊情况，如果当前 commit 用于撤销以前的 commit，则必须以revert:开头，后面跟着被撤销 Commit 的 Header。

```
revert: feat(pencil): add 'graphiteWidth' option

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
```

Body部分的格式是固定的，必须写成This reverts commit &lt;hash>.，其中的hash是被撤销 commit 的 SHA 标识符。

如果当前 commit 与被撤销的 commit，在同一个发布（release）里面，那么它们都不会出现在 Change log 里面。如果两者在不同的发布，那么当前 commit，会出现在 Change log 的Reverts小标题下面。

## Git Commit Message 工具 

### Commitizen

[Commitizen](https://github.com/commitizen/cz-cli) 是一个撰写合格 Commit message 的工具。

安装命令如下。

```
$ npm install -g commitizen
```

然后，在项目目录里，运行下面的命令，使其支持 Angular 的 Commit message 格式。

```
$ commitizen init cz-conventional-changelog --save --save-exact
```

以后，凡是用到git commit命令，一律改为使用git cz。这时，就会出现选项，用来生成符合格式的 Commit message。

### validate-commit-msg

[validate-commit-msg](https://github.com/kentcdodds/validate-commit-msg) 用于检查 Node 项目的 Commit message 是否符合格式。

它的安装是手动的。首先，拷贝下面这个[JS文件](https://github.com/kentcdodds/validate-commit-msg/blob/master/index.js)，放入你的代码库。文件名可以取为validate-commit-msg.js。

接着，把这个脚本加入 Git 的 hook。下面是在package.json里面使用 [ghooks](http://npm.im/ghooks)，把这个脚本加为commit-msg时运行。

```
$ git add -A 
$ git commit -m "edit markdown" 
INVALID COMMIT MSG: does not match "<type>(<scope>): <subject>" ! was: edit markdown
```

## 生成 Change log
如果你的所有 Commit 都符合 Angular 格式，那么发布新版本时， Change log 就可以用脚本自动生成（[例1](https://github.com/ajoslin/conventional-changelog/blob/master/CHANGELOG.md)，[例2](https://github.com/karma-runner/karma/blob/master/CHANGELOG.md)，[例3](https://github.com/btford/grunt-conventional-changelog/blob/master/CHANGELOG.md)）。

生成的文档包括以下三个部分。

```
New features
Bug fixes
Breaking changes.
```

每个部分都会罗列相关的 commit ，并且有指向这些 commit 的链接。当然，生成的文档允许手动修改，所以发布前，你还可以添加其他内容。

[conventional-changelog](https://github.com/ajoslin/conventional-changelog) 就是生成 Change log 的工具，运行下面的命令即可。

```
$ npm install -g conventional-changelog
$ cd my-project
$ conventional-changelog -p angular -i CHANGELOG.md -w
```

上面命令不会覆盖以前的 Change log，只会在CHANGELOG.md的头部加上自从上次发布以来的变动。

如果你想生成所有发布的 Change log，要改为运行下面的命令。

```
$ conventional-changelog -p angular -i CHANGELOG.md -w -r 0
```

为了方便使用，可以将其写入package.json的scripts字段。

```
{
  "scripts": {
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -w -r 0"
  }
}
```

以后，直接运行下面的命令即可。

```
$ npm run changelog
```

## git commit 中使用 emoji

git commit 时，提交 emoji 信息遵循以下格式：

```
:emoji1: :emoji2: 主题

提交信息主体

Ref <###>
```

初次提交示例：

```
git commit -m ":bug: fix a bug writtten"
```

### emoji 指南
> emoji 表情参考对应网站 https://gitmoji.carloscuesta.me/

emoji       | emoji代码 | Commit说明
-|-|-
🎨 (调色板) | `:art:` | 改进代码结构/代码格式
⚡  (闪电) | `:zap:` | 提升性能
🐎 (赛马) | `:racehorse:` | 提升性能
🔥 (火焰) | `:fire:` | 移除代码或文件
🐛 (bug) | `:bug:` | 修复 bug
🚑 (急救车) | `:ambulance:` | 重要补丁
✨ (火花) | `:sparkles:` | 引入新功能
📝 (铅笔) | `:pencil:` | 撰写文档
🚀 (火箭) | `:rocket:` | 部署功能
💄 (口红) | `:lipstick:` | 更新 UI 和样式文件
🎉 (庆祝) | `:tada:` | 初次提交
✅ (白色复选框) | `:white_check_mark:` | 增加测试
🔒  (锁) | `:lock:` | 修复安全问题
🍎 (苹果) | `:apple:` | 修复 macOS 下的问题
🐧 (企鹅) | `:penguin:` | 修复 Linux 下的问题
🏁 (旗帜) | `:checkered_flag:` | 修复 Windows 下的问题
🔖 (书签) | `:bookmark:` | 发行/版本标签
🚨 (警车灯) | `:rotating_light:` | 移除 linter警告
🚧 (施工) | `:construction:` | 工作进行中
💚 (绿心) | `:green_heart:` | 修复 CI 构建问题
⬇  (下降箭头) | `:arrow_down:` | 降级依赖
⬆  (上升箭头) | `:arrow_up:` | 升级依赖
👷 (工人) | `:construction_worker:` | 添加 CI 构建系统
📈 (上升趋势图) | `:chart_with_upwards_trend:` | 添加分析或跟踪代码
🔨 (锤子) | `:hammer:` | 重大重构
➖ (减号) | `:heavy_minus_sign:` | 减少一个依赖
🐳 (鲸鱼) | `:whale:` | Docker 相关工作
➕ (加号) | `:heavy_plus_sign:` | 增加一个依赖
🔧 (扳手) | `:wrench:` | 修改配置文件
🌐  (地球) | `:globe_with_meridians:` | 国际化与本地化
✏ (铅笔) | `:pencil2:` | 修复 typo
