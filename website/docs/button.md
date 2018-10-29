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

::: demo 使用 type、plain 和 round 属性来定义 Button 的样式。

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

::: demo 你可以使用 disabled 属性来定义按钮是否可用，它接受一个 Boolean 值。

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

::: demo 设置 icon 属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用 i 标签即可，可以使用自定义图标。

```html
<py-button type="primary" icon="el-icon-search">搜索</py-button>
<py-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></py-button>
```

:::
