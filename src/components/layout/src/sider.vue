<template>
  <aside class="py-sider" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: 'PySider',
  componentName: 'PySider',
  props: {
    width: {
      type: String,
      default: '300px',
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/base/themes.scss';

$prefixCls: 'py-sider';
</style>
