<style lang='scss' scoped>
  $prefixCls: "card";
  .box-card {
    width: 480px;
    .#{$prefixCls}-text {
      font-size: 14px;
    }
    .#{$prefixCls}-item {
      padding: 18px 0;
    }
    .#{$prefixCls}-button {
      float: right;
    }
    .#{$prefixCls}-image {
      width: 100%;
      display: block;
    }
    .#{$prefixCls}-time {
      font-size: 13px;
      color: #999;
    }
    .clearfix {
      &:before,
      &:after {
        display: table;
        content: "";
      }
      &:after {
        clear: both;
      }
    }
  }
</style>

## Card 卡片

Card组件由两部分组成：

**header** : 卡片头部（可选）。需要有显示具名 *slot* 。

**body** : 卡片内容。

### 简单卡片

只有内容部分

::: demo 

```html
  <py-card class="box-card">
    <div v-for="item in 4" :key="item" class="card-text card-item">
      {{'卡片内容 ' + item }}
    </div>
  </py-card>

  <style>
    .card-text {
      font-size: 14px;
    }

    .card-item {
      padding: 18px 0;
    }

    .box-card {
      width: 480px;
    }
  </style>
```

:::

### 基础用法

包含标题，按钮和内容

::: demo *header* 部分使用具名 `slot` 。

```html
  <py-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="position: relative;top: 10px;">卡片名称</span>
      <py-button class="card-button" shape="circle">按 钮</py-button>
    </div>
    <div v-for="item in 4" :key="item" class="card-text card-item">
      {{'卡片内容 ' + item }}
    </div>
  </py-card>

  <style>
    .card-text {
      font-size: 14px;
    }

    .card-item {
      padding: 18px 0;
    }

    .card-button {
      float: right;
    }

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both
    }

    .box-card {
      width: 480px;
    }
  </style>
```

:::

### Card基础用法

基础用法。

::: demo 使用 `type`、`plain` 和 `round` 属性来定义 `Button` 的样式。

```html
  <py-card class="box-card">
    <div v-for="item in 4" :key="item" class="card-text card-item">
      {{'卡片内容 ' + item }}
    </div>
  </py-card>
```

:::

### Card基础用法

基础用法。

::: demo 使用 `type`、`plain` 和 `round` 属性来定义 `Button` 的样式。

```html
  <py-card class="box-card">
    <div v-for="item in 4" :key="item" class="card-text card-item">
      {{'卡片内容 ' + item }}
    </div>
  </py-card>
```

:::

### Attributes

| 参数        | 说明           | 类型     | 可选值    | 默认值 |
| ----------- | -------------- | ------- | -------- | ------ |
| **height**  | 顶部区域高度    | string  |    —  | 60px   |
| **height**  | 顶部区域高度    | string  |    —  | 60px   |
| **height**  | 顶部区域高度    | string  |    —  | 60px   |
