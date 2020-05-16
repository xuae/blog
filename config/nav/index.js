/**
 * 顶部导航链接
 * 分类和标签除外，分类和标签配置在 themeConfig blogConfig 中
 */

module.exports = [
  // { text: '主页', icon: 'reco-home', link: '/' },
  { text: '时轴', link: '/timeline/', icon: 'reco-date' },
  { text: '留言', link: '/comment', icon: 'reco-suggestion' },
  require('./documents'),
  require('./utils'),

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
];
