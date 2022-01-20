/**
 * vuepress 配置
 */

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
   * 主题：vuepress-theme-reco
   * https://vuepress-theme-reco.recoluan.com/
   */
  theme: 'reco',

  /**
   * 移动端优化
   * 在移动端，搜索框在获得焦点时会放大，并且在失去焦点后可以左右滚动，这可以通过设置元来优化。
   */
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],

  // 语言配置
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },

  /**
   * 默认主题配置
   */
  themeConfig: {
    // 显示的主题风格类型
    type: 'blog',

    // 顶部搜索
    search: true,
    searchMaxSuggestions: 10,

    logo: '/avatar.gif',

    // author
    author: 'xuae',
    authorAvatar: '/avatar.png',

    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'http://github.com/xuae/blog',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '在 GitHub 上编辑此页',

    // 最后更新时间
    lastUpdated: '上次更新',

    // 项目开始时间，只填写年份
    startYear: '2019',

    /**
     * 修改默认语言配置
     */
    // locales: {
    //   '/': {
    //     recoLocals: {
    //       homeBlog: {
    //         article: '美文', // 默认 文章
    //         tag: '标识', // 默认 标签
    //         category: '类别', // 默认 分类
    //         friendLink: '友链' // 默认 友情链接
    //       }
    //     }
    //   }
    // },

    /**
     * 友情链接
     */
    friendLink: require('./config/friendLink'),

    /**
     * 顶部导航栏链接
     */
    nav: require('./config/nav/index'),

    /**
     * 博客配置
     */
    blogConfig: {
      // category: {
      //   location: 2, // 在导航栏菜单中所占的位置，默认2
      //   text: '分类', // 默认文案 “分类”
      // },
      tag: {
        location: 2, // 在导航栏菜单中所占的位置，默认3
        text: '标签', // 默认文案 “标签”
      }
    },

    /**
     * 评论及阅读量显示设置
     * 设置 leanCloud(https://leancloud.cn/) 里面的 AppId 和 AppKey
     */
    valineConfig: require('./config/valine'),

    sidebar: require('./config/sidebar'),
    subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
  },

  markdown: {
    // 显示代码的行数
    lineNumbers: true
  },

  plugins: [
    /**
     * 为博客文章自动随机添加名人名言或其他，可自定义样式和内容
     * https://github.com/zpj80231/vuepress-plugin-boxx
     */
    ["vuepress-plugin-boxx"]
  ],
}
