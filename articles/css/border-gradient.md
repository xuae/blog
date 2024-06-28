---
    title: 渐变色边框
    date: 2024-06-28
    tags:
     - css
---

<Boxx/>

<div class="box">
  <div class="border1">border-image</div>
  <div class="border2">border-radius + overflow</div>
  <div class="border3">clip-path</div>
  <div class="border4">伪元素叠加</div>
  <div class="border5">background-clip</div>
  <div class="border6">mask</div>
  <div class="border6 border7">背景透明</div>
  <div class="border6 border8">透明圆形</div>
  <div class="border6 border9">半圆</div>
</div>

## border-image
::: danger
**注意**：
实现一个边框渐变色可以用 `border-image`，但是 `border-image` **不支持圆角**。
:::

[border-image](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-image)：`border-image` CSS 属性允许在元素的边框上绘制图像。这使得绘制复杂的外观组件更加简单，也不用在某些情况下使用九宫格了。使用 `border-image` 时，其将会替换掉 `border-style` 属性所设置的边框样式。

**备注**：你应该另外指定 `border-style` 以防边框图像没能加载。虽然规范并没有严格要求这一点，但当 `border-style` 为 `none` 或 `border-width` 为 `0` 时，某些浏览器不会渲染边框图像。

效果： ✅ 渐变边框 ✅ 背景透明 ❌ 圆角

