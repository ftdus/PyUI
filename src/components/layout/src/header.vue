<template>
  <header class="py-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'PyHeader',
  componentName: 'PyHeader',
  props: {
    height: {
      type: String,
      default: '60px',
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/base/themes.scss';

$prefixCls: 'py-header';
</style>
