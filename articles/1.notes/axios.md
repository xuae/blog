---
    title: Axios
    date: 2021-07-26
    categories:
     - 笔记
    tags:
     - axios
---

<Boxx/>

## 官方文档
axios 请求配置文档请查看：<a href="http://www.axios-js.com/zh-cn/docs/#%E8%AF%B7%E6%B1%82%E9%85%8D%E7%BD%AE" target="_blank">中文文档</a>

## 上传文件进度

::: warning

注意：此上传进度为 100 时，仅代表文件已上传至服务器

但上传接口数据可能未返回或返回上传失败，为了优化用户体验，接口未返回数据时显示上传百分比：percent >= 100 ? 99 : percent

- 接口返回正确数据时提示上传完成，上传百分比才变为 100%
- 接口返回失败数据时，则提示上传失败

:::

需要显示上传进度时，需在请求配置中添加 `onUploadProgress` 方法属性：
```javascript
// 上传进度
const onUploadProgress = event => {
  // 已经上传的总量
  const loaded = event.loaded;
  // 需要上传的总量
  const total = event.total;
  // 上传进度比值，未加 % 号
  const percent = Math.floor(100 * loaded / total);
  // TODO: 注意此上传进度为 100 时，仅代表文件已上传至服务器，但上传接口数据可能未返回
}
```

下载进度与此类似，需在请求配置中添加 `onDownloadProgress`，但此方法仅能获取接口返回数据后的下载进度，无法显示接口正在 `pending` 中的进度


## 下载文件

使用 `post` 请求下载文件时，需在请求配置中添加: `responseType: 'blob'`，处理返回的方法如下：
```javascript
/** 
 * 若返回的 blob 数据中含有 json，则需要使用以下代码，反之直接调用下载方法即可
 * @param data: Blob，请求返回的数据
 */
function parseData(data) {
  const fileName = ''; // TODO: 需要修改文件名称，带后缀
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      // 检测返回的数据是否含 json，是否能被正常解析
      const errData = JSON.parse(e.target.result);
      if (errData.success === false) {
        // 提示下载失败
      } else {
        downloadFile(res, fileName);
      }
    } catch (err) {
      // 解析失败，说明是正常的文件流
      downloadFile(res, fileName);
    }
  };
  reader.readAsText(res);
}

/** 
 * 根据文件内容下载文件
 * @param data: Blob，请求返回的数据
 * @param fileName: string，文件名
 */
function downloadFile(data, fileName) {
  const blob = new Blob([data]);
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(a.href);
  a.remove();
}
```
