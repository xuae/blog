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

正确例子如下：

```typescript
import { defineComponent, Prop, PropType, toRefs } from 'vue';

export default defineComponent({
  props: {
    color: {
      // type 这句可写可不写
      type: String as PropType<'success' | 'error'>,
      validator(val) {
        return ['success', 'error'].includes(val);
      }
    } as Prop<'success' | 'error'>,
  },
  setup(props) {
    const { color } = toRefs(props);
    return {};
  }
});
```
