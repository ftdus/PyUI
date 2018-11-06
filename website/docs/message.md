<style>
  .py-button{
    margin-right: 20px;
  }
</style>
<script>
  export default {
    methods: {
      messageInfo() {
        this.$message({
          type: 'info',
          message: '消息'
        });
      },
      messageHTML() {
        this.$message({
          type: 'success',
          message: '<strong>HTML</strong>',
          useHTMLString: true
        });
      },
      successStatus() {
        this.$message.success('成功');
      },
      warningStatus() {
        this.$message.warning('警告');
      },
      infoStatus() {
        this.$message.info('消息');
      },
      errorStatus() {
        this.$message.error('错误');
      },
      successClose() {
        this.$message({
          type: 'success',
          message: '成功',
          showClose: true
        });
      },
      warningClose() {
        this.$message({
          type: 'warning',
          message: '警告',
          showClose: true
        });
      },
      infoClose() {
        this.$message({
          type: 'info',
          message: '消息',
          showClose: true
        });
      },
      errorClose() {
        this.$message({
          type: 'error',
          message: '错误',
          showClose: true
        });
      }
    }
  };
</script>

## Message 消息提示

常用于主动操作后的反馈提示。多用于系统级通知的被动提醒。

### 基础用法

从顶部出现，3 秒后自动消失。

:::demo Message 接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。

```html
<template>
  <py-button @click="messageInfo">消息</py-button>
  <py-button @click="messageHTML">HTML</py-button>
</template>

<script>
  export default {
    name: 'message',
    methods: {
      messageInfo() {
        this.$message({
          type: 'info',
          message: '消息'
        });
      },
      messageHTML() {
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

:::demo 通过参数中传入不同的 type，展示不同的状态，默认为`info`，不作参数传入时可使用`type`作为`$message`的内置方法

```html
<template>
  <py-button type="success" @click="successStatus">成功</py-button>
  <py-button type="warning" @click="warningStatus">警告</py-button>
  <py-button type="info" @click="infoStatus">消息</py-button>
  <py-button type="error" @click="errorStatus">错误</py-button>
</template>

<script>
  export default {
    name: 'messageStatus',
    methods: {
      successStatus() {
        this.$message.success('成功');
      },
      warningStatus() {
        this.$message.warning('警告');
      },
      infoStatus() {
        this.$message.info('消息');
      },
      errorStatus() {
        this.$message.error('错误');
      }
    }
  }
</script>
```

:::

### 可关闭

可以添加关闭按钮。

:::demo Message 默认不显示关闭按钮，配置中添加`showClose`为`true`可显示关闭按钮，配置`duration`可以设置 Message 显示时间， `0`的时候不会被自动关闭，默认 3000 毫秒

```html
<template>
  <py-button type="success" @click="successClose">成功</py-button>
  <py-button type="warning" @click="warningClose">警告</py-button>
  <py-button type="info" @click="infoClose">消息</py-button>
  <py-button type="error" @click="errorClose">错误</py-button>
</template>

<script>
  export default {
    methods: {
      successClose() {
        this.$message({
          type: 'success',
          message: '成功',
          showClose: true
        });
      },
      warningClose() {
        this.$message({
          type: 'warning',
          message: '警告',
          showClose: true
        });
      },
      infoClose() {
        this.$message({
          type: 'info',
          message: '消息',
          showClose: true
        });
      },
      errorClose() {
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
