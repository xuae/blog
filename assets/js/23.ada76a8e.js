(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{504:function(e,t,s){"use strict";s.r(t);var a=s(4),v=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",[e._v("Vue CLI 3.x 与 4.x的搭建步骤现在没什么区别，就没有单独分开写。")]),e._v(" "),s("p",[e._v("Vue CLI 4.0 于 2019-10-16 正式发布，刚好是在我开始准备写文章的时候，所以这个项目是基于v4.0.4搭建的，但是一开始是使用 Vue CLI v3.11.0创建的项目，基于创建时错误太多，成功率低，卡顿，然后就选择升级成4.0搭建的项目。")]),e._v(" "),s("p",[e._v("Vue CLI 是一个基于 Vue.js 进行快速开发的完整系统。有三个组件：")]),e._v(" "),s("p",[e._v("CLI："),s("code",[e._v("@vue/cli")]),e._v(" 全局安装的 npm 包，提供了终端里的vue命令（如：vue create 、vue serve 、vue ui 等命令）")]),e._v(" "),s("p",[e._v("CLI 服务："),s("code",[e._v("@vue/cli-service")]),e._v(" 是一个开发环境依赖。构建于 webpack 和 webpack-dev-server 之上（提供 如：serve、build 和 inspect 命令）")]),e._v(" "),s("p",[e._v("CLI 插件：给Vue 项目提供可选功能的 npm 包 （如： Babel/TypeScript 转译、ESLint 集成、unit和 e2e测试 等）")])]),e._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("旧版本，没有则跳过")]),e._v(" "),s("p",[e._v("Vue CLI 的包名称由 "),s("code",[e._v("vue-cli")]),e._v(" 改成了 "),s("code",[e._v("@vue/cli")]),e._v("。 如果你已经全局安装了旧版本的 vue-cli (1.x 或 2.x)，你需要先卸载它。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm uninstall vue-cli -g // 或者 yarn global remove vue-cli\n")])])]),s("p",[e._v("运行 "),s("code",[e._v("vue -V")]),e._v(" 注意V大写，提示 "),s("code",[e._v("'vue' 不是内部命令或外部命令，也不是可运行的程序或批处理文件")]),e._v(" 即卸载成功。")])]),e._v(" "),s("li",[s("p",[e._v("Node 版本要求")]),e._v(" "),s("p",[e._v("Vue CLI 需要 "),s("code",[e._v("Node.js")]),e._v(" 8.9 或更高版本 (推荐 "),s("code",[e._v("8.11.0+")]),e._v(")。你可以使用 "),s("a",{attrs:{href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"}},[e._v("nvm"),s("OutboundLink")],1),e._v(" 或 "),s("a",{attrs:{href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"}},[e._v("nvm-windows"),s("OutboundLink")],1),e._v(" 在同一台电脑中管理多个 Node 版本。")]),e._v(" "),s("p",[e._v("使用 "),s("code",[e._v("node -v")]),e._v(" 查看 Node 版本，版本太低请前往Node官网 "),s("a",{attrs:{href:"http://nodejs.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://nodejs.cn/"),s("OutboundLink")],1),e._v(" 下载安装包安装。")])]),e._v(" "),s("li",[s("p",[e._v("安装 @vue/cli")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm install -g @vue/cli // 或者 yarn global add @vue/cli\n")])])])]),e._v(" "),s("li",[s("p",[e._v("查看版本")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("vue -V // 或者 vue --version\n")])])])])]),e._v(" "),s("h2",{attrs:{id:"搭建新项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搭建新项目"}},[e._v("#")]),e._v(" 搭建新项目")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("注意")]),e._v(" "),s("p",[e._v("如果你在 Windows 上通过 minTTY 使用 Git Bash，交互提示符并不工作。你必须通过 "),s("code",[e._v("winpty vue.cmd create hello-world")]),e._v(" 启动这个命令。不过，如果你仍想使用 "),s("code",[e._v("vue create hello-world")]),e._v("，则可以通过在 "),s("code",[e._v("~/.bashrc")]),e._v(" 文件中添加以下行来为命令添加别名。 "),s("code",[e._v("alias vue='winpty vue.cmd'")]),e._v(" 你需要重新启动 Git Bash 终端会话以使更新后的 bashrc 文件生效。")])]),e._v(" "),s("li",[s("p",[e._v("新建项目")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("vue create <Project Name> // 文件名 不支持驼峰（含大写字母）\n")])])]),s("p",[e._v("回车后会提示： "),s("code",[e._v("Please pick a preset: (Use arrow keys)")])]),e._v(" "),s("p",[e._v("请选择一个 preset （预设），使用上下键选择，按回车确认。")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("default(babel，eslint)")])]),e._v(" "),s("p",[e._v("默认设置（直接enter）非常适合快速创建一个新项目的原型，没有带任何辅助功能的 npm 包。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("Manually select features")])]),e._v(" "),s("p",[e._v("手动设置是我们所需要的面向生产的项目，提供可选功能的 npm 包。")]),e._v(" "),s("p",[e._v("选择手动配置后的操作如下：")]),e._v(" "),s("p",[e._v("用方向键选择（按 “空格键”选择/取消选择，A键全选/取消全选）对应功能。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection)\n>( ) Babel                            //转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。\n ( ) TypeScript                       // TypeScript是一个JavaScript（后缀.js）的超集（后缀.ts）包含并扩展了 JavaScript 的语法，需要被编译输出为 JavaScript在浏览器运行\n ( ) Progressive Web App (PWA) Support// 渐进式Web应用程序\n ( ) Router                           // vue-router（vue路由）\n ( ) Vuex                             // vuex（vue的状态管理模式）\n ( ) CSS Pre-processors               // CSS 预处理器（如：less、sass）\n ( ) Linter / Formatter               // 代码风格检查和格式化（如：ESlint）\n ( ) Unit Testing                     // 单元测试（unit tests）\n ( ) E2E Testing                      // 端到端测试，e2e（end to end） 测试\n")])])]),s("p",[e._v("在选择功能后，会询问更细节的配置，以下是全部功能选择后的提示。")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("Use class-style component syntax? (Y/n)")])]),e._v(" "),s("p",[e._v("是否使用 Class 风格装饰器?")]),e._v(" "),s("p",[e._v("即原本是："),s("code",[e._v("home = new Vue()")]),e._v(" 创建 vue 实例，")]),e._v(" "),s("p",[e._v("使用装饰器后："),s("code",[e._v("class home extends Vue{}")]),e._v("。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? (Y/n)")])]),e._v(" "),s("p",[e._v("是否使用 babel 做转义?")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("User history mode for router? (Reuires proper server setup for index fallback in production) (Y/n)")])]),e._v(" "),s("p",[e._v("路由使用历史模式?")]),e._v(" "),s("p",[e._v("Vue-Router 利用了浏览器自身的 hash 模式和 history 模式的特性来实现前端路由（通过调用浏览器提供的接口）。")]),e._v(" "),s("p",[e._v("hash： 浏览器url址栏中的 # 符号（如这个 URL："),s("code",[e._v("http://www.abc.com/#/hello")]),e._v("，hash 的值为“ #/hello”），hash 不被包括在 HTTP 请求中（对后端完全没有影响），因此改变 hash 不会重新加载页面。")]),e._v(" "),s("p",[e._v("history：利用了 HTML5 History Interface 中新增的 pushState( ) 和 replaceState( ) 方法（需要特定浏览器支持）。单页客户端应用，history mode 需要后台配置支持（详细参见："),s("a",{attrs:{href:"https://router.vuejs.org/zh/guide/essentials/history-mode.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://router.vuejs.org/zh/guide/essentials/history-mode.html"),s("OutboundLink")],1),e._v("）。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): (Use arrow keys)")])]),e._v(" "),s("p",[e._v("请用上下键选择 CSS 预处理器（主要为 css 解决浏览器兼容、简化代码等问题）。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(">Sass/SCSS (with dart-sass)\n Sass/SCSS (with node-sass)\n Less\n Stylus\n")])])]),s("p",[e._v("Sass/SCSS: node-sass是 自动编译实时的，dart-sass 需要保存后才会生效，sass 官方目前主力推 dart-sass 最新的特性都会在这个上面先实现。")]),e._v(" "),s("p",[e._v("Sass 支持的功能比 Less 要多一些，我更推荐使用 Sass，具体的区别后期说明。")]),e._v(" "),s("p",[e._v("Stylus 我没去了解过，所以和前两者区别未知，等后续学习后再具体说明。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("Pick a linter / formatter config: (Use arrow keys)")])]),e._v(" "),s("p",[e._v("使用上下键选择代码风格检查和格式化的规范类型。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(">TSLint                            // typescript格式验证工具，但建议使用eslint\n ESLint with error prevention only // 只进行报错提醒\n ESLint + Airbnb config            // 不严谨模式\n ESLint + Standard config          // 正常模式。无分号，不支持修改规则\n ESLint + Prettier                 // 严格模式。自动改变代码风格，推荐选这个\n")])])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)")])]),e._v(" "),s("p",[e._v("选择代码检查方式（按 “空格键”选择/取消选择，A键全选，I键反选）。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(">(*) Lint on save           // 保存时检查，推荐选这个\n ( ) Lint and fix on commit // fix和commit的时候检查\n")])])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("Pick a unit testing solution: (Use arrow keys)")])]),e._v(" "),s("p",[e._v("使用上下键选择单元测试。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(">Mocha + Chai  // mocha灵活,只提供简单的测试结构，如果需要其他功能需要添加其他库/插件完成。必须在全局环境中安装\n Jest          // 安装配置简单，容易上手。内置Istanbul，可以查看到测试覆盖率，相较于Mocha:配置简洁、测试代码简洁、易于和babel集成、内置丰富的expect\n")])])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("Pick a E2E testing solution: (Use arrow keys)")])]),e._v(" "),s("p",[e._v("使用上下键选择端到端测试。")]),e._v(" "),s("p",[e._v("端到端测试，属于黑盒测试，通过编写测试用例，自动化模拟用户操作，确保组件间通信正常，程序流数据传递如预期。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(">Cypress (Chrome only)       // 测试写法和单元测试一致，只支持chrome类浏览器\n Nightwatch (Selenium-based) // 支持浏览器种类多\n")])])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? (Use arrow keys)")])]),e._v(" "),s("p",[e._v("使用上下键选择选择 Babel, PostCSS, ESLint 等自定义配置文件的存放位置？")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(">In dedicated config files // 独立文件放置\n In package.json           // 放 package.json 里\n")])])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("Save this as a preset for future projects? (Y/n)")])]),e._v(" "),s("p",[e._v("是否保存本次配置（之后可以直接使用）。")]),e._v(" "),s("p",[e._v("y:记录本次配置，然后需要你起个名; n：不记录本次配置。")])])])])])])]),e._v(" "),s("h2",{attrs:{id:"搭建报错"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搭建报错"}},[e._v("#")]),e._v(" 搭建报错")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[e._v("这是使用 Vue CLI v3.11.0 搭建项目时遇到的错，不仅成功率低，而且创建新项目时特别慢，也可能跟我选择的插件比较多有关系。最终看到 Vue CLI v4.0.0 在 2019-10-16 发布，然后升级成最新版本，一次性就创建完成，没有卡顿现象，也不慢，特别高兴，哈哈。")])]),e._v(" "),s("p",[s("code",[e._v("vue create vue create <Project Name>")]),e._v(" 报错：")]),e._v(" "),s("p",[s("code",[e._v("Unexpected end of JSON input while parsing near......")])]),e._v(" "),s("p",[e._v("执行命令"),s("code",[e._v("npm cache clean --force")]),e._v(" 清除缓存，如果还是不行的话，再重复多试几次，我就是这样搭建项目成功的。")])])}),[],!1,null,null,null);t.default=v.exports}}]);