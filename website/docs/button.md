<style>
    .py-button + .py-button {
      margin-left: 10px;
    }
    .col + .col{
        margin-top: 10px;
    }
</style>

## Button 按钮

常用的操作按钮。

### 基础用法

基础的按钮用法。

::: demo 使用 `type`、`plain` 和 `round` 属性来定义 `Button` 的样式。

```html
<div class="col">
    <py-button type="default">default</py-button>
    <py-button type="primary">primary</py-button>
    <py-button type="dashed">dashed</py-button>
    <py-button type="text">text</py-button>
</div>
<div class="col">
    <py-button type="info">info</py-button>
    <py-button type="success">success</py-button>
    <py-button type="warning">warning</py-button>
    <py-button type="error">error</py-button>
</div>
```

:::

### 禁用状态

按钮不可用状态。

::: demo 你可以使用 `disabled` 属性来定义按钮是否可用，它接受一个 `Boolean` 值。

```html
<div>
  <py-button disabled>默认按钮</py-button>
  <py-button type="primary" disabled>主要按钮</py-button>
  <py-button type="success" disabled>成功按钮</py-button>
  <py-button type="info" disabled>信息按钮</py-button>
  <py-button type="warning" disabled>警告按钮</py-button>
  <py-button type="danger" disabled>危险按钮</py-button>
</div>
```

:::

### 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

::: demo 设置 `icon` 属性即可，`icon` 的列表可以参考 `Element` 的 `icon` 组件，也可以设置在文字右边的 `icon` ，只要使用 `i` 标签即可，可以使用自定义图标。

```html
<py-button type="primary" icon="py-icon-search">搜索</py-button>
<py-button type="primary">上传<i class="py-icon-upload py-icon--right"></i></py-button>
```

:::

### 按钮组

以按钮组的方式出现，常用于多项类似操作。

::: demo 使用 `<py-button-group>` 标签来嵌套你的按钮。

```html
<py-button-group>
  <py-button type="primary" icon="py-icon-arrow-left">上一页</py-button>
  <py-button type="primary">下一页<i class="py-icon-arrow-right py-icon--right"></i></py-button>
</py-button-group>
```

:::

### Attributes

| 参数        | 说明           | 类型    | 可选值                                             | 默认值 |
| ----------- | -------------- | ------- | -------------------------------------------------- | ------ |
| size        | 尺寸           | string  | medium / small / mini                              | —      |
| type        | 类型           | string  | primary / success / warning / danger / info / text | —      |
| plain       | 是否朴素按钮   | boolean | —                                                  | false  |
| round       | 是否圆角按钮   | boolean | —                                                  | false  |
| circle      | 是否圆形按钮   | boolean | —                                                  | false  |
| loading     | 是否加载中状态 | boolean | —                                                  | false  |
| disabled    | 是否禁用状态   | boolean | —                                                  | false  |
| icon        | 图标类名       | string  | —                                                  | —      |
| autofocus   | 是否默认聚焦   | boolean | —                                                  | false  |
| native-type | 原生 `type` 属性 | string  | button / submit / reset                            | button |
