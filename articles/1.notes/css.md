---
    title: CSS
    date: 2020-04-04
    categories:
     - 笔记
    tags:
     - css
---

<Boxx/>

## 全站变黑白

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

## 解析 textarea 换行符

- 仅换行
    ```
    .pre-line {
       white-space: pre-line;
    }
    ```
- 按原格式显示
    ```
    .pre-wrap {
       white-space: pre-wrap;
    }
    ```
