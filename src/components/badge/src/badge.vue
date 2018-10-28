<template>
  <div :class="classes">
    <slot></slot>
    <sup
      v-show="!hidden && (value || value == 0 || isDot)"
      :class="dotClass"
      v-text="valueDot"
    ></sup>
  </div>
</template>

<script>
const isNumber = num => typeof num === 'number';
// 组件class前缀
const prefixCls = 'py-badge';

export default {
  name: prefixCls,
  props: {
    type: {
      type: String,
      default: 'default',
    },
    value: [Number, String],
    hidden: {
      type: Boolean,
      default: false,
    },
    isDot: {
      type: Boolean,
      default: false,
    },
    max: {
      type: Number,
      default: 99,
    },
    className: String,
  },
  computed: {
    valueDot() {
      if (this.isDot) return '';
      if (isNumber(this.value)) {
        return this.value > this.max ? `${this.max}+` : this.value;
      }
      return this.value;
    },
    dotClass() {
      const baseDotStyle = `${prefixCls}__dot`;
      return [
        baseDotStyle,
        this.$slots.default && `${baseDotStyle}--fixed`,
        {
          [`${prefixCls}__count`]: this.isDot,
        },
        `${baseDotStyle}--${this.type}`,
        !!this.className && `${this.className}`,
      ];
    },
    classes() {
      return `${prefixCls}`;
    },
  },
};
</script>
