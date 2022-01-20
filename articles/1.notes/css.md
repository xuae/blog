---
    title: CSS
    date: 2020-04-04
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

## 修改滚动条样式
```css
/*滚动条整体样式 宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  height: 9px;
}

/*定义滚动条轨道*/
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ededed;
  border-radius: 10px;
}

/*定义滑块 滚动条里面的小方块*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: skyblue;
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );
}
```
