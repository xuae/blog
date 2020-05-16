---
    title: Vue3.0 Beta
    date: 2020-04-29
    categories:
     - vue
    tags:
     - vue
---

::: tip

尤雨溪在2020年4月21日Vue3.0 Beta直播基本内容

Vue3.0 Beta 项目地址：[https://github.com/xuae/vue-next-test](https://github.com/xuae/vue-next-test)

:::

## 全新文档`RFCs`
- `All planned RFCs merged & implemented`: 所有的进度和文档都将在全新`RFCs`文档可以看到
- `Focus is now on stability and library integrations`: Vue.js 3.0 Beta发布后的工作重点是保证稳定性和推进各类库集成

## 六大亮点
- `Performance`: 性能更比Vue 2.0强
- `Tree shaking support`: 可以将无用模块“剪辑”，仅打包需要的
- `Composition API`: 组合API
- `Fragment, Teleport, Suspense`: “碎片”，`Teleport`即`Protal传送门`，“悬念”
- `Better TypeScript support`: 更优秀的Ts支持
- `Custom Renderer API`: 暴露了自定义渲染`API`

下面将按顺序分别描述

## Performance
- `Rewritten virtual dom implementation`: 重写了虚拟`Dom`的实现（且保证了兼容性，脱离模版的渲染需求旺盛）
- `Compiler-informed fast paths`: 编译模板的优化
- `More efficient component initialization`: 更高效的组件初始化
- `1.3~2x better update performance*`: update性能提高1.3~2倍
- `2~3x faster SSR*`: SSR速度提高了2~3倍

______
### 要点1: 编译模板的优化

::: tip
渲染模板查看工具地址: [https://vue-next-template-explorer.netlify.app/](https://vue-next-template-explorer.netlify.app/)

:::

假设要编译以下代码

```
<div>
  <span/>
  <span>{{ msg }}</span>
</div>
```
将会被编译成以下模样: 
```
import { createVNode as _createVNode, toDisplayString as _toDisplayString, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("div", null, [
    _createVNode("span", null, "static"),
    _createVNode("span", null, _toDisplayString(_ctx.msg), 1 /* TEXT */)
  ]))
}

// Check the console for the AST
```
注意看第二个`_createVNode`结尾的“1”: 

Vue 在运行时会生成`number`（大于 0）值的`PatchFlag`，用作标记。

仅带有`PatchFlag`标记的节点会被真正追踪，且无论层级嵌套多深，它的动态节点都直接与`Block`根节点绑定，无需再去遍历静态节点

再看以下例子: 
```
<div>
  <span>static</span>
  <span :id="hello" class="bar">{{ msg }}</span>
</div>
```

会被编译成: 
```
import { createVNode as _createVNode, toDisplayString as _toDisplayString, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("div", null, [
    _createVNode("span", null, "static"),
    _createVNode("span", {
      id: _ctx.hello,
      class: "bar"
    }, _toDisplayString(_ctx.msg), 9 /* TEXT, PROPS */, ["id"])
  ]))
}
```
`PatchFlag` 变成了`9 /* TEXT, PROPS */, ["id"]`

它会告知我们不光有`TEXT`变化，还有`PROPS`变化（id）

这样既跳出了`virtual dom`性能的瓶颈，又保留了可以手写`render`的灵活性。
等于是: 既有`react`的灵活性，又有基于模板的性能保证。

______
### 要点2: 事件监听缓存: `cacheHandlers`

假设我们要绑定一个事件: 
```
<div>
  <span @click="onClick">
    {{msg}}
  </span>
</div>
```
关闭`cacheHandlers`后: 
```
import { toDisplayString as _toDisplayString, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("div", null, [
    _createVNode("span", { onClick: _ctx.onClick }, _toDisplayString(_ctx.msg), 9 /* TEXT, PROPS */, ["onClick"])
  ]))
}
```
`onClick`会被视为`PROPS`动态绑定，后续替换点击事件时需要进行更新。

开启`cacheHandlers`后: 
```
import { toDisplayString as _toDisplayString, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("div", null, [
    _createVNode("span", {
      onClick: _cache[1] || (_cache[1] = $event => (_ctx.onClick($event)))
    }, _toDisplayString(_ctx.msg), 1 /* TEXT */)
  ]))
}
```
`cache[1]`，会自动生成并缓存一个内联函数，“神奇”的变为一个静态节点。
Ps: 相当于`React`中`useCallback`自动化。

并且支持手写内联函数: 
```
<div>
  <span @click="()=>foo()">
    {{msg}}
  </span>
</div>
```

______
### 补充: `PatchFlags`枚举定义
而通过查询`Ts`枚举定义，我们可以看到分别定义了以下的追踪标记: 
```
export const enum PatchFlags {
  TEXT = 1,// 表示具有动态textContent的元素
  CLASS = 1 << 1,  // 表示有动态Class的元素
  STYLE = 1 << 2,  // 表示动态样式（静态如style="color: red"，也会提升至动态）
  PROPS = 1 << 3,  // 表示具有非类/样式动态道具的元素。
  FULL_PROPS = 1 << 4,  // 表示带有动态键的道具的元素，与上面三种相斥
  HYDRATE_EVENTS = 1 << 5,  // 表示带有事件监听器的元素
  STABLE_FRAGMENT = 1 << 6,   // 表示其子顺序不变的片段（没懂）。 
  KEYED_FRAGMENT = 1 << 7, // 表示带有键控或部分键控子元素的片段。
  UNKEYED_FRAGMENT = 1 << 8, // 表示带有无key绑定的片段
  NEED_PATCH = 1 << 9,   // 表示只需要非属性补丁的元素，例如ref或hooks
  DYNAMIC_SLOTS = 1 << 10,  // 表示具有动态插槽的元素
  // 特殊 FLAGS -------------------------------------------------------------
  HOISTED = -1,  // 特殊标志是负整数表示永远不会用作diff,只需检查 patchFlag === FLAG.
  BAIL = -2 // 一个特殊的标志，指代差异算法（没懂）
}
```
感兴趣的可以看源码: `packages/shared/src/patchFlags.ts`

## Tree shaking support
- `Most optional features(e.g. v-model, <transition>) are noe tree-shakable`: 可以将无用模块“剪辑”，仅打包需要的（比如 `v-model`, `<transition>`，用不到就不会打包）
- `Bare-bone HellWorld size: 13.5kb`: 一个简单“`HelloWorld`”大小仅为: 13.5kb
    - `11.75kb with only Composition API support`: `Composition API` 仅11.75kb
- `All runtime features included: 22.5kb`: 包含运行时完整功能: `22.5kb`
    - `More features but still lighter than Vue 2`: 拥有更多的功能，却比`Vue 2`更迷你。
    
很多时候，我们并不需要 `vue`提供的所有功能，在 `vue 2` 并没有方式排除掉，但是 `3.0` 都可能做成了按需引入

## Composition API

::: tip

与`React Hooks`类似的东西，实现方式不同

:::

- `Usable alongside existing Options API`: 可与现有的 Options API一起使用
- `Flexible logic composition and reuse`: 灵活的逻辑组合与复用
- `Reactivity module can be used as a standalone library`: `vue 3`的响应式模块可以和其他框架搭配使用

混入(`mixin`) 将不再作为推荐使用，`Composition API`可以实现更灵活且无副作用的复用代码。

感兴趣的可以查看: [https://composition-api.vuejs.org/#summary](https://composition-api.vuejs.org/#summary)

`Composition API`包含了六个主要`API`

可以到这里查看: [https://composition-api.vuejs.org/api.html#setup](https://composition-api.vuejs.org/api.html#setup)

Ps: 其它的均为常见的工具函数，可先忽略不看。

## Fragment

::: tip

`Fragment`翻译为: “碎片”

:::

- `No longer limited to a single root node in templates`: 不再限于模板中的单个根节点
- `Manual render functions can simply return Arrays`: `render` 函数也可以返回数组了，类似实现了 `React.Fragments` 的功能 。
- `Just works`

______
### `<Teleport>`
- `Previously known as <Portal>`: 以前称为`<Portal>`，译作传送门
- `More details to be shared by @Linusborg`: 更多细节将由@Linusborg 分享

`<Teleport>`原先是对标 `React Portal`（增加多个新功能，更强）

但因为`Chrome`有个提案，会增加一个名为`Portal`的原生`element`，为避免命名冲突，改为`Teleport`

______
### `<Suspense>`

::: tip

`Suspense`翻译为: “悬念”

:::

- `Wait on nested async dependencies in a nested tree`: 可在嵌套层级中等待嵌套的异步依赖项
- `Works with async setup()`: 支持`async setup()`
- `Works with Async Components`: 支持异步组件

虽然`React 16`引入了`Suspense`，但直至现在都不太能用。如何将其与异步数据结合，还没完整设计出来。

Vue 3 的`<Suspense>`更加轻量: 

仅 5%应用能感知运行时的调度差异，综合考虑下，Vue3 的`<Suspense>` 没和 `React` 一样做运行调度处理

______
### 更好的TypeScript支持
- `Codebase written in TS w/ auto-generated type definitions`: `Vue 3`是用`TypeScript`编写的库，可以享受到自动的类型定义提示
- `API is the same in JS and TS`: `JavaScript`和`TypeScript`中的 API 是相同的。
    - `In fact, code will also be largely the same`: 事实上，代码也基本相同
- `TSX support`: 支持TSX
- `Class component is still supported(vue-class-component@next is currently in alpha)`: `class`组件还会继续支持，但是需要引入`vue-class-component@next`，该模块目前还处在 alpha 阶段。

还有`Vue 3 + TypeScript` 插件正在开发，有类型检查，自动补全等功能。目前进展可喜。

______
### Custom Renderer API: 自定义渲染器 API
- `NativeScript Vue integration underway by @rigor789`: 正在进行`NativeScript Vue`集成
- `Users already experimenting a/ WebGL custom renderer that can be used alongside a normal Vue application(Vugel)`: 用户可以尝试`WebGL`自定义渲染器，与普通 Vue 应用程序一起使用（`Vugel`）。

意味着以后可以通过 `vue`， `Dom` 编程的方式来进行 `webgl` 编程 。感兴趣可以看这里: [Getting started vugel](https://vugel.planning.nl/#application)

## 剩余工作

______
### Docs & Migration Guides
- `New Docs under heavy work by @NataliaTepluhina, @sdras, @bencodezen & @phanan`: 新的文档编写交由`@NataliaTepluhina, @sdras, @bencodezen & @phanan` 负责
- `@sdras starting to work on Migration Guide`: `@sdras` 正在做自动升级迁移工具
- `@sodatea has started working on CodeMods`: `@sodatea` 已经开始研究`CodeMods`

______
### Router
- `vue-router@next is currently in alpha, thanks to work by @posva`: 下一代 `Router`: `vue-router@next`已在`alpha`阶段，感谢`@posva`

有部分的`API`变动，可到`RFC上`看

______
### Vuex
- `vuex@next(same API but with Vue 3 compat) currently in alpha, thanks to work by @KiaKing`: 下一代`Vuex`: `vuex@next`（与`Vue 3 compat`相同的 API），已在`alpha`阶段，感谢`@KiaKing`
- `Team is experimenting with Vuex API simplification for the next iteration`: 团队正在为下一次迭代试验`Vuex API`的简化

目前以兼容`Vue 3`为主，基本上没有`API`变动，莫慌

______
### CLI
- `Experimental Support via vue-cli-plugin-vue-next by @sodatea`: `CLI`插件: `vue-cli-plugin-vue-next`by `@sodatea`
- `(wip)CodeMods support for upgrading Vue 2 applications`: （wip）`CodeMods`支持升级`Vue 2`应用

______
### 新工具: vite（法语 “快”）

::: tip

地址: [https://github.com/vuejs/vite](https://github.com/vuejs/vite)

:::

一个简易的`http`服务器，无需`webpack`编译打包，根据请求的`Vue`文件，直接发回渲染，且支持热更新（非常快）

______
### vue-test-utils
- `test-utils@next being worked on by @lmiller1990, @dobromir-hristov, @afontcu & @JessicaSachs`: 下一代`test-utils`:`test-utils@next`
by `@lmiller1990, @dobromir-hristov, @afontcu & @JessicaSachs`

______
### DevTools
- `Early prototype already working by @Akryum, full integration will be worked on as we reach beta`: 早期的原型已经由`@Akryum` 完成，当我们到`beta`时，将完全集成

目前需要花更多精力去完善

______
### IDE Support (Vetur)
- `@znck currently experimenting with Type checking for templates`: `@znck`目前正在试验模板的类型检查
- `@octref will be working on Vetur integration for Vue 3 in May`: `@octref`将在 5 月为`Vue 3`进行`Vetur`集成


______
### Nuxt
- `Nuxt team is working on Vue 3 integration and already has working prototype`: 目前Nuxt的整合工作也正在进行中，内部团队已经跑起来了。还需要时间磨合

______
### Vue 2.x还有 2.7 版本
- `There will be one last minor release(2.7)`: 将有最后一个小版本（2.7）
- `Backporting compatible improvements from 3.0`: " 从`Vue 3`向后移植兼容的改进(不损坏兼容性前提下)
- `Deprecation warnings for features removed in 3.0`: 加上在`Vue 3`中删除的功能的弃用警告
- `LTS for 18 months`: `LTS` 18 个月

最后建议: `Vue 3`虽好，如果你的项目很稳定，且对新功能无过多的要求或者迁移成本过高，则不建议升级
