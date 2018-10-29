<template>
  <main :class="wrapClasses">
    <slot></slot>
  </main>
</template>

<script>
// 组件class前缀
const prefixCls = 'py-content';
export default {
  name: 'PyContent',
  computed: {
    wrapClasses() {
      return `${prefixCls}`;
    },
  },
};
</script>
