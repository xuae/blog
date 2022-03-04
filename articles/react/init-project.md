---
    title: 初始化React项目
    date: 2022-03-03
    tags:
     - react
---

:::tip
以下是亲自动手实践的，第一次自己搭建 React 项目，写得不好的地方，有待改进
:::

## 系统要求

- `Node` >= 14.0.0
- `npm` >= 5.6

## 创建项目

执行以下命令即可自动创建项目
```shell script
npx create-react-app 项目名称
```

::: warning
**注意**:
npx 不是拼写错误 —— 它是 [npm 5.2+ 附带的 package 运行工具](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) 
:::

### 默认目录结构

```
├── README.md
├── node_modules
├── package.json
├── package-lock.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    └── setupTests.js
```

### 命令

- `npm start` 或者 `yarn satrt`：启动项目，打开<http://localhost:3000> 即可访问
- `npm test` 或者 `yarn test`：测试项目
- `npm run build` 或者 `yarn build`：打包项目

## 添加 craco

`create-creact-app` 项目，如果需要手动修改配置，需先 `npm run eject` 弹出配置，但这个过程是**不可逆**的，所以推荐使用第三方工具去修改。第三方工具有：`craco` 或者 `react-app-rewired` ，都可以重写 react 脚手架配置，具体选择 `craco` 还是 `react-app-rewired`，根据需求即可。

我在这儿使用的是 `craco`。

1. 安装 `craco`
    ```shell script
    npm install @craco/craco -D
    # 或
    yarn add @craco/craco -D
    ```
1. 修改 `package.json`，将 `react-scripts` 改为 `craco`
    ```json
    {
      "scripts": {
        "start": "craco start",
        "build": "craco build",
        "test": "craco test",
        "eject": "react-scripts eject"
      }
    }
    ```
1. 在项目根目录新建 `craco.config.js` ，用于修改默认配置
    ```javascript
    /* craco.config.js */
   
    const path = require('path');
    
    module.exports = {
      webpack: {
        // 添加别名
        alias: {
          '@': path.resolve(__dirname, 'src'),
        }
      },
      devServer: {
        // 设置端口
        port: 3100,
        open: true,
        hot: true,
      }
    };
    ```
   
   重新启动，则可看见端口已经从 `3000` 变成了 `3100`，并且支持别名

1. 在项目根目录新建 `webpack.config.js` ，用于输出 webpack 的配置（非必须）

    :::warning
    **注意**：使用 WebStorm 时，无法识别 `craco.config.js` 中的 `webpack` 配置（例如：别名）时，需添加 `webpack.config.js` 配置文件，再在 WebStorm 中配置： File -> Settings -> Languages & Frameworks -> JavaScript -> Webpack 选择此 `webpack.config.js` 文件并应用即可。
    :::
    
    ```javascript
    /* webpack.config.js */
    
    const { createWebpackDevConfig } = require("@craco/craco");
    
    const cracoConfig = require("./craco.config.js");
    const webpackConfig = createWebpackDevConfig(cracoConfig);
    
    module.exports = webpackConfig;
    ```

## 添加 craco-less

若需使用 Less 安装此依赖即可

1. 安装 `craco-less`
    ```shell script
    npm install craco-less -D
    # 或
    yarn add craco-less -D
    ```
1. 修改 `craco.config.js`
    ```javascript
    /* craco.config.js */
   
    const CracoLessPlugin = require('craco-less');
    
    module.exports = {
      // ...
      plugins: [
        {
          // 配置 less 插件
          plugin: CracoLessPlugin,
          options: {
            lessLoaderOptions: {
              lessOptions: {
                // 修改 And Design 变量
                modifyVars: {},
                javascriptEnabled: true,
              }
            }
          }
        }
      ]
    };
    ```
1.  重新启动便可支持 `less`

## 添加 antd

引入 Ant Design 组件库

1. 安装依赖
    ```shell script
    npm install antd -S
    # 或
    yarn add antd
    ```
1. 修改 `src/App.js` 引入 antd 的按钮组件
    ```
    import React from 'react';
    import { Button } from 'antd';
    import './App.css';
    
    const App = () => (
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    );
    
    export default App;
    ```
1. 修改 `src/App.css`，在文件顶部引入 `antd/dist/antd.css`
    ```
    @import '~antd/dist/antd.css';
    ```
1. 完成之后，即可在页面中看见 antd 的蓝色按钮组件

### 定制主题配置
::: tip
所有样式变量：<https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less>
:::
1. 方法一：在 `craco.config.js` 修改变量，使用 `modifyVars` 来进行主题配置，例子如下：
    ```javascript
    const CracoLessPlugin = require('craco-less');
    
    module.exports = {
      plugins: [
        {
          plugin: CracoLessPlugin,
          options: {
            lessLoaderOptions: {
              lessOptions: {
                modifyVars: { '@primary-color': '#1DA57A' },
                javascriptEnabled: true,
              },
            },
          },
        },
      ],
    };
    ```
1. 方法二：配置 less 变量文件，新建一个单独的 `var.less` 变量文件，引入这个文件来覆盖 `antd.less` 里的变量
    
    把  `App.css` 改为 `App.less`，并在顶部加入以下代码
    
    ```
    @import '~antd/lib/style/themes/default.less';
    @import '~antd/dist/antd.less'; // 引入官方提供的 less 样式入口文件
    @import 'var.less'; // 用于覆盖上面定义的变量
    ```
    **注意**：这种方式已经载入了所有组件的样式，不需要也无法和按需加载插件 babel-plugin-import 的 style 属性一起使用

## 修改项目结构
``` editorconfig
├── README.md
├── node_modules
├── craco.config.js       # webpack 配置
├── package.json
├── package-lock.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── assets            # 静态资源
    │   ├── fonts         # 字体
    │   ├── images        # 图片
    │   └── styles        # 样式
    ├── components        # 组件
    ├── routes            # 路由
    ├── store             # 状态管理
    ├── utils             # 工具包
    ├── views             # 页面
    │
    ├── App.less
    ├── App.js
    ├── App.test.js
    ├── index.less
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    └── setupTests.js
```

## 添加路由 react-router-dom
1. 安装 react-router-dom 版本 v6.x
```shell script
npm install react-router-dom -S
# 或
yarn add react-router-dom
```
