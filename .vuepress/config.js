const sidebar = require('../config/sidebar.js');

module.exports = {
  /**
   * 部署站点的基础路径
   * 如果你打算发布到 https://<USERNAME>.github.io/，则可以省略这一步，因为 base 默认即是 "/"。
   * 如果你打算发布到 https://<USERNAME>.github.io/<REPO>/（也就是说你的仓库在 https://github.com/<USERNAME>/<REPO>），则将 base 设置为 "/<REPO>/"。
   */
  base: '/blog/',

  /**
   * 指定 vuepress build 的输出目录
   */
  dest: 'docs',

  title: 'xuae',
  description: '一只有代码洁癖的程序猿',

  /**
   * 页面滚动 1.2.0+
   * smoothScroll = true, 启用页面滚动效果
   */
  smoothScroll: true,

  /**
   * 多语言配置
   */
  // locales: {
  //   // 键名是该语言所属的子路径
  //   // 作为特例，默认语言可以使用 '/' 作为其路径。
  //   '/': {
  //     lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
  //     title: 'VuePress',
  //     description: 'Vue 驱动的静态网站生成器'
  //   },
  // },

  /**
   * 主题：vuepress-theme-reco
   * https://vuepress-theme-reco.recoluan.com/
   */
  theme: 'reco',

  /**
   * 移动端优化
   * 在移动端，搜索框在获得焦点时会放大，并且在失去焦点后可以左右滚动，这可以通过设置元来优化。
   */
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],

  /**
   * 默认主题配置
   */
  themeConfig: {
    search: true,
    searchMaxSuggestions: 10,

    // author
    author: 'xuae',
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'http://www.github.com/xuae/blog',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '在 GitHub 上编辑此页',

    // 最后更新时间
    lastUpdated: '上次更新',

    // 项目开始时间，只填写年份
    startYear: '2019',

    /**
     * 顶部导航栏链接
     */
    nav: [
      { text: '主页', icon: 'reco-home', link: '/' },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },

      /**
       * 下拉菜单，可设置分组
       */
      // {
      //   text: 'Languages',
      //   ariaLabel: 'Language Menu',
      //   items: [
      //     { text: 'Chinese', link: '/language/chinese/' },
      //     { text: 'Japanese', link: '/language/japanese/' },
      //     // { text: 'Group1', items: [/*  */] },
      //     // { text: 'Group2', items: [/*  */] },
      //   ]
      // },
    ],

    /**
     * 博客配置
     */
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类', // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签', // 默认文案 “标签”
      }
    },

    ...sidebar,
  },
}
