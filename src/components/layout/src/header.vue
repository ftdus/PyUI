<template>
  <header :class="wrapClasses" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
// 组件class前缀
const prefixCls = 'py-header';
export default {
  name: 'PyHeader',
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
