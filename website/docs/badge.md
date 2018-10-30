<style>
    .py-badge + .py-badge{
        margin-left: 30px;
    }
</style>

## Badge 按钮

出现在按钮、图标旁的数字或状态标记。

### 基础用法

展示新消息数量。

:::demo 定义 value 属性，它接受 Number 或者 String。

```html
<py-badge :value="120">
  <py-button size="small">评论</py-button>
</py-badge>
<py-badge :value="3" type="success">
  <py-button size="small">回复</py-button>
</py-badge>
<py-badge :value="120" :max="eqw">
  <py-button size="small">评论</py-button>
</py-badge>
```

:::

### 自定义内容

可以显示数字以外的文本内容。

:::demo 定义 value 为 String 类型是时可以用于显示自定义文本。

```html
<py-badge value="new">
  <py-button size="small">评论</py-button>
</py-badge>
<py-badge value="hot">
  <py-button size="small">回复</py-button>
</py-badge>
```

:::

### 小红点

以红点的形式标注需要关注的内容。

:::demo 除了数字外，设置 is-dot 属性，它接受一个 Boolean。

```html
<py-badge is-dot>数据查询</py-badge>
```

:::

### Attributes

| 参数   | 说明                                                         | 类型           | 可选值 | 默认值 |
| ------ | ------------------------------------------------------------ | -------------- | ------ | ------ |
| value  | 显示值                                                       | string, number | —      | —      |
| max    | 最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型 | number         | —      | —      |
| is-dot | 小圆点                                                       | boolean        | —      | false  |
| hidden | 隐藏 badge                                                   | boolean        | —      | false  |
