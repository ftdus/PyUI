<template>
  <main class="py-content">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: 'PyContent',
  componentName: 'PyContent',
};
</script>

<style lang="scss" scoped>
@import '@/base/themes.scss';

$prefixCls: 'py-content';
</style>
