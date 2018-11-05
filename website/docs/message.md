## Message 消息提示

常用于主动操作后的反馈提示。多用于系统级通知的被动提醒。

### 基础用法

从顶部出现，3 秒后自动消失。

:::demo message

```html
<template>
  <py-button :plain="true" @click="info">消息</py-button>
  <py-button :plain="true" @click="html">HTML</py-button>
</template>

<script>
  export default {
    methods: {
      info() {
        this.$message.info('消息');
      },
      html() {
        this.$message({
          type: 'success',
          message: '<strong>HTML</strong>',
          useHTMLString: true
        });
      }
    }
  }
</script>
```

:::

### 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

:::demo message

```html
<template>
  <py-button :plain="true" @click="success">成功</py-button>
  <py-button :plain="true" @click="warning">警告</py-button>
  <py-button :plain="true" @click="info">消息</py-button>
  <py-button :plain="true" @click="error">错误</py-button>
</template>

<script>
  export default {
    methods: {
      success() {
        this.$message.success('成功');
      },
      warning() {
        this.$message.warning('警告');
      },
      info() {
        this.$message.info('消息');
      },
      error() {
        this.$message.error('错误');
      }
    }
  }
</script>
```

:::

### 可关闭

可以添加关闭按钮。

:::demo message

```html
<template>
  <py-button :plain="true" @click="success">成功</py-button>
  <py-button :plain="true" @click="warning">警告</py-button>
  <py-button :plain="true" @click="info">消息</py-button>
  <py-button :plain="true" @click="error">错误</py-button>
</template>

<script>
  export default {
    methods: {
      success() {
        this.$message({
          type: 'success',
          message: '成功',
          showClose: true
        });
      },
      warning() {
        this.$message({
          type: 'warning',
          message: '警告',
          showClose: true
        });
      },
      info() {
        this.$message({
          type: 'info',
          message: '消息',
          showClose: true
        });
      },
      error() {
        this.$message({
          type: 'error',
          message: '错误',
          showClose: true
        });
      }
    }
  }
</script>
```

:::

### Attributes

| 参数          | 说明                                          | 类型     | 可选值                     | 默认值 |
| ------------- | --------------------------------------------- | -------- | -------------------------- | ------ |
| type          | 类型                                          | string   | info/success/warning/error | —      |
| message       | 消息文字                                      | string   | —                          | —      |
| iconClass     | 自定义图标                                    | string   | —                          | —      |
| useHTMLString | 使用 HTML 片段                                | boolean  | true/false                 | false  |
| center        | 文字是否居中                                  | boolean  | true/false                 | false  |
| customClass   | 自定义类名                                    | string   | —                          | —      |
| duration      | 显示时间, 毫秒。设为 0 则不会自动关闭         | number   | —                          | 3000   |
| showClose     | 是否显示关闭按钮                              | boolean  | true/false                 | false  |
| onClose       | 关闭时的回调函数, 参数为被关闭的 message 实例 | function | -                          | —      |

### Events

调用 Message 或 this.$message 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 close 方法。

| 事件名称 | 说明               |
| -------- | ------------------ |
| close    | 关闭当前的 Message |
