---
    title: 其他笔记
    date: 2020-03-14
    categories:
     - other
    tags:
     - other
---

<Boxx/>

## Webstorm Terminal 使用 `git log` 中文显示错误

- 电脑环境：Win 10 

- 问题描述：打开系统 cmd，使用 git log 显示的中文也不正常

- 解决方案：

    1. 增加系统变量，变量名：LESSCHARSET，值：utf-8
    
    1. 重启 Webstorm，问题解决
    
## css 全站变黑白

```
html {
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: grayscale(100%);
    filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
}
```

## JS 打印功能

```
<script>
    window.print(); // 调用打印方法
</script>

<style>
@media print {
    @page {
      margin-bottom: 0mm; // 去掉页脚
      margin-top: 0mm; // 去掉页眉
    }
    // 添加其他样式，仅在打印中有效
    // 不需要打印的元素可设置 display:none;
}
</style>
```
