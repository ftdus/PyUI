<style>
  .py-button{
    margin-right: 10px;
  }
</style>
<script> export default { 
  methods: {     
    notifiAutoClose() {
      this.$notify({
        title: '标题名称',
        message: '这是会自动关闭的消息,默认4.5s后自动关闭',
      });
    },
    notifiUnClose() {
      this.$notify({
        title: '提示',
        message: '这是一条不会自动关闭的消息',
        duration: 0,
      });
    },
    notifiSuccess() {
      this.$notify({
        title: '成功',
        message: '这是一条成功的提示消息',
        type: 'success',
      });
    },
    notifiWarning() {
      this.$notify({
        title: '警告',
        message: '这是一条警告的提示消息',
        type: 'warning',
      });
    },
    notifiInfo() {
      this.$notify.info('这是一条直接传入字符串的提示消息');
    },
    notifiError() {
      this.$notify.error({
        title: '错误',
        message: '这是一条错误的提示消息',
      });
    },
    notifiCustomIcon() {
      this.$notify({
        title: 'Info',
        message: '自定义图标',
        iconClass: ['pyui-icons', 'py-icon-heart-fill'],
      });
    },
    notifiRightTop() {
      this.$notify({
        title: '自定义位置',
        message: '右上角弹出的消息',
      });
    },
    notifiRightBottom() {
      this.$notify({
        title: '自定义位置',
        message: '右下角弹出的消息',
        position: 'bottom-right',
      });
    },
    notifiLeftBottom() {
      this.$notify({
        title: '自定义位置',
        message: '左下角弹出的消息',
        position: 'bottom-left',
      });
    },
    notifiLeftTop() {
      this.$notify({
        title: '自定义位置',
        message: '左上角弹出的消息',
        position: 'top-left',
      });
    },
    notifiOffset() {
      this.$notify({
        title: '偏移',
        message: '这是一条带有偏移的提示消息',
        offset: 100,
      });
    },
    notifiHtml() {
      this.$notify({
        title: 'HTML 片段',
        dangerouslyUseHTMLString: true,
        message: '<strong>这是 <i>HTML</i> 片段</strong>',
      });
    },
    notifiHideClose() {
      this.$notify.success({
        title: 'Info',
        message: '这是一条没有关闭按钮的消息',
        showClose: false,
      });
    }
  }
 }; </script>

## Notification 通知

悬浮出现在页面角落，显示全局的通知提醒消息。

### 基础用法

适用性广泛的通知栏

:::demo Notification 组件提供通知功能，全局注册了$notify方法，接收一个options字面量参数，在最简单的情况下，你可以设置title字段和message字段，用于设置通知的标题和正文。默认情况下，经过一段时间后 Notification 组件会自动关闭，但是通过设置duration，可以控制关闭的时间间隔，特别的是，如果设置为0，则不会自动关闭。注意：duration接收一个Number，单位为毫秒，默认为4500。

```html
<template>
  <py-button @click="notifiAutoClose">可自动关闭</py-button>
  <py-button @click="notifiUnClose">不会自动关闭</py-button>
</template>

<script>
  export default {
    methods: {
      notifiAutoClose() {
        this.$notify({
          title: '标题名称',
          message: '这是会自动关闭的消息,默认4.5s后自动关闭',
        });
      },
      notifiUnClose() {
        this.$notify({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration: 0,
        });
      },
    }
  }
</script>
```

:::

### 带有图标

带有 icon，常用来显示「成功、警告、消息、错误」类的系统消息，或者显示用户自定义图标类

:::demo Notification 组件准备了四种通知类型：success, warning, info, error。通过type字段来设置，除此以外的值将被忽略。同时，我们也为 Notification 的各种 type 注册了方法，可以在不传入type字段的情况下像notifiInfo和notifiError那样直接调用。自定义图标需要以数组形式传入图标Class。注意：如果定义了以上四种类型的type，则传入的自定义图标无效，因为type属性优先度更高。

```html
<template>
  <py-button @click="notifiSuccess">成功</py-button>
  <py-button @click="notifiWarning">警告</py-button>
  <py-button @click="notifiInfo">消息</py-button>
  <py-button @click="notifiError">错误</py-button>
  <py-button @click="notifiCustomIcon">自定义图标</py-button>
</template>

<script>
  export default {
    methods: {
      notifiSuccess() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success',
        });
      },
      notifiWarning() {
        this.$notify({
          title: '警告',
          message: '这是一条警告的提示消息',
          type: 'warning',
        });
      },
      notifiInfo() {
        this.$notify.info('这是一条直接传入字符串的提示消息');
      },
      notifiError() {
        this.$notify.error({
          title: '错误',
          message: '这是一条错误的提示消息',
        });
      },
      notifiCustomIcon() {
        this.$notify({
          title: 'Info',
          message: '自定义图标',
          iconClass: ['pyui-icons', 'py-icon-heart-fill'],
        });
      }
    }
  }
</script>
```

