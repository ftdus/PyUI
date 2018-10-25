<template>
  <div style="padding:20px;">
    <h3>默认颜色，结束会自动补全颜色</h3>
    <py-button @click="start">start</py-button>
    <py-button @click="close">close</py-button>
    <py-button @click="err">错误标识</py-button>

    <br>
    <br>
    <h3>换颜色</h3>
    <py-button @click="startBlue">Blue</py-button>
    <py-button @click="updataRed">更换Red颜色</py-button>
    <br />
    <py-button @click="startRed">red</py-button>
    <py-button @click="updataBlue">更换Blue颜色</py-button>
  </div>
</template>

<script>
export default {
  methods: {
    start() {
      this.$loading.start();
    },
    close() {
      this.$loading.close();
    },
    startRed() {
      this.$loading.start({
        color: '#f71212',
      });
    },
    startBlue() {
      this.$loading.start({
        color: '#409eff',
      });
    },
    updataRed() {
      this.$loading.updata({
        color: '#f71212',
      });
    },
    updataBlue() {
      this.$loading.updata({
        color: '#409eff',
      });
    },
    err() {
      this.$loading.err();
    },
  },
};
</script>

<style>
</style>
