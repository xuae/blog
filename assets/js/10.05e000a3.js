(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{491:function(t,e,a){"use strict";a.r(e);var s=a(4),v=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"基本命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本命令"}},[t._v("#")]),t._v(" 基本命令")]),t._v(" "),a("h3",{attrs:{id:"提交日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交日志"}},[t._v("#")]),t._v(" 提交日志")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git log // 查看全部提交日志，按 `q` 键退出\ngit log –pretty=oneline // 每一次提交日志只显示一行信息\n")])])]),a("h3",{attrs:{id:"远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库"}},[t._v("#")]),t._v(" 远程仓库")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git remote // 查看远程仓库的信息\ngit remote -v // 查看远程仓库的详细信息\n")])])]),a("h3",{attrs:{id:"标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标签"}},[t._v("#")]),t._v(" 标签")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('git tag // 显示所有标签\ngit tag -l "v3.3.*" // 显示过滤后的标签\ngit tag [name] // 新建标签\ngit tag -a [name] [commit_id] // 在指定的某个 commit 上添加标签\ngit tag -a [name] [commit_id] -m "备注信息" // -m 添加备注信息\ngit show [name] // 显示标签的详细信息 \ngit push origin [name] // 向远程分支提交单个标签\ngit push origin --tags // 推送所有标签\ngit tag -d [name] // 删除某个标签\ngit push origin :refs/tags/<name> // 远程删除标签\n')])])]),a("h3",{attrs:{id:"推送"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推送"}},[t._v("#")]),t._v(" 推送")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git push origin HEAD --force // 强制推送，慎用\n")])])]),a("h3",{attrs:{id:"账号信息（用户名，邮箱）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#账号信息（用户名，邮箱）"}},[t._v("#")]),t._v(" 账号信息（用户名，邮箱）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git config user.name // 查看当前登录的用户名\ngit config user.email // 查看当前登录的邮箱\n\ngit config user.name 'Your_User_Name' // 修改当前用户名\ngit config user.email 'Your_Email' // 修改当前邮箱\n\ngit config --global user.name 'Your_User_Name' // 修改全局用户名\ngit config --global user.email 'Your_Email' // 修改全局邮箱\n\ngit config --global --unset user.name // 删除全局配置的用户名\ngit config --global --unset user.email // 删除全局配置的邮箱\n")])])]),a("h2",{attrs:{id:"如何彻底删除已提交的-commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何彻底删除已提交的-commit"}},[t._v("#")]),t._v(" 如何彻底删除已提交的 commit")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",[t._v("此操作谨慎使用，千万不要随便使用")]),t._v(" "),a("p",[t._v("必须看懂之后才能操作，或者可以新建一个分支，测试一下效果")]),t._v(" "),a("p",[t._v("如果误操作删除了不该删除的，我也不知道怎么办，找回方法还没试过，以后再研究")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("git reset --hard commit_id (可用 "),a("code",[t._v("git log –oneline")]),t._v(" 查看)")]),t._v(" "),a("p",[t._v("注意 git reset 的三种模式，--hard会删除commit_id之后提交的记录和工作区域")])]),t._v(" "),a("li",[a("p",[t._v("git push origin HEAD --force 强制推送")]),t._v(" "),a("p",[t._v("强推可能会导致其他用户提交的commit丢失")])])]),t._v(" "),a("h2",{attrs:{id:"如何修改已提交-commit-的用户信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何修改已提交-commit-的用户信息"}},[t._v("#")]),t._v(" 如何修改已提交 commit 的用户信息")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",[t._v("警告：此操作会破坏历史记录。")]),t._v(" "),a("p",[t._v("如果正在与其他人在存储库上进行协作，则重写已发布的历史记录被认为是不好的做法。")]),t._v(" "),a("p",[t._v("只应在紧急情况下这样做。")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Git Bash 复制并粘贴脚本，根据需要替换以下变量：")]),t._v(" "),a("ul",[a("li",[t._v("OLD_EMAIL: 旧的邮箱地址")]),t._v(" "),a("li",[t._v("CORRECT_NAME: 新的用户名")]),t._v(" "),a("li",[t._v("CORRECT_EMAIL: 新的邮箱地址")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('#!/bin/sh\n\ngit filter-branch --env-filter \'\n\nOLD_EMAIL="your-old-email@example.com"\nCORRECT_NAME="Your Correct Name"\nCORRECT_EMAIL="your-correct-email@example.com"\n\nif [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]\nthen\nexport GIT_COMMITTER_NAME="$CORRECT_NAME"\nexport GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"\nfi\nif [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]\nthen\nexport GIT_AUTHOR_NAME="$CORRECT_NAME"\nexport GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"\nfi\n\' --tag-name-filter cat -- --branches --tags\n')])])])]),t._v(" "),a("li",[a("p",[t._v("按Enter键运行脚本。")])]),t._v(" "),a("li",[a("p",[t._v("查看新的Git历史记录是否有错误。")])]),t._v(" "),a("li",[a("p",[t._v("将更正的历史记录推送到GitHub：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git push --force --tags origin 'refs/heads/*'\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支"}},[t._v("#")]),t._v(" 分支")]),t._v(" "),a("h3",{attrs:{id:"命名规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名规范"}},[t._v("#")]),t._v(" 命名规范")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("几乎所有的版本控制系统都以某种形式支持分支。 使用分支意味着你可以把你的工作从开发主线上分离开来，以免影响开发主线。有人把 Git 的分支模型称为它的“必杀技特性”，因为基于指针的实现使其足够轻量。")]),t._v(" "),a("p",[t._v("Git 鼓励在工作流程中频繁地使用分支与合并，哪怕一天之内进行许多次，但仍要遵循一定的规范。")])]),t._v(" "),a("p",[t._v("当有一组 feature 开发完成，首先会合并到 develop 分支，进入提测时，会创建 release 分支。")]),t._v(" "),a("p",[t._v("如果测试过程中存在 bug 需要修复，则直接由开发者在 release 分支修复并提交。")]),t._v(" "),a("p",[t._v("当测试完成之后，合并 release 分支到 master 和 develop 分支，此时 master 为最新代码，用作上线。")]),t._v(" "),a("p",[t._v("以下规范不一定是必须的，一般是根据实际情况来的，总结下自己工作中的一些问题")]),t._v(" "),a("ul",[a("li",[t._v("自己的分支一定要自测，切记不要提交后，影响到其他代码，更别说别人拉下代码还报错这种低级错误")]),t._v(" "),a("li",[t._v("本地分支要做到勤提交，分小功能提交，一次提交一大堆各种功能的做法也要杜绝")]),t._v(" "),a("li",[t._v("每天第一件事就是更新 develop 分支内容到本地分支，避免大规模 merge，太容易出错了")]),t._v(" "),a("li",[t._v("迭代新版本时，一定要保证当前开发分支和线上分支一样")])]),t._v(" "),a("h4",{attrs:{id:"master"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master"}},[t._v("#")]),t._v(" master")]),t._v(" "),a("ul",[a("li",[t._v("master 为主分支，也是用于部署生产环境的分支，master 分支要确保稳定性")]),t._v(" "),a("li",[t._v("master 分支一般由 develop 以及 hotfix 分支合并，任何时间都不能直接修改代码")])]),t._v(" "),a("h4",{attrs:{id:"develop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#develop"}},[t._v("#")]),t._v(" develop")]),t._v(" "),a("ul",[a("li",[t._v("develop 为开发分支，始终保持最新完成以及bug修复后的代码")]),t._v(" "),a("li",[t._v("一般开发新功能时，feature 分支都是基于 develop 分支下创建的")])]),t._v(" "),a("h4",{attrs:{id:"feature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#feature"}},[t._v("#")]),t._v(" feature")]),t._v(" "),a("ul",[a("li",[t._v("开发新功能时，以 develop 分支为基础创建 feature 分支")]),t._v(" "),a("li",[t._v("分支命名: feature/ 开头的为特性分支， 命名规则: feature/user_module、 feature/cart_module")])]),t._v(" "),a("h4",{attrs:{id:"release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#release"}},[t._v("#")]),t._v(" release")]),t._v(" "),a("ul",[a("li",[t._v("release 为预上线分支，发布提测阶段，以 release 分支代码为基准提测")])]),t._v(" "),a("h4",{attrs:{id:"hotfix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hotfix"}},[t._v("#")]),t._v(" hotfix")]),t._v(" "),a("ul",[a("li",[t._v("分支命名: hotfix/ 开头的为修复分支，它的命名规则与 feature 分支类似")]),t._v(" "),a("li",[t._v("线上出现紧急问题时，需要及时修复，以 master 分支为基线，创建 hotfix 分支，修复完成后，需要合并到 master 分支和 develop 分支")])]),t._v(" "),a("h3",{attrs:{id:"分支合并"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支合并"}},[t._v("#")]),t._v(" 分支合并")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[t._v("git merge --squash [branch] 会变更提交者作者信息，追溯困难，解决方法是由 branch 分支作者来合并到当前分支")]),t._v(" "),a("p",[t._v("若要合并分支时需要合并commit，建议选用 rebase merge")])]),t._v(" "),a("h4",{attrs:{id:"_1-git-merge-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-git-merge-branch"}},[t._v("#")]),t._v(" 1. git merge [branch]")]),t._v(" "),a("p",[t._v("将 branch 分支的 commit 全部合并到当前分支")]),t._v(" "),a("h4",{attrs:{id:"_2-git-merge-squash-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-git-merge-squash-branch"}},[t._v("#")]),t._v(" 2. git merge --squash [branch]")]),t._v(" "),a("p",[t._v("将 branch 分支上的所有 commit 合并到一个 commit 上，然后提交到主干。")]),t._v(" "),a("h4",{attrs:{id:"_3-rebase-merge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-rebase-merge"}},[t._v("#")]),t._v(" 3. rebase merge")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[t._v("注意：在执行rebase的时候可能会出现冲突的问题，此时需要手工解决冲突的问题，然后执行(git add)命令；所有冲突解决完之后，这时不需要执行(git commit)命令，而是运行(git rebase --continue)命令，一直到rebase完成；如果中途想放弃rebase操作，可以运行(git rebase --abort)命令回到rebase之前的状态。")])]),t._v(" "),a("p",[t._v("假设在master分支的B点拉出一个新的分支dev，经过一段时间开发后：")]),t._v(" "),a("p",[t._v("master分支上有两个新的提交M1和M2")]),t._v(" "),a("p",[t._v("dev分支上有三个提交D1，D2，和D3")]),t._v(" "),a("p",[t._v("A ─> B ─> M1 ─> M2 ─> master")]),t._v(" "),a("p",[t._v("A ─> B ─> D1 ─> D2 ─> D3 ─> dev")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git checkout dev\ngit rebase -i master\ngit checkout master\ngit merge dev\n")])])]),a("ol",[a("li",[a("p",[t._v("执行rebase操作，结果是看起来dev分支是从M2拉出来的，而不是从B拉出来的，然后使用-i参数手动调整commit历史，是否合并如何合并。例如下rebase -i命令会弹出文本编辑框:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pick <D1> Message for commit #1\npick <D2> Message for commit #2\npick <D3> Message for commit #3\n")])])]),a("p",[t._v("假设D2是对D1的一个拼写错误修正，因此可以不需要显式的指出来，我们把D2修改为fixup：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pick <D1> Message for commit #1\nfixup <D2> Message for commit #2\npick <D3> Message for commit #3\n")])])]),a("p",[t._v("rebase之后的状态变为：")]),t._v(" "),a("p",[t._v("A ─> B ─> M1 ─> M2 ─> master")]),t._v(" "),a("p",[t._v("A ─> B ─> D1' ─> D3 ─> dev")])]),t._v(" "),a("li",[a("p",[t._v("再执行merge操作，把dev分支合并到master分支：")]),t._v(" "),a("p",[t._v("A ─> B ─> M1 ─> M2 ─> D1' ─> D3 ─> master")])])]),t._v(" "),a("h2",{attrs:{id:"git-commit-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-commit-message"}},[t._v("#")]),t._v(" Git Commit Message")]),t._v(" "),a("h3",{attrs:{id:"规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#规范"}},[t._v("#")]),t._v(" 规范")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("此规范来自 Angular 规范的整理。")])]),t._v(" "),a("p",[t._v("Commit message 包括三个部分：Header、Body 和 Footer。")]),t._v(" "),a("p",[t._v("其中，Header 是必需的，Body 和 Footer 可以省略。")]),t._v(" "),a("p",[t._v("不管是哪一个部分，任何一行都不得超过72个字符（或100个字符）。这是为了避免自动换行影响美观。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<type>(<scope>): <subject>\n// 空一行\n<body>\n// 空一行\n<footer>\n")])])]),a("h4",{attrs:{id:"header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#header"}},[t._v("#")]),t._v(" Header")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[t._v("格式： type(scope): subject")]),t._v(" "),a("p",[t._v("如果 type 为 feat 和 fix ，则该 commit 将肯定出现在 Change log 之中。")]),t._v(" "),a("p",[t._v("其他情况（docs、chore、style、refactor、test）由你决定，要不要放入 Change log，建议是不要。")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("type(必填)：用于说明commit的类别，只允许使用下面7个标识")]),t._v(" "),a("ul",[a("li",[t._v("feat：新功能（feature）")]),t._v(" "),a("li",[t._v("fix：修复bug")]),t._v(" "),a("li",[t._v("docs：修改文档（documentation）")]),t._v(" "),a("li",[t._v("style：仅仅修改了空格、缩进等，不改变代码逻辑，不影响代码运行的变动")]),t._v(" "),a("li",[t._v("refactor：重构（即不是新增功能，也不是修改bug的代码变动）")]),t._v(" "),a("li",[t._v("test：测试用例的修改")]),t._v(" "),a("li",[t._v("chore：构建过程或辅助工具的变动，非src和test的修改")])])]),t._v(" "),a("li",[a("p",[t._v("scope(可选)：用于说明commit的影响范围，比如数据层、控制层、视图层等等，视项目不同而不同")])]),t._v(" "),a("li",[a("p",[t._v("subject(必填)：commit的简要说明，不超过50个字符")]),t._v(" "),a("ul",[a("li",[t._v("以动词开头，使用第一人称现在时，比如change，而不是changed或changes")]),t._v(" "),a("li",[t._v("第一个字母小写")]),t._v(" "),a("li",[t._v("结尾不加句号（.）")])])])]),t._v(" "),a("h4",{attrs:{id:"body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#body"}},[t._v("#")]),t._v(" Body")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("Body 部分是对本次 commit 的详细描述，可以分成多行。")])]),t._v(" "),a("p",[t._v("下面是一个范例。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("More detailed explanatory text, if necessary.  Wrap it to \nabout 72 characters or so. \n\nFurther paragraphs come after blank lines.\n\n- Bullet points are okay, too\n- Use a hanging indent\n")])])]),a("p",[t._v("有两个注意点。")]),t._v(" "),a("p",[t._v("（1）使用第一人称现在时，比如使用change而不是changed或changes。")]),t._v(" "),a("p",[t._v("（2）应该说明代码变动的动机，以及与以前行为的对比。")]),t._v(" "),a("h4",{attrs:{id:"footer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#footer"}},[t._v("#")]),t._v(" Footer")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("Footer 部分只用于两种情况。")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("不兼容变动")]),t._v(" "),a("p",[t._v("如果当前代码与上一个版本不兼容，则 Footer 部分以BREAKING CHANGE开头，后面是对变动的描述、以及变动理由和迁移方法。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("BREAKING CHANGE: isolate scope bindings definition has changed.\n    To migrate the code follow the example below:\n\n    Before:\n\n    scope: {\n      myAttr: 'attribute',\n    }\n\n    After:\n\n    scope: {\n      myAttr: '@',\n    }\n\n    The removed `inject` wasn't generaly useful for directives so there should be no code using it\n")])])])]),t._v(" "),a("li",[a("p",[t._v("关闭 Issue")]),t._v(" "),a("p",[t._v("如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issue 。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Closes #234\n")])])]),a("p",[t._v("也可以一次关闭多个 issue 。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Closes #123, #245, #992\n")])])])])]),t._v(" "),a("h4",{attrs:{id:"revert"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#revert"}},[t._v("#")]),t._v(" Revert")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("还有一种特殊情况，如果当前 commit 用于撤销以前的 commit，则必须以revert:开头，后面跟着被撤销 Commit 的 Header。")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("revert: feat(pencil): add 'graphiteWidth' option\n\nThis reverts commit 667ecc1654a317a13331b17617d973392f415f02.\n")])])]),a("p",[t._v("Body部分的格式是固定的，必须写成 "),a("code",[t._v("This reverts commit <hash>.")]),t._v("，其中的hash是被撤销 commit 的 SHA 标识符。")]),t._v(" "),a("p",[t._v("如果当前 commit 与被撤销的 commit，在同一个发布（release）里面，那么它们都不会出现在 Change log 里面。如果两者在不同的发布，那么当前 commit，会出现在 Change log 的Reverts小标题下面。")]),t._v(" "),a("h3",{attrs:{id:"emoji-表情"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#emoji-表情"}},[t._v("#")]),t._v(" emoji 表情")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("emoji 表情参考对应网站 "),a("a",{attrs:{href:"https://gitmoji.carloscuesta.me/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitmoji.carloscuesta.me/"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("git commit 时，提交 emoji 信息遵循以下格式：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(":emoji1: :emoji2: 主题\n\n提交信息主体\n\nRef <###>\n")])])]),a("p",[t._v("初次提交示例：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('git commit -m ":bug: fix a bug writtten"\n')])])]),a("p",[t._v("emoji 指南")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("emoji")]),t._v(" "),a("th",[t._v("emoji代码")]),t._v(" "),a("th",[t._v("Commit说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("🎨 (调色板)")]),t._v(" "),a("td",[a("code",[t._v(":art:")])]),t._v(" "),a("td",[t._v("改进代码结构/代码格式")])]),t._v(" "),a("tr",[a("td",[t._v("🎨 (调色板)")]),t._v(" "),a("td",[a("code",[t._v(":art:")])]),t._v(" "),a("td",[t._v("改进代码结构/代码格式")])]),t._v(" "),a("tr",[a("td",[t._v("⚡  (闪电)")]),t._v(" "),a("td",[a("code",[t._v(":zap:")])]),t._v(" "),a("td",[t._v("提升性能")])]),t._v(" "),a("tr",[a("td",[t._v("🐎 (赛马)")]),t._v(" "),a("td",[a("code",[t._v(":racehorse:")])]),t._v(" "),a("td",[t._v("提升性能")])]),t._v(" "),a("tr",[a("td",[t._v("🔥 (火焰)")]),t._v(" "),a("td",[a("code",[t._v(":fire:")])]),t._v(" "),a("td",[t._v("移除代码或文件")])]),t._v(" "),a("tr",[a("td",[t._v("🐛 (bug)")]),t._v(" "),a("td",[a("code",[t._v(":bug:")])]),t._v(" "),a("td",[t._v("修复 bug")])]),t._v(" "),a("tr",[a("td",[t._v("🚑 (急救车)")]),t._v(" "),a("td",[a("code",[t._v(":ambulance:")])]),t._v(" "),a("td",[t._v("重要补丁")])]),t._v(" "),a("tr",[a("td",[t._v("✨ (火花)")]),t._v(" "),a("td",[a("code",[t._v(":sparkles:")])]),t._v(" "),a("td",[t._v("引入新功能")])]),t._v(" "),a("tr",[a("td",[t._v("📝 (铅笔)")]),t._v(" "),a("td",[a("code",[t._v(":pencil:")])]),t._v(" "),a("td",[t._v("撰写文档")])]),t._v(" "),a("tr",[a("td",[t._v("🚀 (火箭)")]),t._v(" "),a("td",[a("code",[t._v(":rocket:")])]),t._v(" "),a("td",[t._v("部署功能")])]),t._v(" "),a("tr",[a("td",[t._v("💄 (口红)")]),t._v(" "),a("td",[a("code",[t._v(":lipstick:")])]),t._v(" "),a("td",[t._v("更新 UI 和样式文件")])]),t._v(" "),a("tr",[a("td",[t._v("🎉 (庆祝)")]),t._v(" "),a("td",[a("code",[t._v(":tada:")])]),t._v(" "),a("td",[t._v("初次提交")])]),t._v(" "),a("tr",[a("td",[t._v("✅ (白色复选框)")]),t._v(" "),a("td",[a("code",[t._v(":white_check_mark:")])]),t._v(" "),a("td",[t._v("增加测试")])]),t._v(" "),a("tr",[a("td",[t._v("🔒  (锁)")]),t._v(" "),a("td",[a("code",[t._v(":lock:")])]),t._v(" "),a("td",[t._v("修复安全问题")])]),t._v(" "),a("tr",[a("td",[t._v("🍎 (苹果)")]),t._v(" "),a("td",[a("code",[t._v(":apple:")])]),t._v(" "),a("td",[t._v("修复 macOS 下的问题")])]),t._v(" "),a("tr",[a("td",[t._v("🐧 (企鹅)")]),t._v(" "),a("td",[a("code",[t._v(":penguin:")])]),t._v(" "),a("td",[t._v("修复 Linux 下的问题")])]),t._v(" "),a("tr",[a("td",[t._v("🏁 (旗帜)")]),t._v(" "),a("td",[a("code",[t._v(":checkered_flag:")])]),t._v(" "),a("td",[t._v("修复 Windows 下的问题")])]),t._v(" "),a("tr",[a("td",[t._v("🔖 (书签)")]),t._v(" "),a("td",[a("code",[t._v(":bookmark:")])]),t._v(" "),a("td",[t._v("发行/版本标签")])]),t._v(" "),a("tr",[a("td",[t._v("🚨 (警车灯)")]),t._v(" "),a("td",[a("code",[t._v(":rotating_light:")])]),t._v(" "),a("td",[t._v("移除 linter警告")])]),t._v(" "),a("tr",[a("td",[t._v("🚧 (施工)")]),t._v(" "),a("td",[a("code",[t._v(":construction:")])]),t._v(" "),a("td",[t._v("工作进行中")])]),t._v(" "),a("tr",[a("td",[t._v("💚 (绿心)")]),t._v(" "),a("td",[a("code",[t._v(":green_heart:")])]),t._v(" "),a("td",[t._v("修复 CI 构建问题")])]),t._v(" "),a("tr",[a("td",[t._v("⬇  (下降箭头)")]),t._v(" "),a("td",[a("code",[t._v(":arrow_down:")])]),t._v(" "),a("td",[t._v("降级依赖")])]),t._v(" "),a("tr",[a("td",[t._v("⬆  (上升箭头)")]),t._v(" "),a("td",[a("code",[t._v(":arrow_up:")])]),t._v(" "),a("td",[t._v("升级依赖")])]),t._v(" "),a("tr",[a("td",[t._v("👷 (工人)")]),t._v(" "),a("td",[a("code",[t._v(":construction_worker:")])]),t._v(" "),a("td",[t._v("添加 CI 构建系统")])]),t._v(" "),a("tr",[a("td",[t._v("📈 (上升趋势图)")]),t._v(" "),a("td",[a("code",[t._v(":chart_with_upwards_trend:")])]),t._v(" "),a("td",[t._v("添加分析或跟踪代码")])]),t._v(" "),a("tr",[a("td",[t._v("🔨 (锤子)")]),t._v(" "),a("td",[a("code",[t._v(":hammer:")])]),t._v(" "),a("td",[t._v("重大重构")])]),t._v(" "),a("tr",[a("td",[t._v("➖ (减号)")]),t._v(" "),a("td",[a("code",[t._v(":heavy_minus_sign:")])]),t._v(" "),a("td",[t._v("减少一个依赖")])]),t._v(" "),a("tr",[a("td",[t._v("🐳 (鲸鱼)")]),t._v(" "),a("td",[a("code",[t._v(":whale:")])]),t._v(" "),a("td",[t._v("Docker 相关工作")])]),t._v(" "),a("tr",[a("td",[t._v("➕ (加号)")]),t._v(" "),a("td",[a("code",[t._v(":heavy_plus_sign:")])]),t._v(" "),a("td",[t._v("增加一个依赖")])]),t._v(" "),a("tr",[a("td",[t._v("🔧 (扳手)")]),t._v(" "),a("td",[a("code",[t._v(":wrench:")])]),t._v(" "),a("td",[t._v("修改配置文件")])]),t._v(" "),a("tr",[a("td",[t._v("🌐  (地球)")]),t._v(" "),a("td",[a("code",[t._v(":globe_with_meridians:")])]),t._v(" "),a("td",[t._v("国际化与本地化")])]),t._v(" "),a("tr",[a("td",[t._v("✏ (铅笔)")]),t._v(" "),a("td",[a("code",[t._v(":pencil2:")])]),t._v(" "),a("td",[t._v("修复 typo")])])])]),t._v(" "),a("h3",{attrs:{id:"工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工具"}},[t._v("#")]),t._v(" 工具")]),t._v(" "),a("h4",{attrs:{id:"commitizen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commitizen"}},[t._v("#")]),t._v(" Commitizen")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[a("a",{attrs:{href:"https://github.com/commitizen/cz-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("Commitizen"),a("OutboundLink")],1),t._v(" 是一个撰写合格 Commit message 的工具。")])]),t._v(" "),a("p",[t._v("安装命令如下。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install -g commitizen\n")])])]),a("p",[t._v("然后，在项目目录里，运行下面的命令，使其支持 Angular 的 Commit message 格式。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("commitizen init cz-conventional-changelog --save --save-exact\n")])])]),a("p",[t._v("以后，凡是用到git commit命令，一律改为使用git cz。这时，就会出现选项，用来生成符合格式的 Commit message。")]),t._v(" "),a("h4",{attrs:{id:"validate-commit-msg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validate-commit-msg"}},[t._v("#")]),t._v(" validate-commit-msg")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[a("a",{attrs:{href:"https://github.com/kentcdodds/validate-commit-msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("validate-commit-msg"),a("OutboundLink")],1),t._v(" 用于检查 Node 项目的 Commit message 是否符合格式。")])]),t._v(" "),a("p",[t._v("它的安装是手动的。首先，拷贝下面这个"),a("a",{attrs:{href:"https://github.com/kentcdodds/validate-commit-msg/blob/master/index.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS文件"),a("OutboundLink")],1),t._v("，放入你的代码库。文件名可以取为validate-commit-msg.js。")]),t._v(" "),a("p",[t._v("接着，把这个脚本加入 Git 的 hook。下面是在package.json里面使用 "),a("a",{attrs:{href:"http://npm.im/ghooks",target:"_blank",rel:"noopener noreferrer"}},[t._v("ghooks"),a("OutboundLink")],1),t._v("，把这个脚本加为commit-msg时运行。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('git add -A \ngit commit -m "edit markdown" \nINVALID COMMIT MSG: does not match "<type>(<scope>): <subject>" ! was: edit markdown\n')])])]),a("h3",{attrs:{id:"自动生成-change-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动生成-change-log"}},[t._v("#")]),t._v(" 自动生成 Change Log")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("如果你的所有 Commit 都符合 Angular 格式，那么发布新版本时， Change log 就可以用脚本自动生成（"),a("a",{attrs:{href:"https://github.com/ajoslin/conventional-changelog/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("例1"),a("OutboundLink")],1),t._v("，"),a("a",{attrs:{href:"https://github.com/karma-runner/karma/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("例2"),a("OutboundLink")],1),t._v("，"),a("a",{attrs:{href:"https://github.com/btford/grunt-conventional-changelog/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("例3"),a("OutboundLink")],1),t._v("）。")])]),t._v(" "),a("p",[t._v("生成的文档包括以下三个部分。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("New features\nBug fixes\nBreaking changes.\n")])])]),a("p",[t._v("每个部分都会罗列相关的 commit ，并且有指向这些 commit 的链接。当然，生成的文档允许手动修改，所以发布前，你还可以添加其他内容。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/ajoslin/conventional-changelog",target:"_blank",rel:"noopener noreferrer"}},[t._v("conventional-changelog"),a("OutboundLink")],1),t._v(" 就是生成 Change log 的工具，运行下面的命令即可。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install -g conventional-changelog\ncd my-project\nconventional-changelog -p angular -i CHANGELOG.md -w\n")])])]),a("p",[t._v("上面命令不会覆盖以前的 Change log，只会在CHANGELOG.md的头部加上自从上次发布以来的变动。")]),t._v(" "),a("p",[t._v("如果你想生成所有发布的 Change log，要改为运行下面的命令。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("conventional-changelog -p angular -i CHANGELOG.md -w -r 0\n")])])]),a("p",[t._v("为了方便使用，可以将其写入package.json的scripts字段。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n  "scripts": {\n    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -w -r 0"\n  }\n}\n')])])]),a("p",[t._v("以后，直接运行下面的命令即可。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm run changelog\n")])])])])}),[],!1,null,null,null);e.default=v.exports}}]);