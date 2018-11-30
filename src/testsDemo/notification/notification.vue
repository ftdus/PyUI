<template>
  <div class='demo'>
    <h2>Notification 通知</h2>
    <div>悬浮出现在页面角落，显示全局的通知提醒消息。</div>
    <h3>基本用法</h3>
    <div class="py-button-box">
      <py-button @click="open">可自动关闭</py-button>
      <py-button @click="open2">不会自动关闭</py-button>
    </div>
    <h3>不同类型的Notication，带有icon，用来显示「成功、警告、消息、错误」类的系统消息</h3>
    <div class="py-button-box">
      <py-button @click="open3">成功</py-button>
      <py-button @click="open4">警告</py-button>
      <py-button @click="open5">消息</py-button>
      <py-button @click="open6">错误</py-button>
      <py-button @click="open14">自定义图标</py-button>
    </div>
    <h3>自定义弹出位置</h3>
    <div class="py-button-box">
      <py-button @click="open7">右上角</py-button>
      <py-button @click="open8">右下角</py-button>
      <py-button @click="open9">左下角</py-button>
      <py-button @click="open10">左上角</py-button>
    </div>
    <h3>带有偏移</h3>
    <div class="py-button-box">
      <py-button @click="open11">偏移的消息</py-button>
    </div>
    <h3>使用 HTML 片段</h3>
    <div class="py-button-box">
      <py-button @click="open12">使用 HTML 片段</py-button>
    </div>
    <h3>隐藏关闭按钮</h3>
    <div class="py-button-box">
      <py-button @click="open13">隐藏关闭按钮</py-button>
    </div>
  </div>
</template>

<script>
import PYButton from '../../components/button';

export default {
  components: {
    'py-button': PYButton,
  },
  methods: {
    open() {
      this.$notify({
        title: '标题名称',
        message: '这是会自动关闭的消息,默认4.5s后自动关闭',
      });
    },
    open2() {
      this.$notify({
        title: '提示',
        message: '这是一条不会自动关闭的消息',
        duration: 0,
      });
    },
    open3() {
      this.$notify({
        title: '成功',
        message: '这是一条成功的提示消息',
        type: 'success',
      });
    },

    open4() {
      this.$notify({
        title: '警告',
        message: '这是一条警告的提示消息',
        type: 'warning',
      });
    },

    open5() {
      this.$notify.info('这是一条直接传入字符串的提示消息');
    },

    open6() {
      this.$notify.error({
        title: '错误',
        message: '这是一条错误的提示消息',
      });
    },
    open7() {
      this.$notify({
        title: '自定义位置',
        message: '右上角弹出的消息',
      });
    },
    open8() {
      this.$notify({
        title: '自定义位置',
        message: '右下角弹出的消息',
        position: 'bottom-right',
      });
    },
    open9() {
      this.$notify({
        title: '自定义位置',
        message: '左下角弹出的消息',
        position: 'bottom-left',
      });
    },
    open10() {
      this.$notify({
        title: '自定义位置',
        message: '左上角弹出的消息',
        position: 'top-left',
      });
    },
    open11() {
      this.$notify({
        title: '偏移',
        message: '这是一条带有偏移的提示消息',
        offset: 100,
      });
    },
    open12() {
      this.$notify({
        title: 'HTML 片段',
        dangerouslyUseHTMLString: true,
        message: '<strong>这是 <i>HTML</i> 片段</strong>',
      });
    },
    open13() {
      this.$notify.success({
        title: 'Info',
        message: '这是一条没有关闭按钮的消息',
        showClose: false,
      });
    },
    open14() {
      this.$notify({
        title: 'Info',
        message: '这是一条没有关闭按钮的消息',
        iconClass: ['pyui-icons', 'py-icon-heart-fill'],
      });
    },
  },
};
</script>

<style lang='scss'>
.demo {
  padding: 10px;
  margin-bottom: 20px;
  h3 {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .py-button {
    margin-left: 10px;
  }
  .warn-text {
    color: red;
  }
}
.py-button {
  &-box {
    border: 1px solid #ebedf0;
    padding: 42px 24px 50px;
    color: rgba(0, 0, 0, 0.65);
  }
}
</style>
