<template>
  <div :class="classes" class="clearfix">
    <slot></slot>
  </div>
</template>

<script>
const prefixCls = 'py-button-group';

export default {
  name: 'PyButtonGroup',
  data() {
    return {};
  },
  computed: {
    classes() {
      return [`${prefixCls}`];
    },
  },
};
</script>
