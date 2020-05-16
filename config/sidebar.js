/**
 * 侧边栏配置
 */

const fs = require('fs');
const path = require("path");

const util = require('./util.js');
const PATH = path.dirname(__dirname);
// 需要排除的目录
const excludeDirectories = ['config', 'docs', 'node_modules'];
// 需要排除的文件
const excludeFiles = ['README.md', 'readme.md', 'index.md'];

// 需要显示在侧边栏的目录
const directories = fs.readdirSync(PATH).filter(file => {
  return fs.statSync(file).isDirectory() && !file.startsWith('.') && !excludeDirectories.includes(file);
});

// 侧边栏数据
const sidebar = [];

// sidebar: [
//   {
//     title: 'other',
//     path: '/other/',
//     collapsable: false,
//     sidebarDepth: 2,
//     children: ['/other/test', '/other/a'],
//   },
//   {
//     title: 'vue',
//     path: '/vue/',
//     collapsable: false,
//     sidebarDepth: 2,
//   },
// ],

directories.forEach(directory => {
  // 需要显示在侧边栏的 markdown 文件
  const directoryPath = `${PATH}/${directory}`
  const children = fs.readdirSync(directoryPath).filter(file => {
    return fs.statSync(`${directoryPath}/${file}`).isFile() && file.endsWith('.md') && !excludeFiles.includes(file);
  }).map(file => `/${directory}/${file}`);

  if(children.length > 0) {
    sidebar.push({
      /**
       * 侧边栏标题(必需的)
       */
      title: util.kebab2Pascal(directory),

      /**
       * 是否可折叠(可选的)
       * 侧边栏的每个子组默认是可折叠的
       * 设置 collapsable: false 可以让一个组永远都是展开状态
       */
      // collapsable: false,

      /**
       * 侧边栏深度(可选的)
       * 默认的深度是 1，它将提取到 h2 的标题
       * 设置成 0 将会禁用标题（headers）链接
       * 最大的深度为 2，它将同时提取 h2 和 h3 标题
       */
      sidebarDepth: 2,

      children: children,
    });
  } else {
    sidebar.push({
      title: util.kebab2Pascal(directory),
      path: `/${directory}/`,
    })
  }
});

module.exports = sidebar;
