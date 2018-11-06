<template>
  <div :class="classes">
    <span v-if="hasSlot" :class="slotClasses">
      <slot></slot>
    </span>
  </div>
</template>

<script>
const oneOf = function(value, validList) {
  for (let i = 0; i < validList.length; i += 1) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
};
const prefixCls = 'py-divider';
const elementSeparator = '__';
const modifierSeparator = '--';

export default {
  name: prefixCls,
  props: {
    type: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return oneOf(value, ['horizontal', 'vertical']);
      },
    },
    orientation: {
      type: String,
      default: 'center',
      validator(value) {
        return oneOf(value, ['left', 'right', 'center']);
      },
    },
    dashed: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    hasSlot() {
      return !!this.$slots.default;
    },
    classes() {
      return [
        `${prefixCls}`,
        `${prefixCls}${elementSeparator}${this.type}`,
        {
          [`${prefixCls}${elementSeparator}withText${modifierSeparator}${this.orientation}`]: this
            .hasSlot,
          [`${prefixCls}${modifierSeparator}dashed`]: !!this.dashed,
        },
      ];
    },
    slotClasses() {
      return [`${prefixCls}${modifierSeparator}innerText`];
    },
  },
};
</script>
