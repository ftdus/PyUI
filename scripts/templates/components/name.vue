<template>
  <div :class="classes"></div>
</template>

<script>
// 组件class前缀
const prefixCls = '{{__py_component_class_name__}}';

export default {
  name: '{{__py_component_name__}}',
  computed: {
    classes() {
      return `${prefixCls}`;
    },
  },
};
</script>
