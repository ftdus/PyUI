<template>
  <div :class="[classes, vertical ? `${classes}--vertical` : `${classes}--horizontal`]">
    <slot></slot>
  </div>
</template>
<script>
// 组件class前缀
const prefixCls = 'py-radio-group';

export default {
  name: 'PyRadioGroup',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {},
    vertical: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'radio',
    },
    // 当type为button时有用，'' / medium / small / mini
    size: {
      type: String,
      default: '',
    },
  },
  computed: {
    classes() {
      return `${prefixCls}`;
    },
  },
  created() {
    this.$on('update-group', value => {
      this.$emit('change', value);
      this.$emit('input', value);
    });
  },
};
</script>
