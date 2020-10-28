---
    title: Vue3.x
    date: 2020-10-28
    categories:
     - 技术
    tags:
     - vue3
---

<Boxx/>

## Vue3.x + Typescript 遇到的坑

### props 含 validator，Typescript 类型校验报错

::: tip

Vue 版本：3.0.2

Typescript 版本：4.0.5

:::

报错例子如下：

```typescript
import { defineComponent, PropType, toRefs } from 'vue';

export default defineComponent({
  props: {
    color: {
      type: String as PropType<'success' | 'error'>,
      validator(val) {
        return ['success', 'error'].includes(val);
      }
    }
  },
  setup(props) {
    // 下面这句要报错
    const { color } = toRefs(props);
    return {};
  }
});
```

按照以上写法的话，Typescript 类型检测会报错提示：

Error: TS2339: Property 'color' does not exist on type 'ToRefs<Readonly<{ [x: number]: string; } & { flat?: unknown[] | undefined; length?: number | undefined; toString?: string | undefined; toLocaleString?: string | undefined; concat?: string[] | undefined; join?: string | undefined; ... 16 more ...; flatMap?: (<U, This = undefined>(callback: (this: This, value: string,...'.

将 `props` 内的 `validator` 改成箭头函数，Typescript 就不会再提示类型错误了。

完整例子如下：

```typescript
import { defineComponent, PropType, toRefs } from 'vue';

export default defineComponent({
  props: {
    color: {
      type: String as PropType<'success' | 'error'>,
      // validator(val) {
      //   return ['success', 'error'].includes(val);
      // }
      // 改为箭头函数
      validator: val => {
        return ['success', 'error'].includes(val);
      }
    }
  },
  setup(props) {
    const { color } = toRefs(props);
    return {};
  }
});
```
