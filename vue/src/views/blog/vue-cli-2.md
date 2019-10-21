Vue Cli 2.x 搭建Vue项目步骤
==========================

> Vue项目环境配置请查看 [Vue环境](first.md)。
>
> Vue Cli 3.x 的搭建过程请查看 [Vue Cli 3.x 搭建Vue项目](vue-cli-3-4.md) 。

## 安装

1. 全局安装vue-cli。如果需要使用cnpm，直接把以下命令中的npm改成cnpm即可。

    ```
    npm install -g vue-cli
    ```

1. 查看版本

    ```
    vue -V // 注意：V大写。
    ```

## 搭建新项目

> 括号内是默认值，若不需要修改，直接回车即可。修改请直接输入修改的值，然后再回车即可。
> 
> 括号内是(Y/n)，确定请输入Y然后回车，不需要请输入n然后回车。
> 
> 以下配置很简单，只是我怕我记不得具体内容，所以写得很详细，别被吓到了！

```
vue init webpack 文件夹名 
//文件夹名是最终生成的项目的文件夹名，文件夹不存在会自动新建文件夹。
//输入命令后，会询问几个简单的选项，具体如下。
```
- `Target directory exists. Continue?(Y/n)`

    文件夹已存在，确认是否继续。文件夹不存在时，不会出现此提示。
- `Project name (默认值)`

    项目名称。注意：不能使用大写。
- `Project description (默认值)`

    项目描述。
- `Author (默认值)`

    项目作者。默认会从git中读取。
- `Vue build (Use arrow keys)`

    构建方式。使用上下键选择，回车确认。

    ```
    >Runtime + Compiler: recommended for most users // 运行时+编译器：推荐给大多数用户
     Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files-render functions are required elsewhere // 仅限运行时: 大约6KB的轻量级min+gzip，但是模板(或任何特定于vue的html)只允许在.vue文件中使用——其他地方需要呈现函数
    ```
- `Install vue-router?(Y/n)`

    是否安装vue的路由插件。建议安装。
- `Use ESLint to lint your code?(Y/n)`

    是否使用ESLint检测你的代码。

    ESLint 是一个语法规则和代码风格的检查工具，可以用来保证写出语法正确、风格统一的代码。

    若选择Y的话，会出现以下选项，使用上下键选择，回车确认。

    ```
    >Standard(https//github.com/standard/standard) // 一个功能强大的 JavaScript 代码规范，自带 linter 和自动代码纠正，无需配置，自动格式化代码。可以在编码早期就发现代码中的低级错误
     Airbnb(https//github.com/airbnb/javascript) // 号称是“最合理的编写 JavaScript 代码的方式”，推荐选这个
     none(config it yourself)                    // 手动配置
    ```
- `Set up unit tests?(Y/n)`

    是否安装单元测试。

    若选择Y的话，会出现以下选项，使用上下键选择，回车确认。

    ```
    >Jest                     // 安装配置简单，容易上手。内置Istanbul，可以查看到测试覆盖率，相较于Mocha:配置简洁、测试代码简洁、易于和babel集成、内置丰富的expect
     Karma and Mocha          // mocha灵活,只提供简单的测试结构，如果需要其他功能需要添加其他库/插件完成。必须在全局环境中安装
     none(config it yourself) // 手动配置
    ```
- `Setup e2e tests with Nightwatch?(Y/n)`

    是否安装E2E测试框架NightWatch（E2E，也就是End To End，就是所谓的“用户真实场景”。）
- `Should we run 'npm install' for you after the project has been created?`

    项目创建后是否要为你运行“npm install”?，选择包管理工具

    ```
    >Yes, use NPM                  // 使用npm
     Yes, user Yarn                // 使用yarn
     No, I will handle that myself // 自己操作
    ```
