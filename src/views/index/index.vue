<template>
  <div class="index">
    <router-link to="/button">button</router-link>
    <router-link to="/input">input</router-link>
    <router-link to="/loadingBar">loadingBar</router-link>
    <router-link to="/card">card</router-link>
    <router-link to="/tabs">tabs</router-link>
    <router-link to="/divider">divider</router-link>
    <router-link to="/slider">slider</router-link>
    <router-link to="/switch">switch</router-link>
    <h1 @click="showMessage">Message error</h1>
    <h1 @click="showMessage1">Message info</h1>
    <h1 @click="showMessage2">Message warning</h1>
    <h1 @click="showMessage3">Message success</h1>
  </div>
</template>
<script>
export default {
  methods: {
    showMessage() {
      this.$message.error('dwqdsad');
    },
    showMessage1() {
      this.$message({
        center: true,
        duration: 3000,
        showClose: true,
        customClass: 'ceshieee',
        dangerouslyUseHTMLString: true,
        onClose: () => {
          this.showMessage2();
        },
        message:
          '<hr><p>这是一条消息提示这是一条消息提示这是一条消息提示这是一条消息提示这是一条消息提示这是一条消息提示这是一条消息提示这是一条消息提示这是一条消息提示这是一条消息提示这是一条消息提示这是一条消息提示</p>',
      });
    },
    showMessage2() {
      console.log('showMessage2');
      this.$message({
        message: 'dwqdsad',
        showClose: true,
        type: 'warning',
      });
    },
    showMessage3() {
      this.$message.success('dwqdsad');
    },
  },
};
</script>

<style lang="scss" scoped>
.index {
  a {
    padding: 0.8em 2em;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 0 2em;
  }
  h1 {
    margin: 50px 20%;
  }
}
</style>
