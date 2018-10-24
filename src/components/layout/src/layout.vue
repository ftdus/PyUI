<template>
  <section class="py-layout">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'PyLayout',
  componentName: 'PyLayout',
  props: {
    direction: String,
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
@import '@/base/themes.scss';

$prefixCls: 'py-layout';
</style>
