<template>
  <div :class="[wrapClasses , shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow']">
    <div :class="headerClasses" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div :class="bodyClasses" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// 组件class前缀
const prefixCls = 'py-card';
export default {
  name: 'PyCard',
  props: {
    header: {},
    bodyStyle: {},
    shadow: {
      type: String,
    },
  },
  computed: {
    wrapClasses() {
      return `${prefixCls}`;
    },
    headerClasses() {
      return `${prefixCls}__header`;
    },
    bodyClasses() {
      return `${prefixCls}__body`;
    },
  },
};
</script>