<div class="box"><div class="border1">border-image</div></div>
<style>
.border1 {
    width: 200px;
    height: 100px;
    border-style: solid;
    border-color: red;
    border-width: 2px;
    border-image: linear-gradient( 115deg, #4fcf70, #fad648, #a767e5, #12bcfe, #44ce7b ) 1;
    border-radius: 10px;
}
</style>

代码：
```html
<div class="border"></div>
<style>
.border {
    width: 200px;
    height: 100px;
    border-width: 2px;
    border-style: solid;
    border-image: linear-gradient( 115deg, #4fcf70, #fad648, #a767e5, #12bcfe, #44ce7b ) 1;
}
</style>
```

## border-radius + overflow

::: danger
**注意**：`border-image` + `overflow: hidden`：背景可以设置透明，边框内不是圆角，边框宽度和圆角幅度不能设置的随意。
:::
`border-image` 不受 `border-radius` 影响，但是受到 `overflow` 和 `background-clip` 影响。

边框厚度由伪元素的 `border-width` 控制，外圆角由元素的 `border-width` 控制。

效果： ✅ 渐变边框 ✅ 背景透明 ❌ 圆角（虽然外部圆角有了，但内部还不是圆角）

<div class="box"><div class="border2">border-radius + overflow</div></div>
<style>
.border2{
    width: 200px;
    height: 100px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
}
.border2::after{
    position: absolute;
    content: " ";
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 4px solid;
    border-image: linear-gradient( 115deg, #4fcf70, #fad648, #a767e5, #12bcfe, #44ce7b ) 1;
}
</style>

代码：
```html
<div class="border"></div>
<style>
.border{
    width: 200px;
    height: 100px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
}
.border::after{
    position: absolute;
    content: " ";
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 4px solid;
    border-image: linear-gradient( 115deg, #4fcf70, #fad648, #a767e5, #12bcfe, #44ce7b ) 1;
}
</style>
```

## clip-path
::: danger
**注意**：此方法与 `border-image` + `overflow: hidden` 效果类似，背景可以设置透明，边框内不是圆角，边框宽度和圆角幅度不能设置的随意。
:::

[clip-path](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path)：`clip-path` CSS 属性使用裁剪方式创建元素的可显示区域。区域内的部分显示，区域外的隐藏。

效果： ✅ 渐变边框 ✅ 背景透明 ❌ 圆角（虽然外部圆角有了，但内部还不是圆角）

<div class="box"><div class="border3">clip-path</div></div>
<style>
.border3{
    width: 100px;
    height: 100px;
    position: relative;
    border: 4px solid;
	border-image: linear-gradient(270deg, #18f77f, #17ffff) 1 1;
    clip-path: inset(0 round 10px);
}
</style>

代码：
```html
<div class="border"></div>
<style>
.border{
    width: 100px;
    height: 100px;
    position: relative;
    border: 4px solid;
    border-image: linear-gradient(270deg, #18f77f, #17ffff) 1 1;
    clip-path: inset(0 round 10px);
}
</style>
```

## 伪元素叠加
::: danger
使用伪元素背景叠加到元素背景上实现圆角渐变边框最简单，但背景不透明
:::

效果： ✅ 渐变边框 ❌ 背景透明 ✅ 圆角

<div class="box"><div class="border4">伪元素叠加</div></div>
<style>
.border4{
    width: 180px;
	height: 60px;
	border-radius: 10px;
	background: linear-gradient(270deg, #455364, #aec9e9, #455364);
    z-index: 0;
}
.border4::after{
	content: "";
	position: absolute;
	width: calc(100% - 2px);
	height: calc(100% - 2px);
	background: linear-gradient(180deg, #27a6a7 0%, #054146 100%);
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	border-radius: 10px;
	z-index: -1;
}
</style>

代码：
```html
<div class="border"></div>
<style>
.border{
    width: 180px;
    height: 60px;
    border-radius: 10px;
    background: linear-gradient(270deg, #455364, #aec9e9, #455364);
    z-index: 0;
}
.border::after{
    content: "";
    position: absolute;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    background: linear-gradient(180deg, #27a6a7 0%, #054146 100%);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    z-index: -1;
}
</style>
```

## background-clip

[background-clip](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip): 规定背景的绘制区域。

- 语法：background-clip: border-box | padding-box | content-box

- 描述：
  - border-box: 背景被裁剪到边框盒
  - padding-box: 背景被裁剪到内边距框
  - content-box: 背景被裁剪到内容框

[background-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin): `background-Origin` 属性指定 `background-position` 属性应该是相对位置。**注意如果背景图像 `background-attachment` 是"固定"，这个属性没有任何效果**。

效果： ✅ 渐变边框 ❌ 背景透明 ✅ 圆角

<div class="box"><div class="border5">background-clip</div></div>
<style>
.border5{
    width: 180px;
	height: 60px;
    border: 1px solid transparent;
    background-image: linear-gradient(180deg, #346575 0%, #1a283b 100%), linear-gradient(270deg, #455364, #aec9e9, #455364);
    background-origin: border-box;
	background-clip: content-box, border-box;
	border-radius: 10px;
}
</style>

代码：`background-image` 背景1裁剪到 `content-box`，背景2裁剪到`border-box`。
```html
<div class="border"></div>
<style>
.border{
    width: 180px;
    height: 60px;
    border: 1px solid transparent;
    background-image: linear-gradient(180deg, #346575 0%, #1a283b 100%), linear-gradient(270deg, #455364, #aec9e9, #455364);
    background-origin: border-box;
    background-clip: content-box, border-box;
    border-radius: 10px;
}
</style>
```

## mask
[mask](https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask): CSS 属性 `mask` 允许使用者通过遮罩或者裁切特定区域的图片的方式来隐藏一个元素的部分或者全部可见区域。

[mask-image](https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask-image)：`mask-image` CSS 属性设置了用作元素蒙版层的图像。默认情况下，这意味着蒙版图像的 alpha 通道将与元素的 alpha 通道相乘，类似于`background-image`。

[mask-clip](https://developer.mozilla.org/en-US/docs/Web/CSS/mask-clip)：CSS属性确定受遮罩影响的区域。元素的绘制内容必须限制在这个区域，类似`background-clip`。
- 语法：mask-clip: content-box | padding-box
- 描述：
  - content-box：绘制的内容被裁剪到内容框中
  - padding-box：绘制的内容被裁剪到填充框

[mask-composite](https://developer.mozilla.org/en-US/docs/Web/CSS/mask-composite)：CSS属性表示在当前遮罩层及其下方的遮罩层上使用的合成操作。
- 语法：mask-composite: add | subtract | intersect | exclude
- 描述：
  - add: 叠加（默认）
  - subtract: 减去，排除掉上层的区域
  - intersect: 相交，只显示重合的地方
  - exclude: 排除，只显示不重合的地方

[-webkit-mask-composite](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-mask-composite)：非标准：此功能是非标准的，不在标准轨道上。该 `-webkit-mask-composite` 属性指定应用于同一元素的多个蒙版图像相互合成的方式。蒙版图像的合成顺序与使用 `-webkit-mask-image` 属性声明的顺序相反。
- 语法：-webkit-mask-composite: clear | copy | source-over | source-in | ...
- 描述：
  - clear: 清除，不显示任何遮罩
  - copy: 只显示上方遮罩，不显示下方遮罩
  - source-over
  - source-in: 只显示重合的地方
  - source-out: 只显示上方遮罩，重合的地方不显示
  - source-atop
  - destination-over
  - destination-in: 只显示重合的地方
  - destination-out: 只显示下方遮罩，重合的地方不显示
  - destination-atop;
  - xor: 只显示不重合的地方


效果： ✅ 渐变边框 ✅ 背景透明 ✅ 圆角

<div class="box">
  <div class="border6">mask</div>
  <div class="border6 border7">背景透明</div>
</div>
<style>
.border6{
    width: 200px;
	height: 80px;
    background: rgba(38, 70, 93, 0.5);
	backdrop-filter: blur(10px);
    border-radius: 10px;
}
.border6::after{
	content: "";
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
    border-radius: 10px;
    padding: 1px;
    background: linear-gradient(270deg, #455364, #aec9e9, #455364);
    mask-image: linear-gradient(red, red),linear-gradient(red, red);
    mask-clip: content-box, padding-box;
    -webkit-mask-image: linear-gradient(red, red),linear-gradient(red, red); /*兼容*/
    -webkit-mask-clip: content-box, padding-box; /*兼容*/
    /*mask: linear-gradient(red, red) content-box, linear-gradient(red, red) padding-box;*/ /*等同于 mask-image 加 mask-clip*/
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
 }
.border7{
    background: transparent;
    box-shadow: -4px 2px 4px 0px rgba(0, 0, 0, 0.2), inset 0px 0px 12px 0px rgba(92, 242, 246, 0.61);
}
.border7::after{
  background: linear-gradient(
        180deg,
        rgba(44, 135, 124, 1),
        rgba(95, 250, 255, 1),
        rgba(63, 166, 156, 1)
      );
}
</style>

代码：`padding` 控制边框宽度尺寸，`border-radius` 控制边框圆角大小
```html
<div class="border"></div>
<style>
.border{
    width: 200px;
    height: 80px;
    border-radius: 10px;
    padding: 1px;
    background: linear-gradient(270deg, #455364, #aec9e9, #455364);
    mask: linear-gradient(red, red) content-box, linear-gradient(red, red) padding-box;
    /* exclude排除，只显示不重合的地方,Firefox支持4个属性 */
    mask-composite: exclude;
    /* 只显示下方遮罩，重合的地方不显示 */
    -webkit-mask-composite: destination-out;
}
</style>
```

扩展其他例子：
<div class="box">
  <div class="border6 border8">透明圆形</div>
  <div class="border6 border9">半圆</div>
</div>
<style>
.border8{
    width: 100px;
	height: 100px;
    background: transparent;
}
.border8::after {
    border-radius: 50%;
    padding: 3px;
    background: linear-gradient(180deg, #18f77f, #17ffff);
}
.border9 {
    width: 180px;
	height: 100px;
    background: rgba(20, 97, 125, 0.06);
    box-shadow: 4px 2px 4px 0px rgba(0, 0, 0, 0.2);
}
.border9::after {
    border-radius: 100px 0 0 100px;
    padding: 2px;
    background: linear-gradient(180deg, rgba(151, 151, 151, 0.3), rgba(131, 150, 162, 1), rgba(151, 151, 151, 0.3));
}
</style>



<style>
*, *::after {
    box-sizing: border-box;
}
.box {
    margin: 0 auto 10px;
    background: #222;
    padding: 10px 20px;
    color: white;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.box > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    margin: 10px !important;
    box-sizing: border-box;
}
.box > div:hover {
    filter: brightness(1.3);
}
</style>
