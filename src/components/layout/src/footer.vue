<template>
  <footer :class="wrapClasses" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
// 组件class前缀
const prefixCls = 'py-footer';
export default {
  name: 'PyFooter',
  props: {
    height: {
      type: String,
      default: '60px',
    },
  },
  computed: {
    wrapClasses() {
      return `${prefixCls}`;
    },
  },
};
</script>
