---
    title: JavaScript
    date: 2020-04-08
    tags:
     - javascript
---

<Boxx/>

## 打印功能

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
