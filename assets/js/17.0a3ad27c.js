(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{498:function(s,t,n){"use strict";n.r(t);var a=n(4),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"注意事项"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",[s._v("场景说明：")]),s._v(" "),n("p",[s._v("浏览器：Google Chrome v80.0.3987.122（正式版本）（64 位），QQ 和微信的内置浏览器")]),s._v(" "),n("p",[s._v("操作：第一次访问"),n("code",[s._v("http://localhost:8080/#/form")]),s._v("，填写表单，点击提交按钮")]),s._v(" "),n("p",[s._v("浏览器会刷新页面，数据丢失，然后谷歌浏览器地址变更为："),n("code",[s._v("http://localhost:8080/?#/form")]),s._v("（QQ 和微信内置浏览器未查看其地址），随后再提交都不会出现刷新页面的情况")])]),s._v(" "),n("ul",[n("li",[s._v("使用 a-form 的 submit 方法时必须阻止默认事件，否则可能出现刷新页面的情况")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<a-form :form="form" @submit="onSubmit">\n    // 省略其他代码\n    <a-button html-type="submit">提交</a-button>\n</a-form>\n\n<script>\n    // 省略其他代码，以下是方法\n    onSubmit(e) { // e 是 Event\n        e.preventDefault();\n        // 提交数据\n        // this.form.validate.....\n    }\n<\/script>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);