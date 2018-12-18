## Tooltip 文字提示

### 基础用法

:::demo

```html
<template>
  <div class="box">
    <div class="top">
      <py-tooltip class="item" content="Top Left 提示文字" placement="top-start">
        上左
      </py-tooltip>
      <py-tooltip class="item" content="Top Center 提示文字" placement="top">
        上边
      </py-tooltip>
      <py-tooltip class="item" content="Top Right 提示文字" placement="top-end">
        上右
      </py-tooltip>
    </div>
    <div class="left">
      <py-tooltip class="item" content="Left Top 提示文字" placement="left-start">
        左上
      </py-tooltip>
      <py-tooltip class="item" content="Left Center 提示文字" placement="left">
        左边
      </py-tooltip>
      <py-tooltip class="item" content="Left Bottom 提示文字" placement="left-end">
        左下
      </py-tooltip>
    </div>

    <div class="right">
      <py-tooltip class="item" content="Right Top 提示文字" placement="right-start">
        右上
      </py-tooltip>
      <py-tooltip class="item" content="Right Center 提示文字" placement="right">
        右边
      </py-tooltip>
      <py-tooltip class="item" content="Right Bottom 提示文字" placement="right-end">
        右下
      </py-tooltip>
    </div>
    <div class="bottom">
      <py-tooltip class="item" content="Bottom Left 提示文字" placement="bottom-start">
        下左
      </py-tooltip>
      <py-tooltip class="item" content="Bottom Center 提示文字" placement="bottom">
        下边
      </py-tooltip>
      <py-tooltip class="item" content="Bottom Right 提示文字" placement="bottom-end">
        下右
      </py-tooltip>
    </div>
  </div>
<template>

<style lang="scss" scoped>
  .box {
    width: 400px;

    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 60px;
    }

    .right {
      float: right;
      width: 60px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .py-tooltip__popper,
    .right .py-tooltip__popper {
      padding: 8px 10px;
    }
  }
</style>
```
:::


### 显示时间

:::demo

```html
<template>
  <py-tooltip placement="top" content="Tooltip text" :delay="1000" style="margin-right: 50px;">
      <Button @click="disabled = true">延迟一秒</Button>
  </py-tooltip>
  <py-tooltip placement="top" content="Tooltip text" always style="margin-right: 50px;">
      <Button @click="disabled = true">一直显示</Button>
  </py-tooltip>
  <py-tooltip placement="top" content="Tooltip text" disabled>
      <Button @click="disabled = true">永远不显示</Button>
  </py-tooltip>
</template>
<script>
    export default { }
</script>
```

:::


### 主题

:::demo

```html
<template>
  <py-tooltip placement="top" theme="dark" content="Tooltip text" style="margin-right: 50px;">
      <Button @click="disabled = true">dark</Button>
  </py-tooltip>
  <py-tooltip placement="top" theme="light" content="Tooltip text">
      <Button @click="disabled = true">light</Button>
  </py-tooltip>
</template>
<script>
    export default { }
</script>
```

:::

### Attributes

| 参数            | 说明                        | 类型           | 可选值 | 默认值 |
| ----------     | --------------------------- | ---------------| ------ | ----- |
| theme      | 默认提供的主题              | string         |    dark/light    |   dark    |
| content | 显示的内容 | string         |     -   | - |
| placement            | Tooltip 的出现位置       | String        | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end |bottom|
| disabled | Tooltip 是否可用 | Boolean         |     -   | false |
| always | Tooltip 一直显示 | Boolean         |     -   | false |
| delay | 延迟出现，单位毫秒 | Number         |     -   | 100 |
| maxWidth | Tooltip最大宽度 | Number/String       |     -   | - |

### Events

| 参数            | 说明                        |  返回值
| ----------     | --------------------------- | ---------------|
| on-popper-show | 在提示框显示时触发 | 无         |
| on-popper-hide | 在提示框消失时触发 | 无         |
