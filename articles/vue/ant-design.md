---
    title: Ant Design Vue
    date: 2020-04-16
    tags:
     - vue
     - ant-design-vue
---

<Boxx/>

## Form

### 提交会刷新页面

::: tip

场景说明：

浏览器：Google Chrome v80.0.3987.122（正式版本）（64 位），QQ 和微信的内置浏览器

操作：第一次访问`http://localhost:8080/#/form`，填写表单，点击提交按钮

浏览器会刷新页面，数据丢失，然后谷歌浏览器地址变更为：`http://localhost:8080/?#/form`（QQ 和微信内置浏览器未查看其地址），随后再提交都不会出现刷新页面的情况

:::

- 使用 a-form 的 submit 方法时必须阻止默认事件，否则可能出现刷新页面的情况
```
<a-form :form="form" @submit="onSubmit">
    // 省略其他代码
    <a-button html-type="submit">提交</a-button>
</a-form>

<script>
    // 省略其他代码，以下是方法
    onSubmit(e) { // e 是 Event
        e.preventDefault();
        // 提交数据
        // this.form.validate.....
    }
</script>
```

## Table

### 宽度

1. 数字类型！！！！
2. 字符串类型：必须带单位'px'，纯数字的字符串无效果

- Column 的参数 `width`
- `<a-table-column>` 的参数`width`
