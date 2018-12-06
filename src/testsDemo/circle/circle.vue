<template>
  <div class="py-test-demo">
    <h1>Circle 进度环</h1>
    <h2>基本用法</h2>
    <p>使用：`&lt;py-circle&gt;&lt;/py-circle&gt;`</p>
    <section>
      <py-circle></py-circle>
      <py-circle :percent="80">
        <span class="demo-Circle-inner" style="font-size:24px">80%</span>
      </py-circle>
      <py-circle :percent="100" stroke-color="#5cb85c"> </py-circle>
      <py-circle :percent="35" stroke-color="#ff5500">
        <py-icon type="close" size="60" color="#ff5500"></py-icon>
      </py-circle>

      <py-circle :percent="percent" :stroke-color="color">
        <Icon v-if="percent == 100" type="ios-checkmark" size="60" style="color:#5cb85c"></Icon>
        <span v-else style="font-size:24px">{{ percent }}%</span>
      </py-circle>
    </section>
  </div>
</template>

<script>
import PyCircle from '../../components/circle';
import PyIcon from '../../components/icon';

export default {
  components: {
    'py-circle': PyCircle,
    'py-icon': PyIcon,
  },
  data() {
    return {
      percent: 0,
    };
  },
  computed: {
    color() {
      let color = '#2db7f5';
      if (this.percent === 100) {
        color = '#5cb85c';
      }
      return color;
    },
  },
  methods: {
    add() {
      if (this.percent >= 100) {
        return false;
      }
      this.percent += 10;
      return true;
    },
    minus() {
      if (this.percent <= 0) {
        return false;
      }
      this.percent -= 10;
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
.py-test-demo {
  margin-left: 20px;
  margin-top: 20px;
}
</style>
