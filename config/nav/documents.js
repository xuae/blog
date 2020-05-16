/**
 * 顶部导航 - 文档链接
 */

module.exports = {
  text: '文档',
  icon: 'reco-api',
  items: [
    {
      text: '基础',
      items: [
        { text: 'Axios', link: 'http://www.axios-js.com/zh-cn/docs/' },
        { text: 'ES6', link: 'https://es6.ruanyifeng.com/' },
        { text: 'MDN', link: 'https://developer.mozilla.org/' },
        { text: 'TypeScript', link: 'https://www.tslang.cn/docs/handbook/basic-types.html' },
      ],
    },
    {
      text: '框架',
      items: [
        { text: 'Vue', link: 'https://cn.vuejs.org/v2/guide/' },
        { text: 'Vue CLI', link: 'https://cli.vuejs.org/zh/' },
        { text: 'Vue Router', link: 'https://router.vuejs.org/zh/' },
        { text: 'Laravel', link: 'https://xueyuanjun.com/books/laravel-docs-5_5' },
        { text: 'Vuex', link: 'https://vuex.vuejs.org/zh/' },
      ],
    },
    {
      text: '组件',
      items: [
        { text: 'Ant Design Vue', link: 'https://www.antdv.com/docs/vue/introduce-cn/' },
        { text: 'Awesome Vue', link: 'https://github.com/vuejs/awesome-vue' },
        { text: 'Element', link: 'https://element.eleme.cn/#/zh-CN/component/installation' },
        { text: 'Muse-UI', link: 'https://muse-ui.org/#/zh-CN/button' },
        { text: 'Vuetify', link: 'https://vuetifyjs.com/zh-Hans/components/buttons/' },
      ],
    },
  ],
};
