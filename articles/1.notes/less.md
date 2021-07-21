---
    title: Less
    date: 2021-07-21
    categories:
     - 笔记
    tags:
     - less
---

<Boxx/>

## 使用 calc 被计算

在 less 中使用 calc(100% - 10px) 会被计算成 calc(90%)，解决方法如下:
```less
// 不使用变量
div {
  width: calc(~"100% - 10px");
}

// 要使用变量

@var: 10px;
div {
  width: calc(~"100% - @{var}");
}
```
