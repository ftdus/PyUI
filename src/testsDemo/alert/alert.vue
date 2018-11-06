<template>
  <div class="page">
    <h2>基础用法</h2>
    <section>
      <py-alert type="info">默认提示信息</py-alert>
      <py-alert type="success">成功提示信息</py-alert>
      <py-alert type="warning">警告提示信息</py-alert>
      <py-alert type="error">失败提示信息</py-alert>
    </section>

    <h2>自定义关闭按钮</h2>
    <section>
      <py-alert type="info" :closable="false">这是默认alert</py-alert>
      <py-alert type="success">这是success alert</py-alert>
      <py-alert type="warning" close-text="关闭">这是warning alert</py-alert>
      <py-alert type="error" close-text="我知道了">这是error alert</py-alert>
    </section>

    <h2>带标题</h2>
    <section>
      <py-alert type="info" title="提示">这是默认alert</py-alert>
      <py-alert type="success" title="提示" :is-center="true">这是success alert</py-alert>
      <py-alert type="warning" close-text="关闭" :is-center="true">这是warning alert</py-alert>
    </section>

    <h2>带图标title</h2>
    <section>
      <py-alert type="info" title="提示" :title-icon="true">
        这是默认alert
      </py-alert>
      <py-alert type="success" title="提示" :title-icon="true">这是success alert</py-alert>
      <py-alert type="warning" title="提示" :title-icon="true">这是warning alert</py-alert>
      <py-alert type="error" title="提示" :title-icon="true">这是error alert</py-alert>
    </section>

    <h2>带图标文字</h2>
    <section>
      <py-alert type="info" title="提示" :show-icon="true">这是默认alert</py-alert>
      <py-alert type="success" title="提示" :show-icon="true">这是success alert</py-alert>
      <py-alert type="warning" title="提示" :show-icon="true">这是warning alert</py-alert>
      <py-alert type="error" title="提示" :show-icon="true">
        <p>发生错误了</p>
        <p>请尽快解决</p>
      </py-alert>
    </section>

    <h2>不同大小</h2>
    <section>
      <py-alert type="info">默认字号</py-alert>
      <py-alert type="info" size="medium">medium字号</py-alert>
      <py-alert type="info" size="large">large字号</py-alert>
    </section>

    <h2>关闭alert事件</h2>
    <section>
      <py-alert type="info" @close="closeAlert">关闭alert</py-alert>
    </section>
  </div>
</template>

<script>
import PyAlert from '@/components/alert';

export default {
  components: {
    'py-alert': PyAlert,
  },
  methods: {
    closeAlert() {
      console.log('您正在关闭alert');
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  padding: 20px;
  h2 {
    margin-bottom: 10px;
  }
  section {
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid #dcdfe6;
    & > div {
      margin-bottom: 15px;
    }
  }
  button {
    padding: 4px 10px;
    border: 1px solid #f1f1f1;
    margin-bottom: 10px;
    cursor: pointer;
  }
}
</style>
