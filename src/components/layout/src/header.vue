<template>
  <div :class="wrapClasses">
    <slot></slot>
  </div>
</template>

<script>
// 组件class前缀
const prefixCls = 'py-layout';
export default {
  name: 'PyContent',
  computed: {
    wrapClasses() {
      return `${prefixCls}-content`;
    },
  },
};
</script>