:::

### 自定义弹出位置

可以让 Notification 从屏幕四角中的任意一角弹出

:::demo 使用position属性定义 Notification 的弹出位置，支持四个选项：top-right、top-left、bottom-right、bottom-left，默认为top-right。

```html
<template>
  <py-button @click="notifiRightTop">右上角</py-button>
  <py-button @click="notifiRightBottom">右下角</py-button>
  <py-button @click="notifiLeftBottom">左下角</py-button>
  <py-button @click="notifiLeftTop">左上角</py-button>
</template>

<script>
  export default {
    methods: {
      notifiRightTop() {
        this.$notify({
          title: '自定义位置',
          message: '右上角弹出的消息',
        });
      },
      notifiRightBottom() {
        this.$notify({
          title: '自定义位置',
          message: '右下角弹出的消息',
          position: 'bottom-right',
        });
      },
      notifiLeftBottom() {
        this.$notify({
          title: '自定义位置',
          message: '左下角弹出的消息',
          position: 'bottom-left',
        });
      },
      notifiLeftTop() {
        this.$notify({
          title: '自定义位置',
          message: '左上角弹出的消息',
          position: 'top-left',
        });
      },
    }
  }
</script>
```

:::

### 带有偏移

让 Notification 偏移一些位置  

:::demo Notification 提供设置偏移量的功能，通过设置 offset 字段，可以使弹出的消息距屏幕边缘偏移一段距离。注意在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量

```html
<template>
  <py-button @click="notifiOffset">偏移的消息</py-button>
</template>

<script>
  export default {
    methods: {
      notifiOffset() {
        this.$notify({
          title: '偏移',
          message: '这是一条带有偏移的提示消息',
          offset: 100,
        });
      },
    }
  }
</script>
```

:::

### 使用 HTML 片段

message 属性支持传入 HTML 片段  

:::demo 将dangerouslyUseHTMLString属性设置为 true，message 就会被当作 HTML 片段处理。

```html
<template>
  <py-button @click="notifiHtml">使用 HTML 片段</py-button>
</template>

<script>
  export default {
    methods: {
      notifiHtml() {
        this.$notify({
          title: 'HTML 片段',
          dangerouslyUseHTMLString: true,
          message: '<strong>这是 <i>HTML</i> 片段</strong>',
        });
      },
    }
  }
</script>
```

:::

### 隐藏关闭按钮

可以不显示关闭按钮  

:::demo 将showClose属性设置为false即可隐藏关闭按钮。

```html
<template>
  <py-button @click="notifiHideClose">隐藏关闭按钮</py-button>
</template>

<script>
  export default {
    methods: {
      notifiHideClose() {
        this.$notify.success({
          title: 'Info',
          message: '这是一条没有关闭按钮的消息',
          showClose: false,
        });
      },
    }
  }
</script>
```

:::

### Attributes

| 参数        | 说明            | 类型    | 可选值                                              | 默认值 |
| ----------- | -------------- | ------- | -------------------------------------------------- | ------ |
| title       | 标题            | string  | —                                                  | —      |
| message     | 说明文字        | string  | —                                                  | —      |
| dangerouslyUseHTMLString  | 是否将 message 属性作为 HTML 片段处理   | boolean | —             | false  |
| type        | 主题样式，如果不在可选值内将被忽略   | string | success / warning / info / error | —      |
| iconClass   | 自定义图标的类名。若设置了 type，则 iconClass 会被覆盖   | string[ ] | —          | —      |
| customClass | 自定义类名      | string | —                                                  | —      |
| duration    | 显示时间, 毫秒。设为 0 则不会自动关闭   | number  | —                            | 4500   |
| position    | 自定义弹出位置  | string  | top-right / top-left / bottom-right / bottom-left  | top-right |
| showClose   | 是否显示关闭按钮               | boolean | —                                   | true   |
| offset      | 偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量 | number | — | 0    |
| onClose     | 关闭时的回调函数               | function  | —                                  | —      |
| onClick     | 点击 Notification 时的回调函数 | function  | —                                  | —      |

### Event

调用 Notification 或 this.$notify 会返回当前 Notification 的实例。如果需要手动关闭实例，可以调用它的 close 方法。

| 方法名       | 说明                     | 
| ----------- | ------------------------ | 
| close       | 关闭当前的 Notification   | 