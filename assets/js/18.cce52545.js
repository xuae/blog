(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{499:function(s,e,a){"use strict";a.r(e);var t=a(4),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("Boxx"),s._v(" "),a("h2",{attrs:{id:"npm-传参"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-传参"}},[s._v("#")]),s._v(" npm 传参")]),s._v(" "),a("p",[s._v("以下命令是在 vue cli v4.x 搭建的项目中运行的")]),s._v(" "),a("p",[s._v("package.json 中的代码如下：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"serve"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vue-cli-service serve"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("平时执行的命令：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm run serve\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"传-webpack-支持的参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传-webpack-支持的参数"}},[s._v("#")]),s._v(" 传 webpack 支持的参数")]),s._v(" "),a("p",[s._v("package.json 中传参是这样的：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"serve"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vue-cli-service serve --port 8000"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("在 "),a("code",[s._v("npm run serve")]),s._v(" 中传参不能直接在其后添加 "),a("code",[s._v("--port 8000")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm run serve --port 8000\n\n// 实际运行命令是：\nvue-cli-service serve 8000\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("所以在 npm 参数传 "),a("code",[s._v("--xxx")]),s._v(" 的时候，需要这样 "),a("code",[s._v("npm -- --xxx")]),s._v(" 才能生效，具体请查看阮一峰的 "),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("npm scripts 使用指南"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("最终传参需要执行以下命令：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm run serve -- --port 8000\n\n// 实际运行命令是：\nvue-cli-service serve --port 8000\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"传自定义参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传自定义参数"}},[s._v("#")]),s._v(" 传自定义参数")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm run serve -- --custom-option=custom\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("若直接运行 "),a("code",[s._v("npm run serve custom")]),s._v("，custom 会被当成 "),a("code",[s._v("webpack")]),s._v(" 的内部参数，运行时会报错，提示 custom 依赖找不到")]),s._v(" "),a("p",[s._v("所以需要用 "),a("code",[s._v("--custom-option=custom")]),s._v(" 之类的取代 "),a("code",[s._v("custom")]),s._v("，让 webpack 将其识别为 option 参数，就不会被内部作为特定参数处理了")]),s._v(" "),a("h2",{attrs:{id:"npm-报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-报错"}},[s._v("#")]),s._v(" npm 报错")]),s._v(" "),a("h3",{attrs:{id:"operation-not-permitted（没有许可证）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#operation-not-permitted（没有许可证）"}},[s._v("#")]),s._v(" "),a("code",[s._v("operation not permitted")]),s._v("（没有许可证）")]),s._v(" "),a("ul",[a("li",[s._v("原因：npm 的版本过高，导致一些依赖包下载不全")]),s._v(" "),a("li",[s._v("解决："),a("code",[s._v("npm install")]),s._v(" 后面增加 "),a("code",[s._v("–no-optional")]),s._v("，例如："),a("code",[s._v("npm i xxx --no-optional")]),s._v("或者"),a("code",[s._v("npm i –no-optional")])])]),s._v(" "),a("h3",{attrs:{id:"其他错误，清空缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他错误，清空缓存"}},[s._v("#")]),s._v(" 其他错误，清空缓存")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("方法一："),a("code",[s._v("npm cache clean --force")])])]),s._v(" "),a("li",[a("p",[s._v("方法二：删除 npmrc 文件 "),a("code",[s._v("C:\\Users\\{username}\\.npmrc")])])])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);