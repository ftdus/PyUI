<template>
  <transition name="fade">
    <div :class="classes" ref="loaderBar" v-show="show" :style="styles"/>
  </transition>
</template>

<script>
const prefixCls = 'py-loading-bar';
export default {
  name: 'PyLoadingBar',
  data() {
    return {
      progress: 0,
      status: 'success',
      show: false,
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
      return `width: ${this.progress}%;`;
    },
  },
  watch: {
    progress(n) {
      if (Object.prototype.toString.call(n) !== '[object Number]') {
        this.progress = 0;
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
