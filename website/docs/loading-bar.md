## loadingBar 加载进度条

### 基础用法

:::demo loading

```html
<template>
  <py-button :plain="true" @click="start">开始</py-button>
  <py-button :plain="true" @click="finish">关闭</py-button>
  <py-button :plain="true" @click="error">错误</py-button>
  <py-button :plain="true" @click="update">更新进度到66</py-button>
  <py-button :plain="true" @click="destory">销毁</py-button>
</template>

<script>
  export default {
    methods: {
      start() {
        this.$loading.start();
      },
      finish() {
        this.$loading.finish();
      },
      error() {
        this.$loading.error();
      },
      update() {
        this.$loading.update(66);
      },
      destory() {
        this.$loading.destory();
      }
    }
  }
</script>
```

:::
