<template>
  <div class="message-wrap">
    <h1 @click="showMessage">Message error</h1>
    <h1 @click="showMessage1">Message info</h1>
    <h1 @click="showMessage2">Message warning</h1>
    <h1 @click="showMessage3">Message success</h1>
    <h1 @click="showMessage4">Message code</h1>
    <h1 @click="clear2">clear2</h1>
  </div>
</template>
<script>
export default {
  name: 'messageDemo',
  data() {
    return {
      msg: null,
    };
  },
  methods: {
    showMessage() {
      this.$message.error('dwqdsad');
    },
    showMessage1() {
      this.$message({
        center: true,
        duration: 30000,
        showClose: true,
        customClass: 'ceshieee',
        useHTMLString: true,
        onClose: () => {
          console.log('closed');
        },
        message:
          '<hr><p>这是一条消息提示这是一条消息提示这是一条消息提示这是一条消息提示这是一条消息提示这是一条消息提示这是一条消息提示这是一条消息提示这是一条消息提示这是一条消息提示这是一条消息提示这是一条消息提示</p>',
      });
    },
    showMessage2() {
      console.log('showMessage2');
      this.msg = this.$message({
        message:
          '提示这是一条消息提示这是一条消息提示这是一条消息提示这是一条消息提示这是一条提示这是一条消息提示这是一条消息提示这是一条消息提示这是一条消息提示这是一条',
        showClose: true,
        type: 'warning',
      });
    },
    clear2() {
      console.log('clear2');
      this.msg.close();
    },
    showMessage3() {
      this.$message({
        message: 'dwqdsad',
        duration: 30000,
        showClose: true,
        type: 'success',
      });
    },
    showMessage4() {
      this.$message({
        message: 'dwqdsad',
        duration: 30000,
        showClose: true,
        iconClass: 'pyui-icons py-icon-code',
        type: 'success',
      });
    },
  },
};
</script>
<style lang="scss" scoped>
h1 {
  margin: 50px 20%;
}
</style>
