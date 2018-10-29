## Input 输入框

通过鼠标或键盘输入字符。

### 基础用法

:::demo
```html
<py-input v-model="input" placeholder="请输入内容"></py-input>

<script>
export default {
  data() {
    return {
      input: '',
    };
  },
};
</script>
```
:::


### 禁用状态

:::demo 通过 `disabled` 属性指定是否禁用 Input 组件
```html
<py-input
  v-model="input1"
  disabled
  placeholder="请输入内容"
>
</py-input>

<script>
export default {
  data() {
    return {
      input1: '',
    };
  },
};
</script>
```
:::

### 文本域

用于输入多行文本信息，通过将 `type` 属性的值指定为 `textarea`。

:::demo 文本域高度可通过 `rows` 属性控制，`rows`的默认值为 5。
```html
<py-input
  type="textarea"
  v-model="textarea"
  :rows="2"
  placeholder="请输入内容"
>
</py-input>

<script>
export default {
  data() {
    return {
      textarea: '',
    };
  },
};
</script>
```
:::

### 文本域

用于输入多行文本信息，通过将 `type` 属性的值指定为 `textarea`。

:::demo 文本域高度可通过 `rows` 属性控制，`rows`的默认值为 5。
```html
<py-input
  type="textarea"
  v-model="textarea"
  :rows="2"
  placeholder="请输入内容"
>
</py-input>

<script>
export default {
  data() {
    return {
      textarea: '',
    };
  },
};
</script>
```
:::
