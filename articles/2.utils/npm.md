---
    title: NPM
    date: 2020-05-12
    tags:
     - npm
---

<Boxx/>

## npm 传参

以下命令是在 vue cli v4.x 搭建的项目中运行的

package.json 中的代码如下：
```json
{
  "scripts": {
    "serve": "vue-cli-service serve"
  }
}
```

平时执行的命令：
```
npm run serve
```

### 传 webpack 支持的参数
package.json 中传参是这样的：
```json
{
  "scripts": {
    "serve": "vue-cli-service serve --port 8000"
  }
}
```

在 `npm run serve` 中传参不能直接在其后添加 `--port 8000`
```
npm run serve --port 8000

// 实际运行命令是：
vue-cli-service serve 8000
```

所以在 npm 参数传 `--xxx` 的时候，需要这样 `npm -- --xxx` 才能生效，具体请查看阮一峰的 [npm scripts 使用指南](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)

最终传参需要执行以下命令：
```
npm run serve -- --port 8000

// 实际运行命令是：
vue-cli-service serve --port 8000
```

### 传自定义参数
```
npm run serve -- --custom-option=custom
```

若直接运行 `npm run serve custom`，custom 会被当成 `webpack` 的内部参数，运行时会报错，提示 custom 依赖找不到

所以需要用 `--custom-option=custom` 之类的取代 `custom`，让 webpack 将其识别为 option 参数，就不会被内部作为特定参数处理了

## npm 报错

### `operation not permitted`（没有许可证）
- 原因：npm 的版本过高，导致一些依赖包下载不全
- 解决：`npm install` 后面增加 `–no-optional`，例如：`npm i xxx --no-optional`或者`npm i –no-optional`

### 其他错误，清空缓存
- 方法一：`npm cache clean --force`

- 方法二：删除 npmrc 文件 `C:\Users\{username}\.npmrc`
