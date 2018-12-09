<template>
  <div class="contains">
    <h3>进度条基本用法：</h3>
    <div class="py-progress-box">
      <div class="progress-div"><py-progress :percentage="0"></py-progress></div>
      <div class="progress-div"><py-progress :percentage="24"></py-progress></div>
    </div>

    <h3>带icon进度条，三种状态：</h3>
    <div class="py-progress-box">
      <div class="progress-div"><py-progress :percentage="100" status="success"></py-progress></div>
      <div class="progress-div"><py-progress :percentage="75" status="warning"></py-progress></div>
      <div class="progress-div"><py-progress :percentage="50" status="danger"></py-progress></div>
    </div>

    <h3>bar-height属性调节进度条高度：</h3>
    <div class="py-progress-box">
      <div class="progress-div"><py-progress :percentage="0" :bar-height="18"></py-progress></div>
      <div class="progress-div"><py-progress :percentage="24" :bar-height="18"></py-progress></div>
      <div class="progress-div">
        <py-progress :percentage="100" :bar-height="18" status="success"></py-progress>
      </div>
      <div class="progress-div">
        <py-progress :percentage="75" :bar-height="18" status="warning"></py-progress>
      </div>
      <div class="progress-div">
        <py-progress :percentage="50" :bar-height="18" status="danger"></py-progress>
      </div>
    </div>

    <h3>background-color属性自定义背景颜色：</h3>
    <div class="py-progress-box">
      <div class="progress-div">
        <py-progress :percentage="30" background-color="#8e71c7"></py-progress>
      </div>
      <div class="progress-div">
        <py-progress :percentage="45" background-color="rgb(15, 172, 243)"></py-progress>
      </div>
      <div class="progress-div">
        <py-progress :percentage="67" background-color="#4CAF50"></py-progress>
      </div>
      <div class="progress-div">
        <py-progress :percentage="85" background-color="rgb(249, 229, 50)"></py-progress>
      </div>
    </div>

    <h3>text-inside属性使数字显示在进度条内部：</h3>
    <div class="py-progress-box">
      <div class="progress-div">
        <py-progress :percentage="0" :text-inside="true" :bar-height="18"></py-progress>
      </div>
      <div class="progress-div">
        <py-progress :percentage="24" :text-inside="true" :bar-height="18"></py-progress>
      </div>
      <div class="progress-div">
        <py-progress
          :percentage="100"
          :text-inside="true"
          :bar-height="18"
          status="success"
        ></py-progress>
      </div>
      <div class="progress-div">
        <py-progress
          :percentage="75"
          :text-inside="true"
          :bar-height="18"
          status="warning"
        ></py-progress>
      </div>
      <div class="progress-div">
        <py-progress
          :percentage="50"
          :text-inside="true"
          :bar-height="18"
          status="danger"
        ></py-progress>
      </div>
    </div>
  </div>
</template>

<script>
import PYProgress from '../../components/progress';

export default {
  components: {
    'py-progress': PYProgress,
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
$prefixCls: 'py-progress';
.contains {
  padding: 10px;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 20px;
  h3 {
    margin-top: 20px;
    margin-bottom: 10px;
  }
}

.#{$prefixCls} {
  &-box {
    padding: 10px;
    border: 1px solid #eee;
    .progress-div {
      margin-top: 13px;
    }
  }
}
</style>
