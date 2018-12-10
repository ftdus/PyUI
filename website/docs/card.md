<style lang='scss' scoped>
  $prefixCls: "card";
  .contains {
    padding: 10px;
    margin-bottom: 20px;
    h3 {
      margin-top: 20px;
      margin-bottom: 10px;
    }
  }
  .py-card {
    &-box {
      padding: 10px;
      border: 1px solid #eee;
    }
  }
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

### Card基础用法

基础用法。

::: demo 使用 `type`、`plain` 和 `round` 属性来定义 `Button` 的样式。

```html
  <div class="py-card-box">
      <py-card class="box-card">
        <div v-for="item in 4" :key="item" class="card-text card-item">
          {{'卡片内容 ' + item }}
        </div>
      </py-card>
  </div>
```

:::

