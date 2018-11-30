<template>
  <transition name="fade">
    <div :class="classes" ref="loaderBar" v-show="percent>0" :style="styles"/>
  </transition>
</template>

<script>
const prefixCls = 'py-loading-bar';
export default {
  name: 'PyLoadingBar',
  data() {
    return {
      percent: 0,
      status: 'primary',
    };
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        { [`${prefixCls}--success`]: this.status === 'success' },
        { [`${prefixCls}--primary`]: this.status === 'primary' },
        { [`${prefixCls}--error`]: this.status === 'error' },
      ];
    },
    styles() {
      return `width: ${this.percent}%;`;
    },
  },
  watch: {
    percent(n) {
      if (Object.prototype.toString.call(n) !== '[object Number]') {
        this.percent = 0;
        console.error(`PYUI---${n} Not a valid Number`);
      }
    },
    color(n) {
      if (Object.prototype.toString.call(n) !== '[object String]') {
        this.color = '#f71212';
        console.error(`PYUI---${n} Not a valid String`);
      }
    },
  },
};
</script>
