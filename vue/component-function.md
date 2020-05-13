---
    title: 在父组件传给子组件的方法中添加额外的参数
    date: 2020-03-14
    categories:
     - vue
    tags:
     - vue
---

## 子组件使用props

### 子组件:

  ```
  <script>
  export default {
      name: 'child',
      props: {
          http-request: {
              type: Function,
              required: true
          }
      },
      created: {
          this.http-request(param1, param2);
      }
  };
  </scrip>
  ```

### 父组件:

```
<template>
    <child :http-request="(param1, param2)=>httpRequest(param1, param2, customParam)"></child>
</template>
<script>
export default {
    name: 'parent',
    methods: {
        httpRequest (param1, param2, customParam) {}
    }
};
</script>
```

## 子组件使用$emit

### 子组件:

```
<script>
export default {
    name: 'child',
    created: {
        this.$emit('http-request', 'param1', 'param2');
    }
};
</script>
```

### 父组件:
    
方法一： 只能获取第一个参数

```
<template>
    <child @http-request="httpRequest(...arguments, customParam)"></child>
    <!-- 等同于 <child @http-request="httpRequest($event, customParam)"></child> -->
</template>
<script>
export default {
    name: 'parent',
    methods: {
        httpRequest (param, customParam) {
            console.log(param); // param1
        }
    }
};
</script>
```

方法二： 子组件的参数以数组展示

```
<template>
    <child @http-request="httpRequest(arguments)"></child>
</template>
<script>
export default {
    name: 'parent',
    methods: {
        httpRequest (params, customParam) {
            console.log(params); // ['param1', 'param2']
        }
    }
};
</script>
```
