<template>
  <div :class="classes"></div>
</template>

<script>
// 组件class前缀
const prefixCls = 'py-circle';

export default {
  name: 'PyCircle',
  computed: {
    classes() {
      return `${prefixCls}`;
    },
  },
};
</script>
