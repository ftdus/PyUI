<template>
  <aside :class="wrapClasses" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
// 组件class前缀
const prefixCls = 'py-sider';
export default {
  name: 'PySider',
  props: {
    width: {
      type: String,
      default: '300px',
    },
  },
  computed: {
    wrapClasses() {
      return `${prefixCls}`;
    },
  },
};
</script>
