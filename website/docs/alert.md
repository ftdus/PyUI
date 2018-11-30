<style>
  .py-alert{
    margin-bottom: 10px;
  }
</style>

## Alert 提示

提示信息弹框，包含4种结果弹框，不会自动关闭。

### 基础用法

用于提示的信息展示弹框，有4中不同结果的弹框。。

:::demo type 接收 info、success、warning 和 error 四种字符串类型。

```html
<py-alert type="info">默认提示信息</py-alert>
<py-alert type="success">成功提示信息</py-alert>
<py-alert type="warning">警告提示信息</py-alert>
<py-alert type="error">失败提示信息</py-alert>
```

:::

### 自定义关闭按钮

可以设置是否显示关闭按钮，或以文字代替关闭按钮。

:::demo 定义 closable 为 Boolean 类型，用于设置是否显示关闭按钮，close-text 为String 类型，用于设置替代关闭按钮的文字。

```html
<py-alert type="info" :closable="false">默认提示信息</py-alert>
<py-alert type="success">成功提示信息</py-alert>
<py-alert type="warning" close-text="关闭">警告提示信息</py-alert>
<py-alert type="error" close-text="我知道了">失败提示信息</py-alert>
```

:::

### 带标题

显示标题提示信息。

:::demo title 接收String类型作为标题，is-center设置为true时，文字居中显示。

```html
<py-alert type="info" title="提示">默认提示信息</py-alert>
<py-alert type="success" title="提示" :is-center="true">成功提示信息</py-alert>
<py-alert type="warning" close-text="关闭" :is-center="true">警告提示信息</py-alert>
```

:::

### 带图标标题

:::demo title-icon 接收Boolean类型，值为true时标题显示图标。

```html
<py-alert type="info" title="提示"  :title-icon="true">默认提示信息</py-alert>
<py-alert type="success" title="提示" :is-center="true"  :title-icon="true">成功提示信息</py-alert>
```

:::

### 带图标文字

:::demo show-icon 接收Boolean类型，值为true时显示辅助性图标。

```html
<py-alert type="error" title="提示" :show-icon="true">
  <p>发生错误了</p>
  <p>请尽快解决</p>
</py-alert>
```

:::

### 不同字号大小

:::demo **size** 接收String类型，值为 **medium** 时显示中号字号，值为 **large** 时显示大号字号。

```html
<py-alert type="info">默认字号</py-alert>
<py-alert type="info" size="medium">medium字号</py-alert>
<py-alert type="info" size="large">large字号</py-alert>
```

:::

### 关闭事件

:::demo show-icon 接收Boolean类型，值为true时显示辅助性图标。

```html
<py-alert type="info" @close="closeAlert" close-text="关闭">关闭alert</py-alert>

<script>
export default {
  methods: {
    closeAlert() {
      alert('您正在关闭alert');
    }
  },
};
</script>
```

:::

### Attributes

| 参数        | 说明                                       | 类型           | 可选值 | 默认值 |
| ---------- | ------------------------------------------ | --------------| ------ | ------ |
| type       | 提示类型                                    | string        | info/success/warning/error | —      |
| closable   | 是否显示关闭提示按钮                         | boolean       | true/false      | true      |
| close-text | 定义关闭按钮文字                             | string       | —      | —  |
| title      | 提示信息标题                                | string        | —      | —  |
| is-center  | 是否居中显示                                | boolean        | true/false      | false  |
| show-icon  | 是否显示辅助性图标                           | boolean        | true/false      | false  |
| title-icon | 是否显示标题图标                             | boolean        | true/false      | false  |
| size       | 设置文字大小                                | string        | medium/large      | —  |

### Events

| 事件名称    | 说明                                       | 类型          |
| ---------- | ------------------------------------------ | --------------|
| close      | 点击关闭按钮触发                             | —        |